import { Component, Input, input } from '@angular/core';

type ITitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css',
})
export class TitleComponent {
  @Input() title = 'Title';
  @Input() titleType!: ITitleType;
}
