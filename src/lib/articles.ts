export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  tips?: string[];
  links?: {
    label: string;
    url: string;
  }[];
};

export type ArticleReference = {
  title: string;
  url: string;
};

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  updated: string;
  readingTime: string;
  author: string;
  introduction: string;
  sections: ArticleSection[];
  conclusion: string;
  heroImage?: string;
  heroImageAlt?: string;
  heroImageCredit?: string;
  heroImageCreditUrl?: string;
  secondaryImage?: string;
  secondaryImageAlt?: string;
  secondaryImageCredit?: string;
  secondaryImageCreditUrl?: string;
  references?: ArticleReference[];
};

export const categories = [
  {
    name: "Informática",
    slug: "informatica",
    description: "Windows, ordenadores y soluciones informáticas.",
  },
  {
    name: "Móviles",
    slug: "moviles",
    description: "Android, smartphones y consejos móviles.",
  },
  {
    name: "Inteligencia artificial",
    slug: "inteligencia-artificial",
    description: "Herramientas de IA y nuevas tecnologías.",
  },
  {
    name: "Aplicaciones",
    slug: "aplicaciones",
    description: "Aplicaciones y programas útiles.",
  },
  {
    name: "Internet",
    slug: "internet",
    description: "Seguridad, privacidad y navegación web.",
  },
  {
    name: "Guías prácticas",
    slug: "guias-practicas",
    description: "Tutoriales tecnológicos paso a paso.",
  },
];

