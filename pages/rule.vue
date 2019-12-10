<template>
  <div>
    <p>準備中</p>
    <h1>こちらはMinecraftのゲーム内のルールです。利用規約も合わせてお読みください。</h1>
    <v-btn to="/tos">利用規約</v-btn>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
    data () {
      return {
      meta: {
        title: 'ゲーム内のルール',
        description: 'Orange Minecraft Serverのルール',
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
