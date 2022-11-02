export class Activity {

    renderTable(selector, arrTask) {
        let html = ``
        for (let value of arrTask) {
            html += ` <li>${value} 
                <a class="buttons" onclick="delAct('${value}')">
                    <i class="remove fa-solid fa-trash"></i>
                </a>   
                <a class="buttons" onclick="complete('${value}')">
                    <i class="complete fa-solid fa-check"></i> 
                </a>
            </li>
            `
        };
        document.getElementById(selector).innerHTML = html;
    }
    deleteAct(value, arrTask) {
        arrTask.forEach((act, index) => {
            if (act === value) {
                arrTask.splice(index, 1)
            }
        })
    }
    gettInfo(value, arrTask, arrNew) {
        let arrFindNew = arrTask.find(act => act === value);
        return arrNew.push(arrFindNew);
    }
    renderComplete(selector, arrNew) {
        let content = ``;
        for (let value of arrNew) {
            content += `
             <li style="background-color:violet"">${value} 
                <a class="buttons"  onclick="delActForever('${value}')">
                    <i class="remove fa-solid fa-trash"style="color:red" ></i>
                </a>   
                <a class="buttons" >
                    <i style="color:red" class="complete fa-solid fa-check"></i> 
                </a>
            </li>
        `};
        document.getElementById(selector).innerHTML = content;
    }
    deleteForever(value, arrNew) {
        arrNew.forEach((act, index) => {
            if (act === value) {
                arrNew.splice(index, 1)
            }
        })
    }
    sapXep(arrTask, selector) {
        let arr = arrTask.sort((act2, act1) => {
            let tenAct2 = act2.toLocaleLowerCase().trim();
            let tenAct1 = act1.toLocaleLowerCase().trim();
            if (tenAct2 < tenAct1) {
                return -1;
            }
            return 1;
        });
        this.renderTable(selector, arr);


    }
    sapXepNguoc(arrTask, selector) {
        let arr = arrTask.sort((act2, act1) => {
            let tenAct2 = act2.toLocaleLowerCase().trim();
            let tenAct1 = act1.toLocaleLowerCase().trim();
            if (tenAct2 < tenAct1) {
                return -1;
            }
            return 1;
        });
        let arrNguoc = arr.reverse();
        this.renderTable(selector, arrNguoc)


    }


}