import { Component, OnInit } from '@angular/core';
import { ConsumoApiService } from '../consumo-api.service';
@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.css'
})
export class CadastrarUsuarioComponent {
  idCarteirinha: string = '';
  nome: string = '';
  matricula: string = '';
  visivel: boolean = false;
  textoDaDiv: string = '';

  constructor(private apiService: ConsumoApiService) { }

  async onSubmit(){
    var usuario = {
      idCarteirinha: this.idCarteirinha,
      nome: this.nome,
      matricula: this.matricula
    };
    this.visivel = true;
    this.apiService.postCadastro(usuario).subscribe(response => {
      console.log('Cadastro enviado com sucesso!', response);
      this.idCarteirinha = '';
      this.nome = '';
      this.matricula = '';
      this.textoDaDiv = "Cadastro salvo com sucesso!";
    }, error => {
      console.error('Erro ao enviar cadastro:', error);
      this.textoDaDiv = "Cadastro com erro!";
    });
  }

  async buscarCarteirinha(){
    this.apiService.getUltimaCarteirinha().subscribe(data => {
      this.idCarteirinha = data.carteirinha;
    });
  }
}