let catArray = ['Andy', 'Bob', 'Tom'];
const catList = document.getElementById('cat-list');
const catName = document.getElementById('cat');
const catImg = document.getElementById('cat-img');
//console.log(catImg);
const result = document.getElementById('result')


for (let i = 0; i < catArray.length; i++) {

	let cat = catArray[i];

	let cats = document.createElement('div');
	//console.log(cat);
	cats.textContent = cat;

	cats.addEventListener('click', (function(catCopy) {
		
		return function() {
			catName.textContent = catCopy;
			let j=0;
			//const catImg = document.getElementById('cat-img');
			if (catCopy == 'Andy') {
				catImg.innerHTML='<img src="img/cat1.jpg">';
				catName.appendChild(catImg);
				result.innerHTML = '';
				catName.addEventListener('click', function() {
					//j = 0;
					j++;
					document.getElementById('result').innerHTML = j;
					
				});
				
			}

			if (catCopy == 'Bob') {
				catImg.innerHTML='<img src="img/cat2.jpg">';
				catName.appendChild(catImg);
				result.innerHTML = '';
				catName.addEventListener('click', function() {
					
					j++;
					document.getElementById('result').innerHTML = j;
					
				});
				
			}


			if (catCopy == 'Tom') {
				catImg.innerHTML='<img src="img/cat3.jpg">';
				catName.appendChild(catImg);
				result.innerHTML = '';
				catName.addEventListener('click', function() {
				
					j++;
					document.getElementById('result').innerHTML = j;

				});
				
			}


		};	
	})(cat));
		
	//console.log(catList);

	 catList.appendChild(cats);

}



/*var cat1 = document.getElementById('cat1');
var cat2 = document.getElementById('cat2');

let i = 0;
let j = 0;

cat1.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  
  i++;

  document.getElementById('result1').innerHTML = i;

}, false);

cat2.addEventListener('click', function(){
  //the element has been clicked... do stuff here
  
  j++;

  document.getElementById('result2').innerHTML = j;

}, false);
*/

