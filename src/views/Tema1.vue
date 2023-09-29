<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Conceptos generales
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En los inventarios se tienen muchos términos y conceptos relevantes para varias empresas, pero en el mundo empresarial se requiere de un marco general que se trabajará a continuación. Hay que aclarar que cada empresa en detalle puede trabajar más conceptos, así se tiene que: 
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_1 1.1 Clasificación de las mercancías
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") La palabra mercancía proviene, según Riquelme (2017), de “mercante” que significa “comerciante”, lo cual quiere decir que es todo aquello que se puede comprar o vender para satisfacer la demanda. En la antigüedad la mercancía se empezó a intercambiar con elementos mediante el trueque y luego con dinero que era más útil para las personas.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 La mercancía es producto de un proceso de fabricación o producción que lleva inherente un coste por su elaboración como mano de obra, materia prima, maquinaria, almacenamiento, distribución, etc. y por esto las empresas buscan comercializar sus mercancías para obtener ganancias.
        p.mb-0(data-aos="fade-left") De acuerdo con lo anterior y al uso o naturaleza, las mercancías se pueden clasificar en:

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-xl-9.mx-auto
        .row.justify-content-center.mb-4
          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-1.png" alt="Imagen decorativa Mercancía perecedera")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía perecedera
                p.mb-0 Es aquella cuya vida útil es de 1 a 7 días; como los alimentos: verduras, lácteos y frutas.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-right")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-2.png" alt="Imagen decorativa Mercancía no perecedera")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h5.mb-3.text-center Mercancía no perecedera
                p.mb-0 Mercancía con una vida útil mayor, pueden ser alimentos empacados al vacío o enlatados. 

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-right")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-3.png" alt="Imagen decorativa Mercancía frágil")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía frágil
                p.mb-0 Productos que pueden sufrir daños y que requieren una manipulación especial en su transporte. 
          
          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-up")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-4.png" alt="Imagen decorativa Mercancía peligrosa")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h5.mb-3.text-center Mercancía peligrosa
                p.mb-0 Son productos químicos, inflamables, derivados de petróleo o gas que, por sus componentes, tienen algún tipo de peligro y tienen que ser manejados con medidas de seguridad específicas.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-5.png" alt="Imagen decorativa Mercancía sobredimensionada")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía sobredimensionada
                p.mb-0 Son los productos de gran tamaño y que requieren un método de transporte especial y documentación específica.
    
    p.mb-5(data-aos="fade-right") Por su parte, la Organización Mundial de Aduanas las organizó por medio del SA (Sistema Armonizado) de Designación y Codificación de Mercancía así: 

    .h4.mb-5(data-aos="fade-right") SA (Sistema Armonizado)

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 506px" data-aos="fade-right" alt="Imagen decorativa")
      .col-12.col-lg-7.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-left")
          div(numero="1" titulo="Materias primas")
            p.mb-0 Material base para la elaboración de otros elementos, por lo general se trata de materiales de la naturaleza, por ejemplo, la madera.
          div(numero="2" titulo="Semiproductos")
            p.mb-0 Productos que se elaboran a partir de las materias primas y sirven como base para otros productos, por ejemplo, la madera procesada en listones.
          div(numero="3" titulo="Productos elaborados")
            p.mb-0 Cada objeto elaborado por las empresas que suplen las necesidades de las personas, por ejemplo, una escoba.
          div(numero="4" titulo="Productos brutos")
            p.mb-0 Productos que son prefabricados para la entrega, pero los acabados los hace una empresa diferente a la empresa matriz, por ejemplo, las cerámicas para pintar, las que se conocen como “bizcocho” en algunas regiones de Colombia.
    
    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4
        p.fw-bold.mb-0(data-aos="fade-left") El objetivo de esta clasificación es facilitar las operaciones de importación y exportación, este criterio es utilizado para determinar los aranceles en aduana, ya que la mayoría de la mercancía del comercio internacional está clasificada bajo el SA (Sistema Armonizado) y los códigos están organizados en una estructura legal basada en reglas definidas. Este es un sistema completo que tiene la funcionalidad de clasificar los productos de todo el mundo, tal como lo dice Procolombia (2017):

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") El sistema armonizado de designación y codificación de mercancías es una nomenclatura internacional de productos multipropósito desarrollado por la Organización Mundial de Aduanas (OMA).
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Contiene alrededor de 5.000 grupos de productos; cada uno identificado por un código de seis dígitos, dispuestos en una estructura legal y lógica, y es apoyado por reglas bien definidas para lograr una clasificación uniforme.
    
    p.mb-5(data-aos="fade-right") Es utilizado por más de 200 países y economías como base de sus aranceles de aduanas y para la recopilación de estadísticas del comercio internacional. Más del 98 % de la mercancía en el comercio internacional se clasifica en términos del SA. Contribuye a la armonización de los procedimientos aduaneros y comerciales y el intercambio de datos comerciales no documentados en relación con tales procedimientos, reduciendo así los costos relacionados con el comercio internacional.

    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Como es un sistema tan grande, se le invita a que, como aprendiz, profundice en la necesidad según el tipo de industria para la cual esté trabajando en el presente o en el futuro. Tenga en cuenta que en este componente formativo se trabaja la generalidad del sistema y sus clasificaciones a grandes rasgos.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 135px;" data-aos="fade-left" alt="Imagen decorativa")

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_2 1.2 Clasificación de inventarios
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-8.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 De acuerdo con el tipo de mercancías y necesidades de la organización, se pueden clasificar los inventarios, esto permitirá a la alta dirección planificar y controlar de forma eficiente los materiales y productos que se emplean en la operación, obteniendo un correcto funcionamiento entre la oferta y la demanda generando utilidades y productividad para la organización. Se deben tener en cuenta los siguientes grupos:

    .slyderB_bg_01.px-2.px-md-5.py-3.mb-5(data-aos="fade-right")
      SlyderA(tipo="b")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-9.svg' alt="Imagen decorativa")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="01")
              h4.ps-4.mb-4 Inventarios según el momento
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario inicial:</b> se realiza al inicio de las operaciones.
              p.ps-4 <b style="color: #1A0F91">Inventario final:</b> se efectúa al término de un periodo contable; una vez realizado el control de entradas y salidas de existencias, este valor es incluido en el balance general de la organización, por lo que aporta información para determinar una nueva situación patrimonial.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-10.svg' alt="Imagen decorativa")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="02")
              h4.ps-4 Inventarios según la logística
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario de anticipación o previsión:</b> se tienen con anticipación cuando se conoce o se planean épocas de mayor demanda para cubrir una necesidad futura definida, como temporadas o promociones comerciales.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios de lote o de tamaño de lote:</b> estos se piden en tamaño de lote, ya que es más económico hacerlo así, que pedirlo en menores cantidades o cuando sea necesario satisfacer la demanda.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios en consignación:</b> son aquellos bienes que un consignador entrega para ser vendidos a otra empresa, pero el título de propiedad lo conserva el consignador.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-11.svg' alt="Imagen decorativa")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="03")
              h4.ps-4.mb-4 Inventario según la periodicidad 
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario perpetuo:</b> este tipo de inventario permite mayor control, ya que mantiene un registro permanente de todos los movimientos de los bienes permitiendo localizarlos en cualquier momento.
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario periódico:</b> es el conteo físico de mercancías en un periodo contable determinado dónde se analizan las entradas y salidas.

        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-12.svg' alt="Imagen decorativa")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="04")
              h4.ps-4 Inventarios según la forma
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario de materia prima:</b> mide el <i>stock</i> de existencias de los insumos o materias primas que requiere la organización en su operación.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios en procesos:</b> son activos que se encuentran en el proceso de fabricación o transformación.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios de productos terminados:</b> este inventario se realiza a los productos o mercancías fabricados que están listos para la comercialización. 
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario en tránsito:</b> se denomina inventario en tránsito cuando la mercancía o productos están en camino de un lugar a otro, por ejemplo, sale de la bodega del producto terminado para el sitio de comercialización, en ese momento el inventario está en movimiento. 
        
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg' alt="Imagen decorativa")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="05")
              h4.ps-4  Otros tipos de inventarios 
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario físico:</b> es un conteo físico que se realiza para corroborar las existencias reales con los registros del inventario. Es importante contar con una herramienta que permita tener un correcto control de todos los movimientos, entradas y salidas de las existencias.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario máximo:</b> es el inventario máximo de mercancía que una organización puede mantener, para evitar el incremento en los costos de manejo y almacenamiento.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario mínimo:</b> es la cantidad mínima del inventario a ser mantenida en el almacén y que no afecte por escasez la producción o ventas.

    .cajon.color-primario.p-4(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 De acuerdo con el tipo de mercancía que se maneje, las organizaciones deben contar con la infraestructura, maquinaria y equipos adecuados que garanticen su calidad, almacenamiento y manejo, además, el personal capacitado para su manipulación.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_3 1.3 Políticas de inventarios

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") El inventario es el activo más importante que tiene una organización, es por esto que en ellos se centran decisiones importantes que debe tomar la alta dirección, ya que del buen manejo y control que se tenga de las existencias depende en gran medida la productividad y buenos resultados financieros, por tanto, las empresas deben diseñar políticas que se adapten a sus necesidades para lograr el correcto funcionamiento de los inventarios minimizando costos de mantenimiento y garantizando la disponibilidad de las mercancías para satisfacer las necesidades de los clientes.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Para diseñar las políticas de los inventarios, la alta dirección debe conocer muy bien el funcionamiento de la organización y tener en cuenta factores como capacidad de almacenamiento, tiempo de reabastecimiento, compromisos con clientes, naturaleza de la mercancía y restricciones del proveedor:

    .d-flex.flex-wrap.mb-5
      .col-12.col-lg-8.pe-lg-4.order-2.order-lg-1
        LineaTiempoD.color-secundario(data-aos="fade-right")
          div(numero="1" titulo="Almacenamiento")
            p.mb-0 Esta variable tiene que ver con la capacidad de almacenamiento que tiene la organización, zonas destinadas para bodega y el costo que tiene el mantenimiento y manejo de los inventarios, así como el valor de la mano de obra del personal que está a cargo del inventario.
          div(numero="2" titulo="Tiempo de reabastecimiento")
            p.mb-0 Es el tiempo que dura desde la programación y gestión del pedido hasta la llegada de las materias primas o insumos necesarios para la fabricación de los productos en la empresa. Es importante lograr una excelente articulación entre las áreas de compras, producción, financiera, ventas para que no se generen contratiempos en cualquier etapa del pedido, afectando la cadena y, por ende, incumpliendo compromisos con los clientes.
          div(numero="3" titulo="Compromisos con los clientes")
            p.mb-0 Esta variable es de gran importancia porque se deben cumplir con los tiempos de entrega prometidos a los clientes, planificar las temporadas de alta demanda como ofertas comerciales, Navidad, vacaciones.
          div(numero="4" titulo="Naturaleza de la mercancía")
            p.mb-0 Se debe tener en cuenta la caducidad de los insumos, si son perecederos, la forma en que se debe mantener almacenados, frío o calor, la rotación.
          div(numero="5" titulo="Proveedores")
            p.mb-0 Hay que tener en cuenta la capacidad de respuesta de los proveedores, tiempo de demora en la entrega de los pedidos, las condiciones para la entrega si se debe realizar un pedido medido, si el proveedor tiene que fabricarlo o lo tiene disponible para entrega, así como el medio de transporte.
      img.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 321px" data-aos="fade-left" alt="Imagen decorativa")
    
    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4
        p.fw-bold.mb-0(data-aos="fade-left") Es importante analizar cada aspecto para diseñar de forma eficiente las políticas de los inventarios, garantizando las existencias de las mercancías y responder a los requerimientos de la demanda, haciendo uso apropiado de los recursos de la organización, ya que los inventarios representan una inversión alta que ejercen gran influencia en las decisiones financieras. Un inventario alto demuestra elevados costos de mantenimiento; y la falta de inventario, incumplimiento en entregas, paradas de producción, pérdidas de ventas o clientes insatisfechos.

    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-16.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Además, se debe lograr una eficiente articulación de toda la cadena de suministro, de forma tal que los tiempos de respuesta de cada área de la organización no afecten el funcionamiento ni generen retrasos en la operación, desde que se inicia el proceso con las requisiciones de materias primas o insumos, hasta que sale el producto final con destino a los clientes; es decir, el área de compras debe hacer los pedidos a tiempo para que los insumos estén disponibles cuando los requiera producción y que el producto esté terminado en el tiempo pactado con el cliente. 
    
    p.mb-5(data-aos="fade-right") Para determinar las políticas de inventarios se debe tener en cuenta lo descrito en la figura 1.

    .mx-auto.col-lg-10.col-xl-8
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1.
        span Políticas de inventario
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-17.svg" style="max-width: 610px;" data-aos="fade-left" alt="Imagen que muestra las políticas de inventario, las cuales son:<br>-Identificar el problema y conocer entorno de necesidades.<br>- Analizar alternativas de políticas.<br>-Elegir políticas.<br>-Implementar políticas.<br>-Comunicar las políticas a todo el personal.<br>-Evaluar las politicas")

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_4 1.4 Funciones de los inventarios
    
    p.mb-5(data-aos="fade-right") Los inventarios en una organización son la referencia en todas las etapas de operación, desde el proceso como materias primas hasta que terminan como productos terminados que serán entregados a los clientes; por tanto, requieren una atención importante, ya que de acuerdo con los tiempos de demora en la cadena de suministros se definen las existencias y su reabastecimiento, porque una inadecuada administración puede generar pérdidas que afectan en gran medida las finanzas en una empresa. 

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-18.svg" style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-12.col-lg-8.ps-lg-4
        p(data-aos="fade-left") La alta dirección debe tener una buena planificación y administración de los inventarios para lograr:
        ul.lista-ul--separador
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Disminuir costos por pérdidas en las diferentes etapas del proceso, como paradas en la producción por escasez de la materia prima requerida para la operación, lo que conlleva tiempo perdido tanto para maquinaria como para la mano de obra, pérdidas en las ventas por no tener el producto disponible cuando el cliente lo requiere lo que puede llevar a clientes insatisfechos que se van para la competencia dejando mala imagen de la organización.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Garantizar la disponibilidad de la mercancía ofertada, cumpliendo con los requerimientos de entrega en los tiempos pactados y con productos de calidad para satisfacer las necesidades de los clientes.
    
    .d-flex.flex-wrap.mb-4
      .col-12.col-lg-8.pe-lg-4.order-2.order-lg-1
        ul.lista-ul--separador.mb-0
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Tener control de los inventarios para así detectar los requerimientos reales de las compras de las materias primas o insumos necesarios para la operación de la organización, evitando retrasos y planificando así compras en lotes o volúmenes para minimizar costos.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Permitir a la organización manejar materiales perecederos teniendo un adecuado flujo de utilización de acuerdo con su vida útil.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Organizar y planificar el mantenimiento y manejo del almacenamiento de los inventarios, optimizando recursos como mano de obra, equipos, maquinaria, instalaciones, etc. 
      img.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema1/img-19.svg" style="max-width: 400px" data-aos="fade-left" alt="Imagen decorativa")

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_5 1.5 Ficha técnica del producto
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-20.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La ficha técnica de un producto o servicio es un documento en el que se especifican todas sus características, como composición, características físicas y técnicas, recomendaciones, forma de almacenamiento, cuidados, formas de uso y otros datos importantes; lo anterior permite estandarizar el producto dando una presentación clara a los usuarios de lo que están comprando para determinar si cumple con sus requerimientos o necesidades.

    p.mb-5(data-aos="fade-right") Este documento debe ser visible, de fácil lectura, con la información precisa y actualizada, teniendo en cuenta el mercado al que va dirigido; en el mercado hay fichas técnicas de productos químicos, medicamentos, alimentos, etc.

    .cajon.color-primario.p-4.mb-4(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 Las fichas técnicas, por lo general, están representadas por cuadros o viñetas que contienen la siguiente información:
    
    .d-flex.flex-wrap.justify-content-center.mb-4.container-100.py-4(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-xl.col-lg-3.col-md-5.tarjeta-edit-1
        span.number-tj 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-1.svg" style="max-width: 93px" alt="Imagen decorativa")
        p.text-center.mb-0(data-aos="fade-right") <b>Identificación del producto:</b> nombre comercial, técnico o científico.
      
      .col-xl.col-lg-3.col-md-5.tarjeta-edit-1
        span.number-tj 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-2.svg" style="max-width: 93px" alt="Imagen decorativa")
        p.text-center.mb-0(data-aos="flip-right") <b>Información comercial:</b> usos, empaque, presentación, variedades, embalaje, unidades por caja.
      
      .col-xl.col-lg-3.col-md-5.tarjeta-edit-1
        span.number-tj 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-3.svg" style="max-width: 93px" alt="Imagen decorativa")
        p.text-center.mb-0(data-aos="flip-left") <b>Información técnica:</b> características físicas y químicas, densidad, composición.
      
      .col-xl.col-lg-3.col-md-5.tarjeta-edit-1
        span.number-tj 04
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-4.svg" style="max-width: 93px" alt="Imagen decorativa")
        p.text-center.mb-0(data-aos="fade-left") <b>Aspectos arancelarios:</b> si el producto se acoge a algún TLC, partidas arancelarias.

    p.mb-5(data-aos="fade-right") Algunos ejemplos de fichas técnicas son lo que se hacen para los alimentos o las materias primas, tal como lo puedes ver en el siguiente recurso:

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(90deg, rgba(26,15,145,1) 26%, rgba(58,180,177,1) 100%);")
      .row.justify-content-around.align-items-center(data-aos="flip-up")
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-21.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Ficha técnica de alimentos
              p.text-small Formato único de alimentos registros sanitarios o permiso sanitario o notificación sanitaria y trámites asociados (resolución 2674 de 2013, resolución 3168 de 2015). Archivo Excel que puede ver en el siguiente enlace:
            .col-sm-auto
              a.boton.color-acento-botones(href="https://app.invima.gov.co/blog_invima/blog_alimentos/admin/uploads/tutoriales/info3.html#/0/16" target="_blank" style="background-color: #E6B046")
                span Ir a página
                i.fas.fa-link

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_6 1.6 Gestión de inventarios
    
    p.mb-5(data-aos="fade-right") La gestión de inventarios es un pilar para tener en cuenta en todas las empresas, tal como se puede ver en el siguiente recurso.

    .d-flex.flex-wrap
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema1/img-18.svg" style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-12.col-lg-8.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-left")
          div(numero="1" titulo="Gestión de inventarios")
            p.mb-0 Una organización debe conocer muy bien su funcionamiento, ya que de esta forma puede realizar una correcta gestión de sus inventarios, lo cual tiene como finalidad controlar el flujo de mercancías de manera que se puedan reducir las existencias y teniendo siempre en <i>stock</i> lo necesario para cumplir con los requerimientos de los clientes.
          div(numero="2" titulo="Registro exacto")
            p.mb-0 La gestión de inventarios busca un control preciso de existencias y un registro exacto de movimientos, abarcando materias primas, insumos en fabricación y productos terminados listos para la venta. Permite optimizar recursos, reducir costos y pérdidas, e incrementar la productividad al conocer ubicaciones precisas y disponibilidad.
          div(numero="3" titulo="Nivel de almacenamiento")
            p.mb-0 Para que una buena gestión de inventarios dé resultados, la alta dirección debe determinar muy bien su nivel de almacenamiento y en qué momento se deben realizar los pedidos para optimizar los recursos y no incurrir en costos elevados para la organización.
          div(numero="4" titulo="Costos innecesarios")
            p.mb-0 Uno de los principales objetivos de la gestión de inventarios es la determinación de los métodos para el registro de todos los movimientos de la mercancía (entradas - salidas) dentro del proceso, registro de las compras, pérdidas y existencias.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_7 1.7 Trazabilidad en la gestión de inventarios
    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-23.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 <b>“La trazabilidad es el seguimiento que se le hace a todos los movimientos de un producto durante todas las etapas del proceso productivo” EAE Business School (2020)</b>, así, es la habilidad de trazar la ruta desde que ingresan los insumos o materias primas, durante el proceso productivo, el producto terminado y, por último, hasta la entrega final al consumidor.

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-24.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4(data-aos="fade-left")
        p.mb-0 Según la Organización Internacional para la Estandarización (ISO), la trazabilidad es <b>“la propiedad que dispone el resultado de un valor estándar, que puede vincularse con referencias específicas mediante continuas comparaciones”</b>; lo cual se traduce a un conjunto de medidas, acciones y procesos que permiten el rastreo del producto en todas sus etapas de «vida».

    p.mb-5(data-aos="fade-right") Estos rastreos pueden ser:

    img.mb-5.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-25.svg" data-aos="fade-right" alt="Imagen decorativa")
    img.mb-5.d-none.d-md-flex.d-lg-none(src="@/assets/curso/temas/tema1/img-25-md.svg" data-aos="fade-right" alt="Imagen decorativa")
    img.mb-5.d-flex.d-md-none(src="@/assets/curso/temas/tema1/img-25-xs.svg" data-aos="fade-right" alt="Imagen decorativa")

    .cajon.color-primario.p-4.mb-5(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 El objetivo de un procedimiento de rastreo es identificar y saber el origen, el proceso y la distribución de las mercancías, permitiendo la identificación de posibles errores o fallas que se puedan optimizar, disminuyendo costos y mejorando la calidad en la entrega a los clientes. Es tener la ubicación de un producto en la cadena de suministro en cualquier momento, saber su recorrido de dónde viene y cuál es su destino (figura 2).
    
    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 2.
        span Trazabilidad de un producto
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-26.svg" style="max-width: 820px;" data-aos="fade-left" alt="Imagen que muestra secuencia de la trazabilidad de un producto que se describe debajo de la imagen")
    p(data-aos="fade-right") La trazabilidad de un producto permite conocer todo lo que pasa con la mercancía desde la llegada hasta su despacho; ubicación, destino y características, lo que permite detectar fallas en el proceso.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_8 1.8 TIC aplicadas en la gestión de inventarios
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-27.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") Hoy en día el uso de las Tecnologías de Información y la Comunicación (TIC) son fundamentales en el funcionamiento de las organizaciones, pues son herramientas indispensables y necesarias para la gestión de los inventarios, al tiempo que permiten optimizar y tener mayor exactitud en el control de las existencias, agilizando, flexibilizando y mejorando el intercambio de información.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Las ventajas de aplicar las TIC en la gestión de los inventarios son diferenciales, debido a que permiten automatizar todo tipo de procesos teniendo registros en tiempo real, lo que permite monitorear las tareas y aumentar la productividad del personal, ya que agiliza las actividades operativas, centraliza la información de la cadena de suministros, reduce la probabilidad de errores y se tiene precisión en la información en tiempo real.
    
    p.mb-5(data-aos="fade-right") Las principales TIC aplicadas a la logística interna, son: 

    .d-flex.flex-wrap.mb-5
      .col-xl-4.col-md-6.col-12.pe-md-4
        ul.lista-ul--separador
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") ERP (#[em Enterprise Resource Planning]).
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") WMS (#[em Warehouse Management System]).
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") LMS (#[em Labor Management System]).
      .col-xl-4.col-md-6.col-12.pe-md-4
        ul.lista-ul--separador
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Pick to Light-Voice.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") OMS (#[em Order Management System]).
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") YMS (#[em Yard Management System]).
      .col-xl-4.col-md-6.col-12.pe-md-4
        ul.lista-ul--separador
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Código de barras.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") RFID (#[em Radio Frequency Identification]).
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") SCE (#[em Supply Chain Execution]).

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-24.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4
        p.mb-0(data-aos="fade-left") Estos conceptos y otros tantos están a la orden del día, <b>“al igual que la tecnología aplicada a la vida diaria en la logística se relacionan varios referentes y cada día existirán nuevas herramientas” (Becerra, Pedroza, Pinilla y Vargas, 2017)</b>; es por eso que siempre se recomienda a las empresas validar cuál es la mejor opción según la necesidad requerida. Por tal motivo, el aprendiz debe manejar la mayor cantidad de conceptos posibles, por eso se invita a leer el siguiente documento que explica los conceptos anteriores y lo relaciona con unos novedosos:

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(90deg, rgba(26,15,145,1) 26%, rgba(58,180,177,1) 100%);")
      .row.justify-content-around.align-items-center(data-aos="flip-up")
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/img-29.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 TIC aplicadas a la logística. Módulo 2
              p.text-small Autora: Beatriz Lorena Rodríguez Montenegro. Lo puede leer haciendo clic en el siguiente enlace: 
            .col-sm-auto
              a.boton.color-acento-botones(href="http://virtualnet2.umb.edu.co/virtualnet/archivos/open.php/133/modulo2/pdf/tecinfcom.pdf" target="_blank" style="background-color: #E6B046")
                span Ir a página
                i.fas.fa-link

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_9 1.9 Cadena de suministros e inventarios
    
    p.mb-5(data-aos="fade-right") Como se ha revisado en varios aspectos de la cadena logística, es fundamental hacer uso de una planeación integral y una cadena de suministros, como se ve en el siguiente recurso.

    .slyderB_bg_01.px-2.px-md-5.py-3.mb-5(data-aos="fade-left")
      SlyderA(tipo="b")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-30.svg' alt="Imagen decorativa Cadena de suministro")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="01")
              h4.ps-4.mb-4 Cadena de suministro
              p.ps-4.mb-0 La cadena de suministro abarca áreas, departamentos y unidades que operan secuencialmente para lograr la misión de la organización, desde insumos hasta comercialización. Involucra procesos, tecnología, personas e infraestructura para satisfacer a los clientes.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-31.svg' alt="Imagen decorativa Proceso")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="02")
              h4.ps-4 Proceso
              p.ps-4.mb-0 Una gestión de inventarios adecuada en la cadena de suministros controla y mide los tiempos de entrega entre áreas, asegurando un flujo eficiente de insumos para evitar pérdidas en tiempo, mano de obra, maquinaria y logística en la producción y transformación del producto.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-32.svg' alt="Imagen decorativa Coordinación del proceso")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="03")
              h4.ps-4.mb-4 Coordinación del proceso
              p.ps-4.mb-0 Una gestión efectiva de la cadena de suministros optimiza recursos, facilita la coordinación con proveedores y distribuidores, reduce costos y garantiza la satisfacción del cliente al lograr una fluidez de información y una operación eficiente.

        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-33.svg' alt="Imagen decorativa Planificación perfecta")
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="04")
              h4.ps-4 Planificación perfecta
              p.ps-4.mb-0 Una planificación y administración adecuada de inventarios implica llevar registros precisos y en tiempo real para tomar decisiones importantes en la cadena de suministros. Se requiere acceso a datos de movimiento, existencias, rotación y pérdidas en cualquier momento necesario.
    
    p.mb-5(data-aos="fade-right") En la figura 3 se da un ejemplo de una cadena de suministros donde pueden intervenir varias áreas en el proceso.

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-1.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .mx-auto.col-lg-10.col-xl-8
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 3.
          span Cadena de suministros
        figure
          img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-34.svg" style="max-width: 820px;" data-aos="fade-left" alt="Imagen que muestra cadena de suministros que consta de:<br>-Materias primas<br>-Producción<br>-Transporte y logística<br>-Agencias o sucursales<br>-Almacenamiento<br>-Venta<br>-Facturación<br>-Distribución y entregas")

    .cajon.color-primario.p-4(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 Una correcta articulación de la cadena de suministros permite determinar tiempos de entrega para cumplir y tener clientes satisfechos.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_1_10 1.10 Administración de inventario por proveedores (<em>Vendor Managed Inventory</em> - VMI)
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-35.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") VMI por sus siglas en inglés (<em>Vendor Managed Inventory</em>) es un modelo logístico que tiene por objetivo mejorar el manejo de inventarios, alistamiento y preparativo de pedidos, a través de la administración de la cadena de abastecimiento más eficiente por parte del proveedor, ya que tienen el conocimiento de la rotación de inventarios y el flujo de las ventas o producción de los clientes. 
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Este modelo de negocio se basa en la colaboración entre cliente y proveedor que comparten información decisiva para la administración, manejo y reposición de inventarios. El proveedor es fundamental, debido a que tiene todo el conocimiento y, por ende, tiene la responsabilidad de la planificación y gestión de materias primas o insumos necesarios para mantener las operaciones de sus clientes.
    
    p.mb-5(data-aos="fade-right") Los elementos esenciales para que el modelo VMI tenga el éxito esperado son:

    .row.justify-content-center.mb-4
      .col-xl.col-lg-4.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tjs-6.png" alt="Imagen decorativa Confianza")
          .crd_hover_txt--body(style="background-color: #91B3FAF0")
            h5.mb-3.text-center Confianza
            p.mb-0 Debe existir confianza y acuerdos en la información que se da entre proveedor y cliente.

      .col-xl.col-lg-4.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="flip-right")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tjs-7.png" alt="Imagen decorativa Integración")
          .crd_hover_txt--body(style="background-color: #57DBD8F0")
            h5.mb-3.text-center Integración
            p.mb-0 Se deben contar con las herramientas tecnológicas que permitan integrar y realizar el intercambio de la información, permitiendo un rápido manejo y gestión del inventario por parte del proveedor.

      .col-xl.col-lg-4.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tjs-8.png" alt="Imagen decorativa Información veraz y oportuna")
          .crd_hover_txt--body(style="background-color: #91B3FAF0")
            h5.mb-3.text-center Información veraz y oportuna
            p.mb-0 Para que la ejecución y la planificación del modelo VMI cumpla con su objetivo, la información debe ser oportuna y confiable, es por esto que todas las personas que integran este proceso deben estar capacitadas y coordinadas, dejando registros actualizados y correctos de la información.
      
      .col-xl.col-lg-4.col-md-6.col-11.mb-4
        .crd_hover_txt(data-aos="fade-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema1/tjs-9.png" alt="Imagen decorativa Flexibilidad")
          .crd_hover_txt--body(style="background-color: #57DBD8F0")
            h5.mb-3.text-center Flexibilidad
            p.mb-0 Un modelo VMI debe ser flexible, ya que la demanda puede cambiar en cualquier momento debido a diferentes factores externos que no siempre son controlables ni predecibles; por tanto, el modelo debe contemplar diversas alternativas que brinden una solución oportuna a los cambios inesperados para no afectar los requerimientos de la demanda.
            
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
