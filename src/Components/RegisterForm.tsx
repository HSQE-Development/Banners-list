import "./register.css";

export default function RegisterForm() {
  return (
    <section className="w-full h-full flex flex-col items-center justify-center gap-8  overflow-auto">
      <div className="text-center mt-32">
        <h1>Gracias por participar!</h1>
        <small>Porfavor completa el formulario.</small>
      </div>
      <div className="flex flex-col items-center justify-center w-full px-8 h-full pt-24">
        <form className="flex flex-col items-center justify-center gap-4 w-full">
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Nombre Completo
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Número de Identificación
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full">
            <label htmlFor="" className="text-sm text-zinc-200">
              Nombre Empresa
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md "
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Ocupación
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Correo electrónico
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-4 w-full ">
            <label htmlFor="" className="text-sm text-zinc-200">
              Teléfono
            </label>
            <input
              type="text"
              className="border-b-2 w-full h-full bg-transparent text-md"
            />
          </div>
          <div className="flex items-center justify-start mb-4 w-full gap-4">
            <div className="cntr">
              <input type="checkbox" id="cbx_s" className="hidden-xs-up" />
              <label htmlFor="cbx_s" className="cbx_s"></label>
            </div>
            <small className="text-xs">
              Aceptar tratamiento de datos carácter de confidencialidad, de
              acuerdo a la Política de Protección de Datos, ley 1581
            </small>
          </div>
          <div className="flex items-center justify-start mb-4 w-full gap-4">
            <div className="cntr">
              <input type="checkbox" id="cbx" className="hidden-xs-up" />
              <label htmlFor="cbx" className="cbx"></label>
            </div>
            <small className="text-xs">Recibir Certificado?</small>
          </div>
          <div className="flex items-center justify-start mb-4 w-full gap-4">
            <button className="btn" type="submit">
              Registrar Asistencia
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
