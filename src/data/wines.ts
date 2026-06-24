// Wine catalog for "platinum-vina".
// Source: the 2026 offer (Ponuda 2026). This file is the single source of
// truth for catalog data consumed by WineCard and the category sections.
//
// Notes:
// - karakteristike (tasting profile) is intentionally left UNPOPULATED for now;
//   it will be filled in a later task.
// - image.src points at the real per-wine artwork at /assets/wines/<id>.png.

export type WineCategory =
  | "velika-pakiranja"
  | "atraktivne-sorte"
  | "vranac"
  | "vrhunska-hrvatska"
  | "vintonic";

// Image-area treatment, shared with WineCard (which reuses this union later).
export type WineVariant = "light" | "dark" | "custom";

// Tasting profile — each axis rated on a 1–5 scale.
export interface WineCharacteristics {
  intenzitet: number;
  tijelo: number;
  tanini: number;
  kiselost: number;
  alkohol: number;
}

export interface Wine {
  id: string; // slug
  naziv: string;
  kategorija: WineCategory;
  descriptor?: string; // short line under name; omitted for Vintonic
  cijena: number;
  volume: string; // "2L" | "1L" | "0,75L" | "3L"
  alkohol: number;
  variant: WineVariant;
  background?: string; // hex, required only when variant === "custom"
  image: { src: string; alt: string };
  karakteristike?: WineCharacteristics; // left unpopulated for now
}

export interface Category {
  slug: WineCategory;
  label: string;
  eyebrow: string;
  intro: string;
  badge?: string;
  // How the intro paragraph lays out on md+: 1 = single column (default),
  // 2 = split across two columns (used for the longer vranac/vintonic intros).
  introColumns?: 1 | 2;
}

export const wines: Wine[] = [
  // === VELIKA PAKIRANJA ===
  {
    id: "chardonnay-riesling-italico-2l",
    naziv: "Chardonnay & Riesling Italico",
    kategorija: "velika-pakiranja",
    descriptor: "Kvalitetno bijelo suho vino",
    cijena: 3.05,
    volume: "2L",
    alkohol: 12.5,
    variant: "light",
    image: {
      src: "/assets/wines/chardonnay-riesling-italico-2l.png",
      alt: "Boca – Chardonnay & Riesling Italico 2L",
    },
  },
  {
    id: "merlot-cabernet-sauvignon-2l",
    naziv: "Merlot & Cabernet Sauvignon",
    kategorija: "velika-pakiranja",
    descriptor: "Kvalitetno crno suho vino",
    cijena: 3.05,
    volume: "2L",
    alkohol: 12.5,
    variant: "dark",
    image: {
      src: "/assets/wines/merlot-cabernet-sauvignon-2l.png",
      alt: "Boca – Merlot & Cabernet Sauvignon 2L",
    },
  },
  {
    id: "vranac-2l",
    naziv: "Vranac",
    kategorija: "velika-pakiranja",
    descriptor: "Kvalitetno crno suho vino",
    cijena: 2.82,
    volume: "2L",
    alkohol: 12.5,
    variant: "dark",
    image: {
      src: "/assets/wines/vranac-2l.png",
      alt: "Boca – Vranac 2L",
    },
  },

  // === ATRAKTIVNE SORTE ===
  {
    id: "zeleni-veltlinac-1l",
    naziv: "Zeleni Veltlinac",
    kategorija: "atraktivne-sorte",
    descriptor: "Bijelo suho vino iz Mađarske",
    cijena: 3.14,
    volume: "1L",
    alkohol: 11.5,
    variant: "light",
    image: {
      src: "/assets/wines/zeleni-veltlinac-1l.png",
      alt: "Boca – Zeleni Veltlinac 1L",
    },
  },
  {
    id: "muskat-ottonel-075l",
    naziv: "Muškat Ottonel",
    kategorija: "atraktivne-sorte",
    descriptor: "Bijelo suho vino iz Makedonije",
    cijena: 3.62,
    volume: "0,75L",
    alkohol: 11.5,
    variant: "light",
    image: {
      src: "/assets/wines/muskat-ottonel-075l.png",
      alt: "Boca – Muškat Ottonel 0,75L",
    },
  },

  // === VRANAC ===
  {
    id: "vranac-075l",
    naziv: "Vranac",
    kategorija: "vranac",
    descriptor: "Kvalitetno crno suho vino iz Sjeverne Makedonije",
    cijena: 3.34,
    volume: "0,75L",
    alkohol: 13.5,
    variant: "dark",
    image: {
      src: "/assets/wines/vranac-075l.png",
      alt: "Boca – Vranac 0,75L",
    },
  },
  {
    id: "vranac-1l",
    naziv: "Vranac",
    kategorija: "vranac",
    descriptor: "Kvalitetno crno suho vino iz Sjeverne Makedonije",
    cijena: 2.69,
    volume: "1L",
    alkohol: 13.5,
    variant: "dark",
    image: {
      src: "/assets/wines/vranac-1l.png",
      alt: "Boca – Vranac 1L",
    },
  },
  {
    id: "vranac-3l-bib",
    naziv: "Vranac",
    kategorija: "vranac",
    descriptor: "Kvalitetno crno suho vino iz Sjeverne Makedonije",
    cijena: 5.64,
    volume: "3L",
    alkohol: 13.5,
    variant: "dark",
    image: {
      src: "/assets/wines/vranac-3l-bib.png",
      alt: "Boca – Vranac 3L",
    },
  },

  // === VRHUNSKA HRVATSKA VINA ===
  {
    id: "grasevina-075l",
    naziv: "Graševina",
    kategorija: "vrhunska-hrvatska",
    descriptor: "Vrhunsko suho bijelo vino",
    cijena: 5.8,
    volume: "0,75L",
    alkohol: 12.5,
    variant: "light",
    image: {
      src: "/assets/wines/grasevina-075l.png",
      alt: "Boca – Graševina 0,75L",
    },
  },
  {
    id: "malvazija-075l",
    naziv: "Malvazija",
    kategorija: "vrhunska-hrvatska",
    descriptor: "Vrhunsko suho bijelo vino",
    cijena: 5.8,
    volume: "0,75L",
    alkohol: 12,
    variant: "light",
    image: {
      src: "/assets/wines/malvazija-075l.png",
      alt: "Boca – Malvazija 0,75L",
    },
  },
  {
    id: "plavac-mali-075l",
    naziv: "Plavac mali",
    kategorija: "vrhunska-hrvatska",
    descriptor: "Vrhunsko crno suho vino",
    cijena: 5.8,
    volume: "0,75L",
    alkohol: 13.5,
    variant: "dark",
    image: {
      src: "/assets/wines/plavac-mali-075l.png",
      alt: "Boca – Plavac mali 0,75L",
    },
  },

  // === VINTONIC === (variant "custom", no descriptor, pastel backgrounds)
  {
    id: "vintonic-classic",
    naziv: "Classic",
    kategorija: "vintonic",
    cijena: 4.49,
    volume: "0,75L",
    alkohol: 5.5,
    variant: "custom",
    background: "#F3F1EC",
    image: {
      src: "/assets/wines/vintonic-classic.png",
      alt: "Boca – Classic 0,75L",
    },
  },
  {
    id: "vintonic-lemonello",
    naziv: "Lemonello",
    kategorija: "vintonic",
    cijena: 4.49,
    volume: "0,75L",
    alkohol: 5.5,
    variant: "custom",
    background: "#FBF4DB",
    image: {
      src: "/assets/wines/vintonic-lemonello.png",
      alt: "Boca – Lemonello 0,75L",
    },
  },
  {
    id: "vintonic-mojito",
    naziv: "Mojito",
    kategorija: "vintonic",
    cijena: 4.49,
    volume: "0,75L",
    alkohol: 5.5,
    variant: "custom",
    background: "#E6F2EC",
    image: {
      src: "/assets/wines/vintonic-mojito.png",
      alt: "Boca – Mojito 0,75L",
    },
  },
  {
    id: "vintonic-rose",
    naziv: "Rosé",
    kategorija: "vintonic",
    cijena: 4.49,
    volume: "0,75L",
    alkohol: 5.5,
    variant: "custom",
    background: "#F7E9EC",
    image: {
      src: "/assets/wines/vintonic-rose.png",
      alt: "Boca – Rosé 0,75L",
    },
  },
];

