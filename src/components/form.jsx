import React from "react";

const FormularioDeContacto = () => {
  const handleCancel = () => {
    document.getElementById("contactForm").reset();
  };

  return (
    <section id="Contactanos" className="bg-[#F3F5F8] py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-[#2F2E41] text-center mb-4">
          Contáctanos
        </h2>
        <p className="text-[#2F2E41] text-center mb-10 text-lg font-light">
          ¿Tienes alguna consulta o sugerencia? ¡Nos encantaría escucharte! Completa el siguiente formulario y nos pondremos en contacto contigo lo antes posible.
        </p>

        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          id="contactForm"
          className="bg-[#E3E4E8] rounded-xl shadow-md p-8"
        >
          <div className="mb-6">
            <label htmlFor="name" className="block text-[#2F2E41] font-semibold mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Ingresa tu nombre"
              className="w-full bg-white border border-[#CCC] rounded-lg px-4 py-3 text-[#2F2E41] focus:outline-none focus:ring-2 focus:ring-[#5382AD]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-[#2F2E41] font-semibold mb-2">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Ingresa tu correo"
              className="w-full bg-white border border-[#CCC] rounded-lg px-4 py-3 text-[#2F2E41] focus:outline-none focus:ring-2 focus:ring-[#5382AD]"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-[#2F2E41] font-semibold mb-2">
              Consulta
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Ingresa tu consulta"
              className="w-full bg-white border border-[#CCC] rounded-lg px-4 py-3 text-[#2F2E41] focus:outline-none focus:ring-2 focus:ring-[#5382AD]"
              required
            ></textarea>
          </div>

          {/* Hidden StaticForms Inputs */}
          <input type="hidden" name="accessKey" value="ec7ebbf6-d28f-4d78-8f1b-fa00708a0674" />
          <input type="hidden" name="subject" value="Un nuevo cliente te envió un correo" />
          <input type="hidden" name="replyTo" value="infodelsauce@gmail.com" />
          <input type="hidden" name="redirectTo" value="https://del-sauce.vercel.app/" />

          <div className="flex justify-between mt-8">
            <button
              type="submit"
              className="w-[48%] bg-[#5382AD] hover:bg-[#3c6790] text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Enviar
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="w-[48%] bg-[#AAB5C0] hover:bg-[#919CA8] text-white font-semibold py-3 rounded-lg transition duration-300"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormularioDeContacto;
