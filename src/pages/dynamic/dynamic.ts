import { Component } from '@angular/core';
import { NavController, MenuController, Events } from 'ionic-angular';

@Component({
  selector: 'page-dynamic',
  templateUrl: 'dynamic.html'
})
export class DynamicPage {

  _user = {
    userimg:'https://avatars2.githubusercontent.com/u/11835988?v=4&s=120',
    name:'游客',
  };

  constructor(
    public navCtrl: NavController,
    public menuCtrl: MenuController,
    public events: Events
  ) {
    events.subscribe('user', (user) => {
      this._user = user;
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

}
