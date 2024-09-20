import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IconsModule {
  constructor(
    private _domsanitizer: DomSanitizer,
    private _matIconRegistry : MatIconRegistry) {

    this._matIconRegistry.addSvgIcon("Json", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/eyes-slash.svg'))
    
    
  }
 }
