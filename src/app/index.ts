/// src/app/index.ts
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FORM_PROVIDERS} from 'angular2/common';

import '../style/app.scss';

import {Api} from './services/api';         // ./services/api/index.ts
import {Home} from './components/home';     // ./components/home/index.ts
//import {About} from "./components/about"; // About is an async route configured via @RouteConfig

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app', // <app></app>
  providers: [...FORM_PROVIDERS, Api],
  directives: [...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})
@RouteConfig([
    {path: '/', component: Home, name: 'Home'},
    // Async load a component using Webpack's require with es6-promise-loader
    { path: '/about', loader: () => require('./components/about')('About'), name: 'About' }
])
export class App {
  url: string = 'https://github.com/ocombe/ng2-webpack';

  constructor(public api: Api) {
  }
}
