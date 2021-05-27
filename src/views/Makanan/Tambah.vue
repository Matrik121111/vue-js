<template>
  <div class="col-md-6">
    <div class="card shadow">
      <div class="card-body">
        <h4 class="text-center">Tambah Makanan</h4>

        <div class="mb-3">
          <label for="nama" class="form-label">Nama Makanan</label>
          <input
            type="text"
            class="form-control"
            id="nama"
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

        <button @click="save" class="btn btn-primary" type="button">
          <div v-if="loading">
            <span
              class="spinner-grow spinner-grow-sm"
              role="status"
              aria-hidden="true"
            ></span
            >&nbsp;Loading...
          </div>
          <span v-else>Tambah</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import firebase from "firebase";
import router from "@/router";
export default {
  data() {
    return {
      loading: false,
      br: firebase.firestore().collection("foods"),
      food: {
        nama: "",
        jenis: "",
        harga: "",
        img: "",
      },
      imageData: null,
    };
  },

  methods: {
    image(event) {
      this.imageData = event.target.files[0];
      console.log(this.imageData);
    },

    save() {
      this.loading = !false;
      setTimeout(() => {
        this.loading = !true;
      }, 2000);

      console.log(this.anggota);

      var storageRef = firebase
        .storage()
        .ref("food/" + "BER_" + Math.floor(10000 + Math.random() * 9000));
      storageRef.put(this.imageData).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.log(this.food);
          this.food.img = downloadURL;
          this.br.add(this.food).then(() => {
            console.log(downloadURL);
            window.setTimeout(() => {
              router.push({
                name: "MakananHome",
              });
            }, 1500);
          });
        });
      });
    },
  },
};
</script>