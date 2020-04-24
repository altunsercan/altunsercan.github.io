<template>
    <div class="relative">
        <div class="absolute w-64" style="right:-16rem" >
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  props:{
      imageSrc: { type: [String] }
  }
}
</script>
d