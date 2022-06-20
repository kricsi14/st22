import { Component } from '@angular/core'
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material/core'

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
export class PlannerComponent {
  title = 'Planner form'
  isCalculating = false
  income: number = 0

  emailFormControl = new FormControl('', [Validators.required, Validators.email])
  incomeFormControl = new FormControl('', [Validators.required, Validators.min(0)])

  matcher = new MyErrorStateMatcher()

  handleEmailChange (event: Event) {
    console.log('Email entered:', (<HTMLInputElement>event.target).value)
  }

  calculatePlan () {
    console.log('Calculating...')
    this.isCalculating = true
    setTimeout(() => {
      this.isCalculating = false
      console.log('Calculating complete!')
    }, 5000)
  }
}
