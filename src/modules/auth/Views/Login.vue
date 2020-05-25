<template>
    <form @submit.prevent="submit()">
       <div class="login-page">
      <div class="card">
        <div class="card-header">Login</div>
        <div class="card-body">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Digite seu email" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Digite seu password" />
          </div>

          <button class="btn btn-primary w-100">Entrar</button>
        </div>
      </div>
      </div>
    </form>
</template>


<script>
export default {
  data: () => ({
    form: {
      email: "",
      password: ""
    }
  }),
  methods: {
    submit() {
      console.log(this.form);
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