let entryPrice = document.querySelector('#entryPrice');
let anticipatedPrice = document.querySelector('#anticipatedPrice');
let stopPrice = document.querySelector('#stopPrice');
let percentage = document.querySelector('#percentage');
let button = document.querySelector('button')
let tbody = document.querySelector('tbody')
let table = document.querySelector('table')
let p = document.querySelectorAll('tbody tr')

// //進場價格
// let entryPrice = 21;
// //預期獲利價格
// let anticipatedPrice = 24;
// //停損價格設定
// let stopPrice = 20;
// //報酬風險比率
// // riskReturnRate
// //折返停利設定趴數
// let percentage = 0.3;
// //獲利離場時機
// // exitPrice


function count() {
    tbody.innerHTML = ''
    for (let i = 0; i < 10; i++) {
        let riskReturnRate = ((parseInt(anticipatedPrice.value) + i - parseInt(entryPrice.value)) / (parseInt(entryPrice.value) - parseInt(stopPrice.value))).toFixed(3)
        let exitPrice = (parseInt(anticipatedPrice.value) + i - (riskReturnRate * ((parseInt(percentage.value) / 100) - (i * 0.05)))).toFixed(3)
        let tr = document.createElement('tr')
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
        let td4 = document.createElement('td')
        td1.innerHTML = parseInt(anticipatedPrice.value) + i;
        td2.innerHTML = `${((parseInt(percentage.value) / 100) - (i * 0.05)).toFixed(3)} %`
        td3.innerHTML = riskReturnRate
        td4.innerHTML = exitPrice
        td4.style.fontWeight = 'bold'
        tr.appendChild(td1)
        tr.appendChild(td2)
        tr.appendChild(td3)
        tr.appendChild(td4)
        tbody.appendChild(tr)

        if (exitPrice < parseInt(anticipatedPrice.value) + i) {
            td4.style.color = 'red'
        } else {
            td4.style.color = 'green'
        }

        if (((parseInt(percentage.value) / 100) - (i * 0.05)).toFixed(3) <= 0) {
            td2.style.color = 'green'
        } else {
            td2.style.color = 'red'
        }
    }


}




button.addEventListener('click', count)