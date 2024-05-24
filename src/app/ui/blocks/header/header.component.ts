import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SvgComponent } from '../../elements/svg/svg.component';
import { RouterModule } from '@angular/router';
import { AnchorComponent } from '../../elements/anchor/anchor.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SvgComponent, AnchorComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {

}
