import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuariosI } from 'src/app/modelos/UsuariosI';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  datUsr: UsuariosI | undefined;
  nuevoUsr= new FormGroup({
    nombre: new FormControl(""),
    correo: new FormControl(""),
    usuario: new FormControl(""),
    password: new FormControl(""),
  });

  ngOnInit(): void {
  }

  nuevoUsrForm(form: UsuariosI){
    this.api.nuevoUsuarioServ(form).subscribe(data => {
      console.log(data);
    });
    // console.log(form);
  }

}
