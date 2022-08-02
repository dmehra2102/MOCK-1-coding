import  {country_data}  from "./country-region-data/data.js";

const cancel = document.querySelector(".span-canacel-img");
const countries_conatiner_div = document.querySelector(".countries-container-div");
const  input_word = document.querySelector("[data-search");
var filtered_data = [];


cancel.addEventListener("click", ()=> {
	console.log("remove");
	document.getElementById('sketchpad-post').value='';
	filtered_data = [];
})


input_word.addEventListener("input", (e)=> {
	var word = e.target.value;
	filtered_data = country_data.filter((item)=> {
		return item.countryName.toLowerCase().includes(word.toLowerCase());
	})
	console.log(filtered_data)
	filtered_data.forEach((item)=> {
		const card_div = document.createElement("div");
		card_div.setAttribute("class","hide")
		card_div.setAttribute("class","single-country-card");
		card_div.classList.toggle("hide", !word)
		const para_tag = document.createElement("p");
		para_tag.setAttribute("class","country-name-para")
		para_tag.textContent = item.countryName;
		card_div.append(para_tag);
		countries_conatiner_div.append(card_div);
	})
	filtered_data = [];
})

// we mapping through searched countries using forEach




