import { Search } from "@/components/algolia/search";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main className="min-h-screen p-24">
  <Search/>
    </main>
  );
}
