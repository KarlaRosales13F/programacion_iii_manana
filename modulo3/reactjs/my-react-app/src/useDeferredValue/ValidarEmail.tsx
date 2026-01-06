import { useState, useDeferredValue } from "react";

export default function ValidacionEmail() {
  const [email, setEmail] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const emailDiferido = useDeferredValue(email);

  const esEmailValido =
    emailDiferido.includes("@") && emailDiferido.includes(".");

  const puedeEnviar = apellidos !== "" && esEmailValido;

  const enviarFormulario = () => {
    setMensaje("Registro exitoso");
  };

  return (
    <>
      <input
        placeholder="Nombres"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
      />

      <input
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />

      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <p style={{ color: esEmailValido ? "lightgreen" : "salmon" }}>
        {emailDiferido === ""
          ? "Esperando..."
          : esEmailValido
          ? "Email válido"
          : "Email inválido"}
      </p>

      <button onClick={enviarFormulario} disabled={!puedeEnviar}>
        Enviar
      </button>

      {mensaje && <p>{mensaje}</p>}
    </>
  );
}
