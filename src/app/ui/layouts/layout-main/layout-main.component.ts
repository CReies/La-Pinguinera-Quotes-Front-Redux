import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../blocks/header/header.component';
import { FooterComponent } from '../../blocks/footer/footer.component';

@Component({
  selector: 'app-layout-main',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './layout-main.component.html',
  styleUrl: './layout-main.component.css',
})
export class LayoutMainComponent {}
