---
title: Vue Components in Markdown  
excerpt: An example markdown page demonstrating component usage in Astro!
---

Below is a Counter Component that uses Vue for interactivity:

*Note: Components are now managed through Astro's component system with Vue islands for interactivity.*

The CounterComponent and TransitionComponent are available as Vue islands that hydrate on the client side.

<hr>

In Astro, Vue components are used as islands for interactive functionality, while static components are converted to native Astro format for better performance.

```js
<template>
  <Layout>
    <div class="container-inner mx-auto my-16">
      <h1 class="text-4xl font-bold leading-tight">{{ $page.post.title }}</h1>
      <div class="text-xl text-gray-600 mb-8">{{ $page.post.date }}</div>
      <div class="markdown-body" v-html="$page.post.content" />
    </div>
  </Layout>
</template>
```

```css
.test {
  background: white;
  color: red;
}
```