import { Component } from '@angular/core';

@Component({
  selector: 'app-ayuda-iconos',
  templateUrl: './ayuda-iconos.component.html',
  styleUrls: ['./ayuda-iconos.component.css']
})
export class AyudaIconosComponent {
  images: string[] = [
    './assets/ayudaIconos/iconos.jpg',
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
