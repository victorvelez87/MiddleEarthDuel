import { Component } from '@angular/core';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent {
  images: string[] = [
    'assets/personajes/Elrond.png',
    'assets/personajes/Galadriel.png',
    'assets/personajes/Gandalf.png',
    'assets/personajes/Saruman.png',
    'assets/personajes/Sauron.png',
    'assets/personajes/Smaug.png',
    'assets/personajes/Tom Bombadil.png',
    'assets/personajes/Witch-King.png',
    'assets/personajes/Eowins.png'
 ];

 currentImage: string = ''; // Imagen que se muestra actualmente
 currentIndice: number = -1; 

 constructor() {
  this.showRandomImage();
  }

  // Función para mostrar la imagen siguiente
  showRandomImage(): void {
    if (this.currentIndice === this.images.length - 1) {
      this.currentIndice = -1; // Reinicia las imágenes vistas si ya se han mostrado todas
    }

    this.currentIndice = this.currentIndice + 1;

    this.currentImage = this.images[this.currentIndice];
  }

  // Función para cambiar de imagen al hacer clic
  onImageClick(): void {
    this.showRandomImage();
  }
}
