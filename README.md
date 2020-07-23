# sora-nomina-backend
Objetivo: Diagnosticar el origen de la falla, diseñar hipótesis de solución, explicar los componentes necesarios que se utilizaran (librerías backend y frontend), Describir tareas necesarias que deben de cumplirse (ejemplo: utilizar libreria mysql para conectar con base de datos) y diseñar el sprint de trabajo asignando horas estimadas a las tareas.

## 1. Notificaciones a Empleados vía Email
### Diagnóstico
Diseñar una solución a la necesidad de poder brindar notificaciones a los empleados de la compañia para recordar el firmado de su nómina, mediante una notificación por correo eléctronico a auqellos empleados que aún no han formado su nómina. 
### Hípotesis de solución
Para brindar solución a la historia de usuario de notificaciones vía email a los empleados, en lo primero que pensé fue en una base de datos, por lo cual diseñe una base de datos, la cual contiene la información necesaria del empleado, tales como su nombre, email, teléfono, compañía, salario, y un campo de estatus, el cual me serviría para verificar cuales empleados son los que se encuentran sin firmar su nómina, de tal forma el correo de notificación será enviado únicamente a los empleados que no han firmado su nómina.
### Componentes y su explicación
Los componentes que se emplearon para la historia de usuario son:
- [nodemailer](https://nodemailer.com/about/): Módulo de Nodejs utilizado para el envio de correos eléctronicos de forma sencilla mediante un correo eléctronico propio. 
```bash
# Comando para instalar
npm install nodemailer
```
### Tareas
Las tareas del sprint para la historia de usuario de notificaciones vía Email son:
- Diseñar el schema de la base de datos Empleados
- Crear los servicios de Empleados CRUD
- Investigar módulos de Nodejs para envio de correos eléctronicos
- Importar e implementar la configuración del servicio de envio de emails con nodemailer
- Crear el servicio de envio de correos eléctronicos
### Diseño Sprint
Diseño y desarrollo de las historias de usuario trabajadas en [Trello](https://trello.com/b/8UYNvw8v/kanban-template)

## 2. Notificaciones a Empleados vía teléfono
### Diagnóstico
Diseñar una solución a la necesidad de poder brindar notificaciones a los empleados de la compañia para recordar periodicamente el firmado de su nómina esto mediante notificaciones periodicas cada 15 días. 
### Hípotesis de solución
Para brindar solución a la historia de usuario de notificaciones vía teléfono a los empleados, como en la historia de usuario anterior diseñe la base de datos, la cual contiene la información necesaria del empleado, sin embargo, en este caso destaca como dato principal el telefono celular, ya que esta funcionalidad es pensada como un push notification, por lo tanto las notificaciones son masivas y en el caso plantea que serán cada quince días, por lo cual el punto de partida es realizar el servicio que envía las notificaciones SMS, posterior a ello el siguiente paso es diseñar una tarea programada mediante un demonio cron, con las funcionalidades de crontab. 
### Componentes y su explicación
Los componentes que se emplearon para la historia de usuario son:
- [node-cron](https://nodecron.com/): Módulo de Nodejs utilizado como programador de tareas, basado en GNU crontab, lo empleamos para realizar el cronjob que ejecutara el servicio de SMS cada 15 días. 
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
- Diseñar el schema de la base de datos Empleados
- Crear los servicios de Empleados CRUD
- Investigar módulos de Nodejs para envio de mensajes de texto (SMS)
- Importar e implementar la configuración del servicio de envio de mensajes de texto con nexmo
- Crear el servicio de envio de mensajes de texto 
- Implementar la función crontab que ejecutara cada 15 días el envio de las notificaciones SMS a los celulares de los empeados.
### Diseño Sprint
Diseño y desarrollo de las historias de usuario trabajadas en [Trello](https://trello.com/b/8UYNvw8v/kanban-template)

## 3. Velocidad optimización de compilación (Diseño, no cod)


## Componentes y su emplicación globales
- [express](http://expressjs.com/): Framework de Nodejs utilizado para el desarrollo del backend y rutas de los servicios así como desarrollo del entorno.
```bash
# Comando para instalar
npm install express
```
- [mongoose](https://mongoosejs.com/): Módulo de Nodejs utilizado para la conección a la base de datos de Mongodb ademas de ser utilizado para el modelado de los schemas de la aplicación.
```bash
# Comando para instalar
npm install mongoose
```
- [dotenv](https://www.npmjs.com/package/dotenv): Módulo de Nodejs utilizado para el uso de variables de entorno denotro de la aplicación. 
```bash
# Comando para instalar
npm install dotenv
```
- [request](https://www.npmjs.com/package/request): Módulo de Nodejs utilizado para realizar una llamada http.
```bash
# Comando para instalar
npm install request
```
## Variables de entorno
```bash
# Base de datos
DB_Host = mongodb://localhost/sora-nomina
# API
DB_API = localhost:3000
```
