import { Component, OnInit } from "@angular/core";

import { TodoComponent } from "./todo/todo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JsonPipe } from "@angular/common";
import { TaskService } from "./service/task.service";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { startWith } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, AsyncPipe, HeaderComponent, TodoListComponent,TodoDetailComponent, FooterComponent, JsonPipe],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskService);

  tasks$!: Observable<Todo[]>;

  readonly refresh$ = new Subject<void>();
  
  selectedId?: number;

  ngOnInit(): void {
    //run when refresh
    this.tasks$ = this.refresh$.pipe(
      startWith(undefined),
switchMap(() => this.taskService.getAll())
);
  }

  onAdd(): void {
    this.taskService.add("待辦事項C").subscribe (() => this.refresh$.next());
  }

  onRemove(id: number): void {
    this.taskService.remove(id).subscribe (() => this.refresh$.next());;
  }

  //onStateChange(task: { id: number; state: boolean }): void {
    this.taskService.updateState(task.id, task.state);

  //}
    onStateChange({ id, state }: { task: Todo; state: boolean }): void {
    this.taskService.updateState(id, state).subscribe(() => this.refresh$.next());
  }
  
}
