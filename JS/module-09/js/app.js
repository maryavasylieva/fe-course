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

const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body: 'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

class Notepad {
  constructor(notes = []) {
    this._notes = notes;

  }

  get notes() {
    return this._notes;
  }

  // saveListItem({
  //   id = Notepad.generateUniqueId(),
  //   title = titleValue,
  //   body = bodyValue,
  //   priority = PRIORITY_TYPES.LOW
  // }) {
  //   const newItem = {
  //       id: id,
  //       title: title,
  //       body: body,
  //       priority: priority,
  //   }

  //   this._notes.push(newItem);
  //   return newItem;
  // }

  removeListItem = (id) => {
    return this._notes.filter(note => note.id === id);
  }

  filteredNotesItem = (query = '') => {
    return this._notes.filter(note => note.title.toLowerCase().includes(query.toLowerCase()) || note.body.toLowerCase().includes(query.toLowerCase()))
    // test: return this._notes.filter(note => note.body.toUpperCase().includes(query) || note.title.toUpperCase().includes(query));
  }

  static generateUniqueId = () =>
    Math.random()
    .toString(36)
    .substring(2, 15) +
    Math.random()
    .toString(36)
    .substring(2, 15);
}

const notepad = new Notepad(initialNotes);

// Interface creation


const createElem = (tag, className,text) => {
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



  const buttonEdit = createElem('button',  'action');
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

// Reference(ref)

const ref = {
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form__input')

}
// console.log(ref.button)
// console.log(ref.filter)

//Interface creation: Create new note

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

  noteContainer.append(createNoteContent(title, body), createNoteFooter(priority));
  noteList.appendChild(noteContainer);

  return noteList;
}

const renderNoteList = (listRef, notes) => {
  const listItem = notes.map(li => createListItem(li));
  // Необходимо: очистить список элементов, т.к. не фильтруется корректно
  listRef.innerHTML = '';

  listRef.append(...listItem);
}

renderNoteList(ref.list, notepad.notes);


// Add new note to list

// const addListItem = (listRef, {
//   id = Notepad.generateUniqueId(),
//   title = titleValue,
//   body = bodyValue,
//   priority = PRIORITY_TYPES.LOW
// }) => {
//   const listItem = createListItem({
//     id: id,
//     title: title,
//     body: body,
//     priority: priority
//   })
//   listRef.appendChild(listItem);
// }

// Handlers

const handleEditorSubmit = event => {

  event.preventDefault();
  const [title, body, button] = event.currentTarget.elements;
  const titleValue = title.value;
  const bodyValue = body.value;

  if (titleValue.trim().length === 0 || bodyValue.trim().length === 0) {
     return alert('Необходимо заполнить все поля!');
  }

  // const savedNotes = notepad.saveListItem({
  //   id: Notepad.generateUniqueId(),
  //   title: titleValue,
  //   body: bodyValue,
  //   priority: PRIORITY_TYPES.LOW
  // })

  // addListItem(ref.list, savedNotes);
  
  const savedNotes = {
    id: Notepad.generateUniqueId(),
    title: titleValue,
    body: bodyValue,
    priority: PRIORITY_TYPES.LOW
  }
  
  const addItemToList = (listRef) => {
    const listItem = createListItem(savedNotes)
    listRef.append(listItem);
  }

  addItemToList(ref.list, savedNotes);



  event.currentTarget.reset();

}


const handleDeleteNotesClick = event => {
  if (event.target.nodeName !== 'I') return

  if (event.target.textContent === ICON_TYPES.DELETE) {
    const item = event.target.closest('.note-list__item')
    notepad.id = item.dataset.id;
    notepad.removeListItem(notepad.id);


    item.remove();
  }
}

const handleFilterChanged = event => {
  const filteredNotes = notepad.filteredNotesItem(event.currentTarget.value);

  renderNoteList(ref.list, filteredNotes);
}

// Listners

ref.editor.addEventListener('submit', handleEditorSubmit);
ref.filter.addEventListener('input', handleFilterChanged);
ref.list.addEventListener('click', handleDeleteNotesClick);



// Test: Interface creating 1

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


// Test: Interface creating 2

// const list = document.querySelector('.note-list');
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