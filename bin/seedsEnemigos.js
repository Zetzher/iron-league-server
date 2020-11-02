const mongoose = require("mongoose");
const Enemigo = require("../models/enemigos");

mongoose.connect(
  "mongodb+srv://zetzher:SSwHFwTzZyRgWZ2L@cluster0.ww6db.mongodb.net/iron-league?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);
Enemigo.collection.drop();

const enemigo = [
  {
    nombre: "CSS",
    tipo:
      "Como uses bootstrap jamás sabrás usarme y lo vas a flipar en el futuro.",
    stats: {
      fuerza: 5,
      habilidad: 5,
      vinculo: 5,
    },
    habilidades: {
      nombres: [
        "Usa el puto flexbox de una fucking vez",
        "¿A eso lo llamas position: Relative?",
      ],
      descripcion_habilidades: [
        "Usa el puto flexbox de una fucking vez: Te pasas miles de horas alineando imágenes y para que, ¡USA EL FLEXBOX! Recibes daño igual a su fuerza.",
        "¿A eso lo llamas position: Relative?: Como vas a superponer una imagen si ni siquieras sabes que position es algo que puedes usar en CSS, el daño que recibe se divide en 2.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603041543/iron%20league/fotos%20enemigos%20cartas/css_ofeh1c.png",
    motivación: 30,
    nivelEnemigo: "facil",
    statsGanados: 1,
  },
  {
    nombre: "Javascript",
    tipo:
      "Ese lenguaje que te va a costar 3 meses aprender como se usa una función como no te enteres de lo que dice Dani.",
    stats: {
      fuerza: 5,
      habilidad: 5,
      vinculo: 5,
    },
    habilidades: {
      nombres: ["¿Quieres una kata, guapo?", "Map is not a function"],
      descripcion_habilidades: [
        "¿Quieres una kata, guapo?: Si a lo largo del bootcamp estábais cansados del lenguaje, imaginad lo que es una kata en semana de proyecto, te quita daño igual a su fuerza.",
        "Map is not a function: Después de haber estado buscando porque coño no funcionan tus métodos de array te das cuenta de que no estás iterando sobre una array, pierdes 6 puntos de daño.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042855/iron%20league/fotos%20enemigos%20cartas/javascript_xatu1a.png",
    motivación: 30,
    nivelEnemigo: "facil",
    statsGanados: 1,
  },
  {
    nombre: "HTML",
    tipo:
      "Parece que no sabes que son los tags, así que vengo a recordárte la sintaxis a base de palos.",
    stats: {
      fuerza: 5,
      habilidad: 5,
      vinculo: 5,
    },
    habilidades: {
      nombres: [
        "¿Section?¿Id?¿Class? ¿Eso se come?",
        "¿Crees que así vas a subir el SEO?",
      ],
      descripcion_habilidades: [
        "¿Section?¿Id?¿Class? ¿Eso se come?: Parece que no te has dado cuenta de la sintaxis, poner div a todo no es una buena práctica, por eso te hace daño equivalente a su fuerza.",
        '¿Crees que así vas a subir de puesto en Google? Pardillo: Poner nombres de clase en cada idioma existente del mundo o tener que usar keywords como: class="menuda-SeCcIon-mçs_guapa" no es que sean muy válidas, por eso recibes 8 puntos de daño.',
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042855/iron%20league/fotos%20enemigos%20cartas/html_fm51zr.jpg",
    motivación: 30,
    nivelEnemigo: "facil",
    statsGanados: 1,
  },
  {
    nombre: "Handlebars",
    tipo:
      "Ese bigote que lo odias al empezar el segundo módulo y lo sigues odiando al final del mismo.",
    stats: {
      fuerza: 10,
      habilidad: 10,
      vinculo: 10,
    },
    habilidades: {
      nombres: [
        "No se te ve nada, ¿No te habrás olvidado de poner el layout?",
        "Ah, que quieres hacer validaciones con DOM y tu usuario en base de datos, pues prepárate que vas a flipar",
      ],
      descripcion_habilidades: [
        "No se te ve nada, ¿No te habrás olvidado de poner el layout?: Parece mentira que no hayas prestado atención a Dani, así que vengo yo a recordártelo a base de bigotazos, recibes daño igual a su fuerza.",
        "Ah, que quieres hacer validaciones con DOM y tu usuario en base de datos, pues prepárate que vas a flipar: Has querido avanzar muy rápido sin siquiera pensar en hacer algo que dieron en clase mientras tu pensabas en como sobrevivir al bootcamp, pierdes 15 de daño porque ni Handlebars te va a librar.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042854/iron%20league/fotos%20enemigos%20cartas/handlebars_nc4tze.png",
    motivación: 60,
    nivelEnemigo: "normal",
    statsGanados: 2,
  },
  {
    nombre: "Node.js",
    tipo: "¿No querías ser backend developer? Pues te vas a cagar.",
    stats: {
      fuerza: 10,
      habilidad: 10,
      vinculo: 10,
    },
    habilidades: {
      nombres: [
        "req.params y res.send",
        "¿Pensabas que enviar información se quedaba en la local storage? HAHAHA",
      ],
      descripcion_habilidades: [
        "req.params y res.send: Semana final de proyecto y ni siquiera has podido entender esta mierda, por lo que pierdes vida igual a su fuerza.",
        "¿Pensabas que enviar información se quedaba en la local storage? HAHAHA: Parece que te has confiado con lo que sabías del módulo 1 y ahora te viene todo grande: pierdes vida igual al doble de la fuerza del enemigo.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603138970/iron%20league/fotos%20enemigos%20cartas/nodejs_inw34j.webp",
    motivación: 60,
    nivelEnemigo: "normal",
    statsGanados: 2,
  },
  {
    nombre: "Leandro",
    tipo: "El señor de los Mates",
    stats: {
      fuerza: 15,
      habilidad: 15,
      vinculo: 15,
    },
    habilidades: {
      nombres: [
        "El Señor de los Mates",
        "Descanso de Bootcamp",
        "QUE ES ESE ERROR",
      ],
      descripcion_habilidades: [
        "El Señor de los Mates: Leandro coge su mate y te da de probar, te envenena debido a que no tienes sangre del señor de los mates y pierdes 5 de vida durante 3 turnos.",
        "Descanso de Bootcamp: Este señor casi acaba desquiciado debido al bootcamp como TA, por lo que restablece un tercio de su vida.",
        "QUE ES ESE ERROR: Debido al estrés por ser TA, ve el código de sus alumnos y al no tener su mente estable, no puede más y se ríe haciendote daño igual a su fuerza.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040476/iron%20league/fotos%20enemigos%20cartas/Leandro_j6uzs4.jpg",
    motivación: 100,
    nivelEnemigo: "dificil",
    statsGanados: 3,
  },
  {
    nombre: "Marina",
    tipo: "La Hacedora de Paz",
    stats: {
      fuerza: 15,
      habilidad: 15,
      vinculo: 15,
    },
    habilidades: {
      nombres: ["Calma y Rectitud", "Voz Pasiva-Agresiva", "Mar de Paciencia"],
      descripcion_habilidades: [
        "Calma y Rectitud: Los protagonistas están perezosos y tiene que entrar ella a cortar el bacalao, te hace daño igual a su fuerza y como no espabiles te rompe hasta el ordenador.",
        "Voz Pasiva-Agresiva: Cuando te corrige lo hace tan diligentemente que no sabes si está cabreada o calmada, el daño que le hagas durante 2 turnos no surte efecto y te deja con la rallada encima.",
        "Mar de Paciencia: El bootcamp siendo TA nos ha hecho estragos a todos menos a ella, se arma de valor y el daño que recibe se divide a la mitad.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040476/iron%20league/fotos%20enemigos%20cartas/Marina_mko0um.jpg",
    motivación: 100,
    nivelEnemigo: "dificil",
    statsGanados: 3,
  },
  {
    nombre: "Julián",
    tipo: "Ese TA que siempre habla súper intenso.",
    stats: {
      fuerza: 15,
      habilidad: 15,
      vinculo: 15,
    },
    habilidades: {
      nombres: ["Por el Poder de la Luna", "Labia Intensa", "Ritmo Hipster"],
      descripcion_habilidades: [
        "Por el Poder de la Luna: Ha puesto tantas veces el fondo animado de Sailor Moon que ya se sabe los movimientos para invocar el poder de la luna, y en el nombre del amor te quita vida igual a su fuerza",
        "Labia Intensa: Lo adoras y lo odias en sintonia, te confunde y al no poder dejar de escucharlo durante 3 turnos no le haces daño",
        "Ritmo Hipster: Se ha pillado unas gafas para poder trabajar pero ahora se tinta el pelo, la barba y usa las gafas como atuendo, debido a su Hipsterismo, te quita tu propio estilo y te roba vida igual a su habilidad, por lo que se cura la misma cantidad.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040475/iron%20league/fotos%20enemigos%20cartas/Julian_jmukcx.png",
    motivación: 100,
    nivelEnemigo: "dificil",
    statsGanados: 3,
  },
  {
    nombre: "React.js",
    tipo:
      "Pasar información, programar a tu aire, paquetes que te hacen de todo, te enfrentas a una de las últimas pruebas, enjoy it.",
    stats: {
      fuerza: 15,
      habilidad: 15,
      vinculo: 15,
    },
    habilidades: {
      nombres: [
        "¿Componente? ¿Redirect? ¿Tags diferentes? Ese soy yo, ¡DIO! Digo, ¡REACT!",
        "Access to https:iron-league.com has been blocked by CORS policy",
      ],
      descripcion_habilidades: [
        "¿Componente? ¿Redirect? ¿Tags diferentes? Ese soy yo, ¡DIO! Digo, ¡REACT!: Después del módulo 2 con handlebars y node.js pensabas que se te iba a dar mejor el frontend, santo iluso, te hace daño igual a su fuerza.",
        "Access to https:iron-league.com has been blocked by CORS policy: El talón de aquiles de los programadores frontend, recibes 20 de daño.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603043154/iron%20league/fotos%20enemigos%20cartas/react_ghixmr.png",
    motivación: 130,
    nivelEnemigo: "dificil",
    statsGanados: 3,
  },

  {
    nombre: "Daniel",
    tipo:
      "The Sensillator, The Real Panther, La Águila Real, El Tigre de Vallecas, The Boss",
    stats: {
      fuerza: 20,
      habilidad: 20,
      vinculo: 20,
    },
    habilidades: {
      nombres: ["Sensillo", "Entender a Willy", "Conocimiento de Bitcoin"],
      descripcion_habilidades: [
        "Sensillo: Revisa tu error de código y también tu alma, te dice que es sencillo pero en verdad tienes que construir un submarino, 2 moncloas, arreglar el comunismo, levantar España y erradicar el COVID, te quita vida igual a su fuerza.",
        "Entender a Willy: Aunque The Sensillator tenga un gran intelecto, hay algo que se le escapa, y es entender a su perro Willy, por lo que te pasa el marrón y tienes que cuidarlo tu, te la mitad de daño de su fuerza.",
        "Conocimiento de Bitcoin: Su conocimiento es tan inmenso que intenta enseñarte y lo que te genera es el estrés y la ansiedad de 10 bootcamps en solo 1 día, absorve tus emociones negativas y se cura tanto como puntos de habilidad tenga.",
      ],
    },
    image_url:
      "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040448/iron%20league/fotos%20enemigos%20cartas/Daniel_cgr1wp.png",
    motivación: 200,
    nivelEnemigo: "daniel",
    statsGanados: 5,
  },
];

Enemigo.create(enemigo, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Created ${enemigo.length} enemigos`);
  mongoose.connection.close();
});
