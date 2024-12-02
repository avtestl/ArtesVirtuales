import ReasonOneImg from "../assets/Reason1.png"
import ReasonTwoImg from "../assets/Reason2.png"
import ReasonThreeImg from "../assets/Reason3.png"

const images = [
  <img src={ReasonOneImg.src} alt="Why Choose Us" width={396} height={190} loading="lazy" />,
  <img src={ReasonTwoImg.src} alt="Why Choose Us" width={296} height={232} className="ml-1" loading="lazy" />,
  <img src={ReasonThreeImg.src} alt="Why Choose Us" width={300} height={250} className="ml-4" loading="lazy" />
]

function Reason({ img, title, description }){
  return (
      <div className="text-center">
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

console.log(images[0])
export function WhyChooseUs ({ reasons, title }) {
  return (
    <section className="bg-[#D1E0EB] px-6 py-12">
      <h2 className="mb-16 text-center text-4xl font-semibold text-dark-text">
        {title}
      </h2>

      <div className="space-y-12 flex flex-col items-center gap-6">
        {reasons.map(reason => (
          <Reason title={reason.titulo} description={reason.descripcion} img={images[reason.numeroImagen - 1]}/>
        ))}
      </div>
    </section>
  );
};