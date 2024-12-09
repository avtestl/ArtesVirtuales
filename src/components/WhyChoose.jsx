import ReasonOneImg from "../assets/Reason1.png"
import ReasonTwoImg from "../assets/Reason2.png"
import ReasonThreeImg from "../assets/Reason3.png"

const images = [
  <img src={ReasonOneImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />,
  <img src={ReasonTwoImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />,
  <img src={ReasonThreeImg.src} alt="Why Choose Us" className="aspect-[15/10]" width={296} loading="lazy" />
]

function Reason({ img, title, description }){
  return (
      <div className="text-center flex flex-col items-center w-[300px]">
        <h3 className="text-xl font-medium text-dark-text">
          {title}
        </h3>
        <div className="my-4 flex items-center justify-center">
          {img}
        </div>
        <p className="text-lg text-dark-text">
          {description}
        </p>
    </div>
  )
}

export function WhyChooseUs ({ reasons, title }) {
  return (
    <section className="bg-[#D1E0EB] px-6 py-12 mt-32">
      <h2 className="mb-16 text-center text-4xl font-semibold text-dark-text">
        {title}
      </h2>

      <div className="flex flex-wrap justify-center items-start gap-12">
        {reasons.map(reason => (
          <Reason title={reason.titulo} description={reason.descripcion} img={images[reason.numeroImagen - 1]}/>
        ))}
      </div>
    </section>
  );
};