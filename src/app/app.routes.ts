import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { tyroUiErrorRoutes, TyroUiSeo, tyroUiLocalizedRoutes } from 'tyrolium-ui';

/* ─── SEO (titre + description par page, FR / EN) ─────────────────────── */

const SEO_HOME: TyroUiSeo = {
  fullTitle:   { fr: 'TyroCiel - Studio de Jeu-Vidéo Français', en: 'TyroCiel - French Video Game Studio' },
  description: { fr: 'TyroCiel est un studio de jeu-vidéo français. Nous créons des expériences gaming immersives et originales avec passion et liberté créative totale. Une filiale de Tyrolium.', en: 'TyroCiel is a French video game studio. We create immersive and original gaming experiences with passion and complete creative freedom. A Tyrolium subsidiary.' },
};

export const routes: Routes = tyroUiLocalizedRoutes([
  { path: '',    component: Home, data: { seo: SEO_HOME } },
  ...tyroUiErrorRoutes(),
]);
