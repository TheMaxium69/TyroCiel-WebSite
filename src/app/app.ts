import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ITyroUiNavbarPages, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TyroUiNavbar, TyroUiFooter],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {

  private readonly langService = inject(TyroUiLangService);

  public PROJECT_NAME = 'TyroCiel';
  public PROJECT_LOGO = 'assets/tyrolium-ui/projects/TyroCiel.png';

  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>TyroCiel</strong> is the <strong>video game studio</strong> of Tyrolium. We craft immersive, original gaming experiences with passion and total creative freedom.`
      : `<strong>TyroCiel</strong> est un <strong>studio de jeu-vidéo</strong> Français. Nous créons des expériences gaming immersives et originales avec passion et liberté créative totale. <em>Une filiale de Tyrolium.</em>`
  );

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home',   link: '/',       icon: 'ri-home-line' },
          { label: 'About',  ancre: 'about', icon: 'ri-information-line' },
          { label: 'Games',  ancre: 'games', icon: 'ri-gamepad-line' },
          { label: 'Team',   ancre: 'team',  icon: 'ri-team-line' },
        ]
      : [
          { label: 'Accueil',  link: '/',       icon: 'ri-home-line' },
          { label: 'À propos', ancre: 'about', icon: 'ri-information-line' },
          { label: 'Jeux',     ancre: 'games', icon: 'ri-gamepad-line' },
          { label: 'Équipe',   ancre: 'team',  icon: 'ri-team-line' },
        ]
  );

  public socials: ITyroUiNavbarPages[] = [
    { label: 'instagram', link: 'https://www.instagram.com/tyroliumstudio/', icon: 'ri-instagram-line' },
    { label: 'linkedin',  link: 'https://www.linkedin.com/company/tyrostudio', icon: 'ri-linkedin-fill' },
  ];
}
