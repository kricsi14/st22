import { Component, Input, OnChanges } from '@angular/core'
import { IPlan } from '../app.component'

@Component({
  selector: 'st-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnChanges {
  @Input('st-plan') inputPlan: null | IPlan = null
  plan: null | IPlan = null
  hasNewPlan: boolean = false

  ngOnChanges () {
    if (this.plan === null) this.plan = this.inputPlan
    else {
      this.hasNewPlan = true
    }
  }

  dropPreviousPlan () {
    this.hasNewPlan = false
    this.plan = this.inputPlan
  }
}
