import constants from "./constants";
const { HEX_WIDTH, HEX_HEIGHT } = constants;

const drawCoordinates = ({ x, y, drawX, drawY }, ctx) => {
  const size = 16;
  ctx.font = `${size}px Arial`;
  ctx.fillStyle = "#000";
  ctx.textAlign = "center";
  ctx.fillText(`${x},${y}`, drawX, drawY + size * 0.35);

  // ctx.fillText(
  //   `${Math.floor(drawX)},${Math.floor(drawY)}`,
  //   drawX,
  //   drawY + size * 0.35 + size
  // );
};

const drawHexagon = ({ corners }, ctx) => {
  ctx.shadowColor = "black";
  ctx.shadowBlur = 1.5;

  ctx.beginPath();
  ctx.moveTo(corners[0][0], corners[0][1]);
  corners.forEach(([x, y]) => {
    ctx.lineTo(x, y);
  });
  ctx.closePath();

  ctx.fillStyle = "lightblue";
  ctx.fill();

  ctx.shadowBlur = 0;
};

const drawHexagonSpriteArea = ({ drawX, drawY }, ctx) => {
  const x = drawX - HEX_WIDTH / 2;
  const y = drawY - HEX_HEIGHT / 2;

  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + HEX_WIDTH, y);
  ctx.lineTo(x + HEX_WIDTH, y + HEX_HEIGHT);
  ctx.lineTo(x, y + HEX_HEIGHT);
  ctx.closePath();

  ctx.fillStyle = "#e0e0ff";
  ctx.fill();
};

export { drawHexagon, drawHexagonSpriteArea, drawCoordinates };
