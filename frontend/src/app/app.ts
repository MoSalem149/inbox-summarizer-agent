import { Component } from '@angular/core';
import { SummaryFormComponent } from './summary-form/summary-form';

@Component({
  selector: 'app-root',
  imports: [SummaryFormComponent],
  template: '<app-summary-form />',
})
export class App {}
