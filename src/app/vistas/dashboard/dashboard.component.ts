import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { UsuariosI } from 'src/app/modelos/UsuariosI';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  
  ListaUsr: UsuariosI[] | undefined;

  constructor(private api:ApiService, private router: Router) { }

  ngOnInit(): void {
    this.api.getAllUsuarios().subscribe(data => {
      console.log(data);
      this.ListaUsr = data;
    });
  }

  editarUsr(id: any){
    this.router.navigate(['editar', id]);
    // console.log(id);
  }
  
  nuevoUsrL(){
    this.router.navigate(['nuevo']);
  }

}
