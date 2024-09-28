import { NgModule } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';


@NgModule()
export class IconsModule {
  constructor(
    private _domsanitizer: DomSanitizer,
    private _matIconRegistry : MatIconRegistry) {

    this._matIconRegistry.addSvgIcon("LogoT", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo-typo.svg'))
    this._matIconRegistry.addSvgIcon("Sorbonne", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/sorbonne.svg'))
    this._matIconRegistry.addSvgIcon("Gustave", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/gustave.svg'))
    this._matIconRegistry.addSvgIcon("Sncf", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/sncf.svg'))
    this._matIconRegistry.addSvgIcon("Total", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/totale.svg'))
    this._matIconRegistry.addSvgIcon("Nike", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/nike.svg'))
    this._matIconRegistry.addSvgIcon("Paris", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/paris.svg'))
    this._matIconRegistry.addSvgIcon("S", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/S.svg'))
    this._matIconRegistry.addSvgIcon("A", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/A.svg'))
    this._matIconRegistry.addSvgIcon("C", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/C.svg'))
    this._matIconRegistry.addSvgIcon("Profil", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/profil.svg'))
    this._matIconRegistry.addSvgIcon("Start", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/start.svg'))
    this._matIconRegistry.addSvgIcon("Email", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/email.svg'))
    this._matIconRegistry.addSvgIcon("Phone", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/phone.svg'))
    
    
    this._matIconRegistry.addSvgIcon("Logo", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'))
    this._matIconRegistry.addSvgIcon("LogoP", this._domsanitizer.bypassSecurityTrustResourceUrl('assets/icons/logoPnj.png'))
  }

}
