const { Schema, model } = require('mongoose');

const ShoeSchema = new Schema(
    {
        ShoeID: {
            type: Schema.Types.ObjectId,
            default: new mongoose.Types.ObjectId()
        },
        Brand: {
            type: String
        },
        Model: {
            type: String
        },
        USMensSize: {
            type: Number
        },
        USWomensSize: {
            type: Number
        },
        UkSize: {
            type: Number
        },
        EuroSize: {
            type: Number
        },
        BoxSize: {
            type: Number
        },
        SoleSize: {
            type: Number
        },
        ToeBox: {
            type: String
        },
        Width: {
            type: String
        }
    });

const Shoes = model('Shoes', ShoeSchema);

module.exports = Shoes