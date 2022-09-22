import { notesArray } from './data';
import {createContent} from './fillInTables'
import {fillInSummaryTable} from './fillInTables'
import {archiveAssignment, openCloseModal, removeAssignment} from './buttonAssignment'

createContent()
fillInSummaryTable()
openCloseModal()
removeAssignment()
archiveAssignment()