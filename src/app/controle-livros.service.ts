import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Livro[];

  constructor() {
    this.livros = [
      {
        codigo: 1,
        codEditora: 1,
        titulo: "JavaScript  O guia definitivo",
        resumo: "Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web.",
        autores: ["David Flanagan"],
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "Lógica de programação e Algoritmos com JavaScript",
        resumo: "Este livro apresenta os conceitos de lógica de programação e algoritmos de forma clara e objetiva, utilizando a linguagem JavaScript.",
        autores: ["Edécio Fernando Iepsen"],
    },
    {
        codigo: 3,
        codEditora: 3,
        titulo: "React - Aprenda praticando",
        resumo: "Este livro é um guia prático para desenvolvedores que desejam aprender a criar aplicações web com React.",
        autores: ["Maurício Samy Silva"],
    },
    {
        codigo: 4,
        codEditora: 4,
        titulo: "Código Limpo",
        resumo: "Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis e recursos importantes devido a um código mal escrito. Mas não precisa ser assim.",
        autores: ["Robert C. Martin"],
    },
    {
        codigo: 5,
        codEditora: 5,
        titulo: "Entendendo Algoritmos",
        resumo: "Algoritmos são a base de toda a ciência da computação. Eles são o núcleo dos sistemas operacionais, dos aplicativos da web, dos bancos de dados e de praticamente todos os outros sistemas.",
        autores: ["Aditya Y. Bhargava"],
    },
    ];
  }

  obterLivros = (): Livro[] => {
    return this.livros;
  };

  incluir = (livro: Livro): void => {
    const codigo =
      this.livros.reduce((max, livro) => Math.max(max, livro.codigo), 0) + 1;
    this.livros.push({ ...livro, codigo });
  };

  excluir = (codigo: number): void => {
    const indiceLivro = this.livros.findIndex(
      (livro) => livro.codigo === codigo
    );
    if (indiceLivro !== -1) {
      this.livros.splice(indiceLivro, 1);
    }
  };
}