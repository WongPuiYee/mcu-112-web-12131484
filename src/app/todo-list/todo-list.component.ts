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

  @output() stateChange = new EventEmitter<{ id: number; state: boolean }>();
}
