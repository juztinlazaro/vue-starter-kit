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

      <b-row>
        <b-col
          cols="12"
          :offset-md="sequenceByTree(index) || index === 0 ? 1 : 0"
          :md="isOdd(index) ? 3 : 4"
          v-for="(i, index) in sample" :key="i.name">
          <span> {{i.name}} </span>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>

export default {
  created() {
    console.log('store', this.$store);
    this.$store.dispatch('blog/getBlogRequest')
  },
  data () {
    return {
      sample: [
        {
          name: 'justin'
        },
        {
          name: 'yahoo'
        },
        {
          name: 'rowy'
        },
        {
          name: 'ronziel'
        },
        {
          name: 'yahoo1'
        },
        {
          name: 'rowy2'
        },
        {
          name: 'ronziel3'
        },
        {
          name: 'ronziel33'
        },
        {
          name: 'yahoo14'
        },
        {
          name: 'rowy25'
        },
        {
          name: 'ronziel36'
        },
      ]
    }
  },
  computed: {
    blog() {
      console.log('blogss', this.$store.state.blog.blogs)
      return this.$store.state.blog.blogs;
    },  
    loading() {
      return this.$store.state.blog.loading
    },
    name() {
      return 'justin' + this.blog.title
    }
  },
  methods: {
    sequenceByTree (x) {
      const initial = x
      const d = initial % 3;
      if (d == 0 && x !== 1) {
        return true
      }

      return false
    },
    isOdd (n) {
      const initial = n
      const c = (initial + 1) % 3;
      if (c !== 2 && n !== 1) {
        return true
      }

      return false
    },
  }
}
</script>
