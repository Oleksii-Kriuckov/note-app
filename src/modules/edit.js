import { openModalWindow } from "./count";
import { addNote, edit } from "./count";
import { notesArray, index } from "./data";
import { createButton, editButton, nameInput, categorySelect, contentTextArea } from "./elements";

export const editNote = (i) => {
    openModalWindow()
    editButton.style.display = 'block';
    createButton.style.display = 'none';
    index.ind = i
    nameInput.value = notesArray[i].name;
    categorySelect.value = notesArray[i].category;
    contentTextArea.value = notesArray[i].content;
}