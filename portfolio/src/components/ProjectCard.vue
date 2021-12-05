<template>
  <div
    class="
      grid
      place-items-center
      rounded-xl
      h-56
      w-96
      bg-red-100
      text-3xl
      cursor-pointer
      transform
      hover:scale-105
      transition
      duration-300
      ease-in-out
    "
  >
    {{ title }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ProjectCard",
  props: {
    title: String,
    imagePath: String,
    videoPath: String,
  },
  methods: {
    getImgPath(): string {
      return require("../assets/images/avatar.png");
    },
    scrollToElement(options: Record<string, unknown>, element: string): void {
      const el: HTMLElement = document.getElementById(element) as HTMLElement;
      console.log(el);
      if (el) el.scrollIntoView(options);
    },
  },
};
</script>
