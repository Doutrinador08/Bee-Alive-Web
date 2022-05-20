import { Router } from "express";
import Meliponario from "./database/Meliponario.js";

const router = Router();

router.get('/meliponarios', (req, res) => {
  const meliponarios = Meliponario.readAll();

  res.json(meliponarios);
});

router.post('/meliponarios', (req, res) => {
  const meliponario = req.body;

  const newMeliponario = Meliponario.create(meliponario);

  res.json(newMeliponario);
});

router.put('/meliponarios/:id', (req, res) => {
  const id = Number(req.params.id);

  const meliponario = req.body;

  const newMeliponario = Meliponario.update(meliponario, id);

  if (newMeliponario) {
    res.json(newMeliponario);
  } else {
    res.status(400).json({ error: 'Meliponario não encontrado.' });
  }
});

router.delete('/meliponarios/:id', (req, res) => {
  const id = Number(req.params.id);

  if (Meliponario.destroy(id)) {
    res.status(204).send();
  } else {
    res.status(400).json({ error: 'Meliponário não encontrado.' });
  }
});

export default router;