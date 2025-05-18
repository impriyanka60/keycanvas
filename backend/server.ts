import express from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

const app = express();
const server = http.createServer(app);

// Setup Socket.IO server
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

app.use(cors());
app.use(express.json());

// Endpoint to check server
app.get('/', (req, res) => {
  res.send('Whiteboard server is running.');
});

interface ClientData {
  roomId: string;
  data: any;
}

io.on('connection', (socket: Socket) => {
  console.log(`🔌 New client connected: ${socket.id}`);

  // Join a room
  socket.on('join-room', (roomId: string) => {
    socket.join(roomId);
    console.log(`🧑‍🎨 ${socket.id} joined room: ${roomId}`);

    // Notify others
    socket.to(roomId).emit('user-joined', socket.id);
  });

  // Handle drawing updates from clients
  socket.on('canvas-data', ({ roomId, data }: ClientData) => {
    // Broadcast to others in the room
    socket.to(roomId).emit('canvas-data', data);
  });

  // Handle disconnects
  socket.on('disconnect', () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

// Start server
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`✅ Server listening on http://localhost:${PORT}`);
});
