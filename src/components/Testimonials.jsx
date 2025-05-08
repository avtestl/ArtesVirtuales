export function TestimonialItem({ testimonial }) {
  return (
    <div className="min-h-40 w-[90%] md:w-auto max-w-[350px] bg-[#D1E0EB] p-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 mx-auto">
      <div className="flex min-h-40 flex-col gap-3 p-6 items-center text-center">
        <header>
          <p className="text-lg font-semibold text-[#01123F] mb-2">{testimonial.nombreCompleto}</p>
          <img
            src={testimonial.imagenPersona}
            alt={testimonial.nombreCompleto}
            className="w-28 h-28 rounded-full border-4 border-white shadow-md object-cover"
          />
          <p className="text-sm font-light text-gray-600 mt-2">{testimonial.fecha}</p>
        </header>
        <p className="text-sm text-gray-700">{testimonial.testimonio}</p>

        {/* Botón solo si hay URL */}
        {testimonial.urltrabajo && (
          <a
            href={testimonial.urltrabajo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#FF329F] text-white px-4 py-2 rounded-lg text-sm font-semibold mt-2"
          >
            Ver
          </a>
        )}
      </div>
    </div>
  );
}

export default function Testimonials({ title, testimonials }) {
  return (
    <section className="flex flex-col items-center mt-16 w-full px-4" id="testimonios">
      <h3 className="mb-12 text-center text-4xl font-semibold tracking-wide text-[#01123F]">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center w-full max-w-6xl">
        {testimonials.map((testimonial, index) => (
          <TestimonialItem key={index} testimonial={testimonial} />
        ))}

      </div>
    </section>
  );
}
