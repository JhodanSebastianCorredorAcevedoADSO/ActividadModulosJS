import formulario from "./formulario.js";
export default{
    name: document.querySelector("#questions"),
    data: [],
    datos: [],

    Api: async function(){
        let peticion = await fetch("./config.json");
        let json = await peticion.json();
        this.data = json;
    },
    Taditional(p1){
        this.data.Taditional.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    PointRange(p1){
        this.data.PointRange.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0], val[1]);
            }
        })
    },
    Letter(p1){
        this.data.Letter.forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    SBGRating(p1){
        this.data["SBG-Rating"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    ProficiencyLevelWichStandard(p1){
        this.data["Proficiency-Level-With-Standar"].forEach((val,id)=>{
            if(p1==id){
                console.log(val[0]);
            }
        })
    },
    Solucion(){
        this.name.addEventListener("submit", (e)=>{
            e.preventDefault();
            this.datos.push(Object.fromEntries(new FormData (e.target)))
            this.name.reset();
            console.log(this.datos);
            
            let comp = this.datos[0];
            
            if (comp.elija == "Taditional"){
                this.data.Taditional.forEach((val,id)=>{
                    if(comp.numero >= val[0] && comp.numero <= val[1]){
                        formulario.enlistar(id)
                    }
                    })
            }
            else if (comp.elija == "PointRange"){
                this.data.PointRange.forEach((val,id)=>{
                    if(comp.numero >= val[0] && comp.numero <= val[1]){
                        formulario.enlistar(id)
                    }
                    })
            }
            this.datos=[]
        })
    }
}