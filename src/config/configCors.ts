export const corsOptions = {
  origin: ["http://72.61.53.212", "http://localhost:3000"], // prod + dev
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE","PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
