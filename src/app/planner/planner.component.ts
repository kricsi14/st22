import { Component, DoCheck, EventEmitter, OnChanges, Output } from '@angular/core'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'
import { IPlan } from '../app.component'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState (control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted))
  }
}

@Component({
  selector: 'st-planner',
  templateUrl: './planner.component.html',
  styleUrls: ['./planner.component.scss']
})
export class PlannerComponent implements OnChanges, DoCheck {
  isCalculating = false
  income: number | null = null
  email: string = ''
  monthlyOutcome: number | null = null

  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  incomeFormControl = new FormControl('', [Validators.required, Validators.min(0)])

  matcher = new MyErrorStateMatcher()

  ngDoCheck () {
    console.log('ngDoCheck called')
  }

  ngOnChanges () {
    console.log('ngOnChanges called')
  }

  handleEmailChange (event: Event) {
    this.email = (<HTMLInputElement>event.target).value
  }

  @Output() planCalculated = new EventEmitter<IPlan>()

  calculatePlan () {
    // TODO show alert Snack
    if (this.emailFormControl.invalid || this.incomeFormControl.invalid) return

    console.log('Calculating...')
    this.isCalculating = true
    setTimeout(() => {
      this.isCalculating = false
      console.log('Calculating complete!')
      if (this.monthlyOutcome !== null && this.income !== null) {
        this.planCalculated.emit({ income: this.income, email: this.email, outcome: this.monthlyOutcome })
      }
    }, 2000)
  }
}
