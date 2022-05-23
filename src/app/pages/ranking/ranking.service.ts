
import { Ranking } from '../../shared/models/ranking.model';

import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import {UtilService } from 'src/app/shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient, private utilService: UtilService) {}

  rankingPorAnoEMes(ano: number, mes: number): Observable<Ranking[]>{
    return this.http.get<Ranking[]>(`${APP_API}/ranking/${ano}/${mes}`)
  }

  rankingPorCarro(id_carro: string){
    return this.http.get<Ranking[]>(`${APP_API}/carro/${id_carro}`)
  }

  separarRankingPorMarca(ranking: Ranking[]) {
    const rankingMarca = []
    const listaAgrupadaPorMarca = this.utilService.agruparLista(ranking, 'marca')
    for (let marca in listaAgrupadaPorMarca) {
      let quantidade = listaAgrupadaPorMarca[marca].reduce(function (a: any, b: any) { return a + b["quantidade"]; }, 0);
      rankingMarca.push({ marca, quantidade });
      
    }
    rankingMarca.sort((x, y) => { return y.quantidade - x.quantidade })
    return rankingMarca
  };

}


