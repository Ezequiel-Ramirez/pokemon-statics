import { Card,  Grid} from "@nextui-org/react";

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Layout } from "../../components/layauts";
import { NoFavorites } from "../../components/ui";
import { localFavorites } from "../../utils";

const FavoriesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);
  const router = useRouter();

  const onClickFavorite = (id: any ) => {
    router.push(`/pokemon/${id}`);
  };

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons());
  }, []);

  return (
    <Layout title="Favoritos">
      {favoritesPokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} direction="row" justify="flex-start">
          {favoritesPokemons.map((pokemonId: number) => (
            <Grid xs={6} sm={3} md={2} xl={1} key={pokemonId} onClick={() => onClickFavorite(pokemonId)}>
                  <Card hoverable clickable css={{ padding: 10 }}>
                    <Card.Image
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                      alt={`Pokémon ${pokemonId}`}
                      width={"100%"}
                      height={140}
                    />
                  </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </Layout>
  );
};

export default FavoriesPage;