export const categories: Category[] = [
  {
    slug: "velika-pakiranja",
    label: "Velika pakiranja",
    eyebrow: "Za svaki dan",
    intro:
      "Praktična litrena i dvolitrena pakiranja stvorena za ugostiteljstvo i sve prilike u kojima se vino toči često i rado. Pristupačna, pitka vina bez kompromisa u kvaliteti.",
  },
  {
    slug: "atraktivne-sorte",
    label: "Atraktivne sorte",
    eyebrow: "Nešto drukčije",
    intro:
      "Sorte koje izlaze iz okvira uobičajenog. Mirisne, prepoznatljive i pune karaktera, uvezene iz Mađarske i Makedonije za one koji vole otkrivati nova lica bijelog vina.",
  },
  {
    slug: "vranac",
    label: "Vranac",
    eyebrow: "15 godina s nama na tržištu",
    intro:
      "Naš prepoznatljivi Vranac dolazi iz vinogorja Strumičko-Radoviško u Sjevernoj Makedoniji, kao vino s oznakom zemljopisnog podrijetla. Petnaest godina prisutnosti na tržištu i osvježeni vizualni identitet potvrđuju njegovo mjesto među omiljenim crnim vinima. Duboke boje, punog tijela i izražajnih nota tamnog voća, dostupan je u tri formata za svaku priliku.",
    introColumns: 2,
  },
  {
    slug: "vrhunska-hrvatska",
    label: "Vrhunska Hrvatska vina",
    eyebrow: "Vrhunska kategorija",
    intro:
      "Tri klasika hrvatskog vinogradarstva u vrhunskoj kategoriji. Graševina, Istarska Malvazija i Plavac Mali predstavljaju najbolje od domaćeg terroira, od Podunavlja i Istre do Dalmacije.",
    badge: "Za paletnu isporuku (600 kom) — 30% rabat",
  },
  {
    slug: "vintonic",
    label: "Vintonic",
    eyebrow: "Gotov koktel na bazi vina",
    intro:
      "Vintonic je gotovi pjenušavi koktel na bazi vina za sve koji žele brzo, jednostavno i konzistentno piće bez dodatne pripreme. Spaja svježinu pjenušca s citrusno-gorkastim tonik profilom, pa daje dojam pravog koktela uz praktičnost gotovog proizvoda. Najbolje poslužen dobro rashlađen.",
    introColumns: 2,
  },
];

export function getWinesByCategory(slug: WineCategory): Wine[] {
  return wines.filter((wine) => wine.kategorija === slug);
}

export function getCategory(slug: WineCategory): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
