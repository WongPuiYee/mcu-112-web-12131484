import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoLisiComponent } from './todo-lisi.component';

describe('TodoLisiComponent', () => {
  let component: TodoLisiComponent;
  let fixture: ComponentFixture<TodoLisiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoLisiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodoLisiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
