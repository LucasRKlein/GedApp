import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html'
})
export class TipoDocumentoComponent implements OnInit {

  titulo = 'Documentos'

  public tipoDocumentoSelecionado: any;
  public criandoTipoDocumento: boolean;

  listaDocs = [
    {numero: '1', text: 'Boleto'},
    {numero: '2', text: 'Orçamento'},
    {numero: '3', text: 'Teste'},    
  ]

  constructor() { }

  ngOnInit() {
  }

  tipoDocumentoSelect(tipoDocumento: any) {
    this.tipoDocumentoSelecionado = tipoDocumento;
  }

  criaTipoDocumento(){
    this.criandoTipoDocumento = true;
  }

  voltar() {
    this.tipoDocumentoSelecionado = null;
    this.criandoTipoDocumento = false;
  }

}
