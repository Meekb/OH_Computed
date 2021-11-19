<template>
  <div class="app-container">
  <header class="login-header">
    <h1 class="logo">Overlook Hotel</h1>
    <h2 class="logo">Exclusive. Luxurious. Life-changing....</h2>
  </header>
  <main class="login-container">
    <img class="login-image" src="../static/OverlookHallway.png" width="300px"/>
    <div class="login-input-container">
      <user-login />
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
  background-color: #4d041dd1;
  color: ivory;
}
.app-container {
  display: flex;
  flex-direction: column;
  background-color:#b87746;
  height: 100vh;
}
.login-container {
  display: flex;
  margin-top: 25px;
}
.login-image {
  margin-left: 8%;
  border-radius: 1.5rem;
}
.logo {
  text-align: center;
}
</style>
