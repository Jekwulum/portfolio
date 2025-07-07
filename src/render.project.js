const projects = [
  {
    name: "Fleet Management App",
    image: "img/fleet-dashboard.png",
    description: "A dashboard for managing vehicle fleets with real-time tracking.",
    tags: ["React", "Node.js", "PostgreSQL", "TailwindCSS"],
    links: {
      frontend: "https://github.com/Jekwulum/Fleet-Management-App",
      backend: "https://github.com/Jekwulum/Fleet-management-API"
    }
  },
  {
    name: "Quiz App",
    image: "img/kwiz-app.png",
    description: "An interactive quiz application with score tracking.",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    links: {
      frontend: "https://github.com/Jekwulum/Kwiz-App",
      backend: "https://github.com/Jekwulum/Kwiz-API"
    }
  },
  {
    name: "School Management App",
    image: "img/school.svg",
    description: "A system for managing student records and classes.",
    tags: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    links: {
      frontend: "https://github.com/Jekwulum/school-mgt-frontend",
      backend: "https://github.com/Jekwulum/school-mgt-backend"
    }
  }
];

// renderProjects.js
function renderProjects() {
  const projectsContainer = document.createElement("div");
  projectsContainer.className = "";

  // Split projects into rows of 2
  for (let i = 0; i < projects.length; i += 2) {
    const row = document.createElement("div");
    row.className = "flex flex-col items-center justify-center w-full gap-2 md:flex-row" +
      (i > 0 ? " mt-2" : "");

    // Render each project in the row
    [projects[i], projects[i + 1]].forEach((project, idx) => {
      if (!project) return; // Skip if odd number of projects

      const projectDiv = document.createElement("div");
      projectDiv.className = "w-full m-1 rounded-lg h-72 md:w-1/2 hover:cursor-pointer hover-div";

      projectDiv.innerHTML = `
        <img src="${project.image}" alt="${project.name}" class="h-full w-full rounded-lg">
        <div class="text-div bg-opacity-20 relative bottom-28 p-2 transition transform ease-in-out duration-500">
          <h1 class="text-xl font-bold">${project.name}</h1>
          <p class="text-sm my-1">${project.description}</p>
          <div class="flex gap-2 flex-wrap">
            ${project.tags.map(tag => `
              <button class="bg-button-light w-auto px-2 h-7 text-xs rounded-md m-[1px]">
                ${tag}
              </button>
            `).join("")}
          </div>
          <div class="mt-2 flex gap-2">
            ${project.links.frontend ? `
              <a href="${project.links.frontend}" target="_blank">
                <button class="bg-black text-white hover:text-black hover:bg-button-light w-32 h-7 text-xs rounded-md flex gap-2 items-center justify-center">
                  <i class="zmdi zmdi-github"></i>
                  <p>Frontend code</p>
                </button>
              </a>
            ` : ""}
            ${project.links.backend ? `
              <a href="${project.links.backend}" target="_blank">
                <button class="bg-black text-white hover:text-black hover:bg-button-light w-32 h-7 text-xs rounded-md flex gap-2 items-center justify-center">
                  <i class="zmdi zmdi-github"></i>
                  <p>Backend code</p>
                </button>
              </a>
            ` : ""}
          </div>
        </div>
      `;

      row.appendChild(projectDiv);
    });

    projectsContainer.appendChild(row);
  }

  return projectsContainer;
}

// Export for use in other files
export { renderProjects };