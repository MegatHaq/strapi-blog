import { Suspense } from "react";
import { PostContainer } from "./components/post-container";

export default async function Home() {
  const Loader = () => {
    return <div>loading...</div>;
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Home
      <Suspense fallback={<Loader />}>
        <PostContainer />
      </Suspense>
    </div>
  );
}
