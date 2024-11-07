// models/theOffice.models.js
import mongoose from 'mongoose';

const theOfficeSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    rol: { type: String, required: true },
    temporada: { type: Number, required: true },
    episodio: { type: Number, required: true },
    frase: { type: String, required: false }
});

const TheOffice = mongoose.model('TheOffice', theOfficeSchema);

export default TheOffice;
