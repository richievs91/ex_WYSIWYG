// Create an array of objects that represents famous people

var person1 = {
  title: "Civil Rights Activist",
  name: "Martin Luther King Jr",
  bio: "Was an American Baptist minister and activist who was a leader in the African-American Civil Rights Movement. He is best known for his role in the advancement of civil rights using nonviolent civil disobedience based on his Christian beliefs.",
  image: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTE5NTU2MzE2MjgwNDg5NDgz.jpg",
  lifespan: {
    birth: 1929,
    death: 1968
  }
}


 var person2 = {
  title: "President",
  name: "George Washington",
  bio: "Was the first and only nonpartisan President of the United States (1789–97), the Commander-in-Chief of the Continental Army during the American Revolutionary War, and one of the Founding Fathers of the United States. He presided over the convention that drafted the United States Constitution and was called the 'father of his country' during his lifetime.",
  image: "http://a2.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjM0MDA1MzkwODYw.jpg",
  lifespan: {
    birth: 1732,
    death: 1779
  }
}


var person3 = {
  title: "Composer",
  name: "Wolfgang Amadeus Mozart",
  bio: "Prolific and influential composer of the Classical era. Born in Salzburg, Mozart showed prodigious ability from his earliest childhood. Already competent on keyboard and violin, he composed from the age of five and performed before European royalty.",
  image: "https://media1.britannica.com/eb-media/50/152550-004-669D4462.jpg",
  lifespan: {
    birth: 1756,
    death: 1791
  }
}


var person4 = {
  title: "President",
  name: "Ulysses S Grant",
  bio: "Was the 18th President of the United States (1869–77). As Commanding General of the United States Army (1864–69), Grant worked closely with President Abraham Lincoln to lead the Union Army to victory over the Confederacy in the American Civil War.",
  image: "http://www.americaslibrary.gov/assets/jb/nation/jb_nation_grant_1_m.jpg",
  lifespan: {
    birth: 1822,
    death: 1885
  }
}

let mainArr = [person1, person2, person3, person4]


let input = document.getElementById("input");
let output = document.getElementById("output");

// Create a DOM element for each of the objects inside the container. Style your person elements however you like.

mainArr.forEach(function(currentvalue, index) {
	let cardDiv = document.createElement("div");

	let person = `<div id="cards-${index}" class="cards"><h3>${currentvalue.title}</h3>
				   <h3>${currentvalue.name}</h3>
				   <section><p id="bio">${currentvalue.bio}</p>
				   <p><img src='${currentvalue.image}' id="images"></p></section>
				   <footer><h4>${currentvalue.lifespan.birth} - ${currentvalue.lifespan.death}</h4></footer></div>`		

	cardDiv.innerHTML = person;
	// console.log("person", person);
	output.appendChild(cardDiv);

	document.getElementById(`cards-${index}`).addEventListener("click", function() {
		document.getElementById(`cards-${index}`).classList.toggle("dotted");
		document.getElementById("input").focus();
		edit();
	})
  	function edit () {
  		input.addEventListener("keyup", function() {
  			document.getElementById("bio").innerHTML = document.getElementById("input").value;
  		})
  	}
});















