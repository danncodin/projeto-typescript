// 4. Objetos e Interface

interface Usuario {
    nome: string;
    idade: number;
}

const usuario: Usuario = {
    nome: "Daniel",
    idade: 25
};

console.log(usuario.nome);
console.log(usuario.idade);
