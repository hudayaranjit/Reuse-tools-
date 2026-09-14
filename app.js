// Ponytail minimalist state & data engine
const presets = {
  bottle: { name: 'Plastic Bottle', material: 'Plastic (PET #1)', condition: 'Good / Clean', img: 'assets/plastic_bottle.jpg' },
  jar: { name: 'Glass Jar', material: 'Glass (Clear)', condition: 'Clean', img: 'assets/storage_container.jpg' },
  box: { name: 'Cardboard Box', material: 'Corrugated Paperboard', condition: 'Dry', img: 'assets/mini_plant_pot.jpg' },
  tshirt: { name: 'Old Cotton T-Shirt', material: 'Fabric (100% Cotton)', condition: 'Worn out', img: 'assets/water_dripper.jpg' }
};

const db = {
  bottle: {
    useful: [
      { id: 'pot', icon: '🌱', title: 'Mini Plant Pot', diff: '⭐⭐', time: '20 min', extra: 'Soil + plant', img: 'assets/mini_plant_pot.jpg',
        mats: ['Plastic bottle', 'Soil', 'Small plant / seedling', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Prepare the bottle', desc: 'Cut the bottle at the required section.' },
          { num: '2️⃣', title: 'Make drainage holes', desc: 'Create small holes at the bottom.' },
          { num: '3️⃣', title: 'Add soil', desc: 'Fill the bottom section 3/4 full with potting soil.' },
          { num: '4️⃣', title: 'Plant the seedling', desc: 'Place seedling into the soil and firm gently.' },
          { num: '5️⃣', title: 'Place it somewhere suitable', desc: 'Water lightly and place on a sunny windowsill.' }
        ]},
      { id: 'storage', icon: '🏠', title: 'Storage Container', diff: '⭐', time: '10 min', extra: 'None', img: 'assets/storage_container.jpg',
        mats: ['Plastic bottle', 'Scissors'], steps: [
          { num: '1️⃣', title: 'Cut the top off', desc: 'Trim off the narrow neck portion.' },
          { num: '2️⃣', title: 'Organize items', desc: 'Fill with pens, markers, or tools.' }
        ]},
      { id: 'dripper', icon: '💧', title: 'Simple Water Dripper', diff: '⭐⭐⭐', time: '30 min', extra: 'String', img: 'assets/water_dripper.jpg',
        mats: ['Plastic bottle', 'Cotton string', 'Water', 'Scissors'], steps: [
          { num: '1️⃣', title: 'Pierce cap', desc: 'Make small hole in cap and thread cotton string.' },
          { num: '2️⃣', title: 'Invert bottle', desc: 'Fill with water and insert wick into plant soil.' }
        ]}
    ]
  }
};

let state = { itemKey: 'bottle', item: presets.bottle, goal: 'useful', idea: null };

// Ponytail 1-line view routing
function navigateTo(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === `${id}-section`));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.id === `nav-${id}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'ideas') renderIdeas();
  if (id === 'steps') renderSteps();
}

function selectPresetItem(key) {
  state.itemKey = key;
  state.item = presets[key];
  document.getElementById('analysis-img').src = state.item.img;
  document.getElementById('analysis-object').textContent = state.item.name;
  document.getElementById('analysis-material').textContent = state.item.material;
  document.getElementById('analysis-condition').textContent = state.item.condition;
  navigateTo('analysis');
}

function handleFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;
  const r = new FileReader();
  r.onload = ev => {
    state.item = { name: file.name.replace(/\.[^/.]+$/, ''), material: 'Detected Packaging Material', condition: 'Reusable', img: ev.target.result };
    selectPresetItem('bottle'); // update view with custom upload
    document.getElementById('analysis-img').src = ev.target.result;
    document.getElementById('analysis-object').textContent = state.item.name;
  };
  r.readAsDataURL(file);
}

function renderIdeas() {
  document.getElementById('ideas-item-badge').textContent = `♻️ ${state.item.name}`;
  const list = (db[state.itemKey] || db.bottle)[state.goal] || db.bottle.useful;
  document.getElementById('ideas-count-subtitle').textContent = `We found ${list.length} possible option(s) for you.`;
  document.getElementById('ideas-container').innerHTML = list.map(p => `
    <div class="idea-card">
      <img src="${p.img}" alt="${p.title}" class="idea-img">
      <div class="idea-content">
        <h3 class="idea-title">${p.icon} ${p.title}</h3>
        <div class="idea-meta"><span>Difficulty: ${p.diff}</span> • <span>⏱️ ${p.time}</span></div>
        <div class="idea-materials"><strong>Extra materials:</strong> ${p.extra}</div>
        <button class="btn btn-primary" style="width:100%" onclick="selectIdea('${p.id}')">View Instructions 🛠️</button>
      </div>
    </div>`).join('');
}

function selectIdea(id) {
  const list = (db[state.itemKey] || db.bottle)[state.goal] || db.bottle.useful;
  state.idea = list.find(p => p.id === id) || list[0];
  navigateTo('steps');
}

function renderSteps() {
  const p = state.idea || db.bottle.useful[0];
  document.getElementById('step-hero-icon').textContent = p.icon;
  document.getElementById('step-hero-title').textContent = p.title;
  document.getElementById('step-hero-meta').textContent = `Difficulty: ${p.diff} • Time: ${p.time}`;
  document.getElementById('materials-list').innerHTML = p.mats.map((m, i) => `<li class="material-item"><input type="checkbox" id="m${i}"><label for="m${i}">${m}</label></li>`).join('');
  document.getElementById('steps-list').innerHTML = p.steps.map(s => `<div class="step-card"><div class="step-num">${s.num}</div><div><h4>${s.title}</h4><p>${s.desc}</p></div></div>`).join('');
}

// Native <dialog> modal helpers (Ponytail native platform rung)
const getModal = () => document.getElementById('celebration-modal');
const showCelebration = () => getModal().showModal();
const closeCelebration = () => { getModal().close(); navigateTo('home'); };

// Native dropzone binding
document.addEventListener('DOMContentLoaded', () => {
  const dz = document.getElementById('dropzone');
  if (!dz) return;
  ['dragover', 'drop'].forEach(ev => dz.addEventListener(ev, e => {
    e.preventDefault();
    if (ev === 'drop' && e.dataTransfer.files[0]) handleFileUpload({ target: { files: e.dataTransfer.files } });
  }));
});
