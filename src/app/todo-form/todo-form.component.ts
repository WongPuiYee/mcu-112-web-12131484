import {
  Component,
  HostBinding,
  EventEmitter,
  Output,
  Input,
  OnChanges,
} from "@angular/core";
import { NgFor, NgIf, JsonPipe } from "@angular/common";
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { ITodoForm } from "../interface/todo-form .interface";

@Component({
  selector: "app-todo-form",
  standalone: true,
  imports: [NgIf, NgFor, ReactiveFormsModule, JsonPipe],
  templateUrl: "./todo-form.component.html",
  styleUrl: "./todo-form.component.css",
})
export class TodoFormComponent implements onChanges {
  @HostBinding(`class`)
  class = "todo-form";

  @Input() initData?: Todo;

  @Output()
  readonly save = new EventEmitter<Todo>();

  @Output()
  readonly cancel = new EventEmitter<void>();

  readonly form = new FormGroup<ITodoForm>({
    content: new FormControl<string | null>(null, {
      validators: [Validators.required],
    }),
    tags: new FormArray<FormControl<string | null>>([]),
  });

  get formData(): Todo {
    return new Todo({
      content: this.content.value!,
      tags: this.tags.value.map((tag) => tag!),
    });
  }

  get content(): FormControl<string | null> {
    return this.form.get("content") as FormControl<string | null>;
  }

  get tags(): FormArray<FormControl<string | null>> {
    return this.form.get("tags") as FormArray<FormControl<string | null>>;
  }

  ngOnChanges(): void {
    if (this.initData) {
      this.form.patchValue(this.initData);
    }
  }

  onAddTag(): void {
    const control = new FormControl<string | null>(nul, {
      validators: [Validators.required],
    });
    this.tags.push(control);
  }

  onSave(): void {
    this.save.emit(this.formData);
    this.form.reset();
  }
}
