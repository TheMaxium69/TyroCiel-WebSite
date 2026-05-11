import { Component, computed, inject, ViewEncapsulation } from '@angular/core';
import { ITyroUiNavbarPages, TyroUiCTA, TyroUiFooter, TyroUiNavbar, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-root',
  imports: [TyroUiNavbar, TyroUiFooter, TyroUiCTA],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None,
})
export class App {

  private readonly langService = inject(TyroUiLangService);

  /*
  *
  * PROJECT VARIABLE
  *
  * */

  public PROJECT_NAME = 'TyroCiel';
  public PROJECT_LOGO = 'assets/TyroCiel.png';

  public PROJECT_CONTENT = computed(() =>
    this.langService.lang() === 'en'
      ? `<strong>TyroCiel</strong> is the <strong>video game studio</strong> of Tyrolium. We craft immersive, original gaming experiences with passion and total creative freedom.`
      : `<strong>TyroCiel</strong> est le <strong>studio de jeu-vidéo</strong> de Tyrolium. Nous créons des expériences gaming immersives et originales avec passion et liberté créative totale.`
  );

  readonly lang = this.langService.lang;

  /*
  *
  * PAGES
  *
  * */

  public pages = computed<ITyroUiNavbarPages[]>(() =>
    this.langService.lang() === 'en'
      ? [
          { label: 'Home',   link: '/',       icon: 'ri-home-line' },
          { label: 'About',  link: '/#about', icon: 'ri-information-line' },
          { label: 'Games',  link: '/#games', icon: 'ri-gamepad-line' },
          { label: 'Team',   link: '/#team',  icon: 'ri-team-line' },
        ]
      : [
          { label: 'Accueil',  link: '/',       icon: 'ri-home-line' },
          { label: 'À propos', link: '/#about', icon: 'ri-information-line' },
          { label: 'Jeux',     link: '/#games', icon: 'ri-gamepad-line' },
          { label: 'Équipe',   link: '/#team',  icon: 'ri-team-line' },
        ]
  );

  public socials: ITyroUiNavbarPages[] = [
    { label: 'discord', link: 'https://discord.com/invite/km8h5jHezt', icon: 'ri-discord-fill' },
    { label: 'youtube', link: 'https://www.youtube.com/@tyrolium',     icon: 'ri-youtube-fill' },
    { label: 'twitter', link: 'https://x.com/TyroliumE',               icon: 'ri-twitter-x-fill' },
    { label: 'github',  link: 'https://github.com/tyrolium',           icon: 'ri-github-fill' },
  ];

  /*
  *
  * PAGE DATA
  *
  * */

  readonly stars = Array.from({ length: 20 }, (_, i) => i);

  readonly games = [
    {
      name: 'Rhodotales',
      genre: 'RPG / Aventure',
      genreEn: 'RPG / Adventure',
      description: 'Plongez dans un monde fantastique aux couleurs chatoyantes. Rhodotales est un RPG narratif où chaque choix façonne le destin de votre héros dans un univers riche et vivant.',
      descriptionEn: 'Dive into a vibrant fantasy world. Rhodotales is a narrative RPG where every choice shapes your hero\'s destiny in a rich and living universe.',
      status: 'En développement',
      statusEn: 'In development',
      logo: 'assets/TyroCiel.png',
      tags: ['RPG', 'Aventure', 'Solo'],
      tagsEn: ['RPG', 'Adventure', 'Solo'],
    },
    {
      name: 'TyroServ Game',
      genre: 'Multijoueur / Sandbox',
      genreEn: 'Multiplayer / Sandbox',
      description: 'L\'univers TyroServ prend vie dans un jeu sandbox multijoueur, inspiré de nos années d\'expérience dans la création et la gestion de serveurs Minecraft.',
      descriptionEn: 'The TyroServ universe comes alive in a multiplayer sandbox game, inspired by our years of experience creating and managing Minecraft servers.',
      status: 'Concept',
      statusEn: 'Concept',
      logo: 'assets/TyroServ.png',
      tags: ['Multijoueur', 'Sandbox', 'Survie'],
      tagsEn: ['Multiplayer', 'Sandbox', 'Survival'],
    },
  ];

  readonly team = [
    {
      firstName: 'Maxime',
      lastName: 'Tournier',
      role: 'Directeur du Studio',
      roleEn: 'Studio Director',
      photo: 'assets/Maxime_Tournier.jpg',
      favGames: ['Super Mario Galaxy', 'The Legend of Zelda: Ocarina of time', 'Minecraft', 'Cyberpunk 2077'],
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Producteur',
      roleEn: 'Product',
      photo: 'assets/Maxime_Tournier.jpg',
      favGames: ['Xenoblade Chronicles', 'Final Fantasy', 'Monster Hunter'],
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Producteur',
      roleEn: 'Product',
      photo: 'assets/Maxime_Tournier.jpg',
      favGames: ['Xenoblade Chronicles', 'Final Fantasy', 'Monster Hunter'],
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Producteur',
      roleEn: 'Product',
      photo: 'assets/Maxime_Tournier.jpg',
      favGames: ['Xenoblade Chronicles', 'Final Fantasy', 'Monster Hunter'],
    },
  ];

}
