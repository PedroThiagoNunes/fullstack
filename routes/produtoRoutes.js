//importar express
const produtoRouter = requere('../Models/produtoModels')

//criar um roteador separado para  os endpoints de produto
const router = express.router()

//importar o controller  que executara cada operaçao
const ProdutoController = require('../controllers/produto.js')

//Associa cada metodo HTTP a sua funcao do controller

//GET, GET, POST, PUT, DELETE
routes.get('/', ProdutoController.listar);
routes.get('/',ProdutoController.buscarID);
routes.put('/', ProdutoController.atualizar);
routes.post('/',ProdutoController.criar);
//Exportar as rotas para serem ultilizadas pelo servidor principal
