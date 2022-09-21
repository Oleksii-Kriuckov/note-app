import { createImage } from './create';
import pen from '../img/pen.png'
import archive from '../img/archive.png'
import remove from '../img/trash.png'

const notes = document.querySelector('#notes');

export const addNewNote = (obj) => {
    try {
        const tr = document.createElement("tr");
        for (let key in obj) {
            const td = document.createElement("td");
            td.innerHTML = obj[key]
            tr.appendChild(td);
        }

        const dates = obj.content.match(/\d{1,2}\/?\.?\d{1,2}\/?\.?\d{4}/g)

        for (let i = 0; i < 4; i++) {
            const td = document.createElement("td");
            switch (i) {
                case 0:
                    if (dates) {
                        td.innerHTML = dates.join(', ')
                    }
                    break;
                    
                case 1:
                    td.appendChild(createImage(remove));
                    break;
                case 2:
                    td.appendChild(createImage(archive));
                    break;
            
                default:
                    td.appendChild(createImage(pen))
                    break;
            }
            tr.appendChild(td);
        }
    
        notes.appendChild(tr);
    } catch (error) {
        console.error(error)
    }
};