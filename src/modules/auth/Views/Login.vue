<template>
  <form @submit.prevent="submit()">
    <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Digite seu email"
              v-model="form.email"
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              v-model="form.password"
              placeholder="Digite seu password"
            />
          </div>

          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
    </div>
  </form>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    ...mapActions("auth", ["ActionSetUser", "ActionDoLogin"]),

    submit() {
      this.ActionDoLogin(this.form)
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>



<style scoped lang="scss">
.login-page {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 35%;
}
</style>