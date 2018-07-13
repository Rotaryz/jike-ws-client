<template>
  <div class="poster">
    poster
    <toast ref="toast"></toast>
  </div>
</template>

<script type="text/ecmascript-6">
  import handle from 'common/js/webim_handler'
  import * as util from 'common/js/util'
  import Toast from 'components/toast/toast'

  console.log(util)

  export default {
    name: 'Poster',
    created () {
      // Example.test()
      // console.log(this, getApp())
      console.log(handle)
      setTimeout(() => {
        this.$refs.toast.show('99o')
      }, 1000)
    },
    components: {
      Toast
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .poster
    min-height: 100vh
</style>
