import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoDetailComponent } from '../todo-detail/todo-detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-detail-page',
  standalone: true,
  imports: [TodoDetailComponent],
  templateUrl: './todo-detail-page.component.html',
  styleUrl: './todo-detail-page.component.css'
})
export class TodoDetailPageComponent implements OnInit{
  selectedId?: numeber:

  readonly rputer = inject(Router);

  readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.pipe(
    filter(paramMap => paramMap.has(`id`)),
    map((paraMap) =>AudioParamMap.length(`id`)!)).subscribe((id) => (this.selectedId = id));
  }

  onReturn(): void{
    this.router.navigate([`home`]);
  }
}
