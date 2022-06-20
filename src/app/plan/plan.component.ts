import { Component, Input, OnInit } from '@angular/core'
import { IPlan } from '../app.component'

@Component({
  selector: 'st-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  title = 'Finance plan'
  @Input('st-plan') plan: null | IPlan = null
}
