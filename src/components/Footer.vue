<template>
  <footer
    class="
      d-flex
      justify-content-center
      align-items-center
      flex-column
      position-relative
    "
  >
    <figure>
      <img src="../assets/img/footer-logo.png" class="w-100 d-block" alt="" />
    </figure>
    <ul class="d-flex list-unstyled">
      <li>
        <a href="#" class="text-white fs-5 text-decoration-none mx-4">
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </a>
      </li>
      <li>
        <a href="#" class="text-white fs-5 text-decoration-none mx-4">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
      </li>
      <li>
        <a href="#" class="text-white fs-5 text-decoration-none mx-4">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
      </li>
      <li>
        <a href="#" class="text-white fs-5 text-decoration-none mx-4">
          <font-awesome-icon :icon="['fab', 'youtube']" />
        </a>
      </li>
    </ul>
    <button
      type="button"
      class="btn floating-btns-arrow position-absolute rounded-circle"
    >
      <font-awesome-icon :icon="['fa', 'arrow-up']" />
    </button>
    <button
      type="button"
      class="btn floating-btns-chat position-absolute text-dark rounded-circle"
    >
      <font-awesome-icon :icon="['fa', 'comments']" />
    </button>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  height: 233px;
  background-color: var(--primary);
}
.floating-btns {
  color: var(--primary);
  background: var(--secondary);
}
.floating-btns-arrow {
  bottom: 46px;
  left: 138px;
  color: var(--primary);
  background: var(--secondary);
}
.floating-btns-chat{
   bottom: 46px;
  right: 138px;
  color: var(--primary);
  background: var(--secondary);
}
</style>
