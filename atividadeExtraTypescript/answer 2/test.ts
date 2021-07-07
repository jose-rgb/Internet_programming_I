import { Comissao } from "./commission";

namespace ComissaoNamespace {
	let ObjetoComissao = new Comissao("Ely", 100);
	
	ObjetoComissao.valorComissao();
	ObjetoComissao.mostraSalario();
}