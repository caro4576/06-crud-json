CRUD de Tareas - Node.js y Express

Este proyecto consiste en una API REST desarrollada con Node.js y Express que permite gestionar tareas utilizando un archivo JSON como almacenamiento.

La aplicación permite:

* Crear tareas.
* Consultar todas las tareas.
* Consultar una tarea por ID.
* Modificar tareas existentes.
* Eliminar tareas.

Cada tarea contiene:

* id
* title
* description
* priority
* completed
* createdAt
* updatedAt

Para ejecutar el proyecto:

```bash
npm install
npm run dev
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

Rutas disponibles:

Obtener todas las tareas:

```http
GET /api/v1/tasks
```

Obtener una tarea por ID:

```http
GET /api/v1/tasks/:id
```

Crear una tarea:

```http
POST /api/v1/tasks
```

Ejemplo de body:

```json
{
  "title": "Nueva tarea",
  "description": "Descripción de ejemplo",
  "priority": "high"
}
```

Actualizar una tarea:

```http
PUT /api/v1/tasks/:id
```

Ejemplo de body:

```json
{
  "completed": true
}
```

Eliminar una tarea:

```http
DELETE /api/v1/tasks/:id
```

Health Check:

```http
GET /health
```

Para probar los endpoints se utilizó Thunder Client.

Los datos se almacenan en el archivo:

```text
src/data/tasks.json
```
