import { Component, OnInit, inject  } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ui',
  imports: [],
  templateUrl: './ui.html',
  styleUrl: './ui.scss'
})
export class Ui implements OnInit{
  private title = inject(Title);
  ngOnInit(){ this.title.setTitle('UI - Examen Segundo Parcial'); }
}
