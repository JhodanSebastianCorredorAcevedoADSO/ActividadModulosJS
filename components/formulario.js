import tabla from "./tabla.js";
export default{
    name: document.querySelector("#board"),
    frag: document.createDocumentFragment(),

    enlistar(id){
        let tr = document.createElement("TR")

        let td1 = document.createElement("TD")
        td1.insertAdjacentText("beforeend", tabla.data.Taditional[id])

        let td2 = document.createElement("TD")
        td2.insertAdjacentText("beforeend", tabla.data.PointRange[id])

        let td3 = document.createElement("TD")
        td3.insertAdjacentText("beforeend", tabla.data.Letter[id])

        let td4 = document.createElement("TD")
        td4.insertAdjacentText("beforeend", tabla.data["SBG-Rating"][id])

        let td5 = document.createElement("TD")
        td5.insertAdjacentText("beforeend", tabla.data["Proficiency-Level-With-Standar"][id])
        tr.append(td1,td2,td3,td4,td5)                  
        this.frag.append(tr)
        this.name.append(this.frag)
    }
}