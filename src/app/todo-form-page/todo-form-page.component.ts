import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";

@Component({
  selector: "app-todo-form-page",
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: "./todo-form-page.component.html",
  styleUrl: "./todo-form-page.component.css",
})
export class TodoFormPageComponent implements OnInit {
  taskService = inject(TaskService);

  title!: string;

  id?: number;

  formData?: Todo;

  readonly router = inject(Router);

  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        filter((paramMap) => paramMap.has(`id`)),
        tap((id) => (this.id = id)),
        map((paramMap) => paramMap.get(`id`)!),
        switchMap((id) => this.taskService.getById(id))
      )
      .subscribe((formData) => (this.formData = formData));

    this.route.data
      .pipe(map(({ title }) => title))
      .subscribe((title) => (this.title = title));
  }

  onSave(task: Todo): void {
    let action$: Observable<Todo>;
    if (this.id) {
      action$ = this.taskService.update(this.id, task);
    } else {
      this.taskService.add("task");
    }
    action$.subscribe(() => this.onCancel());
  }

  onCancel(): void {
    this.router.navigate([`home`]);
  }
}
