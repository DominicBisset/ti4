import { AsyncStore } from './async.store.js'

const storeName = 'races';
let store = new AsyncStore({[storeName]:[]});
store.load('./data/races.json', storeName);
window['store_'+storeName]
export default store;