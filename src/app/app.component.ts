import { Component } from "@angular/core";

import { TodoComponent } from "./todo/todo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JsonPipe } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [HeaderComponent, TodoListComponent, FooterComponent, JsonPipe],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  tasks = [new Todo(1, "待辦事項A"), new Todo(2, "待辦事項B")];

  onStateChange(task: {index: number, state: boolean}): void {
    if (task, state) {
      this.task[task.index].setFinished(new Date());
    } else {
      this.task[task.index].finishDate = undefined;
      this.task[task.index].hasFinished = false;
    }
}
