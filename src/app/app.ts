import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Applications } from './applications';
import { ApplicationItem } from './application-item/application-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ApplicationItem],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('job-tracker-frontend');
  applicationsService = inject(Applications);
}
