import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { ISocialLink } from '../../../core/models/shared/social-link.model';

@Component({
  selector: 'app-social-link',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './social-link.component.html',
  styleUrl: './social-link.component.css',
})
export class SocialLinkComponent {
  @Input() socialLink!: ISocialLink;
}
