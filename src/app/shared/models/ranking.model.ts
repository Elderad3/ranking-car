import { BaseResourceModel } from './base-resource.model';
export class Ranking extends BaseResourceModel {
    ano: number = 0
    mes: number = 0
    seguimento: number = 0
    subseguimento: number = 0
    marca: string = ''
    modelo: string = ''
    marca_modelo: string = ''
    idt_auto: string = ''
    posicao: number = 0
    quantidade: number = 0
}