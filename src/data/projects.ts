export interface Project {
  id: number
  slug: string
  title: string
  category: string
  client: string
  date: string
  location: string
  description: string
  challenge: string
  solution: string
  results: string
  services: string[]
  image: string
  testimonial: {
    quote: string
    author: string
    position: string
  }
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "campana-vallas-restaurante-mediterraneo",
    title: "Campaña de vallas publicitarias para Restaurante Mediterráneo",
    category: "Vallas",
    client: "Restaurante Mediterráneo",
    date: "Marzo 2025",
    location: "Barcelona",
    description:
      "Serie de vallas publicitarias estratégicamente ubicadas en Barcelona para promocionar la apertura de un nuevo restaurante mediterráneo.",
    challenge:
      "El cliente necesitaba generar conocimiento de marca y atraer clientes a su nuevo restaurante en un mercado altamente competitivo. El principal desafío era destacar entre la multitud de opciones gastronómicas y comunicar la propuesta de valor única del restaurante.",
    solution:
      "Desarrollamos una campaña de vallas publicitarias con un diseño visual impactante que destacaba los platos emblemáticos del restaurante. Seleccionamos ubicaciones estratégicas cerca de zonas de oficinas y áreas residenciales de alto poder adquisitivo, con alta visibilidad durante las horas de comida y cena.",
    results:
      "La campaña generó un aumento del 45% en las reservas durante el primer mes, con un 30% de los nuevos clientes mencionando específicamente haber visto las vallas publicitarias. El reconocimiento de marca aumentó significativamente en la zona de influencia.",
    services: [
      "Diseño creativo",
      "Selección estratégica de ubicaciones",
      "Producción e instalación",
      "Seguimiento y mantenimiento",
    ],
    image: "/restaurant-billboard-advertising-1.png",
    testimonial: {
      quote:
        "Las vallas publicitarias diseñadas por SolStreet Media superaron nuestras expectativas. El impacto visual y la ubicación estratégica fueron clave para el éxito de la apertura de nuestro restaurante.",
      author: "María García",
      position: "Directora de Marketing, Restaurante Mediterráneo",
    },
  },
  {
    id: 2,
    slug: "catalogo-productos-muebles-modernos",
    title: "Catálogo de productos para Muebles Modernos",
    category: "Impresos",
    client: "Muebles Modernos",
    date: "Febrero 2025",
    location: "Madrid",
    description:
      "Diseño e impresión de un catálogo de 48 páginas presentando la nueva colección de muebles contemporáneos.",
    challenge:
      "Muebles Modernos necesitaba un catálogo que no solo mostrara sus productos, sino que también comunicara la calidad, el diseño y la filosofía de la marca. El reto era crear un material impreso que inspirara a los clientes y se diferenciara de los catálogos convencionales del sector.",
    solution:
      "Diseñamos un catálogo premium con fotografía de alta calidad, utilizando papel ecológico de gramaje superior y un diseño minimalista que destacaba cada pieza de mobiliario. Incorporamos códigos QR que enlazaban a videos de los procesos de fabricación y opciones de personalización.",
    results:
      "El catálogo recibió excelentes comentarios de clientes y distribuidores, contribuyendo a un aumento del 25% en las ventas de la nueva colección. La tasa de conversión en tiendas físicas aumentó un 15% cuando los clientes consultaban el catálogo.",
    services: [
      "Dirección de arte",
      "Fotografía de producto",
      "Diseño editorial",
      "Redacción de contenidos",
      "Impresión de alta calidad",
    ],
    image: "/furniture-catalog-design-1.png",
    testimonial: {
      quote:
        "El catálogo no solo es una herramienta de ventas efectiva, sino una pieza de diseño que refleja perfectamente los valores de nuestra marca. La calidad de la fotografía y la impresión son excepcionales.",
      author: "Carlos Martínez",
      position: "Director General, Muebles Modernos",
    },
  },
  {
    id: 3,
    slug: "campana-autobuses-festival-musica",
    title: "Campaña en autobuses para Festival de Música",
    category: "Transporte",
    client: "Festival de Música Urbana",
    date: "Abril 2025",
    location: "Barcelona",
    description:
      "Publicidad exterior en 30 autobuses urbanos de Barcelona promocionando un festival de música durante dos meses.",
    challenge:
      "El festival necesitaba aumentar su visibilidad y venta de entradas en un mercado saturado de eventos musicales. El público objetivo era principalmente jóvenes urbanos entre 18 y 35 años, usuarios habituales del transporte público.",
    solution:
      "Implementamos una campaña integral en autobuses que incluía rotulación exterior completa en 10 vehículos y publicidad interior en 20 autobuses adicionales. El diseño vibrante y llamativo incorporaba códigos QR con descuentos exclusivos para la compra de entradas.",
    results:
      "La campaña generó más de 5,000 escaneos de códigos QR y contribuyó a un aumento del 60% en la venta de entradas respecto al año anterior. El festival alcanzó el 95% de su capacidad, frente al 75% del año anterior.",
    services: [
      "Diseño creativo",
      "Planificación de rutas estratégicas",
      "Producción e instalación",
      "Seguimiento y análisis de resultados",
    ],
    image: "/bus-advertising-music-festival-1.png",
    testimonial: {
      quote:
        "La campaña en autobuses fue un éxito rotundo. La visibilidad que obtuvimos en toda la ciudad y la creatividad del diseño fueron factores clave para el éxito de nuestro festival este año.",
      author: "David López",
      position: "Director de Marketing, Festival de Música Urbana",
    },
  },
  {
    id: 4,
    slug: "vallas-digitales-lanzamiento-tecnologico",
    title: "Vallas digitales para Lanzamiento de Producto Tecnológico",
    category: "Vallas",
    client: "Tech Innovations",
    date: "Enero 2025",
    location: "Madrid y Barcelona",
    description:
      "Campaña en vallas digitales LED en Madrid y Barcelona para el lanzamiento de un nuevo producto tecnológico.",
    challenge:
      "Tech Innovations necesitaba generar expectación y conocimiento para el lanzamiento de su nuevo dispositivo tecnológico. El reto era crear una campaña que destacara en un mercado saturado y comunicara las características innovadoras del producto.",
    solution:
      "Desarrollamos una campaña dinámica en vallas digitales LED que mostraba diferentes características del producto a lo largo del día. Utilizamos animaciones y contenido interactivo que cambiaba según la hora y las condiciones climáticas.",
    results:
      "La campaña generó un aumento del 70% en las búsquedas online del producto y contribuyó a agotar el stock inicial en las primeras 48 horas tras el lanzamiento. Las encuestas posteriores mostraron un reconocimiento de marca un 35% superior en las zonas con presencia de las vallas.",
    services: [
      "Diseño de contenido dinámico",
      "Programación de secuencias",
      "Selección estratégica de ubicaciones",
      "Análisis de impacto",
    ],
    image: "/digital-billboard.png",
    testimonial: {
      quote:
        "La capacidad de SolStreet Media para crear contenido dinámico que captara la atención fue impresionante. Las vallas digitales fueron un componente crucial de nuestro exitoso lanzamiento.",
      author: "Laura Sánchez",
      position: "Directora de Producto, Tech Innovations",
    },
  },
  {
    id: 5,
    slug: "folletos-promocionales-cadena-gimnasios",
    title: "Folletos promocionales para Cadena de Gimnasios",
    category: "Impresos",
    client: "FitLife Gimnasios",
    date: "Mayo 2025",
    location: "Valencia",
    description:
      "Diseño y distribución de 50,000 folletos promocionales para una campaña de captación de nuevos socios.",
    challenge:
      "FitLife Gimnasios buscaba aumentar su base de socios en un mercado altamente competitivo. Necesitaban materiales promocionales que comunicaran efectivamente sus ventajas competitivas y motivaran a la acción inmediata.",
    solution:
      "Creamos folletos visualmente atractivos con un diseño moderno que destacaba las instalaciones y servicios exclusivos. Incluimos ofertas de prueba gratuita y descuentos por tiempo limitado con códigos de seguimiento para medir la efectividad.",
    results:
      "La campaña resultó en más de 800 nuevas inscripciones directamente atribuibles a los folletos, con una tasa de conversión del 1.6%, significativamente superior al promedio del sector. El retorno de inversión superó el 300%.",
    services: [
      "Diseño gráfico",
      "Redacción persuasiva",
      "Impresión de alta calidad",
      "Estrategia de distribución",
      "Análisis de resultados",
    ],
    image: "/gym-promotional-flyers.png",
    testimonial: {
      quote:
        "Los folletos no solo eran visualmente impactantes, sino que la estrategia de distribución fue extremadamente efectiva. Superamos nuestros objetivos de captación de socios en un 60%.",
      author: "Javier Ruiz",
      position: "Director de Marketing, FitLife Gimnasios",
    },
  },
  {
    id: 6,
    slug: "publicidad-metro-escuela-idiomas",
    title: "Publicidad en Metro para Escuela de Idiomas",
    category: "Transporte",
    client: "Global Languages",
    date: "Marzo 2025",
    location: "Barcelona",
    description: "Campaña publicitaria en 15 estaciones de metro de Barcelona promocionando cursos de idiomas.",
    challenge:
      "Global Languages necesitaba aumentar su visibilidad y captación de nuevos estudiantes para sus cursos de idiomas. El desafío era destacar en un sector muy competitivo y comunicar su metodología única de enseñanza.",
    solution:
      "Implementamos una campaña integral en estaciones de metro estratégicamente seleccionadas cerca de universidades y zonas de oficinas. Utilizamos mupis, vinilos en escaleras mecánicas y publicidad en andenes con mensajes en múltiples idiomas que demostraban la efectividad de su método.",
    results:
      "La campaña generó un aumento del 40% en las solicitudes de información y un 25% en las matriculaciones durante el período de la campaña. El reconocimiento de marca aumentó significativamente entre el público objetivo.",
    services: [
      "Diseño creativo multilingüe",
      "Selección estratégica de estaciones",
      "Producción e instalación",
      "Seguimiento y mantenimiento",
    ],
    image: "/subway-language-school-ad.png",
    testimonial: {
      quote:
        "La campaña en el metro fue extraordinariamente efectiva para llegar a nuestro público objetivo. El enfoque creativo multilingüe captó perfectamente la esencia de nuestra escuela y generó un interés sin precedentes.",
      author: "Ana Gómez",
      position: "Directora, Global Languages",
    },
  },
]

export function getProjects() {
  return projects
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}

export function getProjectsByCategory(category: string) {
  return projects.filter((project) => project.category.toLowerCase() === category.toLowerCase())
}
