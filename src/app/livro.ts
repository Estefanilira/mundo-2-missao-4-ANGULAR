export class Livro {
    codigo: number;
    titulo: string;
    resumo: string;
    autores: string[];
    codEditora: number;

    constructor(
        codigo: number,
        titulo: string,
        resumo: string,
        autores: string[],
        codEditora: number
    ) {
        this.codigo = codigo;
        this.titulo = titulo;
        this.resumo = resumo;
        this.autores = autores;
        this.codEditora = codEditora;
    }
}