import { Component } from '@angular/core';
import { GroupCartComponent } from '../../ui/blocks/group-cart/group-cart.component';

@Component({
  selector: 'app-group-cart-container',
  standalone: true,
  imports: [GroupCartComponent],
  templateUrl: './group-cart-container.component.html',
})
export class GroupCartContainerComponent {

}
