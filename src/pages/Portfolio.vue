<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      <div v-for="portfolio in $page.portfolios.edges" :key="portfolio.id" class="post border-gray-400 border-b mb-12">
        <h2 class="text-3xl font-bold"><g-link :to="portfolio.node.path" class="text-copy-primary">{{ portfolio.node.title }}</g-link></h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ portfolio.node.date }}</span>
          <span> &middot; </span>
          <span>{{ portfolio.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">
          {{ portfolio.node.summary }}
        </div>

        <div class="mb-8">
          <g-link :to="portfolio.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div> <!-- end post -->

      <pagination-posts
        v-if="$page.portfolios.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.portfolios.pageInfo.totalPages"
        :currentPage="$page.portfolios.pageInfo.currentPage"
      />
    </div>
  </Layout>
</template>

<page-query>
query PortfolioItems ($page: Int) {
  portfolios: allPortfolio (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
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

