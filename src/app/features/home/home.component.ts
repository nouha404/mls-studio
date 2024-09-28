import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../layout/hero-section/hero-section.component';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent,MatIcon,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  imagesSiteWeb = [
    'assets/images/SITEWEB.png',
    'assets/images/SITEWEB2.png',
  ];

  imagesAmelioration = [
    'assets/images/image1.png',
    'assets/images/image2.png',
    'assets/images/image3.png',
  ];

  imagesCommunication = [
    'assets/images/COM.jpg',
    'assets/images/COMTWO.jpg',
    'assets/images/SITEWEB.png',
  ];

  currentIndexSiteWeb = 0;
  currentIndexAmelioration = 0;
  currentIndexCommunication = 0;

  intervalId: any;

  

  ngOnInit() {
    
      this.intervalId = setInterval(() => {
      this.nextImage('siteWeb');
      this.nextImage('amelioration');
      this.nextImage('communication');
    }, 3000); // Change l'image toutes les 3 secondes
  }

  nextImage(carrousel: string) {
    if (carrousel === 'siteWeb') {
      this.currentIndexSiteWeb = (this.currentIndexSiteWeb + 1) % this.imagesSiteWeb.length;
    } else if (carrousel === 'amelioration') {
      this.currentIndexAmelioration = (this.currentIndexAmelioration + 1) % this.imagesAmelioration.length;
    } else if (carrousel === 'communication') {
      this.currentIndexCommunication = (this.currentIndexCommunication + 1) % this.imagesCommunication.length;
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  getClassForIndicator(index: number, currentIndex: number): string {
    return index === currentIndex 
      ? 'bg-white transform scale-125' 
      : 'bg-gray-400';
  }
  

  

}
