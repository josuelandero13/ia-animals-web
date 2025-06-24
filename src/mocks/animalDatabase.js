// Base de datos de animales
export const animalDatabase = {
  lion: {
    name: "León",
    icon: "🦁",
    type: "Mamífero",
    venomous: false,
    habitat: "Sabana africana",
    diet: "Carnívoro",
    description:
      "El león es un gran felino carnívoro de la familia de los félidos. Es el segundo felino viviente más grande después del tigre. Los leones salvajes viven en el África subsahariana y en Asia, con una población en peligro crítico al noroeste de la India.",
    image:
      "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  tiger: {
    name: "Tigre",
    icon: "🐯",
    type: "Mamífero",
    venomous: false,
    habitat: "Bosques y selvas de Asia",
    diet: "Carnívoro",
    description:
      "El tigre es la especie de felino más grande del mundo. Conocido por su pelaje rayado, es un depredador solitario que habita principalmente en Asia. Existen seis subespecies de tigre, algunas en grave peligro de extinción.",
    image:
      "https://images.unsplash.com/photo-1561731216-c3a4d99437d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  elephant: {
    name: "Elefante africano",
    icon: "🐘",
    type: "Mamífero",
    venomous: false,
    habitat: "Sabanas y bosques de África",
    diet: "Herbívoro",
    description:
      "El elefante africano es el animal terrestre más grande del mundo. Se caracteriza por sus grandes orejas, trompa prensil y colmillos de marfil. Son animales muy sociales e inteligentes que viven en manadas lideradas por matriarcas.",
    image:
      "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  snake: {
    name: "Serpiente de cascabel",
    icon: "🐍",
    type: "Reptil",
    venomous: true,
    habitat: "Desiertos y zonas áridas de América",
    diet: "Carnívoro",
    description:
      "La serpiente de cascabel es una serpiente venenosa conocida por el sonido de su cascabel en la punta de la cola. Su veneno es hemotóxico, destruyendo tejidos y alterando la coagulación sanguínea. Son importantes controladores de poblaciones de roedores.",
    image:
      "https://images.unsplash.com/photo-1551649001-7a2482d98d09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  eagle: {
    name: "Águila real",
    icon: "🦅",
    type: "Ave",
    venomous: false,
    habitat: "Montañas y áreas abiertas del hemisferio norte",
    diet: "Carnívoro",
    description:
      "El águila real es una de las aves de presa más conocidas, con una envergadura que puede superar los 2 metros. Son cazadoras poderosas con una vista excepcional, capaz de detectar presas a grandes distancias. Construyen grandes nidos en acantilados o árboles altos.",
    image:
      "https://images.unsplash.com/photo-1551085254-e96b210db58a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  spider: {
    name: "Viuda negra",
    icon: "🕷️",
    type: "Arácnido",
    venomous: true,
    habitat: "Zonas templadas de todo el mundo",
    diet: "Carnívoro",
    description:
      "La viuda negra es una araña conocida por su potente veneno neurotóxico y la marca roja en forma de reloj de arena en su abdomen. Su mordedura puede ser peligrosa para humanos, aunque raramente es mortal con tratamiento médico oportuno.",
    image:
      "https://images.unsplash.com/photo-1566228015668-4c45dbc4e2f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  jellyfish: {
    name: "Medusa caja",
    icon: "🎐",
    type: "Cnidario",
    venomous: true,
    habitat: "Aguas costeras del Indo-Pacífico",
    diet: "Carnívoro",
    description:
      "La medusa caja, también conocida como avispa de mar, es considerada la criatura marina más venenosa del mundo. Su veneno ataca el corazón, sistema nervioso y células de la piel. Su picadura puede ser fatal para los humanos.",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  frog: {
    name: "Rana dardo venenosa",
    icon: "🐸",
    type: "Anfibio",
    venomous: true,
    habitat: "Selvas tropicales de Centro y Sur América",
    diet: "Insectívoro",
    description:
      "Las ranas dardo venenosas son conocidas por su piel brillantemente coloreada que advierte de su toxicidad. Algunas especies producen toxinas tan potentes que pueden matar a 10 humanos adultos. Su veneno proviene de su dieta de hormigas y ácaros.",
    image:
      "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  scorpion: {
    name: "Escorpión amarillo",
    icon: "🦂",
    type: "Arácnido",
    venomous: true,
    habitat: "Desiertos del norte de África y Medio Oriente",
    diet: "Carnívoro",
    description:
      "El escorpión amarillo es una de las especies más peligrosas, con un veneno neurotóxico que puede ser mortal, especialmente para niños y ancianos. Son nocturnos y se esconden durante el día bajo rocas o en madrigueras.",
    image:
      "https://images.unsplash.com/photo-1598808503746-f34cfb6c2524?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
  octopus: {
    name: "Pulpo de anillos azules",
    icon: "🐙",
    type: "Molusco",
    venomous: true,
    habitat: "Arrecifes de coral del Pacífico e Índico",
    diet: "Carnívoro",
    description:
      "El pulpo de anillos azules es pequeño pero extremadamente venenoso. Cuando se siente amenazado, muestra anillos azules brillantes. Su veneno contiene tetrodotoxina, la misma toxina que el pez globo, que puede paralizar y matar a un humano en minutos.",
    image:
      "https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
  },
};
