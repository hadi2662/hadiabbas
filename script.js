
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    setTimeout(() => {
        follower.style.left = e.clientX + 'px';
        follower.style.top = e.clientY + 'px';
    }, 80);
});
document.querySelectorAll('a,button,.project-card,.skill-card').forEach(el => {
    el.addEventListener('mouseenter', () => follower.classList.add('hover'));
    el.addEventListener('mouseleave', () => follower.classList.remove('hover'));
});

window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
});

document.getElementById('hamburger').onclick = () => document.getElementById('mobile-menu').classList.add('open');
document.getElementById('mobile-close').onclick = () => document.getElementById('mobile-menu').classList.remove('open');
function closeMobileMenu() { document.getElementById('mobile-menu').classList.remove('open'); }

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
                bar.style.width = bar.dataset.w + '%';
            });
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .skill-card, .project-card').forEach(el => observer.observe(el));
document.querySelectorAll('.skill-card').forEach((c, i) => c.style.transitionDelay = (i * 0.07) + 's');
document.querySelectorAll('.project-card').forEach((c, i) => c.style.transitionDelay = (i * 0.1) + 's');

function handleSubmit(e) {
    e.preventDefault();
    const btn = document.getElementById('send-btn');
    btn.textContent = '✓ Message Sent!';
    btn.style.background = 'var(--green)';
    btn.disabled = true;
    setTimeout(() => {
        btn.textContent = 'Send Message →';
        btn.style.background = '';
        btn.disabled = false;
        e.target.reset();
    }, 3000);
}

document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
        const t = document.querySelector(a.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
    });
});