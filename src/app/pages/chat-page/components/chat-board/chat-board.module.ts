import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoardComponent } from './chat-board.component';
import { FormsModule } from '@angular/forms';
import { ChatBoardHeaderComponent } from './chat-board-header/chat-board-header.component';
import { InputMessageComponent } from './input-message/input-message.component';
import { MatIconModule } from '@angular/material/icon';
import { ChatTextareaComponent } from './chat-textarea/chat-textarea.component';

@NgModule({
  declarations: [
    ChatBoardComponent,
    ChatBoardHeaderComponent,
    InputMessageComponent,
    ChatTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule
  ],
  exports: [
    ChatBoardComponent
  ]
})
export class ChatBoardModule { }
