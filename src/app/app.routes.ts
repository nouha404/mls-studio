import { Routes } from '@angular/router';
import { ContactComponent } from './features/contact/contact.component';
import { EquipeComponent } from './features/equipe/equipe.component';

export const routes: Routes = [
    {
        path: "home",
        loadChildren:()=> import("./features/features.module").then(module=>module.FeaturesModule)
    },

    {
        path:"contact",
        component: ContactComponent
    },
    {
        path:"equipe",
        component: EquipeComponent
    },
    
    {
        path: '',
        redirectTo:'home', 
        pathMatch : "full"
      },
];
