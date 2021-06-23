<template>
  <div class="bg-synth-purple-light h-full w-full">
    <div class="grid place-items-center h-screen w-full">
      <div class="flex md:flex-wrap px-16">
        <AvatarCard />
        <div class="w-4" />
        <div>
          <span class="text-6.5xl text-synth-grey">Hi, I'm </span>
          <span class="text-6.5xl text-synth-gold">Joshua Young</span>
          <span class="text-6.5xl text-synth-grey">.</span>
          <br>
          <span id="ima" class="relative transition-all duration-600 ease-in-out text-6.5xl text-synth-grey">I'm a </span>
          <button class="text-6.5xl text-synth-pink focus:outline-none cursor-pointer transform hover:scale-106.5 transition duration-600 ease-in-out"
                  @click="scrollToElement({behavior: 'smooth'})" @mouseover="moveNeighbours()" @mouseleave="returnNeighbours()">
            Full Stack Software Engineer
          </button>
          <span id="period" class="relative transition-all duration-600 ease-in-out text-6.5xl text-synth-grey">.</span>
        </div>
      </div>
    </div>
    <div id="projects" class="grid place-items-center h-screen w-full">test2</div>
    <div id="about" class="grid place-items-center h-screen w-full">test3</div>
  </div>
</template>

<script>
import AvatarCard from "./components/AvatarCard.vue";
export default {
  components: {
    AvatarCard
  },
  methods : {
    scrollToElement(options) {
      const el = document.getElementById("projects");

      if (el) {
        el.scrollIntoView(options);
      }
    },
    moveNeighbours() {
      const ima = document.getElementById("ima");
      const period = document.getElementById("period");
      ima.style.right = "0.6rem";
      period.style.left = "1rem";
    },
    returnNeighbours() {
      const ima = document.getElementById("ima");
      const period = document.getElementById("period");
      ima.style.right = "0rem";
      period.style.left = "0rem";
    },
  },
}
</script>
