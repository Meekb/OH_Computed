<template>
  <div class="app-container">
  <header>
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
}
.app-container {
  display: flex;
  flex-direction: column;
}
.login-container {
  display: flex;
}
.login-image {
  margin-left: 8%;
  border-radius: 1.5rem;
}
.logo {
  text-align: center;
}
</style>
