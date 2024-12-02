export function aboutFunctionality() {
  //---add and delete skill---//
  const skills = [
    {
      name: 'HTML',
      icon: 'images and icons/icons/html.png', 
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      name: 'CSS',
      icon: 'images and icons/icons/CSS.png',
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      name: 'JS',
      icon: 'images and icons/icons/js (1).png', 
      mastery: 'Advanced',
      type: 'tech-stack'
    },
    {
      name: 'PHP', 
      icon: 'images and icons/icons/php.png',
      mastery: 'Beginner',
      type: 'tech-stack'
    },
    {
      name: 'REACT', 
      icon: 'images and icons/icons/React (2).png', 
      mastery: 'Beginner',
      type: 'tech-stack'
    },
    {
      name: 'VS code',
      icon: 'images and icons/icons/visual-studio.png',
      mastery: 'Intermediate',
      type: 'tools'
    },
    {
      name: 'GitHub',
      icon: 'images and icons/icons/github (2).png',
      mastery: 'Intermediate',
      type: 'tools'
    },
    {
      name: 'Git',
      icon: 'images and icons/icons/Git.png',
      mastery: 'Intermediate',
      type: 'tools'
    },
  ];


  //------------Display tech stack and tools skills--------------//
    let skillsHTML = ''

  skills.forEach(skill => {
    skillsHTML += `
      <div class="skill-card ${skill.type}">
        <img src="${skill.icon}" alt="skill-icon" class="skill-icon">
        <div>
          <p class="skill-name">${skill.name}</p>
          <p class="skill-mastery">${skill.mastery}</p>
        </div>            
      </div>
      `
  });

  document.querySelector('.skills-card-container').innerHTML = skillsHTML;


  const techStackBtn =  document.querySelector('.tech-stack-btn');
  const toolsBtn = document.querySelector('.tools-btn');
  const skillCards =  document.querySelectorAll('.skill-card');

  techStackBtn.addEventListener('click', ()=> {
    skillCards.forEach(skill => {
      const techStackSkill = skill.classList[1] === 'tech-stack';

      if(techStackSkill){
        skill.style.display = 'flex';
        techStackBtn.classList.add('selected');
        toolsBtn.classList.remove('selected');     
      }
      else{
        skill.style.display = 'none'
      }
    });
  });

  toolsBtn.addEventListener('click', ()=> {
    skillCards.forEach(skill => {
      const toolsSkill = skill.classList[1] === 'tools';

      if(toolsSkill){
        skill.style.display = 'flex';
        toolsBtn.classList.add('selected');
        techStackBtn.classList.remove('selected');
      }
      else{
        skill.style.display = 'none'
      }
    });
  });

}