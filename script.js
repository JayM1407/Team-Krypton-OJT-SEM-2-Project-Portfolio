let myTeam = [

  { name: "Yashraj Dhakad", img: "images/Yashraj-picture-project.png", link: "https://github.com/yashrajdhakad0-ship-it" },
  { name: "Rushikesh Kamble", img: "images/Rushikesh-picture-project.png", link: "https://github.com/kamblerushikesh07-cmyk" },
  { name: "Ayush Karanjiya", img: "images/Ayush-picture-project.png", link: "https://github.com/Ayush-Karanjiya" },
  { name: "Jay Mehta", img: "images/Jay-picture-proect.png", link: "https://github.com/JayM1407" }
];

let myProjects = [

  { title: "Quiz App", img: "images/quiz-pic.png", desc: "State logic tracking.", live: "https://kamblerushikesh07-cmyk.github.io/Quiz/", repo: "https://github.com/kamblerushikesh07-cmyk/Quiz" },

  { title: "Expense Tracker", img: "images/expense-pic.png", desc: "CRUD and local storage.", live: "https://yashrajdhakad0-ship-it.github.io/Exp_Tracker/", repo: "https://github.com/yashrajdhakad0-ship-it/Exp_Tracker" },

  { title: "Live News Feed", img: "images/news-pic.png", desc: "API fetch and parse.", live: "https://ayush-karanjiya.github.io/live-news-feed/", repo: "https://github.com/Ayush-Karanjiya/live-news-feed" },

  { title: "GitHub Explorer", img: "images/github-pic.png", desc: "Multi-endpoint API.", live: "https://yashrajdhakad0-ship-it.github.io/GitHub-Developer-Explorer/", repo: "https://github.com/yashrajdhakad0-ship-it/GitHub-Developer-Explorer" },

  { title: "Kanban Board", img: "images/taskboard-pic.png", desc: "Drag and Drop state.", live: "https://kamblerushikesh07-cmyk.github.io/Kanban/", repo: "https://github.com/kamblerushikesh07-cmyk/Kanban" }
];

let teamBox = document.getElementById("team-box");
let projectBox = document.getElementById("project-box");

// Loop to render team with AVATAR images
for (let i = 0; i < myTeam.length; i++) {
  teamBox.innerHTML += `
    <div class="card">
      <img src="${myTeam[i].img}" alt="${myTeam[i].name} Photo" class="avatar-img">
      <h3>${myTeam[i].name}</h3>
      <a href="${myTeam[i].link}" target="_blank" class="card-btn">GitHub Profile</a>
    </div>
  `;
}

for (let i = 0; i < myProjects.length; i++) {
  projectBox.innerHTML += `
    <div class="card">
      <img src="${myProjects[i].img}" alt="${myProjects[i].title}" class="project-img">
      <h3>${myProjects[i].title}</h3>
      <p>${myProjects[i].desc}</p>
      <a href="${myProjects[i].live}" target="_blank" class="card-btn">Live Site</a>
      <a href="${myProjects[i].repo}" target="_blank" class="card-btn" style="background-color: #64748b;">Code</a>
    </div>
  `;
}

// Dark Mode Logic
let themeBtn = document.getElementById("dark-mode-btn");
let bodyElement = document.getElementById("main-body");

if (localStorage.getItem("theme") === "dark") {
  bodyElement.classList.add("dark-mode");
}

themeBtn.addEventListener("click", function() {
  bodyElement.classList.toggle("dark-mode");
  
  if (bodyElement.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

// Form Validation Logic
let form = document.getElementById("my-form");
let errorMsg = document.getElementById("error-msg");

form.addEventListener("submit", function(event) {
  event.preventDefault();
  
  let emailInput = document.getElementById("userEmail").value;
  
  if (emailInput.indexOf("@") === -1 || emailInput.indexOf(".") === -1) {
    errorMsg.style.color = "#ef4444"; 
    errorMsg.innerText = "Error: Please enter a valid email address.";
  } else {
    errorMsg.style.color = "#10b981"; 
    errorMsg.innerText = "Success! Message sent.";
    form.reset(); 
  }
});