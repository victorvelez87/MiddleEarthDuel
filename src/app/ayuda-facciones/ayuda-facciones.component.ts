import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda-facciones',
  templateUrl: './ayuda-facciones.component.html',
  styleUrls: ['./ayuda-facciones.component.css']
})
export class AyudaFaccionesComponent {
  images: string[] = [
    './assets/ayudaIconos/facciones.jpg',
    // Agrega más URLs de imágenes si deseas
  ];

  showModal: boolean = false; // Controla la visibilidad del modal

  // Función para abrir el modal
  openModal(): void {
    this.showModal = true;
  }

  // Función para cerrar el modal
  closeModal(): void {
    this.showModal = false;
  }
}
