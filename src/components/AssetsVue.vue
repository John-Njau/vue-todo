<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <img src="../assets/images/bg-desktop-dark.jpg" /> <br />
  <img src="../assets/images/bg-desktop-light.jpg" /> <br />
  <img src="../assets/images/BG-MOBILE-DARK.jpg" /> <br />
  <img src="../assets/images/BG-MOBILE-LIGHT.jpg" /> <br />
  <div class="check">
    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
      <path
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  </div>
  <div class="cross">
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
      <path
        fill="#494C6B"
        fill-rule="evenodd"
        d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
      />
    </svg>
  </div>
  <div class="check">
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
      />
    </svg>
    <br />
    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
      <path
        fill="#FFF"
        fill-rule="evenodd"
        d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
      />
    </svg>
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <!-- A link around a shape -->
      <a href="/docs/Web/SVG/Element/circle">
        <circle cx="50" cy="40" r="35" />
      </a>

      <!-- A link around a text -->
      <a href="/docs/Web/SVG/Element/text">
        <text x="50" y="90" text-anchor="middle">&lt;circle&gt;</text>
      </a>
    </svg>
  </div>
</template>
  
  <script>
import HelloWorld from "../components/TodoComp.vue";
// import IconCheck from './assets/images/ICON-CHECK.svg'

export default {
  name: "App",
  components: {
    HelloWorld,
    // IconCheck
  },
};
</script>
  
  <style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.check {
  background-color: #2c3e50;
}

</style>
  