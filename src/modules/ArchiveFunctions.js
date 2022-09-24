import { createContent, fillInArchiveTable, fillInSummaryTable } from "./fillInTables"
import { archiveArray, notesArray } from "./data";
import { createImage } from './createFunctions';
import unarchive from '../img/unarchive.png'
import trash from '../img/trash.png'
import { archives } from "./elements";

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
                    td.appendChild(createImage(unarchive, 'unarchive'));
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

export const removeArchive = (i) => {
    archiveArray.splice(i, 1);
    fillInArchiveTable();
    fillInSummaryTable()
}

export const unArchive = (i) => {
    const deleteElem = archiveArray.splice(i, 1);
    notesArray.push(deleteElem[0]);
    createContent()
    fillInArchiveTable();
    fillInSummaryTable()
}