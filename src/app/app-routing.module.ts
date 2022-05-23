import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingDetailComponent } from './pages/ranking/ranking-detail/ranking-detail.component';
import { RankingMainComponent } from './pages/ranking/ranking-main/ranking-main.component';

const ROUTES: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: RankingMainComponent },
  { path: 'carro/:id', component: RankingDetailComponent }

 // { path: 'contaMain', loadChildren: () => import('./pages/ranking/ranking-main/ranking-main.module').then(m => m.RankingMainModule) },
];


@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
