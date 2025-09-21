// src/app/home/home.component.ts
import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class Home implements OnInit {
  private title = inject(Title);

  ngOnInit() {
    this.title.setTitle('Home - Examen Segundo Parcial');
  }

  // Pide permiso real para notificaciones
  requestPermission() {
    if (!('Notification' in window)) {
      alert('Este navegador no soporta Notificaciones.');
      return;
    }
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        alert('Permiso concedido');
      } else {
        alert('Permiso denegado o bloqueado');
      }
    });
  }

  showNotification() {
    alert(`¡Simulación de notificación de prueba desde ${window.location.hostname}!`);
  }
  
}
