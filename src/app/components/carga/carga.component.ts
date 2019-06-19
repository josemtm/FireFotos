import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { FotosService } from '../../providers/fotos.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {


  estaSobre: boolean=false;
  archivos: FileItem[]=[]

  constructor(public fotosService:FotosService) { }

  pruebaSobreElemento(event){
    console.log(event)
  }

  cargarImagenes(){

    this.fotosService.cargarImagenesFirebase(this.archivos)

  }

  ngOnInit() {
  }

}
