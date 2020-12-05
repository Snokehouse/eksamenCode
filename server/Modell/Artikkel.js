import mongoose from 'mongoose';
//import validator from 'validator';
//struktur av data som skal inn

const {Schema} = mongoose;

const ArtikkelSchema = new Schema(
    {
        tittel: {
            type: String,
            required: [true, 'Fyll ut tittel'],
            unique: true,
        },

        dato: {
            type: Date,
            required: [true, 'Fyll ut dato'],
            unique: true, // unique index and value
        },

        beskrivelse: {
            type: String,
            required: [true, 'Fyll ut beskrivelse'],
            unique: true,
        },

        kategori: {
            type: String,
            required: [true, 'Fyll ut kategori'],
            unique: true,
        },

        forfatter: {
            type: String,
            required: [true, 'Fyll ut forfatter'],
            unique: true,
        },
        
    }
)

const Artikkel = mongoose.model('Artikkel', ArtikkelSchema);

export default Artikkel;
