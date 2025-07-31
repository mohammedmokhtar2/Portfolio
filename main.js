// Data arrays for easy updates
const skills = [
  { name: 'Python', icon: 'images/python-brands-solid-full.svg' },
  { name: 'HTML5', icon: 'images/html5-brands-solid-full.svg' },
  { name: 'CSS', icon: 'images/css-brands-solid-full.svg' }
];

const projects = [
  {
    title: 'Security & Attendance System',
    desc: 'Real-time face recognition & logging using YOLOv11.',
    image: 'images/projects/security.jpg',
    link: 'https://github.com/Mukhtar82/security-attendance'
  },
  {
    title: '3D Tomogram Particle Detection',
    desc: 'CNN-based center localization in 3D volumes (Kaggle).',
    image: 'images/projects/particle.jpg',
    link: 'https://www.kaggle.com/Mukhtar82/particle-detection'
  }
];

const experience = [
  { role: 'Data Science Intern', org: 'Zewail City', period: 'Summer 2024', desc: 'Assisted in NLP research and prototype development.' },
  { role: 'Teaching Assistant', org: 'Pixels Egypt', period: '2023-2025', desc: 'Led workshops on Python and ML fundamentals.' }
];

const volunteering = [
  {
    title: 'Head of Problem-Solving Instructors',
    org: 'Pixels Egypt',
    image: 'images/Pixels.jpg',
    desc: 'Trained over 400 students in problem-solving and programming.'
  },
  {
    title: 'Deputy Organizer',
    org: 'Resala Charity',
    image: 'images/Resala.jpg',
    desc: 'Coordinated medical camps serving underserved villages.'
  }
  ,
  {
    title: 'Head of Societies Committee',
    org: 'Helwan National University Engineering Students Union',
    image: 'images/Helwan.jpg',
    desc: ''
  }
];

const certificates = [
  { name: 'Deep Learning Nanodegree — Udacity (2025)', link: '' },
  { name: 'Data Engineering Track — MCIT DEPI (2024)', link: '' }
];

// Populate dynamic sections
document.addEventListener('DOMContentLoaded', () => {
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach(s => {
    const div = document.createElement('div');
    div.className = 'skill';
    div.innerHTML = `<img src="${s.icon}" alt="${s.name}"><span>${s.name}</span>`;
    skillsContainer.appendChild(div);
  });

  const projContainer = document.getElementById('projects-container');
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-aos', 'zoom-in');
    card.innerHTML = `<img src="${p.image}" alt="${p.title}"><h3>${p.title}</h3><p>${p.desc}</p><a href="${p.link}" target="_blank" rel="noopener">↗ View</a>`;
    projContainer.appendChild(card);
  });

  const expContainer = document.getElementById('experience-container');
  experience.forEach(e => {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    item.setAttribute('data-aos', 'fade-up');
    item.innerHTML = `<h3>${e.role} @ ${e.org}</h3><small>${e.period}</small><p>${e.desc}</p>`;
    expContainer.appendChild(item);
  });

  const volContainer = document.getElementById('volunteer-container');
  volunteering.forEach(v => {
    const card = document.createElement('div');
    card.className = 'card';
    card.setAttribute('data-aos', 'zoom-in');
    card.innerHTML = `<img src="${v.image}" alt="${v.title}"><h3>${v.title}</h3><p>${v.desc}</p>`;
    volContainer.appendChild(card);
  });

  const certList = document.getElementById('certificates-list');
  certificates.forEach(c => {
    const li = document.createElement('li');
    if (c.link) {
      li.innerHTML = `<a href="${c.link}" target="_blank" rel="noopener">${c.name}</a>`;
    } else {
      li.textContent = c.name;
    }
    certList.appendChild(li);
  });

  // Initialize AOS animations
  AOS.init({ duration: 800, once: true });
});