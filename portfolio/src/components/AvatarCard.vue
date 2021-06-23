<template>
  <div class='h-32.25 w-32.25 rounded-2xl bg-synth-blue grid place-items-center'>
    <img class='h-32 w-32 rounded-2xl' :src='getImgPath()' alt='Avatar'>
  </div>
</template>

<script>
export default {
  name: 'AvatarCard',
  methods: {
    getImgPath() {
      return (require('../assets/avatar.png'))
    }
  },
}
</script>