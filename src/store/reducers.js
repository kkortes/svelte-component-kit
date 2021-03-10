import INITIAL_STORE from './initialStore.js';
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default {
  increaseAsynchronously: async (_payload, { points }) => {
    await sleep(2000);
    return {
      points: points + 2,
    };
  },
	toggleSidebarOpen: (_payload, { sidebarOpen }) => ({ sidebarOpen: !sidebarOpen }),
	clickTab: (index) => ({ activeTab: index }),
	pickLayout: (index) => ({ activeLayout: index }),
	resetAll: () => INITIAL_STORE
};
