import INITIAL_STORE from './initialStore.js';
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default {
  increaseSynchronously: (_payload, { points }) => ({
		points: points + 1
	}),
  increaseAsynchronously: async (_payload, { points }) => {
    await sleep(2000);
    return {
      points: points + 2,
    };
  },
	clickTab: (index) => ({ activeTab: index }),
	changeText: (payload) => ({ text: payload }),
	increasePoints: (_payload, { points }) => ({ points: points + 1 }),
	decreasePoints: (_payload, { points }) => ({ points: points - 1 }),
	changeX: (payload, { coords }) => ({ coords: { ...coords, x: coords.x + payload }}),
	changeY: (payload, { coords }) => ({ coords: { ...coords, y: coords.y + payload }}),
	chain: async (_payload, _store, { secondChain }) => {
		const { points } = await secondChain();
		return {
			points: points + 5
		};
	},
	secondChain: async (_payload, _store, { increaseAsynchronously }) => increaseAsynchronously(),
	resetAll: () => INITIAL_STORE
};
