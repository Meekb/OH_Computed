<template>
  <header class="user-header">
    <button class="logout-btn" @click="logout">
      Sign Out
    </button>
    <h1 class="user-greeting">
      Hello {{ firstName }}
    </h1>
    <p class="last-stay">
      Your last stay was on {{ showLastStay }}
    </p> 
  </header>
</template>

<script>
export default {
  props: {
    firstName: {
      type: String,
      default: '',
    },
    history: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    showLastStay() {
      return this.history['0'].date
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
  border:1px solid #660000;
  /* border: 2px solid tomato; */
}
.last-stay {
  font-size: 22px;
  text-align: center;
}
.logout-btn {
  background-color: #FFFACD;
  border-color: #660000;
  border-radius: 1rem;
  font-size: 18px;
  font-weight: bold;
  margin-top: 25px;
  margin-left: 10px;
}
.user-greeting {
  margin-top: 0px;
  padding-top: 25px;
  text-align: center;
}
</style>