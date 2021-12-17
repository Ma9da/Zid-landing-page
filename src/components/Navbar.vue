<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-9">
        <nav class="navbar navbar-expand-lg navbar-light">
          <div class="container-fluid">
            <img class="navbar-brand" src="../assets/img/zid-logo.png" />
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item mx-5">
                  <a class="nav-link text-dark" aria-current="page" href="#"
                    >الرئيسية</a
                  >
                </li>
                <li class="nav-item mx-5">
                  <a class="nav-link text-dark" href="#">التصنيفات</a>
                </li>
                <li class="nav-item mx-5">
                  <a class="nav-link text-dark" href="#">التطبيقات</a>
                </li>
                <li class="nav-item mx-5">
                  <a class="nav-link text-dark" href="#">طور التطبيق</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  font-size: 16px !important;
}
</style>
