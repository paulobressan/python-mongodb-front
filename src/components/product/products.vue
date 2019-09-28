<template>
  <div class="mt-5">
    <h1>Lista de Produtos</h1>
    <router-link class="btn btn-primary pull-right mb-3" to="/new-product">Novo Produto</router-link>
    <table class="table">
      <thead>
        <th>Código</th>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th></th>
      </thead>
      <tbody v-for="product in products" :key="product._id">
        <tr>
          <td>{{product.code}}</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>{{product.price}}</td>
          <td>
            <router-link :to="generateUrl(product._id)">
              <i class="fa fa-eye" aria-hidden="true"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ProductService from "../../api/product";

export default {
  name: "Products",
  data() {
    return {
      products: []
    };
  },
  created() {
    this._productService = new ProductService(this.$resource);
    this._productService
      .find()
      .then(products => (this.products = products))
      .catch(err => console.log(err));
  },
  methods: {
    generateUrl(id) {
      return `/products/${id}`;
    }
  }
};
</script>