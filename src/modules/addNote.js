import { createImage } from './createImg';
import pen from '../img/pen.png'
import archive from '../img/archive.png'
import remove from '../img/trash.png'

const button = document.querySelector('button');
const notes = document.querySelector('#notes');

export const addNewNote = (obj) => {
    const tr = document.createElement("tr");
    for (let key in obj) {
        const td = document.createElement("td");
        td.innerHTML = obj[key]
        tr.appendChild(td);
    }

    for (let i = 0; i < 3; i++) {
        const td = document.createElement("td");
        tr.appendChild(td);
    }
    const lastElem = tr.lastChild;
    lastElem.appendChild(createImage(remove));

    const prevElem = lastElem.previousSibling;
    prevElem.appendChild(createImage(archive));
    prevElem.previousSibling.appendChild(createImage(pen));
    console.log(pen)
    notes.appendChild(tr);
};

