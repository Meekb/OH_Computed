<template>
  <header>
    <h1>
      Hello {{ name }}!
    </h1>
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

  },
}
</script>