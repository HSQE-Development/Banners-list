import { useState } from "react";
import "./register.css";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    document: "",
    company: "",
    charge: "",
    email: "",
    phone: "",
    accept_personal_data_use: false,
    receive_certificate: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://microservices.consultoriaycapacitacionhseq.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("¡Registro exitoso!");
        window.location.reload();
      } else {
        alert("Hubo un error al registrar, intentelo de nuevo.");
      }
    } catch (error) {
      alert("Error al conectar con el servidor.");
    }
  };

  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-8  overflow-auto">
      <div className="text-center mt-32">
        <h1>Gracias por participar!</h1>
        <small>Porfavor completa el formulario.</small>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-8 h-full pt-24">
        <form
          className="flex flex-col items-center justify-center gap-4 w-full"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Nombre Completo
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 w-full h-full bg-transparent text-md"
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Número de Identificación
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              name="document"
              value={formData.document}
              onChange={handleChange}
              className="border-b-2 w-full h-full bg-transparent text-md"
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Nombre Empresa
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md "
              name="company"
              value={formData.company}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Ocupación
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
              name="charge"
              value={formData.charge}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Correo electrónico
              <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Teléfono
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-start mb-4 w-full gap-4">
            <div className="cntr">
              <input
                type="checkbox"
                id="cbx_s"
                className="hidden-xs-up"
                name="accept_personal_data_use"
                checked={formData.accept_personal_data_use}
                onChange={handleChange}
              />
              <label htmlFor="cbx_s" className="cbx_s"></label>
            </div>
            <small className="text-xs">
              Aceptar tratamiento de datos carácter de confidencialidad, de
              acuerdo a la Política de Protección de Datos, ley 1581
            </small>
          </div>
          <div className="flex items-center justify-start mb-4 w-full gap-4">
            <div className="cntr">
              <input
                type="checkbox"
                id="cbx"
                className="hidden-xs-up"
                name="receive_certificate"
                checked={formData.receive_certificate}
                onChange={handleChange}
              />
              <label htmlFor="cbx" className="cbx"></label>
            </div>
            <small className="text-xs">Recibir Certificado?</small>
          </div>
          <div className="flex flex-col items-center justify-start mb-4 w-full gap-4">
            {!formData.accept_personal_data_use && (
              <small className="text-xs text-red-500">
                Debe aceptar el tratamiento de datos
              </small>
            )}
            <button
              className={`btn ${
                !formData.accept_personal_data_use
                  ? "pointer-events-none !bg-zinc-600 !text-zinc-800"
                  : ""
              }`}
              type="submit"
            >
              Registrar Asistencia
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
