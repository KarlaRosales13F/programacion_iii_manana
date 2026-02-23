export interface Huesped {
  id: number;
  nombre: string;
  correo?: string;
  telefono?: string;
}

export const huesped1: Huesped = { id: 1, nombre: "Juan Pérez" };
export const huesped2: Huesped = { id: 2, nombre: "Ana Torres", correo: "ana@correo.com" };

console.log(huesped1, huesped2);
console.log(huesped1.id, huesped1.nombre);
console.log(huesped2.correo);
