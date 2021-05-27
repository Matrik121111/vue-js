<template>
  <div>{{ info }}</div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      info: 1,
    };
  },
  mounted() {
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => (this.info = response));
      console.log(this.info);
  },
};
</script>
