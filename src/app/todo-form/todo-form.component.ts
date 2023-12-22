import { Component, HostBinding } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { ITodoForm } from "../interface/todo-form .interface";

@Component({
  selector: "app-todo-form",
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: "./todo-form.component.html",
  styleUrl: "./todo-form.component.css",
})
export class TodoFormComponent {
  @HostBinding(`class`)
  class = "todo-form";

  readonly form = new FormGroup<ITodoForm>({
    content: new FormControl<string | null>(null),
  });
}
