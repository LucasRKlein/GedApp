import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ContatosComponent } from './contatos/contatos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocumentosComponent } from './documentos/documentos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { TipoDocumentoComponent } from './tipo-documento/tipo-documento.component';


const routes: Routes = [

  // quando eu nao colocar nada ele vai enviar pro Documentos
  { path: '', redirectTo: 'documentos', pathMatch: 'full' },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'documentos', component: DocumentosComponent },
  { path: 'tiposDocumentos', component: TipoDocumentoComponent },
  { path: 'contatos', component: ContatosComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
