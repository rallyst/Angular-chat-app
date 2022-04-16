import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatTextareaComponent } from './chat-textarea.component';

describe('ChatTextareaComponent', () => {
  let component: ChatTextareaComponent;
  let fixture: ComponentFixture<ChatTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatTextareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
