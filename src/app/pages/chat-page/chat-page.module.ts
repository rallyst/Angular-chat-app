import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatPageComponent } from './chat-page.component';
import { ChatListModule } from './components/chat-list/chat-list.module';
import { ChatBoardModule } from './components/chat-board/chat-board.module';



@NgModule({
  declarations: [
    ChatPageComponent,
  ],
  imports: [
    CommonModule,
    ChatListModule,
    ChatBoardModule
  ],
  exports: [
    ChatPageComponent
  ]
})
export class ChatPageModule { }
