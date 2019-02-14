import { Theme } from './models';

import {
  Component,
  OnInit
} from '@angular/core';

import {
  SidepanelService,
  ThemeService
} from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  themeClass = 'default';

  constructor(
    public sidepanel: SidepanelService,
    public theme: ThemeService
  ) { }

  ngOnInit() {
    this.theme.theme$.subscribe((t: Theme) => this.themeClass = t.name);
  }
}
