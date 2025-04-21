import SearchableLayout from "@/components/searchable-layout";
import { ReactNode, useEffect, useState } from "react";
import style from "./index.module.css";
import MovieItem from "@/components/movie-item";
import fetchMovies from "@/lib/fetch-movie";
import { MovieData } from "@/types";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchMovieResult = async () => {
    const data = await fetchMovies(q as string);
    setMovies(data);
  };

  useEffect(() => {
    if (q) {
      fetchMovieResult();
    }
  }, [q]);

  return (
    <div className={style.container}>
      <Head>
        <title>PARKMISUN CINEMA - 검색결과과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="박미선 시네마 - 검색결과" />
        <meta
          property="og:description"
          content="한입 챌린지 과제인 영화 사이트 만들기입니다"
        />
      </Head>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
