function ShowAlert() {
    let basket = JSON.parse(localStorage.getItem('products'));

    if(basket.length === 0) {
        document.querySelector('.empty-cart').classList.remove('d-none')
        document.querySelector('.table').classList.add('d-none')
    }
    else{
        document.querySelector('.empty-cart').classList.add('d-none')
        document.querySelector('.table').classList.remove('d-none')
    }
}


ShowAlert();


function GetList() {
    let basket = JSON.parse(localStorage.getItem('products'));
    let total = document.getElementById('hed')
    let sum = 0;
    let row = '';
    basket.forEach(pr => {
        let int_price = pr.Price.slice(-(pr.Price.length),-4);
        row += `
            <tr>
                <th scope="row">${pr.Id}</th>
                <td class="img-td">
                    <img src=${pr.Image} alt="">
                </td>
                <td>${pr.Name.length > 10 ? pr.Name.slice(0,20) + "..." : pr.Name}</td>
                <td>
                    <input id="inp_num" onchange="CountGet()" type="number" value=${pr.Count}>
                </td>
                <td>
                        <span  class="text-success fw-bold sum">${int_price * pr.Count} AZN</span>
                </td>
                <td>
                ${int_price > 100 ? `<span class="text-danger fw-bold">${int_price} AZN</span>` : `<span id="prod_price" class="text-success fw-bold">${int_price} AZN</span>`}
                </td>

            </tr>
        `
        
       
        
    })
if (sum > 0) {
    total.innerHTML = `Toplam : ${sum} AZN`;
}else{
    total.style.display = "none";
            
}
document.getElementById('tbdy').innerHTML = row;

}

GetList()

// function CountGet(){
// let prod_count =document.getElementById('prod_price');
// let basket = JSON.parse(localStorage.getItem('products'));
// count=document.getElementById("inp_num").value;

// let x =0;
// let t =0;

// for(const i of basket){
//     if(x< basket.length){
//         int_price =basket[x].Price.slice(-(basket[x].Price.length),-4)
//         basket[x].Count=i.value;
//         int_price=int_price*i.value;
//         }
       
    
// }

// }

// function CountGet(){
//     let prod_count =document.getElementById('prod_price');
//     let basket = JSON.parse(localStorage.getItem('products'));
//     let count=document.getElementById("inp_num").value;
//     let total = document.getElementById('hed')
//     let total_sum = 0;
//     let x = 0;
//     let t = 0;
    
//     for (const i of count) {
//         if (x < basket.length) {
//             int_price = basket[x].Price.slice(-(basket[x].Price.length),-4)
//             basket[x].Count = i.value;
//             int_price = int_price * i.value;
//             total_sum += +int_price;
//             if(t < total.length){
//                 total[t].innerHTML = int_price.toFixed(2) + " AZN"
//             }
//             t++
            
            
//         }
//         x++
//     }
//     if (total_sum > 0) {
//         total.innerHTML = `Toplam : ${total_sum.toFixed(2)} AZN`
//     }

//     localStorage.setItem('products',JSON.stringify(basket))
    
//     }

// GetList();

function CountGet(){
let prod_count =document.getElementById('prod_price');
let basket = JSON.parse(localStorage.getItem('products'));
count=document.getElementById("inp_num").value;

for(const pr of basket){
    
        int_price = pr.Price.slice(-(pr.Price.length),-4);
        int_price=count*int_price;
        prod_count.innerHTML =int_price + "AZN";
        console.log(int_price);
    
    
}

}

