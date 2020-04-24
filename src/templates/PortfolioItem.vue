<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.portfolio.title }}</h1>
      <div class="text-xl text-gray-600 mb-4">{{ $page.portfolio.date }}</div>
      <div class="flex mb-8 text-sm">
        <g-link
          :to="tag.path"
          v-for="tag in $page.portfolio.tags"
          :key="tag.id"
          class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.title }}
        </g-link>
      </div>
      <div class="markdown-body mb-8 " v-html="$page.portfolio.content">
      </div>
      <div class="mb-8">
        <g-link to="/blog" class="font-bold uppercase">Back to Blog</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Portfolio($path: String!) {
  portfolio: portfolioItem(path: $path) {
    title
    date(format: "MMMM D, Y")
    content
    tags {
      title
    }
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.portfolio.title
    }
  },
  components: {
    SideBar: () => import("../components/SideBar.vue")
  }
}
</script>

<style src="../css/github-markdown.css" />