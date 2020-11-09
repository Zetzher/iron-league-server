const mongoose = require("mongoose");
const Objeto = require("../models/objetos");

mongoose.connect(
  "mongodb+srv://zetzher:SSwHFwTzZyRgWZ2L@cluster0.ww6db.mongodb.net/iron-league?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
Objeto.collection.drop();

const objeto = {
  armas: [
    {
      nombre: "Látigo funesto",
      efecto:
        "Haces 3 puntos de daño extra cuando tienes equipado este objeto.",
    },
    {
      nombre: "Quetzalcoatl",
      efecto:
        "Invocas a una serpiente sirviente del dios Quetzalcoatl y hace 3 de daño cada turno al enemigo.",
    },
    {
      nombre: "Espada Regia",
      efecto: "Aumenta tu fuerza base 1 punto.",
      stats: {
        fuerza: 1,
      },
    },
    {
      nombre: "Váculo del Lich",
      efecto: "Aumenta tu habilidad base 3 puntos.",
      stats: {
        habilidad: 3,
      },
    },
    {
      nombre: "Carnicera",
      efecto:
        "Tu fuerza base aumenta 10 puntos pero recibes el doble de daño cada vez que recibes un ataque.",
      stats: {
        fuerza: 10,
      },
    },
    {
      nombre: "Lengua de Serpiente",
      efecto:
        "Si el enemigo está envenenado, el daño causado al rival es el doble.",
    },
    {
      nombre: "Rencor Guardado",
      efecto: "Tu fuerza base aumenta 4 puntos.",
      stats: {
        fuerza: 4,
      },
    },
    {
      nombre: "Ragnarok",
      efecto: "Tu fuerza y habilidad base aumentan 5 puntos.",
      stats: {
        fuerza: 5,
        habilidad: 5,
      },
    },
    {
      nombre: "Destripavientres",
      efecto:
        "Tu fuerza base aumenta 4 puntos y tienes un robo de vida de 3 puntos por cada ataque.",
      stats: {
        fuerza: 4,
      },
    },
    {
      nombre: "Shamara",
      efecto: "Tu habilidad base aumenta 2 puntos.",
      stats: {
        habilidad: 2,
      },
    },
    {
      nombre: "Obsequio de Julián TA",
      efecto: "Tus stats y tu motivación aumentan 2 puntos",
      motivación: 2,
      stats: {
        fuerza: 2,
        habilidad: 2,
      },
    },
    {
      nombre: "Trueno de Thor",
      efecto: "Tu fuerza y tu motivación base aumentan 3 puntos.",
      motivación: 3,
      stats: {
        fuerza: 2,
      },
    },
    {
      nombre: "Excalibur",
      efecto: "Tu fuerza y habilidad base aumentan 2 puntos.",
      stats: {
        fuerza: 2,
        habilidad: 2,
      },
    },
    {
      nombre: "Sanguinolenta",
      efecto:
        "Tu fuerza base aumenta 5 puntos pero tu motivación base disminuye 5 puntos.",
      motivación: -5,
      stats: {
        fuerza: 5,
      },
    },
    {
      nombre: "Fragmento de Ira",
      efecto: "Tu fuerza base aumenta 3 puntos.",
      stats: {
        fuerza: 3,
      },
    },
    {
      nombre: "Pulverizadora",
      efecto: "Tu fuerza base aumenta 2 puntos.",
      stats: {
        fuerza: 2,
      },
    },
    {
      nombre: "Cólera de Agnis",
      efecto: "Tu habilidad base aumenta 5 puntos.",
      stats: {
        habilidad: 5,
      },
    },
    {
      nombre: "Perfección de Gracia",
      efecto: "Tu motivación base aumenta 4 puntos.",
      motivación: 4,
    },
    {
      nombre: "Ildarest",
      efecto: "Tu habilidad base aumenta 2 puntos.",
      stats: {
        habilidad: 2,
      },
    },
    {
      nombre: "Lengua de Lucifer",
      efecto:
        "Tu habilidad base aumenta 3 puntos y adquieres robo de vida de 2 puntos por cada ataque.",
      stats: {
        habilidad: 3,
      },
    },
    {
      nombre: "Garra del depredador",
      efecto: "Tu fuerza base aumenta 2 puntos.",
      stats: {
        fuerza: 2,
      },
    },
    {
      nombre: "Hundeorganos",
      efecto:
        "Tu fuerza base aumenta en 5 puntos pero tu motivación se reduce en 2 por cada ataque.",
      stats: {
        fuerza: 5,
      },
    },
    {
      nombre: "Kastria",
      efecto: "Tu fuerza base aumenta en 1.",
      stats: {
        fuerza: 1,
      },
    },
    {
      nombre: "Mangual Dorado",
      efecto: "Tu motivación base aumenta en 3.",
      motivación: 3,
    },
  ],
  armaduras: [
    {
      nombre: "Corona de Espinas",
      efecto:
        "Cuando haces daño a un enemigo, se duplica el daño causado pero a cambio te quita 5 puntos de vida.",
    },
    {
      nombre: "Brazalete de Fuerza",
      efecto: "Aumenta tu fuerza base en 3 puntos.",
      stats: {
        fuerza: 3,
      },
    },
    {
      nombre: "Armadura de Platino",
      efecto: "Aumenta tu motivación base en 4 puntos.",
      motivación: 4
    },
    {
      nombre: "Colmillo Partido",
      efecto: "Aumenta tu motivación base en 2 puntos.",
      motivación: 2
    },
    {
      nombre: "Tocado Sagrado",
      efecto:
        "Las curas que realices se potencian y te curas 3 puntos de motivación extra.",
    },
    {
      nombre: "Coraje y Valor",
      efecto: "Tu motivación base sube 3 puntos.",
      motivación: 3,
    },
    {
      nombre: "Cota del Emisario",
      efecto: "Tu habilidad sube 2 puntos.",
      stats: {
        habilidad: 2,
      },
    },
    {
      nombre: "La Corona Negra",
      efecto: "Tu motivación y habilidad base suben 2 puntos.",
      motivación: 2,
      stats: {
        habilidad: 2,
      },
    },
    {
      nombre: "Caída del Pecador",
      efecto:
        "Tu motivación base aumenta en 5 pero tu fuerza base disminuye 3 puntos.",
      motivación: 5,
      stats: {
        fuerza: -3,
      },
    },
    {
      nombre: "Memoria de Caín",
      efecto: "Tu habilidad base aumenta 6 puntos.",
      stats: {
        habilidad: 6,
      },
    },
    {
      nombre: "El Yelmo de Ysengarr",
      efecto: "Tu motivación y habilidad base aumenta 3 puntos.",
      motivación: 3,
      stats: {
        habilidad: 3,
      },
    },
    {
      nombre: "Puesta del Ocaso",
      efecto: "Tu habilidad base aumenta 2 puntos.",
      stats: {
        habilidad: 2,
      },
    },
    {
      nombre: "Sabiduría del destripador",
      efecto:
        "Tu fuerza y habilidad base aumentan 2 puntos pero tu motivación base disminuye 4 puntos.",
      motivación: -4,
      stats: {
        fuerza: 2,
        habilidad: 2,
      },
    },
    {
      nombre: "Semblante Acásico",
      efecto: "Tu habilidad base aumenta 4 puntos.",
      stats: {
        habilidad: 4,
      },
    },
    {
      nombre: "Triunfo de Occulus",
      efecto: "Tu motivación base aumenta en 3 puntos.",
      motivación: 3,
    },
    {
      nombre: "Vista de Marina",
      efecto: "Tu habilidad base aumenta en 2 puntos.",
      stats: {
        habilidad: 2,
      },
    },
  ],
  auras: [
    {
      nombre: "Champiñón de Mario",
      efecto: "Te suma 5 puntos a tu motivación base y 3 a tu fuerza base.",
      motivación: 5,
      stats: {
        fuerza: 3,
      },
    },
    {
      nombre: "Aliento de TA",
      efecto: "Aumentas 1 punto de cada stat base.",
      motivación: 1,
      stats: {
        fuerza: 1,
        habilidad: 1,
      },
    },
    {
      nombre: "Aura de Afecto",
      efecto: "Aumenta tu nivel de vínculo base 2 puntos.",
      stats: { vinculo: 2 },
    },
    {
      nombre: "Carnevil",
      efecto: "Si el enemigo está envenenado, el daño que le haces se duplica.",
    },
    {
      nombre: "Visión Futura",
      efecto: "Si el enemigo va a hacerte daño, le restas 2 puntos de daño.",
    },
    {
      nombre: "Domine de Armas",
      efecto: "Tu fuerza base aumenta 3 puntos.",
      stats: { fuerza: 3 },
    },
    {
      nombre: "Alma de programador",
      efecto: "Tu habilidad y fuerza base aumentan 2 puntos.",
      stats: { fuerza: 2, habilidad: 2 },
    },
    {
      nombre: "Creencia en el Futuro",
      efecto: "Aumentas todos tus stats 1 punto.",
      motivación: 1,
      stats: { fuerza: 1, habilidad: 1 },
    },
    {
      nombre: "Askaind",
      efecto: "Las curas que realices tienen 2 puntos extras más.",
    },
    {
      nombre: "Voz Redundante",
      efecto: "Tus ataques hacen 2 puntos de daño adicional.",
    },
    {
      nombre: "Tarako",
      efecto: "Tu fuerza y habilidad base aumentan 1 puntos.",
      stats: {
        fuerza: 1,
        habilidad: 1,
      },
    },
    {
      nombre: "Tankyu",
      efecto: "Tu motivación y fuerza base aumentan 3 puntos.",
      motivación: 3,
      stats: {
        fuerza: 3,
      },
    },
    {
        nombre: "Hurgamentes",
        efecto: "Tus ataques tienen un efecto perforante."
    },
    {
        nombre: "Luz de Selene",
        efecto: "Te regeneras 2 puntos de vida cada turno."
    },
    {
        nombre: "Centella Rápida",
        efecto: "En cada turno le haces 1 punto de daño al enemigo."
    },
    {
        nombre: "Fín de la Odisea",
        efecto: "Si el enemigo tiene como mínimo un punto vital, por cada ataque se le suma otro punto vital."
    }
  ],
};

Objeto.create(objeto, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Creadas ${objeto.armas.length} armas, ${objeto.armaduras.length} armaduras y ${objeto.auras.length} auras.`);
  mongoose.connection.close();
});
