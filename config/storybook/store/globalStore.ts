interface GlobalStoreState {
  count: number;
}

const store = {
  state: {
    count: 0,
  } as GlobalStoreState,
  mutations: {
    increment(state: GlobalStoreState) {
      state.count++;
    },
  },
};

export { store };
