import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
import initialNotes from '../assets/notes.json';
import Notes from '../js/moduls/classNotepad';
import {
   createListItems,
   createListItem,
   // markup
} from './moduls/view';
import {
   NOTIFICATION_MESSAGES,
   NOTE_ACTIONS,
   PRIORITY_TYPES,
   shortid,
   ref,
   notyf
} from '../js/utils/constants';

import {
   save,
   remove,
   localNotes
} from './moduls/localStorage'

// const notes = new Notes(initialNotes);


const notes = localNotes ? new Notes(localNotes) : new Notes(initialNotes);

const handleModalClick = event => {
   MicroModal.show('note-editor-modal');
};

const handleEditorSubmit = event => {

   event.preventDefault();
   const [titleInput, bodyInput, cancel, submit] = event.currentTarget.elements;
   const titleValue = titleInput.value;
   const bodyValue = bodyInput.value;

   if (titleValue.trim() === '' || bodyValue.trim() === '') {
      return notyf.error(NOTIFICATION_MESSAGES.EDITOR_FIELDS_EMPTY)
   }


   const savedNotes = {
      id: shortid,
      title: titleValue,
      body: bodyValue,
      priority: PRIORITY_TYPES.LOW
   }

   notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS)
   notes.saveListItem(savedNotes).then(saveNote => console.log(saveNote, notes.notes));
   setTimeout(() => ref.noteList.insertAdjacentHTML('beforeend', createListItem(savedNotes)), 300);
   MicroModal.close('note-editor-modal');
   // remove('titleValue');
   // remove('bodyValue');
   event.currentTarget.reset();
   
};

const handleDeleteNotesClick = event => {
   if (event.target.nodeName !== 'I') return

   if (event.target.textContent === 'delete') {
      const item = event.target.closest('.note-list__item')
      notes.id = item.dataset.id;
      notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS)
      notes.removeListItem(notes.id).then(deleteNote => console.log(deleteNote));
      setTimeout(() => item.remove(),300);
   }
};

const handleFilterChanged = event => {
   const input = event.target.value
   const filteredNotes = notepad.filteredNotesItem(input);
   ref.noteList.innerHTML = createListItems(filteredNotes);
};


const handleEditorTest = (event) => {
   save ('titleInput', ref.titleInput.value);
   save ('bodyInput', ref.bodyInput.value);
}
// Listners

ref.formFilter.addEventListener('input', handleFilterChanged);
ref.noteList.addEventListener('click', handleDeleteNotesClick);
// ref.editor.addEventListener('submit', handleEditorSubmit);
ref.editorBtn.addEventListener('click', handleModalClick);
ref.noteForm.addEventListener('keyup', handleEditorTest);
ref.noteForm.addEventListener('submit', handleEditorSubmit);