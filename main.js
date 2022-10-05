let products = [
    {
        name: 'Бургер ',
        value: 3,
        currency: ' $'
    },
    {
        name: 'Бургер ',
        value: 2,
        currency: ' $'
    },
    {
        name: 'Пицца ',
        value: 4,
        currency: ' $'
    },
    {
        name: 'Пицца ',
        value: 5,
        currency: ' $'
    },
    {
        name: 'Роллы ',
        value: 12,
        currency: ' $'
    },
    {
        name: 'Роллы ',
        value: 6,
        currency: ' $'
    },
    {
        name: 'Роллы ',
        value: 18,
        currency: ' $'
    }
];
    let div = '<div style="margin: 2vh 2vw; display: inline-block">';

    let br = '<br />';
    let sort = 'Сортировать: <br />';
    let sort2 = '<a href = "index.html" style="color:black; text-decoration: none"><input type="radio" name="change">По возрастанию</a>';
    let sort3 = '<input type="radio" name="change">По убыванию<br />';

    let img = '<img style="height:20vh" src="img/burger.jpg">';
    let img2 = '<img style="height:20vh" src="img/burger2.png">';
    let img3 = '<img style="height:20vh" src="img/pizza.jpg">';
    let img4 = '<img style="height:20vh" src="img/pizza2.jpg">';
    let img5 = '<img style="height:20vh" src="img/roll.jpg">';
    let img6 = '<img style="height:20vh" src="img/roll2.jpg">';
    let img7 = '<img style="height:20vh" src="img/roll3.jpg">';

    let div2 = '</div>';
    
function ascending() {
    products.sort(function (a, b) {
        if (a.value > b.value) {
            return 1;
        }
    });
    //sorter top menu
    document.write(sort);
    document.write(sort2);
    document.write(sort3);
    //first item
    document.write(div);
    document.write(img);
    document.write(br);
    document.write(products[0].name);        
    document.write(products[0].value);
    document.write(products[0].currency);
    document.write(div2);
    //second item
    document.write(div);
    document.write(img2);
    document.write(br);
    document.write(products[1].name);        
    document.write(products[1].value); 
    document.write(products[1].currency);
    document.write(div2);
    //third item
    document.write(div);
    document.write(img3);
    document.write(br);
    document.write(products[2].name);        
    document.write(products[2].value); 
    document.write(products[2].currency);
    document.write(div2);
    //forth item
    document.write(div);
    document.write(img4);
    document.write(br);
    document.write(products[3].name);        
    document.write(products[3].value); 
    document.write(products[3].currency);
    document.write(div2);
    //fiveth item
    document.write(div);
    document.write(img5);
    document.write(br);
    document.write(products[4].name);        
    document.write(products[4].value); 
    document.write(products[4].currency);
    document.write(div2);
    //sixth item
    document.write(div);
    document.write(img6);
    document.write(br);
    document.write(products[5].name);        
    document.write(products[5].value); 
    document.write(products[5].currency);
    document.write(div2);
    //seventh item
    document.write(div);
    document.write(img7);
    document.write(br);
    document.write(products[6].name);        
    document.write(products[6].value); 
    document.write(products[6].currency);
    document.write(div2);
}
function descending(){
    products.sort(function (a, b) {
        return b.value - a.value 
    });
    //sorter top menu
    document.write(sort);
    document.write(sort2);
    document.write(sort3);
    //first item
    document.write(div);
    document.write(img);
    document.write(br);
    document.write(products[0].name);        
    document.write(products[0].value); 
    document.write(products[0].currency);
    document.write(div2);
    //second item
    document.write(div);
    document.write(img2);
    document.write(br);
    document.write(products[1].name);        
    document.write(products[1].value); 
    document.write(products[1].currency);
    document.write(div2);
    //third item
    document.write(div);
    document.write(img3);
    document.write(br);
    document.write(products[2].name);        
    document.write(products[2].value); 
    document.write(products[2].currency);
    document.write(div2);
    //forth item
    document.write(div);
    document.write(img4);
    document.write(br);
    document.write(products[3].name);        
    document.write(products[3].value); 
    document.write(products[3].currency);
    document.write(div2);
    //fiveth item
    document.write(div);
    document.write(img5);
    document.write(br);
    document.write(products[4].name);        
    document.write(products[4].value); 
    document.write(products[4].currency);
    document.write(div2);
    //sixth item
    document.write(div);
    document.write(img6);
    document.write(br);
    document.write(products[5].name);        
    document.write(products[5].value); 
    document.write(products[5].currency);
    document.write(div2);
    //seventh item
    document.write(div);
    document.write(img7);
    document.write(br);
    document.write(products[6].name);        
    document.write(products[6].value); 
    document.write(products[6].currency);
    document.write(div2);
}
function burger() {
    //sorter top menu
    document.write(sort);
    document.write(sort2);
    document.write(sort3);
    //first item
    document.write(div);
    document.write(img);
    document.write(br);
    document.write(products[0].name);        
    document.write(products[0].value); 
    document.write(products[0].currency);
    document.write(div2);
    //second item
    document.write(div);
    document.write(img2);
    document.write(br);
    document.write(products[1].name);        
    document.write(products[1].value); 
    document.write(products[1].currency);
    document.write(div2);
}
function pizza() {
    //sorter top menu
    document.write(sort);
    document.write(sort2);
    document.write(sort3);
    //third item
    document.write(div);
    document.write(img3);
    document.write(br);
    document.write(products[2].name);        
    document.write(products[2].value); 
    document.write(products[2].currency);
    document.write(div2);
    //forth item
    document.write(div);
    document.write(img4);
    document.write(br);
    document.write(products[3].name);        
    document.write(products[3].value); 
    document.write(products[3].currency);
    document.write(div2);
}
function rolls() {
    //sorter top menu
    document.write(sort);
    document.write(sort2);
    document.write(sort3);
    //fiveth item
    document.write(div);
    document.write(img5);
    document.write(br);
    document.write(products[4].name);        
    document.write(products[4].value); 
    document.write(products[4].currency);
    document.write(div2);
    //sixth item
    document.write(div);
    document.write(img6);
    document.write(br);
    document.write(products[5].name);        
    document.write(products[5].value); 
    document.write(products[5].currency);
    document.write(div2);
    //seventh item
    document.write(div);
    document.write(img7);
    document.write(br);
    document.write(products[6].name);        
    document.write(products[6].value); 
    document.write(products[6].currency);
    document.write(div2);
}