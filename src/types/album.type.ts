export type Album = {
  name: string;
  date: string;
  album_link: string;
  album_cover: string;
  branca: EBranca;
  place?: string;
};

export enum EBranca {
  "LC" = "LC",
  "EG" = "EG",
  "RS" = "RS",
  "COCA" = "COCA",
}

export const BrancaColorMapping = {
  [EBranca.LC]: "yellow",
  [EBranca.EG]: "green",
  [EBranca.RS]: "red",
  [EBranca.COCA]: "purple",
};
