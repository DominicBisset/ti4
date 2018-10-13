import { Store } from 'svelte/store.js'

class TechStore extends Store{
    async loadTechs(){
        console.log("Loading techs");
        let response = await fetch('./data/technologies.json');
        let data = await response.json();
        console.log("loaded techs", data.techs);
        this.set({ 
            techs: data.techs.map(t => {
                let p = t.prerequisites;
                t.prerequisiteCount = (p.r ||0) + (p.g ||0) + (p.b ||0) + (p.y ||0);
                return t;
            })
        });
    }
}
let store = new TechStore({techs:[]});
store.loadTechs();
window['store_techs'];
export default store;