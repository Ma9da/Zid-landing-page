<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8 my-5">
        <div class="card border-0 my-5 position-relative">
          <div class="card-body">
            <img
              class="w-100 d-block"
              src="../assets/img/products(1).png"
              alt=""
            />
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
  props: {
    msg: String,
  },
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
</style>
