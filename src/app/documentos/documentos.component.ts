import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  titulo = 'Documentos'

  listaDocs = [
    {numero: '1', descr: 'Boleto', dataEmissao: '20/01/2019', dataVencto: '30/02/2020'},
    {numero: '2', descr: 'Orçamento', dataEmissao: '10/03/2020', dataVencto: '22/07/2021'},
    {numero: '3', descr: 'Doc Teste 1', dataEmissao: '24/07/2021', dataVencto: '12/08/2021'},
    {numero: '4', descr: 'Doc Teste 2', dataEmissao: '07/12/2018', dataVencto: '15/10/2020'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
