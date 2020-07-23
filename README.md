# sora-nomina-prueba
Objetivo: Diagnosticar el origen de la falla, diseñar hipótesis de solución, explicar los componentes necesarios que se utilizaran (librerías backend y frontend), Describir tareas necesarias que deben de cumplirse (ejemplo: utilizar libreria mysql para conectar con base de datos) y diseñar el sprint de trabajo asignando horas estimadas a las tareas.

## 1. Notificaciones a Empleados vía Email
### Diagnóstico
Diseñar una solución a la necesidad de poder brindar notificaciones a los empleados de la compañía para recordar el firmado de su nómina, mediante una notificación por correo electrónico a aquellos empleados que aún no han formado su nómina.  
### Hípotesis de solución
Para brindar solución a la historia de usuario de notificaciones vía email a los empleados, en lo primero que pensé fue en una base de datos, por lo cual diseñe una base de datos, la cual contiene la información necesaria del empleado, tales como su nombre, email, teléfono, compañía, salario, y un campo de estatus, el cual me serviría para verificar cuales empleados son los que se encuentran sin firmar su nómina, de tal forma el correo de notificación será enviado únicamente a los empleados que no han firmado su nómina.
### Componentes y su explicación
Los componentes que se emplearon para la historia de usuario son:
- [nodemailer](https://nodemailer.com/about/): Módulo de Node js utilizado para el envio de correos electrónicos de forma sencilla mediante un correo electrónico propio.
```bash
# Comando para instalar
npm install nodemailer
```
### Tareas
Las tareas del sprint para la historia de usuario de notificaciones vía Email son:
- Diseñar el Schema de la base de datos Empleados
- Crear los servicios de Empleados CRUD
- Investigar módulos de Node js para envio de correos electrónicos
- Importar e implementar la configuración del servicio de envio de emails con nodemailer
- Crear el servicio de envio de correos electrónicos

### Diseño Sprint
Diseño y desarrollo de las historias de usuario trabajadas en [Trello](https://trello.com/b/8UYNvw8v/kanban-template)

## 2. Notificaciones a Empleados vía teléfono
### Diagnóstico
Diseñar una solución a la necesidad de poder brindar notificaciones a los empleados de la compañía para recordar periódicamente el firmado de su nómina esto mediante notificaciones periódicas cada 15 días.
### Hípotesis de solución
Para brindar solución a la historia de usuario de notificaciones vía teléfono a los empleados, como en la historia de usuario anterior diseñe la base de datos, la cual contiene la información necesaria del empleado, sin embargo, en este caso destaca como dato principal el telefono celular, ya que esta funcionalidad es pensada como un push notification, por lo tanto las notificaciones son masivas y en el caso plantea que serán cada quince días, por lo cual el punto de partida es realizar el servicio que envía las notificaciones SMS, posterior a ello el siguiente paso es diseñar una tarea programada mediante un demonio cron, con las funcionalidades de crontab. 
### Componentes y su explicación
Los componentes que se emplearon para la historia de usuario son:
- [node-cron](https://nodecron.com/): Módulo de Node js utilizado como programador de tareas, basado en GNU crontab, lo empleamos para realizar el cronjob que ejecutara el servicio de SMS cada 15 días. 
```bash
# Comando para instalar
npm install node-cron
```
- [nexmo](https://dashboard.nexmo.com/): Empresa que proporciona APIs de comunicación entre las empresas y sus clientes, cuenta con una gran gama de APIs de comunicación, sin embrago en el caso utilizamos la API de SMS con Nexmo.
```bash
# Comando para instalar
npm install nexmo
```
### Tareas
Las tareas del sprint para la historia de usuario de notificaciones vía SMS son:
- Diseñar el Schema de la base de datos Empleados
- Crear los servicios de Empleados CRUD
- Investigar módulos de Node js para envio de mensajes de texto (SMS)
- Importar e implementar la configuración del servicio de envio de mensajes de texto con nexmo
- Crear el servicio de envio de mensajes de texto 
- Implementar la función crontab que ejecutara cada 15 días el envio de las notificaciones SMS a los celulares de los empleados.
### Diseño Sprint
Diseño y desarrollo de las historias de usuario trabajadas en [Trello](https://trello.com/b/8UYNvw8v/kanban-template)

## 3. Velocidad optimización de compilación (Diseño, no cod)
En dado caso de que se cuente con componentes dinámicos es necesario verificar que en el archivo app.module.ts, se encuentren incorporados e importados dichos componentes dinámicos que se desean utilizar, los cuales deben de ser declarados en la sección entryComponents, ya que de lo contrario se entiende que estamos usando dichos componentes dinámicos sin antes declararlos en el archivo de app.module.ts, esto hace que Angular lo interprete como si no existiera. 

## Componentes y su emplicación globales
- [express](http://expressjs.com/): Framework de Node js utilizado para el desarrollo del backend y rutas de los servicios así como desarrollo del entorno.
```bash
# Comando para instalar
npm install express
```
- [mongoose](https://mongoosejs.com/): Módulo de Node js utilizado para la conexión a la base de datos de MogoDB además de ser utilizado para el modelado de los Schemas de la aplicación.
```bash
# Comando para instalar
npm install mongoose
```
- [dotenv](https://www.npmjs.com/package/dotenv): Módulo de Node js utilizado para el uso de variables de entorno dentro de la aplicación.
```bash
# Comando para instalar
npm install dotenv
```
- [request](https://www.npmjs.com/package/request): Módulo de Node js utilizado para realizar una llamada http.
```bash
# Comando para instalar
npm install request
```
## Listado de Servicios y sus usos
- POST - addNewEmployee: Servicio para registrar un nuevo empleado
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/addNewEmployee
# Body
{
    "name":"Allie Michell Flores Sanchez",
    "payrollStatus":false,
    "mail":"alliemichellfs@gmail.com",
    "phone":8129372690,
    "company": "Empresa1",
    "payroll":20000
}
```
- GET - getAllEmployees: Servicio utilizado para mostrar todos los empleados
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/getAllEmployees
```
- PUT - updateEmployee: Servicio utilizado para actualizar los datos de un empleado por ID
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/updateEmployee/5f18707e22402a3dc8c8c9b7
# Body
{
    "name":"Allie Michell",
    "payrollStatus":false,
    "mail":"alliemichellfs@gmail.com",
    "phone":8129372690,
    "company":"Empresa2",
    "payroll":16000
}
```
- DELETE - deleteEmployee: Servicio utilizado para eliminar los datos de un empleado por ID
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/deleteEmployee/5f18707e22402a3dc8c8c9b7
```
- POST - sendMail: Servicio utilizado para enviar emails de notificación de firma a los empleados que aún no la han firmado
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/sendMail
# Body 
{
    "subject":"Firma de Nómina",
    "text":"Te recordamos firmar tu recibo de nómina",
    "payrollStatus":false
}
```
- GET - sendSMS: Servicio utilizado para enviar SMS de notificación a los empleados de la compañia
```bash
# URL
http://localhost:3000/v0.0.1/sora-nomina/employee/sendSMS
```
## Variables de entorno
```bash
# Base de datos
DB_Host = mongodb://localhost/sora-nomina
# API
DB_API = localhost:3000
```
