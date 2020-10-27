const express = require("express");
const router = express.Router();
const User = require("../models/user");
const uploadPhoto = require("../cloudinary/cloudinary");

//POST
router.get("/", (req, res, next) => {
  const userId = req.session.currentUser._id;
  console.log(userId);
  User.findById(userId)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((err) => console.log("En metodo GET de profile ha ocurrido:", err));
});

//EDIT PERFIL
// router.put("/edit/:id", async (req, res, next) => {
//   try {
//     const { nombre, apellido, edad, photo_url } = req.body;
//     const userId = req.params.id;
//     console.log('photo_url', photo_url)
//     await User.findByIdAndUpdate(
//       userId,
//       { nombre, apellido, edad, photo_url }, {new:true}
//     );

//     res
//       .status(200)
//       .json()
//   } catch (error) {
//   }
// });

//GET OTHER PROFILES

router.get("/:id", (req, res, next) => {
  const userId = req.params.id;
  User.findById(userId)
    .then((dbResponse) => {
      res.status(200).json(dbResponse);
    })
    .catch((err) => console.log("En metodo GET de profile ha ocurrido:", err));
});

//Eliminar personaje

router.post("/:userId/personajePull", async (req, res, next) => {
  try {
    let id = req.params.userId;
    let nombre = req.body;
    let pullPnj = await User.findByIdAndUpdate(id, {
      $pull: { personaje: nombre },
    });
    res.status(200).json(pullPnj);
  } catch (err) {
    console.error(err);
  }
});

//Push Stats
router.post("/:userId/pushStats", async (req, res, next) => {
  try {
    let id = req.params.userId;
    let player = req.body.player;
    let pushStats = await User.findByIdAndUpdate(id, {
      $push: { personaje: player },
    });
    res.status(200).json(pushStats);
  } catch (err) {
    console.error(err);
  }
});

//Cloudinary
router.post("/upload", uploadPhoto.single("photo_url"), (req, res, next) => {
  res.json({ photo_url: req.file.secure_url });
});

module.exports = router;
