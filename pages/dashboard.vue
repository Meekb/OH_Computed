<template>
  <main>
    <h2>User's Dashboard</h2>
    <nuxt-link to="/">
      <button @click="logOutUser">
        Sign Out
      </button>
    </nuxt-link>
  </main>
</template>

<script>
export default {
  methods: {
    logOutUser() {
      this.$store.commit('invalidateUser')
    }
  }
}
</script>