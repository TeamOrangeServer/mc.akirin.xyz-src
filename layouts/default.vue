<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'ホーム',
          to: '/'
        },
        {
          icon: 'mdi-post-outline',
          title: 'News',
          to: '/news'
        },/*
        {
          icon: 'mdi-discord',
          title: 'Discord',
          to: '/discord'
        },
        {
          icon: 'mdi-settings',
          title: '設定',
          to: '/settings'
        },*/
        {
          icon: 'mdi-post-outline',
          title: 'よくある質問(FAQ)',
          to: '/faq'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Orange Server Minecraft'
    }
  }
}
</script>

<style>
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

/*スクロールバーのレール*/
::-webkit-scrollbar-track {
  border-radius: 0px;
  background: #616161;
}

/*スクロールバーのつまみ*/
::-webkit-scrollbar-thumb {
  border-radius: 150px;
  background: #ffd180;
}
</style>
