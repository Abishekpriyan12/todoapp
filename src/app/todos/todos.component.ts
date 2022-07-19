
import { Component, OnInit } from '@angular/core';

import { Todos } from '../models/models';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todos[];
  inputtodo: string = "";

  constructor() { }

  ngOnInit() {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },
      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone(id: Number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;
      return v;
    })
  }


  deletetodo(id: number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }

  addtodo() {
    this.todos.push({
      content: this.inputtodo,
      completed: false
    }
    )
    this.inputtodo = ""
  }
}
