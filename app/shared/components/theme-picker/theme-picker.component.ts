import { AfterViewInit, Component, ElementRef, EventEmitter, HostBinding, Input, Injectable, OnInit, Output } from '@angular/core';

import { StyleManager } from './style-manager.service';

import { ThemeStorage } from './theme-picker.service';


export interface SiteTheme {
  href: string;
  accent: string;
  primary: string;
  isDark?: boolean;
  isDefault?: boolean;
  styles: any;
}



@Component({
  selector: 'theme-picker',
  templateUrl: './theme-picker.component.html',
  styleUrls: ['./theme-picker.component.scss']
})
export class ThemePickerComponent {


  currentTheme;

  themes = [
    {
      primary: '#673AB7',
      accent: '#FFC107',
      href: 'deeppurple-amber.css',
      isDark: false,
      styles: {
        'background-color': '#673AB7',
        'background': '-webkit-linear-gradient(-45deg, #673AB7 0%, #673AB7 50%, #FFC107 51%, #FFC107 100%)'
      }
    },
    {
      primary: '#3F51B5',
      accent: '#E91E63',
      href: 'indigo-pink.css',
      isDark: false,
      isDefault: true,
      styles: {
        'background-color': '#3F51B5',
        'background': '-webkit-linear-gradient(-45deg, #3F51B5 0%, #3F51B5 50%, #E91E63 51%, #E91E63 100%)'
      }
    },
    {
      primary: '#E91E63',
      accent: '#607D8B',
      href: 'pink-bluegrey.css',
      isDark: true,
      styles: {
        'background-color': '#E91E63',
        'background': '-webkit-linear-gradient(-45deg, #E91E63 0%, #E91E63 50%, #607D8B 51%, #607D8B 100%)'
      }
    },
    /*
    {
      primary: '#9C27B0',
      accent: '#4CAF50',
      href: 'purple-green.css',
      isDark: true,
      styles: {
        'background-color': '#9C27B0',
        'background': '-webkit-linear-gradient(-45deg, #9C27B0 0%, #9C27B0 50%, #4CAF50 51%, #4CAF50 100%)'
      }
    },
    */
  ];

  constructor(
    public styleManager: StyleManager,
    private _themeStorage: ThemeStorage
  ) {
    const currentTheme = this._themeStorage.getStoredTheme();
    if (currentTheme) {
      this.installTheme(currentTheme);
    }
  }

  installTheme(theme: SiteTheme) {
    this.currentTheme = this._getCurrentThemeFromHref(theme.href);

    if (theme.isDefault) {
      this.styleManager.removeStyle('theme');
    } else {
      this.styleManager.setStyle('theme', `https://material.angular.io/assets/${theme.href}`);
    }

    if (this.currentTheme) {
      this._themeStorage.storeTheme(this.currentTheme);
    }
  }

  private _getCurrentThemeFromHref(href: string): SiteTheme {
    return this.themes.find(theme => theme.href === href);
  }












  hovering: any = null;

  @HostBinding('class.mat-elevation-z4') elevation = true;

/*
  items: any = [
    {
      className: 'pink-grey-theme',
      styles: {
        'background-color': '#e91e63',
        'background': '-webkit-linear-gradient(-45deg, #e91e63 0%, #e91e63 50%, #bdbdbd 51%, #bdbdbd 100%)'
      }
    },
    {
      className: 'deeppurple-amber-theme',
      styles: {
        'background-color': '#673ab7',
        'background': '-webkit-linear-gradient(-45deg, #673ab7 0%, #673ab7 50%, #ffc107 51%, #ffc107 100%)'
      }
    },
    {
      className: 'indigo-grey-theme',
      styles: {
        'background-color': '#3f51b5',
        'background': '-webkit-linear-gradient(-45deg, #3f51b5 0%, #3f51b5 50%, #9e9e9e 51%, #9e9e9e 100%)'
      }
    }
  ];
*/
  /*
{
  className: '',
  styles: {
    'background-color': '#f44336'
  }
},
{
  className: 'purple-green-theme',
  styles: {
    'background-color': '#2196f3'
  }
},
{
  className: 'candy-app-theme',
  styles: {
    'background-color': '#ff5722'
  }
}
*/


  // themeValue = '';
  // @Output() themeChange = new EventEmitter();

  /*
  @Input()
  get theme() {
    return this.themeValue;
  }

  set theme(val) {
    this.themeValue = val;
    this.themeChange.emit(this.themeValue);
  }


  ngOnInit() {
  }

  */

  onItemKeydown(event, className=null) {
    // event.preventDefault();
    let next = new ElementRef(event.nextSibling);
    if(event.keyCode === 9){
      // event.srcElement.nextSibling
      // next.nativeElement.focus();
      // event.preventDefault();
      console.log('onItemKeydown', event);
      this.hovering = className;
    }
    // console.log('onItemKeydown', event);
  }


}
