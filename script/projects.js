export function projectFuntionality(){
  // add and delete project//
  const projects = [
    {
      title: 'Website Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'website',
      link: ''
    },
    {
      title: 'Video Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'video',
      link: ''
    },
    {
      title: 'UI-Design Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'ui-design',
      link: ''
    },
    {
      title: 'Website Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'website',
      link: ''
    },
    {
      title: 'Video Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'video',
      link: ''
    },
    {
      title: 'UI-Design Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'ui-design',
      link: ''
    },
    {
      title: 'Website Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'website',
      link: ''
    },
    {
      title: 'Video Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'video',
      link: ''
    },
    {
      title: 'UI-Design Project',
      image: 'photo icon.png',
      description: 'Project Description',
      type: 'ui-design',
      link: ''
    },
  ];


  // display projects//
  let projectHTML = '';

  projects.forEach(project => {
    projectHTML += `
     <div class="project-card ${project.type}">
        <img src="images and icons/icons/${project.image}" alt="proj-image" class="proj-image">
        <h3 class="proj-title">${project.title}</h3>
        <p class="proj-description">${project.description}</p>
      </div>
      `
  });

  const projectConatainer = document.querySelector('.projects-container').innerHTML = projectHTML;


 // ------project nav---- //
const filterButtons = document.querySelectorAll('.project-nav .btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('selected'));

    button.classList.add('selected');

    const filterType = button.getAttribute('data-filter');

    projectCards.forEach(card => {
      if (filterType === 'all' || card.classList.contains(filterType)) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none';
      }
    });
  });
});

}