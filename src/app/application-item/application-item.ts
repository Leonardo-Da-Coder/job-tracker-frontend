import { Component, input, output} from '@angular/core';
import { Application } from '../application';

@Component({
  selector: 'app-application-item',
  imports: [],
  templateUrl: './application-item.html',
  styleUrl: './application-item.css',
})
export class ApplicationItem {
  application = input.required<Application>();
  deleteClicked = output<string>();

  onDelete() {
    this.deleteClicked.emit(this.application().firma)
  }
}
