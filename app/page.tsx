import {CharactersCard, SearchBar, } from "./components"

const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <SearchBar />
      <CharactersCard />
    </section>
  )
}

export default Home