// State Management
const appState = {
  currentSection: 'home',
  selectedItem: {
    id: 'bottle',
    name: 'Plastic Bottle',
    material: 'Plastic (PET #1)',
    condition: 'Good / Clean',
    img: 'assets/plastic_bottle.jpg'
  },
  selectedGoal: 'useful',
  selectedIdea: null
};

// Database of Reuse Projects per Item & Goal
const reuseDatabase = {
  bottle: {
    useful: [
      {
        id: 'plant_pot',
        icon: '🌱',
        title: 'Mini Plant Pot',
        difficulty: '⭐⭐',
        time: '20 min',
        extraMaterials: 'Soil + plant',
        img: 'assets/mini_plant_pot.jpg',
        materials: ['Plastic bottle', 'Soil', 'Small plant / seedling', 'Scissors or craft knife'],
        steps: [
          { num: '1️⃣', title: 'Prepare the bottle', desc: 'Carefully cut the plastic bottle horizontally around 4-5 inches from the bottom.' },
          { num: '2️⃣', title: 'Make drainage holes', desc: 'Using scissors or a heated pin, poke 3-4 small drainage holes at the bottom of the base.' },
          { num: '3️⃣', title: 'Add soil', desc: 'Fill the bottom section 3/4 full with potting soil.' },
          { num: '4️⃣', title: 'Plant the seedling', desc: 'Gently place your small seedling or succulent into the soil and firm it gently.' },
          { num: '5️⃣', title: 'Place it somewhere suitable', desc: 'Water lightly and place your new mini planter on a sunny windowsill.' }
        ]
      },
      {
        id: 'storage_container',
        icon: '🏠',
        title: 'Storage Container',
        difficulty: '⭐',
        time: '10 min',
        extraMaterials: 'None',
        img: 'assets/storage_container.jpg',
        materials: ['Plastic bottle', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Cut the top off', desc: 'Trim off the narrow neck portion of the bottle.' },
          { num: '2️⃣', title: 'Smooth the edge', desc: 'Use masking tape or quickly press the cut edge against a warm iron to soften sharp bits.' },
          { num: '3️⃣', title: 'Organize your items', desc: 'Fill with pens, markers, cutlery, or small workshop tools!' }
        ]
      },
      {
        id: 'water_dripper',
        icon: '💧',
        title: 'Simple Water Dripper',
        difficulty: '⭐⭐⭐',
        time: '30 min',
        extraMaterials: 'String / Cotton wick',
        img: 'assets/water_dripper.jpg',
        materials: ['Plastic bottle', 'Cotton string or wick', 'Water', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Pierce the cap', desc: 'Make a small hole in the bottle cap.' },
          { num: '2️⃣', title: 'Thread string', desc: 'Pass a piece of cotton string through the hole to act as a capillary wick.' },
          { num: '3️⃣', title: 'Invert and insert', desc: 'Fill with water, invert into plant pot soil for automated self-watering.' }
        ]
      }
    ],
    decorative: [
      {
        id: 'bottle_piggy',
        icon: '🐷',
        title: 'Cute Piggy Bank',
        difficulty: '⭐⭐',
        time: '25 min',
        extraMaterials: 'Paint, Googly eyes',
        img: 'assets/storage_container.jpg',
        materials: ['Plastic bottle', 'Acrylic paint', 'Glue', 'Coin slot cutter'],
        steps: [
          { num: '1️⃣', title: 'Cut coin slot', desc: 'Carefully cut a 1-inch slot on the side of the bottle.' },
          { num: '2️⃣', title: 'Paint pink', desc: 'Coat the bottle in pink acrylic paint and add paper ears and snout.' },
          { num: '3️⃣', title: 'Start saving', desc: 'Screw the cap on as the pig nose and start dropping coins!' }
        ]
      }
    ],
    repair: [
      {
        id: 'funnel',
        icon: '⚙️',
        title: 'Emergency Liquid Funnel',
        difficulty: '⭐',
        time: '5 min',
        extraMaterials: 'None',
        img: 'assets/plastic_bottle.jpg',
        materials: ['Plastic bottle', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Cut at angle', desc: 'Cut top 3 inches off at a 45-degree angle.' },
          { num: '2️⃣', title: 'Unscrew cap', desc: 'Use top section as an instant clean pouring funnel for oil or liquids.' }
        ]
      }
    ],
    donate: [
      {
        id: 'ecobricks',
        icon: '🧱',
        title: 'Make an EcoBrick',
        difficulty: '⭐',
        time: '15 min',
        extraMaterials: 'Clean unrecyclable soft plastics',
        img: 'assets/plastic_bottle.jpg',
        materials: ['Plastic bottle', 'Clean plastic wrappers', 'Stick'],
        steps: [
          { num: '1️⃣', title: 'Pack tightly', desc: 'Stuff clean, dry non-recyclable plastic wrappers into the bottle using a stick.' },
          { num: '2️⃣', title: 'Seal & Donate', desc: 'Ensure solid density (330g+) and donate to local EcoBrick building projects.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'curbside',
        icon: '♻️',
        title: 'Curbside Plastic Recycling Guide',
        difficulty: '⭐',
        time: '2 min',
        extraMaterials: 'None',
        img: 'assets/plastic_bottle.jpg',
        materials: ['Rinse water'],
        steps: [
          { num: '1️⃣', title: 'Rinse bottle', desc: 'Remove residual liquid thoroughly.' },
          { num: '2️⃣', title: 'Crush & cap', desc: 'Flatten bottle to save bin space and re-attach plastic cap for recycling.' }
        ]
      }
    ]
  },
  jar: {
    useful: [
      {
        id: 'jar_pantry',
        icon: '🫙',
        title: 'Spice & Dry Food Storage',
        difficulty: '⭐',
        time: '5 min',
        extraMaterials: 'Label tape',
        img: 'assets/storage_container.jpg',
        materials: ['Glass Jar', 'Label', 'Marker'],
        steps: [
          { num: '1️⃣', title: 'Wash & Dry', desc: 'Ensure jar is completely clean and dry.' },
          { num: '2️⃣', title: 'Label & Fill', desc: 'Store rice, lentils, or spices in an airtight glass container.' }
        ]
      }
    ]
  }
};

// Navigation Controller
function navigateTo(sectionId) {
  appState.currentSection = sectionId;
  
  // Hide all sections
  document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
  
  // Show target section
  const target = document.getElementById(`${sectionId}-section`);
  if (target) target.classList.add('active');
  
  // Update header nav buttons
  document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${sectionId}`);
  if (activeNav) activeNav.classList.add('active');

  // Scroll to top smooth
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh dynamic views if necessary
  if (sectionId === 'ideas') renderIdeas();
  if (sectionId === 'steps') renderSteps();
}

// Preset Item Selection
function selectPresetItem(presetId) {
  if (presetId === 'bottle') {
    appState.selectedItem = {
      id: 'bottle',
      name: 'Plastic Bottle',
      material: 'Plastic (PET #1)',
      condition: 'Good / Clean',
      img: 'assets/plastic_bottle.jpg'
    };
  } else if (presetId === 'jar') {
    appState.selectedItem = {
      id: 'jar',
      name: 'Glass Jar',
      material: 'Glass (Clear)',
      condition: 'Clean',
      img: 'assets/storage_container.jpg'
    };
  } else if (presetId === 'box') {
    appState.selectedItem = {
      id: 'box',
      name: 'Cardboard Box',
      material: 'Corrugated Paperboard',
      condition: 'Dry',
      img: 'assets/mini_plant_pot.jpg'
    };
  } else if (presetId === 'tshirt') {
    appState.selectedItem = {
      id: 'tshirt',
      name: 'Old Cotton T-Shirt',
      material: 'Fabric (100% Cotton)',
      condition: 'Worn out',
      img: 'assets/water_dripper.jpg'
    };
  }

  updateAnalysisView();
  navigateTo('analysis');
}

// Update Analysis View Elements
function updateAnalysisView() {
  document.getElementById('analysis-img').src = appState.selectedItem.img;
  document.getElementById('analysis-object').textContent = appState.selectedItem.name;
  document.getElementById('analysis-material').textContent = appState.selectedItem.material;
  document.getElementById('analysis-condition').textContent = appState.selectedItem.condition;
}

// File Upload Handler
function handleFileUpload(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    appState.selectedItem = {
      id: 'bottle', // default demo mapping
      name: file.name.split('.')[0] || 'Uploaded Object',
      material: 'Detected Polyethylene / Mixed',
      condition: 'Reusable',
      img: e.target.result
    };
    updateAnalysisView();
    navigateTo('analysis');
  };
  reader.readAsDataURL(file);
}

// Camera Trigger Simulator
function triggerCamera() {
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    alert("Camera trigger initialized! Using sample plastic bottle scan for demo.");
  }
  selectPresetItem('bottle');
}

// Goal Selection
function selectGoal(goalValue, element) {
  appState.selectedGoal = goalValue;
  document.querySelectorAll('.goal-option').forEach(opt => opt.classList.remove('selected'));
  if (element) {
    element.classList.add('selected');
    const radio = element.querySelector('input[type="radio"]');
    if (radio) radio.checked = true;
  }
}

// Generate Ideas Action
function generateIdeas() {
  navigateTo('ideas');
}

// Render Reuse Ideas (Section 4)
function renderIdeas() {
  const container = document.getElementById('ideas-container');
  const badge = document.getElementById('ideas-item-badge');
  const subtitle = document.getElementById('ideas-count-subtitle');
  
  badge.textContent = `♻️ ${appState.selectedItem.name}`;
  
  const itemProjects = reuseDatabase[appState.selectedItem.id] || reuseDatabase['bottle'];
  const categoryProjects = itemProjects[appState.selectedGoal] || itemProjects['useful'] || [];

  subtitle.textContent = `We found ${categoryProjects.length} possible option(s) for you.`;
  container.innerHTML = '';

  if (categoryProjects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 3rem; background: var(--bg-surface); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <h3>No specific projects found for this goal yet!</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">Try choosing "Make something useful" or another category in Item Analysis.</p>
        <button class="btn btn-primary" style="margin-top: 1rem;" onclick="navigateTo('analysis')">Back to Analysis</button>
      </div>
    `;
    return;
  }

  categoryProjects.forEach((proj, idx) => {
    const card = document.createElement('div');
    card.className = 'idea-card';
    card.innerHTML = `
      <img src="${proj.img}" alt="${proj.title}" class="idea-img">
      <div class="idea-content">
        <h3 class="idea-title">${proj.icon} ${proj.title}</h3>
        <div class="idea-meta">
          <div class="idea-meta-item">
            <span>Difficulty:</span>
            <span class="stars">${proj.difficulty}</span>
          </div>
          <div class="idea-meta-item">
            <span>⏱️ ${proj.time}</span>
          </div>
        </div>
        <div class="idea-materials">
          <strong>Extra materials:</strong> ${proj.extraMaterials}
        </div>
        <div class="idea-actions">
          <button class="btn btn-primary" style="width: 100%;" onclick="selectIdea('${proj.id}')">
            View Instructions 🛠️
          </button>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// Select an Idea and Open Steps (Section 5)
function selectIdea(ideaId) {
  const itemProjects = reuseDatabase[appState.selectedItem.id] || reuseDatabase['bottle'];
  const categoryProjects = itemProjects[appState.selectedGoal] || itemProjects['useful'] || [];
  
  let selected = categoryProjects.find(p => p.id === ideaId);
  if (!selected) {
    // fallback search all categories
    Object.values(itemProjects).forEach(arr => {
      const found = arr.find(p => p.id === ideaId);
      if (found) selected = found;
    });
  }

  appState.selectedIdea = selected || categoryProjects[0];
  navigateTo('steps');
}

// Render Step-by-Step Instructions (Section 5)
function renderSteps() {
  const proj = appState.selectedIdea || reuseDatabase.bottle.useful[0];

  document.getElementById('step-hero-icon').textContent = proj.icon;
  document.getElementById('step-hero-title').textContent = proj.title;
  document.getElementById('step-hero-difficulty').textContent = `Difficulty: ${proj.difficulty}`;
  document.getElementById('step-hero-time').textContent = `Time: ${proj.time}`;

  // Render Materials
  const matContainer = document.getElementById('materials-list');
  matContainer.innerHTML = '';
  proj.materials.forEach((mat, idx) => {
    const li = document.createElement('li');
    li.className = 'material-item';
    li.innerHTML = `
      <input type="checkbox" id="mat-${idx}">
      <label for="mat-${idx}">${mat}</label>
    `;
    matContainer.appendChild(li);
  });

  // Render Steps
  const stepsContainer = document.getElementById('steps-list');
  stepsContainer.innerHTML = '';
  proj.steps.forEach(step => {
    const stepCard = document.createElement('div');
    stepCard.className = 'step-card';
    stepCard.innerHTML = `
      <div class="step-num">${step.num}</div>
      <div class="step-info">
        <h4>${step.title}</h4>
        <p>${step.desc}</p>
      </div>
    `;
    stepsContainer.appendChild(stepCard);
  });
}

// Celebration Modal
function showCelebration() {
  document.getElementById('celebration-modal').classList.add('active');
}

function closeCelebration() {
  document.getElementById('celebration-modal').classList.remove('active');
  navigateTo('home');
}

// Initialize Dropzone drag and drop
document.addEventListener('DOMContentLoaded', () => {
  const dropzone = document.getElementById('dropzone');
  if (dropzone) {
    ['dragenter', 'dragover'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.add('dragover');
      }, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
      dropzone.addEventListener(eventName, (e) => {
        e.preventDefault();
        dropzone.classList.remove('dragover');
      }, false);
    });

    dropzone.addEventListener('drop', (e) => {
      const dt = e.dataTransfer;
      const files = dt.files;
      if (files.length > 0) {
        document.getElementById('file-input').files = files;
        handleFileUpload({ target: { files: files } });
      }
    });
  }
});
