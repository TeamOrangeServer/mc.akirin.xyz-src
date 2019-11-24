<template>
  <p>準備中</p>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
    data () {
      return {
      meta: {
        title: 'よくある質問(FAQ)',
        description: 'Orenge Minecraft ServerのFAQ',
        type: 'article',
        url: 'https://mc.akirin.xyz/faq',
        image: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
      },
    }
  },
}
</script>

<style>

</style>