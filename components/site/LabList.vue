<template>
  <section class="demoList container">
    <ul>
      <li v-for="lab in labs" :key="lab.date">
        <a :href="`labs/${lab._path}`">
          {{lab.title}}
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['labs'])
  },
}
</script>
