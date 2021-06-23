<template>
  <div class="h-32.25 w-32.25 rounded-2xl bg-synth-blue grid place-items-center cursor-pointer
              transform hover:scale-115 transition duration-700 ease-in-out">
    <img class="h-32 w-32 rounded-2xl" :src="getImgPath()" alt="Avatar" v-on:click="scrollToElement({behavior: 'smooth'})">
  </div>
</template>

<script>
export default {
  name: "AvatarCard",
  methods: {
    getImgPath() {
      return (require("../assets/avatar.png"))
    },
    scrollToElement(options) {
      const el = document.getElementById("about");
      console.log(el);
      if (el) {
        el.scrollIntoView(options);
      }
    }
  },
}
</script>