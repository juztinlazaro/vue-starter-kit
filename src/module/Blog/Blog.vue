<template>
  <div>
    <div v-if="loading">
      <h1>loading...</h1>
    </div>

    <div v-else>
      <h1>
        Title:  {{blog.title}}
      </h1>

      <h1>
        name:  {{name}}
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log('store', this.$store);
    this.$store.dispatch('blog/getBlogRequest');
  },
  computed: {
    blog() {
      return this.$store.state.blog.blogs;
    },
    loading() {
      return this.$store.state.blog.loading;
    },
    name() {
      return this.$store.getters['blog/blogModifyTitle'];
    },
  },
};
</script>
