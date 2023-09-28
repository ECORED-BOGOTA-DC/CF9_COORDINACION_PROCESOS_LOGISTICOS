<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Costos de inventarios

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los costos de inventario son aquellos que están relacionados con el aprovisionamiento, almacenamiento y mantenimiento de las mercancías en un determinado periodo de tiempo; además, hay que tener en cuenta los costos que se agregan como seguros, pólizas, intereses, etc. 
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_1 2.1 Clases de costos
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") El inventario es el mayor activo que tiene una organización, por esta razón se debe tener todo lo necesario para garantizar su calidad, vida útil, composición, etc., contando con herramientas, mano de obra y otras especificaciones para mantenerlo en óptimas condiciones, lo cual genera costos relacionados con el almacenamiento, aprovisionamiento y mantenimiento de las existencias en determinado período de tiempo. 
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Estos costos tienen gran influencia en las finanzas de una empresa, por ello, es fundamental diseñar políticas que se ajusten a los requerimientos de la operación y que busquen optimizar los recursos, disminuyendo dichos costos, pero sin afectar la capacidad de cumplimiento a los clientes.
        p.mb-0(data-aos="fade-left") Los costos de los inventarios se dan en: 
    
    .tarjeta--container.row
      .col-md.tarjeta.color-primario.p-5(style="background-color: #C4F2F1")
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-3.svg' alt="Imagen decorativa Costos por manejo del inventario")
          
        h4(data-aos="fade-left") Costos por manejo del inventario
        p(data-aos="fade-left") Es decir, la maquinaria o equipos empleados en la manipulación de las existencias y del costo de la mano de obra que se requiere para el cuidado de los inventarios.

      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #D8E4FD")
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-4.svg' alt="Imagen decorativa Costos por mantener los inventarios")
          
        h4(data-aos="fade-left") Costos por mantener los inventarios
        p(data-aos="fade-left") Costos que se generan por mantener los inventarios, zonas usadas para el almacenamiento, las especificaciones que deben tener estas zonas como bodegas de frío, estanterías, iluminación, etc.

      .col-md.tarjeta.color-acento-contenido.p-5(style="background-color: #C4F2F1")
        .row.justify-content-center.mb-4(data-aos="fade-right")
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-5.svg' alt="Imagen decorativa Costos en las pólizas ")
          
        h4(data-aos="fade-left") Costos en las pólizas 
        p(data-aos="fade-left") Costos en las pólizas de seguro para cubrir cualquier eventualidad que se pueda presentar como hurtos y accidentes. 

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_2 2.2 Costos de pedidos
    
    p.mb-5(data-aos="fade-right") La necesidad de reabastecimiento surge por la inexistencia de un producto que requiere la organización para su operación y cumplir con los requerimientos de los clientes, la cual implica una serie de actividades y de interacción interna entre áreas, compras, logística, almacenamiento y producción; así como una interacción externa con proveedores para llevar a cabo la ejecución de un pedido, además, se requiere contar con personal capacitado que tenga la facultad de tomar decisiones en cuanto a los niveles óptimos de <i>stock</i> y establecer los puntos de pedidos que permita una optimización de los gastos.

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-6.png" style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
      .col-12.col-lg-8.ps-lg-4
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Los costos de pedido son aquellos relacionados con la gestión de la solicitud de reabastecimiento de existencias que se requieren para la operación o producción de la organización, e incluyen los gastos por procesamiento y ejecución de las órdenes de compras, es decir, costos administrativos (comunicación, contabilidad, papeleo, facturación, etc.) y costos de logística. Las etapas de un pedido se describen a continuación (figura 4).

    .mx-auto.col-lg-10.col-xl-8
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 4.
        span Etapas de un pedido
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-7.svg" style="max-width: 820px;" data-aos="fade-left" alt="Imagen que muestra diagrama de etapas de pedido, las cuales son:<br>Detección de reabastecimiento.<br>Elaboración de solicitud de compra.<br>Recepción solicitud de compra. <br>Elaboración orden de compra. <br>Solicitud de cotizaciones. <br>Negociación con proveedores. <br>Despacho de la mercancía. <br>Transporte de la mercancía.<br>Recepción de la mercancía.")

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_3 2.3 Costos de mantenimiento de inventarios
    
    p.mb-5(data-aos="fade-right") El costo por mantenimiento de inventarios se da en las diferentes etapas del proceso, a saber:

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-8.svg" style="max-width: 366px" data-aos="fade-right" alt="Imagen decorativa")
      .col-12.col-lg-8.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-left")
          div(numero="1" titulo="Costo de mantenimiento de inventarios de materias primas")
            p.mb-0 Las materias primas son los materiales o insumos que ingresan a un proceso productivo para su transformación, y que serán convertidos en un producto terminado. De acuerdo con la planificación de la producción, se deben contar con los insumos correctos para que la producción no tenga paradas por escasez de material. 
          div(numero="2" titulo="Costos de mantenimiento de productos en proceso")
            p.mb-0 Son los bienes que están en la línea de producción en un proceso de transformación.
          div(numero="3" titulo="Costo de mantenimiento del producto terminado")
            p.mb-0 Son las existencias que están listas para ser distribuidas a sus clientes.
    
    .cajon.color-acento-contenido.p-4.mb-3(data-aos="fade-right" style="background-color: #DDF8F7")
      p.mb-0 En cada una de las etapas del proceso, o cualquiera que sea la naturaleza de las existencias, se generan costos por movilización del inventario, ya sea manual o con maquinaria: horas, hombre que se requieren para el manejo, así como la verificación y control de los bienes, las zonas de almacenamiento y cómo deben estar acondicionadas para mantener estos inventarios, si deben contar con especificaciones de temperatura, iluminación y estantería para su organización. 

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_4 2.4 Costos de falta de existencias
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-9.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 Los costos de falta de existencias son aquellos que se dan cuando se recibe un requerimiento por parte de los clientes y no se tienen las existencias del producto en bodega para cumplir con la demanda; esto recibe el nombre de rotura de <i>stock</i>. La falta de existencias también se puede dar en los insumos o materias primas, que al no tenerlas se genera un retraso en los procesos productivos de la organización.
    
    p.mb-5.text-center Existen dos clases de costos de rotura de <i>stock</i>: 

    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #91B3FA")
          img(src="@/assets/curso/temas/tema2/img-10.jpg")
          img.img-decorativa(src="@/assets/curso/temas/tema2/decorador-1.svg" data-aos="zoom-in" alt="Imagen decorativa El costo por pérdida de ventas")
          .container-data
            h5 El costo por pérdida de ventas
            p.mb-0 Son los clientes o negocios perdidos por la falta de existencias en el producto requerido. Esta situación impacta de forma negativa la organización porque, además de dejar clientes insatisfechos, perjudica la imagen de la empresa. Cuando no se cumple con la demanda de un cliente se le denomina un <em>stockout</em>.
            
      .col-lg-6.ps-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #57DBD8")
          img(src="@/assets/curso/temas/tema2/img-11.jpg")
          img.img-decorativa(src="@/assets/curso/temas/tema2/decorador-1.svg" data-aos="zoom-in" alt="Imagen decorativa El costo por retardo")
          .container-data
            h5 El costo por retardo
            p-mb-0 Se genera cuando el cliente acepta esperar por su pedido, allí se generan unas órdenes pendientes, las cuales implican unos gastos adicionales de transporte, manejo, ventas, mano de obra, etc.

    p.mb-5(data-aos="fade-right") Estas fallas por falta de existencias se pueden dar por reprogramación en la producción, retrasos en la gestión de compras de las mercancías, sustitución de materiales o tiempos de paradas en las líneas de producción.

    .d-flex.flex-wrap.align-items-center.p-3(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-12.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4
        p.fw-bold.mb-0(data-aos="fade-left") Cuando una situación de estas se presenta, es necesario analizar y detectar los errores que se pueden presentar en la cadena de suministros para diseñar o reorganizar las políticas de inventarios que se están manejando y mejorar la planificación de los inventarios.

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_5 2.5 Sistema ABC de inventarios
    
    p.mb-5(data-aos="fade-right") En la gestión de inventarios, un método que ayuda a controlar las existencias es la distribución de acuerdo con la importancia, donde los productos se clasifican en categorías A, B y C dependiendo de la relevancia que tengan en los criterios previamente definidos por la organización y que pueden ser rotación, precios, ventas, tiempo de producción, vida útil, etc.

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-13.svg" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p(data-aos="fade-left") Para establecer los parámetros de segmentación de los productos se requiere un análisis preciso en los datos o estadísticas que tiene la organización, para que sean determinados de acuerdo con las necesidades y forma de operación de la empresa, permitiendo así optimizar los recursos, las funciones administrativas y operativas, ya que se prioriza la atención en lo que es más importante para la empresa.
        .cajon.color-primario.p-4(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 El método ABC se basa en el principio de Pareto o regla del 80/20, en el que el 20 % del total de los productos son los que contribuye al 80 % de la consecución de los resultados; para esto se dividen las mercancías en 3 categorías A, B y C, donde el grupo A son las mercancías con mayor relevancia, en el grupo B las de importancia moderada y el grupo C serán las más numerosas pero, las que menos aportan a la empresa. A continuación, una explicación al respecto:
    
    .d-flex.flex-wrap.justify-content-center.mb-5.container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/bg-2.png')})`}"
      style="background-size: contain; background-repeat: no-repeat; background-position: center"
    )
      .col-xl-7.mx-auto(data-aos="fade-left")
        ImagenInfografica.color-secundario
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema2/img-14.png' alt="Imagen decorativa")

          .tarjeta.tarjeta-edit-t2( x="25%" y="80%" numero="+")
            h3(style="color: #35ACA9") Categoría A
            p Se encuentran los bienes o productos con mayor importancia para la empresa, los que tienen una mayor rotación, son el 20 % del total de la cantidad de inventarios, pero que generan el 80 % de las utilidades de la organización, estos requieren controles estrictos y datos precisos.
            .cajon.color-acento-contenido.p-4(style="background-color: #DDF8F7")
              p.mb-0 A esta categoría, por ser la más importante debe tener una especial atención, mayor inversión en recursos para ejercer controles de inventarios periódicos de forma frecuente, ya que si se presenta una escasez de estos productos traerán grandes pérdidas para la empresa.
          .tarjeta.tarjeta-edit-t2( x="50.5%" y="80%" numero="+")
            h3(style="color: #1A0F91") Categoría B
            p.mb-0 Son los que tienen importancia moderada, suponen un 30 % del total de los productos que no suelen generar más del 20 % de las ganancias, también deben hacerse controles de inventario, pero en menor frecuencia que los de la categoría A. Estos productos pueden llegar a ser productos de la categoría A o C.
          .tarjeta.tarjeta-edit-t2( x="76%" y="80%" numero="+")
            h3(style="color: #D09B34") Categoría C
            p.mb-0 Son los productos de menor importancia para la empresa, representan la mayor cantidad, pero son las que tienen menores ingresos, son más del 50 % de referencias, pero generan solo el 5 % de ganancias. El control de inventario puede ser esporádico evitando la escasez en estos productos, por lo que se debe hacer un análisis de estos productos para saber qué recursos se deben invertir y si son o no necesarios.

    p.mb-5(data-aos="fade-right") Del 100 % de los productos del inventario, se puede decir que la clasificación queda de la siguiente manera.

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 5.
        span Productos en el inventario
      figure
        img.mx-auto.mb-4.d-none.d-lg-flex(src="@/assets/curso/temas/tema2/img-15.svg" style="max-width: 820px;" data-aos="fade-left" alt="Imagen que muestra un gráfico del pastel de productos en inventarios divididos en 3 categorías A, B y C : <br>A. Es la cantidad mas pequeña del inventario y de mayor importancia<br>B. Es la media del inventario, con una importancia moderada<br>C. Es la cantidad mas grande de inventario, con una importancia baja.")
        img.mx-auto.mb-4.d-flex.d-lg-none(src="@/assets/curso/temas/tema2/img-15-md.svg" style="max-width: 430px;" data-aos="fade-left" alt="Imagen que muestra un gráfico del pastel de productos en inventarios divididos en 3 categorías A, B y C : <br>A. Es la cantidad mas pequeña del inventario y de mayor importancia<br>B. Es la media del inventario, con una importancia moderada<br>C. Es la cantidad mas grande de inventario, con una importancia baja.")

    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") La clasificación ABC se hace de acuerdo con las necesidades de la empresa y al tipo de productos que se ofrecen; es por esto que no hay una clasificación definida, así que cada organización analiza y adopta la priorización que más dé resultados según sus requerimientos.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema2/img-16.svg" style="max-width: 135px;" data-aos="fade-left" alt="Imagen decorativa")

    .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 Las clasificaciones que se pueden determinar se pueden dar por la rotación de los productos, por costos unitarios, por utilización o valor.
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_2_6 2.6 Cantidad económica de pedido (EOQ)
    
    .bloque-texto-g.bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-17.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La cantidad económica de pedido (conocida en inglés como <em>Economic Order Quantity</em> o por la sigla EOQ); según Salazar (2019), <b>“es el modelo fundamental para el control de inventarios, ya que permite minimizar costos por mantenimiento del producto”</b>. Para aplicar este método es necesario conocer la demanda del producto, la cual debe ser constante y se basa en determinar el momento exacto en el que el inventario llegue a un nivel específico en el cual se debe reabastecer.

    p.mb-5(data-aos="fade-right") El modelo EOQ se basa en los siguientes aspectos:

    .d-flex.flex-wrap.mb-5
      .col-12.col-lg-8.pe-lg-4.order-2.order-lg-1
        ul.lista-ul--separador
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Se conoce la demanda, ya que es constante y se calcula con unidades anuales.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Los tiempos que maneja el proveedor son iguales y constantes (alistamiento, transporte, carga).
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Con la llegada del pedido el inventario se reabastece de inmediato cuando las existencias llegan a cero.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Los descuentos por pedidos en volumen no existen.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0(data-aos="fade-left") Los costos totales son la suma de ordenar o alistar más los costos de mantener el pedido.
      img.col-lg-4.mb-4.mb-lg-auto.order-1.order-lg-2.mx-auto(src="@/assets/curso/temas/tema2/img-18.svg" style="max-width: 320px" data-aos="fade-left" alt="Imagen decorativa")

    p(data-aos="fade-right") Las variables que considera el modelo EOQ son:

    .mb-5.p-4(style="background-color: #F2F6FE")
      .d-flex.flex-wrap.col-xl-10.mx-auto
        img.col-lg-5.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-19.svg" style="max-width: 400px" data-aos="fade-right" alt="Imagen decorativa")
        .col-12.col-lg-7.ps-lg-4
          ul.lista-ul--separador
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>D</b> = Demanda anual, dada en unidades por año.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>S</b> = Costo de ordenar o alistar, dado en unidades monetarias por unidad.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>C</b> = Costo del ítem, dado en unidades monetarias por unidad.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>i</b> = Tasa anual de mantenimiento, dada en unidades porcentuales.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>H</b> = Costo anual de mantenimiento, dado en unidades monetarias por año.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>Q</b> = Tamaño del lote, en unidades.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>R</b> = Punto de nueva orden o corrida, dada en unidades.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>N</b> = Número de órdenes o corridas al año.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>T</b> = Tiempo entre cada orden.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0(data-aos="fade-left") <b>TRC</b> = Costo total anual o costo total relevante.
    
    .d-flex.flex-wrap.mx-auto.mb-5
      img.col-lg-5.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-20.svg" style="max-width: 505px" data-aos="fade-right" alt="Imagen que muestra ecuaciones que maneja el EOQ donde despeja <br>H=i*C <br>Costo anual de pedir o alistar D/Q*S<br>Costo anual de mantenimiento = Q/2 * H<br>TRC= (D/Q*S) + (Q/2*H)")
      .col-12.col-lg-7.ps-lg-4
        p(data-aos="fade-left") En cuanto a la cantidad óptima, lo importante es descubrir el significado de su ecuación, para lo cual se explicará su origen a través de la siguiente figura.
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 6.
          span Ecuación cantidad óptima
        figure
          img.mx-auto(src="@/assets/curso/temas/tema2/img-21.svg" style="max-width: 690px;" data-aos="fade-left" alt="Imagen con un plano cartesiano eje X Q y eje Y Costos. Muestra la ecuación de cantidad óptima, se relaciona en curso costo de ordenar, costa de inventario, costo total.")

    .cajon.color-primario.p-4.mb-5(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 Gráficamente, se puede mostrar el principio EOQ, donde el punto de pedido, es el punto en el cual los costos de pedir y los costos por mantener se encuentran, por tanto, son iguales, se despeja la fórmula del EOQ.
    
    .d-flex.flex-wrap.mx-auto
      img.col-lg-6.mb-4.mb-lg-auto.mx-auto(src="@/assets/curso/temas/tema2/img-22.svg" style="max-width: 608px" data-aos="fade-right" alt="Muestra ecuaciones de texto  para la formula de EOQ (D/Q*S) = (Q/2*H) Quedando EOQ= Raiz cuadrada de 2*D*S/H")
      .col-12.col-lg-6.ps-lg-4
        p(data-aos="fade-left") En la figura 7 se puede apreciar el comportamiento de la demanda en función del tiempo y el efecto generado por el modelo EOQ.
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 7.
          span Comportamiento demanda
        figure
          img.mx-auto(src="@/assets/curso/temas/tema2/img-23.svg" style="max-width: 557px;" data-aos="fade-left" alt="Imagen con una grafica en un plano cartesiano eje X y eje Y representando el Tiempo contra Unidades.  Esta gráfica muestra cómo varía la demanda de un producto a lo largo del tiempo. <br>Unidades<br>Punto de reorden<br>Lead time")

</template>

<script>
export default {
  name: 'Tema2',
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
