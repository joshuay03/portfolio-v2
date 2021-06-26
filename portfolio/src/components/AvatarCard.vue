<template>
  <div
    class="
      h-32.25
      w-32.25
      rounded-2xl
      bg-synth-blue
      grid
      place-items-center
      cursor-pointer
      transform
      hover:scale-106.5
      transition
      duration-600
      ease-in-out
    "
  >
    <img
      class="h-32 w-32 rounded-2xl"
      :src="getImgPath()"
      alt="Avatar"
      @click="scrollToElement({ behavior: 'smooth' }, 'about')"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "AvatarCard",
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
