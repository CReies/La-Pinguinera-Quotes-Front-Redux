import { Component } from '@angular/core';
import { HeaderComponent } from '../../ui/blocks/header/header.component';
import { HeaderContainerFacade } from './header-container.facade';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header-container.component.html',
})
export class HeaderContainerComponent {
  constructor(private readonly facade: HeaderContainerFacade) {}

  changeCustomerRegisterDate(data: Date) {
    this.facade.changeCustomerRegisterDate(data);
  }
}
