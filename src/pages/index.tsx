import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import MovieItem from "@/components/movie-item";
import style from "./index.module.css";
import fetchMovies from "@/lib/fetch-movie";
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import Head from "next/head";

export const getStaticProps = async () => {
  const [movies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      movies,
      recoMovies,
    },
    revalidate: 5,
  };
};
export default function Home({
  movies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>PARKMISUN CINEMA</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="박미선 시네마" />
        <meta
          property="og:description"
          content="한입 챌린지 과제인 영화 사이트 만들기입니다"
        />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
