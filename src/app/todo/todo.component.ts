import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  title = 'todo';
  list: any[] = [];

  ngOnInit() {
    // Load tasks from local storage when the component initializes
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.list = JSON.parse(savedTasks);
    }
  }

  addTask(item: string) {
    const newTask = { id: this.list.length, name: item };
    this.list.push(newTask);

    // Save tasks to local storage
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  removeTask(id: number) {
    console.warn(id);
    this.list = this.list.filter(item => item.id !== id);

    // Update tasks in local storage after removing a task
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }
}
