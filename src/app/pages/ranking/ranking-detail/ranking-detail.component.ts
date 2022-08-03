import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { ErrorService } from 'src/app/shared/services/error.service';
import { RankingService } from '../ranking.service';
import { UtilService } from 'src/app/shared/services/util.service';
import { Meta, Title } from '@angular/platform-browser';

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
  titulo: string = ''


  constructor(private route: ActivatedRoute, private rankingService: RankingService,
    private errorService: ErrorService, private location: Location, 
    public utilService: UtilService,
    private titleService: Title,
    private metaService: Meta) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.rankingPorAutomovel(this.id)
  }

    /**
   * Busca ranking com base no carro
   * @param ano 
   * @param mes 
   */
     rankingPorAutomovel(idt_auto: string): void {
      this.loading = !this.loading
      this.rankingService.rankingPorAutomovel(idt_auto).pipe(
        take(1)
      ).subscribe((ranking) => {
        this.ranking = ranking.filter(item => item.mes != 13 );
        this.atualizarTituloEMetaTag()
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
          label:`${this.utilService.nomeMes(item.mes)}/${item.ano}`,
          valor: item.quantidade
        })
      })
      return dataGrafico
    }

    popularGraficoRankingPosicao() {
      const dataGrafico: any = []
      this.ranking.filter(item => item.mes != 13).forEach(item => {
        dataGrafico.push({
          label:`${this.utilService.nomeMes(item.mes)}/${item.ano}`,
          valor: item.posicao
        })
      })
      return dataGrafico
    }

    voltar(){
      this.location.back();
    }

    atualizarTituloEMetaTag(){
      this.titulo = `Emplacamentos ${this.ranking[0]?.marca} ${this.ranking[0]?.modelo}`
      this.titleService.setTitle(this.titulo);
      this.metaService.updateTag({ name: 'description', content: `Emplacamentos ${this.ranking[0]?.marca} ${this.ranking[0]?.modelo}`});
    }
}
