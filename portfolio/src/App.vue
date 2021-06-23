<template>
  <div class="bg-synth-purple-light h-full w-full">
    <div class="grid place-items-center h-screen w-full mx-10">
      <div class="flex md:flex-wrap">
        <AvatarCard />
        <div class="w-4" />
        <div>
          <span class="text-6.5xl text-synth-grey">Hi, I'm </span>
          <span class="text-6.5xl text-synth-gold">Joshua Young</span>
          <span class="text-6.5xl text-synth-grey">.</span>
          <br>
          <span class="text-6.5xl text-synth-grey">I'm a </span>
          <span class="text-6.5xl text-synth-pink">Full Stack Software Engineer</span>
          <span class="text-6.5xl text-synth-grey">.</span>
        </div>
      </div>
    </div>
    <div class="grid place-items-center h-screen w-full">test2</div>
    <div id="about" class="grid place-items-center h-screen w-full">test3</div>
  </div>
</template>

<script>
import AvatarCard from "./components/AvatarCard.vue";
export default {
  components: {
    AvatarCard
    },
  }
</script>
