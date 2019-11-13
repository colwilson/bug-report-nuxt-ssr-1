<template>
  <div class="index">
    index
  </div>
</template>

<script>
export default {
  name: 'index',
  async asyncData({ params, env, $axios }) {
    console.log("client?", process.client)
    const url = '/api'
    try {
      const response = await $axios.get(url);
      const data = response.data
      return {
        data
      };
    } catch (error) {
      console.log(error.message);
    }
  }
}
</script>

<style scoped>
</style>