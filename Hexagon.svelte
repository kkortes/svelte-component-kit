<script>
  export let color = 'lightgray';
  export let width = 100;

  const height = width * 0.576923076923077;
  const defaultColor = 'rgba(0, 0, 0, 0.25)';

  const hexagonStyle = (width, height) => `
    height: ${height * 2}px;
    width: ${width}px;
  `;
  const shapeStyle = (width, height, color = defaultColor) => `
    width: ${width}px;
    height: ${height}px;
    background-color: ${color};
    top: ${height / 2}px;
  `;
  const beforeStyle = (width, height, color = defaultColor) => `
    border-bottom: ${height / 2}px solid ${color};
    border-left: ${width / 2}px solid transparent;
    border-right: ${width / 2}px solid transparent;
  `;
  const afterStyle = (width, height, color = defaultColor) => `
    border-top: ${height / 2}px solid ${color};
    border-left: ${width / 2}px solid transparent;
    border-right: ${width / 2}px solid transparent;
  `;
</script>

<div class='hexagon' style={hexagonStyle(width, height)}>
  <div class='shape shadow' style={shapeStyle(width, height)}>
    <div class='before' style={beforeStyle(width, height)} />
    <div class='after' style={afterStyle(width, height)} />
  </div>
  <div class='shape' style={shapeStyle(width, height, color)}>
    <div class="before" style={beforeStyle(width, height, color)} />
    <div class="after" style={afterStyle(width, height, color)} />
  </div>
  <div class='content'>
    <slot />
  </div>
</div>

<style>
.hexagon {
  position: relative;
  display: inline-block;
}
.shape .before {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  bottom: 100%;
  left: 0;
}
.shape {
  position: absolute;
}
.shape .after {
  content: '';
  width: 0;
  position: absolute;
  left: 0;
  top: 100%;
}
.shape.shadow {
  transform: translate(1px, 1px);
}
.content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
