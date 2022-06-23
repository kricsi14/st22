import { Component } from '@angular/core'
import { IPlan } from '../../app.component'

@Component({
  selector: 'app-planner-page',
  templateUrl: './planner-page.component.html',
  styleUrls: ['./planner-page.component.scss']
})
export class PlannerPageComponent {
  plan: null | IPlan = null

  handlePlanCalculated (plan: IPlan) {
    this.plan = plan
  }
}
