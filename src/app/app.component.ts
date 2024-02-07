import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatIconModule,FormsModule,MatCheckboxModule,MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'todo-list';

  inputText: string = "";

  todos: string[] = [];
  deletedTodos: string[] = [];

 addTodo() {
   this.todos.push(this.inputText);
    this.inputText = ' ';
    console.log(this.todos);
 }

 isEdit: boolean = false;

 deleteTodo(index: number) {
   this.deletedTodos.push(this.todos[index]);
   this.todos.splice(index, 1);
 }

  editTodo(index: number) {
   
    let newInput = prompt("Edit Todo", "");  
    console.log(newInput);  
    if (newInput !== null) { this.todos[index] = newInput; }
    if(!this.isEdit) this.isEdit = true; 
    else this.isEdit = false;
  }
}
