<template>
  <div class="container mt-5 mb-5">
    <div class="row">
      <div class="col-md-6">
        <h1 class="mt-5">
          Use Reverente!
          <img alt="Vue logo" src="../../assets/logo.png" />
        </h1>
      </div>
      <div class="col-md-6">
        <SignIn v-show="showSignin" />
        <SignUp v-show="showSignup" />
        <button
          v-show="showSignin"
          @click="toggle()"
          class="btn btn-success pull-right mr-2"
        >Cadastre-se</button>
        <button
          v-show="showSignup"
          @click="toggle()"
          class="btn btn-secondary pull-right mr-2"
        >Voltar</button>
      </div>
    </div>
  </div>
</template>

<script>
import SignIn from "./signin.vue";
import SignUp from "./signup.vue";

export default {
  name: "User",
  components: {
    SignIn,
    SignUp
  },
  data() {
    return {
      showSignin: true,
      showSignup: false
    };
  },
  methods: {
    toggle() {
      this.showSignin = !this.showSignin;
      this.showSignup = !this.showSignup;
    }
  }
};
</script>

