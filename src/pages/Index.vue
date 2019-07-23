<template>
  <Layout>
    <!-- <g-image
      :alt="$page.home.edges[0].node.heroTitle"
      :src="$page.home.edges[0].node.heroImage.url"
      style="width: 100%;"
    /> -->
    <h2>Home:</h2>
    <p>slug: {{ dataHome.slug }}</p>
    <p>title: {{ dataHome.title }}</p>
    <p>heroTitle: {{ dataHome.heroTitle }}</p>
    <p>heroBlurb: {{ dataHome.heroBlurb }}</p>
    <p>heroImage.url {{ dataHome.heroImage.url }}</p>

    <h2>Main Curator:</h2>
    <div v-for="curator in $page.curators.edges" :key="curator.slug">
      <p>slug: {{ curator.node.name }}</p>
    </div>
  </Layout>
</template>

<page-query>
query HomePage {
  home: allDatoCmsHome {
    edges {
      node {
        slug
        title
        heroTitle
        heroBlurb
        heroImage {
          url
        }
      }
    }
  }
  curators: allDatoCmsCurator(filter: { mainCurator: { eq: true } }) {
    edges {
      node {        
        name
        blurb
        image {
          url
        }
        slug
        id
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  computed: {
    dataHome () {
      return this.$page.home.edges[0].node
    },
  }
}
</script>