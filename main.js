import { renderizarCatalago } from "./src/js/cartaoProduto";
import { inicializarFiltros } from "./src/js/filtrosCatalogo";
import {
	atualizarPrecoCarrinho,
	inicializarCarrinho,
	renderizarProdutosCarrinho,
} from "./src/js/menuCarrinho";

renderizarCatalago();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
inicializarFiltros();
