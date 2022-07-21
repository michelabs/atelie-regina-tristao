export interface IProduto {
    id: number;
    descricao: string;
    preco: number;
    descricaoPreco: string;
    quantidade: number;
    imagem: string;
}

export interface IProdutoCarrinho extends IProduto {
    quantidade: number;
}

export const produtos: IProduto[] = [
    { id: 1, descricao: "Macacão Azul Marinho", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 01.jpeg", quantidade: 10 },
    { id: 2, descricao: "Conjunto Batizado", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 02.jpeg", quantidade: 10 },
    { id: 3, descricao: "CJ Listrado c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 03.jpeg", quantidade: 10 },
    { id: 4, descricao: "CJ Vd e Bc c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 04.jpeg", quantidade: 10 },
    { id: 5, descricao: "Macacão Lilás", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 05.jpeg", quantidade: 10 },
    { id: 6, descricao: "Macacão Azul Claro", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 06.jpeg", quantidade: 10 },
    { id: 7, descricao: "CJ Vr e Bc c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 07.jpeg", quantidade: 10 },
    { id: 8, descricao: "CJ Lilás c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 08.jpeg", quantidade: 10 },
    { id: 9, descricao: "CJ Az e Rosa", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 09.jpeg", quantidade: 10 },
    { id: 10, descricao: "CJ Az c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 010.jpeg", quantidade: 10 },    
    { id: 11, descricao: "Macacão Salmão", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 011.jpeg", quantidade: 10 },
    { id: 12, descricao: "CJ Palha com Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 012.jpeg", quantidade: 10 },
    { id: 13, descricao: "Kit Az c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 013.jpeg", quantidade: 10 },
    { id: 14, descricao: "Kits Diversas Cores", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 014.jpeg", quantidade: 10 },
    { id: 15, descricao: "CJ Vermelho c/ Manta", preco: 0.00, descricaoPreco: "Consultar condições", imagem: "./assets/Imagem 015.jpeg", quantidade: 10 }
]