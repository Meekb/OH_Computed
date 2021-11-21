<template>
  <div class="app-container">
  <header class="login-header">
    <h1 class="logo">The Overlook Hotel</h1>
    <h2 class="logo">Exclusive. Luxurious. Life-changing. . .</h2>
  </header>
  <main class="login-container">
    <div class="img-and-input">
      <div class="login-image-container">
      </div>
      <div class="login-input-container">
        <UserLogin @error="throwLoginError" />
      </div>
    </div>
    <div class="login-error-message">
      <LoginError v-if="this.error"/>
    </div>
  </main>
  </div>
</template>

<script>
export default {
    head () {
    return {
      title: 'The Overlook Hotel',
      meta: [
        {name: 'overlook:homepage'}
      ],
      link: [
        {        
          rel: 'canonical',
          href: this.$route.path
        }
      ],
    }
  },
  data() {
    return {
      error: false,
    }
  },
  methods: {
    clearErrorMsg() {
      this.error = false
    },
    throwLoginError() {
      this.error = true
      setTimeout(this.clearErrorMsg, 3000)
    }
  }
}
</script>

<style>
* {
  /* border: 2px solid green; */
  box-sizing: border-box;
}
html, 
body {
  margin: 0;
  padding: 0;
}
body {
  height: 100%;
  width: 100%;
}
.login-header {
  background-color: #660000;
  color: #FFFACD;
}
.app-container {
  display: flex;
  flex-direction: column;
  background-color:#a76d40;
  height: 100vh;
}
.img-and-input {
  display: flex;
  margin-top: 34px;
}
.login-image-container {
  width: 35vw;
  height: 58vh;
  margin-left: 65px;
  border-radius: 1rem;
  content: url("../static/red_hallway.jpeg");
}
.logo {
  text-align: center;
}
</style>
