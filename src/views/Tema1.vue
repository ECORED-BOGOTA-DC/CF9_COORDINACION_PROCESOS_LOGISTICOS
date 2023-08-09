<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Costos en la gestión logística
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 En los inventarios se tienen muchos términos y conceptos relevantes para varias empresas, pero en el mundo empresarial se requiere de un marco general que se trabajará a continuación. Hay que aclarar que cada empresa en detalle puede trabajar más conceptos, así se tiene que: 
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.1 Clasificación de las mercancías
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-2.svg" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p La palabra mercancía proviene, según Riquelme (2017), de “mercante” que significa “comerciante”, lo cual quiere decir que es todo aquello que se puede comprar o vender para satisfacer la demanda. En la Antigüedad la mercancía se empezó a intercambiar con elementos mediante el trueque y luego con dinero que era más útil para las personas.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 La mercancía es producto de un proceso de fabricación o producción que lleva inherente un coste por su elaboración como mano de obra, materia prima, maquinaria, almacenamiento, distribución, etc. y por esto las empresas buscan comercializar sus mercancías para obtener ganancias.
        p.mb-0 De acuerdo con lo anterior y al uso o naturaleza, las mercancías se pueden clasificar en:

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
                  img(src="@/assets/curso/temas/tema1/tjs-1.png")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía perecedera
                p.mb-0 Es aquella cuya vida útil es de 1 a 7 días; como los alimentos: verduras, lácteos y frutas.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-2.png")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h5.mb-3.text-center Mercancía no perecedera
                p.mb-0 Mercancía con una vida útil mayor, pueden ser alimentos empacados al vacío o enlatados. 

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-3.png")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía frágil
                p.mb-0 Productos que pueden sufrir daños y que requieren una manipulación especial en su transporte. 
          
          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-4.png")
              .crd_hover_txt--body(style="background-color: #57DBD8F0")
                h5.mb-3.text-center Mercancía peligrosa
                p.mb-0 Son productos químicos, inflamables, derivados de petróleo o gas que, por sus componentes, tienen algún tipo de peligro y tienen que ser manejados con medidas de seguridad específicas.

          .col-xl-4.col-lg-4.col-md-6.col-11.mb-4
            .crd_hover_txt(data-aos="flip-left")
              .crd_hover_txt--img
                figure
                  img(src="@/assets/curso/temas/tema1/tjs-5.png")
              .crd_hover_txt--body(style="background-color: #91B3FAF0")
                h5.mb-3.text-center Mercancía sobredimensionada
                p.mb-0 Son los productos de gran tamaño y que requieren un método de transporte especial y documentación específica.
    
    p.mb-5 Por su parte, la Organización Mundial de Aduanas las organizó por medio del SA (Sistema Armonizado) de Designación y Codificación de Mercancía así: 

    h4 SA (Sistema Armonizado)

    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema1/img-3.png" style="max-width: 506px")
      .col-12.col-lg-7.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-right")
          div(numero="1" titulo="Materias primas")
            p.mb-0 Material base para la elaboración de otros elementos, por lo general se trata de materiales de la naturaleza, por ejemplo, la madera.
          div(numero="2" titulo="Semiproductos")
            p.mb-0 Productos que se elaboran a partir de las materias primas y sirven como base para otros productos, por ejemplo, la madera procesada en listones.
          div(numero="3" titulo="Productos elaborados")
            p.mb-0 Cada objeto elaborado por las empresas que suplen las necesidades de las personas, por ejemplo, una escoba.
          div(numero="4" titulo="Productos brutos")
            p.mb-0 Productos que son prefabricados para la entrega, pero los acabados los hace una empresa diferente a la empresa matriz, por ejemplo, las cerámicas para pintar las que se conocen como “bizcocho” en algunas regiones de Colombia.
    
    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 136px;" data-aos="fade-right")
      .col-md.ps-md-4
        p.fw-bold.mb-0 El objetivo de esta clasificación es facilitar las operaciones de importación y exportación, este criterio es utilizado para determinar los aranceles en aduana, ya que la mayoría de la mercancía del comercio internacional está clasificada bajo el SA (Sistema Armonizado) y los códigos están organizados en una estructura legal basada en reglas definidas. Este es un sistema completo que tiene la funcionalidad de clasificar los productos de todo el mundo, tal como lo dice Procolombia (2017):

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-5.svg" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p El sistema armonizado de designación y codificación de mercancías es una nomenclatura internacional de productos multipropósito desarrollado por la Organización Mundial de Aduanas (OMA).
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Contiene alrededor de 5.000 grupos de productos; cada uno identificado por un código de seis dígitos, dispuestos en una estructura legal y lógica, y es apoyado por reglas bien definidas para lograr una clasificación uniforme.
    
    p.mb-5 Es utilizado por más de 200 países y economías como base de sus aranceles de aduanas y para la recopilación de estadísticas del comercio internacional. Más del 98% de la mercancía en el comercio internacional se clasifica en términos del SA. Contribuye a la armonización de los procedimientos aduaneros y comerciales y el intercambio de datos comerciales no documentados en relación con tales procedimientos, reduciendo así los costos relacionados con el comercio internacional.

    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema1/img-6.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Como es un sistema tan grande se le invita a que, como aprendiz, profundice en la necesidad según el tipo de industria para la cual esté trabajando en el presente o en el futuro. Tenga en cuenta que en este componente formativo se trabaja la generalidad del sistema y sus clasificaciones a grandes rasgos.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-7.svg" style="max-width: 135px;" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Clasificación de inventarios
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema1/img-8.png" data-aos="fade-right")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 De acuerdo con el tipo de mercancías y necesidades de la organización, se pueden clasificar los inventarios, esto permitirá a la alta dirección planificar y controlar de forma eficiente los materiales y productos que se emplean en la operación, obteniendo un correcto funcionamiento entre la oferta y la demanda generando utilidades y productividad para la organización. Se deben tener en cuenta los siguientes grupos:

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-9.svg')
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="01")
              h4.ps-4.mb-4 Inventarios según el momento
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario inicial:</b> se realiza al inicio de las operaciones.
              p.ps-4 <b style="color: #1A0F91">Inventario final:</b> se efectúa al término de un periodo contable; una vez realizado el control de entradas y salidas de existencias, este valor es incluido en el balance general de la organización por lo que aporta información para determinar una nueva situación patrimonial.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-10.svg')
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="02")
              h4.ps-4 Inventarios según la logística
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario de anticipación o previsión:</b> se tienen con anticipación cuando se conoce o se planean épocas de mayor demanda para cubrir una necesidad futura definida, como temporadas o promociones comerciales.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios de lote o de tamaño de lote:</b> estos se piden en tamaño de lote, ya que es más económico hacerlo así que pedirlo en menores cantidades o cuando sea necesario satisfacer la demanda.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios en consignación:</b> son aquellos bienes que un consignador entrega para ser vendidos a otra empresa, pero el título de propiedad lo conserva el consignador.
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-11.svg')
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="03")
              h4.ps-4.mb-4 Inventario según la periodicidad 
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario perpetuo:</b> este tipo de inventario permite mayor control, ya que mantiene un registro permanente de todos los movimientos de los bienes permitiendo localizarlos en cualquier momento.
              p.ps-4.mb-4 <b style="color: #1A0F91">Inventario periódico:</b> es el conteo físico de mercancías en un periodo contable determinado dónde se analizan las entradas y salidas.

        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-12.svg')
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="05")
              h4.ps-4 Inventarios según la logística
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario de materia prima:</b> mide el stock de existencias de los insumos o materias primas que requiere la organización en su operación.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios en procesos:</b> son activos que se encuentran en el proceso de fabricación o transformación.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventarios de productos terminados:</b> este inventario se realiza a los productos o mercancías fabricados que están listos para la comercialización. 
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario en tránsito:</b> se denomina inventario en tránsito cuando la mercancía o productos están en camino de un lugar a otro, por ejemplo, sale de la bodega del producto terminado para el sitio de comercialización, en ese momento el inventario está en movimiento. 
        
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-13.svg')
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.ps-lg-4
            .number(data-number="04")
              h4.ps-4  Otros tipos de inventarios 
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario físico:</b> es un conteo físico que se realiza para corroborar las existencias reales con los registros del inventario. Es importante contar con una herramienta que permita tener un correcto control de todos los movimientos, entradas y salidas de las existencias.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario máximo:</b> es el inventario máximo de mercancía que una organización puede mantener, para evitar el incremento en los costos de manejo y almacenamiento.
              p.ps-4.mb-4 <b style="color: #35ACA9">Inventario mínimo:</b> es la cantidad mínima del inventario a ser mantenida en el almacén y que no afecte por escasez la producción o ventas.

    .cajon.color-primario.p-4(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 De acuerdo con el tipo de mercancía que se maneje, las organizaciones deben contar con la infraestructura, maquinaria y equipos adecuados que garanticen su calidad, almacenamiento y manejo, además, el personal capacitado para su manipulación.
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_3 1.3 Políticas de Inventarios

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema1/img-14.png" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p El inventario es el activo más importante que tiene una organización, es por esto que en ellos se centran decisiones importantes que debe tomar la alta dirección, ya que del buen manejo y control que se tenga de las existencias depende en gran medida la productividad y buenos resultados financieros, por tanto, las empresas deben diseñar políticas que se adapten a sus necesidades para lograr el correcto funcionamiento de los inventarios minimizando costos de mantenimiento y garantizando la disponibilidad de las mercancías para satisfacer las necesidades de los clientes.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Para diseñar las políticas de los inventarios, la alta dirección debe conocer muy bien el funcionamiento de la organización y tener en cuenta factores como capacidad de almacenamiento, tiempo de reabastecimiento, compromisos con clientes, naturaleza de la mercancía y restricciones del proveedor:

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
