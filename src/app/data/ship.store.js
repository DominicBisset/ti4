import { AsyncStore } from './async.store.js'

let store = new AsyncStore({systems:[]});
store.load('./data/ships.json', 'ships');
export default store;