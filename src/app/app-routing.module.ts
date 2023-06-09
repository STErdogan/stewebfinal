import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayoutPage } from './layout/main-layout/main-layout.page';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/public/login/login.module').then(
        (m) => m.LoginPageModule
      ),
  },
  {
    path: 'profile-completion',
    loadChildren: () =>
      import(
        './pages/public/profile-completion/profile-completion.module'
      ).then((m) => m.ProfileCompletionPageModule),
  },
  {
    path: 'profile',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user/profile/profile.module').then(
            (m) => m.ProfilePageModule
          ),
      },
    ],
  },
  {
    path: 'boards',
    component: MainLayoutPage,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/user/boards/boards.module').then(
            (m) => m.BoardsPageModule
          ),
      },
    ],
  },
  {
    path: 'main-layout',
    loadChildren: () =>
      import('./layout/main-layout/main-layout.module').then(
        (m) => m.MainLayoutPageModule
      ),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
