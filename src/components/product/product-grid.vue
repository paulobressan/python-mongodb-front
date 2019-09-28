<template>
  <div>
    <div class="row">
      <div class="col-md-5">
        <div class="form-group">
          <input
            type="text"
            placeholder="Cor"
            class="form-control"
            name="color"
            id="color"
            v-model="color"
          />
        </div>
      </div>
      <div class="col-md-5">
        <div class="form-group">
          <input
            type="text"
            placeholder="Tamanho"
            class="form-control"
            name="size"
            id="size"
            v-model="size"
          />
        </div>
      </div>
      <div class="col-md-2">
        <button @click="addGrid" type="button" class="btn btn-primary">
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="row mb-3">
      <div class="col-md-6">
        <ul class="list-group" v-for="grid in grids" :key="grid.color">
          <li class="list-group-item">Cor: {{grid.color}} | Tamanho: {{grid.size}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import ProductService from "../../api/product";

export default {
  name: "ProductGrid",
  data() {
    return {
      color: "",
      size: "",
      grids: []
    };
  },

  methods: {
    addGrid() {
      this.grids = this.grids.concat({
        color: this.color,
        size: this.size
      });
      this.color = "";
      this.size = "";
      this.$emit("handleGrids", this.grids);
    }
  }
};
</script>