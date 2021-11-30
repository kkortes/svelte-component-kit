import INITIAL_STORE from '$lib/utils/store/initialStore';
const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export default {
  increaseAsynchronously: async (_payload, { points }) => {
    await sleep(2000);
    return {
      points: points + 2,
    };
  },
  toggleSidebarOpen: (_payload, { sidebarOpen }) => ({
    sidebarOpen: !sidebarOpen,
  }),
  pickLayout: (index) => ({ activeLayout: index }),
  resetAll: () => INITIAL_STORE,
};
