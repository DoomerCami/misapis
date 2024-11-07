// controllers/theOffice.controller.js
import TheOffice from '../models/theOffice.models.js';
import mongoose from 'mongoose';

// Obtener todos los personajes
export const getAllCharacters = async (req, res) => {
    try {
        const characters = await TheOffice.find();
        res.status(200).json(characters);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener los personajes' });
    }
};

// Obtener un personaje por ID
export const getCharacterById = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
    }
    try {
        const character = await TheOffice.findById(id);
        if (!character) {
            return res.status(404).json({ msg: 'Personaje no encontrado' });
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ msg: 'Error al obtener el personaje' });
    }
};

// Crear un nuevo personaje
export const createCharacter = async (req, res) => {
    const character = new TheOffice(req.body);
    try {
        await character.save();
        res.status(201).json(character);
    } catch (error) {
        res.status(500).json({ msg: 'Error al crear el personaje' });
    }
};

// Actualizar un personaje
export const updateCharacter = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
    }
    try {
        const character = await TheOffice.findByIdAndUpdate(id, req.body, { new: true });
        if (!character) {
            return res.status(404).json({ msg: 'Personaje no encontrado' });
        }
        res.status(200).json(character);
    } catch (error) {
        res.status(500).json({ msg: 'Error al actualizar el personaje' });
    }
};

// Eliminar un personaje
export const deleteCharacter = async (req, res) => {
    const id = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ msg: 'ID no válido' });
    }
    try {
        const character = await TheOffice.findByIdAndDelete(id);
        if (!character) {
            return res.status(404).json({ msg: 'Personaje no encontrado' });
        }
        res.status(200).json({ msg: 'Personaje eliminado', character });
    } catch (error) {
        res.status(500).json({ msg: 'Error al eliminar el personaje' });
    }
};