export const articles: Article[] = [
  {
    slug: "acelerar-windows-11",
    title: "Cómo acelerar Windows 11 sin instalar programas",
    description:
      "Aprende a mejorar el rendimiento de Windows 11 con ajustes sencillos, herramientas integradas y buenos hábitos.",
    category: "Informática",
    categorySlug: "informatica",
    date: "2026-11-16",
    updated: "2026-11-16",
    readingTime: "7 min",
    author: "Equipo TecnoSencillo",
    introduction:
      "¿Tu ordenador tarda demasiado en arrancar o responde lentamente al abrir aplicaciones? Antes de instalar programas para optimizarlo, puedes probar varias funciones que Windows 11 ya incluye. En esta guía veremos cómo identificar qué está consumiendo recursos y qué ajustes puedes realizar de forma segura.",
    sections: [
      {
        heading: "1. Desactiva las aplicaciones de inicio innecesarias",
        paragraphs: [
          "Algunas aplicaciones se configuran para iniciarse automáticamente cuando enciendes el ordenador. Cuantas más aplicaciones se ejecuten al mismo tiempo, más recursos pueden consumir y más puede tardar Windows en estar listo.",
          "Abre el Administrador de tareas con Ctrl + Shift + Esc y selecciona Aplicaciones de inicio. Revisa la lista y desactiva las aplicaciones que no necesitas al arrancar.",
          "No desactives componentes del sistema ni programas de seguridad si no sabes para qué sirven.",
        ],
        tips: [
          "Haz clic derecho en el botón Inicio y abre Administrador de tareas.",
          "Entra en Aplicaciones de inicio.",
          "Comprueba el impacto de cada aplicación.",
          "Desactiva únicamente las que reconozcas y no necesites al iniciar.",
        ],
      },
      {
        heading: "2. Libera espacio de almacenamiento",
        paragraphs: [
          "Cuando el disco tiene muy poco espacio disponible, algunas tareas del sistema pueden verse afectadas. Windows incluye herramientas para localizar y eliminar archivos temporales.",
          "Ve a Configuración, después a Sistema y selecciona Almacenamiento. Desde allí podrás revisar los archivos temporales y otras categorías que ocupan espacio.",
          "Revisa cuidadosamente lo que vas a eliminar. No marques la carpeta Descargas si contiene documentos que todavía necesitas.",
        ],
        tips: [
          "Abre Configuración con Windows + I.",
          "Selecciona Sistema y después Almacenamiento.",
          "Abre Archivos temporales.",
          "Comprueba cada categoría antes de confirmar la limpieza.",
        ],
      },
      {
        heading: "3. Reduce las aplicaciones que se ejecutan en segundo plano",
        paragraphs: [
          "Algunas aplicaciones continúan funcionando aunque no las estés utilizando. Esto puede consumir memoria y batería, especialmente en ordenadores con recursos limitados.",
          "Revisa qué programas tienes abiertos desde el Administrador de tareas. Cierra los que no estés utilizando, siempre que no sean procesos esenciales del sistema.",
        ],
      },
      {
        heading: "4. Actualiza Windows y los controladores",
        paragraphs: [
          "Las actualizaciones pueden corregir errores, mejorar la compatibilidad y solucionar problemas de rendimiento. Abre Configuración, entra en Windows Update y comprueba si existen actualizaciones disponibles.",
          "Para los controladores, utiliza Windows Update o la página oficial del fabricante de tu ordenador o de sus componentes. Evita descargar controladores desde páginas desconocidas.",
        ],
      },
      {
        heading: "5. Ajusta los efectos visuales",
        paragraphs: [
          "Las animaciones y algunos efectos visuales pueden consumir recursos. Si tu ordenador tiene hardware limitado, reducir ciertos efectos puede ayudar a conseguir una experiencia más fluida.",
          "Busca Ajustar la apariencia y el rendimiento de Windows desde el menú Inicio. En la ventana de opciones de rendimiento puedes seleccionar los efectos que quieres mantener.",
        ],
      },
      {
        heading: "6. Comprueba qué está consumiendo recursos",
        paragraphs: [
          "Antes de realizar cambios adicionales, abre el Administrador de tareas y observa las columnas CPU, Memoria y Disco. Esto permite identificar si una aplicación concreta está utilizando demasiados recursos.",
          "Si el uso permanece muy alto incluso sin aplicaciones abiertas, puede ser necesario investigar procesos específicos, temperaturas, almacenamiento o posibles problemas de hardware.",
        ],
      },
    ],
    conclusion:
      "No necesitas instalar un optimizador desconocido para empezar a mejorar Windows 11. Revisar las aplicaciones de inicio, liberar espacio con cuidado, actualizar el sistema y controlar el consumo de recursos son buenos primeros pasos. Si el ordenador continúa lento, conviene identificar la causa antes de aplicar cambios más avanzados.",
  },

  {
    slug: "herramientas-ia-gratuitas",
    title: "7 herramientas de inteligencia artificial gratuitas que merece la pena probar",
    description:
      "Comparamos siete herramientas de IA para escribir, investigar, estudiar, diseñar y programar. Descubre qué puedes hacer gratis y qué limitaciones debes conocer.",
    category: "Inteligencia artificial",
    categorySlug: "inteligencia-artificial",
    date: "2026-11-16",
    updated: "2026-11-21",
    readingTime: "12 min",
    author: "Equipo TecnoSencillo",
    heroImage: "/images/ai-tools-workspace.jpg",
    heroImageAlt:
      "Ordenador portátil en un espacio de trabajo relacionado con herramientas de inteligencia artificial.",
    heroImageCredit: "Jo Lin / Unsplash",
    heroImageCreditUrl:
      "https://unsplash.com/photos/laptop-with-ai-workspace-logo-on-screen-MSg17QHWf5Y",
    secondaryImage: "/images/notebooklm-workspace.jpg",
    secondaryImageAlt:
      "Pantalla de ordenador con una interfaz de trabajo de NotebookLM.",
    secondaryImageCredit: "Planet Volumes / Unsplash",
    secondaryImageCreditUrl:
      "https://unsplash.com/photos/notebooklm-ai-research-assistant-interface-on-a-dark-screen-lCjRuyFrwGM",
    introduction:
      "No necesitas pagar una suscripción para empezar a aprovechar la inteligencia artificial. Actualmente existen herramientas con planes gratuitos que pueden ayudarte a redactar textos, investigar temas, estudiar documentos, preparar diseños y escribir código. El problema es que no todas sirven para lo mismo y muchas reservan algunas funciones o límites de uso para los planes de pago. En esta guía comparamos siete opciones conocidas, explicamos para qué resulta útil cada una y te ayudamos a elegir sin gastar dinero innecesariamente.",
    sections: [
      {
        heading: "1. ChatGPT: un asistente para tareas del día a día",
        paragraphs: [
          "ChatGPT, de OpenAI, es una opción versátil para quienes quieren empezar a utilizar IA. Puedes pedirle que explique conceptos difíciles con palabras sencillas, corrija un texto, proponga ideas, prepare un esquema de estudio o te ayude a resolver dudas sobre informática.",
          "También permite trabajar con archivos e imágenes y utilizar herramientas adicionales, aunque algunas funciones tienen límites de uso independientes. La disponibilidad de modelos y herramientas puede cambiar según el plan y el momento.",
          "Un ejemplo práctico: puedes pegar un error de Windows y pedir una explicación paso a paso. Después, solicita que adapte las instrucciones a alguien que nunca ha utilizado el Administrador de tareas.",
          "La versión gratuita es suficiente para probar muchas tareas habituales. Si utilizas funciones avanzadas con frecuencia, puedes alcanzar límites y tendrás que esperar a que se restablezcan o valorar un plan superior.",
        ],
        tips: [
          "Describe el resultado que necesitas, no solamente el tema.",
          "Indica tu nivel de experiencia para recibir explicaciones adecuadas.",
          "Pide ejemplos cuando una respuesta resulte demasiado general.",
          "Comprueba los datos importantes antes de tomar decisiones.",
        ],
        links: [
          {
            label: "Visitar ChatGPT",
            url: "https://chatgpt.com/",
          },
          {
            label: "Consultar los límites del plan gratuito",
            url: "https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq",
          },
        ],
      },
      {
        heading: "2. Google Gemini: ayuda conectada al ecosistema de Google",
        paragraphs: [
          "Gemini es el asistente de inteligencia artificial de Google. Puede ayudarte a generar ideas, resumir información, explicar temas, redactar textos y trabajar con diferentes tipos de contenido.",
          "Una de sus ventajas es su integración con el ecosistema de Google y la disponibilidad de herramientas como Gemini Live, Canvas y funciones de investigación, dependiendo de la cuenta, el país y el plan.",
          "El acceso gratuito permite probar muchas de sus funciones, pero no significa que todas estén disponibles sin límites. Los modelos avanzados, algunas herramientas y el volumen de uso pueden estar restringidos o cambiar con el tiempo.",
          "Si ya utilizas servicios de Google, puede ser una alternativa cómoda para tareas generales. Aun así, compara sus respuestas con fuentes fiables cuando necesites información precisa o reciente.",
        ],
        links: [
          {
            label: "Visitar Google Gemini",
            url: "https://gemini.google.com/",
          },
          {
            label: "Consultar los planes de Google AI",
            url: "https://one.google.com/about/",
          },
        ],
      },
      {
        heading: "3. Claude: una alternativa para escribir y analizar textos",
        paragraphs: [
          "Claude, desarrollado por Anthropic, es un asistente que puede ayudarte a redactar, revisar, resumir y analizar textos. También puede explicar fragmentos de código y ayudarte a organizar ideas para documentos o proyectos.",
          "Puede resultar especialmente útil cuando necesitas mejorar la claridad de un texto largo, comparar varias versiones de un documento o transformar notas desordenadas en una estructura más fácil de leer.",
          "Anthropic ofrece un plan gratuito, pero su uso está sujeto a límites. La cantidad de mensajes disponibles puede variar según la demanda y las condiciones del servicio. Algunas funciones avanzadas se reservan para los planes de pago.",
          "No lo consideres una autoridad infalible: revisa las afirmaciones, las referencias y los resultados antes de publicar o utilizar información importante.",
        ],
        links: [
          {
            label: "Visitar Claude",
            url: "https://claude.ai/",
          },
          {
            label: "Consultar los planes de Claude",
            url: "https://www.anthropic.com/pricing",
          },
        ],
      },
      {
        heading: "4. Perplexity: para investigar temas y encontrar fuentes",
        paragraphs: [
          "Perplexity combina búsqueda web con respuestas generadas por inteligencia artificial. En lugar de limitarse a producir una explicación, presenta referencias que puedes abrir para revisar de dónde procede la información.",
          "Es una opción interesante para investigar un tema, localizar artículos, conocer diferentes puntos de vista o encontrar páginas oficiales. Por ejemplo, puedes preguntar qué requisitos tiene una aplicación y después abrir las fuentes citadas para comprobar los detalles.",
          "Su versión gratuita permite realizar búsquedas y consultar respuestas con citas, aunque las búsquedas avanzadas y otras funciones tienen límites. La disponibilidad concreta puede cambiar según el plan.",
          "Una cita no garantiza que una afirmación sea correcta. Abre las páginas originales, comprueba la fecha de publicación y verifica que el contenido citado realmente respalde la respuesta.",
        ],
        links: [
          {
            label: "Visitar Perplexity",
            url: "https://www.perplexity.ai/",
          },
          {
            label: "Consultar sus planes",
            url: "https://www.perplexity.ai/enterprise/pricing",
          },
        ],
      },
      {
        heading: "5. NotebookLM: estudia y organiza tus propios documentos",
        paragraphs: [
          "NotebookLM, de Google, está pensado para trabajar con fuentes que tú proporcionas. Puedes añadir documentos y otros materiales compatibles para después hacer preguntas sobre su contenido, crear resúmenes y organizar información.",
          "Imagina que tienes varios apuntes de clase en PDF. En lugar de buscar manualmente cada concepto, puedes crear un cuaderno, añadir los documentos y preguntar dónde se explica un tema concreto. La herramienta puede orientar sus respuestas hacia las fuentes que has incorporado.",
          "Es especialmente interesante para estudiantes, investigadores y personas que necesitan consultar documentos extensos. Sin embargo, debes comprobar las respuestas directamente en los documentos originales, sobre todo si contienen cifras, fechas o instrucciones importantes.",
          "NotebookLM ofrece acceso gratuito con límites de uso y restricciones que pueden variar. No subas archivos confidenciales, expedientes personales ni documentos de trabajo sensibles sin revisar antes las condiciones de privacidad.",
        ],
        links: [
          {
            label: "Abrir NotebookLM",
            url: "https://notebooklm.google.com/",
          },
          {
            label: "Consultar la información oficial de Google",
            url: "https://support.google.com/notebooklm/",
          },
        ],
      },
      {
        heading: "6. Canva: crea diseños con ayuda de inteligencia artificial",
        paragraphs: [
          "Canva es una plataforma de diseño gráfico que incluye herramientas de inteligencia artificial para apoyar la creación de contenido visual. Puedes utilizarla para preparar publicaciones para redes sociales, presentaciones, carteles, documentos y otros diseños.",
          "Su plan gratuito incluye plantillas, recursos y acceso limitado a determinadas funciones de IA. Algunas herramientas, elementos premium y una mayor cantidad de usos requieren una suscripción de pago.",
          "Por ejemplo, puedes empezar con una plantilla para una publicación, adaptar sus colores a tu marca y utilizar las funciones disponibles para generar o mejorar contenido. Revisa siempre qué elementos están incluidos en el plan gratuito antes de exportar.",
          "Si vas a utilizar un diseño en un proyecto comercial, comprueba las licencias de los recursos incluidos y las condiciones de uso de los elementos que hayas seleccionado.",
        ],
        links: [
          {
            label: "Visitar Canva",
            url: "https://www.canva.com/",
          },
          {
            label: "Consultar los planes y funciones de IA",
            url: "https://www.canva.com/pricing/",
          },
        ],
      },
      {
        heading: "7. GitHub Copilot: asistencia para programar",
        paragraphs: [
          "GitHub Copilot está diseñado para ayudar a los desarrolladores mientras escriben código. Puede sugerir líneas de código, completar funciones y ayudar a comprender o modificar fragmentos de un proyecto.",
          "Para alguien que está aprendiendo programación, puede servir como apoyo para entender un error, explorar una función o comparar diferentes maneras de resolver un problema. No sustituye la práctica ni la comprensión de los fundamentos.",
          "GitHub ofrece un plan gratuito con límites de uso. La cantidad de solicitudes, las funciones disponibles y los modelos incluidos pueden cambiar, por lo que conviene revisar la página oficial antes de empezar.",
          "No aceptes código automáticamente. Lee las sugerencias, ejecuta pruebas y revisa la seguridad de cualquier fragmento antes de incorporarlo a una aplicación real.",
        ],
        links: [
          {
            label: "Visitar GitHub Copilot",
            url: "https://github.com/features/copilot",
          },
          {
            label: "Consultar los planes de GitHub Copilot",
            url: "https://github.com/features/copilot/plans",
          },
        ],
      },
      {
        heading: "8. Comparación rápida: ¿qué herramienta deberías elegir?",
        paragraphs: [
          "No existe una única herramienta que sea la mejor para todas las tareas. La elección depende de lo que quieras conseguir, de las funciones que necesites y de los límites del plan gratuito.",
          "Si buscas un asistente general, empieza comparando ChatGPT y Gemini. Para revisar textos largos, prueba Claude. Si necesitas investigar en internet, utiliza Perplexity. Para estudiar documentos propios, NotebookLM puede ser más adecuado. Canva está orientado al diseño y GitHub Copilot a la programación.",
          "Puedes combinar varias herramientas sin pagar una suscripción desde el primer día. Por ejemplo, investiga un tema con Perplexity, contrasta las fuentes originales, prepara un resumen con un asistente y diseña una presentación en Canva.",
        ],
        tips: [
          "Tareas generales y explicaciones: ChatGPT o Gemini.",
          "Redacción y revisión de textos: Claude o ChatGPT.",
          "Investigación con referencias: Perplexity.",
          "Estudio de documentos: NotebookLM.",
          "Diseño gráfico: Canva.",
          "Ayuda para programar: GitHub Copilot.",
        ],
      },
      {
        heading: "9. Consejos de privacidad y seguridad al utilizar IA",
        paragraphs: [
          "Antes de utilizar cualquier asistente, recuerda que puedes estar compartiendo información con un servicio externo. Las condiciones de privacidad, las opciones de conservación de datos y los controles disponibles no son iguales en todas las plataformas.",
          "Evita introducir contraseñas, números de tarjetas, documentos de identidad, datos bancarios, expedientes médicos o información privada de otras personas. Si necesitas analizar un documento, elimina primero los datos que permitan identificar a alguien.",
          "No descargues aplicaciones de IA desde anuncios sospechosos o páginas desconocidas. Entra desde la web oficial del proveedor o desde una tienda de aplicaciones reconocida y comprueba el nombre del desarrollador.",
          "También debes tener cuidado con los resultados. Una IA puede inventar referencias, interpretar mal una instrucción o proporcionar información desactualizada. Para decisiones médicas, legales, financieras o de seguridad, consulta fuentes profesionales y oficiales.",
        ],
        tips: [
          "Utiliza las páginas oficiales de cada herramienta.",
          "Revisa los ajustes de privacidad y uso de datos.",
          "No compartas información personal o confidencial.",
          "Comprueba las fuentes y fechas de las respuestas.",
          "Lee las condiciones de licencia antes de utilizar contenido comercialmente.",
        ],
      },
      {
        heading: "10. Cómo empezar sin pagar",
        paragraphs: [
          "La forma más sencilla de empezar es elegir una tarea que quieras resolver y probar una herramienta adecuada. No necesitas registrarte en siete plataformas ni pagar una suscripción para descubrir cuál encaja mejor contigo.",
          "Prueba el mismo ejercicio en dos asistentes diferentes. Por ejemplo, pide a ambos que expliquen cómo hacer una copia de seguridad de un teléfono Android. Compara la claridad, los pasos, las advertencias y las fuentes que ofrecen.",
          "Después, quédate con la herramienta que te resulte más útil. Comprueba sus límites gratuitos y revisa las condiciones antes de subir archivos o utilizar el contenido en un proyecto.",
        ],
      },
    ],
    conclusion:
      "Las herramientas de inteligencia artificial pueden ayudarte a estudiar, investigar, escribir, diseñar y programar sin que tengas que contratar una suscripción desde el primer momento. ChatGPT y Gemini son buenos puntos de partida para tareas generales; Claude puede ayudarte con textos; Perplexity facilita la investigación con fuentes; NotebookLM trabaja con tus documentos; Canva apoya el diseño y GitHub Copilot ayuda a programar. Empieza con una necesidad concreta, compara los resultados y recuerda que las versiones gratuitas tienen límites que pueden cambiar. La IA es una herramienta de apoyo: tu criterio y la verificación de la información siguen siendo esenciales.",
    references: [
      {
        title: "ChatGPT: información del plan gratuito",
        url: "https://help.openai.com/en/articles/9275245-chatgpt-free-tier-faq",
      },
      {
        title: "Google AI: planes y funciones",
        url: "https://one.google.com/about/",
      },
      {
        title: "Claude: planes oficiales",
        url: "https://www.anthropic.com/pricing",
      },
      {
        title: "Perplexity: planes oficiales",
        url: "https://www.perplexity.ai/enterprise/pricing",
      },
      {
        title: "NotebookLM: centro de ayuda",
        url: "https://support.google.com/notebooklm/",
      },
      {
        title: "Canva: planes y precios",
        url: "https://www.canva.com/pricing/",
      },
      {
        title: "GitHub Copilot: planes",
        url: "https://github.com/features/copilot/plans",
      },
    ],
  },

  {
    slug: "liberar-espacio-android",
    title: "Cómo liberar espacio en tu teléfono Android",
    description:
      "Descubre cómo revisar el almacenamiento, eliminar archivos innecesarios y recuperar espacio de forma segura.",
    category: "Móviles",
    categorySlug: "moviles",
    date: "2026-11-16",
    updated: "2026-11-16",
    readingTime: "6 min",
    author: "Equipo TecnoSencillo",
    introduction:
      "¿Tu teléfono Android muestra constantemente el aviso de almacenamiento lleno? Las fotografías, vídeos, descargas y datos de aplicaciones pueden ocupar mucho espacio con el tiempo. Aquí aprenderás a revisar el almacenamiento y liberar espacio sin borrar accidentalmente tus archivos importantes.",
    sections: [
      {
        heading: "1. Comprueba qué ocupa más espacio",
        paragraphs: [
          "Antes de eliminar archivos, revisa cómo se distribuye el almacenamiento. En muchos teléfonos Android puedes abrir Ajustes y buscar Almacenamiento. Los nombres y las opciones pueden variar según el fabricante.",
          "Observa cuánto espacio ocupan las aplicaciones, las imágenes, los vídeos, los documentos y otros archivos.",
        ],
      },
      {
        heading: "2. Elimina descargas que ya no necesitas",
        paragraphs: [
          "La carpeta de descargas puede acumular instaladores, documentos duplicados, imágenes y otros archivos que ya no utilizas.",
          "Abre la aplicación Archivos de tu teléfono, entra en Descargas y revisa los elementos. Elimina solamente los que estés seguro de que ya no necesitas.",
        ],
      },
      {
        heading: "3. Revisa fotografías y vídeos",
        paragraphs: [
          "Las fotografías y especialmente los vídeos pueden ocupar una parte importante del almacenamiento. Revisa los archivos grandes y las copias duplicadas.",
          "Si utilizas un servicio de copias de seguridad, comprueba primero que tus archivos se hayan guardado correctamente antes de eliminar las copias locales.",
        ],
      },
      {
        heading: "4. Limpia la caché de las aplicaciones",
        paragraphs: [
          "Las aplicaciones pueden guardar datos temporales llamados caché. En Android, normalmente puedes revisar esta información desde Ajustes, Aplicaciones y seleccionando una aplicación concreta.",
          "La opción Borrar caché elimina datos temporales. No es lo mismo que Borrar almacenamiento o Borrar datos, que puede eliminar información local, sesiones y configuraciones de la aplicación.",
        ],
      },
      {
        heading: "5. Desinstala aplicaciones que no utilizas",
        paragraphs: [
          "Revisa las aplicaciones instaladas y elimina las que ya no necesitas. Esto puede liberar espacio y reducir la cantidad de aplicaciones que se ejecutan en tu dispositivo.",
          "Antes de desinstalar una aplicación, asegúrate de que no contiene información local que quieras conservar.",
        ],
      },
    ],
    conclusion:
      "Liberar espacio en Android empieza por identificar qué archivos y aplicaciones ocupan más almacenamiento. Revisa tus descargas, fotografías y aplicaciones con cuidado, y recuerda comprobar tus copias de seguridad antes de eliminar archivos importantes.",
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}