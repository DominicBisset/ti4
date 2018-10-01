import { Store } from 'svelte/store.js'

class TechStore extends Store{
    async loadTechs(){
        console.log("Loading techs");
        let response = await fetch('./data/technologies.json');
        let data = await response.json();
        console.log("loaded techs", data.techs);
        this.set({ techs: data.techs });
        // let d = document;
        // let list = d.getElementById("techlist");
        // for(let key in data.techs){
        //     let tech = data.techs[key];
        //     console.log(tech)
        //     let div = d.createElement("div");
        //     div.setAttribute("class","techitem");
        //     let h3 = d.createElement("h3");
        //     h3.textContent  = tech.name;
        //     div.appendChild(h3);
        //     let splitText= tech.text.split('\n');
        //     for (let k2 in splitText ){
        //         let textFragment = splitText[k2];
        //         let p = d.createElement("p");
        //         p.textContent  = textFragment;
        //         div.appendChild(p);
        //     }
            // let prerequisiteGroups = tech.prerequisites.reduce((groups, prerequisite)=>{
            //         groups[prerequisite] = (groups[prerequisite] || 0) + 1;
            //         return groups
            //     },{});
            // for (let key2 in prerequisiteGroups){
            //     prerequisiteGroup = prerequisiteGroups[key2];
            //     let icon = d.createElement("p");
            //     p.textContent  = string(prerequisiteGroup);
            //     div.appendChild(p);
            // }
        //     list.appendChild(div);
        // }
    }
}
let store = new TechStore({techs:[]});
store.loadTechs();
export default store;