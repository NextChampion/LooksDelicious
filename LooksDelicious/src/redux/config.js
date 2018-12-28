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

export const counter = {
  default: Immutable.fromJS({
    count: 0,
  }),
  actions: {
    INCREMENT: {
      reducer: state => {
        const count = state.get('count');
        const newCount = count + 1;
        return state.merge({ count: newCount });
      },
    },
    DECREMENT: {
      reducer: state => {
        const count = state.get('count');
        const newCount = count - 1;
        return state.merge({ count: newCount });
      },
    },
  },
};
