<template>
  <header class="user-header">
    <button class="logout-btn" @click="logout">
      Sign Out
    </button>
    <h1 class="user-greeting">
      Come play with us {{ firstName }}. . .
    </h1>
  </header>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: '',
    },
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
  background-color: #660000;
  color: #FFFACD;
  border-bottom:1px solid #FFFACD;
}
.logout-btn {
  background-color: #FFFACD;
  border-color: #660000;
  border-radius: 1rem;
  font-size: 18px;
  font-weight: bold;
  margin-top: 12px;
  margin-left: 10px;
}
.user-greeting {
  margin-top: 25px;
  margin-bottom: 41px;
  padding-top: 0px;
  text-align: center;
}
</style>