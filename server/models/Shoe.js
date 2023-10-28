const { Schema, model } = require('mongoose');

const ShoeSchema = new Schema(
    {
        Brand: {
            type: String
        },
        Model: {
            type: String
        },
        Photo: {
            type: String
        },
        Details: {
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
        },
    });

const Shoes = model('Shoes', ShoeSchema);

module.exports = Shoes