<template>
  <div>
    <v-btn disabled>MCBans</v-btn>
    <v-btn disabled>Blog(banタグ)</v-btn>
    <v-btn disabled>異議申し立て(準備中)</v-btn>
    <v-responsive height="15px"></v-responsive>
    <p>更新は手動です。</p>
    <v-data-table
        :headers="headers"
        :items="desserts"
        :sort-by="['name', 'date']"
        :sort-desc="[false, true]"
        multi-sort
        class="elevation-1"
    ></v-data-table>
  </div>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
    data () {
      return {
      headers: [
          {
            text: '名前(mcid)',
            align: 'left',
            sortable: true,
            value: 'name',
          },
          { text: '時間', value: 'date' },
          { text: '理由', value: 'reason' },
        ],
        desserts: [
          {
            name: 'そもそも居ないよ',
            date: 'null',
            reason: 'なし',
          }
        ],
      meta: {
        title: 'BANリスト',
        description: 'Orenge Minecraft ServerのBANリスト',
        type: 'article',
        url: 'https://mc.akirin.xyz/banq',
        image: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
      },
    }
  },
}
</script>

<style>

</style>
