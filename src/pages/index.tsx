import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";

export default function Home() {
  return <div>메인페이지</div>;
}

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
