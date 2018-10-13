import { AsyncStore } from './async.store.js'

let store = new AsyncStore({systems:[]});
store.load('./data/systems.json', 'systems');
export default store;