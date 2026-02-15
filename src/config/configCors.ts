export const corsOptions = {
  origin: [
    "http://72.61.53.212", 
    "http://localhost:3000",
    "http://proyectoqa.online",
    "http://www.proyectoqa.online"
  ], // prod + dev
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
