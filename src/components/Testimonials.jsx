export function TestimonialItem({ testimonial }){
  
  return (
    // eslint-disable-next-line tailwindcss/no-contradicting-classname
    <div className="min-h-36 max-w-[328px] bg-gradient-to-l from-[#5381ad80] from-35% to-[#22354780] to-75% p-px">
        <div className="flex min-h-36 flex-col gap-2 bg-[#D1E0EB] p-6">
          <header className="flex items-center gap-3">
            <img src={testimonial.imagenPersona} alt={testimonial.nombreCompleto} width={48} className="aspect-square size-12 rounded-full" />
            <div>
              <p className="text-base font-semibold text-[#01123F]">{testimonial.nombreCompleto}</p>
              <p className="text-xs font-extralight text-dark-text">{testimonial.fecha}</p>
            </div>
          </header>
          <p className="text-xs text-dark-text">{testimonial.testimonio}</p>
        </div>
    </div>
  )
}

export default function Testimonials({ title, testimonials }){


  return (
    <section className="flex flex-col items-center">
      <h3 className="mb-16 text-center text-4xl font-semibold tracking-wide text-dark-text">{title}</h3>
      
      <div className="flex flex-col gap-12">
        {testimonials.map(testimonial => (
            <TestimonialItem key={testimonial.nombreCompleto} testimonial={testimonial} />
        ))}
      </div>
    </section>
  )
}