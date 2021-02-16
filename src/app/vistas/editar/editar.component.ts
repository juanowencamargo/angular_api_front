import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosI } from '../../modelos/UsuariosI';
import { ApiService } from '../../servicios/api/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  constructor(private activateRouter:ActivatedRoute, private router:Router, private api:ApiService) { }

  dataIUsuario: UsuariosI | undefined;
  editarForm= new FormGroup({
    nombre: new FormControl(""),
    correo: new FormControl(""),
    usuario: new FormControl(""),
    password: new FormControl(""),
  });

  ngOnInit(): void {
    let usrId = this.activateRouter.snapshot.paramMap.get('id');
    console.log(usrId);
    this.api.getSingleUsuario(usrId).subscribe(data => {
      // console.log(data);
      this.dataIUsuario = data;
      // console.log(this.dataTarea);
      this.editarForm.setValue({
        "nombre": this.dataIUsuario.nombre,
        "correo": this.dataIUsuario.correo,
        "usuario": this.dataIUsuario.usuario,
        "password": this.dataIUsuario.password
      });
      // console.log(this.editarForm.value);
    });
  }

  actualizarForm(form: UsuariosI){
    let usrId = this.activateRouter.snapshot.paramMap.get('id');
    this.api.editarUsuario(form, usrId).subscribe(data => {
      console.log(data);
    });
    // console.log(tareaId);
  }

  eliminar(){
    let usrId = this.activateRouter.snapshot.paramMap.get('id');
    this.api.eliminarRegistro(usrId).subscribe(data => {
      console.log(data);
    });
  }


}
