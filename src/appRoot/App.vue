<template>
  <div class="container">
      <Header></Header>
      <div class="row">
        <div class="col-lg-12">
          <transition name="slide" mode="out-in">
            <router-view></router-view>
          </transition>
        </div>
      </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
}
</script>


