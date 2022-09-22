import { notesArray } from "./data";
import { addNewNote } from "./addRemoveNote";
import { fillInSummaryTable } from "./fillInTables";
import { createContent } from "./fillInTables";

export const createImage = (src, className) => {
    const img = new Image();
    img.src = src;
    img.setAttribute('class', className)
    img.style.cursor = 'pointer'
    img.style.width = '20px';
    img.style.height = '20px';
    return img
}

class Note {
    constructor(name, category, content) {
        this.name = name;
        this.created = this.createDate()
        this.category = category;
        this.content = content;
    }
    createDate() {
        const date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
}

export function createNote() {
    const nameInput = document.querySelector('.name'); nameInput.innerHTML
    const categorySelect = document.querySelector('#category');
    const contentTextArea = document.querySelector('#content');
    try {
        if (!nameInput.value) {
            throw { index: 0, message: "This field can't be empty" }
        }
        if (contentTextArea.value.length < 5) {
            throw { index: 2, message: "This field must contain at least 5 characters" }
        }

        const newNote = new Note(nameInput.value, categorySelect.value, contentTextArea.value);
        notesArray.push(newNote)
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