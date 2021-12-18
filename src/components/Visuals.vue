<template>
  <div class="container py-5 my-5">
    <div class="row justify-content-center">
      <div class="col-lg-8 col-md-12">
        <div class="card border-0  position-relative">
          <div class="card-body">
            <div class="img-sizing ">
              <img
              class="w-100 d-block img-ridus"
                src="https://s3-alpha-sig.figma.com/img/7fd9/1c66/9d22e51e16561f96575713284c465150?Expires=1640563200&Signature=Y~mvHCV3wwvjdnTdmDRvn8cY1wE-SWIZbs4JfgVr6l4aaX3J97ZlwKnnf~QVPCqqXBj9f3OYkkcFfITqPpouqOyUZ6za-e3VtkQFXpBZp-QJf~OxWiSN2uLjpud-3F1rogQUzkdpzcZGuDfn4yclghJ3onlbshq9a~FtoBUltEMbvCsDzsUedUytIE2FEeA14g5ccWkqjL-qtQjkFZTTpv12OGsfvlYnlUf1XP8XWnT4wXI3mMQll9zuUAwyGwSOmqCgiWQ17mgHm~-ITVmx2-QjuF97yeWw377RtLEG7xsDIBe1GDIBjHjEaKBzHhl3vxIc54Z0jIyv-1p1AHHpVQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                alt=""
              />
            </div>
          </div>
          <img
            src="../assets/img/Dot Pattern 2.png"
            class="d-none d-lg-block d-xl-block pattern"
            alt=""
          />
          <img
            src="../assets/img/Ellipse 250.png"
            class="d-none d-lg-block d-xl-block circle-shape"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Visuals",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card-body {
  z-index: 7;
}
.pattern {
  width: 176px;
  height: 191px;
  position: absolute;
  top: -25px;
  left: -58px;
}
.circle-shape {
  position: absolute;
  height: 367.3203125px;
  width: 367.3203125px;
  right: -67px;
  top: 275px;
}
.img-sizing {
  width: auto;
  height: 549.29px;
  border-radius: 40px;
  overflow:hidden;
}
@media (max-width: 767.98px) { 
  .img-sizing{
    height:auto;
  }
 }
.img-ridus{
  border-radius:40px;
}
</style>
