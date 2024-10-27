import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'middle-earth-duel';

  private audio = new Audio();
  isPlaying: boolean = true; // Estado de la reproducción
  buttonText: string = 'Mute'; // Texto inicial del botón

  ngOnInit() {
    this.audio.src = 'assets/musica/Señor_De_Los_Anillos.mp3';
    this.audio.load();
    this.audio.play();
    this.audio.loop = true;
  }

  toggleAudio() {
    if (this.isPlaying) {
      this.audio.pause();
      this.buttonText = 'Music';
    } else {
      this.audio.play();
      this.buttonText = 'Mute';
    }
    this.isPlaying = !this.isPlaying;
  }

  ngOnDestroy() {
    // Detener la música al salir de la página o destruir el componente
    this.audio.pause();
    this.audio.currentTime = 0; // Opcional: Reinicia la canción al principio
  }
}
