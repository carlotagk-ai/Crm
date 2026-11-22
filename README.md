# UNAV Sports 360 · Demostración para GitHub Pages

Esta carpeta contiene una versión del prototipo preparada para consultarse desde el navegador. Se abre directamente con el perfil de estudiante. El botón superior permite alternar entre la app y el CRM.

Todos los perfiles y registros son de ejemplo. La demo usa el almacenamiento del navegador para mostrar cómo se reflejan los cambios entre ambos espacios. Cada navegador tiene sus propios datos. No se necesitan credenciales para explorar la demo. El servidor Ruby y la base de datos SQLite no forman parte de esta edición.

## Recorrido de ejemplo

1. Abre el CRM y entra en **Oportunidades**. Hay dos solicitudes de pádel ya preparadas para la misma franja.
2. Selecciona **Preparar esta sesión** y completa el nombre, la acogida y los costes de ejemplo. Revisa los recursos y aprueba la sesión.
3. Cambia a la app de **Alex Demo** y acepta la invitación desde **Mis experiencias**.
4. Vuelve a **Oportunidades** para consultar la aceptación. **Resultados del piloto** incluye, por separado, un historial ficticio para ver cómo se muestran el seguimiento y el coste.
5. Puedes reiniciar los datos de la demo desde el Inicio o el Dashboard.

La reserva y el pago simulado de un perfil externo, así como el seguimiento de incidencias, también se pueden probar. El resto de pantallas permite explorar datos de ejemplo. Las acciones que requieren el servidor original, como el check-in o el envío de campañas, están fuera del alcance de esta edición.

## Publicar

1. Crea un repositorio público en GitHub, por ejemplo **unav-sports-360**.
2. Sube el contenido de esta carpeta a la raíz de la rama **main**. El archivo **index.html** y la carpeta **src** deben quedar al mismo nivel. Si puedes ver archivos ocultos, incluye **.nojekyll**.
3. Abre **Settings → Pages**. En **Source** selecciona **Deploy from a branch**. Selecciona **main** y **/(root)** y pulsa **Save**.
4. Cuando GitHub muestre **Visit site**, usa la dirección que indique. Añade **?space=app** o **?space=crm** al enlace de la página principal para abrir cada espacio. Con **?space=app&user=4** abres el perfil externo.
5. Comprueba los enlaces desde una ventana privada o desde otro dispositivo antes de enviarlos.

Documentación oficial: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
