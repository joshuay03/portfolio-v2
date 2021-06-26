<template>
  <div class="bg-synth-purple-light h-full w-full">
    <div class="grid grid-rows-5 place-items-center h-screen w-full">
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
          <span class="text-6.5xl text-synth-grey">Hi, I'm </span>
          <span class="text-6.5xl text-synth-gold">Joshua Young</span>
          <span class="text-6.5xl text-synth-grey">.</span>
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
            class="
              text-6.5xl text-synth-pink
              focus:outline-none
              cursor-pointer
              transform
              hover:scale-106.5
              transition
              duration-600
              ease-in-out
            "
            @click="scrollToElement({ behavior: 'smooth' }, 'projects')"
            @mouseover="moveNeighbours()"
            @mouseleave="returnNeighbours()"
          >
            Full Stack Software Engineer
          </button>
          <span
            id="period"
            class="
              relative
              transition-all
              duration-600
              ease-in-out
              text-6.5xl text-synth-grey
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
    <div id="projects" class="flex h-screen w-full">
      <div
        class="
          grid
          place-items-center
          h-full
          w-36
          focus:outline-none
          cursor-pointer
          transform
          hover:scale-125
          transition
          duration-300
          ease-in-out
        "
        @click="slideLeft()"
      >
        <img
          class="w-28"
          src="./assets/images/left_arrow.png"
          alt="Left Arrow"
        />
      </div>
      <div
        class="
          grid grid-rows-3 grid-cols-3
          place-items-center
          h-full
          w-full
          py-4
        "
      >
        <ProjectCard
          v-for="project in projects.slice(start, end)"
          :key="project.name"
          v-bind="project"
        />
      </div>
      <div
        class="
          grid
          place-items-center
          h-full
          w-36
          focus:outline-none
          cursor-pointer
          transform
          hover:scale-125
          transition
          duration-300
          ease-in-out
        "
      >
        <img
          class="w-28"
          src="./assets/images/right_arrow.png"
          alt="Right Arrow"
          @click="slideRight()"
        />
      </div>
    </div>
    <div id="about" class="grid place-items-center h-screen w-full">test3</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AvatarCard from "./components/AvatarCard.vue";
import ProjectCard from "./components/ProjectCard.vue";

export default defineComponent({
  components: {
    AvatarCard,
    ProjectCard,
  },
  data() {
    return {
      projects: [
        {
          title: "World Happiness1",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness2",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness3",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness4",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness5",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness6",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness7",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness8",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness9",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness10",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness11",
          imagePath: "",
          videoPath: "",
        },
        {
          title: "World Happiness12",
          imagePath: "",
          videoPath: "",
        },
      ],
      start: 0,
      end: 9,
      limit: 9,
    };
  },
  methods: {
    scrollToElement(options: Record<string, unknown>, element: string): void {
      const el: HTMLElement = document.getElementById(element) as HTMLElement;
      if (el) el.scrollIntoView(options);
    },
    moveNeighbours(): void {
      const ima: HTMLElement = document.getElementById("ima") as HTMLElement;
      const period: HTMLElement = document.getElementById(
        "period"
      ) as HTMLElement;
      ima.style.right = "0.65rem";
      period.style.left = "1rem";
    },
    returnNeighbours(): void {
      const ima: HTMLElement = document.getElementById("ima") as HTMLElement;
      const period: HTMLElement = document.getElementById(
        "period"
      ) as HTMLElement;
      ima.style.right = "0rem";
      period.style.left = "0rem";
    },
    slideRight(): void {
      if (this.end === this.projects.length) {
        this.start = 0;
        this.end = this.limit;
      } else {
        this.start = this.end;
        if (this.start + this.limit > this.projects.length) {
          this.end = this.projects.length;
        } else {
          this.end = this.start + this.limit;
        }
      }
      console.log(this.start);
    },
    slideLeft(): void {
      if (this.start === 0) {
        this.start = Math.floor(this.projects.length / this.limit) * this.limit;
        this.end = this.start + (this.projects.length % this.limit);
      } else {
        this.end = this.start;
        this.start -= this.limit;
      }
      console.log(this.start);
    },
  },
});
</script>
