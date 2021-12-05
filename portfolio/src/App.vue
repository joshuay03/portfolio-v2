<template>
  <div class="h-full w-full">
    <div id="main" class="grid grid-rows-5 place-items-center h-screen w-full">
      <div class="row-span-1 xl:row-span-2 2xl:row-span-2"></div>
      <div
        class="
          row-span-2
          flex-wrap
          px-16
          xl:flex
          2xl:flex
          xl:row-span-1
          2xl:row-span-1
        "
      >
        <AvatarCard class="sm:mb-4 md:mb-4 lg:mb-4" />
        <div class="w-4" />
        <div>
          <span
            id="hiim"
            class="
              text-6.5xl text-synth-grey
              relative
              transition-all
              duration-600
              ease-in-out
            "
            >Hi, I'm
          </span>
          <button
            id="jy"
            class="
              text-6.5xl text-synth-gold
              underline
              cursor-pointer
              focus:outline-none
              transform
              hover:scale-111.5
              transition
              duration-600
              ease-in-out
            "
            @click="scrollToElement({ behavior: 'smooth' }, 'about')"
            @mouseover="
              moveNeighbours('jy', 'hiim', 'period1', '0.6rem', '1.25rem')
            "
            @mouseleave="returnNeighbours('jy', 'hiim', 'period1')"
          >
            Joshua Young
          </button>
          <span
            id="period1"
            class="
              text-6.5xl text-synth-grey
              relative
              transition-all
              duration-600
              ease-in-out
            "
            >.</span
          >
          <br />
          <span
            id="ima"
            class="
              relative
              transition-all
              duration-600
              ease-in-out
              text-6.5xl text-synth-grey
            "
            >I'm a
          </span>
          <button
            id="fsse"
            class="
              text-6.5xl text-synth-pink
              underline
              cursor-pointer
              focus:outline-none
              transform
              hover:scale-106.5
              transition
              duration-600
              ease-in-out
            "
            @click="scrollToElement({ behavior: 'smooth' }, 'projects')"
            @mouseover="
              moveNeighbours('fsse', 'ima', 'period2', '0.6rem', '0.95rem')
            "
            @mouseleave="returnNeighbours('fsse', 'ima', 'period2')"
          >
            Full Stack Software Engineer
          </button>
          <span
            id="period2"
            class="
              text-6.5xl text-synth-grey
              relative
              transition-all
              duration-600
              ease-in-out
            "
            >.</span
          >
        </div>
      </div>
      <div class="row-span-2 w-full grid place-items-center">
        <img
          class="w-32 xl:invisible 2xl:invisible"
          src="./assets/images/scroll_arrows.png"
          alt="Scroll Arrows"
          @click="scrollToElement({ behavior: 'smooth' }, 'projects')"
        />
      </div>
    </div>
    <div id="about" class="grid place-items-center h-screen w-full">about</div>
    <Projects />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AvatarCard from "./components/AvatarCard.vue";
import Projects from "./components/Projects.vue";

export default defineComponent({
  components: {
    AvatarCard,
    Projects,
  },
  setup() {
    const scrollToElement = (
      options: Record<string, unknown>,
      element: string
    ): void => {
      const el: HTMLElement = document.getElementById(element) as HTMLElement;
      if (el) el.scrollIntoView(options);
    };

    const moveNeighbours = (
      id: string,
      neighbourLeft: string,
      neighboutRight: string,
      distanceLeft: string,
      distanceRight: string
    ): void => {
      const elThis: HTMLElement = document.getElementById(id) as HTMLElement;
      elThis.style.textDecoration = "none";
      const elLeft: HTMLElement = document.getElementById(
        neighbourLeft
      ) as HTMLElement;
      const elRight: HTMLElement = document.getElementById(
        neighboutRight
      ) as HTMLElement;
      elLeft.style.right = distanceLeft;
      elRight.style.left = distanceRight;
    };

    const returnNeighbours = (
      id: string,
      neighbourLeft: string,
      neighboutRight: string
    ): void => {
      const elLeft: HTMLElement = document.getElementById(
        neighbourLeft
      ) as HTMLElement;
      const elRight: HTMLElement = document.getElementById(
        neighboutRight
      ) as HTMLElement;
      elLeft.style.right = "0rem";
      elRight.style.left = "0rem";
      const elThis: HTMLElement = document.getElementById(id) as HTMLElement;
      setTimeout(() => (elThis.style.textDecoration = "underline"), 400);
    };

    return {
      scrollToElement,
      moveNeighbours,
      returnNeighbours,
    };
  },
});
</script>
