import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaseComponent } from '../library/base-component/base.component';
import { TipoDocumentoModel } from '../models/tipo-documento';

@Component({
  selector: 'app-tipo-documento',
  templateUrl: './tipo-documento.component.html'
})
export class TipoDocumentoComponent extends BaseComponent implements OnInit {

  titulo = 'Documentos'

  public tipoDocumentoSelecionado: any;
  public criandoTipoDocumento: boolean;

  listaDocs: TipoDocumentoModel[] = [
    {id: 1, nome: 'Boleto'},
    {id: 2, nome: 'Orçamento'},
    {id: 3, nome: 'Teste'},    
  ]

  constructor(private fb: FormBuilder) {
    super();
    this.criarForm();
   }

  ngOnInit() {
  }

  criarForm() {
    this.form = this.fb.group({      
      nome: ['', Validators.required],      
    });
  }

  tipoDocumentoSelect(tipoDocumento: TipoDocumentoModel) {
    this.tipoDocumentoSelecionado = tipoDocumento;

    this.form.patchValue(tipoDocumento)
  }

  modelSubmit() {
    console.log(this.form.value)
  }

  criaTipoDocumento(){
    this.criandoTipoDocumento = true;
  }

  voltar() {
    this.tipoDocumentoSelecionado = null;
    this.criandoTipoDocumento = false;
  }

}
