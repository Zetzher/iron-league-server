const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const User = require("../models/user");
const Enemigos = require("../models/enemigos")

//GET
router.get('/', (req, res, next) => {
    Enemigos
        .find()
        .populate('asistencia')
        .then(dbResponse => {
            res.status(200)
                .json(dbResponse)

        })
        .catch(err => console.log('En metodo GET de Eventos ha ocurrido:', err))
})


//POST, id puesto para enviar el id del current user al array del evento.
router.post('/create/:id', (req, res, next) => {
    const {
        nombre,
        descripcion,
        lugar
    } = req.body
    const id = req.params.id
    Enemigos
        .create({
            nombre,
            descripcion,
            lugar,
            id
        })
        .then((dbResponse) => {
            res.status(200)
                .json(dbResponse)
        })
        .catch(err => console.log('En metodo POST de Eventos ha ocurrido:', err));
});

//POST CURRENT USER ID
router.post("/:id", async (req, res, next) => {
    try {
        const eventId = req.params.id;
        const asistencia = req.session.currentUser._id;
        
await Enemigos.findByIdAndUpdate( eventId, {$push:{ asistencia }
});   
        res.status(200)
    } catch (error) {
        console.log(error);
    }
})

//DELETE CURRENT USER ID FROM EVENT
router.post('/:id/delete', async (req, res, next) => {
        try {
            const eventId = req.params.id;
            const asistencia = req.session.currentUser._id;
            
    await Enemigos.findByIdAndUpdate( eventId, {$pull:{ asistencia }
    });   
            res.status(200)
        } catch (error) {
            console.log(error);
        }
    })

//EDIT EVENTO
router.put('/edit/:id', async (req, res, next) => {
    try {
        const {
            nombre,
            descripcion,
            lugar
        } = req.body;
        const id = req.params.id
        await Enemigos.findByIdAndUpdate({
            _id: id //condición para encontrarlo
        }, {
            nombre,
            descripcion,
            lugar
        });

        res.status(200)
            .json({
                nombre,
                descripcion,
                lugar,
            })

    } catch (error) {
        console.log(error);
    }
});

// POST delete Evento
router.delete('/:id/delete', async (req, res, next) => {
    try {
        const {
            id
        } = req.params;
        await Enemigos.findByIdAndRemove(id);
    } catch (error) {
        next(error);
    }

});

module.exports = router;