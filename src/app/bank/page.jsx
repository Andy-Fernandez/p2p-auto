"use client";
import { useForm } from "react-hook-form";

function BankDetailsForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const nombre = watch("nombre");

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    // Aquí podrías hacer una solicitud POST para enviar los datos a tu backend
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">Registrar Datos Bancarios</h2>

        {/* Nombre */}
        <label htmlFor="nombre" className="block mb-2 text-sm font-medium">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          {...register("nombre", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre.message}</span>}

        {/* Nombre del Banco */}
        <label htmlFor="nombreBanco" className="block mb-2 text-sm font-medium">
          Nombre del Banco
        </label>
        <input
          type="text"
          id="nombreBanco"
          {...register("nombreBanco", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.nombreBanco && <span className="text-red-500 text-sm">{errors.nombreBanco.message}</span>}

        {/* Teléfono */}
        <label htmlFor="telefono" className="block mb-2 text-sm font-medium">
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          {...register("telefono", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.telefono && <span className="text-red-500 text-sm">{errors.telefono.message}</span>}

        {/* Correo Electrónico */}
        <label htmlFor="email" className="block mb-2 text-sm font-medium">
          Correo Electrónico
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}

        {/* Carnet */}
        <label htmlFor="carnet" className="block mb-2 text-sm font-medium">
          Número de Carnet
        </label>
        <input
          type="text"
          id="carnet"
          {...register("carnet", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.carnet && <span className="text-red-500 text-sm">{errors.carnet.message}</span>}

        {/* Tipo de Cuenta */}
        <label htmlFor="tipoCuenta" className="block mb-2 text-sm font-medium">
          Tipo de Cuenta
        </label>
        <select
          id="tipoCuenta"
          {...register("tipoCuenta", { required: "Este campo es obligatorio" })}
          className="w-full p-2 border rounded-md mb-2"
        >
          <option value="">Selecciona un tipo</option>
          <option value="corriente">Corriente</option>
          <option value="ahorro">Ahorro</option>
        </select>
        {errors.tipoCuenta && <span className="text-red-500 text-sm">{errors.tipoCuenta.message}</span>}

        {/* Nombre del Titular de la Cuenta */}
        <label htmlFor="nombreTitular" className="block mb-2 text-sm font-medium">
          Nombre del Titular de la Cuenta
        </label>
        <input
          type="text"
          id="nombreTitular"
          {...register("nombreTitular", {
            required: "Este campo es obligatorio",
            validate: (value) => value === nombre || "El nombre del titular debe coincidir con el nombre",
          })}
          className="w-full p-2 border rounded-md mb-2"
        />
        {errors.nombreTitular && <span className="text-red-500 text-sm">{errors.nombreTitular.message}</span>}

        {/* Botón de Enviar */}
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md mt-4">
          Registrar
        </button>
      </form>
    </div>
  );
}

export default BankDetailsForm;
