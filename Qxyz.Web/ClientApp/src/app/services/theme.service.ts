import { Injectable } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';
import { Theme } from '../models';

@Injectable()
export class ThemeService {
  private themes = new BehaviorSubject<Theme[]>([
    { name: 'light-green', display: 'Green' },
    { name: 'dark-green', display: 'Green' },
    { name: 'light-blue', display: 'Blue' },
    { name: 'dark-blue', display: 'Blue' },
    { name: 'light-red', display: 'Red' },
    { name: 'dark-red', display: 'Red' },
    { name: 'light-indigo', display: 'Indigo' },
    { name: 'dark-indigo', display: 'Indigo' },
    { name: 'light-orange', display: 'Orange' },
    { name: 'dark-orange', display: 'Orange' },
    { name: 'light-purple', display: 'Purple' },
    { name: 'dark-purple', display: 'Purple' },
    { name: 'light-amber', display: 'Amber' },
    { name: 'dark-amber', display: 'Amber' },
    { name: 'light-crimson', display: 'Crimson' },
    { name: 'dark-crimson', display: 'Crimson' },
    { name: 'light-teal', display: 'Teal' },
    { name: 'dark-teal', display: 'Teal' }
  ]);

  private theme = new BehaviorSubject<Theme>(this.themes.value[2]);

  themes$ = this.themes.asObservable();
  theme$ = this.theme.asObservable();

  constructor(
    private overlay: OverlayContainer
  ) {
    this.setOverlayContainerTheme(this.theme.value.name);
  }

  setTheme = (t: Theme) => {
    this.setOverlayContainerTheme(t.name, this.theme.value.name);
    this.theme.next(t);
  }

  setOverlayContainerTheme = (newTheme: string, oldTheme?: string) => {
    if (oldTheme) {
      this.overlay.getContainerElement().classList.remove(oldTheme);
    }
    this.overlay.getContainerElement().classList.add(newTheme);
  }
}
