import { Component, inject, ViewEncapsulation } from '@angular/core';
import { TyroUiCTA, TyroUiLangService } from 'tyrolium-ui';

@Component({
  selector: 'app-home',
  imports: [TyroUiCTA],
  templateUrl: './home.html',
  encapsulation: ViewEncapsulation.None,
})
export class Home {
  readonly lang = inject(TyroUiLangService).lang;

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
      logo: 'assets/games/Rhodotales.png',
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
      logo: 'assets/tyrolium-ui/projects/TyroServ.png',
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
      photo: 'assets/peoples/Maxime_Tournier.jpg',
      favGames: ['Super Mario', 'The Legend of Zelda', 'Minecraft', 'Cyberpunk 2077'],
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Producteur',
      roleEn: 'Producer',
      photo: 'assets/peoples/Mathys_Lacoque.jpg',
      favGames: ['Xenoblade Chronicles X', 'Final Fantasy', 'Monster Hunter'],
    },
    {
      firstName: 'Arnaud',
      lastName: 'Monel',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/peoples/Arnaud_Monel.jpg',
      favGames: ['Monster Hunter', 'Titanfall'],
    },
    {
      firstName: 'Noa',
      lastName: 'Guilhot',
      role: 'Développeur',
      roleEn: 'Developer',
      photo: 'assets/peoples/Noa_Guilhot.jpg',
      favGames: ['Persona', 'Monster Hunter', 'Pragmata', 'Enshrouded'],
    },
    {
      firstName: 'Esteban',
      lastName: 'Mignotte',
      role: 'Administrateur réseaux',
      roleEn: 'Network Administrator',
      photo: 'assets/peoples/Esteban_Mignotte.jpg',
      favGames: ['Plant vs Zombie Garden Warfare', 'Age of Empire', 'Fallout'],
    },
  ];
}
