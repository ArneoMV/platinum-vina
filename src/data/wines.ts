// Wine catalog for "platinum-vina".
// Types only for now — the `wines` array below will be populated from the
// copy doc in the next task.

export type WineCategory =
  | "velika-pakiranja"
  | "atraktivne-sorte"
  | "vranac"
  | "vrhunska-hrvatska"
  | "vintonic";

// Tasting profile — each axis rated on a 1–5 scale.
export interface WineCharacteristics {
  intenzitet: number;
  tijelo: number;
  tanini: number;
  kiselost: number;
  alkohol: number;
}

export interface Wine {
  id: string;
  naziv: string;
  kategorija: WineCategory;
  format: string;
  cijena: number;
  alkohol: number;
  tip: string;
  hover: string;
  prica: string;
  karakteristike?: WineCharacteristics;
}

// To be populated from the copy doc in the next task.
export const wines: Wine[] = [];
