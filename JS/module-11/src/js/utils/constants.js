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
  list: document.querySelector('.note-list'),
  editor: document.querySelector('.note-editor'),
  filter: document.querySelector('.search-form__input'),
  editorBtn: document.querySelector('[data-action="open-editor"]')
};


export const shortid = require('shortid');
export const notyf = new Notyf();