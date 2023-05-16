// Add your code here

// Create the container element
const container = document.createElement("section");
container.classList.add("container");

// Create the heading element
const heading = document.createElement("h1");
heading.textContent = "01 - Hello";

// Create the image element
const image = document.createElement("img");
image.classList.add("img", "rounded-corners");
image.src = "../images/Photograph_of_Upasana.png";
image.alt = "Casual photograph of Upasana Chaudhari";
image.width = "200";

// Create the paragraph element
const paragraph = document.createElement("p");
paragraph.classList.add("bio");
paragraph.innerHTML = `My name is Upasana Chaudhari. I am a graduate student pursuing MS in Computer Science. Previously,
   I was working as an Analyst in Data Science at Novartis, India for 3 and a half years. I also hold a masters  degree in computer science and engineering specialization in big data analytics and a bachelor's degree in Information technology from India.`;

// Append the elements to the container
container.appendChild(heading);
let imageContainer = document.createElement("div");
imageContainer.appendChild(image);

container.appendChild(imageContainer);
imageContainer.style.textAlign = "center";
container.appendChild(paragraph);

document.body.appendChild(container);
image.style.borderRadius = "50%";
image.style.alignContent = "center";

paragraph.style.width = "300px";
paragraph.style.alignContent = "center";

// Apply styles to the first line of the paragraph using JavaScript
//const firstLine = paragraph.firstChild;
const firstLine = paragraph.innerText.split(".")[0];
const remainingText = paragraph.innerText.slice(firstLine.length);
paragraph.innerHTML = `<span id="boldText"> ${firstLine}</span>${remainingText}`;
document.getElementById("boldText").style.fontWeight = "bold";

// Center all elements on the page using CSS
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
