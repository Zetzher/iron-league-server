const mongoose = require('mongoose');
const Player = require('../models/player');

mongoose.connect("mongodb+srv://zetzher:SSwHFwTzZyRgWZ2L@cluster0.ww6db.mongodb.net/iron-league?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
Player.collection.drop();

const player = [{
    nombre: 'Mathilde',
    tipo: 'Diosa del amor y sabia del ajedrez',
    stats: {
        fuerza: 5,
        habilidad: 5,
        vinculo: 1,
    },
    habilidades: {
    nombres: ['Chess Master', 'Lenguaje Francés', 'La Gracia de Mathi', 'Vínculo'],
    descripcion_habilidades: ['Chess Master: Debido a su ingenio cultivado durante años entre jugadas de ajedrez, puede adivinar el siguiente movimiento y no recibir daño.', 'Lenguaje Francés: Sabe hablar el lenguaje más romántico del mundo, el daño se divide en dos en tus 3 siguientes turnos.', 'La Gracia de Mathi: Mathi cuenta un chiste malo, si hace gracia al contrincante, este recibe daño igual a su fuerza más un bonus de daño aleatorio del 1 al 5, sino le hace gracia, lo recibe Mathilde.'],
    },
    image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603355899/iron%20league/fotos%20alumnos%20cartas/Mathilde_i8fhqt.png',
    motivación: 40,
    color: ['247, 120, 6', '53, 6, 247'],
    carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604135795/iron%20league/fondos%20juegos%20favoritos/mathilde-monkeyisland_wx2qot.jpg'
    },
    {
        nombre: 'Andreu Martínez',
        tipo: 'Maestro de maestros y padre de la gran hechicera Laia',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Kobold', 'Amor Paternal', 'Evolución Inquisitiva', 'Vínculo'],
        descripcion_habilidades: ['Kobold: Podría programar tu vida si quisiera, pero esto es un juego, así que el enemigo no hace nada durante 2 turnos.', 'Amor Paternal: Junto a su hija, Andreu programa un código y su hija lo hechiza, recibe daño igual a su fuerza más un bonus de 1 a 5 extra al enemigo.', 'Evolución Inquisitiva: Con los años de experiencia en la vida y en su entorno laboral, Andreu a subido de grado y se cura en salud y gana de 5 a 10 puntos de vida'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604265147/iron%20league/fotos%20alumnos%20cartas/Andreu_hdpp8o.jpg',
        motivación: 40,
        color: ['255, 140, 0', '135, 206, 250'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604326811/iron%20league/fondos%20juegos%20favoritos/andreu-parchis_anvzxn.jpg"
    },
    {
        nombre: 'Samantha',
        tipo: 'La Famosa que se hizo Diva por el mamarracheo',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Diva', 'Abanico de Idiomas', 'Flash de la Fama', 'Vínculo'],
        descripcion_habilidades: ['Diva: Su DIVISMO asombra a cualquiera que la vea, es por eso que el enemigo vendería su vida a cambio de una foto suya, Diva roba vida al contrincante recibiendo daño igual a su fuerza', 'Abanico de Idiomas: Sabe entender hasta los gestos del enemigo por su sabiduría mundana, escucha los susurros del enemigo y no recibe daño durante 2 turnos', 'Flash de la Fama: Consume un tercio de su vida actual redondeado hacia abajo, le hace daño al contrincante equivalente a los puntos de vida perdidos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603023709/iron%20league/fotos%20alumnos%20cartas/Samantha_g4ftum.jpg',
        motivación: 40,
        color: ['24, 104, 104', '255, 255, 255'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100699/iron%20league/fondos%20juegos%20favoritos/samantha-mortalkombat_ubnwzw.jpg'
    },
    {
        nombre: 'Jonathan',
        tipo: 'Khaleesi de perros y guardián del futbol sala',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Mia y Hulk', 'Cierre Impenetrable', 'Curación del alma', 'Vínculo'],
        descripcion_habilidades: ['Mia y Hulk: Los perris de Jonathan atacan al enemigo haciendo daño aleatorio dos veces equivalente a su fuerza.', 'Cierre Impenetrable: Con su experiencia en futbol sala, ganas un escudo durante 3 turnos que disminuye el daño recibido por la mitad.', 'Curación del alma: Al salir de la ansiedad provocada por trabajar en Hollister, ha buscado la iluminación en ser desarrollador web y, al haberlo conseguido, se cura tanto como puntos de habilidad posea.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603025137/iron%20league/fotos%20alumnos%20cartas/Jonathan_fhsz4w.jpg',
        motivación: 40,
        color: ['61, 61, 61', '128, 194, 150'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604326388/iron%20league/fondos%20juegos%20favoritos/jonathan-raiman_n7qeok.jpg"
    },
    {
        nombre: 'Adrià',
        tipo: 'Catalán porque Madrileño no lo quiso dios',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Master of Games', 'Lenguaje Madrileño', 'Simpatía y amistad', 'Vínculo'],
        descripcion_habilidades: ['Master of Games: Con su experiencia en videojuegos, puede hacer y deshacer el código de Iron League, por eso el enemigo recibe daño igual a tu fuerza.', 'Lenguaje Madrileño: Al acabar su primer proyecto, no solo pudo hacer que los demás aprendiéramos Madrileño, si no que el enemigo también y ahora es inentendible, por lo que no pueden realizar ninguna habilidad por 2 turnos.', "Simpatía y amistad: Adrià es un chico mu' majo y eso le hace el yerno ideal para cualquier suegra, se camela al enemigo y mientras se cura equivalente a su habilidad."],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603025379/iron%20league/fotos%20alumnos%20cartas/Adria_m8i5ch.jpg',
        motivación: 40,
        color: ['0, 238, 238', '238, 0, 173'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604325415/iron%20league/fondos%20juegos%20favoritos/adria-goldensun_evir8q.jpg"
    },
    {
        nombre: 'Xavier',
        tipo: 'El Alquimista de la Cueva',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['La Cueva', 'Voz Sensual', 'Hacedor de Código', 'Vínculo'],
        descripcion_habilidades: [`La Cueva: Lo único que se ve desde su casa es su cara, los cascos y su micro, despista al enemigo, le hace daño igual a su fuerza y reduce el daño recibido en la mitad en el siguiente turno.`, 'Voz Sensual: Debido a que a veces solo se escucha su voz y no se le ve la cara, el enemigo se despista y no hace nada durante ese turno.', 'Hacedor de Código: Es un genio pero también sabe programar, se restaura de vida equivalente a sus puntos de habilidad debido a su ingenio para salir de los baches.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603356006/iron%20league/fotos%20alumnos%20cartas/Xavier_svadlu.png',
        motivación: 40,
        color: ['104, 41, 220', '57, 57, 57'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604253949/iron%20league/fondos%20juegos%20favoritos/xavier-bandicoot3_mkh9sh.jpg"
    },
    {
        nombre: 'Meritxell',
        tipo: 'La asesina de código',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Acupuntura Bélica', 'Paso de las Sombras', 'Beso Mortal', 'Vínculo'],
        descripcion_habilidades: ['Acupuntura Bélica: Apuntando a los puntos vitales del rival, hace daño igual a su fuerza más un bonus de daño de entre 1 y 5.', 'Paso de las sombras: Se camufla con las sombras y pasa desapercibida ante el enemigo, lo desconcierta y no te hace daño en tus dos turnos siguientes.', 'Beso Mortal: Envenena al objetivo haciéndole 2 puntos de daño cada turno durante 5 turnos, Meritxell le envenena con toda la ansiedad y estrés del bootcamp.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603026634/iron%20league/fotos%20alumnos%20cartas/Meritxell_wmvz9r.png',
        motivación: 40,
        color: ['61, 61, 61', '255, 0, 0', '255, 140, 0'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100487/iron%20league/fondos%20juegos%20favoritos/meritxell-kingdomheart_hjfaeh.png'
    },{
        nombre: 'Marc',
        tipo: 'El hijo bastardo de Poseidón',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Tatuaje de Amor de Madre', '¡Kraken a la vista!', 'Aviso para Navegantes', 'Vínculo'],
        descripcion_habilidades: ['Tatuaje de Amor de Madre: Al haber sido marinero, tiene un tatuaje en el brazo, el cual, hace al enemigo alucinar en pepinillos y lo desconcierta, haciendo que este no haga durante 2 turnos.', 'Kraken a la vista: En su adn está grabado el conocimiento marino, invoca a un kraken que conoció tomando una cerveza en una isla de vacaciones y el enemigo recibe daño igual a tu fuerza.', 'Aviso para Navegantes: Debido a los largos viajes acuáticos y vigilancia en los 7 mares, pudo establecer un vínculo con Selene, la diosa Lunar, te curas tanto como puntos de habilidad tengas.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603032299/iron%20league/fotos%20alumnos%20cartas/Marc_vboj4f.jpg',
        motivación: 40,
        color: ['24, 159, 177', '61, 61, 61'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604144550/iron%20league/fondos%20juegos%20favoritos/marc-doubleDragon_vlpzwy.jpg"
    },
    {
        nombre: 'Alberto',
        tipo: 'Futuro padre y catalán por cojones',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Perseverancia Antinatural', 'Parental Advisor', 'Programación anímica', 'Vínculo'],
        descripcion_habilidades: ['Perseverancia Antinatural: Con tu fortaleza, paciencia y perseverancia, eres capaz de bloquear el daño enemigo en tus 3 siguientes turnos.', 'Parental Advisor: Si vas a tener una niña tendrás la escopeta lista y, si es un niño, sus condones listos, tu enemigo lo sabe y recibe daño igual a tu fuerza más un bonus de 1 a 5 de daño extra.', 'Programación Anímica: Estoy seguro de que vas a ser un buen programador, por lo que hackeas la mente de tu enemigo y haces que el daño que recibas sea reducido a la mitad en tu siguiente turno.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603031388/iron%20league/fotos%20alumnos%20cartas/Alberto_ifzv5m.jpg',
        motivación: 40,
        color: ['61, 61, 61', '255, 0, 0'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604089360/iron%20league/fondos%20juegos%20favoritos/alberto-supermariobros_zyuxzv.jpg'
    },
    {
        nombre: 'Cristina',
        tipo: 'La intrépida viajera e increíble bailarina galáctica',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ["Break the Ice", "Fui a México, Aitana, y no lloré", "¡A mis pies!", 'Vínculo'],
        descripcion_habilidades: ['Break the Ice: Con sus habilidades bachateras y su increíble glamour, rompe cualquier corazón cubierto en hielo, por lo que encandila al enemigo y hace que recibas la mitad de daño durante 3 turnos.', 'Fui a México, Aitana, y no lloré: Esta mujer ha tenido sus altos y sus bajos, el enemigo lo sabe y por eso le da parte de su vida, le robas vida al enemigo y le haces daño equivalente a tu habilidad.', "¡A mis pies!: Ante este talento no puedes quedarte más que pasmado, por esa misma razón el enemigo no puede ante tanto talento y no te hace daño en tu siguiente turno."],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603033592/iron%20league/fotos%20alumnos%20cartas/Cristina_lkvuao.jpg',
        motivación: 40,
        color: ['142, 220, 208', '225, 125, 125'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604329022/iron%20league/fondos%20juegos%20favoritos/cristina-outlast_ltoj4i.jpg"
    },
    {
        nombre: 'Erifyli',
        tipo: 'La Mujer Maravillas',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['TravelData', 'Lenguaje Griego', 'Lucha de Emociones', 'Vínculo'],
        descripcion_habilidades: ['TravelData: Programó un programa con información de todo el mundo, el enemigo recibe 5 de daño con un bonus de daño de 1 a 5 debido al miedo de que no le envíe fuera de la vía galáctica.', 'Lenguaje Griego: Con solo decirle a Erifyli "comparte tu pantalla" ya te entra un escalofrío al recordar que está todo en griego, el enemigo se estresa y no hace nada en tu siguiente turno.', 'Lucha de Emociones: El enemigo sabe por todo lo que has pasado y por eso mismo te da un abrazo, en un arrebato le robas tantos puntos de vida como puntos de habilidad poseas y te curas a ti misma esa cantidad de vida.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603044180/iron%20league/fotos%20alumnos%20cartas/Erifyli_ajfuhm.jpg',
        motivación: 40,
        color: ['195, 7, 63', '64, 86, 161'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604135598/iron%20league/fondos%20juegos%20favoritos/erifyli-warioland_poqwcl.jpg"
    },
    {
        nombre: 'Christian',
        tipo: 'El monarca que habla poco pero los mato callando.',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Gaming Abusivo', 'El Temblor del Pueblo', 'Perseverancia Maestra', 'Vínculo'],
        descripcion_habilidades: ['Gaming Abusivo: Christian es el típico hater que te hunde la vida como le robes los minions, hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'El Temblor del Pueblo: Cuando habla los TA"s se asustan porque parece que nunca está, el enemigo también y no hace nada en tu siguiente turno.', 'Perseverancia Maestra: Parece que se haya pasado el bootcamp sin pedir ayuda y por eso el enemigo te hace la mitad de daño en tus 2 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603044826/iron%20league/fotos%20alumnos%20cartas/Christian_sjp4ay.jpg',
        motivación: 40,
        color: ['255, 195, 0', '17, 0, 255'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604089441/iron%20league/fondos%20juegos%20favoritos/christian-finalfantasy_u25mqz.jpg'
    },
    {
        nombre: 'Eric',
        tipo: 'El Holligan',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Testosterona', 'Grito de Derrumbe', 'Valor y Corazón', 'Vínculo'],
        descripcion_habilidades: ['Testosterona: Eric se cabrea al ver que el equipo rival acaba de marcar un punto, se cabrea y embiste contra el enemigo, le quita daño igual a su fuerza más un bonus de 1 a 5 de daño.', 'Grito de Derrumbe: Eric no va a dejar que el enemigo gane este partido, es por eso que al gritar con el himno de su equipo favorito desconcentra al enemigo y no te hace nada en su siguiente turno.', 'Valor y Corazón: Al recordar el himno de tu equipo durante esta batalla, te fortalece mentalmente y físicamente, el daño que te hagan durante dos turnos se divide en dos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603045582/iron%20league/fotos%20alumnos%20cartas/Eric_txv9at.jpg',
        motivación: 40,
        color: ['20, 17, 191', '170, 170, 205'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604089622/iron%20league/fondos%20juegos%20favoritos/eric-supersmashbros_ncu0qv.png'
    },
    {
        nombre: 'Carla',
        tipo: 'La Coleta que lo Peta',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Látigo Capilar', 'Movimiento Letal', 'Escudo Capilar', 'Vínculo'],
        descripcion_habilidades: ['Látigo Capilar: Carla se arma de valor y con todo el poder de su coleta atiza al enemigo hasta que dice basta, le hace 2 veces daño equivalente a su fuerza.', 'Movimiento Letal: Te arrancas un pelo y, transformándolo en aguja, se lo lanzas en un puntos vital del enemigo, si alcanza 10 puntos vitales, matas al enemigo.', 'Escudo Capilar: Al grito de "POR EL PODER DE MI COLETA" te cubres de tu cabello formando un escudo impenetrable, el enemigo no puede hacerte daño en tu siguiente turno.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603295243/iron%20league/fotos%20alumnos%20cartas/Carla_yxcqtf.jpg',
        motivación: 40,
        color: ['20, 143, 119', '236, 112, 99'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604326200/iron%20league/fondos%20juegos%20favoritos/carla-unoattack_ebdf3y.jpg"
    },
    {
        nombre: 'Carlos',
        tipo: 'El Heraldo de la Fiesta',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Sujeta el Cubata', 'Golpe Bestial', 'Dame más whisky', 'Vínculo'],
        descripcion_habilidades: ['Sujeta el Cubata: El enemigo le ha retado en la rave a Carlos y este le da el cubata a su colega, le da un guantazo al enemigo que le quita vida equivalente a su fuerza más un bonus de 1 a 5 puntos de daño y le deja al enemigo pasmado.', 'Golpe Bestial: Carlos se enfada y le hace un Zidane al enemigo, este se queda atontao y no te hace daño en tu siguiente turno.', 'Dame más whisky: Carlos sin gasolina no cunde, este se rellena el cubata y se bebe una copa para seguir al lío, Carlos se cura tantos puntos de vida como puntos de habilidad posea.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052137/iron%20league/fotos%20alumnos%20cartas/Carlos_rpnru2.png',
        motivación: 40,
        color: ['28, 43, 45', '61, 126, 166'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604089302/iron%20league/fondos%20juegos%20favoritos/carlos-metalgear_gwfzxm.jpg'
    },
    {
        nombre: 'Jose',
        tipo: 'El Pepelu',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Hey Mike', 'Ley Divina', 'Ahora me toca a mí', 'Vínculo'],
        descripcion_habilidades: ['Hey Mike: El enemigo cree que Jose está saludando a alguien a su espalda, se gira y Jose le arrea una ostia en toda la cabeza, le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Ley Divina: Jose recuerda su etapa de abogado y le lee la cartilla de hacienda al enemigo, este empieza a llorar por los impuestos que le tocan pagar y el enemigo no te hace daño en tu siguiente turno.', 'Ahora me toca a mí: Debido a todo ese tiempo sufriendo al sufrir las copas y después de tantas comandas en bares y restaurante, Jose dice "Ahora me toca que me sirvan" y se cura vida equivalente a su habilidad al beber una cervecita fresquita.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052150/iron%20league/fotos%20alumnos%20cartas/Jose_ssp4iv.jpg',
        motivación: 40,
        color: ['67, 230, 52', '252, 206, 27'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604089509/iron%20league/fondos%20juegos%20favoritos/joseluis-bandicoot_uqs4gz.jpg'
    },
    {
        nombre: 'Adrián',
        tipo: 'Heavy hasta la médula',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['¡METAAAAAAAL!', 'Rasgueo Escalofriante', 'Sacudida de Melena', 'Vínculo'],
        descripcion_habilidades: ['¡METAAAAAAAL!: Al grito de ¡METAAAAAL! desgarra los timpanos del enemigo y le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Rasgueo Escalofriante: Adrián saca su guitarra y empieza a cantar una balada, el enemigo al esperarse un cover de Metallica se desmotiva y no hace nada en tu siguiente turno.', 'Sacudida de Melena: Adrian sacude su melena sedosa de METAAAAAALero y se cura a si mismo equivalente a su habilidad.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603101502/iron%20league/fotos%20alumnos%20cartas/adrian_gszxxw.jpg',
        motivación: 40,
        color: ['214, 13, 163', '40, 39, 33'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604135706/iron%20league/fondos%20juegos%20favoritos/adrian-pokemon_putdmx.jpg"
    },
    {
        nombre: 'Alejandro',
        tipo: 'Caballero del linaje Ollé',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Espada de Luz', 'Excarmiento Santo', 'Sanctum Recitāre', 'Vínculo'],
        descripcion_habilidades: ['Espada de Luz: Desenvaina su espada y emite un rayo de luz que hace daño equivalente a su habilidad.', 'Excarmiento Santo: Salta encima de la cabeza del enemigo, le hace daño equivalente a su fuerza más un bonus de 1 a 5 de daño extra.', 'Sanctum Recitāre: Alejandro pide ayuda a sus guias de la luz y estos acuden en su ayuda sanando sus heridas, Alejandro se cura vida equivalente a su habilidad más un bonus de 1 a 5 puntos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603101547/iron%20league/fotos%20alumnos%20cartas/Alejandro_xz6z0n.png',
        motivación: 40,
        color: ['0, 255, 0', '255, 0, 0'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100730/iron%20league/fondos%20juegos%20favoritos/alejandro-dragonball_wl0m7l.jpg'
    },
    {
        nombre: 'Claudia',
        tipo: 'La Fiestera Indomable',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Que rule el cubalitro', "¡DONT STOP THE PARTY!", 'Me bebo hasta la savia', 'Vínculo'],
        descripcion_habilidades: ['Que rule el cubalitro: Claudia coge sus fichas intercambiadas en el último festial de Arctic Monkeys y al ritmo de "Do I wanna know" lanza las fichas y hace daño equivalente a su fuerza al enemigo más un bonus de 1 a 5 de daño.', '¡DON"T STOP THE PARTY!: Parece que el enemigo quiere parar la fiesta, y tu no vas a permitirlo, haces que el enemigo se rule un cubata, no te hacen nada en tu siguiente turno.', 'Me bebo hasta las copas de los árboles: ¡La motivación y la movida es lo tuyo! Te curas vida equivalente a tu habilidad al beber un chupito de cada puesto de los garitos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603102564/iron%20league/fotos%20alumnos%20cartas/Claudia_iv07ot.jpg',
        motivación: 40,
        color: ['92, 200, 169', '179, 114, 219'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604139613/iron%20league/fondos%20juegos%20favoritos/claudia-monkeyisland_ckt3it.jpg'
        },
    {
        nombre: 'Esteve',
        tipo: 'El Neo del 2020',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Matrix', 'Dominación Cibernética', 'Corazón de León', 'Vínculo'],
        descripcion_habilidades: ['Matrix: Esteve te coge y te envía a la Matrix del lab de Ironhack, el enemigo no puede con el estrés del lab y al sentirse inferior a Esteve pierde vida equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Dominación Cibernética: Esteve expone al enemigo con su gran cerebro y su gran conocimiento, el enemigo suprime sus pensamientos y no te hace nada en tu siguiente turno.', 'Corazón de León: Esteve no es solo un gran programador, sino que también es un monarca de Javascript, se apiada del enemigo y este se arrodilla ante Esteve, el daño causado por el enemigo se reduce a la mitad en tus 3 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603102627/iron%20league/fotos%20alumnos%20cartas/Esteve_lvidml.png',
        motivación: 40,
        color: ['0, 247, 255', '0, 106, 255'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100611/iron%20league/fondos%20juegos%20favoritos/esteve-worldwarcraft_mni6vv.jpg'
    },
    {
        nombre: 'Andreu Sánchez',
        tipo: 'El Ermitaño',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Silencio Incómodo', 'Sin Cámara', 'Código Infalible', 'Vínculo'],
        descripcion_habilidades: ['Silencio Incómodo: Debido a que se pasó 3 semanas sin cámara, el enemigo se da un susto que se cae del culo al escuchar de pronto a Andreu, recibe daño equivalente a su fuerza más un bonus de daño de 1 a 5 puntos.', 'Sin Cámara: El enemigo sabe que está ahí pero al mismo tiempo no lo sabe, como el gato de schrödinger, el enemigo no hace nada en tu siguiente turno.', 'Código Infalible: Andreu crea un programa para protegerse de los ataques del enemigo, el escudo de código creado dividirá el daño recibido en dos en tus 2 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603104594/iron%20league/fotos%20alumnos%20cartas/Andreu_Sanchez_m30kt2.png',
        motivación: 40,
        color: ['0, 119, 119', '97, 11, 11'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604330004/iron%20league/fondos%20juegos%20favoritos/andreusanchez-tekken5_gon5ag.jpg"
    },
    {
        nombre: 'Ona',
        tipo: 'Unicorn Lady',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Throw Rainbows Up', 'Por el poder del Arcoiris', 'Ilusión Multicolor', 'Vínculo'],
        descripcion_habilidades: ['Throw Rainbows Up: Ona vomita arcoiris y el enemigo al tocarlo se contagia y vomita arcoiris por doquier, se hace daño equivalente a su fuerza y le causa un bonus de 1 a 5 de daño por la deshidratanción de cosas cuquis.', 'Por el poder del Arcoiris: Ona invoca el poder del Arcoiris y todas las cosas cuquis del mundo, el enemigo no te hace daño en tu siguiente turno.', 'Ilusión Multicolor: Ona crea una ilusión de cosas cuquis y arcoiris, el enemigo consigue atravesar esa ilusión pero solo le hace la mitad de daño a Ona en tus 2 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603356318/iron%20league/fotos%20alumnos%20cartas/Ona_w7xvqk.png', 
        motivación: 40,
        color: ['156, 220, 253', '253, 156, 171'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100666/iron%20league/fondos%20juegos%20favoritos/ina-animalcrossing_rch7qj.jpg'
    },
    {
        nombre: 'Raiza',
        tipo: 'La Metamorfa que te deja Fofa',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['¡Metamorfosis!', '¡ROAR!', 'Grand Finale', 'Vínculo'],
        descripcion_habilidades: ['¡Metamorfosis!: Raiza se transforma con su traje mágico super cuqui y se abalanza sobre el enemigo, le hace daño equivalente a su fuerza y le inflije un bonus de daño de 1 a 5 puntos.', '¡ROAR!: El enemigo se asusta y no te hace nada en tu siguiente turno debido al grito de Raiza.', 'Grand Finale: Raiza se transforma y se come al monstruo para luego regurgitarlo, le hace daño equivalente a su fuerza x2.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603107368/iron%20league/fotos%20alumnos%20cartas/Raiza_tvicmt.jpg',
        motivación: 40,
        color: ['144, 12, 63', '115, 198, 182'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604325811/iron%20league/fondos%20juegos%20favoritos/raiza-mario_urfkzj.jpg"
    },
    {
        nombre: 'Alexandre',
        tipo: 'El Cerrajero Funesto',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Llave de Ira', 'Engaño Siniestro', 'Experiencia Mundana', 'Vínculo'],
        descripcion_habilidades: ['Llave de Ira: Alex tira su llave inglesa y le da al geto del enemigo, le hace daño equivalente a su fuerza y un bonus de 1 a 5 puntos de daño.', 'Engaño Siniestro: Mientras Alex le habla le ha robado el coche y su casa, el enemigo se queda sin hacer nada en tu siguiente turno y también se ha quedado sin nada, literalmente.', 'Experiencia Mundana: Alex se las conoce todas, por eso recibirá la mitad del daño del enemigo en su siguiente turno.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603107426/iron%20league/fotos%20alumnos%20cartas/Alexandre_vlzycm.jpg',
        motivación: 40,
        color: ['247, 188, 19', '242, 241, 211'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604325711/iron%20league/fondos%20juegos%20favoritos/alexandre-sonic_oqdhku.jpg"
    },
    {
        nombre: 'Marta',
        tipo: 'La Inquisidora de Grupos',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Renuncia a tus derechos', 'Este grupo no entra por mi coño', 'Como te explico que no hay dispo', 'Vínculo'],
        descripcion_habilidades: ['Renuncia a tus derechos: Marta sabe que han incumplido el contrato, toda la horda del imserso va corriendo al enemigo, el enemigo recibe daño equivalente a su fuerza más un bonus de 1 a 5 de daño.', 'Este grupo no entra por mi coño: No hay disponibilidad y el enemigo no sabe donde meter ese grupo de personas que solo quieren montarla, el enemigo no te hace nada en tu siguiente turno.', 'Como te explico que no hay dispo: El enemigo quiere meter un grupo de 40 personas y Marta le dice que solo hay para 20, al final el enemigo consigue el cupo de 10 habitaciones dobles para su grupo y deriva los otros 20 a otro hotel, Marta recibe la mitad de daño en sus 2 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603052101/iron%20league/fotos%20alumnos%20cartas/Marta_e7uiqg.jpg',
        motivación: 40,
        color: ['168, 241, 240', '168, 139, 231'],
        carta_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1604100551/iron%20league/fondos%20juegos%20favoritos/marta-tombraider_vgvwkr.jpg'
    },
    {
        nombre: 'Roi',
        tipo: 'El Futurólogo',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Futurología', 'Advertencia', 'Buen Humor', 'Vínculo'],
        descripcion_habilidades: ['Futurología: Debido a su vista al futuro, es capaz de prevenir los movimientos del enemigo, esto hace que pueda ir a por el enemigo sin temor y le asesta un golpe en la sien haciéndole daño equivalente a su fuerza más un bonus de 1 a 5 puntos de daño.', 'Advertencia: Roi supo que iba a venir una pandemia 3 meses antes de que ocurriera, ve el futuro y lo sabe, por eso en su siguiente turno no va a recibir daño.', 'Buen Humor: Pase lo que pase, Roi te va a dar una sonrisa y un abrazo, menos en tiempos de COVID, pero su sonrisa ya te lo dice todo, el enemigo se queda encandilado y le hace la mitad de daño a Roi en sus 3 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603356478/iron%20league/fotos%20alumnos%20cartas/Roi_wrptzf.png',
        motivación: 40,
        color: ['254, 247, 15', '8, 56, 238'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604326938/iron%20league/fondos%20juegos%20favoritos/roi-diabloII_flezib.jpg"
    },
    {
        nombre: 'Mar',
        tipo: 'La Súcubo de la Tentación',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Tentación Mortal','Tentación Efímera', 'Oda a Melissa', 'Vínculo'],
        descripcion_habilidades: ['Tentación Mortal: Después de tanta sabiduría acumulada viendo "La Isla de las Tentaciones", Mar sabe donde golpear exactamente al enemigo, le hace daño equivalente a su fuerza más un bonus de daño entre 1 y 5 puntos.','Tentación Efímera: Mar sabe que es lo que el enemigo desea, crea una ilusión de su deseo más anhelado, Christian corriendo y gritando: "ESTEFANIAAAAAA", el enemigo se queda estupefacto y no te hace nada en tus 2 siguientes turnos.', 'Oda a Melissa: Mar se pone en el papel de Melissa y le echa la bronca como si el enemigo fuera Tom Bruisse, el enemigo no sabe como reaccionar y le hace la mitad del daño en sus siguientes 2 turnos a Mar.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603356474/iron%20league/fotos%20alumnos%20cartas/Mar_ibzsrr.png',
        motivación: 40,
        color: ['28, 104, 136', '234, 119, 122'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604135640/iron%20league/fondos%20juegos%20favoritos/mar-animalcrossing_p97ore.jpg"
    },
    {
        nombre: 'Sara',
        tipo: 'La Musicatron',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Dale al Play', 'Hoy Recibes', 'La Música en mis Venas', 'Vínculo'],
        descripcion_habilidades: ['Dale al Play: Los verdaderos poderes de Sara solo se activan cuando escucha música, las vibraciones provocadas por su aura afectan al enemigo y le hace daño equivalente a su fuerza más un bonus de 1 a 5 puntos de daño.', 'Hoy Recibes: El enemigo intenta quitarle los cascos a Sara y pero esta es más rápida y lo tira al suelo, el enemigo no hace nada en su siguiente turno.', 'La Música está en mis Venas: Sara sin música no puede vivir y todos los empleados de Ironhack lo sabemos. La defensa de Sara sube y recibe la mitad de daño del enemigo en sus 2 siguientes turnos.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603114652/iron%20league/fotos%20alumnos%20cartas/Sara_rp2bo2.jpg',
        motivación: 40,
        color: ['28, 43, 45', '61, 126, 166'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604326833/iron%20league/fondos%20juegos%20favoritos/sara-pacman_dx9cp6.jpg"
    },
    {
        nombre: 'Oscar',
        tipo: 'Colmillo Blanco',
        stats: {
            fuerza: 5,
            habilidad: 5,
            vinculo: 1,
        },
        habilidades: {
        nombres: ['Mira mi Dentadura', 'Vente pa ca mi niña', 'Tu Sonrisa es Mía', 'Vínculo'],
        descripcion_habilidades: ['Mira mi Dentadura: El enemigo se deslumbra ante la enviable sonrisa blanca de Oscar y se hace a si mismo daño equivalente a su fuerza más un bonus de 1 a 5 de daño por la envidia.', 'Vente pa ca mi niña: El enemigo no hace nada en su siguiente turno debido a la sensualidad de la sonrisa de Oscar y su encantador acento Canario.', 'Tu Sonrisa es Mía: Oscar le roba puntos de vida equivalente a su habilidad al enemigo y también la blancura de sus dientes.'],
        },
        image_url: 'https://res.cloudinary.com/dg9s4kl26/image/upload/v1603121024/iron%20league/fotos%20alumnos%20cartas/Oscar_bcqaq3.png',
        motivación: 40,
        color: ['61, 61, 61', '0, 255, 0'],
        carta_url: "https://res.cloudinary.com/dg9s4kl26/image/upload/v1604329837/iron%20league/fondos%20juegos%20favoritos/oscar-zelda_ftlyyy.jpg"
    }
]




Player.create(player, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${player.length} players`)
    mongoose.connection.close();
});