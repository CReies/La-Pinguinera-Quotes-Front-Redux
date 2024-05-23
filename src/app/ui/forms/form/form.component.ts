import { Component } from '@angular/core';
import { ElementComponent } from '../../elements/element/element.component';
import { BlockComponent } from '../../blocks/block/block.component';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ElementComponent, BlockComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {}
