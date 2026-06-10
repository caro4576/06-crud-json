CRUD JSON API
API REST desarrollada con Node.js y Express para la gestión de tareas utilizando persistencia en un archivo JSON.
Tecnologías utilizadas
* Node.js
* Express
* JSON como almacenamiento persistente

Instalación

```bash
npm install
```

 Ejecución

```bash
npm run dev
```

Servidor disponible en:

```text
http://localhost:3000
```

Endpoints

 Obtener todas las tareas

```http
GET /api/v1/tasks
```

Obtener una tarea por ID

```http
GET /api/v1/tasks/:id
```

Crear una tarea

```http
POST /api/v1/tasks
```

Body:

```json
{
  "title": "Nueva tarea",
  "description": "Descripción de la tarea",
  "priority": "high"
}
```

Actualizar una tarea

```http
PUT /api/v1/tasks/:id
```

Body:

```json
{
  "completed": true
}
```

Eliminar una tarea

```http
DELETE /api/v1/tasks/:id
```
Estructura de una tarea

```json
{
  "id": "uuid",
  "title": "Título",
  "description": "Descripción",
  "priority": "low",
  "completed": false,
  "createdAt": "2026-06-06T20:00:00.000Z",
  "updatedAt": "2026-06-06T20:00:00.000Z"
}
```
