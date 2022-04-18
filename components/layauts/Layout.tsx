import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { FC } from "react";
import { Navbar } from "../ui";

interface Props {
  children: JSX.Element;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : "window.location.origin";

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="Ezequiel Ramirez" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="pokemon, pokemons, app, react, next" />

        <meta
          property="og:title"
          content={`Información sobre el pokemon ${title || "Pokemon"}`}
        />
        <meta
          property="og:description"
          content="Ésta es la pagina de información del pokemon"
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};
