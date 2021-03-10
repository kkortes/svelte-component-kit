<script>
  import Tooltip from 'svelte-component-kit/Tooltip.svelte';
  import { generateStyles } from '../helpers.js'
	
	const MODES = ['up', 'right', 'down', 'left']

  let activeMode = 'up';
	let parent;
	let randomDotStyles;
	let randomDotRef;
	
	let inlineBoxRef;
	let inlineBox;
	
	const toggleMode = () => {
		const index = MODES.indexOf(activeMode);
		activeMode = MODES[index + 1] ? MODES[index + 1] : MODES[0];
	}

  const mousemove = ({ clientX, clientY, shiftKey }) => {
		parent = randomDotRef;
		inlineBox = inlineBoxRef;
		if (!shiftKey) return;

		randomDotStyles = generateStyles({
			left: `${clientX}px`,
			top: `${clientY}px`
		})
	}
</script>

<h1>Tooltip.svelte</h1>

<div class="box floaty" bind:this={randomDotRef} style={randomDotStyles}>
  <span>Hover-<br />&<br />move me</span>
	<Tooltip parent={parent} direction={activeMode}>
		This tooltip contains a bunch of information and no matter where it is on the screen it will not leave the viewport!
	</Tooltip>
</div>

<svelte:window on:mousemove={mousemove} on:click={toggleMode} />

<style>
  .box {
		background: pink;
		width: 40px;
		height: 40px;
		box-shadow: 1px 1px 2px rgba(0,0,0,.15);
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		transform: translate(-50%, -50%);
	}
	.floaty {
		width: 80px;
		height: 80px;
		position: fixed;
		left: 50%;
		top: 50%;
	}
	span {
		pointer-events: none;
		color: #fff;
		font-weight: bold;
		text-transform: uppercase;
		line-height: 18px;
	}
	:global(.tooltip) {
		opacity: 0;
		pointer-events: none;
		line-height: 18px;
	}
	.box:hover :global(.tooltip) {
		opacity: .9;
		pointer-events: auto;
	}
</style>