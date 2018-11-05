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
  methods: {
    getInfo(info, show, array) {
      console.log('info***', info, show, array)
    }
  }
}
</script>
