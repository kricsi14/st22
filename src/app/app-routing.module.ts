import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { PlannerPageComponent } from './pages/planner-page/planner-page.component'

const routes: Routes = [
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '',
    component: PlannerPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
