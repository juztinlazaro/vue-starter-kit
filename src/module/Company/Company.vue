<template>
  <div>
    <h1>
      Company
    </h1>

    <p>
      Contact: {{ companyContact }}
    </p>

    <p>
      Address: {{ companyAddress }}
    </p>

    <Info :getInfo="getInfo" />

    <ul id="example-1">
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
      </li>
    </ul>
  </div>
</template>

<script>
import CompanyDetails from '@/common/mixin/CompanyDetails';
import Info from './info.vue';

export default {
  mixins: [CompanyDetails],
  components: {
    Info,
  },
  data() {
     return {
       items: [
          { message: 'Foo' },
          { message: 'Bar' }
        ]
     }
  },
  methods: {
    getInfo(info, show, array) {
      console.log('info***', info, show, array)
    }
  }
}
</script>
