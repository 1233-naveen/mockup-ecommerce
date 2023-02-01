//search logic

const search$ = document.getElementById("search")
search$.addEventListener('keyup',function(event){
    const term = search$.value;
    const termLowercase = term.toLowerCase();
    const productsFiltered = productsModified.filter(function(product){
        const titleLowerCased = product.title.toLowerCase();
        return titleLowerCased.indexOf(termLowercase)!= -1;
    })
    console.log(productsFiltered)
    renderProductCards(productsFiltered);
    
})
console.log(productsFiltered)