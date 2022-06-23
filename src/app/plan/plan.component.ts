import { Component, Input, OnChanges } from '@angular/core'
import { IPlan } from '../app.component'

@Component({
  selector: 'st-plan[st-plan]',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent implements OnChanges {
  @Input('st-plan') inputPlan!: null | IPlan
  plan: null | IPlan = null
  hasNewPlan: boolean = false

  ngOnChanges () {
    console.log('CHANGES')
    if (this.plan === null) this.plan = this.inputPlan
    else {
      this.hasNewPlan = true
    }
  }

  handleUpdateClick () {
    this.hasNewPlan = false
    this.plan = this.inputPlan
  }
}
