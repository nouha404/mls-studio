import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule,RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css'
})
export class HeroSectionComponent implements OnInit, OnDestroy {

  constructor(private router:Router){}
  images = [
    'assets/images/image1.png',
    'assets/images/image2.png',
    'assets/images/image3.png'
  ];

  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextImage();
    }, 3000); // Changer d'image toutes les 3 secondes
  }

  // Nettoyer l'intervalle lorsque le composant est détruit pour éviter des fuites de mémoire
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  getClassForIndicator(index: number): string {
    return index === this.currentIndex 
      ? 'bg-white transform scale-125' 
      : 'bg-gray-400';
  }

  getContact(){
    return this.router.navigateByUrl('/contact')

  }
}
