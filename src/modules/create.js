import { notesArray } from "./data";
import { addNewNote } from "./addRemoveNote";
import { fillInSummaryTable } from "./fillInTables";
import { createContent } from "./fillInTables";
import { nameInput, categorySelect, contentTextArea } from "./elements";

export const createImage = (src, className) => {
    const img = new Image();
    img.src = src;
    img.setAttribute('class', className)
    img.style.cursor = 'pointer'
    img.style.width = '20px';
    img.style.height = '20px';
    return img
}

// class Note { //remake class
//     constructor(name, category, content) {
//         this.name = name;
//         this.created = this.createDate()
//         this.category = category;
//         this.content = content;
//     }
//     createDate() {
//         const date = new Date();
//         return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
//     }
// }

function createObject(name, category, content) {
    function createDate() {
        const date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
    return {name, created: createDate(), category, content}
}
export function createNote(param) {
    try {
        if (!nameInput.value) {
            throw { index: 0, message: "This field can't be empty" }
        }
        if (contentTextArea.value.length < 5) {
            throw { index: 2, message: "This field must contain at least 5 characters" }
        }
        // console.log(param)
        const newNote =  createObject(nameInput.value, categorySelect.value, contentTextArea.value);
        if (param === 'create') {
            notesArray.push(newNote)
        } else {
            notesArray.splice(param, 1, newNote)
        }
        // console.log(notesArray)

        createContent()
        fillInSummaryTable()
        nameInput.value = '';
        contentTextArea.value = '';
    } catch (error) {

        document.forms[0].elements[error.index].innerHTML = error.message;
        document.forms[0].elements[error.index].style.color = 'red';
        setTimeout(() => {
            document.forms[0].elements[error.index].innerHTML = '';
            document.forms[0].elements[error.index].style.color = 'rgb(61, 61, 61)';
        }, 3000)
    }
}