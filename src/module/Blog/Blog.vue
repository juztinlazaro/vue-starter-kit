<template>
  <div>
    <h1>
      Blog
    </h1>
  </div>
</template>

<script>

export default {
  created() {
    console.log('store', this.$store);
    this.$store.dispatch('blog/getBlogRequest')
  }
}
</script>
