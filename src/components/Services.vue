<template>
  <div class="service py-5">
    <div class="container">
      <div class="row justify-content-center align-items-center ">
        <div class="col-lg-5 col-md-6">
          <h2>كل ما تحتاجه لنمو متجرك في مكان واحد</h2>
          <p class="py-3">
            مميزات سوق تطبيقات زد تساعدك في سهولة وسرعة الاستفادة من خدمة وحلول
            سوق التطبيقات لنمو متجرك ومضاعة أرباحك
          </p>
          <div class="d-flex align-items-center">
            <img src="../assets/icons/Group 27.svg" alt="" />
            <div class="listed-item">
              سهولة ادارة وتفعيل تطبيقات من نفس لوحة تحكم متجرك
            </div>
          </div>
          <div class="d-flex align-items-center">
            <img src="../assets/icons/Group 28.svg" alt="" />
            <div class="listed-item">
              دعم فني وتقني متكامل متوفر على مدار الساعة
            </div>
          </div>
          <div class="d-flex align-items-center">
            <img src="../assets/icons/Group 29.svg" alt="" />
            <div class="listed-item">
              أسعار تنافسية مع تجربة مجانية وباقات اشتراك متنوعة
            </div>
          </div>
          <div class="alert d-flex align-items-center">
            <div class="listed-item">
              <button class="btn action-btn">
                تصفح التطبيقات
                <img src="../assets/icons/DownArrow 3.svg" class="animation-arrow" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card border-0 position-relative">
            <div class="card-body">
              <img
                src="https://app-market.s3.eu-west-1.amazonaws.com/zidapp_1-min.gif"
                class="w-100 d-block img-ridus"
                alt=""
              />
              <img
                src="../assets/img/Dot Pattern 3.png"
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
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
h2 {
  font-size: 24px;
  color: var(--primary);
  font-weight: 700;
}
p {
  font-size: 16px;
}
.listed-item {
  font-size: 14px;
}
.service,
.card {
  background-color: var(--bg-light);
}
.pattern {
  position: absolute;
  top: -15px;
  left: -25px;
  z-index: -1;
}
.circle-shape {
  position: absolute;
  top: 73px;
  right: -34px;
  z-index: -1;
  width: 367.32px;
  height: 367.32px;
}
.img-ridus{
  border-radius: 10px;
}
</style>
