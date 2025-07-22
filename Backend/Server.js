const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost:27017/yamaha', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB')).catch(console.error);

const Moto = mongoose.model('Moto', {
  nombre: String,
  descripcion: String,
  precio: Number,
  imagen: String,
  caracteristicas: String,
  video: String
});

const Mensaje = mongoose.model('Mensaje', {
  nombre: String,
  email: String,
  mensaje: String
});

app.use(cors());
app.use(express.json());

app.get('/api/motos', async (req, res) => {
  const motos = await Moto.find();
  res.json(motos);
});

app.post('/api/motos', async (req, res) => {
  const nueva = new Moto(req.body);
  await nueva.save();
  res.json(nueva);
});

app.put('/api/motos/:id', async (req, res) => {
  const editada = await Moto.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(editada);
});

app.delete('/api/motos/:id', async (req, res) => {
  await Moto.findByIdAndDelete(req.params.id);
  res.json({ msg: 'Eliminado' });
});

app.post('/api/contacto', async (req, res) => {
  const nuevo = new Mensaje(req.body);
  await nuevo.save();
  res.json(nuevo);
});

app.get('/api/contacto', async (req, res) => {
  const mensajes = await Mensaje.find();
  res.json(mensajes);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
