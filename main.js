

const select = document.querySelectorAll('select')
const input = document.querySelectorAll('input')
const api_url = "http://api.exchangeratesapi.io/v1/latest?access_key=56afbeef78f6c60490594f7323efde61"
let html = '';

async function currency(){
  let res = await fetch(api_url)
  let data = await res.json()
  const arrKeys = Object.keys(data.rates)
  const rates = data.rates
  console.log(rates)
  // console.log(arrKeys)
  arrKeys.map(item => {
    return html += `<option value="${item}">${item}</option>`
  })
  for(let i = 0;i<select.length;i++){
    select[i].innerHTML = html
  }

  input[0].addEventListener('keyup',()=>{
    input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value]
  })

  input[1].addEventListener('keyup',()=>{
    input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value]
  })

  select[0].addEventListener('change',()=>{
    input[1].value = input[0].value * rates[select[1].value] / rates[select[0].value]
  })

  select[1].addEventListener('change',()=>{
    input[0].value = input[1].value * rates[select[0].value] / rates[select[1].value]
  })

}

currency()