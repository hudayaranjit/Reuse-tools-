// What Can I Reuse? — Core Application & Data Engine

const presets = {
  bottle: { name: 'Plastic Bottle', material: 'Plastic (PET #1)', condition: 'Good / Clean', img: 'assets/plastic_bottle.jpg' },
  jar: { name: 'Glass Jar', material: 'Glass (Clear)', condition: 'Clean / Washable', img: 'assets/storage_container.jpg' },
  box: { name: 'Cardboard Box', material: 'Corrugated Paperboard', condition: 'Dry / Intact', img: 'assets/mini_plant_pot.jpg' },
  tshirt: { name: 'Old Cotton T-Shirt', material: 'Fabric (100% Cotton)', condition: 'Worn out', img: 'assets/water_dripper.jpg' }
};

const db = {
  bottle: {
    useful: [
      {
        id: 'pot', icon: '🌱', title: 'Mini Self-Watering Plant Pot', diff: '⭐⭐', time: '20 min', extra: 'Soil, Seedling, String', img: 'assets/mini_plant_pot.jpg',
        mats: ['Plastic bottle (PET #1)', 'Potting soil', 'Small plant seedling', 'Cotton yarn / wick', 'Scissors or utility knife'],
        steps: [
          { num: '1️⃣', title: 'Cut the Bottle in Half', desc: 'Carefully slice the plastic bottle approximately 4 inches below the bottle cap.' },
          { num: '2️⃣', title: 'Create the Water Wick', desc: 'Poke a hole in the bottle cap, thread 6 inches of cotton yarn through, and screw cap back on.' },
          { num: '3️⃣', title: 'Invert & Assemble', desc: 'Place the top inverted cap-down inside the bottom base section.' },
          { num: '4️⃣', title: 'Add Soil & Plant', desc: 'Fill the top portion 3/4 full with moist potting soil and plant your seedling.' },
          { num: '5️⃣', title: 'Fill Water Reservoir', desc: 'Pour 2-3 inches of water into the bottom reservoir. The wick will auto-water the roots!' }
        ]
      },
      {
        id: 'storage', icon: '🏠', title: 'Desk & Hardware Organizer', diff: '⭐', time: '10 min', extra: 'Scissors, Tape', img: 'assets/storage_container.jpg',
        mats: ['Plastic bottle', 'Scissors or cutter', 'Washi tape or sandpaper'],
        steps: [
          { num: '1️⃣', title: 'Trim the Neck', desc: 'Cut off the narrow top portion of the bottle at your desired height.' },
          { num: '2️⃣', title: 'Smooth the Rim', desc: 'Cover the sharp plastic edge with decorative tape or quickly touch with a warm iron.' },
          { num: '3️⃣', title: 'Organize', desc: 'Fill with pens, paintbrushes, screws, or art supplies.' }
        ]
      },
      {
        id: 'dripper', icon: '💧', title: 'Slow-Drip Plant Irrigator', diff: '⭐⭐', time: '15 min', extra: 'Pin / Needle', img: 'assets/water_dripper.jpg',
        mats: ['Plastic bottle', 'Safety pin or thin nail', 'Water'],
        steps: [
          { num: '1️⃣', title: 'Perforate Cap', desc: 'Use a hot safety pin to make 3-4 micro holes in the plastic cap.' },
          { num: '2️⃣', title: 'Fill & Invert', desc: 'Fill bottle with water, cap tightly, and invert into plant soil near root system.' },
          { num: '3️⃣', title: 'Monitor Flow', desc: 'Water will slowly seep into the soil while you are away on vacation!' }
        ]
      }
    ],
    decorative: [
      {
        id: 'lantern', icon: '✨', title: 'Fairy Light Bottle Lantern', diff: '⭐⭐', time: '15 min', extra: 'LED String lights', img: 'assets/storage_container.jpg',
        mats: ['Clean plastic bottle', 'Battery LED fairy lights', 'Ribbon'],
        steps: [
          { num: '1️⃣', title: 'Clean & Dry', desc: 'Peel off label and ensure bottle inside is completely dry.' },
          { num: '2️⃣', title: 'Insert Lights', desc: 'Feed the LED light string through the neck into the body.' },
          { num: '3️⃣', title: 'Decorate Rim', desc: 'Tie a rustic jute string or ribbon around top neck for hanging.' }
        ]
      }
    ],
    repair: [
      {
        id: 'funnel', icon: '🛠️', title: 'Liquid & Powder Funnel', diff: '⭐', time: '5 min', extra: 'None', img: 'assets/plastic_bottle.jpg',
        mats: ['Plastic bottle', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Cut Upper Cone', desc: 'Cut 3-4 inches below the bottle neck at a slight angle.' },
          { num: '2️⃣', title: 'Use as Funnel', desc: 'Unscrew cap and invert top cone into motor oil, plant food, or dry grains.' }
        ]
      }
    ],
    donate: [
      {
        id: 'school_drive', icon: '🏫', title: 'School Craft Material Supply', diff: '⭐', time: '5 min', extra: 'Clean condition', img: 'assets/plastic_bottle.jpg',
        mats: ['Rinsed plastic bottles with caps'],
        steps: [
          { num: '1️⃣', title: 'Rinse & Dry', desc: 'Wash thoroughly with soap and air dry.' },
          { num: '2️⃣', title: 'Drop Off', desc: 'Donate to local elementary school art classes for upcycling projects.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'curbside_pet', icon: '♻️', title: 'Standard PET #1 Blue Bin Recycling', diff: '⭐', time: '2 min', extra: 'Curbside bin', img: 'assets/plastic_bottle.jpg',
        mats: ['Plastic bottle', 'Water'],
        steps: [
          { num: '1️⃣', title: 'Empty & Rinse', desc: 'Remove any remaining liquid inside.' },
          { num: '2️⃣', title: 'Crush & Cap', desc: 'Crush bottle flat to save bin space and screw cap back on.' },
          { num: '3️⃣', title: 'Bin Placement', desc: 'Place in your local yellow/blue plastic recycling container.' }
        ]
      }
    ]
  },

  jar: {
    useful: [
      {
        id: 'jar_pantry', icon: '🫙', title: 'Pantry Dry Food Storage', diff: '⭐', time: '5 min', extra: 'Chalkboard label', img: 'assets/storage_container.jpg',
        mats: ['Glass jar', 'Soap & hot water', 'Label / marker'],
        steps: [
          { num: '1️⃣', title: 'Sterilize Jar', desc: 'Wash jar with hot soapy water and air dry thoroughly.' },
          { num: '2️⃣', title: 'Label & Fill', desc: 'Fill with rice, lentils, oats, or spices and attach a re-usable label.' }
        ]
      }
    ],
    decorative: [
      {
        id: 'jar_terrarium', icon: '🌿', title: 'Mini Moss Terrarium', diff: '⭐⭐', time: '25 min', extra: 'Pebbles, Moss, Soil', img: 'assets/mini_plant_pot.jpg',
        mats: ['Glass jar', 'Small pebbles / gravel', 'Activated charcoal', 'Potting soil', 'Live moss or succulents'],
        steps: [
          { num: '1️⃣', title: 'Drainage Layer', desc: 'Add 1 inch layer of small pebbles at the bottom for water drainage.' },
          { num: '2️⃣', title: 'Charcoal & Soil', desc: 'Add a thin layer of charcoal followed by 2 inches of soil.' },
          { num: '3️⃣', title: 'Plant Moss', desc: 'Gently tuck in moss tufts or small succulents with tweezers.' }
        ]
      }
    ],
    repair: [
      {
        id: 'jar_hardware', icon: '🔩', title: 'Workshop Hardware Organizer', diff: '⭐', time: '10 min', extra: 'Screws, Lid', img: 'assets/storage_container.jpg',
        mats: ['Glass jar with metal lid', 'Small wood screws', 'Screwdriver'],
        steps: [
          { num: '1️⃣', title: 'Attach Lid to Shelf', desc: 'Screw the jar metal lid into the underside of your wooden workbench shelf.' },
          { num: '2️⃣', title: 'Twist Jar In', desc: 'Fill jar with nails/bolts and twist jar into the mounted lid.' }
        ]
      }
    ],
    donate: [
      {
        id: 'jar_donate', icon: '🤲', title: 'Community Preserve / Thrift Drive', diff: '⭐', time: '5 min', extra: 'Clean jar', img: 'assets/storage_container.jpg',
        mats: ['Clean glass jars with matching lids'],
        steps: [
          { num: '1️⃣', title: 'Sanitize', desc: 'Run through dishwasher to remove odor.' },
          { num: '2️⃣', title: 'Donate', desc: 'Give to local home jam makers or food banks.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'jar_recycle', icon: '♻️', title: 'Glass Container Recycling', diff: '⭐', time: '2 min', extra: 'Glass bin', img: 'assets/storage_container.jpg',
        mats: ['Glass jar'],
        steps: [
          { num: '1️⃣', title: 'Rinse Clean', desc: 'Ensure no food remnants remain.' },
          { num: '2️⃣', title: 'Separate Lid', desc: 'Recycle metal lid in metal bin and glass jar in glass bin.' }
        ]
      }
    ]
  },

  box: {
    useful: [
      {
        id: 'box_divider', icon: '📦', title: 'Drawer Grid Organizer', diff: '⭐⭐', time: '20 min', extra: 'Ruler, Cutter', img: 'assets/mini_plant_pot.jpg',
        mats: ['Cardboard box', 'Ruler', 'Utility knife / Scissors', 'Tape'],
        steps: [
          { num: '1️⃣', title: 'Measure Drawer', desc: 'Measure depth and width of target desk or dresser drawer.' },
          { num: '2️⃣', title: 'Cut Strips', desc: 'Cut cardboard into strips matching drawer height.' },
          { num: '3️⃣', title: 'Slot Together', desc: 'Cut interlocking slots halfway through strips to form a grid matrix.' }
        ]
      }
    ],
    decorative: [
      {
        id: 'box_art', icon: '🎨', title: 'Textured Wall Art Canvas', diff: '⭐⭐', time: '30 min', extra: 'Paint, Spackling paste', img: 'assets/mini_plant_pot.jpg',
        mats: ['Cardboard panel', 'Acrylic paint', 'Brush'],
        steps: [
          { num: '1️⃣', title: 'Cut Flat Panel', desc: 'Cut a flat rectangular panel from box side.' },
          { num: '2️⃣', title: 'Paint & Texture', desc: 'Apply minimalist textured paint strokes for eco wall decor.' }
        ]
      }
    ],
    repair: [
      {
        id: 'box_floor', icon: '🧹', title: 'Surface Protection Mat', diff: '⭐', time: '2 min', extra: 'Utility knife', img: 'assets/mini_plant_pot.jpg',
        mats: ['Cardboard box'],
        steps: [
          { num: '1️⃣', title: 'Flatten Box', desc: 'Slice corner tape to flatten box completely.' },
          { num: '2️⃣', title: 'Lay Under Work Area', desc: 'Use as drop cloth under painting, gluing, or oil change projects.' }
        ]
      }
    ],
    donate: [
      {
        id: 'box_donate', icon: '📦', title: 'Shipping & Community Reuse Exchange', diff: '⭐', time: '5 min', extra: 'Tape removed', img: 'assets/mini_plant_pot.jpg',
        mats: ['Intact corrugated box'],
        steps: [
          { num: '1️⃣', title: 'Collapse', desc: 'Fold flat without tearing flaps.' },
          { num: '2️⃣', title: 'Offer Locally', desc: 'Post on local neighborhood group for someone moving or shipping.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'box_recycle', icon: '♻️', title: 'Cardboard Paper Stream Recycling', diff: '⭐', time: '2 min', extra: 'Recycling bin', img: 'assets/mini_plant_pot.jpg',
        mats: ['Cardboard box'],
        steps: [
          { num: '1️⃣', title: 'Remove Plastic Tape', desc: 'Peel off heavy shipping tape.' },
          { num: '2️⃣', title: 'Flatten Fully', desc: 'Break down boxes to lie completely flat in recycling bin.' }
        ]
      }
    ]
  },

  tshirt: {
    useful: [
      {
        id: 'tshirt_tote', icon: '🛍️', title: 'No-Sew Market Tote Bag', diff: '⭐⭐', time: '15 min', extra: 'Scissors', img: 'assets/water_dripper.jpg',
        mats: ['Old T-shirt', 'Sharp fabric scissors'],
        steps: [
          { num: '1️⃣', title: 'Cut Sleeves & Collar', desc: 'Trim off the neck ribbing and both sleeves.' },
          { num: '2️⃣', title: 'Cut Fringe', desc: 'Cut 2-inch vertical strips along the bottom hem of the shirt.' },
          { num: '3️⃣', title: 'Tie Double Knots', desc: 'Tie front and back fringe strips tightly together in double knots.' }
        ]
      }
    ],
    decorative: [
      {
        id: 'tshirt_coaster', icon: '🧶', title: 'Braided Fabric Yarn Coasters', diff: '⭐⭐⭐', time: '30 min', extra: 'Hot glue / Thread', img: 'assets/water_dripper.jpg',
        mats: ['Cotton T-Shirt', 'Scissors', 'Glue or needle'],
        steps: [
          { num: '1️⃣', title: 'Make T-Shirt Yarn', desc: 'Cut long 1-inch continuous strips of fabric and stretch to coil into yarn.' },
          { num: '2️⃣', title: 'Braid 3 Strands', desc: 'Braid three yarn strands together.' },
          { num: '3️⃣', title: 'Coil into Circle', desc: 'Coil the braid flat into a circle, securing with glue or simple stitches.' }
        ]
      }
    ],
    repair: [
      {
        id: 'tshirt_rag', icon: '🧽', title: 'Ultra-Soft Cleaning Rags', diff: '⭐', time: '5 min', extra: 'Scissors', img: 'assets/water_dripper.jpg',
        mats: ['Cotton shirt', 'Scissors'],
        steps: [
          { num: '1️⃣', title: 'Cut into Rectangles', desc: 'Cut fabric into 10x10 inch squares.' },
          { num: '2️⃣', title: 'Use & Wash', desc: 'Use for dusting, car polishing, or glass cleaning instead of paper towels.' }
        ]
      }
    ],
    donate: [
      {
        id: 'tshirt_donate', icon: '👕', title: 'Animal Shelter Towel Drive', diff: '⭐', time: '5 min', extra: 'Clean garment', img: 'assets/water_dripper.jpg',
        mats: ['Worn cotton shirts'],
        steps: [
          { num: '1️⃣', title: 'Launder Clean', desc: 'Wash thoroughly.' },
          { num: '2️⃣', title: 'Donate', desc: 'Drop off at local animal rescue shelter for pet bedding.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'tshirt_recycle', icon: '♻️', title: 'Textile Drop Box Recycling', diff: '⭐', time: '5 min', extra: 'Textile bin', img: 'assets/water_dripper.jpg',
        mats: ['Unusable worn garments'],
        steps: [
          { num: '1️⃣', title: 'Bag Garments', desc: 'Place in clean dry plastic bag.' },
          { num: '2️⃣', title: 'Drop in Textile Bin', desc: 'Drop in dedicated municipal clothing recycling container.' }
        ]
      }
    ]
  }
};

let state = {
  itemKey: 'bottle',
  item: presets.bottle,
  goal: 'useful',
  idea: null
};

// Routing Engine
function navigateTo(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === `${id}-section`));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.toggle('active', b.id === `nav-${id}`));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'ideas') renderIdeas();
  if (id === 'steps') renderSteps();
}

function selectPresetItem(key) {
  state.itemKey = key;
  state.item = presets[key] || presets.bottle;
  updateAnalysisView();
  navigateTo('analysis');
}

function updateAnalysisView() {
  document.getElementById('analysis-img').src = state.item.img;
  document.getElementById('analysis-object').textContent = state.item.name;
  document.getElementById('analysis-material').textContent = state.item.material;
  document.getElementById('analysis-condition').textContent = state.item.condition;
}

// Custom Upload & Smart Recognition Engine
function handleFileUpload(e) {
  const file = e.target.files?.[0];
  if (!file) return;

  const r = new FileReader();
  r.onload = ev => {
    const rawName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
    const formattedName = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    
    // Infer category or construct dynamic record
    const lower = rawName.toLowerCase();
    let detectedKey = 'custom';
    if (lower.includes('bottle') || lower.includes('plastic')) detectedKey = 'bottle';
    else if (lower.includes('jar') || lower.includes('glass')) detectedKey = 'jar';
    else if (lower.includes('box') || lower.includes('cardboard') || lower.includes('carton')) detectedKey = 'box';
    else if (lower.includes('shirt') || lower.includes('cloth') || lower.includes('fabric')) detectedKey = 'tshirt';

    if (detectedKey !== 'custom') {
      state.itemKey = detectedKey;
      state.item = { ...presets[detectedKey], img: ev.target.result };
    } else {
      // Build dynamic knowledge set for custom upload
      state.itemKey = 'custom';
      state.item = {
        name: formattedName || 'Custom Uploaded Item',
        material: 'Detected Packaging / Composite Material',
        condition: 'Reusable / Solid State',
        img: ev.target.result
      };
      db.custom = generateCustomDatabase(state.item.name, ev.target.result);
    }

    updateAnalysisView();
    navigateTo('analysis');
  };
  r.readAsDataURL(file);
}

function generateCustomDatabase(name, img) {
  return {
    useful: [
      {
        id: 'cust_organizer', icon: '📦', title: `Custom ${name} Storage Container`, diff: '⭐', time: '10 min', extra: 'Scissors, Marker', img: img,
        mats: [name, 'Scissors / Knife', 'Marker or Label'],
        steps: [
          { num: '1️⃣', title: 'Clean & Prep', desc: `Wash and thoroughly dry your ${name}.` },
          { num: '2️⃣', title: 'Adapt Structure', desc: 'Trim edges or remove lid as needed for easy access.' },
          { num: '3️⃣', title: 'Organize Items', desc: 'Place on desk or counter for keeping small accessories in order.' }
        ]
      }
    ],
    decorative: [
      {
        id: 'cust_craft', icon: '✨', title: `Upcycled ${name} Decorative Accent`, diff: '⭐⭐', time: '20 min', extra: 'Paint, Ribbon', img: img,
        mats: [name, 'Acrylic paint or twine', 'Decorative ribbon'],
        steps: [
          { num: '1️⃣', title: 'Base Coat', desc: `Apply a primer or base coat to the surface of the ${name}.` },
          { num: '2️⃣', title: 'Add Personal Pattern', desc: 'Paint your favorite minimalist design or wrap with natural twine.' }
        ]
      }
    ],
    repair: [
      {
        id: 'cust_repair', icon: '🛠️', title: `Material Parts & Shims from ${name}`, diff: '⭐', time: '10 min', extra: 'Cutter', img: img,
        mats: [name, 'Utility knife'],
        steps: [
          { num: '1️⃣', title: 'Inspect Material', desc: 'Identify durable flat sections of the item.' },
          { num: '2️⃣', title: 'Cut Custom Shims', desc: 'Cut into custom shapes for furniture leveling or protection pads.' }
        ]
      }
    ],
    donate: [
      {
        id: 'cust_donate', icon: '🤲', title: 'Community Reuse Donation', diff: '⭐', time: '5 min', extra: 'Clean item', img: img,
        mats: [name],
        steps: [
          { num: '1️⃣', title: 'Clean Item', desc: 'Sanitize surface thoroughly.' },
          { num: '2️⃣', title: 'Pass along', desc: 'Share on zero-waste community groups or local thrift drop-offs.' }
        ]
      }
    ],
    recycle: [
      {
        id: 'cust_recycle', icon: '♻️', title: 'Local Sorting & Materials Bin', diff: '⭐', time: '2 min', extra: 'Recycling guide', img: img,
        mats: [name],
        steps: [
          { num: '1️⃣', title: 'Identify Material Code', desc: 'Check bottom stamp for resin code (1-7) or paper/glass symbol.' },
          { num: '2️⃣', title: 'Dispose Responsibility', desc: 'Sort into appropriate local municipality recycling stream.' }
        ]
      }
    ]
  };
}

// Idea Rendering Engine
function renderIdeas() {
  document.getElementById('ideas-item-badge').textContent = `♻️ ${state.item.name}`;
  
  const currentDb = db[state.itemKey] || db.bottle;
  const list = currentDb[state.goal] || currentDb.useful || db.bottle.useful;

  document.getElementById('ideas-count-subtitle').textContent = `We found ${list.length} option(s) for goal: "${state.goal.toUpperCase()}".`;
  
  document.getElementById('ideas-container').innerHTML = list.map(p => `
    <div class="idea-card">
      <img src="${p.img}" alt="${p.title}" class="idea-img">
      <div class="idea-content">
        <h3 class="idea-title">${p.icon} ${p.title}</h3>
        <div class="idea-meta"><span>Difficulty: ${p.diff}</span> • <span>⏱️ ${p.time}</span></div>
        <div class="idea-materials"><strong>Materials required:</strong> ${p.extra}</div>
        <button class="btn btn-primary" style="width:100%" onclick="selectIdea('${p.id}')">View Instructions 🛠️</button>
      </div>
    </div>`).join('');
}

function selectIdea(id) {
  const currentDb = db[state.itemKey] || db.bottle;
  const list = currentDb[state.goal] || currentDb.useful || db.bottle.useful;
  state.idea = list.find(p => p.id === id) || list[0];
  navigateTo('steps');
}

// Step-by-Step Instructions & Checklist Engine
function renderSteps() {
  const p = state.idea || db.bottle.useful[0];
  document.getElementById('step-hero-icon').textContent = p.icon;
  document.getElementById('step-hero-title').textContent = p.title;
  document.getElementById('step-hero-meta').textContent = `Difficulty: ${p.diff} • Estimated Time: ${p.time}`;
  
  document.getElementById('materials-list').innerHTML = p.mats.map((m, i) => `
    <li class="material-item">
      <input type="checkbox" id="m${i}" onchange="checkMaterialProgress()">
      <label for="m${i}">${m}</label>
    </li>`).join('');

  document.getElementById('steps-list').innerHTML = p.steps.map(s => `
    <div class="step-card">
      <div class="step-num">${s.num}</div>
      <div>
        <h4 style="margin-bottom: 0.25rem;">${s.title}</h4>
        <p style="color: var(--text-muted); font-size: 0.95rem;">${s.desc}</p>
      </div>
    </div>`).join('');
}

function checkMaterialProgress() {
  const checkboxes = document.querySelectorAll('#materials-list input[type="checkbox"]');
  const checkedCount = Array.from(checkboxes).filter(cb => cb.checked).length;
  console.log(`Materials progress: ${checkedCount}/${checkboxes.length}`);
}

// Native <dialog> Modal Helpers
const getModal = () => document.getElementById('celebration-modal');
const showCelebration = () => getModal().showModal();
const closeCelebration = () => {
  getModal().close();
  navigateTo('home');
};

// Drag and Drop Binding for Dropzone
document.addEventListener('DOMContentLoaded', () => {
  const dz = document.getElementById('dropzone');
  if (!dz) return;

  ['dragenter', 'dragover'].forEach(evName => {
    dz.addEventListener(evName, e => {
      e.preventDefault();
      dz.style.background = 'var(--primary-light)';
      dz.style.borderColor = 'var(--primary)';
    });
  });

  ['dragleave', 'drop'].forEach(evName => {
    dz.addEventListener(evName, e => {
      e.preventDefault();
      dz.style.background = 'var(--bg-canvas)';
      dz.style.borderColor = 'var(--secondary)';
      if (evName === 'drop' && e.dataTransfer.files[0]) {
        handleFileUpload({ target: { files: e.dataTransfer.files } });
      }
    });
  });
});

