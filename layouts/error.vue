<template>
  <v-app dark>
    <div class="bgi">
      <h1 class="font-weight-regular" v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 class="font-weight-regular" v-else>
        {{ otherError }}
      </h1>
      <br />
      <v-btn outlined to="/"> 
        トップに戻る
      </v-btn>
      <v-responsive height="15px"></v-responsive>
      <hr />
      <v-responsive height="15px"></v-responsive>
      <p>GitHubで<a href="https://github.com/TeamOrangeServer/mc.akirin.xyz/issues" target="__blank">issue</a>を立てることもできます。</p>
    </div>
  </v-app>
</template>

<script>
import Meta from '~/assets/mixins/meta'
export default {
  mixins: [Meta],
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      meta: {
        title: '404 Not Found',
        description: 'ページが見つかりません。削除または、移動された可能性があります。',
        type: 'article',
        url: 'https://mc.akirin.xyz/404',
        image: 'https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png',
      },
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}
.bgi {
  text-align: center;
  padding: 300px; 
  background-image: url(https://i.gyazo.com/1de1fb0a182d4dc785fb6fbad6e1ccb6.png);
  background-size: cover
}
</style>
