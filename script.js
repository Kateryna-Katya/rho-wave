document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '12px 0';
            header.style.background = 'rgba(10, 12, 16, 0.95)';
        } else {
            header.style.padding = '20px 0';
            header.style.background = 'rgba(10, 12, 16, 0.8)';
        }
    });

    // Simple GSAP entry for footer
    gsap.from('.footer__col', {
        scrollTrigger: '.footer',
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2
    });
});
// Добавьте этот код в script.js к предыдущему
const initHeroWave = () => {
    const container = document.querySelector('#wave-canvas');
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const particlesCount = 5000;
    const positions = new Float32Array(particlesCount * 3);
    const geometry = new THREE.BufferGeometry();

    let i = 0;
    for (let x = -50; x < 50; x += 1.4) {
        for (let z = -50; z < 50; z += 1.4) {
            positions[i] = x;
            positions[i + 1] = 0;
            positions[i + 2] = z;
            i += 3;
        }
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
        color: 0x00ffd5,
        size: 0.08,
        transparent: true,
        opacity: 0.5
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);
    camera.position.z = 15;
    camera.position.y = 10;
    camera.rotation.x = -0.8;

    let clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        const t = clock.getElapsedTime();
        
        const positions = geometry.attributes.position.array;
        let i = 0;
        for (let x = 0; x < 70; x++) {
            for (let z = 0; z < 70; z++) {
                const idx = (x * 70 + z) * 3;
                positions[idx + 1] = Math.sin(t + (x * 0.3)) * Math.cos(t + (z * 0.3)) * 1.5;
            }
        }
        geometry.attributes.position.needsUpdate = true;
        
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
};

// Вызываем в DOMContentLoaded
initHeroWave();

// Анимация текста при загрузке
gsap.from('.hero__title', { opacity: 0, y: 50, duration: 1, delay: 0.2 });
gsap.from('.hero__subtitle', { opacity: 0, y: 30, duration: 1, delay: 0.4 });
gsap.from('.hero__actions', { opacity: 0, y: 20, duration: 1, delay: 0.6 });