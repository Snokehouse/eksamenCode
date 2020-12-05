import mongoose from 'mongoose';
import validator from 'validator';
//struktur av data som skal inn

const {Schema} = mongoose;

const AdminSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Fyll ut navn'],
            unique: true,
        },

        email: {
            type: String,
            required: [true, 'Fyll ut epost'],
            unique: true, // unique index and value
            validate: [validator.isEmail, 'Eposten er ikke gyldig'],
        },

        password: {
            type: String,
            required: [true, 'Fyll ut passord'],
            minlength: [8, 'Passord må bestå av minst 4 verdier'],
            maxlength: [40, 'Passord kan maks inneholde 40 verdier'],
            select: false,
        }
        
    }
)

const Admin = mongoose.model('Admin', AdminSchema);

export default Admin;
