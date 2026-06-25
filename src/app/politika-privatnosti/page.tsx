import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti — Platinum Vina",
  description:
    "Politika privatnosti za internetsku stranicu Platinum vina — informativna stranica bez online prodaje i obrazaca za prikupljanje podataka.",
};

const EMAIL = "lidija.samardzija@platinum-vina.hr";

// Inline prose link (email) styling.
const linkClass =
  "text-[var(--color-fg)] underline underline-offset-4 decoration-[var(--color-border)] " +
  "transition-colors hover:decoration-[var(--color-fg)] focus-visible:outline-none " +
  "focus-visible:rounded-sm focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] " +
  "focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

// Static content page. Header/Footer/<main>/Container come from the root
// layout, so this only renders the article (constrained to a 70ch reading
// measure — no extra Container/max-width wrapper).
export default function PolitikaPrivatnostiPage() {
  return (
    <article className="max-w-[70ch]">
      <Link
        href="/"
        className="body-md-regular inline-flex items-center gap-1 text-[var(--color-muted)] underline-offset-4 transition-colors hover:text-[var(--color-fg)] hover:underline focus-visible:rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-fg)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
      >
        ← Povratak na početnu
      </Link>

      <h1 className="headline-l md:headline-xl mt-md text-[var(--color-fg)]">
        Politika privatnosti
      </h1>

      <p className="body-big-regular mt-sm text-[var(--color-neutral-700)]">
        Ova internetska stranica služi isključivo za predstavljanje vinske
        ponude. Na stranici se ne obavlja online prodaja niti se prikupljaju
        podaci putem obrazaca.
      </p>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">Voditelj obrade</h2>
        <address className="body-big-regular mt-3 not-italic text-[var(--color-neutral-700)]">
          Platinum d.o.o.
          <br />
          Vidovčica 6, 10000 Zagreb, Hrvatska
          <br />
          OIB: [OIB]
          {/* TODO: unijeti OIB */}
          <br />
          E-mail:{" "}
          <a href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
        </address>
      </section>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">
          Koje podatke prikupljamo
        </h2>
        <p className="body-big-regular mt-3 text-[var(--color-neutral-700)]">
          Stranica nema kontaktni obrazac. Ako nam se obratite putem e-mail
          adrese navedene u podnožju, obrađujemo samo podatke koje nam sami
          pošaljete u toj poruci (primjerice ime, e-mail adresu i sadržaj
          upita), i to isključivo u svrhu odgovora na vaš upit i pripreme
          ponude. Te podatke ne prosljeđujemo trećim stranama i čuvamo ih samo
          onoliko dugo koliko je potrebno za navedenu svrhu.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">Vaša prava</h2>
        <p className="body-big-regular mt-3 text-[var(--color-neutral-700)]">
          U skladu s Općom uredbom o zaštiti podataka (GDPR) imate pravo na
          pristup svojim podacima, ispravak, brisanje i ograničenje obrade te
          pravo na prigovor. Za ostvarivanje bilo kojeg od ovih prava obratite
          nam se na{" "}
          <a href={`mailto:${EMAIL}`} className={linkClass}>
            {EMAIL}
          </a>
          .
        </p>
      </section>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">Kolačići</h2>
        {/* Ako se ne koristi analitika, druga rečenica može se ukloniti. */}
        <p className="body-big-regular mt-3 text-[var(--color-neutral-700)]">
          Ova stranica koristi tehnički nužne kolačiće potrebne za njezino
          ispravno funkcioniranje. Ako se koriste kolačići za anonimnu analitiku
          posjećenosti, oni se postavljaju samo uz vašu privolu. Postavke
          kolačića možete u svakom trenutku promijeniti u svom internetskom
          pregledniku.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">
          Odgovorna konzumacija
        </h2>
        <p className="body-big-regular mt-3 text-[var(--color-neutral-700)]">
          Sadržaj ove stranice namijenjen je punoljetnim osobama (18+). Vino i
          alkoholna pića konzumirajte odgovorno.
        </p>
      </section>

      <section className="mt-10">
        <h2 className="heading-m text-[var(--color-fg)]">Izmjene politike</h2>
        <p className="body-big-regular mt-3 text-[var(--color-neutral-700)]">
          Zadržavamo pravo izmjene ove politike privatnosti. Sve izmjene
          objavljujemo na ovoj stranici.
        </p>
      </section>

      <p className="body-md-regular mt-10 text-[var(--color-muted)]">
        Posljednje ažuriranje: lipanj 2026.
      </p>
    </article>
  );
}
