import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  titulo = 'Professores'

  listaProfessores = [
    {id: '1', text: 'Lauro', discp: 'Matemática'},
    {id: '2', text: 'Bebeto', discp: 'Português'},
    {id: '3', text: 'Ronaldo', discp: 'Física'},
    {id: '4', text: 'Fernando', discp: 'Inglês'},
  ]

  constructor() { }

  ngOnInit() {
  }

}
