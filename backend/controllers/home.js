const Sub = require('../models/Sub')
const Dicho = require('../models/Dicho')
const validator = require('validator');

module.exports = {
    getDichos: async (req, res) => {
        try {
            const dichos = await Dicho.find() // find method w/out args returns all documents in collection
            res.status(200).json({
                dichos,
            });
            console.log('dichos sent')
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    // GET SINGLE DICHO
    getDicho: async (req, res) => {
        try {
            const dicho = await Dicho.findById(req.params.id) // find method w/out args returns all documents in collection
            return res.status(200).json(dicho);
        } catch (err) {
            console.error('Error fetching dichos:', err);
            res.status(500).send('Internal Server Error');
        }
    },
    // SUBMIT DICHO FORM
    submitDicho: async (req, res) => {
        try {
            // console.log('We reached the createSub method')
            console.log(req.body)
            // const { dicho, literalMeaning, actualMeaning, examples, related, comments } = req.body
            // const sub = await Sub.create({
            //     dicho,
            //     literalMeaning,
            //     actualMeaning,
            //     examples,
            //     related,
            //     comments,
            // })
            // return res.status(201).send(sub);
        } catch (err) {
            console.error(err)
            res.status(500).send({ message: err.message });
        }
    },

    postSuggestion: async (req, res) => {
        try {
            await Dicho.updateOne(
                { _id: req.params.id },
                { $push: { suggestions: req.body.suggestion } }
            );
            res.redirect(`/dichos/${req.params.id}`)
        } catch (err) {
            console.error(err);
        };
    },
}