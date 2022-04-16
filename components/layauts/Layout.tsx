import Head from 'next/head'
import React from 'react'
import { FC } from 'react'
import { Navbar } from '../ui'

interface Props {
    children: JSX.Element,
    title?: string,
}

export const Layout: FC<Props> = ({children, title }) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Ezequiel Ramirez" />
        <meta name="description" content="Pokemon App" />
        <meta name="keywords" content="pokemon, pokemons, app, react, next" />
    </Head>
    <Navbar />
    <main style={{
        padding: '0 20px',
    }}>
        {children}
    </main>
    </>
  )
}
