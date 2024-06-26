# EduQuest.com

## Descripción

Este proyecto es en contraparte, el frontend de la aplicacion de tutorias en linea propuesta en el bootcamp de desarrollo talento tech

## Tabla de Contenidos

- [Instalación Local](#instalación-local)
- [Interfaz UX/UI](#interfaz)
- [Bibliotecas/Frameworks Utilizados](#bibliotecasframeworks-utilizados)

## Instalación Local

Para clonar este proyecto desde GitHub, sigue los siguientes pasos:

1. Abre tu terminal y navega hasta la carpeta donde deseas clonar el proyecto.
2. Ejecuta el siguiente comando:

   ```
   git clone https://github.com/y3sidDeve/EduQuest.git
   ```

3. Una vez que se haya completado la clonación, navega hasta la carpeta del proyecto:

   ```
   cd tutoria_edu
   ```

4. Instala las dependencias del proyecto ejecutando el siguiente comando:

   ```
   npm install
   ```

   Esto instalará todas las bibliotecas y dependencias necesarias para ejecutar el proyecto.

5. Start the server

```bash
  npm run dev
```

6. ¡Listo! Ahora puedes comenzar a utilizar el proyecto siguiendo las instrucciones en la sección de [Uso](#uso).

Recuerda que debes tener instalado Git y Node.js en tu sistema antes de realizar estos pasos.

## Interfaz UX/UI

Aquí se muestra una vista previa de la interfaz de usuario:

![Interfaz de usuario](https://private-user-images.githubusercontent.com/118916108/342971885-77cf12dc-c3fc-4924-ab26-38a86089a23e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNjM2MzQsIm5iZiI6MTcxOTM2MzMzNCwicGF0aCI6Ii8xMTg5MTYxMDgvMzQyOTcxODg1LTc3Y2YxMmRjLWMzZmMtNDkyNC1hYjI2LTM4YTg2MDg5YTIzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNlQwMDU1MzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02NDUwMWNjYjQwZTdlOTJmZGJkMGE1NzE0YmRlMjc3MjBlNjdhZjg0NzQxNDAwY2U5MjZkZWU1ZGNlYzU5MmU4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.NfmSo9U0cLsaaTpcKSul5D5hFQXacSFfdfRB7v3FPes)

![Interfaz de usuario](https://private-user-images.githubusercontent.com/118916108/342971944-5a84cfd0-b760-46e5-aba1-346877adad7e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNjQxMzksIm5iZiI6MTcxOTM2MzgzOSwicGF0aCI6Ii8xMTg5MTYxMDgvMzQyOTcxOTQ0LTVhODRjZmQwLWI3NjAtNDZlNS1hYmExLTM0Njg3N2FkYWQ3ZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNlQwMTAzNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00YjQ1MzllNWZiYzE5YzFhYjk1YjNiMGZkYmUxNTQ0MmFhZTI3Yjg4OGFkZjRjYmViMjc3MTlhYTE2YjBmOTZmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.ypwjiLDOB7Csuz13gqOjf1fZSBp4aVMNDyus5tnkbfM)

![Interfaz de usuario](https://private-user-images.githubusercontent.com/118916108/342972068-2aa958e4-7302-4719-8b4d-80c2b4a662be.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MTkzNjQxMzksIm5iZiI6MTcxOTM2MzgzOSwicGF0aCI6Ii8xMTg5MTYxMDgvMzQyOTcyMDY4LTJhYTk1OGU0LTczMDItNDcxOS04YjRkLTgwYzJiNGE2NjJiZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNjI2JTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDYyNlQwMTAzNTlaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02OWEyNmU1ZDg3YWY2Y2E5Mjg5ZTQ5ZWU2YWJhODM2NmVlN2FmMzZhYWY1Mjc0MjRiZTUwMjVmNTgyYWNhMDVmJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.jbdAxQ5MLxNHOoNhXgwZLcQ9vzvwzoR8Me4AL_ZRA4E)

## Bibliotecas/Frameworks Utilizados

- tailwindCSS
- React.js
- NextUI
- react router dom
