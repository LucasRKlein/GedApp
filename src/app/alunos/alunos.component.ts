import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  titulo = 'Aluno';

  public alunoSelecionado: string;

  public alunos = [
    {id: '1', text: 'Marta', sobrenome: 'machado', telefone: '99999-9999'  },
    {id: '2', text: 'João', sobrenome: 'machado', telefone: '99999-9999'  },
    {id: '3', text: 'Pedro', sobrenome: 'machado', telefone: '99999-9999'  },
    {id: '4', text: 'Mauro', sobrenome: 'machado', telefone: '99999-9999'  },
    {id: '5', text: 'Jarbas', sobrenome: 'machado', telefone: '99999-9999'  },
    {id: '6', text: 'Leticia', sobrenome: 'machado', telefone: '99999-9999'  },    
  ]

  alunoSelect(aluno: any) {
    this.alunoSelecionado = aluno.text;
  }

  voltar() {
    this.alunoSelecionado = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
