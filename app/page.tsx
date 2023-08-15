import {Cards, SearchBar, } from "../components"

/**
 * Homepage
 * @returns homepage components
 */

const Home = () => {
  return (
    <section className="flex-start flex-col paddings mb-16">
      <SearchBar />
      <Cards />
    </section>
  )
}

export default Home