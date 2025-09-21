# ExamenSegundoparcial

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.1.

## Framework CSS elegido
- Se ha elegido **Bootstrap 5.3.8** como framework principal.
## Template
- Nombre: Modern Business - Start Bootstrap Theme
- Fuente: https://startbootstrap.com/template/modern-business
- Licencia: MIT
## Prueba offline (Home)
1. ng build 
2. npx http-server ./dist/examen-segundoparcial/browser -p 8080
3. Abrir http://localhost:8080, confirmar Service Worker registrado en DevTools.
4. En DevTools -> Network activar "Offline" y recargar; la Home debe cargarse.
5. Resultado: Se probó el modo offline en DevTools. Al recargar con Enter la Home se sirve desde cache. El comportamiento con el botón de recarga depende del navegador lo cual es esperado