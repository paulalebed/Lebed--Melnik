# Fundamentos de Ingeniería de Software - Obligatorio 2

<div style="text-align: justify">

| Identificación |                                                        |
|----------------|--------------------------------------------------------|
| Fecha          | 20/07/2021                                             |
| Clase          | M3B - Docente: Alejandro Adorjan                       |
| Integrantes    | Paula Lebed y Tamara Melnik                            |
| Link           | https://github.com/paulalebed/oblig2.git               |

## CONSTRUCCIÓN

### Aspectos generales:

Para lograr construir el programa hicimos uso de dos diferentes carpetas, las cuales contienen la información: dominio e interfaz. Por un lado, en dominio, se puede encontrar lo que es la  funcionalidad del programa: aquello que es necesario para correr la lógica del mismo. Las clases utilizadas fueron **Sistema**, **Usuario** y **Nft**. Además dentro del dominio tambien se pueden encontrar los archivos para probar el proyecto (Jest). Por otro lado, en interfaz, contamos con una carpeta que refiere a los estilos de nombre style.css y otra de scripts, llamada index.js.

### Funciones principales:
####Implementación

Para este prototipo decidimos realizar la implementacion de las funcionalidades de los siguientes casos de uso:

### **ID:** CU1: Visualizar características 

**Referencias:** 
- Características (RF4)

**Título:**  CU1

**Actor:** Sistema y Usuario

**Descripción:** El sistema deberá permitir a los usuarios ver  una serie de características de una pieza de NFT, tales como historial de precios, actual vendedor, fecha de creación de la pieza, fecha de finalización de la subasta. 

**Prioridad:** Media

**Precondición:** El usuario debe haber seleccionado el NFT del cual desea ver las características.

**Poscondición:** El sistema debe desplegar una serie de características de la pieza coleccionable.

**Curso Normal:** 

| Acción del Actor | Respuesta del sistema |
|--|--|
| **1.** Selecciona un NFT | **2.** Se amplía el NFT seleccionado en pantalla |
| **3.** Elige ver las características | **4.** Muestra la lista de características con enlaces a página web, información de los creadores, datos estadísticos de la pieza, fechas de creación y finalización de la subasta, entre otras.
##
**Cursos Alternativos:**

- **1.1** El usuario no selecciono un NFT (fín del curso)
- **3.1** El usuario no elija ver las características (fín del curso)

### **ID:** CU2: Publicar NFT

**Referencias:** 
- Conexión con Wallet (RF1)
- Listar NFT para la venta (RF5)
- Login (RF9)

**Título:**  CU2

**Actor:** Sistema y Usuario

**Descripción:** El sistema deberá permitir a sus usuarios listar un NFT para la venta.

**Prioridad:** Alta

**Precondición:** El usuario deberá tener una cuenta creada en el marketplace y deberá estar correctamente logueado. Además, deberá tener su wallet relacionada a la misma. 

**Poscondición:** El usuario será capaz de listar sus piezas coleccionables para la venta y estarán disponibles en el catálogo para que los usuarios compradores puedan elegir. 

**Curso Normal:** 

| Acción del Actor | Respuesta del sistema |
|--|--|
| **1.** Selecciona subir una pieza de NFT | **2.** Despliega la lista de categorías disponibles|
| **3.** Selecciona una categoría | **4.** El sistema pedirá al vendedor los datos de la pieza (características a completar, links necesarios, precio de la pieza) para concretar el listamiento. |
| **5.** Completa los datos del formulario y sube el archivo del NFT | **6.**  El sistema chequea que los datos del formulario (links, precio, características, información del dueño, calidad del NFT) estén completos y cumplan con los formatos. En caso de cumplir la condición lista el NFT dentro de la categoría y lo deja visible para los usuarios.|

##
**Cursos Alternativos:**

-  **1.1** El usuario no selecciona subir un NFT(fin del curso) 
- **3.1** El usuario no seleccionó categoría (fín del curso)
- **5.1**  El usuario no completa con los datos requeridos (fín del curso)



**Referencias:** 
- Características (RF4)

**Título:**  CU1

**Actor:** Sistema y Usuario

**Descripción:** El sistema deberá permitir a los usuarios ver  una serie de características de una pieza de NFT, tales como historial de precios, actual vendedor, fecha de creación de la pieza, fecha de finalización de la subasta. 

**Prioridad:** Media

**Precondición:** El usuario debe haber seleccionado el NFT del cual desea ver las características.

**Poscondición:** El sistema debe desplegar una serie de características de la pieza coleccionable.

**Curso Normal:** 

| Acción del Actor | Respuesta del sistema |
|--|--|
| **1.** Selecciona un NFT | **2.** Se amplía el NFT seleccionado en pantalla |
| **3.** Elige ver las características | **4.** Muestra la lista de características con enlaces a página web, información de los creadores, datos estadísticos de la pieza, fechas de creación y finalización de la subasta, entre otras.
##
**Cursos Alternativos:**

- **1.1** El usuario no selecciono un NFT (fín del curso)
- **3.1** El usuario no elija ver las características (fín del curso)

### **ID:** CU2: Publicar NFT

**Referencias:** 
- Conexión con Wallet (RF1)
- Listar NFT para la venta (RF5)
- Login (RF9)

**Título:**  CU2

**Actor:** Sistema y Usuario

**Descripción:** El sistema deberá permitir a sus usuarios listar un NFT para la venta.

**Prioridad:** Alta

**Precondición:** El usuario deberá tener una cuenta creada en el marketplace y deberá estar correctamente logueado. Además, deberá tener su wallet relacionada a la misma. 

**Poscondición:** El usuario será capaz de listar sus piezas coleccionables para la venta y estarán disponibles en el catálogo para que los usuarios compradores puedan elegir. 

**Curso Normal:** 

| Acción del Actor | Respuesta del sistema |
|--|--|
| **1.** Selecciona subir una pieza de NFT | **2.** Despliega la lista de categorías disponibles|
| **3.** Selecciona una categoría | **4.** El sistema pedirá al vendedor los datos de la pieza (características a completar, links necesarios, precio de la pieza) para concretar el listamiento. |
| **5.** Completa los datos del formulario y sube el archivo del NFT | **6.**  El sistema chequea que los datos del formulario (links, precio, características, información del dueño, calidad del NFT) estén completos y cumplan con los formatos. En caso de cumplir la condición lista el NFT dentro de la categoría y lo deja visible para los usuarios.|

##
**Cursos Alternativos:**

-  **1.1** El usuario no selecciona subir un NFT(fin del curso) 
- **3.1** El usuario no seleccionó categoría (fín del curso)
- **5.1**  El usuario no completa con los datos requeridos (fín del curso)

### Librerías externas:

Para llevar a cabo el proyecto, nuestro programa cuenta con dependencias de librerías externas. Esto tanto en **interfaz** como en **dominio**. Las respectivas librerías pueden ser halladas dentro de su **package.json**.

<u>En interfaz:</u>

<u>En dominio:</u>
 


