import { Component } from '@angular/core';

interface UserStat {
  label: string;
  value: number;
  icon: string;
}

interface UserActivity {
  date: string;
  title: string;
  description: string;
  icon: string;
  iconBg: string;
}

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  user = {
    name: 'Jessica Parker',
    username: '@jessicaparker',
    avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    coverPhoto: 'https://ionicframework.com/docs/img/demos/card-media.png',
    bio: 'Product Designer & UI/UX Specialist. Love creating beautiful interfaces and exploring new design trends.',
    location: 'San Francisco, CA',
    website: 'designwithjessica.com',
    joined: 'January 2020'
  };

  stats: UserStat[] = [
    { label: 'Posts', value: 248, icon: 'document-text-outline' },
    { label: 'Followers', value: 12540, icon: 'people-outline' },
    { label: 'Following', value: 357, icon: 'person-add-outline' }
  ];

  activities: UserActivity[] = [
    {
      date: '2 hours ago',
      title: 'New design uploaded',
      description: 'Jessica uploaded a new UI kit to the marketplace',
      icon: 'color-palette-outline',
      iconBg: '#5260ff'
    },
    {
      date: 'Yesterday',
      title: 'Article published',
      description: 'How to create stunning interfaces with minimal effort',
      icon: 'newspaper-outline',
      iconBg: '#3dc2ff'
    },
    {
      date: '3 days ago',
      title: 'Achievement unlocked',
      description: 'Reached 10,000 followers milestone!',
      icon: 'trophy-outline',
      iconBg: '#ffb800'
    }
  ];

  segments = ['Posts', 'Photos', 'Saved'];
  selectedSegment = 'Posts';

  constructor() {}

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }

  formatNumber(num: number): string {
    return num > 999 ? (num / 1000).toFixed(1) + 'k' : num.toString();
  }
}
