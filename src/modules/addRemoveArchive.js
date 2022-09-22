import { createContent } from "./fillInTables"
import { notesArray } from "./data";
import { fillInSummaryTable } from "./fillInTables";
import { removeNote } from "./buttonAssignment";
import { createImage } from './create';
// import pen from '../img/pen.png'
import archive from '../img/archive.png'
import trash from '../img/trash.png'

const archives = document.querySelector('#archives');

export const addNewArchive = (obj) => {
    try {
        const tr = document.createElement("tr");
        for (let key in obj) {
            const td = document.createElement("td");
            td.innerHTML = obj[key];
            td.style.textDecoration = 'line-through';
            tr.appendChild(td);
        }

        const dates = obj.content.match(/\d{1,2}\/?\.?\d{1,2}\/?\.?\d{4}/g)

        for (let i = 0; i < 4; i++) {
            const td = document.createElement("td");
            switch (i) {
                case 0:
                    if (dates) {
                        td.innerHTML = dates.join(', ')
                        td.style.textDecoration = 'line-through';
                    }
                    break;

                case 2:
                    td.appendChild(createImage(archive, 'unArchive'));
                    break;

                case 3:
                    td.appendChild(createImage(trash, 'removeArchive'))
            }
            tr.appendChild(td);
        }
        archives.appendChild(tr);
    } catch (error) {
        console.error(error)
    }
};

export const removeArchive = (index) => {
    // notesArray.splice(index, 1);
    // createContent(notesArray)
    // fillInSummaryTable()
    // removeNote()
}