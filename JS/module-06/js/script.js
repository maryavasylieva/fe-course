class Notepad {
  constructor(notes = []) {
    this._notes = notes;
  }

  /*
   * Перенеси свойства и методы конструктора в класс
   *
   * Замени метод getNotes геттером, чтобы можно было обратиться как notepad.notes,
   * для этого создай свойство _notes, в котором храни массив заметок,
   * а геттер notes возвращает значение этого поля
   *
   * Добавь статическое свойство Priority используя ключевое слово static
   */

  get notes() {
    return this._notes;
  }

  set notes(notes) {
    this._notes = notes;
  }

  findNoteById = function (id) {
    /*
     * Ищет заметку в массиве notes
     * Принимает: идентификатор заметки
     * Возвращает: заметку с совпавшим полем id или undefined если ничего не найдено
    //  */
    return this._notes.find(key => key.id === id)

    //  for (let key of this._notes) {
    //    if (key.id === id) {
    //      return key;
    //    }
    //  }
    //  console.log(key);

  }

  saveNote = function (note) {
    /*
     * Сохраняет заметку в массив notes
     *
     * Принимает: объект заметки
     * Возвращает: сохраненную заметку
     */


    this._notes.push(note);
    return this._note;
  }
  deleteNote = function (id) {
    /*
     * Удаляет заметку по идентификатору из массива notes
     *
     * Принимает: идентификатор заметки
     * Возвращает: ничего
     */
    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].id === id) {

        this._notes.splice(i, 1);
      }
    }


    //  return this;
  }
  updateNoteContent = function (id, updatedContent) {

    // for (let i = 0; i < this._notes.length; i++) {
    //   if (this._notes[i].id === id) {
    //     this._notes[i] = {
    //       ...this._notes[i],
    //       ...updatedContent,
    //     }
    //     return this._notes[i];
    //   }
    // }
   

    let result;

    for(let i = 0; i < this.notes.length; i++){
      if(this.notes[i].id === id){
        result = Object.assign(this.notes[i], updatedContent);
      }
    }
   return result;
    /*
     * Обновляет контент заметки
     * updatedContent - объект с полями вида {имя: значение, имя: значение}
     * Свойств в объекте updatedContent может быть произвольное количество
     *
     * Принимает: идентификатор заметки и объект, полями которого надо обновить заметку
     * Возвращает: обновленную заметку
     */


  }
  updateNotePriority = function (id, priority) {
    /*
     * Обновляет приоритет заметки
     *
     * Принимает: идентификатор заметки и ее новый приоритет
     * Возвращает: обновленную заметку
     */

    //  console.log(this.notes);
    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].id === id) {
        this._notes[i].priority = priority;
        return this._notes[i];
      }
    }

  }
  filterNotesByQuery = function (query) {
    /*
     * Фильтрует массив заметок по подстроке query.
     * Если значение query есть в заголовке или теле заметки - она подходит
     * toLowerCase toUpperCase push(query) 
     *  перебор массива условие(ветвление)
     * Принимает: подстроку для поиска в title и body заметки
     * Возвращает: новый массив заметок, контент которых содержит подстроку
     */
    const arr = [];

    for (let i = 0; i < this._notes.length; i++) {
      const titleToLowerCase = this._notes[i].title.toLowerCase();
      const bodyToLowertCase = this._notes[i].body.toLowerCase();
      if (titleToLowerCase.includes(query) || bodyToLowertCase.includes(query)) {
        arr.push(this._notes[i]);
      }
    }
    return arr;
  }

  filterNotesByPriority = function (priority) {
    /*
     * Фильтрует массив заметок по значению приоритета
     * Если значение priority совпадает с приоритетом заметки - она подходит
     *
     * Принимает: приоритет для поиска в свойстве priority заметки
     * Возвращает: новый массив заметок с подходящим приоритетом
     */
    const mass = [];

    for (let i = 0; i < this._notes.length; i++) {
      if (this._notes[i].priority === priority) {
        mass.push(this._notes[i]);
      }
    }
    return mass;


  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };
}

// Notepad.Priority = {
//   LOW: 0,
//   NORMAL: 1,
//   HIGH: 2,
// };


const initialNotes = [{
    id: 'id-1',
    title: 'JavaScript essentials',
    body: 'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    // priority: Notepad.Priority.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body: 'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    // priority: Notepad.Priority.NORMAL,
  },
];


const notepad = new Notepad(initialNotes);

/*
  Смотрю что у меня в заметках после инициализации
*/
console.log('Все текущие заметки: ', notepad.notes);

/*
 * Добавляю еще 2 заметки и смотрю что получилось
 */
notepad.saveNote({
  id: 'id-3',
  title: 'Get comfy with Frontend frameworks',
  body: 'First must get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
  priority: Notepad.Priority.NORMAL,
});

notepad.saveNote({
  id: 'id-4',
  title: 'Winter clothes',
  body: "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
  priority: Notepad.Priority.LOW,
});

console.log('Все текущие заметки: ', notepad.notes);

/*
 * Зима уже близко, пора поднять приоритет на покупку одежды
 */
notepad.updateNotePriority('id-4', Notepad.Priority.NORMAL);

console.log('Заметки после обновления приоритета для id-4: ', notepad.notes);

/*
 * Решил что фреймворки отложу немного, понижаю приоритет
 */
notepad.updateNotePriority('id-3', Notepad.Priority.LOW);

console.log('Заметки после обновления приоритета для id-3: ', notepad.notes);

/*
 * Решил отфильтровать заметки по слову html
 */
console.log(
  'Отфильтровали заметки по ключевому слову "html": ',
  notepad.filterNotesByQuery('html'),
);

/*
 * Решил отфильтровать заметки по слову javascript
 */
console.log(
  'Отфильтровали заметки по ключевому слову "javascript": ',
  notepad.filterNotesByQuery('javascript'),
);

/*
 * Хочу посмотреть только заметки с нормальным приоритетом
 */
console.log(
  'Отфильтровали заметки по нормальному приоритету: ',
  notepad.filterNotesByPriority(Notepad.Priority.NORMAL),
);

/*
 * Обновим контент заметки с id-3
 */
notepad.updateNoteContent('id-3', {
  title: 'Get comfy with React.js or Vue.js',
});

console.log(
  'Заметки после обновления контента заметки с id-3: ',
  notepad.notes,
);

/*
 * Повторил HTML и CSS, удаляю запись c id-2
 */
notepad.deleteNote('id-2');
console.log('Заметки после удаления с id -2: ', notepad.notes);