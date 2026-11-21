
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  tips?: string[];
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
};

export const categories = [
  { name: "Informática", slug: "informatica", description: "Windows, ordenadores y soluciones informáticas." },
  { name: "Móviles", slug: "moviles", description: "Android, smartphones y consejos móviles." },
  { name: "Inteligencia artificial", slug: "inteligencia-artificial", description: "Herramientas de IA y nuevas tecnologías." },
  { name: "Aplicaciones", slug: "aplicaciones", description: "Aplicaciones y programas útiles." },
  { name: "Internet", slug: "internet", description: "Seguridad, privacidad y navegación web." },
  { name: "Guías prácticas", slug: "guias-practicas", description: "Tutoriales tecnológicos paso a paso." },
];

export const articles: Article[] = [
  {
    slug: "acelerar-windows-11",
    title: "Cómo acelerar Windows 11 sin instalar programas",
    description: "Aprende a mejorar el rendimiento de Windows 11 con ajustes sencillos, herramientas integradas y buenos hábitos.",
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
          "No desactives componentes del sistema ni programas de seguridad si no sabes para qué sirven."
        ],
        tips: [
          "Haz clic derecho en el botón Inicio y abre Administrador de tareas.",
          "Entra en Aplicaciones de inicio.",
          "Comprueba el impacto de cada aplicación.",
          "Desactiva únicamente las que reconozcas y no necesites al iniciar."
        ]
      },
      {
        heading: "2. Libera espacio de almacenamiento",
        paragraphs: [
          "Cuando el disco tiene muy poco espacio disponible, algunas tareas del sistema pueden verse afectadas. Windows incluye herramientas para localizar y eliminar archivos temporales.",
          "Ve a Configuración, después a Sistema y selecciona Almacenamiento. Desde allí podrás revisar los archivos temporales y otras categorías que ocupan espacio.",
          "Revisa cuidadosamente lo que vas a eliminar. No marques la carpeta Descargas si contiene documentos que todavía necesitas."
        ],
        tips: [
          "Abre Configuración con Windows + I.",
          "Selecciona Sistema y después Almacenamiento.",
          "Abre Archivos temporales.",
          "Comprueba cada categoría antes de confirmar la limpieza."
        ]
      },
      {
        heading: "3. Reduce las aplicaciones que se ejecutan en segundo plano",
        paragraphs: [
          "Algunas aplicaciones continúan funcionando aunque no las estés utilizando. Esto puede consumir memoria y batería, especialmente en ordenadores con recursos limitados.",
          "Revisa qué programas tienes abiertos desde el Administrador de tareas. Cierra los que no estés utilizando, siempre que no sean procesos esenciales del sistema."
        ]
      },
      {
        heading: "4. Actualiza Windows y los controladores",
        paragraphs: [
          "Las actualizaciones pueden corregir errores, mejorar la compatibilidad y solucionar problemas de rendimiento. Abre Configuración, entra en Windows Update y comprueba si existen actualizaciones disponibles.",
          "Para los controladores, utiliza Windows Update o la página oficial del fabricante de tu ordenador o de sus componentes. Evita descargar controladores desde páginas desconocidas."
        ]
      },
      {
        heading: "5. Ajusta los efectos visuales",
        paragraphs: [
          "Las animaciones y algunos efectos visuales pueden consumir recursos. Si tu ordenador tiene hardware limitado, reducir ciertos efectos puede ayudar a conseguir una experiencia más fluida.",
          "Busca Ajustar la apariencia y el rendimiento de Windows desde el menú Inicio. En la ventana de opciones de rendimiento puedes seleccionar los efectos que quieres mantener."
        ]
      },
      {
        heading: "6. Comprueba qué está consumiendo recursos",
        paragraphs: [
          "Antes de realizar cambios adicionales, abre el Administrador de tareas y observa las columnas CPU, Memoria y Disco. Esto permite identificar si una aplicación concreta está utilizando demasiados recursos.",
          "Si el uso permanece muy alto incluso sin aplicaciones abiertas, puede ser necesario investigar procesos específicos, temperaturas, almacenamiento o posibles problemas de hardware."
        ]
      }
    ],
    conclusion:
      "No necesitas instalar un optimizador desconocido para empezar a mejorar Windows 11. Revisar las aplicaciones de inicio, liberar espacio con cuidado, actualizar el sistema y controlar el consumo de recursos son buenos primeros pasos. Si el ordenador continúa lento, conviene identificar la causa antes de aplicar cambios más avanzados."
  },
  {
    slug: "herramientas-ia-gratuitas",
    title: "Herramientas de inteligencia artificial gratuitas que debes conocer",
    description: "Conoce diferentes herramientas de inteligencia artificial y aprende para qué puede servir cada una.",
    category: "Inteligencia artificial",
    categorySlug: "inteligencia-artificial",
    date: "2026-11-16",
    updated: "2026-11-16",
    readingTime: "8 min",
    author: "Equipo TecnoSencillo",
    introduction:
      "La inteligencia artificial ya forma parte de muchas actividades cotidianas. Puede ayudarte a comprender información, organizar ideas, trabajar con documentos y crear contenido. En esta guía exploramos varias herramientas conocidas y sus posibles usos.",
    sections: [
      {
        heading: "1. Asistentes de inteligencia artificial",
        paragraphs: [
          "Los asistentes de IA pueden responder preguntas, explicar conceptos, resumir textos y ayudarte a desarrollar ideas. Son especialmente útiles cuando necesitas una explicación inicial de un tema.",
          "Puedes utilizarlos para estudiar, planificar tareas o entender instrucciones técnicas. Sin embargo, sus respuestas pueden contener errores y siempre conviene comprobar los datos importantes."
        ]
      },
      {
        heading: "2. Herramientas para investigar información",
        paragraphs: [
          "Existen herramientas que combinan inteligencia artificial con búsquedas en internet para ayudarte a explorar un tema y localizar fuentes.",
          "Son útiles para comenzar una investigación, pero debes abrir las fuentes originales y verificar fechas, autores y afirmaciones antes de utilizar la información."
        ]
      },
      {
        heading: "3. Herramientas para crear imágenes",
        paragraphs: [
          "Los generadores de imágenes permiten crear ilustraciones a partir de descripciones escritas. Pueden servir para desarrollar conceptos visuales, preparar ideas de diseño o producir recursos gráficos.",
          "Comprueba las condiciones de uso de cada servicio, especialmente si quieres utilizar las imágenes en proyectos comerciales."
        ]
      },
      {
        heading: "4. Herramientas para trabajar con documentos",
        paragraphs: [
          "Algunas aplicaciones utilizan IA para resumir documentos, organizar notas o localizar información dentro de archivos. Esto puede ahorrar tiempo cuando trabajas con grandes cantidades de texto.",
          "No subas documentos confidenciales o información personal sin comprender primero las políticas de privacidad del servicio."
        ]
      },
      {
        heading: "5. Cómo elegir una herramienta de IA",
        paragraphs: [
          "No todas las herramientas sirven para lo mismo. Antes de registrarte, identifica qué problema quieres resolver y comprueba si el servicio ofrece una versión gratuita adecuada.",
          "También revisa los límites de uso, las funciones disponibles, la política de privacidad y las condiciones para utilizar el contenido generado."
        ],
        tips: [
          "Compara las funciones gratuitas antes de registrarte.",
          "Comprueba los límites diarios o mensuales.",
          "No compartas contraseñas ni información sensible.",
          "Verifica la información importante con fuentes fiables."
        ]
      }
    ],
    conclusion:
      "La inteligencia artificial puede ser una gran ayuda para aprender y trabajar, siempre que conozcas sus limitaciones. Empieza con una tarea concreta, compara varias herramientas y verifica sus resultados antes de confiar en ellos."
  },
  {
    slug: "liberar-espacio-android",
    title: "Cómo liberar espacio en tu teléfono Android",
    description: "Descubre cómo revisar el almacenamiento, eliminar archivos innecesarios y recuperar espacio de forma segura.",
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
          "Observa cuánto espacio ocupan las aplicaciones, las imágenes, los vídeos, los documentos y otros archivos."
        ]
      },
      {
        heading: "2. Elimina descargas que ya no necesitas",
        paragraphs: [
          "La carpeta de descargas puede acumular instaladores, documentos duplicados, imágenes y otros archivos que ya no utilizas.",
          "Abre la aplicación Archivos de tu teléfono, entra en Descargas y revisa los elementos. Elimina solamente los que estés seguro de que ya no necesitas."
        ]
      },
      {
        heading: "3. Revisa fotografías y vídeos",
        paragraphs: [
          "Las fotografías y especialmente los vídeos pueden ocupar una parte importante del almacenamiento. Revisa los archivos grandes y las copias duplicadas.",
          "Si utilizas un servicio de copias de seguridad, comprueba primero que tus archivos se hayan guardado correctamente antes de eliminar las copias locales."
        ]
      },
      {
        heading: "4. Limpia la caché de las aplicaciones",
        paragraphs: [
          "Las aplicaciones pueden guardar datos temporales llamados caché. En Android, normalmente puedes revisar esta información desde Ajustes, Aplicaciones y seleccionando una aplicación concreta.",
          "La opción Borrar caché elimina datos temporales. No es lo mismo que Borrar almacenamiento o Borrar datos, que puede eliminar información local, sesiones y configuraciones de la aplicación."
        ]
      },
      {
        heading: "5. Desinstala aplicaciones que no utilizas",
        paragraphs: [
          "Revisa las aplicaciones instaladas y elimina las que ya no necesitas. Esto puede liberar espacio y reducir la cantidad de aplicaciones que se ejecutan en tu dispositivo.",
          "Antes de desinstalar una aplicación, asegúrate de que no contiene información local que quieras conservar."
        ]
      }
    ],
    conclusion:
      "Liberar espacio en Android empieza por identificar qué archivos y aplicaciones ocupan más almacenamiento. Revisa tus descargas, fotografías y aplicaciones con cuidado, y recuerda comprobar tus copias de seguridad antes de eliminar archivos importantes."
  }
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
