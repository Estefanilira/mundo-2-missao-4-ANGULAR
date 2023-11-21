import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  editoras: Editora[];

  constructor() {
    this.editoras = [
      {
        codEditora: 1,
        nome: "Bookman",
        autor: "David Flanagan",
    },
    {
        codEditora: 2,
        nome: "Novatec",
        autor: "Edécio Fernando Iepsen",
    },
    {
        codEditora: 3,
        nome: "Novatec",
        autor: "Maurício Samy Silva",
    },
    {
        codEditora: 4,
        nome: "Alta Books",
        autor: "Robert C. Martin",
    },
    {
        codEditora: 5,
        nome: "Novatec",
        autor: "Aditya Y. Bhargava",
    },
    ];
  }

  getEditoras(): Editora[] {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora ? editora.nome : '';
  }
}