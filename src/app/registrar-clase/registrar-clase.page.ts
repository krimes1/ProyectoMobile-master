import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-clase',
  templateUrl: './registrar-clase.page.html',
  styleUrls: ['./registrar-clase.page.scss'],
})
export class RegistrarClasePage {

  // Variables para almacenar los datos del formulario
  nombreClase: string = '';
  seccion: string = '';

  constructor(private router: Router) {}

  // Método que se ejecuta al enviar el formulario
  registrarClase() {
    if (this.nombreClase && this.seccion) {
      // Obtener el último ID guardado en localStorage o asignar 0 si es el primer registro
      let lastId = localStorage.getItem('lastClassId');
      let newId = lastId ? parseInt(lastId) + 1 : 1; // Si no existe, el primer ID será 1

      // Guardar el nuevo ID en localStorage
      localStorage.setItem('lastClassId', newId.toString());

      // Crear el objeto de la clase a registrar
      const nuevaClase = {
        id: newId,
        nombreClase: this.nombreClase,
        seccion: this.seccion,
      };

      // Aquí podrías guardar `nuevaClase` en localStorage o en algún otro lugar
      let clasesRegistradas = JSON.parse(localStorage.getItem('clases') || '[]');
      clasesRegistradas.push(nuevaClase);
      localStorage.setItem('clases', JSON.stringify(clasesRegistradas));

      // Mostrar mensaje o redirigir a otra página
      alert('Clase registrada con éxito!');

      // Redirigir a la página de clases registradas
      this.router.navigate(['/ver-clases']);
    } else {
      // Mensaje de error si faltan campos
      alert('Por favor, complete todos los campos');
    }
  }

  // Método para obtener el último elemento registrado en localStorage
  obtenerUltimaClase() {
    const clasesRegistradas = JSON.parse(localStorage.getItem('clases') || '[]');
    
    if (clasesRegistradas.length > 0) {
      return clasesRegistradas[clasesRegistradas.length - 1];  // Retorna el último elemento
    } else {
      return null;  // Si no hay clases registradas, retorna null
    }
  }

  // Llamar al método para obtener la última clase registrada
  mostrarUltimaClase() {
    const ultimaClase = this.obtenerUltimaClase();
    if (ultimaClase) {
      alert(`Última clase registrada: ${ultimaClase.nombreClase} - Sección: ${ultimaClase.seccion}`);
    } else {
      alert('No hay clases registradas aún.');
    }
  }
}
