import ReasonOneImg from "@/assets/Reason1.png"
import ReasonTwoImg from "@/assets/Reason2.png"
import ReasonThreeImg from "@/assets/Reason3.png"
import ReasonFortImg from "@/assets/Reason4.png"

const images = [
  <img src={ReasonOneImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />,
  <img src={ReasonTwoImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />,
  <img src={ReasonThreeImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />,
	<img src={ReasonFortImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />
]

function Reason({ img, title, description }) {
  return (
    <div className="group text-center flex flex-col items-center w-[300px] p-6 rounded-2xl transition-all duration-300 transform hover:scale-[1.05] active:scale-[1.05] hover:shadow-xl active:shadow-xl hover:-translate-y-1 active:-translate-y-1">
      <h3 className="text-xl font-medium text-dark-text mb-4 transition-transform duration-300 group-hover:scale-110 group-active:scale-110">
        {title}
      </h3>
      <div className="mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-active:scale-105">
        {img}
      </div>
      <p className="text-lg text-dark-text transition-transform duration-300 group-hover:scale-105 group-active:scale-105">
        {description}
      </p>
    </div>
  );
}

export function WhyChooseUs({ reasons, title }) {
  return (
    <section className="bg-[#bfcbe8] px-6 py-12 mt-32" id="propuesta">
      <h2 className="mb-16 text-center text-4xl font-semibold text-dark-text">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-12">
        {reasons.map((reason) => (
          <Reason
            key={reason.titulo}
            title={reason.titulo}
            description={reason.descripcion}
            img={images[reason.numeroImagen - 1]}
          />
        ))}
      </div>
    </section>
  );
}
