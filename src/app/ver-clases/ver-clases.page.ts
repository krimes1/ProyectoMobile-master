import { Component } from '@angular/core';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-ver-clases',
  templateUrl: './ver-clases.page.html',
  styleUrls: ['./ver-clases.page.scss'],
})
export class VerClasesPage {

  clases: any[] = [];

  constructor() {}

  // Método que se ejecuta cuando la vista se va a cargar
  ionViewWillEnter() {
    this.obtenerClases();
  }

  // Cargar las clases de localStorage
  obtenerClases() {
    const clasesGuardadas = JSON.parse(localStorage.getItem('clases') || '[]');
    this.clases = clasesGuardadas;
  }
}
