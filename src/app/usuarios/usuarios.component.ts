import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../models/usuario';



interface usuario {
  id: string,
  nome: string,
  sobrenome: string,
  telefone: string,
  documento: string,
  login: string,
  senha: string,
  nivel_de_acesso: number
};

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  titulo = 'Aluno';

  public usuarioSelecionado: UsuarioModel;
  public criandoUsuario: boolean;

  public usuarios: UsuarioModel[] = [
    {id: 1, nome: 'Marta', sobrenome: 'machado', telefone: 99999-9999, cpf: '00000000000', login: 'teste', senha: '123456', nivelAcesso: 1  },
    {id: 2, nome: 'João', sobrenome: 'machado', telefone: 99999-9999, cpf: '00000000000' , login: 'teste', senha: '123456' , nivelAcesso: 0  },
    {id: 3, nome: 'Pedro', sobrenome: 'machado', telefone: 99999-9999, cpf: '00000000000' , login: 'teste', senha: '123456', nivelAcesso:  0  },
    {id: 4, nome: 'Mauro', sobrenome: 'machado', telefone: 99999-9999 , cpf: '00000000000', login: 'teste', senha: '123456' , nivelAcesso: 0  },
    {id: 5, nome: 'Jarbas', sobrenome: 'machado', telefone: 99999-9999 , cpf: '00000000000', login: 'teste', senha: '123456' , nivelAcesso: 0  },
    {id: 6, nome: 'Leticia', sobrenome: 'machado', telefone: 99999-9999, cpf: '00000000000' , login: 'teste', senha: '123456', nivelAcesso:  0  },    
  ]

  usuarioSelect(usuario: UsuarioModel) {
    this.usuarioSelecionado = usuario;
  }

  criaUsuario(){
    this.criandoUsuario = true;
  }

  voltar() {
    if(this.usuarioSelecionado){
      this.usuarioSelecionado = null;
    }
    if(this.criandoUsuario){
      this.criandoUsuario = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
