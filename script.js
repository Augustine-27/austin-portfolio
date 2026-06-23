/* ─── TERMINAL TYPING ANIMATION ─────────────────────────────────────────── */
function typeText(el, text, delay, speed = 45) {
  return new Promise(resolve => {
    setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        el.textContent += text[i];
        i++;
        if (i >= text.length) { clearInterval(interval); resolve(); }
      }, speed);
    }, delay);
  });
}

async function runTerminal() {
  const name     = document.getElementById('typed-name');
  const roles    = document.getElementById('typed-roles');
  const location = document.getElementById('typed-location');
  if (!name) return;

  await typeText(name,     'Chikezie Augustine Agu',                     400,  40);
  await typeText(roles,    'Data Analyst  |  Developer  |  VA Specialist & Technical Support', 800,  28);
  await typeText(location, 'Delta State, Nigeria 🌍',                  500,  35);
}

runTerminal();

/* ─── NAVBAR SCROLL ─────────────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

/* ─── MOBILE NAV TOGGLE ─────────────────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ─── PROJECT FILTER ────────────────────────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.opacity    = '0';
      card.style.transform  = 'scale(0.95)';
      card.style.transition = 'none';

      setTimeout(() => {
        card.classList.toggle('hidden', !match);
        if (match) {
          setTimeout(() => {
            card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
            card.style.opacity    = '1';
            card.style.transform  = 'scale(1)';
          }, 10);
        }
      }, 150);
    });
  });
});

/* ─── SCROLL REVEAL ─────────────────────────────────────────────────────── */
const observerOpts = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOpts);

function addFadeIns() {
  const targets = [
    '.project-card', '.skill-group', '.stat-card',
    '.timeline-item', '.learning-item', '.about-text p',
    '.contact-item', '.section-title', '.section-eyebrow'
  ];
  targets.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('fade-in');
      el.style.transitionDelay = `${i * 0.05}s`;
      observer.observe(el);
    });
  });
}

addFadeIns();

/* ─── CONTACT FORM ──────────────────────────────────────────────────────── */
const form   = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', e => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled    = true;

  // Simulate send (replace with EmailJS / Formspree endpoint)
  setTimeout(() => {
    status.textContent  = '✓ Message sent! I will get back to you shortly.';
    status.style.color  = '#34D399';
    btn.textContent     = 'Send Message';
    btn.disabled        = false;
    form.reset();
    setTimeout(() => { status.textContent = ''; }, 5000);
  }, 1400);
});

/* ─── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) current = section.id;
  });
  navItems.forEach(a => {
    a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
  });
});

/* ─── CV DOWNLOAD FALLBACK ──────────────────────────────────────────────── */
const cvBtn = document.getElementById('cv-download');
if (cvBtn) {
  cvBtn.addEventListener('click', e => {
    // If no CV file is present, show message
    const link = document.createElement('a');
    link.href  = 'Austin_Agu_CV.docx';
    fetch('Austin_Agu_CV.docx', { method: 'HEAD' })
      .then(res => {
        if (!res.ok) {
          e.preventDefault();
          alert('Place your CV file named "Austin_Agu_CV.docx" in the same folder as index.html to enable download.');
        }
      })
      .catch(() => {
        e.preventDefault();
        alert('Place your CV file named "Austin_Agu_CV.docx" in the same folder as index.html to enable download.');
      });
  });
}
