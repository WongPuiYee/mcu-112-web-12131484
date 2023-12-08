import { Component, OnInit } from "@angular/core";

import { TodoComponent } from "./todo/todo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JsonPipe } from "@angular/common";
import { TaskService } from "./service/task.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, TodoListComponent, FooterComponent, JsonPipe],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskService);

  tasks: Todo[] = [];

  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
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
