const projects = [
  
  {
    name: 'Plumbit',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751883000/portfolio/Plumbit_cpzliq.png',
    description: 'Microservice-based API with reservation, notification and inventory capabilities.',
    link: 'https://github.com/Jekwulum/Plumbit',
    stacks: ['Python', 'gRPC', 'PostgreSQL', 'Flask', 'Node.js', 'Typescript', 'Express']
  },
  {
    name: 'Diskuss',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751882521/portfolio/diskuss_s27imh.png',
    description: 'A real-time chat application using Python, Socket.IO, Flask, and MongoDB.',
    link: 'https://github.com/Jekwulum/diskuss',
    stacks: ['Python', 'Socket.IO', 'MongoDB', 'Flask', 'React.js']
  },
  {
    name: 'Shopper',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751882675/portfolio/shopper.drawio_ql8uci.png',
    description: 'An e-commerce microservice-based API leveraging gRPC for efficient service-to-service communication.',
    link: 'https://yourportfolio.netlify.app',
    stacks: ['Python', 'gRPC', 'PostgreSQL', 'Flask', 'Node.js', 'Typescript', 'Express']
  },
  {
    name: 'Game Data Notifictaion System',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751883291/portfolio/08_terraform_automating_game_day_notification.drawio_588947aa_1_d6vftz.gif',
    description: 'Automates fetching sports updates from a sports API, processes the data, and sends email notifications to emails using Azure services.',
    link: 'https://github.com/Jekwulum/08_terraform_automating_game_day_notification',
    stacks: ['Azure Cloud', 'Python', 'Terraform', 'Azure-Functions', 'Azure-Blob Storage', 'Azure-Eventgrid']
  },
  {
    name: 'Game Highlight Processor',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751884802/portfolio/06_terraform__azure_highlight_processor.drawio.drawio_yxrze7.png',
    description: 'This project uses RapidAPI to obtain NCAA game highlights, stores the json file in an Azure Blob and then parses the json file for a video url and downloads the video to the same Azure Storage Blob. The resources on Azure are provisioned using the IaC (Infrastructure-as-Code) tool "terraform".',
    link: 'https://github.com/Jekwulum/06_terraform_azure_highlight_processor',
    stacks: ['Azure Cloud', 'Python', 'Terraform', 'Azure-Blob Storage']
  },
  {
    name: 'NBA Data Lake',
    image: 'https://res.cloudinary.com/dtoh4hrgt/image/upload/v1751885190/portfolio/DevopsChallenge_day03_n0rxxf.jpg',
    description: 'This project demonstrates how to build a data pipeline for NBA sports analytics using Azure services. The pipeline fetches NBA player data from an API, stores it in Azure Blob Storage, and creates a queryable table in Azure Synapse Analytics. The data can then be queried and processed using any tool.',
    link: 'https://github.com/Jekwulum/03_NBADataLake',
    stacks: ['Azure Cloud', 'Python', 'Terraform', 'Azure-Blob Storage', 'Azure-Synapse Analytics', 'SQL']
  },
];

const container = document.getElementById('projectsContainer');

projects.forEach(project => {
  const card = document.createElement('div');
  card.className = 'bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300';

  card.innerHTML = `
    <img src="${project.image}" alt="${project.name}" class="rounded-md mb-4 transition-transform duration-300 ease-in-out hover:scale-150 w-full sm:h-[100px] md:h-[180px] lg:h-[150px]" style="">
    <h3 class="text-xl font-semibold mb-2">${project.name}</h3>
    <p class="text-sm text-gray-600 mb-3 text-justify">${project.description}</p>
    <div class="flex flex-wrap gap-2 text-sm mb-4">
      ${project.stacks.map(stack => `<span class="bg-gray-100 px-2 py-1 rounded hover:bg-blue-200 hover:cursor-pointer transition duration-300 ease-in-out">${stack}</span>`).join('')}
    </div>
    <a href="${project.link}" target="_blank" class="text-blue-600 font-medium hover:underline">View on GitHub →</a>
  `;

  container.appendChild(card);
});
