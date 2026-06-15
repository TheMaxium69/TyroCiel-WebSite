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
      genre: 'Plateforme HD-2D',
      genreEn: 'HD-2D Platformer',
      description: 'Rhodotales est un jeu de plateforme HD-2D ancré dans un monde médiéval fantastique. Sa mécanique signature : naviguer entre 3 plans distincts pour des séquences dynamiques et une profondeur de jeu inédite dans le genre.',
      descriptionEn: 'Rhodotales is an HD-2D platformer set in a fantastical medieval world. Its signature mechanic: shifting between 3 distinct planes for dynamic sequences and a depth of gameplay rarely seen in the genre.',
      status: 'En développement',
      statusEn: 'In development',
      logo: 'assets/games/Rhodotales.png',
      tags: ['Plateforme', 'HD-2D', 'Médiéval'],
      tagsEn: ['Platformer', 'HD-2D', 'Medieval'],
    },
    {
      name: 'TyroServ Game',
      genre: 'Aventure / Open World',
      genreEn: 'Adventure / Open World',
      description: 'Adapté de l\'univers de notre serveur Minecraft TyroServ, ce jeu d\'aventure solo en monde ouvert plonge dans un vaste univers fantastique. Il reprend et réinvente la mécanique de fusion de minerai du serveur : combinez des minerais pour forger de nouvelles capacités et de nouveaux pouvoirs.',
      descriptionEn: 'Adapted from the universe of our Minecraft server TyroServ, this solo open world adventure game dives into a vast fantasy universe. It reimagines the server\'s ore fusion mechanic: combine minerals to forge new abilities and new powers.',
      status: 'Concept',
      statusEn: 'Concept',
      logo: 'assets/tyrolium-ui/projects/TyroServ.png',
      tags: ['Aventure', 'Open World', 'Solo'],
      tagsEn: ['Adventure', 'Open World', 'Solo'],
    },
  ];

  readonly team = [
    {
      firstName: 'Maxime',
      lastName: 'Tournier',
      role: 'PDG et Fondateur du Studio',
      roleEn: 'CEO & Studio Founder',
      photo: 'assets/peoples/Maxime_Tournier.jpg',
      favGames: ['Super Mario', 'The Legend of Zelda', 'Minecraft', 'Cyberpunk 2077'],
    },
    {
      firstName: 'Mathys',
      lastName: 'Lacoque',
      role: 'Réalisateur et Développeur',
      roleEn: 'Game Director & Developer',
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
      role: 'Administrateur réseau',
      roleEn: 'Network Administrator',
      photo: 'assets/peoples/Esteban_Mignotte.jpg',
      favGames: ['Plant vs Zombie Garden Warfare', 'Age of Empire', 'Fallout'],
    },
  ];
}
