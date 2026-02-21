import { SearchBar } from "./components/SearchBar";


export default function Home() {
  return (
   <div className="space-y-10">

      <section className="space-y-4">
        <h1 className="text-4xl font-bold">
          British Military Medal Registry
        </h1>

        <p className="text-textSecondary max-w-2xl">
          Historical archive of British military decorations and service records.
        </p>

        <SearchBar />
      </section>

    

    </div>
  );
}
