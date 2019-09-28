<template>
  <div>
    <h2>Detalhes do produto {{product.name}}</h2>
    <span>Código: {{product.code}}</span> <br>
    <span>Nome: {{product.name}}</span> <br>
    <span>Descrição: {{product.description}}</span> <br>
    <span>Preço: {{product.price}}</span> <br>
    <span><b> Grade de tamanhos</b></span> <br>
    <ul v-for="item in product.grid" :key="item.color">
        <li>Cor: {{item.color}} | Tamanho: {{item.size}}</li>
    </ul>
    <router-link class="btn btn-secondary ml-2" to="/products">Voltar</router-link>
  </div>
</template>

<script>
import ProductService from "../../api/product";
export default {
  name: "Product",
  data() {
    return {
      product: {}
    };
  },
  created() {
      console.log(this.$route.params.id);
      
    this._productService = new ProductService(this.$resource);
    this._productService
      .findById(this.$route.params.id)
      .then(product => (this.product = product))
      .catch(err => console.log(err));
  }
};
</script>