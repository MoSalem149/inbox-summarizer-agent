import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SummaryService, SummaryResponse } from '../services/summary';

@Component({
  selector: 'app-summary-form',
  imports: [ReactiveFormsModule],
  templateUrl: './summary-form.html',
  styleUrl: './summary-form.css',
})
export class SummaryFormComponent {
  form: FormGroup;
  result: SummaryResponse | null = null;
  loading = false;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private summaryService: SummaryService,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.minLength(20)]],
    });
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    this.loading = true;
    this.result = null;
    this.errorMessage = null;

    this.summaryService.summarize(this.form.value.email).subscribe({
      next: (res) => {
        this.result = res;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.errorMessage =
          err?.error?.error ?? 'Something went wrong. Check the API and try again.';
      },
    });
  }
}
