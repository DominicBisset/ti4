import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <ti-toggleList></ti-toggleList>
  `,
})
export class AppComponent  { name = 'Dom'; }
