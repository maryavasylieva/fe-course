import { PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS, ref, shortid} from "../utils/constants";
// import Notepad from  
import initialNotes from "../../assets/notes.json";


// Отрисовка контента

const createNoteContent = (title, body) => {
   const createNoteElement = document.createElement('div');
   createNoteElement.classList.add('note__content');


   const noteTitle = document.createElement('h2');
   noteTitle.classList.add('note__title');
   noteTitle.textContent = title;


   const noteBody = document.createElement('p');
   noteBody.classList.add('note__body');
   noteBody.textContent = body;

   createNoteElement.append(noteTitle, noteBody);


   return createNoteElement;
}


const createNoteFooter = (priority) => {
   const footer = document.createElement('footer');
   footer.classList.add('note__footer');

   const noteSectionHigh = document.createElement('section');
   noteSectionHigh.classList.add('note__section');

   const buttonDecrease = document.createElement('button');
   buttonDecrease.classList.add('action');
   buttonDecrease.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

   const iconMore = document.createElement('i');
   iconMore.classList.add('material-icons', 'action__icon');
   iconMore.textContent = ICON_TYPES.ARROW_UP;

   const buttonIncrease = document.createElement('button');
   buttonIncrease.classList.add('action');
   buttonIncrease.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;

   const iconLess = document.createElement('i');
   iconLess.classList.add('material-icons', 'action__icon');
   iconLess.textContent = ICON_TYPES.ARROW_DOWN;

   const notePriority = document.createElement('span');
   notePriority.classList.add('note__priority');
   notePriority.textContent = `Priority ${priority}`;

   const noteSectionLow = document.createElement('section');
   noteSectionLow.classList.add('note__section');

   const buttonEdit = document.createElement('button');
   buttonEdit.classList.add('action');
   buttonEdit.dataset.action = NOTE_ACTIONS.EDIT;

   const iconEdit = document.createElement('i');
   iconEdit.classList.add('material-icons', 'action__icon');
   iconEdit.textContent = ICON_TYPES.EDIT;

   const buttonDelete = document.createElement('button');
   buttonDelete.classList.add('action');
   buttonDelete.dataset.action = NOTE_ACTIONS.DELETE;

   const iconDelete = document.createElement('i');
   iconDelete.classList.add('material-icons', 'action__icon');
   iconDelete.textContent = ICON_TYPES.DELETE;


   buttonDecrease.appendChild(iconMore);
   buttonIncrease.appendChild(iconLess);

   buttonEdit.appendChild(iconEdit);
   buttonDelete.appendChild(iconDelete);

   noteSectionHigh.append(buttonIncrease, buttonDecrease, notePriority);
   noteSectionLow.append(buttonDelete, buttonEdit);

   footer.append(noteSectionHigh, noteSectionLow);

   return footer;
}

// Create New Note

export const createListItem = ({
   id,
   title,
   body,
   priority
}) => {

   const noteList = document.createElement('li');
   noteList.classList.add('note-list__item');
   noteList.dataset.id = id;

   const noteContainer = document.createElement('div');
   noteContainer.classList.add('note');

   noteContainer.append(createNoteContent(title, body), createNoteFooter(priority));
   noteList.appendChild(noteContainer);

   return noteList;
}

export const renderNoteList = (listRef, notes) => {
   const listItem = notes.map(li => createListItem(li));
   listRef.innerHTML = '';

   listRef.append(...listItem);
}

// renderNoteList(ref.list, notepad.notes);

export const addListItem = (listRef, {
   id = shortid,
   title = titleValue,
   body = bodyValue,
   priority = PRIORITY_TYPES.LOW
 }) => { 
  const listItem = createListItem({id: id, title: title, body: body, priority: priority})
  listRef.appendChild(listItem);
}
 