import { Component } from '@angular/core'

export interface IPlan {
  email: string
  income: number
  outcome: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}
