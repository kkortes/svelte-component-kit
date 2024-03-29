<script>
  const styles = (styles, style = '') => {
    const combined = ((styles, style) => ({
      style: `${Object.entries(styles)
        .reduce(
          (a, [property, value]) =>
            ![false, undefined].includes(value) ? [...a, `${property}: ${value};`] : a,
          [],
        )
        .join(' ')}${style}`,
    }))(styles, style);
    return combined?.style ? combined : {};
  };

  export let direction = 'up';
  export let parent = undefined;
  export let width = 200;
  export let margin = '0 0 0 0';

  let tooltipRef;
  let tooltipStyles;
  let triangleStyles;
  let horizontalBleed;
  let verticalBleed;

  tooltipStyles = styles({
    width: width && `${width}px`,
  });

  $: [marginTop, marginRight, marginBottom, marginLeft] = margin
    .split(' ')
    .reduce((a, value) => [...a, parseInt(value, 10)], []);

  $: {
    if (tooltipRef && parent) {
      const vertical = direction === 'up' || direction === 'down';
      const dirY = direction === 'up' ? 1 : -1;
      const dirX = direction === 'left' ? 1 : -1;

      horizontalBleed = 0;
      verticalBleed = 0;

      const { innerWidth, innerHeight } = window;
      const { clientWidth: childW, clientHeight: childH } = tooltipRef;
      const {
        left: parentX,
        top: parentY,
        width: parentW,
        height: parentH,
      } = parent.getBoundingClientRect();

      const horizontalCheck = parentX + parentW / 2 - (parentW / 2 + childW) * dirX;

      const leftCheck = vertical ? parentX + parentW / 2 - childW / 2 : horizontalCheck;
      if (leftCheck < 0 + marginLeft) {
        horizontalBleed = leftCheck - marginLeft;
      }

      const rightCheck = vertical ? parentX + parentW / 2 + childW / 2 : horizontalCheck;

      if (rightCheck > innerWidth - marginRight) {
        horizontalBleed = rightCheck - (innerWidth - marginRight);
      }

      const verticalCheck = parentY + parentH / 2 - (parentH / 2) * dirY - childH * dirY;
      const topCheck = vertical ? verticalCheck : parentY + parentH / 2 - childH / 2;
      if (topCheck < 0 + marginTop) {
        verticalBleed = topCheck - marginTop;
      }

      const bottomCheck = vertical ? verticalCheck : parentY + parentH / 2 + childH / 2;
      if (bottomCheck > innerHeight - marginBottom) {
        verticalBleed = bottomCheck - (innerHeight - marginBottom);
      }

      const verticalOffset = `calc(${vertical ? 100 : 50}% + ${verticalBleed * dirY}px)`;
      const horizontalOffset = `calc(${vertical ? 50 : 100}% + ${horizontalBleed * dirX}px)`;

      tooltipStyles = styles({
        top: dirY < 0 ? verticalOffset : 'auto',
        right: dirX > 0 ? horizontalOffset : 'auto',
        bottom: dirY > 0 ? verticalOffset : 'auto',
        left: dirX < 0 ? horizontalOffset : 'auto',
        transform: `translate(${vertical ? '-50%, 0' : '0, -50%'})`,
        width: `${width}px`,
      });

      const offset = `calc(50% + ${vertical ? horizontalBleed : verticalBleed}px)`;

      triangleStyles = styles({
        top: !vertical ? offset : dirY < 0 ? 0 : 'auto',
        right: dirX > 0 ? 0 : 'auto',
        bottom: dirY > 0 ? 0 : 'auto',
        left: vertical ? offset : dirX < 0 ? 0 : 'auto',
        transform: `translate(${50 * dirX}%, ${50 * dirY}%) rotate(45deg)`,
      });
    }
  }
</script>

<div class="tooltip {direction}" {...tooltipStyles}>
  <div class="triangle" {...triangleStyles} />
  <div class="inner" bind:this={tooltipRef}>
    <slot />
  </div>
</div>

<style>
  .tooltip {
    position: absolute;
    transition: opacity 0.15s ease;
  }
  .inner {
    position: relative;
  }
  .up,
  .down {
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
  }
  .up {
    bottom: 100%;
  }
  .down {
    top: 100%;
  }
  .left,
  .right {
    top: 50%;
    transform: translate(0, -50%);
  }
  .left {
    right: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .right {
    left: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .triangle {
    content: '';
    width: 20px;
    height: 20px;
    background: black;
    position: absolute;
  }
  .up .triangle,
  .down .triangle {
    left: 50%;
  }
  .up .triangle {
    bottom: 0;
    transform: translate(-50%, 50%) rotate(45deg);
  }
  .down .triangle {
    top: 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  .left .triangle,
  .right .triangle {
    top: 50%;
  }
  .left .triangle {
    right: 0;
    transform: translate(50%, -50%) rotate(45deg);
  }
  .right .triangle {
    left: 0;
    transform: translate(-50%, -50%) rotate(45deg);
  }
</style>
