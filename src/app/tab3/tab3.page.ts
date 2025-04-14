import { Component } from '@angular/core';

interface ChatMessage {
  id: number;
  text: string;
  time: string;
  sent: boolean;
  read?: boolean;
}

interface ChatContact {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread: number;
  online: boolean;
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  contacts: ChatContact[] = [
    {
      id: 1,
      name: 'John Smith',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      lastMessage: 'Hey, how are you doing?',
      time: '5 min',
      unread: 2,
      online: true
    },
    {
      id: 2,
      name: 'Emma Wilson',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      lastMessage: 'The project looks great!',
      time: '2 hrs',
      unread: 0,
      online: true
    },
    {
      id: 3,
      name: 'Michael Brown',
      avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
      lastMessage: 'Meeting at 3 PM',
      time: 'Yesterday',
      unread: 1,
      online: false
    }
  ];

  constructor() {}

  getStatusColor(online: boolean): string {
    return online ? 'var(--ion-color-online)' : 'var(--ion-color-offline)';
  }
}
