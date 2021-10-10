import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacaoService } from '../service/autorizacao.service';

@Injectable({
  providedIn: 'root'
})
export class AutorizadoGuard implements CanActivate {

  constructor(
    private autorizadoService: AutorizacaoService,
    private routerService: Router
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      // const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();
    // if (usuarioEstaLogado)
    //   return true;

    const demorar: Promise<boolean> = new Promise<boolean>((res) => {
      setTimeout(() => {
        console.log("Promise resolvido");
        res(true);
      }, 3000);
    })
  
    return demorar;
    // this.routerService.navigate(["/login"]);  
    // return false;
  }
  
}
