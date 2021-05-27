<template>
  <div class="card border-0 shadow">
    <div class="card-body">
      <router-link class="btn btn-primary mb-2" to="/makanan/tambah">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-plus-lg"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 0a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2H9v6a1 1 0 1 1-2 0V9H1a1 1 0 0 1 0-2h6V1a1 1 0 0 1 1-1z"
          />
        </svg>
      </router-link>

      <div class="table-responsive">
        <table class="table table-bordered text-center">
          <thead>
            <tr class="bg-secondary text-white">
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Jenis</th>
              <th scope="col">Harga</th>
              <th scope="col">Gambar</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(food, index) in food" :key="food.key">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ food.nama }}</td>
              <td>{{ food.jenis }}</td>
              <td>Rp {{ food.harga }},-</td>
              <td><img v-bind:src="food.img" style="width: 70px;" class="rounded" alt="photo is loading" /></td>
              <td>
                <router-link
                  :to="{ name: 'MakananEdit', params: { id: food.key } }"
                  class="btn btn-primary"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                    />
                  </svg> </router-link
                >&nbsp;
                <button
                  class="btn btn-danger"
                  @click.prevent="HapusFood(food.key)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "@/firebase";

export default {
  data() {
    return {
      food: [],
    };
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
  },
};
</script>