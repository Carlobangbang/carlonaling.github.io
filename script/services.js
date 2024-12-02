export function servicesFunctionality(){
  const services = [
    {
      name: 'Web Developer',
      icon: 'images and icons/icons/image.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      name: 'UI Designer',
      icon: 'images and icons/icons/image.png',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit'
    },
    {
      name: 'Video Editor',
      icon: 'images and icons/icons/image.png',
      description: 'images and icons/icons/image.png'
    }
  ];


  let serviceHTML = '';
  services.forEach(service => {
    serviceHTML += `
      <div class="service-card">
        <img src="${service.icon}" alt="service-icon" class="service-icon">
        <div>
          <p class="service-name">${service.name}</p>
        <p class="service-description">${service.description}</p>
        </div>             
      </div>
    `
  });

  const servicesContainer = document.querySelector('.services-container').innerHTML = serviceHTML;

}