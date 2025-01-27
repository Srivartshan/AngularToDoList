import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-todo',
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { text: string, completed: boolean, isEditing: boolean }[] = [];
  newTask: string = '';

  addTask(): void {
    if (this.newTask.trim()) {
      this.tasks.push({ text: this.newTask.trim(), completed: false, isEditing: false });
      this.newTask = '';
    }
  }

  toggleTaskCompletion(index: number): void {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  startEditing(index: number): void {
    this.tasks[index].isEditing = true;
  }

  saveTask(index: number): void {
    this.tasks[index].isEditing = false;
  }

  cancelEditing(index: number): void {
    this.tasks[index].isEditing = false;
  }
}
