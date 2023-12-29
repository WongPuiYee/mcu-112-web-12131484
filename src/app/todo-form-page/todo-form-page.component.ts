import {
  Component,
  Input,
  OnInit,
  inject,
  numberAttribute,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { NumberValueAccessor } from "@angular/forms";

@Component({
  selector: "app-todo-form-page",
  standalone: true,
  imports: [TodoFormComponent],
  templateUrl: "./todo-form-page.component.html",
  styleUrl: "./todo-form-page.component.css",
})
export class TodoFormPageComponent implements OnInit {
  taskService = inject(TaskService);
  @Input()
  title!: string;

  @Input({ Transform: numberAttribute })
  id?: number;

  @Input()
  formData?: Todo;

  readonly router = inject(Router);

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
