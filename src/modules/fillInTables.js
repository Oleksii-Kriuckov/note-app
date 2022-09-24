import { addNewNote } from './addRemoveNote';
import { notesArray } from './data';
import { archiveArray } from './data';
import { countByCategory } from './count';
import { archiveAssignment, editNoteAssignment, removeNoteAssignment } from './buttonAssignment';
import { addNewArchive } from './addRemoveArchive';
import { notes } from './elements';

export const createContent = () => {
    while (notes.childElementCount > 1) {
        const lastChild = notes.lastChild
        notes.removeChild(lastChild)
    }
    notesArray.forEach(element => {
        addNewNote(element)
    });
    removeNoteAssignment();
    archiveAssignment();
    editNoteAssignment();
};

export const fillInSummaryTable = () => {
    const activeTask = document.querySelector('#activeTask');
    activeTask.innerHTML = countByCategory(notesArray, 'Task');

    const activeRandomThought = document.querySelector('#activeRandomThought');
    activeRandomThought.innerHTML = countByCategory(notesArray, 'Random Thought')

    const activeIdea = document.querySelector('#activeIdea');
    activeIdea.innerHTML = countByCategory(notesArray, 'Idea')

    const archivedTask = document.querySelector('#archivedTask');
    archivedTask.innerHTML = countByCategory(archiveArray, 'Task')

    const archivedRandomThought = document.querySelector('#archivedRandomThought');
    archivedRandomThought.innerHTML = countByCategory(archiveArray, 'Random Thought')

    const archivedIdea = document.querySelector('#archivedIdea');
    archivedIdea.innerHTML = countByCategory(archiveArray, 'Idea')
}

const archives = document.querySelector('#archives');

export const fillInArchiveTable = () => {
    while (archives.childElementCount > 1) {
        const lastChild = archives.lastChild
        archives.removeChild(lastChild)
    }
    archiveArray.forEach(element => {
        addNewArchive(element)
    });
    
}