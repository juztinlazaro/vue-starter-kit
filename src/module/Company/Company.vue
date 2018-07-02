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
  </div>
</template>

<script>
import CompanyDetails from '@/common/mixin/CompanyDetails';

export default {
  mixins: [CompanyDetails],
}
</script>
