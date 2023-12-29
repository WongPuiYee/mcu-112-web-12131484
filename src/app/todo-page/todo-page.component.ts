import { AsyncPipe, NgIf } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import {
  BehaviorSubject,
  merge,
  Observable,
  startWith,
  Subject,
  switchMap,
} from "rxjs";

import { TodoComponent } from '../todo/todo.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { JsonPipe } from "@angular/common';
import { TaskService } from '../service/task.service';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { Todo } from '../model/todo';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { Router } from "@angular/router";
@Component({
  selector: "app-todo-page",
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    NavBarComponent
    HeaderComponent,
    TodoListComponent,
    TodoSearchComponent,
    FooterComponent,
  ],
  templateUrl: "./todo-page.component.html",
  styleUrl: "./todo-page.component.css",
})
export class TodoPageComponent implements OnInit | {

tasks$!: Observable<Todo[]>;

readonly search$ = new BehaviorSubject<string | null>(null);

readonly refresh$ = new Subject<void>();

readonly router = inject(Router); 

ngOnInit(): void {
this.tasks$ = merge(this.tasks$ = this.refresh$.pipe(startWith(undefined)) ,
this.search$
).pipe(switchMap(() => this.taskService.getAll(this.search$.value)));
}

onAdd(): void{
  this.router.navigate([`todo-form`]);
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
 
onView(id: number): void{
  this.router.navigated([`todo`,id]);
}
}