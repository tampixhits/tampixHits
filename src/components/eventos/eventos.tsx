import "./eventos.css";
import Casamento from "@/assets/imgs/casamento.jpg";
import Particular from "@/assets/imgs/particular.jpg";
import Corporativo from "@/assets/imgs/corporativo.jpg";
import WhatsAppButton from "../whatsapp-button/whatsapp-button";

export function Eventos() {
  return (
    <section className="eventos" id="eventos">
      <div className="eventos__wrapper">
        <h1>Eventos</h1>

        <div className="evento">
          <div className="evento__text">
            <h2>Casamentos</h2>
            <p className="evento__paragraph">
              A Tampix Hits oferece excelência na execução de canções para
              Cerimônia, Recepção e Festa de Casamento. Personalizamos a
              formação musical e o repertório. Prestamos assessoria para escolha
              da formação musical e o repertório de acordo com o gosto dos
              noivos.
            </p>
            <p className="evento__paragraph">
              Além da formação musical e repertório, os noivos podem escolher a
              voz com nosso casting de cantores e cantoras. Conheça mais de
              perto o nosso trabalho e marque uma reunião on-line de segunda a
              sexta, das 8h até às 21hs.
            </p> <br />

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message="Olá, gostaria de saber mais sobre os serviços de música para casamentos."
            >
              Marcar reunião agora
            </WhatsAppButton>
          </div>
          <div className="evento__image">
            <img src={Casamento} alt="Casamento" />
          </div>
        </div>

        <div className="evento">
          <div className="evento__image">
            <img src={Corporativo} alt="Corporativo" />
          </div>
          <div className="evento__text">
            <h2>Corporativo</h2>
            <p className="evento__paragraph">
              Pode ser o aniversário da empresa, a confraternização de final de
              ano, uma ação promocional, congresso ou feira. Nós estamos prontos
              para atender qualquer tipo de demanda musical, com repertório
              específico para cada situação.
            </p>
            <p className="evento__paragraph">
              Já atuamos com empresas como: Yara Brasil, Agrofel, Hotel Deville,
              Unisinos, Tornak, Shopping Prais de Belas, Viva Open Mall, Famurs,
              Grupo RBS Hotel Embaixador, Veleiros do Sul, Colégio Rosário,
              Associação dos Procurados do Estado do RS, Sicredi, Fundmed,
              Credita, Verdes Vales e etc.
            </p> <br />

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message="Olá, gostaria de saber mais sobre os serviços de música para eventos corporativos."
            >
              Solicitar orçamento
            </WhatsAppButton>
          </div>
        </div>

        <div className="evento">
          <div className="evento__text">
            <h2>Particular</h2>
            <p className="evento__paragraph">
              Vai comemorar seu aniversário em casa com os amigos ou fazer
              aquela festa no condomínio?
            </p>
            <p className="evento__paragraph">
              Temos formações musicais perfeitas para este tipo de ocasião com
              sonorização e iluminação inclusa.
            </p> <br />

            <WhatsAppButton
              phoneNumber="+5541992909011"
              message="Olá, gostaria de saber mais sobre os serviços de música para eventos particulares."
            >
              Peça um orçamento
            </WhatsAppButton>
          </div>

          <div className="evento__image">
            <img src={Particular} alt="Particular" />
          </div>
        </div>
      </div>
    </section>
  );
}
