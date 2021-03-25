import { writable, get } from "svelte/store";
import reducers from "$lib/js/store/reducers";
import INITIAL_STORE from "$lib/js/store/initialStore";
import { browser } from "$app/env";

const compare = (a, b) => {
  if (a > b) return +1;
  if (a < b) return -1;
  return 0;
};

const generateID = () =>
  `_${(
    Number(String(Math.random()).slice(2)) +
    Date.now() +
    Math.round(performance.now())
  ).toString(36)}`;

const LS =
  browser && window.localStorage.getItem("store")
    ? { ...JSON.parse(window.localStorage.getItem("store")) }
    : {};

const store = writable({ ...INITIAL_STORE, ...LS });
const queue = writable([]);

let runningID,
  actions = {};

const generateQueuePackage = (payload, reducer) => ({
  payload,
  reducer,
  actions: generateActions(),
  id: generateID(),
  timeOfExecution: new Date().getTime(),
  todo: true,
  result: undefined,
});

const generateActions = (topLevel = false) =>
  Object.entries(reducers).reduce(
    (a, [action, reducer]) =>
      reducer.constructor.name === "AsyncFunction"
        ? {
            ...a,
            [action]: async (payload) =>
              topLevel
                ? queueResolver(generateQueuePackage(payload, reducer))
                : reducer(payload, get(store), generateActions()),
          }
        : {
            ...a,
            [action]: (payload) => {
              let result;
              result = reducer(payload, get(store), generateActions());
              queueResolver(generateQueuePackage(payload, reducer));
              return result;
            },
          },
    {}
  );

queue.subscribe(async (items) => {
  if (items.length && !runningID) {
    const [{ reducer, payload, id, actions }] = items;
    runningID = id;

    const result = await reducer(payload, get(store), actions);

    store.update((ns) => ({ ...ns, ...get(store), ...result }));
    queue.update((items) =>
      items.map((item) =>
        item.id === id
          ? {
              ...item,
              todo: false,
              result,
            }
          : item
      )
    );
  }
});

const queueResolver = async (queuePackage) => {
  queue.update((q) =>
    [...q, queuePackage].sort((a, b) =>
      compare(a.timeOfExecution, b.timeOfExecution)
    )
  );
  let unsubscribe;
  const resolve = await new Promise((resolve) => {
    unsubscribe = queue.subscribe((items) => {
      const completedItem = items.find(
        ({ id, todo }) => id === queuePackage.id && !todo
      );

      if (completedItem) {
        queue.update((items) =>
          items.filter(({ id }) => id !== queuePackage.id)
        );
        runningID = undefined;
        resolve(completedItem.result);
      }
    });
  });

  unsubscribe();
  return resolve;
};

store.subscribe((s) => {
  const { pages, layout, ...rest } = s;
  if (browser) {
    window.localStorage.setItem("store", JSON.stringify(rest));
  }
  actions = generateActions(true);
});

export { store, actions, queue };
