import Link from "next/link"

export const metadata = {
  title: "Política de Privacidad | SolStreet Media",
  description: "Política de privacidad de SolStreet Media, agencia de marketing offline en Barcelona, España.",
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <div className="bg-lightblue py-12">
        <div className="container">
          <h1 className="text-4xl font-bold text-center">Política de Privacidad</h1>
        </div>
      </div>

      <div className="container py-16">
        <div className="max-w-4xl mx-auto prose">
          <p>
            <strong>Última actualización:</strong> 1 de mayo de 2025
          </p>

          <h2>1. Introducción</h2>
          <p>
            En SolStreet Media, respetamos su privacidad y nos comprometemos a proteger sus datos personales. Esta
            política de privacidad le informará sobre cómo cuidamos sus datos personales cuando visita nuestro sitio web
            y le informará sobre sus derechos de privacidad y cómo la ley le protege.
          </p>

          <h2>2. Los datos que recopilamos sobre usted</h2>
          <p>
            Datos personales, o información personal, significa cualquier información sobre un individuo a partir de la
            cual esa persona puede ser identificada. No incluye datos donde la identidad ha sido eliminada (datos
            anónimos).
          </p>
          <p>
            Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre usted que hemos
            agrupado de la siguiente manera:
          </p>
          <ul>
            <li>
              <strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador similar.
            </li>
            <li>
              <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección de
              correo electrónico y números de teléfono.
            </li>
            <li>
              <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
              sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de
              complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
              utiliza para acceder a este sitio web.
            </li>
            <li>
              <strong>Datos de perfil:</strong> incluye su nombre de usuario y contraseña, compras o pedidos realizados
              por usted, sus intereses, preferencias, comentarios y respuestas a encuestas.
            </li>
            <li>
              <strong>Datos de uso:</strong> incluye información sobre cómo utiliza nuestro sitio web, productos y
              servicios.
            </li>
          </ul>

          <h2>3. Cómo se recopilan sus datos personales</h2>
          <p>Utilizamos diferentes métodos para recopilar datos de y sobre usted, incluyendo:</p>
          <ul>
            <li>
              <strong>Interacciones directas:</strong> Puede proporcionarnos sus datos de identidad, contacto y
              financieros al completar formularios o al comunicarse con nosotros por correo postal, teléfono, correo
              electrónico o de otra manera.
            </li>
            <li>
              <strong>Tecnologías o interacciones automatizadas:</strong> A medida que interactúa con nuestro sitio web,
              podemos recopilar automáticamente datos técnicos sobre su equipo, acciones de navegación y patrones.
              Recopilamos estos datos personales mediante cookies y otras tecnologías similares.
            </li>
          </ul>

          <h2>4. Cómo utilizamos sus datos personales</h2>
          <p>
            Solo utilizaremos sus datos personales cuando la ley nos lo permita. Más comúnmente, utilizaremos sus datos
            personales en las siguientes circunstancias:
          </p>
          <ul>
            <li>
              Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado con usted.
            </li>
            <li>
              Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y sus intereses y derechos
              fundamentales no anulen esos intereses.
            </li>
            <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
          </ul>

          <h2>5. Divulgación de sus datos personales</h2>
          <p>
            Podemos compartir sus datos personales con las partes establecidas a continuación para los fines
            establecidos en la sección 4 anterior:
          </p>
          <ul>
            <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
            <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradores.</li>
            <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
          </ul>

          <h2>6. Seguridad de datos</h2>
          <p>
            Hemos implementado medidas de seguridad apropiadas para evitar que sus datos personales se pierdan, utilicen
            o accedan de forma no autorizada, se modifiquen o divulguen accidentalmente. Además, limitamos el acceso a
            sus datos personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad
            comercial de conocer. Solo procesarán sus datos personales según nuestras instrucciones y están sujetos a un
            deber de confidencialidad.
          </p>

          <h2>7. Sus derechos legales</h2>
          <p>
            Bajo ciertas circunstancias, tiene derechos bajo las leyes de protección de datos en relación con sus datos
            personales, incluyendo el derecho a:
          </p>
          <ul>
            <li>
              <strong>Solicitar acceso</strong> a sus datos personales.
            </li>
            <li>
              <strong>Solicitar la corrección</strong> de sus datos personales.
            </li>
            <li>
              <strong>Solicitar la eliminación</strong> de sus datos personales.
            </li>
            <li>
              <strong>Oponerse al procesamiento</strong> de sus datos personales.
            </li>
            <li>
              <strong>Solicitar la restricción</strong> del procesamiento de sus datos personales.
            </li>
            <li>
              <strong>Solicitar la transferencia</strong> de sus datos personales.
            </li>
            <li>
              <strong>Derecho a retirar el consentimiento</strong> en cualquier momento.
            </li>
          </ul>

          <h2>8. Contacto</h2>
          <p>
            Si tiene alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad, contáctenos
            en:
          </p>
          <p>
            SolStreet Media
            <br />
            Carrer de Balmes, 191
            <br />
            08006 Barcelona, España
            <br />
            Email: info@solstreetmedia.com
            <br />
            Teléfono: +34 934 567 890
          </p>

          <p>
            <Link href="/" className="text-primary hover:underline">
              Volver a la página de inicio
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
