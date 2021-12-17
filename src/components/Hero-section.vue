<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-lg-8 col-md-12 text-center">
        <h1>طور متجرك ووسع آفاق تجارتك مع سوق تطبيقات زد</h1>
      </div>
      <div class="col-lg-5 col-md-12 text-center">
        <p class="py-4">
          طو رمنتجاتك من خلال تطبيقات وحلول سوق تطبيقات زد التي تساعدك في نمو
          ارباحك عبر إدارة عمليات متجرك بشكل فعال واحترافي
        </p>
        <button class="btn action-btn ">
          تصفح التطبيقات
          <img src="../assets/icons/DownArrow 3.svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero-section",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 36px;
  font-weight: 700;
  color: var(--primary);
}
p {
  font-size: 18px;
}
.action-btn {
    height: 60px;
    width: 295px;
  background: var(--primary);
  color: var(--secondary);
  border-radius: 10px;
  font-size: 18px;
}
</style>
