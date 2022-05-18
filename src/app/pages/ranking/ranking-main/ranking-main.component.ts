
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit} from '@angular/core';
import { take } from 'rxjs/operators';
import { ErrorService } from '../../../shared/services/error.service';
import { RankingService } from './../ranking.service';
import { Ranking } from 'src/app/shared/models/ranking.model';
import { anos, meses} from 'src/app/shared/services/util.service';
import { Ano } from 'src/app/shared/models/ano';
import { Mes } from 'src/app/shared/models/mes';

@Component({
  selector: 'app-ranking-main',
  templateUrl: './ranking-main.component.html'
})
export class RankingMainComponent implements OnInit {

  ranking: Ranking[] = [];
  dezPrimeiros: Ranking[] = [];
  dataGraficoRanking: any = [] 
  dataGraficoMarcas: any = [] 
  rankingPorMarca: any = []
  anos: Ano[] =[]
  meses: Mes[] = []
  ano: number = new Date().getFullYear()-1
  mes: number = new Date().getMonth()+1
  loading: boolean = false
  isEmpty: boolean = false
  rankingForm: FormGroup


  constructor(
    private fb: FormBuilder,
    private rankingService: RankingService,
    private errorService: ErrorService) {
      console.log(this.ano, this.mes)
      this.rankingForm = this.fb.group({
        ano: [this.ano, Validators.required],
        mes: [this.mes],
      });
     }

  ngOnInit() {
    this.anos = anos
    this.meses = meses
    this.rankingPorAnoEMes(this.ano, this.mes)
  }

  popularGraficoRanking(){
    const dataGrafico: any = []
    this.ranking.forEach(item => {
    dataGrafico.push({
      label: item.modelo,
      valor: item.quantidade
    })
    })
    return dataGrafico
    }
  
    popularGraficoMarcas(){
      const dataGrafico: any = []
      this.rankingPorMarca.forEach((item: { marca: string; quantidade: number; }) => {
      dataGrafico.push({
        label: item.marca,
        valor: item.quantidade
      })
      })
      return dataGrafico
      }

  

  /**
   * Busca ranking com base no ano e no mes
   * @param ano 
   * @param mes 
   */
  rankingPorAnoEMes(ano: number, mes: number) {
    this.loading = true
    this.rankingService.rankingPorAnoEMes(ano,mes).pipe(
      take(1)
    ).subscribe((ranking) => {
      this.ranking = ranking;
      this.ranking.length ? this.isEmpty = false : this.isEmpty = true
      this.dezPrimeiros = this.ranking.filter(item => item.posicao <= 10)
      this.rankingPorMarca = this.rankingService.separarRankingPorMarca(this.ranking)
      this.dataGraficoRanking = this.popularGraficoRanking()
      this.dataGraficoMarcas = this.popularGraficoMarcas()
    }, err => {
      this.errorService.handle(err)
    })
    this.loading = false
  }


  buscar(){
    console.log(this.rankingForm.value.ano)
    this.rankingPorAnoEMes(this.rankingForm.value.ano, this.rankingForm.value.mes)
  }


}
