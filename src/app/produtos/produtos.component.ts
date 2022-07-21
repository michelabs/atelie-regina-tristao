import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined;

  constructor(private produtosService: ProdutosService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    alert("Obs.: Esse projeto, foi construído baseado em uma pequena loja de propriedade de minha mãe. Caso tenha interesse pelos produtos, os contatos diretos estão presentes no site, e toda negociação poderá ser feita através destes contatos. Sendo assim, todas as condições apresentadas neste projeto são hipotéticas e não estão dentro de um contexto real de transação comercial.");

    
    const produtos = this.produtosService.getAll(); 

    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
      
      if (descricao) {
        this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));       
        return;   
      }
      this.produtos = produtos;
    })    
  }
}
