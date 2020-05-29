<template>
  <div class="jumbotron">
    <h2 class="title">
      <i class="material-icons md-24 align-generic">home</i>
      Seja Bem vindo {{ userName }}
    </h2>
    <hr />
    <div class="row card-deck">
      <div class="card text-white bg-secondary card-home col-sm-4">
        <h6 class="card-header title">
          <i class="material-icons md-24 align-generic">people</i>
          Alunos
        </h6>
        <div class="card-body">
          <p class="card-text">
            Neste módulo temos diversas informações sobre os alunos matrículados na nossa
            escola , e também temos diversos cursos dísponveis de acordo com a necessidade
            do aluno.
          </p>

          <button class="btn btn-primary">
            <i class="material-icons md-24 align-generic">input</i>
            <router-link to="/alunos" class="btn-home space-btn">Enter</router-link>
          </button>
        </div>
      </div>

      <div class="card text-white bg-secondary card-home col-sm-4">
        <h6 class="card-header title">
          <i class="material-icons md-24 align-generic">local_library</i>
          Professores
        </h6>
        <div class="card-body">
          <p class="card-text">
            Neste módulo temos diversas informações sobre os professores onde podemos saber como
            funciona sua didática , quais cursos são ministrados por eles e como podemos
            aproveitar dar melhor maneira possível.
          </p>

          <button class="btn btn-primary" disabled>
            <router-link to="/#" class="btn-home">unavailable</router-link>
          </button>
        </div>
      </div>

      <div class="card text-white bg-secondary card-home col-sm-4">
        <h6 class="card-header title">
          <i class="material-icons md-24 align-generic">assignment</i>
          Quem somos
        </h6>
        <div class="card-body">
          <p class="card-text">
            Neste módulo falamos um pouco da escola e qual sua estrutura para ajudar os alunos a
            evoluirem em suas carreiras , ou quem está começando por onde iniciar suas jornada.
          </p>

          <button class="btn btn-primary" disabled>
            <router-link to="/#" class="btn-home">unavailable</router-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    userName: JSON.parse(localStorage.getItem("user")).user.name || '.' ,
  })
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.title {
  text-align: left;
}

.card-home {
  max-width: 22rem;
}

.btn-home {
  text-decoration: none;
  color: white;
}

.btn-home:hover {
  cursor: pointer;
}

.space-btn {
padding: .2em;
}
</style>
