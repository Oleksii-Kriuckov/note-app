import { createContent, fillInSummaryTable} from "./fillInTables"
import { notesArray, index } from "./data";
import { createImage } from './createFunctions';
import pen from '../img/pen.png';
import archive from '../img/archive.png';
import trash from '../img/trash.png';
import { createButton, editButton, nameInput, categorySelect, contentTextArea, notes } from "./elements";
import { openModalWindow } from "./someFunctions";

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
                    td.appendChild(createImage(pen, 'edit'));
                    break;
                case 2:
                    td.appendChild(createImage(archive, 'archive'));
                    break;
            
                default:
                    td.appendChild(createImage(trash, 'remove'))
                    break;
            }
            tr.appendChild(td);
        }
        notes.appendChild(tr);
    } catch (error) {
        console.error(error)
    }
};

export const removeNote = (index) => {
   let deleteElem = notesArray.splice(index, 1);
    createContent()
    fillInSummaryTable()
    return deleteElem[0]
}

export const editNote = (i) => {
    openModalWindow()
    editButton.style.display = 'block';
    createButton.style.display = 'none';
    index.ind = i
    nameInput.value = notesArray[i].name;
    categorySelect.value = notesArray[i].category;
    contentTextArea.value = notesArray[i].content;
}