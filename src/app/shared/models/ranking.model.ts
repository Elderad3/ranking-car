import { BaseResourceModel } from './base-resource.model';
export class Ranking extends BaseResourceModel {
    ano: number = 0
    mes: number = 0
    categoria: string = ''
    url_image_marca: string = ''
    marca: string = ''
    modelo: string = ''
    id_carro: string = ''
    posicao: number = 0
    marca_modelo: string = ''
    quantidade: number = 0
}