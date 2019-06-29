import {
   PRIORITY_TYPES,
   ICON_TYPES,
   NOTE_ACTIONS,
   ref,
   shortid
} from "../utils/constants";
// import Notepad from  
import initialNotes from "../../assets/notes.json";


// Отрисовка контента

const createElem = (tag, className, text) => {
   const elem = document.createElement(tag);
   Array.isArray(className) ? className.map(name => elem.classList.add(name)) : elem.classList.add(className);
   text ? elem.textContent = text : null;
   return elem;
}

const createNoteContent = (title, body) => {
   const createNoteElement = document.createElement('div');
   createNoteElement.classList.add('note__content');

   const noteTitle = createElem('h2', 'note__title', title);

   const noteBody = createElem('h2', 'note__title', body);

   createNoteElement.append(noteTitle, noteBody);


   return createNoteElement;
}


const createNoteFooter = (priority) => {
   const footer = document.createElement('footer');
   footer.classList.add('note__footer');

   const noteSectionHigh = document.createElement('section');
   noteSectionHigh.classList.add('note__section');


   const buttonDecrease = createElem('button', 'action');
   buttonDecrease.dataset.action = NOTE_ACTIONS.DECREASE_PRIORITY;

   const iconMore = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.ARROW_UP)

   const buttonIncrease = createElem('button', 'action');
   buttonIncrease.dataset.action = NOTE_ACTIONS.INCREASE_PRIORITY;



   const iconLess = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.ARROW_DOWN);


   const notePriority = createElem('section', 'note__section', `Priority ${priority}`);

   const noteSectionLow = document.createElement('section');
   noteSectionLow.classList.add('note__section');



   const buttonEdit = createElem('button', 'action');
   buttonEdit.dataset.action = NOTE_ACTIONS.EDIT;



   const iconEdit = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.EDIT);


   const buttonDelete = createElem('button', 'action');
   buttonDelete.dataset.action = NOTE_ACTIONS.DELETE;

   const iconDelete = createElem('i', ['material-icons', 'action__icon'], ICON_TYPES.DELETE);


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
   const listItem = createListItem({
      id: id,
      title: title,
      body: body,
      priority: priority
   })
   listRef.appendChild(listItem);
}