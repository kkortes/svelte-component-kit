const wrapBasedOnType = (value) =>
  typeof value !== "string" ? `{${value}}` : `"${value}"`;

const generateStyles = (styles) =>
  Object.entries(styles)
    .reduce((a, [property, value]) => [...a, `${property}: ${value};`], [])
    .join(" ");

const formatProps = (props) =>
  props.reduce(
    (a, { name, defaultValue }) =>
      `${a} ${name}=${wrapBasedOnType(defaultValue)}\n`,
    ""
  );

const intToArray = (int) =>
  Array(int)
    .fill(0)
    .map((_, i) => i);

export { generateStyles, formatProps, intToArray };
