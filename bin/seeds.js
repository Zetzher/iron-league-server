const mongoose = require('mongoose');
const Player = require('../models/player');
const Enemigo = require('../models/enemigos');


mongoose.connect("mongodb+srv://zetzher:SSwHFwTzZyRgWZ2L@cluster0.ww6db.mongodb.net/iron-league?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
Player.collection.drop();
Enemigo.collection.drop();

const player = [{
    nombre: 'Mathilde',
    tipo: 'Diosa del amor y sabia del ajedrez',
    stats: {
        fuerza: 5,
        habilidad: 5,
        vinculo: 1,
    },
    habilidades: ['Chess Master', 'Lenguaje Francés', 'La Gracia de Mathi'],
    descripcion_habilidades: ['Chess Master: Debido a su ingenio cultivado durante años entre jugadas de ajedrez, puede adivinar el siguiente movimiento y no recibir daño.', 'Lenguaje Francés: Sabe hablar el lenguaje más romántico del mundo, enamora al rival y el daño que recibe Mathilde se divide en dos este turno.', 'La Gracia de Mathi: Mathi cuenta un chiste malo, si hace gracia al contrincante, recibe daño igual a su fuerza más un bonus de daño aleatorio del 1 al 6, sino le hace gracia, lo recibe Mathi.'],
    image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603023566/iron%20league/fotos%20alumnos%20cartas/Mathilde_tktnqz.jpg',
    motivación: 40,
    },
    {
        nombre: 'Andreu Martínez',
        tipo: 'Maestro de maestros y padre de la gran hechicera Laia',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Kobold', 'Amor Paternal', 'Evolución Inquisitiva'],
        descripcion_habilidades: ['Kobold: Podría programar tu vida si quisiera, pero esto es un juego, así que el enemigo solo se queda pasmado ante su habilidad y no hace nada durante 2 turnos.', 'Amor Paternal: Junto a su hija, Andreu programa un código y su hija lo hechiza, recibe daño igual a su fuerza más un bonus de 1 a 5 extra al enemigo.', 'Evolución Inquisitiva: Con los años de experiencia en la vida y en su entorno laboral, Andreu a subido de grado y eso le permite ser más astuto y más sabio cada día, con lo que se cura en salud y gana de 5 a 10 puntos de vida'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603023611/iron%20league/fotos%20alumnos%20cartas/Andreu_a3mxg6.jpg',
        motivación: 40,
    },
    {
        nombre: 'Samantha',
        tipo: 'La Famosa que se hizo Diva por el mamarracheo',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Diva', 'Abanico de Idiomas', 'Flash de la Fama'],
        descripcion_habilidades: ['Diva: Su DIVISMO asombra a cualquiera que la vea, es por eso que el enemigo vendería su vida a cambio de una foto suya, Diva roba vida al contrincante recibiendo daño igual a su fuerza', 'Abanico de Idiomas: Sabe entender hasta los gestos del enemigo por su sabiduría mundana en los variados lenguajes, tanto conocidos como desconocidos, escucha los susurros del enemigo y puede adivinar lo que va a hacer durante 2 turnos', 'Flash de la Fama: Consume un tercio de su vida actual redondeado hacia abajo para quitar a través del flash de su cámara Reflex parte del DIVISMO del contrincante, esta habilidad le hace daño al contrincante equivalente a los puntos de vida perdidos.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603023709/iron%20league/fotos%20alumnos%20cartas/Samantha_g4ftum.jpg',
        motivación: 40,
    },
    {
        nombre: 'Jonathan',
        tipo: 'Khaleesi de perros y guardián del futbol sala',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Mia y Hulk', 'Cierre Impenetrable', 'Curación del alma'],
        descripcion_habilidades: ['Mia y Hulk: Los perris de Jonathan atacan al enemigo haciendo daño aleatorio dos veces equivalente a su fuerza.', 'Cierre Impenetrable: Con su experiencia en futbol sala y tu cara de asombrado, Jonathan gana un escudo durante 3 turnos que disminuye el daño recibido en 2 puntos', 'Curación del alma: -Al salir de la ansiedad provocada por trabajar en Hollister, ha buscado la iluminación en ser desarrollador web y se cura de 5 puntos de vida al haberlo conseguido.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603025137/iron%20league/fotos%20alumnos%20cartas/Jonathan_fhsz4w.jpg',
        motivación: 40,
    },
    {
        nombre: 'Adrià',
        tipo: 'Catalán porque Madrileño no lo quiso dios',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Master of Games', 'Lenguaje Madrileño', 'Simpatía y amistad'],
        descripcion_habilidades: ['Master of Games: Con su experiencia en videojuegos, puede hacer y deshacer el código de Iron League, pero estaría muy OP y por eso el enemigo recibe daño igual a tu fuerza.', 'Lenguaje Madrileño: Al acabar su primer proyecto, no solo pudo hacer que los demás aprendiéramos Madrileño, si no que el enemigo también y ahora es inentendible, por lo que no puede realizar ninguna habilidad por 1 turno.', "Simpatía y amistad: No nos vamos a engañar, Adrià es un chico mu' majo y eso le hace el yerno ideal para cualquier suegra, se camela al enemigo al ritmo de su labia y mientras se cura equivalente a su habilidad."],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603025379/iron%20league/fotos%20alumnos%20cartas/Adria_m8i5ch.jpg',
        motivación: 40,
    },
    {
        nombre: 'Xavier',
        tipo: 'El Alquimista de la Cueva',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['La cueva', 'Voz Sensual', 'Hacedor de Código'],
        descripcion_habilidades: [`La cueva: Lo único que se ve desde su casa es su cara, los cascos y su micro, despista al enemigo y le hace 5 de daño y reduce el daño recibido en la mitad ese mismo turno.`, 'Voz Sensual: Debido a que a veces solo se escucha su voz y no se le ve la cara, el enemigo se despista y no hace nada durante ese turno.', 'Hacedor de Código: Es un genio pero también sabe programar, se restaura 10 puntos de vida debido a su ingenio para salir de los baches.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603025433/iron%20league/fotos%20alumnos%20cartas/Xavier_zgbkw7.jpg',
        motivación: 40,
    },
    {
        nombre: 'Meritxell',
        tipo: 'La asesina de código',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Acupuntura Bélica', 'Paso de las Sombras', 'Beso de las Sombras'],
        descripcion_habilidades: ['Acupuntura Bélica: Apuntando a los puntos vitales del rival, hace daño igual a su fuerza más un bonus de daño de entre 1 y 5.', 'Paso de las sombras: Se camufla con las sombras y pasa desapercibida ante el enemigo, lo desconcierta y no realiza su acción.', 'Beso de la Muerte: Envenena al objetivo haciéndole 2 puntos de daño cada turno durante 5 turnos, Meritxell le envenena con toda la ansiedad y estrés del bootcamp, esta habilidad no es acumulable.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603026634/iron%20league/fotos%20alumnos%20cartas/Meritxell_wmvz9r.png',
        motivación: 40,
    },{
        nombre: 'Marc',
        tipo: 'El hijo bastardo de Poseidón',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Tatuaje de Amor de Madre', '¡Kraken a la vista!', 'Aviso para Navegantes'],
        descripcion_habilidades: ['Tatuaje de Amor de Madre: Al haber sido marinero, tiene un tatuaje en el brazo, el cual, hace al enemigo alucinar en pepinillos y lo desconcierta, haciendo que este no haga durante 2 turnos.', 'Kraken a la vista: En su adn está grabado el conocimiento marino, ni los 7 mares pueden hacer mella a este marinero/desarrollador, invoca a un kraken que conoció tomando una cerveza en una isla de vacaciones y el enemigo recibe daño igual a tu fuerza.', 'Aviso para Navegantes: Debido a los largos viajes acuáticos y vigilancia en los 7 mares, pudo establecer un vínculo con Selene, la diosa Lunar, la cual le guiaba en su trayecto y curaba su mente de la soledad mientras Marc esperaba algún día volver a casa, Marc se cura tanto como tenga de puntos de habilidad.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603032299/iron%20league/fotos%20alumnos%20cartas/Marc_vboj4f.jpg',
        motivación: 40,
    },
    {
        nombre: 'Alberto',
        tipo: 'Futuro padre y catalán por cojones',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Perseverancia Antinatural', 'Parental Advisor', 'Programación anímica'],
        descripcion_habilidades: ['Perseverancia Antinatural: Gandalf dijo: -Un mago nunca llega tarde, Alberto Polanco. Ni pronto. Llega exactamente cuando se lo propone. (Fin de la cita). Por lo que con tu fortaleza, paciencia y perseverancia, eres capaz de bloquear el daño enemigo este turno.', 'Parental Advisor: Si vas a tener una niña tendrás la escopeta lista y, si es un niño, sus condones listos, independientemente de como salga tu jugada, vas a ser un padre fetén, tu enemigo lo sabe y recibe daño igual a tu fuerza más un bonus de 1 a 5 de daño extra.', 'Programación Anímica: Estoy seguro que a parte de ser un buen padre y un buen programador, por lo que hackeas la mente de tu enemigo y haces que el daño que recibas sea reducido a la mitad redondeado hacia abajo.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603031388/iron%20league/fotos%20alumnos%20cartas/Alberto_ifzv5m.jpg',
        motivación: 40,
    },
    {
        nombre: 'Cristina',
        tipo: 'La intrépida viajera e increíble bailarina galáctica',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ["Break the Ice", "De oca a oca y tiro porque me toca", "¡A mis pies!"],
        descripcion_habilidades: ['Con sus habilidades bachateras y su increíble glamour, rompe cualquier corazón cubierto en hielo, por lo que encandila al enemigo y hace que recibas la mitad de daño durante 3 turnos.', 'De oca a oca y tiro porque me toca: Esta mujer ha tenido sus altos y sus bajos entre tantos focos y giras alrededor de la galaxia, el enemigo lo sabe y por eso le da parte de su vida, le robas vida al enemigo y le haces daño equivalente a tu fuerza.', "¡A mis pies!: Ante este talento no puedes quedarte más que pasmado, por esa misma razón el enemigo no puede ante tanto talento y no te hace daño este turno."],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603033592/iron%20league/fotos%20alumnos%20cartas/Cristina_lkvuao.jpg',
        motivación: 40,
    },
    {
        nombre: 'Erifyli',
        tipo: 'La Mujer Maravillas',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['TravelData', 'Lenguaje Griego', 'Lucha de Emociones'],
        descripcion_habilidades: ['TravelData: Programó un programa con información de todo el mundo, el enemigo recibe 5 de daño con un bonus de daño de 1 a 5 debido al miedo de que no le envíe fuera de la vía galáctica.', 'Lenguaje Griego: Con solo decirle a Erifyli "comparte tu pantalla" ya te entra un escalofrío al recordar que está todo en griego, el enemigo se estresa y no hace nada durante este turno.', 'Lucha de Emociones: El enemigo sabe por todo lo que has pasado y por eso mismo te da un abrazo, en un arrebato le robas 5 puntos de vida y te curas a ti misma esa cantidad de vida.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603044180/iron%20league/fotos%20alumnos%20cartas/Erifyli_ajfuhm.jpg',
        motivación: 40,
    },
    {
        nombre: 'Christian',
        tipo: 'El monarca que habla poco pero los mato callando.',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Gaming Abusivo', 'El Temblor del Pueblo', 'Perseverancia Maestra'],
        descripcion_habilidades: ['Gaming Abusivo: No te lo esperas, pero Christian es el típico hater que te hunde la vida como le robes los minions en el lol, hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'El Temblor del Pueblo: Durante las clases parece que no está, pero si está y cuando habla los TA"s se asustan, el enemigo también y no hace nada durante este turno.', 'Perseverancia Maestra: Parece que se haya pasado el bootcamp sin pedir ayuda porque es uno de los fucking bosses de este fucking juego y por eso el enemigo le hace la mitad de daño durante 2 turnos.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603044826/iron%20league/fotos%20alumnos%20cartas/Christian_sjp4ay.jpg',
        motivación: 40,
    },
    {
        nombre: 'Eric',
        tipo: 'El Holligan',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Testosterona', 'Grito de Derrumbe', 'Valor y Corazón'],
        descripcion_habilidades: ['Testosterona: Eric se cabrea al ver que el equipo rival acaba de marcar un punto, se cabrea y embiste contra el enemigo, le quita daño igual a su fuerza más un bonus de 1 a 5 de daño.', 'Grito de Derrumbe: Eric no va a dejar que el enemigo gane este partido, es por eso que al gritar con el himno de su equipo favorito desconcentra al enemigo y no hace nada este turno.', 'Valor y Corazón: Al recordar el himno de tu equipo durante esta batalla, te fortalece mentalmente y físicamente, el daño que te hagan durante dos turnos se divide en dos.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603045582/iron%20league/fotos%20alumnos%20cartas/Eric_txv9at.jpg',
        motivación: 40,
    },
    {
        nombre: 'Carla',
        tipo: 'La Coleta que lo Peta',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Látigo Capilar', 'Movimiento Letal', 'Escudo Capilar'],
        descripcion_habilidades: ['Látigo Capilar: Carla se arma de valor y con todo el poder de su coleta atiza al enemigo hasta que dice basta, le hace 2 veces daño equivalente a su fuerza.', 'Movimiento Letal: Te arrancas un pelo y, transformándolo en aguja, se lo lanzas en un puntos vital del enemigo, si alcanza 4 puntos vitales con acierto, matas al enemigo.', 'Escudo Capilar: Al grito de "POR EL PODER DE MI COLETA" te cubres de tu cabello formando un escudo impenetrable, el enemigo no puede hacerte daño este turno.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052115/iron%20league/fotos%20alumnos%20cartas/Carla_vqveca.jpg',
        motivación: 40,
    },
    {
        nombre: 'Carlos',
        tipo: 'El Heraldo de la Fiesta',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Sujeta el Cubata', 'Golpe Bestial', 'Dame más whisky'],
        descripcion_habilidades: ['Sujeta el Cubata: El enemigo le ha retado en la rave a Carlos y este le da el cubata a su colega, le da un guantazo al enemigo que le quita vida equivalente a su fuerza más un bonus de 1 a 5 puntos de daño y le deja al enemigo pasmado.', 'Golpe Bestial: Carlos se enfada y le hace un Zidane al enemigo, este se queda atontao y no hace nada este turno.', 'Dame más whisky: Carlos sin gasolina no cunde, este se rellena el cubata y se bebe una copa para seguir al lío, Carlos se cura equivalente a su habilidad.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052137/iron%20league/fotos%20alumnos%20cartas/Carlos_rpnru2.png',
        motivación: 40,
    },
    {
        nombre: 'Jose',
        tipo: 'El Joker',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Hey Mike', 'Ley Divina', 'Ahora me toca a mí'],
        descripcion_habilidades: ['Hey Mike: El enemigo cree que Jose está saludando a alguien a su espalda, se gira y Jose le arrea en toda la cabeza con su bandurria, le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Ley Divina: Jose recuerda su etapa de abogado y le lee la cartilla de hacienda al enemigo, este empieza a llorar por los impuestos que le tocan pagar y no hace nada este turno.', 'Ahora me toca a mí: Debido a todo ese tiempo sufriendo al sufrir las copas y después de tantas comandas en bares y restaurante, Jose dice "Ahora me toca que me sirvan" y se cura vida equivalente a su habilidad al beber una cervecita fresquita.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052150/iron%20league/fotos%20alumnos%20cartas/Jose_ssp4iv.jpg',
        motivación: 40,
    },
    {
        nombre: 'Adrián',
        tipo: 'Heavy hasta la médula',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['¡METAAAAAAAL!', 'Rasgueo Escalofriante', 'Sacudida de Melena'],
        descripcion_habilidades: ['¡METAAAAAAAL!: Al grito de ¡METAAAAAL! desgarra los timpanos del enemigo y le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Rasgueo Escalofriante: Adrián saca su guitarra y empieza a cantar una balada, el enemigo al esperarse un cover de Metallica se desmotiva y no hace nada durante este turno.', 'Sacudida de Melena: Adrian sacude su melena sedosa de METAAAAAALero y se cura a si mismo equivalente a su habilidad.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603101502/iron%20league/fotos%20alumnos%20cartas/adrian_gszxxw.jpg',
        motivación: 40,
    },
    {
        nombre: 'Alejandro',
        tipo: 'Caballero del linaje Ollé',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Espada de Luz', 'Excarmiento Santo', 'Sanctum Recitāre'],
        descripcion_habilidades: ['Espada de Luz: Desenvaina su espada y emite un rayo de luz que hace daño equivalente a su fuerza.', 'Excarmiento Santo: Salta encima de la cabeza del enemigo e intenta darle a un punto vital, le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño extra.', 'Sanctum Recitāre: Alejandro pide ayuda a sus guias de la luz y estos acuden en su ayuda sanando sus heridas, Alejandro se cura vida equivalente a su habilidad más un bonus de 1 a 5 puntos.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603101547/iron%20league/fotos%20alumnos%20cartas/Alejandro_xz6z0n.png',
        motivación: 40,
    },
    {
        nombre: 'Claudia',
        tipo: 'La Fiestera Indomable',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Que rule el cubalitro', "¡DON'T STOP THE PARTY!", 'Me bebo hasta las copas de los árboles'],
        descripcion_habilidades: ['Que rule el cubalitro: Claudia coge sus fichas intercambiadas en el último festial de Arctic Monkeys y al ritmo de "Do I wanna know" tira las fichas como si fueran shurikens y hace daño equivalente a su fuerza al enemigo más un bonus de 1 a 5 de daño.', '¡DON"T STOP THE PARTY!: Cari, parece que el enemigo quiere parar la fiesta, y tu no vas a permitirlo, haces que el enemigo se ponga unos cascos y se rule un cubata, este turno el enemigo no hace nada.', 'Me bebo hasta las copas de los árboles: ¡La motivación y la movida es lo tuyo, chica! Te curas vida equivalente a tu habilidad al beber un chupito de cada puesto de los garitos.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603102564/iron%20league/fotos%20alumnos%20cartas/Claudia_iv07ot.jpg',
        motivación: 40,
    },
    {
        nombre: 'Esteve',
        tipo: 'El Neo del 2020',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Matrix', 'Dominación Cibernética', 'Corazón de León'],
        descripcion_habilidades: ['Matrix: Esteve te coge y te envía a la Matrix del lab de Ironhack, el enemigo no puede con el estrés del lab y al sentirse inferior a Esteve pierde vida equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Dominación Cibernética: Esteve expone al enemigo con su gran cerebro y su gran conocimiento, el enemigo suprime sus pensamientos y no hace nada este turno.', 'Corazón de León: Esteve no es solo un gran programador, sino que también es un monarca de Javascript, se apiada del enemigo y este se arrodilla ante Esteve, el daño causado por el enemigo se reduce a la mitad.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603102627/iron%20league/fotos%20alumnos%20cartas/Esteve_lvidml.png',
        motivación: 40,
    },
    {
        nombre: 'Andreu Sánchez',
        tipo: 'El Ermitaño',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Hablo poco pero, para lo poco que hablo, hablo mucho', 'Sin Cámara', 'Código Infalible'],
        descripcion_habilidades: ['Hablo poco pero, para lo poco que hablo, hablo mucho: Debido a que se pasó 3 semanas sin cámara, no se sabía siquiera si seguía viva, el enemigo se da un susto que se cae del culo al escuchar de pronto a Andreu y recibe daño equivalente a su fuerza más un bonus de daño de 1 a 5 puntos por el daño en el cóxis.', 'Sin Cámara: El enemigo sabe que está ahí pero al mismo tiempo no lo sabe, como el gato de schrödinger, el enemigo no sabe que hacer y no hace nada este turno.', 'Código Infalible: Andreu crea un programa para protegerse de los ataques del enemigo, el escudo de código creado dividirá el daño recibido en dos este turno.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603104594/iron%20league/fotos%20alumnos%20cartas/Andreu_Sanchez_m30kt2.png',
        motivación: 40,
    },
    {
        nombre: 'Ona',
        tipo: 'Unicorn Lady',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Throw Rainbows Up', 'Por el poder del Arcoiris', 'Ilusión Multicolor'],
        descripcion_habilidades: ['Throw Rainbows Up: Ona vomita arcoiris y el enemigo al tocarlo se contagia y vomita arcoiris por doquier, se hace daño equivalente a su fuerza y le causa un bonus de 1 a 5 de daño por la deshidratanción de cosas cuquis.', 'Por el poder del Arcoiris: Ona invoca el poder del Arcoiris y todas las cosas cuquis del mundo, este turno no recibe daño del enemigo.', 'Ilusión Multicolor: Ona crea una ilusión de cosas cuquis y arcoiris, el enemigo consigue atravesar esa ilusión pero solo le hace la mitad de daño a Ona este turno.'],
        image_url: '', //Falta foto
        motivación: 40,
    },
    {
        nombre: 'Raiza',
        tipo: 'La Metamorfa que te deja Fofa',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['¡Metamorfosis!', '¡ROAR!', 'Grand Finale'],
        descripcion_habilidades: ['¡Metamorfosis!: Raiza se transforma con su traje mágico super cuqui y se abalanza sobre el enemigo, le hace daño equivalente a su fuerza y le inflije un bonus de daño de 1 a 5 puntos.', '¡ROAR!: El enemigo se asusta y no hace nada este turno debido al grito de Raiza.', 'Grand Finale: Raiza se transforma y se come al monstruo para luego regurgitarlo, le hace daño equivalente a su fuerza x2.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603107368/iron%20league/fotos%20alumnos%20cartas/Raiza_tvicmt.jpg',
        motivación: 40,
    },
    {
        nombre: 'Alexandre',
        tipo: 'El Cerrajero Funesto',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Llave de Ira', 'Engaño Siniestro', 'Experiencia Mundana'],
        descripcion_habilidades: ['Llave de Ira: Alex tira su llave inglesa y le da al geto del enemigo, le hace daño equivalente a su fuerza y un bonus de 1 a 5 puntos de daño.', 'Engaño Siniestro: El enemigo no lo sabe, pero mientras Alex le habla le ha robado el coche, su casa y su corazón, el enemigo se queda sin hacer nada este turno y también se ha quedado sin nada, literalmente.', 'Experiencia Mundana: Alex se las conoce todas, es muy astuto, y por eso recibe la mitad del daño del enemigo al esquivarlo por poco.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603107426/iron%20league/fotos%20alumnos%20cartas/Alexandre_vlzycm.jpg',
        motivación: 40,
    },
    {
        nombre: 'Marta',
        tipo: 'La Inquisidora de Grupos',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Renuncia a tus derechos', 'Este grupo no entra por mi coño', 'Como te explico que no hay dispo'],
        descripcion_habilidades: ['Renuncia a tus derechos: Marta sabe que han incumplido el contrato con el último grupo que entro en el hotel y los echa a patadas, toda la horda del imserso va corriendo al enemigo y lo aplasta por el camino, el enemigo recibe daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Este grupo no entra por mi coño: El enemigo no sabe que hacer, no hay disponibilidad y no sabe donde meter ese grupo de personas que solo quieren montarla mu" jarta en el hotel, este turno no hace nada y el enemigo no hace nada este turno debido a que está ocupado haciendo otras cosas.', 'Como te explico que no hay dispo: El enemigo quiere meter un grupo de 40 personas y Marta le dice que solo hay para 20, al final el enemigo consigue el cupo de 10 habitaciones dobles para su grupo y deriva los otros 20 a otro hotel, Marta recibe la mitad de daño este turno.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052101/iron%20league/fotos%20alumnos%20cartas/Marta_e7uiqg.jpg',
        motivación: 40,
    },
    {
        nombre: 'Roi',
        tipo: 'El Futurólogo',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Futurología', 'Advertencia de Peligro', 'Buen Humor'],
        descripcion_habilidades: ['Futurología: Debido a su vista al futuro, es capaz de prevenir los movimientos del enemigo, esto hace que pueda ir a por el enemigo sin temor y le asesta un golpe en la sien haciéndole daño equivalente a su fuerza más un bonus de 1 a 5 puntos de daño.', 'Advertencia de Peligro: Roi supo que iba a venir una pandemia 3 meses antes de que ocurriera, ve el futuro y lo sabe, por eso este turno no va a recibir daño.', 'Buen Humor: Pase lo que pase, Roi te va a dar una sonrisa y un abrazo, menos en tiempos de COVID, pero su sonrisa ya te lo dice todo, el enemigo se queda encandilado y le hace la mitad de daño a Roi este turno.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603114170/iron%20league/fotos%20alumnos%20cartas/Roi_pc9pes.jpg',
        motivación: 40,
    },
    {
        nombre: 'Mar',
        tipo: 'La Súcubo de la Tentación',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Tentación Mortal','Tentación Efímera', 'Oda a Melissa'],
        descripcion_habilidades: ['Tentación Mortal: Después de tanta sabiduría acumulada viendo "La Isla de las Tentaciones", Mar sabe donde golpear exactamente al enemigo, le hace daño equivalente a su fuerza más un bonus de daño entre 1 y 5 puntos.','Tentación Efímera: Mar sabe que es lo que el enemigo desea, crea una ilusión de su deseo más anhelado, Christian corriendo y gritando: "ESTEFANIAAAAAA", el enemigo se queda estupefacto y no hace nada este turno.', 'Oda a Melissa: Mar se pone en el papel de Melissa y le echa la bronca como si el enemigo fuera Tom Bruisse, el enemigo no sabe como reaccionar y le hace la mitad del daño este turno a Mar.'],
        image_url: '', //Falta foto!
        motivación: 40,
    },
    {
        nombre: 'Sara',
        tipo: 'La Musicatron',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Dale al Play', 'Como me toques los cascos vas a flipar', 'La Música está en mis Venas'],
        descripcion_habilidades: ['Dale al Play: Los verdaderos poderes de Sara solo se activan cuando escucha música, las vibraciones provocadas por su aura afectan al enemigo y le hace daño equivalente a su fuerza más un bonus de 1 a 5 puntos de daño.', 'Como te toques los cascos vas a flipar: El enemigo intenta quitarle los cascos a Sara y pero esta es más rápida y lo tira al suelo, el enemigo no hace nada en este turno.', 'La Música está en mis Venas: Sara sin música no puede vivir y todos los empleados de Ironhack lo sabemos. La defensa de Sara sube y recibe la mitad de daño del enemigo este turno.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603114652/iron%20league/fotos%20alumnos%20cartas/Sara_rp2bo2.jpg',
        motivación: 40,
    },
    {
        nombre: 'Oscar',
        tipo: 'Colmillo Blanco',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: ['Mira mi Dentadura', 'Vente pa" ca mi niña', 'Tu Sonrisa es Mía'],
        descripcion_habilidades: ['Mira mi Dentadura: El enemigo se deslumbra ante la enviable sonrisa blanca de Oscar y se hace a si mismo daño equivalente a su fuerza más un bonus de 1 a 5 de daño por la envidia.', 'Vente pa" ca mi niña: El enemigo no hace nada este turno debido a la sensualidad de la sonrisa de Oscar y su encantador acento Canario.', 'Tu Sonrisa es Mía: Oscar le roba puntos de vida equivalente a su habilidad al enemigo y también la blancura de sus dientes.'],
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603121024/iron%20league/fotos%20alumnos%20cartas/Oscar_bcqaq3.png',
        motivación: 40,
    }
]


Player.create(player, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${player.length} players`)
    mongoose.connection.close();
});




const enemigo = [ {
        nombre: 'CSS',
        type: 'Como uses bootstrap jamás sabrás usarme y lo vas a flipar en el futuro.',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 5,
        },
        habilidades: ['Usa el puto flexbox de una fucking vez', '¿A eso lo llamas position: Relative?'],
        descripcion_habilidades: ['Usa el puto flexbox de una fucking vez: Te pasas miles de horas alineando imágenes y para que, ¡USA EL FLEXBOX! Recibes 5 de daño.', '¿A eso lo llamas position: Relative?: Como vas a superponer una imagen si ni siquieras sabes que position es algo que puedes usar en CSS, el daño que recibe se divide en 2.'],
        image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603041543/iron%20league/fotos%20enemigos%20cartas/css_ofeh1c.png",
        motivación: 15,
        nivelEnemigo: 'fácil'
    },
    {
        nombre: 'Javascript',
        type: 'Ese lenguaje que te va a costar 3 meses aprender como se usa una función como no te enteres de lo que dice Dani.',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 5,
        },
        habilidades: ['¿Quieres una kata, guapo?', 'Map is not a function'],
        descripcion_habilidades: ['¿Quieres una kata, guapo?: Si a lo largo del bootcamp estábais cansados del lenguaje, imaginad lo que es una kata en semana de proyecto, te quita 5 de daño.', 'Map is not a function: Después de haber estado buscando porque coño no funcionan tus métodos de array te das cuenta de que no estás iterando sobre una array, pierdes 3 puntos de daño.'],
        image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042855/iron%20league/fotos%20enemigos%20cartas/javascript_xatu1a.png",
        motivación: 15,
        nivelEnemigo: 'fácil'
    },
    {
        nombre: 'HTML',
        type: 'Parece que no sabes que son los tags, así que vengo a recordárte la sintaxis a base de palos.',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 5,
        },
        habilidades: ['¿Section?¿Id?¿Class? ¿Eso se come?', '¿Crees que así vas a subir de puesto en Google? Pardillo'],
        descripcion_habilidades: ['¿Section?¿Id?¿Class? ¿Eso se come?: Parece que no te has dado cuenta de la sintaxis, poner div a todo no es una buena práctica, por eso te llevas 5 puntos de daño.', '¿Crees que así vas a subir de puesto en Google? Pardillo: Poner nombres de clase en cada idioma existente del mundo o tener que usar keywords como: class="menuda-SeCcIon-mçs_guapa" no es que sean muy válidas, por eso recibes 3 puntos de daño.'],
        image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042855/iron%20league/fotos%20enemigos%20cartas/html_fm51zr.jpg",
        motivación: 15,
        nivelEnemigo: 'fácil'
    },
    {
        nombre: 'Handlebars',
        type: 'Ese bigote que lo odias al empezar el segundo módulo y lo sigues odiando al final del mismo.',
        stats: {
            fuerza: 10,
            habilidad: 10,
            vinculo: 10,
        },
        habilidades: ['No se te ve nada, ¿No te habrás olvidado de poner el layout?', 'Ah, que quieres hacer validaciones con DOM y tu usuario en base de datos, pues prepárate que vas a flipar'],
        descripcion_habilidades: ['No se te ve nada, ¿No te habrás olvidado de poner el layout?: Parece mentira que no hayas prestado atención a Dani, así que vengo yo a recordártelo, recibes 8 puntos de daño.', 'Ah, que quieres hacer validaciones con DOM y tu usuario en base de datos, pues prepárate que vas a flipar: Has querido avanzar muy rápido sin siquiera pensar en hacer algo que dieron en clase mientras tu pensabas en como sobrevivir al bootcamp, pierdes 10 de daño porque ni Handlebars te va a librar.'],
        image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603042854/iron%20league/fotos%20enemigos%20cartas/handlebars_nc4tze.png",
        motivación: 40,
        nivelEnemigo: 'normal'
},
{
    nombre: 'Node.js',
    type: '¿No querías ser backend developer? Pues te vas a cagar.',
    stats: {
        fuerza: 10,
        habilidad: 10,
        vinculo: 10,
    },
    habilidades: ['req.params y res.send', '¿Pensabas que enviar información se quedaba en la local storage? HAHAHA'],
    descripcion_habilidades: ['req.params y res.send: Semana final de proyecto y ni siquiera has podido entender esta mierda, por lo que pierdes 8 puntos de daño.', '¿Pensabas que enviar información se quedaba en la local storage? HAHAHA: Parece que te has confiado con lo que sabías del módulo 1 y ahora te viene todo grande: pierdes 10 de vida.'],
    image_url: "",
    motivación: 40,
    nivelEnemigo: 'normal'
},
{
    nombre: 'Leandro',
    type: 'El señor de los Mates',
    stats: {
        fuerza: 15,
        habilidad: 15,
        vinculo: 15,
    },
    habilidades: ['El Señor de los Mates', 'Descanso de Bootcamp', 'QUE ES ESE ERROR'],
    descripcion_habilidades: ['El Mate Legendario: Leandro coge su mate y te da de probar, te envenena debido a que no tienes sangre del señor de los mates y pierdes 2 de vida durante 2 turnos.', 'Descanso de Bootcamp: Este señor casi acaba desquiciado debido al bootcamp como TA, por lo que restablece un tercio de su vida.', 'QUE ES ESE ERROR: Debido al estrés por ser TA, ve el código de sus alumnos y al no tener su mente estable, no puede más y se ríe haciendote 10 de daño.'],
    image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040476/iron%20league/fotos%20enemigos%20cartas/Leandro_j6uzs4.jpg",
    motivación: 60,
    nivelEnemigo: 'difícil'
},
{
    nombre: 'Marina',
    type: 'La hacedora de Paz',
    stats: {
        fuerza: 15,
        habilidad: 15,
        vinculo: 15,
    },
    habilidades: ['Calma y Rectitud', 'Voz Pasiva-Agresiva', 'Mar de Paciencia'],
    descripcion_habilidades: ['Calma y Rectitud: Los protagonistas están perezosos y tiene que entrar ella a cortar el bacalao, te hace 8 puntos de daño y como no espabiles te rompe hasta el ordenador.', 'Voz Pasiva-Agresiva: Cuando te corrige lo hace tan diligentemente que no sabes si está cabreada o calmada, el daño que le hagas durante 2 turnos no surte efecto y te deja con la rallada encima.', 'Mar de Paciencia: El bootcamp siendo TA nos ha hecho estragos a todos menos a ella, se arma de valor y el daño que recibe se divide a la mitad.'],
    image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040476/iron%20league/fotos%20enemigos%20cartas/Marina_mko0um.jpg",
    motivación: 60,
    nivelEnemigo: 'difícil'
},
{
    nombre: 'Julián',
    type: 'Ese TA que siempre habla súper intenso.',
    stats: {
        fuerza: 15,
        habilidad: 15,
        vinculo: 15,
    },
    habilidades: ['Por el Poder de la Luna', 'Labia Intensa', 'Ritmo Hipster'],
    descripcion_habilidades: ['Por el Poder de la Luna: Ha puesto tantas veces el fondo animado de Sailor Moon que ya se sabe los movimientos para invocar el poder de la luna, y en el nombre del amor te quita 8 de daño','Labia Intensa: Lo adoras y lo odias en sintonia, te confunde y no al no poder dejar de escucharlo durante un turno no le haces daño', 'Ritmo Hipster: Se ha pillado unas gafas para poder trabajar pero ahora se tinta el pelo, la barba y usa las gafas como atuendo, debido a su Hipsterismo, te quita tu propio estilo y te roba 10 puntos de vida.'],
    image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040475/iron%20league/fotos%20enemigos%20cartas/Julian_jmukcx.png",
    motivación: 60,
    nivelEnemigo: 'difícil'
},
{
    nombre: 'React.js',
    type: 'Pasar información, programar a tu aire, paquetes que te hacen de todo, te enfrentas a una de las últimas pruebas, enjoy it.',
    stats: {
        fuerza: 15,
        habilidad: 15,
        vinculo: 15,
    },
    habilidades: ['¿Componente? ¿Redirect? ¿Tags diferentes? Ese soy yo, ¡DIO! Digo, ¡REACT!', 'Access to https:iron-league.com has been blocked by CORS policy'],
    descripcion_habilidades: ['¿Componente? ¿Redirect? ¿Tags diferentes? Ese soy yo, ¡DIO! Digo, ¡REACT!: Después del módulo 2 con handlebars y node.js pensabas que se te iba a dar mejor el frontend, santo iluso, te hace 10 de daño.', 'Access to https:iron-league.com has been blocked by CORS policy: El talón de aquiles de los programadores frontend, recibes 15 de daño.'],
    image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603043154/iron%20league/fotos%20enemigos%20cartas/react_ghixmr.png",
    motivación: 60,
    nivelEnemigo: 'difícil'
},

    {
        nombre: 'Daniel',
        type: 'The Sensillator, The Real Panther, La Águila Real, El Tigre de Vallecas, The Boss',
        stats: {
            fuerza: 20,
            habilidad: 20,
            vinculo: 20,
        },
        habilidades: ['Sensillo', 'Entender a Willy', 'Conocimiento de Bitcoin'],
        descripcion_habilidades: ['Sensillo: Revisa tu error de código y también tu alma, te dice que es sencillo pero en verdad tienes que construir un submarino, 2 moncloas, arreglar el comunismo, levantar España y erradicar el COVID, te quita 10 de daño.', 'Entender a Willy: Aunque The Sensillator tenga un gran intelecto, hay algo que se le escapa, y es entender a su perro Willy, por lo que te pasa el marrón y tienes que cuidarlo tu, te hace 10 puntos de daño y además no puedes usar una habilidad aleatoria en tu siguiente turno.', 'Conocimiento de Bitcoin: Su conocimiento es tan inmenso que intenta enseñarte y lo que te genera es el estrés y la ansiedad de 10 bootcamps en solo 1 día, tus habilidades no le pueden hacer daño durante dos turnos.'],
        image_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1603040448/iron%20league/fotos%20enemigos%20cartas/Daniel_cgr1wp.png",
        motivación: 100,
        nivelEnemigo: 'daniel'
    }

    

    
    
]


Enemigo.create(enemigo, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${enemigo.length} enemigos`)
    mongoose.connection.close();
});