import { Component, OnInit } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { debounceTime, distinctUntilChanged } from "rxjs";

@Component({
  selector: "app-todo-search",
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe]
  templateUrl: "./todo-search.component.html",
  styleUrl: "./todo-search.component.css",
})
export class TodoSearchComponent implements OnInit{
  @Output()
  readonly search = new EventEmitter<string | null>();

  readonly formControl = new FormControl<string | null>(null);

  ngOnInit(): void {
    this.formControl.valueChanges
    .pipe(distinctUntilChanged(),debounceTime(500))
    .subscribe(value => console.log(value));
  }
}
