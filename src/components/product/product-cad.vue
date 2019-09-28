<template>
  <div class="mt-5 mb-5">
    <h2>Novo Produto</h2>
    <form class="mt-3">
      <div class="row">
        <div class="col-md-2">
          <div class="form-group">
            <label for="code">Código *</label>
            <input id="code" type="text" v-model="code" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="name">Nome *</label>
            <input id="name" type="text" v-model="name" class="form-control" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label for="description">Descrição *</label>
            <textarea id="description" type="text" v-model="description" class="form-control" />
          </div>
        </div>
        <div class="col-md-2">
          <div class="form-group">
            <label for="price">Preço *</label>
            <input id="price" type="number" v-model="price" class="form-control" />
          </div>
        </div>
      </div>
      <h4 class="mt-2">Grade de tamanhos</h4>
      <ProductGrid @handleGrids="addGrid" />
      <button class="btn btn-primary" @click="create($event)">
        <i class="fa fa-floppy-o" aria-hidden="true"></i>
        Salvar
      </button>
      <router-link class="btn btn-secondary ml-2" to="/products">Voltar</router-link>
    </form>
  </div>
</template>

<script>
import ProductGrid from "./product-grid";
import ProductService from "../../api/product";

export default {
  name: "ProductCad",
  components: {
    ProductGrid
  },
  data() {
    return {
      code: "",
      name: "",
      description: "",
      price: 0,
      grid: []
    };
  },
  created() {
    this._productService = new ProductService(this.$resource);
  },
  methods: {
    addGrid($event) {
      this.grid = $event;
    },
    create(event) {
      event.preventDefault();
      this._productService
        .create({
          code: this.code,
          name: this.name,
          description: this.description,
          price: this.price,
          grid: this.grid
        })
        .then(product => {
          alert(`Produto ${product.name} cadastrado`);
          this.$router.push("/products");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>