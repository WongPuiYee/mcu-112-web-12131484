import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TaskRemoteService {
private readonly url = 'http://localhost:3000/tasks';

  private readonly httpClient = inject(HttpClient);

  getById(id: number): Observable<Todo | undefined> {
    console.log(`Task Remote Service - getById`);
return this.httpClient.get<Todo | undefined>(`${this.url}/${id}`)
  }

  getAll(): Observabble Todo[] {
    console.log(`Task Remote Service - getAll`);
      return this.httpClient.get<Todo[]>(this.url);
    }
 

  add(content: string): Observable <todo>{
    console.log(`Task Remote Service - add`);

const task = new Todo({ content });
return this.httpClient.post<Todo>(this.url, task);
  }

  updateState(task: Todo, hasFinished: boolean): Observable<Todo> {
    console.log(`Task Remote Service - updateState`);
new Todo({ content, hasFinished });
return this.httpClient.put<Todo>(`${this.url}/${id}`, task);
  }
  remove(id: number): void {
    console.log(`Task Remote Service - remove`);
return this.httpClient.delete<Todo>(`${this.url}/${id}`);
  }
}
