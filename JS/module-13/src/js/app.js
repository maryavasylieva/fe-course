import 'notyf/notyf.min.css';
import MicroModal from 'micromodal';
import * as api from "./services/api";
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


export const notes = new Notes(initialNotes);
notes.getNote().then(notes => ref.noteList.insertAdjacentHTML('beforeend', createListItems(notes)));
// console.log(notes);

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


   const newNotes = {
      id: shortid,
      title: titleValue,
      body: bodyValue,
      priority: PRIORITY_TYPES.LOW
   }

   notes.saveListItem(newNotes).then(savedNote => {
      newNotes.id = savedNote.id;
      ref.noteList.insertAdjacentHTML('beforeend', createListItem(newNotes))
      notyf.success(NOTIFICATION_MESSAGES.NOTE_ADDED_SUCCESS)
   }).catch(error =>{
      notyf.error(NOTIFICATION_MESSAGES.ERROR_FIELDS)
   });

   MicroModal.close('note-editor-modal');
   event.currentTarget.reset();
   
};

const handleDeleteNotesClick = event => {
   if (event.target.textContent !== 'delete') return
   const item = event.target.closest('li');
   const id = item.dataset.id;

   notes.removeListItem(id).then(() => {
       item.remove()
       notyf.success(NOTIFICATION_MESSAGES.NOTE_DELETED_SUCCESS);
   });
      
   
};

const handleFilterChanged = event => {
   const input = event.target.value
   const filteredNotes = notepad.filteredNotesItem(input);
   ref.noteList.innerHTML = createListItems(filteredNotes);
};

// Listners

ref.formFilter.addEventListener('input', handleFilterChanged);
ref.noteList.addEventListener('click', handleDeleteNotesClick);
// ref.editor.addEventListener('submit', handleEditorSubmit);
ref.editorBtn.addEventListener('click', handleModalClick);
ref.noteForm.addEventListener('submit', handleEditorSubmit);