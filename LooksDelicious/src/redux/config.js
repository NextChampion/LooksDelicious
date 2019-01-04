import Immutable from 'immutable';

export const version = {
  default: Immutable.fromJS({
    test: 1,
  }),
  persist: true,
  actions: {
    SET_VERSION: {
      reducer: (state, { payload }) => state.merge(payload),
    },
  },
};

export const dishes = {
  default: Immutable.fromJS({}),
  persist: true,
  actions: {
    UPDATE_DISHES_WITH_ID: {
      inputs: ['id', 'list'],
      reducer: (state, { payload }) => {
        console.log(state, payload);
        return state.mergeIn([payload.id], {
          list: payload.list,
          updatedAt: Date.now(),
        });
      },
    },
    CLEAR_DISHES: {
      reducer: () => Immutable.fromJS({}),
    },
  },
};

export const cook = {
  default: Immutable.fromJS({}),
  persist: true,
  actions: {
    UPDATE_COOK: {
      reducer: (state, { payload }) =>
        state.merge({
          list: Immutable.fromJS(payload),
          updatedAt: Date.now(),
        }),
    },
    CLEAR_COOK: {
      reducer: () => Immutable.fromJS({}),
    },
  },
};
