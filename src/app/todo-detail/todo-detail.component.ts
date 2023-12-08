import { Component, HostBinding, OnChanges, OnInit, SimpleChanges, inject, numberAttribute } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskService } from "../service/task.service";

@Component({
  selector: "app-todo-detail",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./todo-detail.component.html",
  styleUrl: "./todo-detail.component.css",
})
export class TodoDetailComponent implements OnInit, OnChanges {
  @Input({ transform: numberAttribute }) id!: number;

  task?: TodoDetailComponent;

  private readonly taskService = inject(TaskService);
  @HostBinding(' class')
  class = 'todo-detail';

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnChanges(): void {
console.log('ng on init');    
  }
  }
}
