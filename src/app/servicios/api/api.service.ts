import { Injectable } from '@angular/core';
import { loginIni } from '../../modelos/login.interface';
import { ResponseI } from '../../modelos/response.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UsuariosI } from '../../modelos/UsuariosI';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: string = "http://localhost:8000/api/";

  constructor(private http:HttpClient) { }

  loginByEmail(form:loginIni):Observable<ResponseI>{
    let direccion = this.url + "usuario";
    return this.http.post<ResponseI>(direccion, form);
  }

  nuevoUsuarioServ(form: UsuariosI):Observable<UsuariosI>{
    let direccion = this.url + "usuario/guardar";
    return this.http.post<UsuariosI>(direccion, form);
  }

  getAllUsuarios():Observable<UsuariosI[]>{
    let direccion = this.url + "usuario";
    return this.http.get<UsuariosI[]>(direccion);
  }

  getSingleUsuario(id: any):Observable<UsuariosI>{
    let direccion = this.url + "usuario/buscar/" + id;
    return this.http.get<UsuariosI>(direccion);
  }

  editarUsuario(form:UsuariosI, usrId: any):Observable<UsuariosI>{
    let direccion = this.url + "usuario/actualizar/" + usrId;
    return this.http.put<UsuariosI>(direccion, form);
  }

  eliminarRegistro(usrId: any):Observable<UsuariosI>{
    let direccion = this.url + "usuario/borrar/" + usrId;
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body:usrId
    }
    return this.http.delete<UsuariosI>(direccion, options);
  }
  
}
