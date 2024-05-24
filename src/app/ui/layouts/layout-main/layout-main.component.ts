import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderContainerComponent } from '../../../containers/header-container/header-container.component';
import { FooterContainerComponent } from '../../../containers/footer-container/footer-container.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [RouterOutlet, HeaderContainerComponent, FooterContainerComponent],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.css',
})
export class LayoutMainComponent {}
