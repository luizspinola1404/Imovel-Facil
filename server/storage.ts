// Corrigido o import: antes estava "ôshared/schema"
import * as schema from "./shared/schema";

// Exemplo de função usando schema
export function salvarNoBanco(dados: any) {
  // Aqui você pode usar schema para validar os dados
  console.log("Salvando dados:", dados);
}
