import { Component } from '@angular/core';

@Component({
  selector: 'app-bot-imagen',
  templateUrl: './bot-imagen.component.html',
  styleUrls: ['./bot-imagen.component.css']
})
export class BotImagenComponent {
  images: string[] = [
    'assets/botCartas/1.jpg',
    'assets/botCartas/2.jpg',
    'assets/botCartas/3.jpg',
    'assets/botCartas/4.jpg',
    'assets/botCartas/5.jpg',
    'assets/botCartas/6.jpg',
    'assets/botCartas/7.jpg',
    'assets/botCartas/8.jpg',
    'assets/botCartas/9.jpg',
    'assets/botCartas/10.jpg',
    'assets/botCartas/11.jpg',
    'assets/botCartas/12.jpg'
    // Agrega más URLs de imágenes si deseas
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
