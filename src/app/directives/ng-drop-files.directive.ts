import { Directive, EventEmitter, ElementRef, HostListener, Input, Output } from '@angular/core';
import { FileItem } from '../models/file-item';

@Directive({
  selector: '[appNgDropFiles]'
})
export class NgDropFilesDirective {


  @Input() archivos: FileItem[]=[]
  @Output() mouseSobre: EventEmitter <boolean> = new EventEmitter();

  constructor() { }

  @HostListener("dragover",["$event"] )
  public onDragEnter(event:any){
  this.mouseSobre.emit(true)
  this._prevenir(event);
  }

  @HostListener("dragleave",["$event"] )
  public onDragLeave(event:any){
  this.mouseSobre.emit(false)
  }

  @HostListener("drop",["$event"] )
    public onDrop(event:any){
    
    const transferencia = this.getTransferencia(event);
  
    if(!transferencia){
      return; 

    
  }
this.extraerArchivos(transferencia.files)
    this._prevenir(event)
    this.mouseSobre.emit(false)
  }

  private getTransferencia(event:any){
 
    return event.dataTransfer ? event.dataTransfer : event.originalEvent.dataTransfer;
    
  }

  private extraerArchivos(archivoLista:FileList){

    console.log(archivoLista);

  }

  //validaciones

  private archivoPuedeSerCargado(archivo:File):boolean{

    if (!this.archivodropeado(archivo.name) && this._esImagen( archivo.type) ){
      return true;
    }else{
      return false;
    }

  }

  private _prevenir(event){
  
    event.preventDefault();
    event.stopPropagation();

  }

  private archivodropeado(nombreArchivo:string):boolean{
  
    for (const archivo of this.archivos){
      if (archivo.nombreArchivo === nombreArchivo){
        console.log("el archivo "+ nombreArchivo + " ya existe");
        return true;
      }
      
    }
    return false;
  }

  private _esImagen(tipoArchivo:string): boolean{
    return ( tipoArchivo === "" || tipoArchivo === undefined) ? false : tipoArchivo.startsWith("image"); 
  }

}
