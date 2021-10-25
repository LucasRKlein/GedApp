import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  titulo = 'Documentos'

  public documentoSelecionado: string;


  listaDocs = [
    {numero: '1', descr: 'Boleto Kabum', tipo: 'Boleto', dataEmissao: '20/01/2019', dataVencto: '30/02/2020'},
    {numero: '2', descr: 'Orçamento Venda casa verde', tipo: 'Orçamento', dataEmissao: '10/03/2020', dataVencto: '22/07/2021'},
    {numero: '3', descr: 'Doc Teste 1', tipo: 'Teste', dataEmissao: '24/07/2021', dataVencto: '12/08/2021'},
    {numero: '4', descr: 'Doc Teste 2', tipo: 'Teste', dataEmissao: '07/12/2018', dataVencto: '15/10/2020'},
  ]

  listaTipos = [
    {numero: '1', text: 'Boleto'},
    {numero: '2', text: 'Orçamento'},
    {numero: '3', text: 'Teste'},    
  ]

  constructor() { }

  ngOnInit() {
  }

  documentoSelect(documento: any) {
    this.documentoSelecionado = documento.descr;
  }

  voltar() {
    this.documentoSelecionado = '';
  }

}
