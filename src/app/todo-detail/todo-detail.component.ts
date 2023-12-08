import {
  Component,
  HostBinding,
  OnChanges,
  OnInit,
  SimpleChanges,
  inject,
  numberAttribute,
} from "@angular/core";
import { AsyncPipe, CommonModule } from "@angular/common";
import { TaskService } from "../service/task.service";

@Component({
  selector: "app-todo-detail",
  standalone: true,
  imports: [NgIf, AsyncPipe],
  templateUrl: "./todo-detail.component.html",
  styleUrl: "./todo-detail.component.css",
})
export class TodoDetailComponent implements OnInit, OnChanges {
  @Input({ transform: numberAttribute }) id!: number;

  task$!: Observable<Todo | undefined>;

  private readonly taskService = inject(TaskRemoteService);
  @HostBinding(" class")
  class = "todo-detail";

  ngOnChanges(): void {
    this.task = this.taskService.getById(this.id);
  }
}
