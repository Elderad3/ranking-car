import { Ano } from "../models/ano"
import { Mes } from "../models/mes"
import { Injectable} from '@angular/core';
import { Seguimento } from "../models/seguimento";
import { SubSeguimento } from "../models/subSeguimento";


@Injectable({
  providedIn: 'root'
})
export class UtilService {

constructor() {}

seguimentos: Seguimento[] =[
  {value: 1, nome: "Carros"},
  {value: 2, nome: "Motos"},

]
subSeguimentos: SubSeguimento[] =[
  {value: 1, nome: "Automóveis*", seguimento: {value: 1, nome: "Autos"}},
  {value: 2, nome: "Todos os subseguimentos", seguimento: {value: 2, nome: "Motos"}},
  {value: 3, nome: "City", seguimento: {value: 2, nome: "Motos"}},
  {value: 4, nome: "Custom", seguimento: {value: 2, nome: "Motos"}},
  {value: 5, nome: "Trail/Fun", seguimento: {value: 2, nome: "Motos"}},
  {value: 6, nome: "Maxtrail", seguimento: {value: 2, nome: "Motos"}},
  {value: 7, nome: "Naked/Roadster", seguimento: {value: 2, nome: "Motos"}},
  {value: 8, nome: "Scooter/Cub", seguimento: {value: 2, nome: "Motos"}},
  {value: 9, nome: "Sport", seguimento: {value: 2, nome: "Motos"}},
  {value: 10, nome: "Touring", seguimento: {value: 2, nome: "Motos"}},
 
]


anos:Ano[] = [
    {value: 2017},
    {value: 2018},
    {value: 2019},
    {value: 2020},
    {value: 2021},
]
meses:Mes[] = [
    {value: 13, nome: "Todos os Meses"},
    {value: 1, nome: "Janeiro"},
    {value: 2, nome: "Fevereiro"},
    {value: 3, nome: "Março"},
    {value: 4, nome: "Abril"},
    {value: 5, nome: "Maio"},
    {value: 6, nome: "Junho"},
    {value: 7, nome: "Julho" },
    {value: 8, nome: "Agosto" },
    {value: 9, nome: "Setembro" },
    {value: 10, nome: "Outubro" },
    {value: 11, nome: "Novembro" },
    {value: 12, nome: "Dezembro" },

]

nomeMes = (numeroMes: number):any => {
  switch(numeroMes){
   case 1 : return 'Janeiro'
   case 2 : return 'Fevereiro'
   case 3 : return 'Março'
   case 4 : return 'Abril'
   case 5 : return 'Maio'
   case 6 : return 'Junho'
   case 7 : return 'Julho'
   case 8 : return 'Agosto'
   case 9 : return 'Setembro'
   case 10: return 'Outubro'
   case 11: return 'Novembro'
   case 12: return 'Dezembro'
   case 13: return 'Todos os Meses'
   default : undefined
   
  }
}

CHART_COLLORS = ['#001219', '#005f73', '#0a9396', '#94d2bd', '#e9d8a6', '#ee9b00', '#ca6702', '#bb3e03', '#ae2012', '#9b2226', 
'#264653', '#2a9d8f', '#e9c46a', '#f4a261', '#e76f51', '#f9c80e', '#f86624', '#ea3546', '#662e9b', '#43bccd']

agruparLista = (lista: any, propriedade: any) => {
    return lista.reduce(function (total: any, obj: any) {
      let chave = obj[propriedade];
      if (!total[chave]) {
        total[chave] = [];
      }
      total[chave].push(obj);
      return total;
    }, {});
  };

}