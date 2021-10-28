import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListTreeComponent } from './todo-list-tree.component';

describe('TodoListTreeComponent', () => {
  let component: TodoListTreeComponent;
  let fixture: ComponentFixture<TodoListTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListTreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
