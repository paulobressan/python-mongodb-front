<template>
  <div>
    <h2>Cadastre-se</h2>
    <form @submit="signup">
      <div class="form-group">
        <label for="name">Nome *</label>
        <input v-model="name" type="text" id="name" class="form-control" />
      </div>
      <div class="form-group">
        <label for="login">Login *</label>
        <input v-model="login" type="text" id="login" class="form-control" />
      </div>
      <div class="form-group">
        <label for="password">Senha *</label>
        <input v-model="password" type="password" id="password" class="form-control" />
      </div>
      <button type="submit" class="btn btn-primary pull-right">Enviar</button>
    </form>
  </div>
</template>

<script>
import LoginService from "../../api/user";

export default {
  name: "SignUp",
  created() {
    this._loginService = new LoginService(this.$resource);
  },
  data() {
    return {
      name: "",
      login: "",
      password: ""
    };
  },
  methods: {
    signup(event) {
      event.preventDefault();
      this._loginService
        .create({
          name: this.name,
          login: this.login,
          password: this.password
        })
        .then(() => {
          this.$router.push("/products");
        })
        .catch(err => {
          if (err.status === 400) {
            alert("Ops, usuário existente!");
          }
        });
    }
  }
};
</script>