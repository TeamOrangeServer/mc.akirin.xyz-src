<template>
  <v-app>
    <v-carousel
      cycle
      hide-delimiters
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
      >
        <v-sheet
          :color="item.col"
          height="100%"
          tile
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <span>
              <div class="display-3 font-weight-medium">{{ item.msg }}</div>
            </span>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
    <br />
    <div class="text-center" id="top">
      <h1 class="font-weight-regular">Orenge Serverにようこそ</h1>
      <v-lazy>
        <p>Team Orangeが提供するMinecraftサーバー</p>
      </v-lazy>
      <v-container fluid>
        <v-row dense>
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card
              class="mx-auto"
              max-width="334"
              raised
            >
              <br />
              <div class="text-center"><v-icon x-large v-text="card.icon"></v-icon></div>
              <v-card-title v-text="card.title"></v-card-title>
              <v-card-text v-text="card.text"></v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-responsive
        height="200vh"
        class="text-center pa-2"
      >
      <v-lazy>
        <p>準備中</p>
      </v-lazy>
    </v-responsive>
  </v-app>
</template>

<script>
  import Meta from '~/assets/mixins/meta'
  export default {
    mixins: [Meta],
    data () {
      return {
        items: [
          {
            src: '',
            msg: 'モバイル未対応',
            col: 'orange',
          },
          {
            src: '',
            msg: '対応予定あり',
            col: 'orange',
          },
          {
            src: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
            msg: 'Welcome to Orenge Server',
            col: '#0000',
          },
          {
            src: 'https://akari.fiid.net/images-new/lobby.webp',
            msg: 'Integration Lobby Server',
            col: '#0000',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            msg: '3',
            col: '#0000',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            msg: '4',
            col: '#0000',
          },
          {
            src: '',
            msg: 'このサイトは準備中です。',
            col: 'orange',
          },
        ],
        cards: [
          { icon: 'mdi-lock-open-outline', title: '縛られない', text: '他人に迷惑をかけない、サーバーに無意味に不可をかけない、サービス妨害をしないの3つの単純なルールのみ', flex: '4' },
          { icon: 'mdi-refresh',title: 'プラグインのリビルド', text: '当サーバー用にいくつかのオープンソースなプラグインは調整した上でビルドされなおされています。(表面上は変わりません。)', flex: '4' },
          { icon: 'mdi-tab',title: '独自ランチャーで簡単に(予定)', text: 'OrangeLauncherという当サーバーおよび、系列サーバー用に開発されたランチャーで簡単にログインできます。(現在制作中)', flex: '4' },
        ],
        meta: {
          title: 'ホーム',
          description: 'Orenge Minecraft Server Webのホーム',
          type: 'article',
          url: 'https://mc.akirin.xyz/',
          image: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
        },
      }
    },
  }
</script>

<style>

</style>