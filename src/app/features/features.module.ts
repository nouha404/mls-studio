import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { ContactComponent } from './contact/contact.component';
import { EquipeComponent } from './equipe/equipe.component';
import { IconsModule } from '../core/icones/icons.module';


@NgModule({
  declarations: [
    ContactComponent,
    EquipeComponent,
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    MatIconModule,
    
  ]
})
export class FeaturesModule { }