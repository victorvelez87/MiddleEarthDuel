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

 displayedImages: string[] = []; // Almacena las imágenes mostradas
 currentImage: string = ''; // Imagen que se muestra actualmente

 constructor() {
  this.showRandomImage();
  }

  // Función para mostrar una imagen aleatoria sin repetición
  showRandomImage(): void {
    if (this.displayedImages.length === this.images.length) {
      this.displayedImages = []; // Reinicia las imágenes vistas si ya se han mostrado todas
    }

    let newImage: string;
    do {
      const randomIndex = Math.floor(Math.random() * this.images.length);
      newImage = this.images[randomIndex];
    } while (this.displayedImages.includes(newImage));

    this.currentImage = newImage;
    this.displayedImages.push(newImage); // Añadir la imagen actual a las ya vistas
  }

  // Función para cambiar de imagen al hacer clic
  onImageClick(): void {
    this.showRandomImage();
  }
}
