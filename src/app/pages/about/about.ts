import { Component, OnInit, inject   } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About implements OnInit{
  private title = inject(Title);
  ngOnInit(){ this.title.setTitle('About - Examen Segundo Parcial'); }
}
