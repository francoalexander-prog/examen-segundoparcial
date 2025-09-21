import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  private title = inject(Title);
  ngOnInit(){ this.title.setTitle('Home - Examen Segundo Parcial'); }
}
