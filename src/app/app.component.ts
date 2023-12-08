import { Component, OnInit } from "@angular/core";

import { TodoComponent } from "./todo/todo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JsonPipe } from "@angular/common";
import { TaskService } from "./service/task.service";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, AsyncPipe, HeaderComponent, TodoListComponent,TodoDetailComponent, FooterComponent, JsonPipe],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskRemoteService);

  tasks$!: Observable<Todo[]>;
  
  selectedId?: number;

  ngOnInit(): void {
    this.tasks$ = this.taskService.getAll();
  }

  onAdd(): void {
    this.taskService.add("待辦事項C");
  }

  onRemove(id: number): void {
    this.taskService.remove(id);
  }

  //onStateChange(task: { id: number; state: boolean }): void {
    this.taskService.updateState(task.id, task.state);

  //}
    onStateChange({ id, state }: { id: number; state: boolean }): void {
    this.taskService.updateState(id, state);
  }
}
