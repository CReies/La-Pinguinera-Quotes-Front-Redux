import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-anchor',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './anchor.component.html',
  styleUrl: './anchor.component.css',
})
export class AnchorComponent {
  @Input() href: string = '';
  @Input() text: string = '';
  @Input() blank: boolean = false;

  target: string = '';
  innerHref: boolean = false;

  ngOnInit(): void {
    this.target = this.blank ? '_blank' : '_self';

    this.href.startsWith('http')
      ? (this.innerHref = false)
      : (this.innerHref = true);
  }
}
