import { intToArray } from "$lib/js/helpers";
import produce from "immer";
import lodash from "lodash/fp";
import constants from "./constants";

const { isEmpty, range } = lodash;
const { BLEEDING_TILES, HEX_HEIGHT, HEX_WIDTH } = constants;

const getHexagonCorners = (drawX, drawY) => {
  const x = drawX;
  const y = drawY - HEX_HEIGHT * 0.5;

  return [
    [x, y],
    [x + HEX_WIDTH * 0.5, y + HEX_HEIGHT * 0.25],
    [x + HEX_WIDTH * 0.5, y + HEX_HEIGHT * 0.75],
    [x, y + HEX_HEIGHT],
    [x - HEX_WIDTH * 0.5, y + HEX_HEIGHT * 0.75],
    [x - HEX_WIDTH * 0.5, y + HEX_HEIGHT * 0.25],
  ];
};

const ensureCenterAndFill = (width, height) => {
  const columnFit = Math.floor(width / HEX_WIDTH) + BLEEDING_TILES * 2;
  const columns = columnFit % 2 ? columnFit : columnFit - 1;

  const rowFit = Math.floor(height / HEX_WIDTH) + BLEEDING_TILES * 2;
  const rows = rowFit % 2 ? rowFit : rowFit - 1;

  return {
    columns: intToArray(columns),
    rows: intToArray(rows),
  };
};

const makeTile = (x, y) => ({
  x,
  y,
  z: y,
});

const makeInitialTiles = (columns, rows, nX, nY) =>
  columns
    .map((columnIndex) =>
      rows.map((rowIndex) => {
        const column = columnIndex - (columns.length - 1) / 2;
        const row = rowIndex - (rows.length - 1) / 2;

        const x = column + nX;
        const y = row + nY;

        return makeTile(x, y);
      })
    )
    .flat()
    .reduce((a, tile) => ({ ...a, [`${tile.x}_${tile.y}`]: tile }), {});

const regenerate = (tiles, columns, rows, oX, oY, nX, nY) =>
  isEmpty(tiles)
    ? makeInitialTiles(columns, rows, nX, nY)
    : produce(tiles, (tempTiles) => {
        let lesserHalf, greaterHalf;
        lesserHalf = Math.floor(columns.length / 2);
        greaterHalf = Math.ceil(columns.length / 2);

        const extra = (columns.length - rows.length) / 2;

        if (oX !== nX) {
          range(nY - lesserHalf + extra, nY + greaterHalf - extra).forEach(
            (nY) => {
              const addX = nX - (oX > nX ? lesserHalf : -lesserHalf);

              tempTiles[`${addX}_${nY}`] = makeTile(addX, nY);

              const removeX = nX + (oX > nX ? greaterHalf : -greaterHalf);
              delete tempTiles[`${removeX}_${nY}`];
            }
          );
        }

        lesserHalf = Math.floor(rows / 2);
        greaterHalf = Math.ceil(rows / 2);

        if (oY !== nY) {
          range(nX - lesserHalf - extra, nX + greaterHalf + extra).forEach(
            (nX) => {
              const addY = nY - (oY > nY ? lesserHalf : -lesserHalf);
              tempTiles[`${nX}_${addY}`] = makeTile(nX, addY);

              const removeY = nY + (oY > nY ? greaterHalf : -greaterHalf);
              delete tempTiles[`${nX}_${removeY}`];
            }
          );
        }

        if (oY !== nY && oX !== nX) {
          const gh = greaterHalf + extra;
          const removeX = nX + (oX > nX ? gh : -gh);
          const removeY = nY + (oY > nY ? greaterHalf : -greaterHalf);

          delete tempTiles[`${removeX}_${removeY}`];
        }
      });

const applyMeta = (t, nX, nY, xOffset, yOffset) =>
  produce(t, (tiles) =>
    Object.entries(tiles).forEach(([tile, { x, y }]) => {
      const drawX =
        (x - nX) * HEX_WIDTH + xOffset + ((y - nY) % 2 ? HEX_WIDTH / 2 : 0);
      const drawY = (y - nY) * HEX_HEIGHT * 0.74 + yOffset;
      tiles[tile].drawX = drawX;
      tiles[tile].drawY = drawY;
      tiles[tile].corners = getHexagonCorners(drawX, drawY);
    })
  );

export {
  ensureCenterAndFill,
  makeTile,
  makeInitialTiles,
  regenerate,
  applyMeta,
};
