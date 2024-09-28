import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer-v2',
  standalone: true,
  imports: [RouterModule, RouterLink, RouterLinkActive, MatIcon],
  templateUrl: './footer-v2.component.html',
  styleUrl: './footer-v2.component.css'
})
export class FooterV2Component {

}
