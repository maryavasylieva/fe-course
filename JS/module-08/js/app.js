'use strict';

const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

// const list = document.querySelector('.note-list');

// const createNote = ({title, body}) => {
//   const createNoteElement = document.createElement('div');
//   createNoteElement.classList.add('note__content');


//   const noteTitle = document.createElement('h2');
//   noteTitle.classList.add('note__title');
//   noteTitle.textContent = title;


//   const noteBody = document.createElement('p');
//   noteBody.classList.add('note__body');
//   noteBody.textContent = body;

//   list.append(noteTitle);
//   list.append(noteBody);
// }

// const notepad = createNote(initialNotes[0]);
// list.appendChild(noteTitle);
// list.appendChild(noteBody);



class Notepad {
  constructor(notes=[]){
    this._notes = notes;

  }

  get notes(){
    return this._notes;
  }
}

const notepad = new Notepad(initialNotes);

const list = document.querySelector('.note-list');
// console.log(list);
// const createNote = (title, body) => {
//   const createNoteElement = document.createElement('div');
//   createNoteElement.classList.add('note__content');

//   const noteTitle = document.createElement('h2');
//   noteTitle.classList.add('note__title');
//   noteTitle.textContent = title;


//   const noteBody = document.createElement('p');
//   noteBody.classList.add('note__body');
//   noteTitle.textContent = body;

//   createNoteElement.append(noteTitle, noteBody);
//   return createNoteElement;
// }


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

const createNoteFooter = (priority) =>{
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

const createListItem = ({
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

  noteContainer.append(createNoteContent(title,body), createNoteFooter(priority));
  noteList.appendChild(noteContainer);

  return noteList;
}

const renderNoteList = (listRef, notes) => {
  const listItem = notes.map(li => createListItem(li));

  listRef.append(...listItem);
  


}

renderNoteList(list, notepad.notes);


