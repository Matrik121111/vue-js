<template>
  <div>
    <div class="card border-0 shadow">
      <div class="card-body">
        <div class="row row-cols-2 row-cols-md-5 g-4">
          <div class="col" v-for="food in food" :key="food.key">
            <div class="card h-100 shadow">
              <img v-bind:src="food.img" alt="" class="card-img-top" />

              <div class="card-body">
                <h5 class="card-title">{{ food.nama }}</h5>

                <p class="text-danger">Rp{{ food.harga }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <InfiniteLoading @infinite="infiniteHandler"></InfiniteLoading>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";
import InfiniteLoading from "vue-infinite-loading";

export default {
  data() {
    return {
      food: [],
      lastDocSnapshot: null,
    };
  },

  components: {
    InfiniteLoading,
  },

  created() {
    db.collection("foods").onSnapshot((snapshotChange) => {
      this.food = [];
      snapshotChange.forEach((doc) => {
        this.food.push({
          key: doc.id,
          nama: doc.data().nama,
          jenis: doc.data().jenis,
          harga: doc.data().harga,
          img: doc.data().img,
        });
      });
    });
  },

  methods: {
    HapusFood(id) {
      if (window.confirm("Do you really want to delete?")) {
        db.collection("foods")
          .doc(id)
          .delete()
          .then(() => {
            console.log("Document deleted!");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },

    //infinite scroll
    async fetchfood() {
      let foodRef = db.collection("foods").limit(5);
      if (this.lastDocSnapshot) {
        foodRef = foodRef.startAfter(this.lastDocSnapshot);
      }
      const foodSnap = await foodRef.get();
      this.lastDocSnapshot = foodSnap.docs[foodSnap.docs.length - 1];
      const result = foodSnap.docs.map((p) => p.data());
      this.food.push(...result);
      return result.length;
    },
    async infiniteHandler($state) {
      const newfoodCount = await this.fetchfood();
      if (newfoodCount > 0) {
        return $state.loaded(); // More food to come
      }
      return $state.complete(); // Done with the food
    },
  },
};
</script>