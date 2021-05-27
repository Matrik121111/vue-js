<template>
  <div class="mb-5">
    <h4 class="text-center">Quotes Axios API</h4>

    <div v-for="(quote, index) in quotes" :key="quote.id">
      <div class="card shadow m-3">
        <div class="card-body">
          <h4>{{ quotes[index].name }}</h4>

          <p>{{ quotes[index].title }}</p>
        </div>
      </div>

      <div class="fixed-bottom text-center bg-dark">
        <div class="card bg-dark">
          <div class="card-body text-light">
            {{ copyright.url }} | {{ copyright.year }}
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quotes: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://quotes.rest/qod/categories?language=en&detailed=true"
    );
    this.quotes = response.data.contents.categories;
    console.log(this.quotes);
  },
};
</script>
