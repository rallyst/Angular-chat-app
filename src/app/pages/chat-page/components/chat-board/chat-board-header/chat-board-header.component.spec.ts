import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatBoardHeaderComponent } from './chat-board-header.component';

describe('ChatBoardHeaderComponent', () => {
  let component: ChatBoardHeaderComponent;
  let fixture: ComponentFixture<ChatBoardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatBoardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatBoardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
