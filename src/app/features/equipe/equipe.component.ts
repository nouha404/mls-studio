import { Component } from '@angular/core';
import { Member } from '../../core/models/member';

@Component({
  selector: 'app-equipe',
  standalone: false,

  templateUrl: './equipe.component.html',
  styleUrl: './equipe.component.css'
})
export class EquipeComponent {

  markUrl = 'assets/images/mark.png'

  members: Member[] = [
    {
      name: 'Stéphanie Zwingelstein',
      role: 'Graphiste',
      imageUrl: 'assets/images/image1.png',
      icon: 'Profil'
    },
    {
      name: 'Aboubacar Marega',
      role: 'Développeur Full-Stack',
      imageUrl: 'assets/images/nouha.jpg',
      icon: 'Profil'
    },
    {
      name: 'Ikram Aityahia',
      role: 'Graphiste',
      imageUrl: 'assets/images/member3.png',
      icon: 'Profil'
    },
    {
      name: 'Ben Ylane',
      role: 'Graphiste',
      imageUrl: 'assets/images/member4.png',
      icon: 'Profil'
    },
    {
      name: 'Massinissa Aou',
      role: 'Graphiste',
      imageUrl: 'assets/images/member5.png',
      icon: 'Profil'
    },
    {
      name: 'hifzehfzh',
      role: 'Graphiste',
      imageUrl: 'assets/images/member6.png',
      icon: 'Profil'
    },
  ];

}
