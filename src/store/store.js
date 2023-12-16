import { createStore } from 'redux';

const reducer = (state, action) => {
  if (action.type === 'increment') {
    return { ...state, total: action.payload };
  }
  if (action.type === 'creatUser')
    return { ...state, user: [...state.user, action.payload] };
  return state;
};

const store = createStore(reducer, { total: 0, user: ['Alex'] });

store.dispatch({ type: 'increment', payload: 10 });
store.dispatch({ type: 'creatUser', payload: 'Dima' });

console.log('store:>>', store.getState());
