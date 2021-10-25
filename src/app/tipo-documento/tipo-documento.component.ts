import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html'
})
export class TipoDocumentoComponent implements OnInit {

  titulo = 'Documentos'

  public tipoDocumentoSelecionado: string;


  listaDocs = [
    {numero: '1', text: 'Boleto'},
    {numero: '2', text: 'Orçamento'},
    {numero: '3', text: 'Teste'},    
  ]

  constructor() { }

  ngOnInit() {
  }

  tipoDocumentoSelect(tipoDocumento: any) {
    this.tipoDocumentoSelecionado = tipoDocumento.text;
  }

  voltar() {
    this.tipoDocumentoSelecionado = '';
  }

}
