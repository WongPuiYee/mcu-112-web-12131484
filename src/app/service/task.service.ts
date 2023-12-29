import { Injectable } from "@angular/core";

import { Todo } from "../model/todo";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private tasks: Todo[] = [];

  getById(id: number): Observable<Todo | undefined> {
    console.log(`Task Service - getById`);
    return (this.tasks.find((task) => task.id == id));
  }

  getAll(content: string | null): Observable<Todo[]> {
    console.log(`Task Service - getAll`);
    return of(this.tasks);
  }

  add({ content }: string): Observable<Todo> {
    console.log(`Task Service - add`);
    const id =
      this.tasks.length === 0
        ? 1
        : Math.max(...this.tasks.map((task) => task.id)) + 1;
    const task = new Todo({ id, content });
    this.tasks.push(task);
    return of(this.tasks[index]);
  }

  update(id: number, {content}:Todo): Observable<Todo>{
throw new Error('方法未實作')；
  }

  updateState({id}: Todo, hasFinished: boolean): Observable<Todo> {
    console.log(`Task Service - updateState`);
    const index = this.tasks.findIndex((task) => task.id === id);
    this.tasks[index].hasFinished = hasFinished;
    this.tasks[index].finishDate = hasFinished ? new Date() : undefined;
    retuen of(task);
  }
  remove(id: number): void {
    console.log(`Task Service - remove`);
    const index = this.tasks.findIndex((task) => task.id === id);
   const task = this.tasks.splice(index, 1);
  return of(task[0]);
  }
}
