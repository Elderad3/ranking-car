
import { Ranking } from '../../shared/models/ranking.model';

import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APP_API } from 'src/app/app.api';
import { Observable } from 'rxjs';
import { agruparLista } from 'src/app/shared/services/util.service';

@Injectable({
  providedIn: 'root'
})
export class RankingService {

  constructor(private http: HttpClient) {}

  rankingPorAnoEMes(ano: number, mes: number): Observable<Ranking[]>{
    return this.http.get<Ranking[]>(`${APP_API}/ranking/${ano}/${mes}`)
  }

  separarRankingPorMarca(ranking: Ranking[]) {
    const rankingMarca = []
    const listaAgrupadaPorMarca = agruparLista(ranking, 'marca')
    for (let marca in listaAgrupadaPorMarca) {
      let quantidade = listaAgrupadaPorMarca[marca].reduce(function (a: any, b: any) { return a + b["quantidade"]; }, 0);
      rankingMarca.push({ marca, quantidade });
      
    }
    rankingMarca.sort((x, y) => { return y.quantidade - x.quantidade })
    return rankingMarca
  };

}


