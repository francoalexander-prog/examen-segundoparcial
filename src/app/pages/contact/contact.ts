import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact implements OnInit{
  private title = inject(Title);
  ngOnInit(){ this.title.setTitle('Contact - Examen Segundo Parcial'); }
}
