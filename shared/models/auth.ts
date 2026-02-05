export interface UserAuth {
  id: string;
  email: string;
  senhaHash: string;
  criadoEm: Date;
  atualizadoEm?: Date;
  ativo: boolean;
}
