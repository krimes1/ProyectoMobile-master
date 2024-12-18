import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil.module').then(m => m.PerfilPageModule),
    canActivate: [AuthGuard] // Protege la ruta
  },
  {
    path: 'recuperarcontra',
    loadChildren: () => import('./recuperarcontra/recuperarcontra.module').then(m => m.RecuperarcontraPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then(m => m.RegistroPageModule)
  },
  {
    path: 'usuario-administrador',
    loadChildren: () => import('./usuario-administrador/usuario-administrador.module').then(m => m.UsuarioAdministradorPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'error-acceso',
    loadChildren: () => import('./error-acceso/error-acceso.module').then(m => m.ErrorAccesoPageModule)
  },
  {
    path: 'ver-clases',
    loadChildren: () => import('./ver-clases/ver-clases.module').then(m => m.VerClasesPageModule)
  },
  {
    path: 'registrar-clase',
    loadChildren: () => import('./registrar-clase/registrar-clase.module').then(m => m.RegistrarClasePageModule)
  },
  {
    path: '**',
    redirectTo: '/error-acceso' // Manejo de rutas desconocidas
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
