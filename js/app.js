// Bilingual toggle and action stubs
const lang = {current:'ID'};
const text = {
  ID: {
    profileTitle: 'Profil — SHD Project',
    profileLead: 'Sebuah pendekatan personal — menggabungkan kesadaran, sistem, dan pertumbuhan berkelanjutan. Fokus pada pembelajaran terarah dan dokumentasi yang rapih.',
    aboutHeading: 'Tentang',
    aboutText: 'SHD Project adalah sistem terintegrasi untuk pembelajaran trading dan pengembangan konten faceless. Desain ini mengutamakan keterbacaan, ritme visual, dan kesadaran penggunaan.',
    valuesHeading: 'Nilai Inti',
    gatewayTitle: 'Gateway — Quick View',
    gatewayLead: 'Mobile viewer ringan: KPI, Reflections, Visual Dictionary. Mode gelap, single-column, responsive.'
  },
  EN: {
    profileTitle: 'Profile — SHD Project',
    profileLead: 'A personal approach — combining awareness, systems, and sustainable growth. Focused on directed learning and tidy documentation.',
    aboutHeading: 'About',
    aboutText: 'SHD Project is an integrated system for trading education and faceless content development. This design prioritizes readability, visual rhythm, and mindful usage.',
    valuesHeading: 'Core Values',
    gatewayTitle: 'Gateway — Quick View',
    gatewayLead: 'Lightweight mobile viewer: KPI, Reflections, Visual Dictionary. Dark mode, single-column, responsive.'
  }
};

function setLang(l){
  lang.current=l;
  document.getElementById('langCurrent').innerText=l;
  const m=text[l];
  document.getElementById('profileTitle').innerText=m.profileTitle;
  document.getElementById('profileLead').innerText=m.profileLead;
  document.getElementById('aboutHeading').innerText=m.aboutHeading;
  document.getElementById('aboutText').innerText=m.aboutText;
  document.getElementById('valuesHeading').innerText=m.valuesHeading;
  document.getElementById('gatewayTitle').innerText=m.gatewayTitle;
  document.getElementById('gatewayLead').innerText=m.gatewayLead;
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggleLang').addEventListener('click',()=>setLang(lang.current==='ID'?'EN':'ID'));
  document.getElementById('openGateway').addEventListener('click',()=>alert('Open Gateway action — mobile/index.html (stub)'));
  document.getElementById('exportJson').addEventListener('click',()=>alert('Export JSON — reflections & KPI (stub)'));
  document.getElementById('ctaDeploy').addEventListener('click',()=>alert('Flow: \"Login Laptop\" → prepare deploy | push to GitHub (stub)'));
  setLang('ID');
});
