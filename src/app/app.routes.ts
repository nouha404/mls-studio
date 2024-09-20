import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "home",
        loadChildren:()=> import("./features/features.module").then(module=>module.FeaturesModule)
    },
    
    {
        path: '',
        redirectTo:'login', 
        pathMatch : "full"
      },
];
