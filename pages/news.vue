<template>
  <div class="main">
    <div class="btn">
      <v-btn href="https://blog.akirin.xyz">ブログを開く</v-btn>
      <v-btn href="https://akari.fiid.net">Integを開く</v-btn>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
    data () {
      return {
      meta: {
        title: 'ニュース',
        description: 'Orange Minecraft Serverのニュース',
        type: 'article',
        url: 'https://mc.akirin.xyz/news',
        image: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
      },
    }
  },
}
</script>

<style>

</style>