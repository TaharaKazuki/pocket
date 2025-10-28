import ArticleLists from "./components/ArticleLists";
import MobileLayout from "./components/MobileLayout";

interface HomeProps {
  searchParams: Promise<{
    listtype?: string;
  }>;
}

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;

  return (
    <MobileLayout>
      <ArticleLists params={params} />
    </MobileLayout>
  );
}
