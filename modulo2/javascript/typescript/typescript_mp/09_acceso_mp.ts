export class Reserva {
  private codigo!: string;
  private idGenerico: string;
  private nombreHuesped: string;
  private noches: number;

  constructor(nombreHuesped: string, noches: number) {
    this.idGenerico = "CB-RES-" + Math.floor(Math.random() * 10000);
    this.nombreHuesped = nombreHuesped;
    this.noches = noches;
    this.generarCodigo();
  }

  private generarCodigo(): void {
    this.codigo = "HOTELCB-" + new Date().getTime();
  }

  public getCodigo(): string {
    return this.codigo;
  }

  public getDetalles(): object {
    return {
      huesped: this.nombreHuesped,
      noches: this.noches,
      codigo: this.codigo,
      id: this.idGenerico,
    };
  }
}
