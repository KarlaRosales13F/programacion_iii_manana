import { useEffect, useRef } from 'react';

export default function FocoAutomatico() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div>
      <label>Nombre: </label>
      <input ref={inputRef} placeholder="Escribe tu nombre aquí..." />
    </div>
  );
}
