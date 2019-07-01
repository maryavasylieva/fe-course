import {Notyf} from 'notyf';

export const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

export const NOTIFICATION_MESSAGES = {
  NOTE_DELETED_SUCCESS: 'Заметка успешно удалена',
  NOTE_ADDED_SUCCESS: 'Заметка успешно добавлена 🎉',
  EDITOR_FIELDS_EMPTY: 'Заполните поля редактора',
};

export const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

export const ref = {
  noteList: document.querySelector('.note-list'),
  // editor: document.querySelector('.note-editor'),
  formFilter: document.querySelector('.search-form__input'),
  editorBtn: document.querySelector('button[data-action="open-editor"]'),
  titleInput: document.querySelector('input[name="note_title"]'),
  bodyInput: document.querySelector('textarea[name="note_body"]'),
  noteForm: document.getElementById('note-editor-form'),
};


export const shortid = require('shortid');
export const notyf = new Notyf();