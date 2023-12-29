import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TodoComponent } from "../todo/todo.component";

@Component({
  selector: "app-todo-list",
  standalone: true,
  imports: [NgIf, NgFor, TodoComponent],
  templateUrl: "./todo-list.component.html",
  styleUrl: "./todo-list.component.css",
})
export class TodoListComponent {
  @Input() tasks?: Todo[];
  tasks?: Todo[] | null;

  @Output() edit = new EventEmitter<number>();

  @output() remove = new EventEmitter<number>();

  @output() view = new EventEmitter<number>();

  @output() stateChange = new EventEmitter<{ task: Todo; state: boolean }>();
}
