import { Component, Directive, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Directive()
export class BaseComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  // conversor de data
  fromJsonDate(date: Date): string {
    if (!date) {
      return null;
    }
    return moment(date).format('YYYY-MM-DD');
  }

  // Implementar o formulario nas classes de baixo
  criarForm() {    
  }

  //implementar o model submit nos components 
  modelSubmit() {
  }

}
