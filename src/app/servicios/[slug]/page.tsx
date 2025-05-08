import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowLeft } from "lucide-react"
import type { Metadata } from "next"

interface ServicePageProps {
  params: {
    slug: string
  }
}

const services = {
  "vallas-publicitarias": {
    title: "Vallas Publicitarias",
    description:
      "Diseño e instalación de vallas publicitarias impactantes en ubicaciones estratégicas de alto tráfico.",
    longDescription:
      "Nuestras vallas publicitarias ofrecen una visibilidad excepcional para su marca. Trabajamos con usted para seleccionar las mejores ubicaciones y crear diseños impactantes que capturen la atención de su público objetivo. Desde vallas tradicionales hasta pantallas digitales LED, ofrecemos soluciones adaptadas a sus necesidades y presupuesto.",
    image: "/50ad7bbe43d51c2ca65e0aad57d526c6.jpg",
    features: [
      "Análisis de ubicaciones estratégicas",
      "Diseño creativo personalizado",
      "Producción de alta calidad",
      "Instalación profesional",
      "Mantenimiento periódico",
      "Informes de rendimiento",
    ],
    options: [
      {
        title: "Vallas Estáticas",
        description: "Vallas publicitarias tradicionales con impresión de alta calidad y durabilidad.",
        image: "/static-billboard.png",
      },
      {
        title: "Vallas Digitales",
        description: "Pantallas LED que permiten mostrar contenido dinámico y programable.",
        image: "/digital-led-billboard.png",
      },
      {
        title: "Vallas Rotativas",
        description: "Sistemas que muestran múltiples anuncios en rotación, maximizando el espacio publicitario.",
        image: "/rotating-billboard.png",
      },
      {
        title: "Lonas Publicitarias",
        description: "Grandes formatos para fachadas de edificios y obras en construcción.",
        image: "/large-advertising-canvas.png",
      },
    ],
    process: [
      {
        title: "Consulta inicial",
        description: "Analizamos sus objetivos, público objetivo y presupuesto para recomendar las mejores opciones.",
      },
      {
        title: "Selección de ubicaciones",
        description: "Identificamos las ubicaciones óptimas basadas en tráfico, visibilidad y demografía del área.",
      },
      {
        title: "Diseño creativo",
        description: "Nuestro equipo de diseño desarrolla conceptos visuales impactantes alineados con su marca.",
      },
      {
        title: "Producción",
        description:
          "Utilizamos materiales de alta calidad y tecnologías avanzadas de impresión para resultados óptimos.",
      },
      {
        title: "Instalación",
        description: "Nuestro equipo especializado se encarga de la instalación profesional y segura.",
      },
      {
        title: "Seguimiento",
        description: "Monitorizamos el estado de sus vallas y proporcionamos informes de rendimiento.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo tarda en instalarse una valla publicitaria?",
        answer:
          "El tiempo de instalación varía según el tipo y tamaño de la valla, pero generalmente toma entre 1 y 3 días una vez que se ha completado la producción del material gráfico.",
      },
      {
        question: "¿Qué duración mínima tienen los contratos de vallas publicitarias?",
        answer:
          "Ofrecemos contratos flexibles que se adaptan a sus necesidades, desde campañas puntuales de un mes hasta contratos anuales con tarifas preferenciales.",
      },
      {
        question: "¿Pueden ayudarme a seleccionar las mejores ubicaciones para mi público objetivo?",
        answer:
          "Sí, nuestro equipo realiza un análisis detallado de tráfico, demografía y visibilidad para recomendar las ubicaciones óptimas según su público objetivo y objetivos de marketing.",
      },
      {
        question: "¿Ofrecen servicios de diseño o debo proporcionar mis propios diseños?",
        answer:
          "Ofrecemos servicios completos de diseño creativo, aunque también podemos trabajar con sus diseños existentes si lo prefiere.",
      },
    ],
    relatedServices: ["folletos-catalogos", "publicidad-transporte", "senaletica"],
  },
  "folletos-catalogos": {
    title: "Folletos y Catálogos",
    description: "Diseño y producción de materiales impresos de alta calidad que comunican eficazmente su mensaje.",
    longDescription:
      "Nuestros servicios de diseño e impresión de folletos y catálogos le ayudan a comunicar su mensaje de manera efectiva. Desde el concepto inicial hasta la entrega final, nos encargamos de todo el proceso para asegurar materiales impresos de la más alta calidad que reflejen la identidad de su marca y conecten con su audiencia.",
    image: "/1cb993403d4d0e2037ad0c184c876995.jpg",
    features: [
      "Diseño gráfico profesional",
      "Redacción de contenido persuasivo",
      "Selección de papeles y acabados",
      "Impresión de alta calidad",
      "Opciones ecológicas disponibles",
      "Entrega rápida y puntual",
    ],
    options: [
      {
        title: "Folletos Promocionales",
        description: "Ideales para promociones, eventos y lanzamientos de productos.",
        image: "/055dd2e19590ea9d6a299adcdac9a937.jpg",
      },
      {
        title: "Catálogos de Productos",
        description: "Presentaciones detalladas de su gama de productos con especificaciones y precios.",
        image: "/fd7c259d2781a76d061cc553c5556c75.jpg",
      },
      {
        title: "Dípticos y Trípticos",
        description: "Formatos plegables que permiten organizar la información de manera efectiva.",
        image: "/4d39250ee53cbad2be448d03422fbb2b.jpg",
      },
      {
        title: "Revistas Corporativas",
        description: "Publicaciones periódicas para comunicación interna o con clientes.",
        image: "/dc1342673a7122e353842cddf9fc5b0a.jpg",
      },
    ],
    process: [
      {
        title: "Briefing inicial",
        description: "Recopilamos información sobre sus objetivos, público objetivo y requisitos específicos.",
      },
      {
        title: "Concepto y diseño",
        description: "Desarrollamos conceptos creativos y diseños preliminares para su aprobación.",
      },
      {
        title: "Contenido y maquetación",
        description: "Creamos o adaptamos el contenido y lo integramos en un diseño atractivo y funcional.",
      },
      {
        title: "Selección de materiales",
        description: "Recomendamos los mejores papeles y acabados según sus necesidades y presupuesto.",
      },
      {
        title: "Pruebas de impresión",
        description: "Realizamos pruebas para verificar colores, calidad y acabados antes de la producción final.",
      },
      {
        title: "Producción y entrega",
        description: "Supervisamos todo el proceso de impresión y nos aseguramos de una entrega puntual.",
      },
    ],
    faq: [
      {
        question: "¿Cuál es el tiempo de producción para folletos y catálogos?",
        answer:
          "El tiempo de producción varía según la complejidad y cantidad, pero generalmente oscila entre 7 y 14 días desde la aprobación del diseño final.",
      },
      {
        question: "¿Qué cantidad mínima puedo pedir?",
        answer:
          "Ofrecemos opciones para diferentes necesidades, desde pequeñas tiradas de 100 unidades hasta grandes producciones de miles de ejemplares.",
      },
      {
        question: "¿Ofrecen opciones de papel ecológico?",
        answer:
          "Sí, disponemos de una amplia gama de papeles reciclados y certificados FSC para clientes preocupados por la sostenibilidad.",
      },
      {
        question: "¿Pueden ayudarme con la distribución de los materiales impresos?",
        answer:
          "Sí, ofrecemos servicios de distribución a través de correo directo, inserciones en prensa o entrega en puntos específicos según sus necesidades.",
      },
    ],
    relatedServices: ["vallas-publicitarias", "merchandising", "senaletica"],
  },
  "publicidad-transporte": {
    title: "Publicidad en Transporte",
    description:
      "Campañas publicitarias en autobuses, metro y otros medios de transporte público con gran visibilidad.",
    longDescription:
      "La publicidad en medios de transporte ofrece una exposición continua a un público amplio y diverso. Nuestras soluciones abarcan desde la publicidad exterior en autobuses hasta campañas integrales en estaciones de metro, proporcionando múltiples puntos de contacto con su audiencia durante sus desplazamientos diarios.",
    image: "/5652d6596737ab7cd89fc25385d9aac8.jpg",
    features: [
      "Amplio alcance demográfico",
      "Alta frecuencia de exposición",
      "Formatos variados y adaptables",
      "Segmentación geográfica",
      "Campañas integrales multisoporte",
      "Informes de impacto y visibilidad",
    ],
    options: [
      {
        title: "Exterior de Autobuses",
        description: "Publicidad en los laterales, parte trasera o envolvente completo de autobuses urbanos.",
        image: "/a458a472faac96e7e623d1b162cca914.jpg",
      },
      {
        title: "Interior de Transporte",
        description: "Carteles y pantallas digitales dentro de autobuses, metro y trenes.",
        image: "/27f071a40815b606d5a92658913beabe.jpg",
      },

    ],
    process: [
      {
        title: "Análisis de necesidades",
        description: "Evaluamos sus objetivos de marketing y público objetivo para recomendar las mejores opciones.",
      },
      {
        title: "Planificación de campaña",
        description: "Seleccionamos las rutas, líneas y formatos más adecuados para maximizar el impacto.",
      },
      {
        title: "Diseño adaptado",
        description: "Creamos diseños específicos para cada formato, optimizando el impacto visual.",
      },
      {
        title: "Producción de materiales",
        description: "Utilizamos materiales duraderos y técnicas de impresión resistentes a condiciones exteriores.",
      },
      {
        title: "Instalación y mantenimiento",
        description: "Nos encargamos de la instalación profesional y el mantenimiento durante toda la campaña.",
      },
      {
        title: "Seguimiento y reportes",
        description: "Proporcionamos informes detallados sobre el alcance e impacto de su campaña.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo dura una campaña típica en transporte público?",
        answer:
          "Las campañas suelen tener una duración mínima de 2 semanas, aunque recomendamos períodos de 4 a 8 semanas para maximizar el impacto y la frecuencia.",
      },
      {
        question: "¿Puedo seleccionar rutas o líneas específicas para mi campaña?",
        answer:
          "Sí, ofrecemos la posibilidad de seleccionar rutas específicas basadas en datos demográficos y de tráfico para llegar a su público objetivo.",
      },
      {
        question: "¿Qué formatos son más efectivos para mi tipo de negocio?",
        answer:
          "Cada negocio es único. Durante nuestra consulta inicial, analizaremos sus objetivos y presupuesto para recomendar los formatos más efectivos para su caso específico.",
      },
      {
        question: "¿Cómo se mide el éxito de una campaña en transporte público?",
        answer:
          "Utilizamos una combinación de métricas como estimaciones de tráfico, frecuencia de exposición, y cuando es posible, seguimiento de conversiones a través de códigos promocionales o URLs específicas.",
      },
    ],
    relatedServices: ["vallas-publicitarias", "folletos-catalogos", "stands-ferias"],
  },
  "stands-ferias": {
    title: "Stands para Ferias",
    description: "Diseño y construcción de stands atractivos y funcionales para ferias y eventos comerciales.",
    longDescription:
      "Nuestros stands para ferias están diseñados para destacar su marca en eventos comerciales y atraer a visitantes potenciales. Combinamos diseño atractivo, funcionalidad y elementos de marca para crear espacios que no solo llamen la atención, sino que también faciliten la interacción con sus clientes potenciales.",
    image: "/a321cde4d724919691309414b23ff5ea.jpg",
    features: [
      "Diseño personalizado según su marca",
      "Construcción modular o personalizada",
      "Gráficas de alta calidad",
      "Iluminación estratégica",
      "Mobiliario y accesorios",
      "Montaje y desmontaje profesional",
    ],
    options: [
      {
        title: "Stands Modulares",
        description: "Soluciones versátiles y reutilizables que se adaptan a diferentes espacios y eventos.",
        image: "/1f28091d36b7107319ad7cbd81f1a560.jpg",
      },
      {
        title: "Stands Personalizados",
        description: "Diseños exclusivos que reflejan la identidad de su marca con elementos únicos.",
        image: "/7f6de6237903fd5aff063cdf63161b06.jpg",
      },
      {
        title: "Pop-up Displays",
        description: "Soluciones ligeras y fáciles de transportar para eventos pequeños o presentaciones.",
        image: "/ece118c16672e28ab64aaa1bb1294b16.jpg",
      },
      {
        title: "Islas Expositivas",
        description: "Stands accesibles desde todos los ángulos para maximizar la interacción con visitantes.",
        image: "/b06cb13fcc6375a41267d43b40bc90bf.jpg",
      },
    ],
    process: [
      {
        title: "Briefing y objetivos",
        description: "Definimos sus objetivos, presupuesto y requisitos específicos para el evento.",
      },
      {
        title: "Concepto y diseño",
        description: "Desarrollamos conceptos creativos y visualizaciones 3D para su aprobación.",
      },
      {
        title: "Planificación técnica",
        description: "Elaboramos planos detallados y especificaciones técnicas para la construcción.",
      },
      {
        title: "Producción",
        description: "Fabricamos todos los elementos del stand con materiales de alta calidad.",
      },
      {
        title: "Montaje",
        description: "Nuestro equipo se encarga del montaje profesional en el recinto ferial.",
      },
      {
        title: "Desmontaje y almacenamiento",
        description: "Desmontamos el stand y ofrecemos opciones de almacenamiento para futuros eventos.",
      },
    ],
    faq: [
      {
        question: "¿Con cuánta antelación debo planificar mi stand para una feria?",
        answer:
          "Recomendamos iniciar el proceso al menos 2-3 meses antes del evento para stands personalizados, y 1-2 meses para soluciones modulares.",
      },
      {
        question: "¿Puedo reutilizar mi stand para diferentes eventos?",
        answer:
          "Sí, especialmente los stands modulares están diseñados para ser adaptables a diferentes espacios y configuraciones, maximizando su inversión.",
      },
      {
        question: "¿Se encargan de todos los trámites con la organización de la feria?",
        answer:
          "Podemos gestionar todos los aspectos técnicos y administrativos con los organizadores, incluyendo permisos, suministro eléctrico y otros servicios.",
      },
      {
        question: "¿Ofrecen servicios adicionales durante el evento?",
        answer:
          "Sí, podemos proporcionar personal para atención en el stand, servicios de catering, fotografía y video, y soporte técnico durante todo el evento.",
      },
    ],
    relatedServices: ["merchandising", "folletos-catalogos", "senaletica"],
  },
  senaletica: {
    title: "Señalética Corporativa",
    description: "Desarrollo e implementación de sistemas de señalización para empresas y espacios comerciales.",
    longDescription:
      "Nuestra señalética corporativa combina funcionalidad y estética para crear sistemas de orientación efectivos que reflejen la identidad de su marca. Desde rótulos exteriores hasta señalización interior, desarrollamos soluciones integrales que mejoran la experiencia de sus clientes y empleados en sus instalaciones.",
    image: "/bac27a7104095066fb769105460c628f.jpg",
    features: [
      "Diseño alineado con su identidad corporativa",
      "Materiales duraderos y de alta calidad",
      "Cumplimiento de normativas de accesibilidad",
      "Sistemas modulares y actualizables",
      "Señalización digital disponible",
      "Instalación profesional",
    ],
    options: [
      {
        title: "Rótulos Corporativos",
        description: "Identificación exterior de edificios y fachadas con su logo e imagen corporativa.",
        image: "/ed28706fd27821e8d27753e4c1555561.jpg",
      },
      {
        title: "Señalización Interior",
        description: "Sistemas de orientación para oficinas, tiendas y espacios comerciales.",
        image: "/0043c46d8f2d7e9325788066dcf11d8b.jpg",
      },
      {
        title: "Directorios y Placas",
        description: "Identificación de departamentos, salas y personal en edificios corporativos.",
        image: "/0caa59a75b1245435572707659e31ff0.jpg",
      },
      {
        title: "Señalética Digital",
        description: "Pantallas interactivas y sistemas digitales para información dinámica.",
        image: "/4b45445da637a9fc5a4c7465333dd32c.jpg",
      },
    ],
    process: [
      {
        title: "Análisis de necesidades",
        description: "Evaluamos su espacio y los flujos de circulación para identificar necesidades de señalización.",
      },
      {
        title: "Planificación del sistema",
        description: "Desarrollamos un plan integral de señalización adaptado a su espacio y marca.",
      },
      {
        title: "Diseño gráfico",
        description: "Creamos diseños que combinan su identidad visual con claridad informativa.",
      },
      {
        title: "Selección de materiales",
        description: "Recomendamos los materiales más adecuados según ubicación, durabilidad y presupuesto.",
      },
      {
        title: "Producción",
        description: "Fabricamos cada elemento con precisión y control de calidad exhaustivo.",
      },
      {
        title: "Instalación",
        description: "Nuestro equipo especializado se encarga de la instalación profesional en sus instalaciones.",
      },
    ],
    faq: [
      {
        question: "¿Cuánto tiempo lleva implementar un sistema de señalética completo?",
        answer:
          "El tiempo varía según la complejidad y tamaño del proyecto, pero generalmente oscila entre 4 y 8 semanas desde la aprobación del diseño hasta la instalación completa.",
      },
      {
        question: "¿La señalética cumple con las normativas de accesibilidad?",
        answer:
          "Sí, todos nuestros sistemas de señalización cumplen con las normativas vigentes de accesibilidad, incluyendo consideraciones para personas con discapacidad visual.",
      },
      {
        question: "¿Es posible actualizar la señalética en el futuro?",
        description:
          "Diseñamos sistemas modulares que permiten actualizaciones y modificaciones futuras con facilidad, adaptándose a cambios en su organización.",
      },
      {
        question: "¿Ofrecen mantenimiento para los sistemas de señalización?",
        answer:
          "Sí, disponemos de servicios de mantenimiento periódico y reparación para asegurar que su señalética se mantenga en perfectas condiciones a lo largo del tiempo.",
      },
    ],
    relatedServices: ["vallas-publicitarias", "stands-ferias", "merchandising"],
  },
  merchandising: {
    title: "Merchandising Promocional",
    description: "Creación de productos promocionales personalizados con la imagen de su empresa.",
    longDescription:
      "Nuestro merchandising promocional ofrece una forma tangible de conectar con sus clientes y reforzar su marca. Desde artículos de oficina hasta productos textiles, personalizamos una amplia gama de productos con su logo e identidad corporativa, creando recuerdos duraderos de su marca que sus clientes utilizarán en su día a día.",
    image: "/promotional-merchandise.png",
    features: [
      "Amplio catálogo de productos",
      "Personalización de alta calidad",
      "Opciones sostenibles disponibles",
      "Packaging personalizado",
      "Control de calidad exhaustivo",
      "Entregas puntuales",
    ],
    options: [
      {
        title: "Artículos de Oficina",
        description: "Bolígrafos, libretas, USB y otros artículos útiles para el entorno laboral.",
        image: "/4f021fb8e7e25480b4bef7daa13db175.jpg",
      },
      {
        title: "Productos Textiles",
        description: "Camisetas, gorras, bolsas y otros artículos textiles personalizados.",
        image: "/727f935f17fc0a27617e420fcba66c41.jpg",
      },
      {
        title: "Accesorios Tecnológicos",
        description: "Cargadores, altavoces, auriculares y otros gadgets con su marca.",
        image: "/fe857f32ba1385d9690a97adc3eb8f63.jpg",
      },
      {
        title: "Productos Ecológicos",
        description: "Artículos sostenibles fabricados con materiales reciclados o biodegradables.",
        image: "/27cc765c82785686399f43c9e6d486da.jpg",
      },
    ],
    process: [
      {
        title: "Selección de productos",
        description: "Le ayudamos a elegir los productos más adecuados según su público y objetivos.",
      },
      {
        title: "Diseño de personalización",
        description: "Adaptamos su logo e identidad visual para cada tipo de producto y técnica de impresión.",
      },
      {
        title: "Muestras previas",
        description: "Proporcionamos muestras para su aprobación antes de la producción a gran escala.",
      },
      {
        title: "Producción",
        description: "Fabricamos sus productos con técnicas de personalización de alta calidad.",
      },
      {
        title: "Control de calidad",
        description: "Inspeccionamos cada lote para garantizar la calidad de los productos y la personalización.",
      },
      {
        title: "Entrega",
        description: "Empaquetamos y entregamos sus productos en la fecha y lugar acordados.",
      },
    ],
    faq: [
      {
        question: "¿Cuál es la cantidad mínima de pedido?",
        answer:
          "La cantidad mínima varía según el producto, pero generalmente oscila entre 50 y 100 unidades para la mayoría de los artículos.",
      },
      {
        question: "¿Cuánto tiempo tarda la producción de merchandising personalizado?",
        answer:
          "El tiempo de producción típico es de 2 a 3 semanas después de la aprobación del diseño, aunque disponemos de opciones express para necesidades urgentes.",
      },
      {
        question: "¿Pueden crear productos personalizados que no estén en su catálogo?",
        answer:
          "Sí, podemos desarrollar productos totalmente personalizados según sus especificaciones, aunque esto puede requerir cantidades mínimas más altas y plazos más largos.",
      },
      {
        question: "¿Ofrecen opciones de packaging personalizado para los productos?",
        answer:
          "Sí, disponemos de diversas opciones de packaging personalizado, desde cajas individuales hasta sets de regalo corporativos con su imagen de marca.",
      },
    ],
    relatedServices: ["folletos-catalogos", "stands-ferias", "senaletica"],
  },
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    return {
      title: "Servicio no encontrado | SolStreet Media",
      description: "El servicio que busca no existe o ha sido movido.",
    }
  }

  return {
    title: `${service.title} | SolStreet Media`,
    description: service.description,
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services[params.slug as keyof typeof services]

  if (!service) {
    notFound()
  }

  // Encontrar servicios relacionados
  const relatedServicesData = service.relatedServices.map((slug) => {
    const relatedService = services[slug as keyof typeof services]
    return {
      slug,
      title: relatedService.title,
      description: relatedService.description,
      image: relatedService.image,
    }
  })

  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/servicios" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a servicios
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-xl text-gray-600">{service.longDescription}</p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <Tabs defaultValue="caracteristicas">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="caracteristicas">Características</TabsTrigger>
            <TabsTrigger value="opciones">Opciones</TabsTrigger>
            <TabsTrigger value="proceso">Proceso</TabsTrigger>
            <TabsTrigger value="faq">Preguntas frecuentes</TabsTrigger>
          </TabsList>

          <TabsContent value="caracteristicas" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lg">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="opciones" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.options.map((option, index) => (
                <Card key={index}>
                  <div className="relative h-48">
                    <Image
                      src={option.image || "/placeholder.svg"}
                      alt={option.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                    <p className="text-gray-600">{option.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="proceso" className="mt-8">
            <div className="space-y-8">
              {service.process.map((step, index) => (
                <div key={index} className="flex">
                  <div className="mr-6 flex-shrink-0">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold">
                      {index + 1}
                    </div>
                    {index < service.process.length - 1 && <div className="w-px h-full bg-gray-200 mx-auto mt-2"></div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <div className="space-y-6">
              {service.faq.map((item, index) => (
                <div key={index} className="bg-lightblue p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-2">{item.question}</h3>
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Servicios relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServicesData.map((relatedService, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={relatedService.image || "/placeholder.svg"}
                    alt={relatedService.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                  <p className="text-gray-600 mb-4">{relatedService.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href={`/servicios/${relatedService.slug}`}>Más información</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-lightblue rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para empezar su proyecto?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Contáctenos hoy mismo para discutir cómo podemos ayudarle con sus necesidades de{" "}
            {service.title.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contacto">Solicitar presupuesto</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/trabajos">Ver nuestros trabajos</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
