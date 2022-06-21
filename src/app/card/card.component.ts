import { Component, Input } from '@angular/core'

@Component({
  selector: 'st-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('title') title: string | undefined
}
