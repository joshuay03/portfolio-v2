<template>
  <div id="projects" class="flex h-screen w-full">
    <div
      class="
        w-28
        grid
        row-span-3
        place-items-center
        focus:outline-none
        cursor-pointer
        transform
        hover:bg-opacity-50 hover:scale-115 hover:bg-synth-grey
        transition
        duration-300
        ease-in-out
      "
      @click="slideLeft()"
    >
      <img
        class="w-full"
        src="../assets/images/left_arrow.png"
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
        px-2
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
        w-28
        grid
        place-items-center
        focus:outline-none
        cursor-pointer
        transform
        hover:bg-opacity-50 hover:scale-115 hover:bg-synth-grey
        transition
        duration-300
        ease-in-out
      "
      @click="slideRight()"
    >
      <img
        class="w-full"
        src="../assets/images/right_arrow.png"
        alt="Right Arrow"
      />
    </div>
  </div>
</template>

<script lang="ts">
import ProjectCard from "./ProjectCard.vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  components: { ProjectCard },
  setup() {
    const limit = 9;
    let start = ref(0);
    let end = ref(9);

    const projects = [
      {
        title: "World Happiness",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Blinky Billboard",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Switch Piano",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Image Processor",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "QUT Menubar",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Laragram",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Tool Library",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Exercise Tracker",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Open Pit Mining",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Process Overseer",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Letters and Numbers",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "JS Clock",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "JS Calc",
        imagePath: "",
        videoPath: "",
      },
      {
        title: "Picture Puzzle Blocks",
        imagePath: "",
        videoPath: "",
      },
    ];

    const slideRight = (): void => {
      if (end.value === projects.length) {
        start.value = 0;
        end.value = limit;
      } else {
        start.value = end.value;
        if (start.value + limit > projects.length) {
          end.value = projects.length;
        } else {
          end.value = start.value + limit;
        }
      }
    };

    const slideLeft = (): void => {
      if (start.value === 0) {
        start.value = Math.floor(projects.length / limit) * limit;
        end.value = start.value + (projects.length % limit);
      } else {
        end.value = start.value;
        start.value -= limit;
      }
    };

    return {
      start,
      end,
      projects,
      slideLeft,
      slideRight,
    };
  },
});
</script>
