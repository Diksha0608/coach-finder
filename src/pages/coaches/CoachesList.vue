<template>
  <section>FILTER</section>
  <section>
    <base-card>
    <div class="controls">
      <base-button link mode="outline" >Refresh</base-button>
      <base-button link to="/register">Register as coach</base-button>
    </div>

    <ul v-if="hasCoaches">
      <coach-item
       v-for="coach in filteredCoaches" 
       :key="coach.id"
       :id="coach.id"
       :first-name="coach.firstName"
       :last-name="coach.lastName"
       :rate="coach.hourlyRate"
       :areas="coach.areas"

      ></coach-item>
    </ul>
    <h3 v-else>No coaches found.</h3>
</base-card>
  </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

export default {
  components: {
    CoachItem,
    BaseButton,
  },

  computed: {
    filteredCoaches() {
      // first coaches will be namespace coaches which is in index.js and other is from getters
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
  },
};
</script>

 <style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>