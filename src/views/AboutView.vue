<template>
  <div class="about">
    <h1>This is an about page</h1>
    <WelcomeMessage />
  </div>
</template>

<script>
import WelcomeMessage from "@/components/WelcomeMessage.vue";

export default {
  name: "AboutView",
  components: {
    WelcomeMessage,
  },
};
</script>
