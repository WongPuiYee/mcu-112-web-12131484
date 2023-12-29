import { Component, OnInit } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";

@Component({
  selector: "app-todo",
  standalone: true,
  imports: [DatePipe],
  templateUrl: "./todo.component.html",
  styleUrl: "./todo.component.css",
})
export class TodoComponent {
  @Input({ required: true })
  task!: Todo;

  @Output() edit = new EventEmitter<void>();

  @output() remove = new EventEmitter<void>();

  @output()
  readonly stateChange = new EventEmitter<boolean>();

  @HostBinding("class")
  class = "app-todo";

  onSetStatus(hasFinished: boolean): void {
    this.stateChange.emit(hasFinished);
  }
}
