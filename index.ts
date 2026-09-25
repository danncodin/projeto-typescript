// Exemplos principais apresentados no vídeo

// Tipos básicos
let nome: string = "Daniel";
let idade: number = 25;
let estudante: boolean = true;

// Inferência de tipo
let idadeInferida = 25;

// Array
const skills: string[] = ["JavaScript", "TypeScript", "HTML"];

// Interface
interface Usuario {
    nome: string;
    idade: number;
}

const usuario: Usuario = {
    nome: "Daniel",
    idade: 25
};

// Union Type
type Status = "online" | "offline" | "ausente";

let statusUsuario: Status = "online";

// Função
function somar(a: number, b: number): number {
    return a + b;
}

console.log(usuario);
console.log(statusUsuario);
console.log(somar(10, 20));
