import express from 'express';
import healthRouter from './src/routes/health.js';
import tasksRouter from './src/routes/tasks.js';


const PORT = process.env.PORT || 3000;
const API_PREFIX = "/api/v1";
const server = express();

/* cuando empezamos a enviar requests con un body en formato JSON (ej: POST, PUT, PATCH) necesitamos habilitar el middleware de Express llamado json() para poder acceder a esos datos en dicho formato. */
server.use(express.json());


// index route - implementar una vista HTML con el motor de plantillas EJS con la documentación de la API

server.get("/", (req, res) => {
    server.get("/", (req, res) => {
      res.send(`
        <h1>CRUD de Tareas API</h1>
        <p>API REST desarrollada con Express y persistencia en JSON.</p>

        <h2>Endpoints disponibles</h2>

        <ul>
            <li>GET /api/v1/tasks</li>
            <li>GET /api/v1/tasks/:id</li>
            <li>POST /api/v1/tasks</li>
            <li>PUT /api/v1/tasks/:id</li>
            <li>DELETE /api/v1/tasks/:id</li>
        </ul>

        <h2>Health Check</h2>

        <p>/health</p>
    `);
    });
    
});

// health check
server.use("/health", healthRouter);

server.use(`${API_PREFIX}/tasks`, tasksRouter);



// 404 Not Found
server.use((req, res, next) => {
    const error = new Error(`Not Found: ${req.method} ${req.originalUrl}`);
    error.status = 404;
    next(error);
});

// Global Error Handler
server.use((err, req, res, next) => {
    const status = err.status || 500;
    res.status(status).json({ status, error: err.message || 'Internal Server Error' });
});

server.listen(PORT, (err) => {
    if (err) {
        console.error('Error al iniciar el servidor:', err);
        return;
    }
    console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`);
});
