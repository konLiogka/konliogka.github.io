//SMOOTH ANCHOR SCROLLING
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//SCROLL TO TOP WHEN RESIZED
window.addEventListener('resize', function () {
  window.scrollTo(0, 0);
});

//FAKE TERMINAL
const input = document.querySelector(".input");
const commandSpan = document.querySelector(".command");
const output = document.querySelector(".output");

input.focus();
input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const command = input.value.trim();
    if (command) {
      addOutput(command);
      input.value = "";
    }
  }
});

const directories = {
  "~": ["Music", "Docs"],
  Music: "",
  Docs: "",
};

const directoryContent = {
  "~": ["Music", "Docs"],
  Music: [
    "Alcest",
    "Arctic Monkeys",
    "Behemoth",
    "Be'lakor",
    "CASIOPEA",
    "Crumb",
    "Death",
    "Dream Theater",
    "Gorillaz",
    "Gojira",
    "Grouper",
    "Horse Lords",
    "Index ID",
    "Jinsang",
    "Kikagaku Moyo",
    "KGLW",
    "Lazy Aftershow",
    "Levitation Room",
    "Linkin Park",
    "Mastodon",
    "Mogwai",
    "Molchat Doma",
    "Mystic Braves",
    "Nirvana",
    "Nujabes",
    "Opeth",
    "Pink Floyd",
    "Ploho",
    "Radiohead",
    "Rolling Stones",
    "Rotting Christ",
    "Slowdive",
    "Soundgarden",
    "SOAD",
    "The Murlocs",
    "Tool",
    "VIC"
  ],
  Docs: ["pws_pernaw_diktya.pdf", "exams.txt"],
};
let curDir = "~";
let curDirContent = directoryContent[curDir];
let curDirDirs = directories[curDir];

const files = {
  "pws_pernaw_diktya.pdf": "Thysia ston mega Cthulu",
  "exams.txt": `
  ⢀⡴⠑⡄⠀⠀⠀⠀⠀⠀⠀⣀⣀⣤⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
  ⠸⡇⠀⠿⡀⠀⠀⠀⣀⡴⢿⣿⣿⣿⣿⣿⣿⣿⣷⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠑⢄⣠⠾⠁⣀⣄⡈⠙⣿⣿⣿⣿⣿⣿⣿⣿⣆⠀⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⢀⡀⠁⠀⠀⠈⠙⠛⠂⠈⣿⣿⣿⣿⣿⠿⡿⢿⣆⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⢀⡾⣁⣀⠀⠴⠂⠙⣗⡀⠀⢻⣿⣿⠭⢤⣴⣦⣤⣹⠀⠀⠀⢀⢴⣶⣆ 
  ⠀⠀⢀⣾⣿⣿⣿⣷⣮⣽⣾⣿⣥⣴⣿⣿⡿⢂⠔⢚⡿⢿⣿⣦⣴⣾⠁⠸⣼⡿ 
  ⠀⢀⡞⠁⠙⠻⠿⠟⠉⠀⠛⢹⣿⣿⣿⣿⣿⣌⢤⣼⣿⣾⣿⡟⠉⠀⠀⠀⠀⠀ 
  ⠀⣾⣷⣶⠇⠀⠀⣤⣄⣀⡀⠈⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
  ⠀⠉⠈⠉⠀⠀⢦⡈⢻⣿⣿⣿⣶⣶⣶⣶⣤⣽⡹⣿⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⠀⠉⠲⣽⡻⢿⣿⣿⣿⣿⣿⣿⣷⣜⣿⣿⣿⡇⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⣿⣷⣶⣮⣭⣽⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⣀⣀⣈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀ 
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠛⠻⠿⠿⠿⠿⠛⠉
     `,
};

var prompt = document.getElementById("prompt");

function addOutput(command) {
  const commandLine = document.createElement("div");
  commandLine.classList.add("line");

  const commandSpan = document.createElement("span");
  commandSpan.textContent = `[kliogka@archlinux ${curDir}]$`;

  const commandText = document.createElement("span");
  commandText.classList.add("command");
  commandText.textContent = command;
  commandLine.appendChild(commandSpan);
  commandLine.appendChild(commandText);
  output.appendChild(commandLine);

  const result = onCommand(command);
  const resultLines = result.split("\n");
  resultLines.forEach((line) => {
    const resultLine = document.createElement("div");
    resultLine.classList.add("line");
    resultLine.textContent = line;
    output.appendChild(resultLine);
  });

  if (command.includes("cd")) {
    prompt.textContent = `[kliogka@archlinux ${curDir}]$`;
  }

  output.scrollTop = output.scrollHeight;
}

function onCommand(command) {
  const [cmd, arg = '~'] = command.split(' ');
  const argDirs = arg.includes('/') ? arg.split('/') : null;
  const isValidDir = (dirs) => dirs.every(dir => dir === '.' || directories[curDir].includes(dir));
  
  switch (cmd) {
    case "help":
      return `List of available commands:\n\n
      •help: Shows commands.\n
      •ls [dir]: List directories & folders.\n
      •cd [dir]: Go to dir.\n
      •cat [file]: Show file content.\n
      You can use either absolute or relative paths.
      You can use '.' and '~' but not root directory as there's only home`;

    case "ls":
      let targetDir = arg === '~' || arg === '.' ? curDir : arg;
      if (argDirs && isValidDir(argDirs)) targetDir = argDirs[argDirs.length - 1];
      return directoryContent[targetDir] ? directoryContent[targetDir].join("\n") : `ls: cannot access '${arg}': No such directory`;

    case "cd":
      if (argDirs && isValidDir(argDirs)) {
        curDir = argDirs[argDirs.length - 1];
      } else if (directories[curDir].includes(arg) || arg === '~' || arg === '.' || arg === './' || arg === '/'  ) {
        curDir = arg;
      } else {
        return `bash: cd: ${arg}: No such directory`;
      }
      curDirDirs = directories[curDir];
      curDirContent = directoryContent[curDir];
      return '';

    case "cat":
      if (argDirs && isValidDir(argDirs.slice(0, -1))) {
        let [fileDir, file] = [argDirs[argDirs.length - 2], argDirs[argDirs.length - 1]];
        return directoryContent[fileDir].includes(file) ? (file.includes('.') ? files[file] : `cat: ${file}: is a directory`) : `cat: ${arg}: No such file or directory`;
      } else if (curDirContent.includes(arg)) {
        return files[arg];
      } else {
        return `cat: ${arg}: No such file or directory`;
      }

    default:
      return "Wrong command!";
  }
}


//CYCLE TEXT THROUGH SET COLORS
document.addEventListener('DOMContentLoaded', function () {
  const words = document.querySelectorAll('p span');
  const colors = ['color-red', 'color-yellow', 'color-blue', 'color-purple'];
  let colorIndex = 0;

  words.forEach(word => {
    word.classList.add(colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
  });
 
});

 
const links = document.querySelectorAll('.blog ul li a');

links.forEach((link, index) => {
  link.addEventListener('mouseover', function () {
    switch (index % 4) { 
 
      case 0:
        link.style.color = '#ff206e'; // $red
        break;
      case 1:
        link.style.color = '#ffcb47'; // $yellow
        break;
      case 2:
        link.style.color = '#5dd9c1'; // $blue
        break;
      case 3:
        link.style.color = '#8d86c9'; // $purple
        break;
      default:
        link.style.color = ''; 
        break;
    }
  });

  link.addEventListener('mouseout', function () {
    link.style.color = ''; 
  });
});