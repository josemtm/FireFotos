import { Component, OnInit } from '@angular/core';
import { FileItem } from '../../models/file-item';
import { FotosService } from '../../providers/fotos.service';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.component.html',
  styleUrls: ['./carga.component.css']
})
export class CargaComponent implements OnInit {

  archivos: FileItem[]=[]

  constructor(public fotosService:FotosService) { }

  cargarImagenes(){

    this.fotosService.cargarImagenesFirebase(this.archivos)

  }

  ngOnInit() {
  }

}
