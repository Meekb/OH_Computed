<template>
  <header class="user-header">
    <h1 class="user-greeting">
      Hello {{ name }}!
    </h1>
    <button class="logout-btn" @click="logout">
        Sign Out
    </button>
  </header>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: '',
    }
  },
  methods: {
    logout() {
      this.$store.commit('logoutUser')
      this.$router.push({ path:"/" })
    },
  }
}
</script>

<style>
.user-header {
  background-color: #4d041dd1;
  color: ivory;
  /* border: 2px solid tomato; */
}
.logout-btn {
  background-color: ivory;
  border-color: ivory;
  border-radius: 1rem;
  font-size: 18px;
  margin-bottom: 25px;
  margin-left: 10px;
}
.user-greeting {
  margin-top: 0px;
  padding-top: 25px;
  text-align: center;
}
</style>