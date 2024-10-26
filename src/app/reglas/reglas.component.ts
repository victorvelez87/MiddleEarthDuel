import { Component } from '@angular/core';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.component.html',
  styleUrls: ['./reglas.component.css']
})
export class ReglasComponent {
  images: string[] = [
    'assets/reglas/ayuda1.jpg',
    'assets/reglas/ayuda2.jpg',
    'assets/reglas/ayuda3.jpg',
    'assets/reglas/ayuda4.jpg',
    'assets/reglas/ayuda5.jpg',
    'assets/reglas/ayuda6.jpg'
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
