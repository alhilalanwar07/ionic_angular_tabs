import { Component } from '@angular/core';

interface SettingsSection {
  title: string;
  items: SettingsItem[];
}

interface SettingsItem {
  icon: string;
  label: string;
  value?: string;
  toggle?: boolean;
  badge?: string;
  color?: string;
}

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],
  standalone: false,
})
export class Tab4Page {
  settingsSections: SettingsSection[] = [
    {
      title: 'Account',
      items: [
        { icon: 'person-circle', label: 'Profile', value: 'John Doe' },
        { icon: 'notifications', label: 'Notifications', toggle: true },
        { icon: 'lock-closed', label: 'Privacy', badge: 'New' },
        { icon: 'shield', label: 'Security', value: 'Update' }
      ]
    },
    {
      title: 'Preferences',
      items: [
        { icon: 'moon', label: 'Dark Mode', toggle: false },
        { icon: 'globe', label: 'Language', value: 'English' },
        { icon: 'color-palette', label: 'Theme', value: 'Default' }
      ]
    },
    {
      title: 'Support',
      items: [
        { icon: 'help-circle', label: 'Help Center' },
        { icon: 'information-circle', label: 'About' },
        { icon: 'mail', label: 'Contact Us' }
      ]
    }
  ];

  constructor() { }
}
