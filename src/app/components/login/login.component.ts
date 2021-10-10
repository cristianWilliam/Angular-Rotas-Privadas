import { Component, OnInit } from '@angular/core';
import { AutorizacaoService } from 'src/app/service/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private autorizacaoService:AutorizacaoService ) { }

  ngOnInit(): void {
  }


  obterDescricaoLogin = () => 
    this.autorizacaoService.obterLoginStatus() ? "Estou Autorizado" : "Nao Estou Autorizado";

  loginClick() {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }
}
