// import routes
import { routes as auth } from '../modules/auth/index';
import { routes as home } from '../components/Home/index';
import { routes as alunos } from '../components/Alunos/index';


// exportando todas as rotas
export default [
  ...auth,
   ...home,
   ...alunos
];
