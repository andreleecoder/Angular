import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url ='http://loiane.com'
  cursoAngular = true
  urlImagem='http://lorempixel.com/400/200/nature/'
  
  valorAtual:string='';
  valorSalvo
  isMouseOver:boolean=false

  nome: string="abc"

  getValor(){
    return 1
  }
  getCurtirCurso(){
    return true
  }
  botaoClicado(){
    alert('Botão clicado')
  }
  onKeyUp(evento:KeyboardEvent){
    this.valorAtual=(<HTMLInputElement>evento.target).value
    

  }
  salvarValor(valor){
    this.valorSalvo=valor;

  }
  onMouseOverNOut(){
    this.isMouseOver = !this.isMouseOver
  }
  
  constructor() { }

  ngOnInit() {
  }

}
