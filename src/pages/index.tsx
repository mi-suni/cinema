import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movie";
import { InferGetServerSidePropsType } from "next";
import fetchRandomMovies from "@/lib/fetch-random-movies";

export const getServerSideProps = async () => {
  const [movies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      movies,
      recoMovies,
    },
  };
};
export default function Home({
  movies,
  recoMovies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        <div className={style.container1}>
          {recoMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        <div className={style.container2}>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </div>
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
