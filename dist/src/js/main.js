import { renderizarCatalago } from "./cartaoProduto";
import { inicializarFiltros } from "./filtrosCatalogo";
import {
	atualizarPrecoCarrinho,
	inicializarCarrinho,
	renderizarProdutosCarrinho,
} from "./menuCarrinho";

renderizarCatalago();
inicializarCarrinho();
atualizarPrecoCarrinho();
renderizarProdutosCarrinho();
inicializarFiltros();
