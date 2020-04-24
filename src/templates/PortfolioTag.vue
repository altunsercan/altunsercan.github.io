<template>
  <Layout>
    <div class="mx-64">
      <h1 class="text-6xl font-bold">Portfolio</h1>
    </div>
    <div class="mx-64 py-4">
      <div class="flex mb-8 text-sm">
        <g-link
                :to="tag.node.path"
                v-for="tag in $page.portfolioTags.edges"
                :key="tag.node.id"
                class="bg-gray-300 rounded-full px-4 py-2 mr-4 hover:bg-green-300">
          {{ tag.node.title }}
        </g-link>
      </div>
    </div>

    <div class="mx-64 py-4">
      <div class="flex flex-wrap -mx-4">
        <div v-for="portfolio in $page.currentTag.portfolioItems.edges" :key="portfolio.id" class="relative post flex-none border-gray-400 border-none px-4 w-1/4 mb-4">
          <div class="absolute invisible hover:visible">
            <h2 class="text-3xl font-bold"><g-link :to="portfolio.node.path" class="text-copy-primary">{{ portfolio.node.title }}</g-link></h2>
          </div>
          <g-link :to="portfolio.node.path" class="font-bold uppercase">
            <g-image :src="portfolio.node.thumbnailImage"></g-image>
          </g-link>
          <!--
          <div class="text-lg mb-4">
            {{ portfolio.node.summary }}
          </div>
          -->
        </div> <!-- end post -->
      </div>
      <pagination-posts
        v-if="$page.currentTag.portfolioItems.pageInfo.totalPages > 1"
        :base="'/portfolio/tag/'+$page.currentTag.title"
        :totalPages="$page.currentTag.portfolioItems.pageInfo.totalPages"
        :currentPage="$page.currentTag.portfolioItems.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query Portfolio ($path: String!, $page: Int) {
  currentTag: portfolioTag(path: $path)
  {
    id
    title
    portfolioItems: belongsTo(sortBy: "date", order: DESC, perPage: 8, page: $page) @paginate
    {
      totalCount
      pageInfo {
        totalPages
        currentPage
      }
      edges {
         node {
          id
          ... on PortfolioItem {
            title
            date (format: "MMMM D, Y")
            summary
            path
            thumbnailImage
          }
         }
      }
    }
  }
  portfolioTags: allPortfolioTag{
    edges{
      node{
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import PaginationPosts from '../components/PaginationPosts'

export default {
  metaInfo: {
    title: 'Portfolio'
  },
  components: {
    PaginationPosts
  }
}
</script>

