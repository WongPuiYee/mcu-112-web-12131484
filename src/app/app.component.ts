import { Component, OnInit } from "@angular/core";

import { TodoComponent } from "./todo/todo.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { JsonPipe } from "@angular/common";
import { TaskService } from "./service/task.service";
import { TodoDetailComponent } from "./todo-detail/todo-detail.component";
import { BehaviorSubject, startWith } from "rxjs";
import { Todo } from "./model/todo";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [NgIf, AsyncPipe, HeaderComponent, TodoListComponent,TodoDetailComponent, TodoSearchComponent, TodoFormComponent, FooterComponent],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  taskService = inject(TaskService);

  tasks$!: Observable<Todo[]>;

  readonly search$ = new BehaviorSubject<string | null>(null);

  readonly refresh$ = new Subject<void>();
  
  selectedId?: number;

  ngOnInit(): void {
this.tasks$ = merge(this.tasks$ = this.refresh$.pipe(startWith(undefined)) ,
 this.search$
).pipe(switchMap(() => this.taskService.getAll(this.search$.value)));
  }

  onSave(task: Todo): void {
    console.log(task);
    this.taskService.add("task").subscribe (() => this.refresh$.next());
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
  
  onSearch(content: string | null) : void {
this.search$next(content);
  }
}
