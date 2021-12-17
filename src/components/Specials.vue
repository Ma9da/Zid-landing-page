<template>
  <div class="container">
    <div class="row justify-content-center py-5">
      <div class="col-12 text-center py-5">
        <h2>التطبيقات المميزة</h2>
        <p class="py-2">تطبيقات لتقديم حلول وخدمات مميزة نوصي بتجربتها</p>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="app-card mb-3 py-2 px-2 d-flex justify-content-evenly">
          <img
            src="../assets/img/Qumra-thumbnail.png"
            class="d-block app-logo"
            alt=""
          />
          <div class="ps-3">
            <h5>
              قمرة
              <img src="../assets/icons/rating.svg" alt="" />
            </h5>
            <p class="writer">
              تطوير: <span class="text-secondary">عمر برهوم</span>
            </p>
            <div class="card-text">
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="app-card mb-3 py-2 px-2 d-flex justify-content-evenly">
          <img
            src="../assets/img/Qumra-thumbnail.png"
            class="d-block app-logo"
            alt=""
          />
          <div class="ps-3">
            <h5>
              قمرة
              <img src="../assets/icons/rating.svg" alt="" />
            </h5>
            <p class="writer">
              تطوير: <span class="text-secondary">عمر برهوم</span>
            </p>
            <div class="card-text">
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="app-card mb-3 py-2 px-2 d-flex justify-content-evenly">
          <img
            src="../assets/img/Qumra-thumbnail.png"
            class="d-block app-logo"
            alt=""
          />
          <div class="ps-3">
            <h5>
              قمرة
              <img src="../assets/icons/rating.svg" alt="" />
            </h5>
            <p class="writer">
              تطوير: <span class="text-secondary">عمر برهوم</span>
            </p>
            <div class="card-text">
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6">
        <div class="app-card py-2 mb-3 px-2 d-flex justify-content-evenly">
          <img
            src="../assets/img/Qumra-thumbnail.png"
            class="d-block app-logo"
            alt=""
          />
          <div class="ps-3">
            <h5>
              قمرة
              <img src="../assets/icons/rating.svg" alt="" />
            </h5>
            <p class="writer">
              تطوير: <span class="text-secondary">عمر برهوم</span>
            </p>
            <div class="card-text">
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
              <p>نظام الولاء الأمثل الذي يمكنك من رفع مبيعاتك</p>
            </div>
          </div>
        </div>
      </div>
    <div class="col-12 py-3 text-center">
      <button class="btn action-btn">
        تصفح التطبيقات
        <img src="../assets/icons/DownArrow 3.svg" alt="" />
      </button>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Specials",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-size: 25px;
  font-weight: 600;
}
p {
  font-size: 14px;
}
h5 {
  font-size: 16px;
  font-weight: 600;
  color: var(--primary);
}
.writer {
  font-size: 10px;
}
.app-card {
  border-radius: 10px;
  background: var(--bg-light-gray);
}
.card-header {
  background: var(--bg-light-gray) !important;
}
.card-text p {
  font-size: 10px;
}
.app-logo {
  height: max-content;
}
.action-btn{
  color: var(--secondary);
}
</style>
