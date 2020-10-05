// Anfritião pode ter nome, email, senha, perfil verificado, tipo de host, avaliações(estrelas)

export class Host {
  id: string;

  name: string;

  email: string;

  password: string;

  host_verify: boolean;

  host_type: boolean;

  stars: number;
}
