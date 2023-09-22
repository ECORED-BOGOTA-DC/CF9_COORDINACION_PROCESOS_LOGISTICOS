<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 En resumen, <b>el control eficiente de inventarios</b> implica clasificar mercancías, establecer políticas y funciones, mantener ficha técnica, asegurar trazabilidad y utilizar tecnologías de información. El VMI es un modelo en el cual el proveedor monitorea y controla el inventario del cliente. También es crucial considerar costos asociados y utilizar herramientas como el sistema ABC y EOQ para una gestión óptima en la cadena de suministros. A continuación, se presenta un esquema que aborda estos aspectos.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Imagen que muestra la síntesis de control de inventarios donde define los principales conceptos que permiten clasificar mercancías, gestionar políticas de inventarios para garantizar la trazabilidad en la gestión de inventarios.  Permite determinar los costos de los inventarios para determinar los diferentes costos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
