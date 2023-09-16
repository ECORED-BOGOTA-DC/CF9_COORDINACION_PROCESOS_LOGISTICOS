export default {
  global: {
    componenteFormativo: 'Control de inventarios',
    descripcionCurso:
      'Los inventarios son el activo más importante en una organización, por tanto, es muy necesario tener una buena gestión, ya que esto permite contar con el <em>stock</em> necesario para cumplir a tiempo con la demanda, teniendo a sus clientes satisfechos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos generales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de las mercancías',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de inventarios',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Políticas de inventarios',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Funciones de los inventarios',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Ficha técnica del producto',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Gestión de inventarios',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Trazabilidad en la gestión de inventarios',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'TIC aplicadas en la gestión de inventarios',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Cadena de suministros e inventarios',
            hash: 't_1_9',
          },
          {
            numero: '1.10',
            titulo:
              'Administración de inventario por proveedores (Vendor Inventory Management - VMI)',
            hash: 't_1_10',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Costos de inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clases de costos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Costos de pedidos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Costos de mantenimiento de inventarios de materias primas',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Costos de falta de existencias',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Sistema ABC de inventarios',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Cantidad económica de pedido (EOQ)',
            hash: 't_2_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121513_CF009_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    // {
    //   tema: '',
    //   referencia: '',
    //   tipo: '',
    //   link: 'https://www.google.com/',
    // },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'proceso en el cual una vez verificada la mercadería se dispone a ubicarla en un espacio físico de acuerdo con sus características de tamaño, peso, fragilidad, rotación y fecha de expiración.',
    },
    {
      termino: 'Alta dirección',
      significado:
        'persona o el conjunto que tienen la responsabilidad de tomar las decisiones de la organización, establecer los objetivos y diseñar las estrategias para la consecución de los resultados que generen rentabilidad.',
    },
    {
      termino: 'Control de inventario',
      significado:
        'tiene por objeto velar por la existencia de los stocks dentro del almacén, (inventarios cíclicos, inventarios de barrido, preservación de producto) con el fin de tener un ERI óptimo (Exactitud Registro de Inventario). Así mismo, corresponde a todos los movimientos que se realice de la mercadería (transferencia, producto no conforme, devoluciones, etc.).',
    },
    {
      termino: 'Costos',
      significado:
        'valor monetario de los gastos que se generan en la producción, fabricación o procesamiento de un producto o servicio como materias primas, insumos, mano de obra, servicios, infraestructura, equipos y maquinaria, etc.',
    },
    {
      termino: 'Materia prima',
      significado:
        'materia extraída de otros materiales y que se utiliza o transforma para elaborar otros materiales que más tarde se convertirán en bienes de consumo.',
    },
    {
      termino: 'Mercancía',
      significado: 'bien con lo que se comercia.',
    },
    {
      termino: 'Productos en proceso',
      significado:
        'productos que están en proceso de fabricación o producción.',
    },
    {
      termino: 'Productos terminados',
      significado:
        'productos que han pasado completamente el ciclo de producción en una empresa determinada, han sido totalmente completados, han pasado el control técnico y se han entregado en el almacén o se han enviado al consumidor (revendedor).',
    },
    {
      termino: 'Recepción',
      significado:
        'proceso mediante el cual se realiza la verificación y control físico y documental de la mercadería que ingresa al almacén desde una importación o compra local, hasta la logística inversa (devoluciones).',
    },
  ],
  referencias: [
    {
      referencia:
        'Becerra, G., K., Pedroza, B., V., Pinilla, J., y Vargas, L., M. (2017). Implementación de las TIC’S en la gestión de inventario dentro de la cadena de suministro. <em>Revista de Iniciación Científica</em>, 3(1), 36-49. ',
      link: 'https://core.ac.uk/download/pdf/234019677.pdf',
    },
    {
      referencia:
        'EAE Business School. (2020). <em>La gestión de inventarios, un aspecto clave en la planificación de cadenas de suministro.</em>',
      link:
        'https://retos-operaciones-logistica.eae.es/la-gestion-de-inventarios-un-aspecto-clave-en-la-planificacion-de-cadenas-de-suministro/ ',
    },
    {
      referencia:
        'Osorio, L., Vásquez, J., y Moreno, L. (2017). <em>Ficha técnica materia prima avena en hojuelas</em>.',
      link:
        'https://www.studocu.com/co/document/universidad-nacional-abierta-y-a-distancia/calculo-diferencial/formato-ficha-tecnica-avena-en-hojuelas/9387541 ',
    },
    {
      referencia:
        'Procolombia. (2017). <em>Organización Mundial de Aduanas (OMA) aprobó nueva clasificación arancelaria</em>.',
      link:
        'https://procolombia.co/actualidad-internacional/organizacion-mundial-de-aduanas-oma-aprobo-nueva-clasificacion-arancelaria ',
    },
    {
      referencia:
        'Riquelme, M. (2017). <em>¿Qué son los costos de inventario?</em>',
      link: 'https://www.webyempresas.com/que-son-los-costos-de-inventario/ ',
    },
    {
      referencia:
        'Rodríguez, B. (s.f.). <em>TIC’s aplicadas a la logística. Módulo 2.</em>',
      link:
        'http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/133/modulo2/pdf/tecinfcom.pdf ',
    },
    {
      referencia:
        'Salazar, L. (2019). <em>Cantidad económica de pedidos - EOQ.</em>',
      link:
        'https://www.ingenieriaindustrialonline.com/gestion-de-inventarios/cantidad-economica-de-pedidos-eoq/ ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzáte Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Mónica María Cárdenas Carrillo',
          cargo: 'Experta Temática',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios SENA - CIES',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la industria de la comunicación gráfica CENIGRAF',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Revisor Metodológico y Pedagógico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de estilo',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
