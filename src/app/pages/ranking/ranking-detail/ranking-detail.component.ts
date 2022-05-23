import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { ErrorService } from 'src/app/shared/services/error.service';
import { RankingService } from '../ranking.service';

@Component({
  selector: 'app-ranking-detail',
  templateUrl: './ranking-detail.component.html'
})
export class RankingDetailComponent implements OnInit {

  id: any
  loading: boolean = false
  ranking: Ranking[] = [];
  dataGraficoRankingQuantidade: any = []
  dataGraficoRankingPosicao: any = []


  constructor(private route: ActivatedRoute, private rankingService: RankingService,
    private errorService: ErrorService, private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.rankingPorCarro(this.id)
    
  }

    /**
   * Busca ranking com base no carro
   * @param ano 
   * @param mes 
   */
     rankingPorCarro(id_carro: string): void {
      this.loading = !this.loading
      this.rankingService.rankingPorCarro(id_carro).pipe(
        take(1)
      ).subscribe((ranking) => {
        this.ranking = ranking.filter(item => item.mes != 13 );
        this.dataGraficoRankingQuantidade = this.popularGraficoRankingQuantidade()
        this.dataGraficoRankingPosicao = this.popularGraficoRankingPosicao()
        this.loading = !this.loading
      }, err => {
        this.errorService.handle(err)
      })
    }

    popularGraficoRankingQuantidade() {
      const dataGrafico: any = []
      this.ranking.filter(item => item.mes != 13).forEach(item => {
        dataGrafico.push({
          label:`${item.mes}/${item.ano}`,
          valor: item.quantidade
        })
      })
      return dataGrafico
    }

    popularGraficoRankingPosicao() {
      const dataGrafico: any = []
      this.ranking.filter(item => item.mes != 13).forEach(item => {
        dataGrafico.push({
          label:`${item.mes}/${item.ano}`,
          valor: item.posicao
        })
      })
      return dataGrafico
    }

    voltar(){
      this.location.back();
    }
}
