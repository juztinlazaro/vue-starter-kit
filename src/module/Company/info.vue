tem<template>
  <div>
    <h1> Info </h1>

    <button @click="handleInfo">
      give info
    </button>
  </div>
</template>

<script>
import CompanyDetails from '@/common/mixin/CompanyDetails';

export default {
  props: ['getInfo'],
  data() {
    return {
      info: 'yay',
      show: true,
      something: [
        {
          id: 1,
          name: 'dsadas'
        },
        {
          id: 2,
          name: 'dsadas 2'
        }
      ]
    }
  },
  methods: {
    handleInfo() {
      console.log('handleInfo');
      this.getInfo(this.info, this.show, this.something);
    }
  }
}
</script>
