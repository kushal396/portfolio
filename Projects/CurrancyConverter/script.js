

const displayDate = async()=>{
let fordateAtStart = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json'
let fordate = await fetch(fordateAtStart);
let data = await fordate.json();
let datemesg = document.querySelector('.on_which_date_mesg p');
let unproperDate = data['date'].split('');
let Date = `${unproperDate[8]}${unproperDate[9]}/${unproperDate[5]}${unproperDate[6]}/${unproperDate[0]}${unproperDate[1]}${unproperDate[2]}${unproperDate[3]}`;
datemesg.innerHTML = 'Based on the exchange rate on '+ Date; 

}

displayDate();

// reset button

const resetbtn = document.getElementById('reset-btn');
const disabled = document.getElementById('disabled');

resetbtn.addEventListener('click', () => {
    window.location.reload();
    let input = document.querySelector('.img-and-input input');
    input.value = '1';
    disabled.value = '';
});
// reset button


// set DropDown 

const dropDowns = document.querySelectorAll('.countryDropDown select');

dropDowns.forEach(select => {

    for (codes in countryList) {
        let newOption = document.createElement('option');
        newOption.innerText = codes
        newOption.value = codes;

        if (select.name === 'from' && codes === 'USD') {
            newOption.selected = 'selected'

        } else if (select.name === 'to' && codes === 'INR') {
            newOption.selected = 'selected'
        }
        select.append(newOption)

    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
        
    })
});

// set imgs

const updateFlag = (element) => {
    let countryCode = countryList[element.value];
    let imgURL = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.parentElement.querySelector(".img-and-input img");
    img.src = imgURL;
    // console.log(element.value);
};


// convert btn

let fromCurr = document.querySelector("#from");
let toCurr = document.querySelector("#to");
const BaseURL = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies'

const convert = document.getElementById('convert-btn');

convert.addEventListener('click', async (evt) => {
    evt.preventDefault();
    let input = document.querySelector('.img-and-input input');
    let amount = input.value;
    if (amount === "" || amount < 1) {
        input.value = '1';
        return;
    }
    let URL = `${BaseURL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
    disabled.value = (rate * amount).toFixed(2);

    let datemesg = document.querySelector('.on_which_date_mesg p');
    let unproperDate = data['date'].split('');
let Date = `${unproperDate[8]}${unproperDate[9]}/${unproperDate[5]}${unproperDate[6]}/${unproperDate[0]}${unproperDate[1]}${unproperDate[2]}${unproperDate[3]}`;
datemesg.innerHTML = 'Based on the exchange rate on '+ Date; 

});

// swipe funtion

const swipebtn = document.querySelector('.selecter i');
// let temp = fromCurr.value
// let temp2 = toCurr.value
swipebtn.addEventListener('click',()=>{
    const temp = fromCurr.value;

    fromCurr.value=toCurr.value;
    toCurr.value=temp;
    updateFlag(fromCurr)
    updateFlag(toCurr);
    
    let input = document.querySelector('.img-and-input input');
    input.value = '1';
    disabled.value = '';
})



