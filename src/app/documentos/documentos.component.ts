import { Component, OnInit } from '@angular/core';
import { DocumentoModel } from '../models/documento';
import * as moment from 'moment';
import { TipoDocumentoModel } from '../models/tipo-documento';


@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  titulo = 'Documentos'

  public documentoSelecionado: DocumentoModel;
  public dataEmissaoSelecionada: string;
  public dataNotificacaoSelecionada: string;
  public dataVenctoSelecionada: string;

  public criandoDocumento: boolean;

  listaDocs: DocumentoModel[] = [
    {id: 1, descricao: 'Boleto Kabum', tipoId: 1, dataEmissao: new Date(2021,2,2), dataVencto: new Date(2022,2,2), dataNotificacao: new Date(2022,1,1)},
    {id: 2, descricao: 'Orçamento Casa verde', tipoId: 2, dataEmissao: new Date(), dataVencto: new Date(), dataNotificacao: new Date()},
    {id: 3, descricao: 'Doc Teste 1', tipoId: 3, dataEmissao: new Date(), dataVencto: new Date(), dataNotificacao: new Date()},
    {id: 4, descricao: 'Doc Teste 2', tipoId: 1, dataEmissao: new Date(), dataVencto: new Date(), dataNotificacao: new Date()},
  ]
  listaTipos: TipoDocumentoModel[] = [
    {id: 1, nome: 'Boleto'},
    {id: 2, nome: 'Orçamento'},
    {id: 3, nome: 'Teste'},    
  ]

  constructor() { }

  ngOnInit() {
  }

  getDocumentoTipoNome(tipoId: number) {
    return this.listaTipos.find(x => x.id == tipoId).nome;
  }

  fromJsonDate(date: Date): string {
    if (!date) {
      return null;
    }
    return moment(date).format('YYYY-MM-DD');
  }

  fromJsonDateTime(date: Date): string {
    if (!date) {
      return null;
    }
    return moment(date).format('YYYY-MM-DDTHH:mm:ss');
  }

  documentoSelect(documento: DocumentoModel) {
    this.dataEmissaoSelecionada = this.fromJsonDate(documento.dataEmissao);
    this.dataNotificacaoSelecionada = this.fromJsonDate(documento.dataNotificacao);
    this.dataVenctoSelecionada = this.fromJsonDate(documento.dataVencto);
    this.documentoSelecionado = documento;
  }

  criaDocumento(){
    this.criandoDocumento = true;
  }

  voltar() {
    if(this.documentoSelecionado){
      this.documentoSelecionado = null;
    }
    if(this.criandoDocumento){
      this.criandoDocumento = false;
    }
  }

}
