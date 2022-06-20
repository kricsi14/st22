import { Component, OnInit } from '@angular/core'

interface Plan {

}

@Component({
  selector: 'st-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  title = 'Finance plan'
  plan: null | Plan = null
}
