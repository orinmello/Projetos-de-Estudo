//Items da Loja; Basta Copiar&Colar//
const items = [
    {
        id: 0,
        nome: "Bolsa Modelo 01",
        img: "img/bolsa01.jpg",
        quantidade: 0,
    },
    {
        id: 1,
        nome: "Bolsa Modelo 02",
        img: "img/bolsa02.jpg",
        quantidade: 0,
    },
    {
        id: 2,
        nome: "Bolsa Modelo 03",
        img: "img/bolsa03.jpg",
        quantidade: 0,
    },
]
//Area dos Produtos//
inicializarLoja = () => {
    var containerProdutos = document.getElementById("produtos");
    items.map((val)=>{
        containerProdutos.innerHTML+=`
        <div class="produto-single">
            <img src="`+val.img+`"/>
            <p>`+val.nome+`</p>
            <a key="`+val.id+`" href="#">Adicionar ao Carrinho</a>
        </div>
        `; 
    })
}

inicializarLoja();
//Area do Carrinho//
atualizarCarrinho = () => {
    var containerCarrinho = document.getElementById("carrinho");
    containerCarrinho.innerHTML = "";
    items.map((val)=>{
        if(val.quantidade > 0){
        containerCarrinho.innerHTML+= `
        <div class="info-single-checkout">
            <p style="float:left;">Produto:  `+val.nome+`</p>
            <p style="float:right;">Quantidade:  `+val.quantidade+`</p>
            <div style="clear:both"></div>
        <hr>
        </div>
        `;
        } 
    })
}
var links = document.getElementsByTagName("a");
for(var i = 0; i < links.length; i++){
    links[i].addEventListener("click",function(){
        let key = this.getAttribute("key");
        items[key].quantidade++;
        atualizarCarrinho();
        return false;
    })
}