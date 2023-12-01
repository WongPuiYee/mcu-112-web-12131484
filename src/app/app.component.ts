import { Component } from "@angular/core";

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
export class AppComponent {
  taskService = inject(TaskService);

  tasks = [new Todo(1, "待辦事項A"), new Todo(2, "待辦事項B")];

  onAdd(): void {
    this.taskService.add("待辦事項C");
  }

  onRemove(id: number): void {
    this.taskService.remove(id);
  }

  onStateChange({ id, state }: { id: number; state: boolean }): void {
    this.taskService.updateState(id, state);
  }
}
