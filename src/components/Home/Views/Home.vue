<template>
  <div class="jumbotron">

    <h2 class="title">
      <i class="material-icons md-36 align-generic">home</i>
      Bem vindo a Home 
    </h2>
      <hr>
    <div class="row card-deck">

      <div class="card text-white bg-secondary card-home col-sm-4" >
        <h6 class="card-header title">Alunos</h6>  
        <div class="card-body">
          <p class="card-text">
            Neste módulo temos diversas informações sobre os alunos matrículados na nossa 
            escola , e também temos diversos cursos dísponveis de acordo com a necessidade
            do aluno. 
          </p>
        </div>
      </div>

      <div class="card text-white bg-secondary card-home col-sm-4">
        <h6 class="card-header title">Professores</h6>  
        <div class="card-body">
          <p class="card-text">
            Neste módulo temos diversas informações sobre os professores onde podemos saber como 
            funciona sua didática , quais cursos são ministrados por eles e como podemos 
            aproveitar dar melhor maneira possível.
          </p>
        </div>
      </div>

      <div class="card text-white bg-secondary card-home col-sm-4">
        <h6 class="card-header title">Quem somos</h6>  
        <div class="card-body">
          <p class="card-text">
            Neste módulo falamos um pouco da escola e qual sua estrutura para ajudar os alunos a 
            evoluirem em suas carreiras , ou quem está começando por onde iniciar suas jornada.
          </p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "Home"
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


</style>
