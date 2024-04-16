function mudarCor(){
    function mudar(numero){
        return(Math.random()* numero);
    }
    const cores= `rgb(${mudar(255)}, ${mudar(255)}, ${mudar(255)})`;
    document.body.style.backgroundColor=cores;
}
    window.addEventListener('load',function(){
    this.setInterval(function(){
        mudarCor();
    },2000)
    })
