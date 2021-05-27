<template>
  <div class="col-md-6">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="text-center">Edit Makanan</h4>

        <form @submit.prevent="onUpdateForm">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Nama Makanan</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleInputEmail1"
              v-model="food.nama"
            />
          </div>

          <div class="mb-3">
            <label for="jenis" class="form-label">Jenis Makanan</label>
            <input
              type="text"
              class="form-control"
              id="jenis"
              v-model="food.jenis"
            />
          </div>

          <div class="mb-3">
            <label for="harga" class="form-label">Harga Makanan</label>
            <input
              type="number"
              class="form-control"
              id="harga"
              v-model="food.harga"
            />
          </div>

          <div class="mb-3">
            <label for="gambar" class="form-label">Gambar Makanan</label>
            <input
              type="file"
              class="form-control"
              id="gambar"
              accept="image/*"
              @change="image"
            />
          </div>

          <button class="btn btn-primary" type="submit">
            <div v-if="loading">
              <span
                class="spinner-grow spinner-grow-sm"
                role="status"
                aria-hidden="true"
              ></span
              >&nbsp;Loading...
            </div>
            <span v-else>Edit</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      food: {},
      loading: false
    };
  },
  created() {
    let dbRef = db.collection("foods").doc(this.$route.params.id);
    dbRef
      .get()
      .then((doc) => {
        this.food = doc.data();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    image(event) {
      this.imageData = event.target.files[0];
      console.log(this.imageData);
    },

    onUpdateForm(event) {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 2000);

      event.preventDefault();
      db.collection("foods")
        .doc(this.$route.params.id)
        .update(this.food)
        .then(() => {
          console.log("food successfully updated!");
          this.$router.push("/makanan/home");
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>