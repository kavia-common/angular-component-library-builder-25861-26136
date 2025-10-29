import { Component } from '@angular/core';
import { OceanToolbarComponent } from '../../projects/ocean-ui/src/lib/ocean-toolbar/ocean-toolbar.component';
import { OceanSidebarComponent, OceanNavItem } from '../../projects/ocean-ui/src/lib/ocean-sidebar/ocean-sidebar.component';
import { OceanButtonComponent } from '../../projects/ocean-ui/src/lib/ocean-button/ocean-button.component';
import { OceanInputComponent } from '../../projects/ocean-ui/src/lib/ocean-input/ocean-input.component';
import { OceanSelectComponent, OceanOption } from '../../projects/ocean-ui/src/lib/ocean-select/ocean-select.component';
import { OceanTabsComponent, OceanTab } from '../../projects/ocean-ui/src/lib/ocean-tabs/ocean-tabs.component';
import { OceanTableComponent, OceanColumn, OceanRow } from '../../projects/ocean-ui/src/lib/ocean-table/ocean-table.component';

@Component({
  selector: 'app-root',
  imports: [
    OceanToolbarComponent,
    OceanSidebarComponent,
    OceanButtonComponent,
    OceanInputComponent,
    OceanSelectComponent,
    OceanTabsComponent,
    OceanTableComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Ocean UI Library';

  sidebarItems: OceanNavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'devices', label: 'Devices', icon: 'videogame_asset' },
    { id: 'analytics', label: 'Analytics', icon: 'show_chart' },
    { id: 'firmware', label: 'Firmware and Apps', icon: 'code' },
    { id: 'users', label: 'Users', icon: 'group' },
    { id: 'more', label: 'More', icon: 'more_horiz', badge: 4, selected: true }
  ];

  propsA: OceanOption[] = [
    { value: 'all', label: 'All Properties' }, { value: 'p1', label: 'Property 1' }
  ];
  propsB: OceanOption[] = [
    { value: 'all', label: 'All Partners' }, { value: 'partner1', label: 'Partner 1' }
  ];

  tabs: OceanTab[] = [
    { id: 'profile', label: 'Profile', icon: 'account_circle' },
    { id: 'rules', label: 'Rules', icon: 'description' }
  ];

  columns: OceanColumn[] = [
    { key: 'profileName', label: 'Profile Name' },
    { key: 'repoUrl', label: 'Enter repository URL' },
    { key: 'description', label: 'Description' },
    { key: 'created', label: 'Created Date' },
    { key: 'modified', label: 'Modified Date' },
    { key: 'actions', label: 'Actions' }
  ];
  rows: OceanRow[] = [
    {
      profileName: 'Default Profile',
      repoUrl: 'https://cpeconfigbe-dms-test.dish.com/datacollector',
      description: 'This profile will be returned when none of the rules match',
      created: '04/25/2025 2:44:16 PM',
      modified: '04/25/2025 2:44:16 PM',
      actions: 'edit | delete'
    }
  ];
}
