import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { AboutPageComponent } from './pages/about-page/about-page.component'
import { PlannerPageComponent } from './pages/planner-page/planner-page.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: '/planner',
    pathMatch: 'full'
  },
  {
    path: 'planner',
    component: PlannerPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
