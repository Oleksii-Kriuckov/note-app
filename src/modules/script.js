import { notesArray } from './data';
import {createContent} from './fillInTables'
import {fillInSummaryTable} from './fillInTables'
import {archiveAssignment, openCloseModal, removeNoteAssignment} from './buttonAssignment'

createContent()
fillInSummaryTable()
openCloseModal()