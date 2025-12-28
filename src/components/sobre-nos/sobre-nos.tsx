import { useEffect, useState } from "react";
import { sanityClient } from "@/sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import "./sobre-nos.css";

interface SobreNosData {
  titulo: string;
  descricao: string;
  poster: {
    asset: {
      _id: string;
    };
  };
}

const imageBuilder = imageUrlBuilder(sanityClient);

export function SobreNos() {
  const [data, setData] = useState<SobreNosData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSobreNos = async () => {
      try {
        const result = await sanityClient.fetch(`*[_type == "sobreNos"][0]`);
        setData(result);
      } catch (error) {
        console.error("Error fetching sobre nos data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSobreNos();
  }, []);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!data) {
    return <div>Dados não encontrados</div>;
  }

  const imageUrl = data.poster ? imageBuilder.image(data.poster).url() : null;

  return (
    <section id="sobre-nos" className="sobre-nos">
      <div className="sobre-nos__wrapper">
        {imageUrl && (
          <img src={imageUrl} alt="Sobre Nós" className="sobre-nos__image" />
        )}

        <div className="sobre-nos__text">
          <h1>{data.titulo}</h1>
          <p>{data.descricao}</p>
        </div>
      </div>
    </section>
  );
}
