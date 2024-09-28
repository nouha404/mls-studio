import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";
import { IconsModule } from './core/icones/icons.module';
import { FooterComponent } from "./layout/footer/footer.component";
import { FooterV2Component } from './layout/footer-v2/footer-v2.component';
import { HeroSectionComponent } from './layout/hero-section/hero-section.component';
import { HomeComponent } from './features/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    MatIcon, 
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    FooterV2Component, 
    IconsModule, 
    FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mls-studio';
}
