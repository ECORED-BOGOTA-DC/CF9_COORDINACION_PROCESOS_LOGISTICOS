<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/img-1.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5(data-aos="fade-right")
      p.mb-0 La importancia de los inventarios es alta y este es el trabajo que se realizará en el presente componente formativo, como se puede observar en el siguiente video:
    
    .container-100.py-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      figure.col-xl-10.mx-auto(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/hfABGiHdsPw?si=em8s2Y_fsdmIX8cU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
