import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public senhasService: SenhasService) {}

  inputNovaSenha: string = '';

  criarSenhaPrioritaria(): void {
    this.senhasService.criarSenhaPrioritaria();
    this.inputNovaSenha = this.senhasService.senhaChamada?.numero || ''; // Atualiza a senha visível
  }

  criarSenhaGeral(): void {
    this.senhasService.criarSenhaGeral();
    this.inputNovaSenha = this.senhasService.senhaChamada?.numero || ''; // Atualiza a senha visível
  }

  criarSenhaExame(): void {
    this.senhasService.criarSenhaExame();
    this.inputNovaSenha = this.senhasService.senhaChamada?.numero || ''; // Atualiza a senha visível
  }
}
