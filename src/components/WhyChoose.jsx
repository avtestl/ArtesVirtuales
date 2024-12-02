import ReasonOneImg from "../assets/Reason1.png"
import ReasonTwoImg from "../assets/Reason2.png"
import ReasonThreeImg from "../assets/Reason3.png"

function Reason({ img, title, body }){
  return (
      <div className="text-center">
        <h3 className="text-xl font-medium text-dark-text">
          {title}
        </h3>
        <div className="my-4 flex items-center justify-center">
          {img}
        </div>
        <p className="text-lg text-dark-text">
          {body}
        </p>
    </div>
  )
}

export function WhyChooseUs () {
  return (
    <section className="bg-[#D1E0EB] px-6 py-12">
      <h2 className="mb-16 text-center text-4xl font-semibold text-dark-text">
        ¿Porqué Elegirnos?
      </h2>

      <div className="space-y-12 flex flex-col items-center gap-6">
        <Reason
          img={<img src={ReasonOneImg.src} alt="Why Choose Us" width={396} height={190} />}
          title="Experiencia y Profesionalismo"
          body="Contamos con un equipo de expertos en diversas áreas del marketing digital."
        />

        <Reason
          img={<img src={ReasonTwoImg.src} alt="Why Choose Us" width={296} height={232} className="ml-1" />}
          title="Resultados Comprobados"
          body="Hemos ayudado a numerosas empresas a alcanzar sus metas y superar sus expectativas."
        />

        <Reason 
          img={<img src={ReasonThreeImg.src} alt="Why Choose Us" width={300} height={250} className="ml-4" />}
          title="Enfoque Personalizado"
          body="Cada cliente es único, por lo que ofrecemos soluciones a medida que se adaptan a tus necesidades específicas."
        />
      </div>
    </section>
  );
};