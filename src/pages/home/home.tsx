import "./home.css"
import { Overview } from "@/components/overview/overview"
import { SobreNos } from "@/components/sobre-nos/sobre-nos"

export function Home() {
  return (
    <section className="home">
      <Overview/>
      <SobreNos/>
    </section>
  )
}