<template>
  <div>
    <form @submit.prevent="submit()">
      <div class="login-page">
        <div class="card">
          <div class="card-header">
            <i class="material-icons align-generic">account_circle</i>
            <label>Login</label>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label for="email" class="d-flex justify-content-start">E-mail :</label>
              <input
                id="email"
                type="email"
                class="form-control"
                placeholder="Digite seu email"
                v-model="form.email"
              />
            </div>
            <div class="form-group">
              <label for="senha" class="d-flex justify-content-start">Senha :</label>
              <input
                id="senha"
                type="password"
                class="form-control"
                v-model="form.password"
                placeholder="Digite seu password"
              />
            </div>

            <!-- mensagem de erro -->
            <div class="form-group" v-if="err">
                <span class="alert alert-danger form-control" role="alert">{{ msgErr }}</span>
            </div>

            <button class="btn btn-primary w-100">
              <i class="material-icons align-generic">school</i>
              Entrar
            </button>

          </div>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    form: {
      email: "",
      password: ""
    },
    err: false,
    msgErr: ""
  }),
  methods: {
    ...mapActions("auth", [
      "ActionSetUser",
      "ActionDoLogin",
      "ActionUserLogged",
      "ActionSetClear"
    ]),

    created: () => {
      this.ActionSetClear();
    },

    // submit login
    async submit() {
      let userFind = null;

      try {
        const res = await this.ActionDoLogin(this.form);

        userFind = res.data.length > 0 ? res.data[0] : undefined;

        // validation user
        if (!userFind) {
          throw "Usuário nao cadastrado";
        }

        //data user login
        const userLogado = await this.ActionUserLogged({ id: userFind.id });

        const user = userLogado.data[0];

        // adding data user localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // redirect for home
        this.$router.push("home");

        // reset fields
        this.form.email = "";
        this.form.password = "";

      } catch (err) {
        
        // remove storage user
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        //msg err
        this.err = true;
        this.msgErr = err;

       // state init variables
        setTimeout(() => {
          this.err = false;
          this.msgErr = "";
        }, 6000);
      }
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
  border: 5px solid;
  width: 40%;
}

.bg-login {
  background: rgb(128, 124, 124);
}
</style>
