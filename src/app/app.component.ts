import { Component } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'todoApp';
  person = 'ABK';
  items = [
    { description: 'Kahvaltı', action: 'No' },
    { description: 'Sinema', action: 'No' },
    { description: 'Ders', action: 'No' },
    { description: 'Spor', action: 'No' },
  ];
}
