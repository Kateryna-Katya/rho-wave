document.addEventListener('DOMContentLoaded', () => {
    // 1. Утилита для инициализации иконок Lucide
    const refreshIcons = () => {
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    };
    refreshIcons();

    // 2. Мобильное меню (Бургер)
    const burger = document.querySelector('.burger');
    const navMobile = document.querySelector('.nav-mobile');
    const body = document.body;
    
    if (burger && navMobile) {
        burger.addEventListener('click', () => {
            const isActive = navMobile.classList.toggle('active');
            burger.classList.toggle('toggle'); // Технический класс для стилизации
            
            // Блокировка скролла основной страницы при открытом меню
            if (isActive) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = '';
            }
            
            // Перерисовываем иконки, если это необходимо
            refreshIcons();
        });

        // Закрытие меню при клике на ссылки внутри мобильной навигации
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('active');
                burger.classList.remove('toggle');
                body.style.overflow = '';
            });
        });
    }

    // 3. Three.js Hero Wave
    const initHeroWave = () => {
        const container = document.querySelector('#wave-canvas');
        if (!container || typeof THREE === 'undefined') return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const positions = new Float32Array(5000 * 3);
        const geometry = new THREE.BufferGeometry();
        let i = 0;
        for (let x = -50; x < 50; x += 1.4) {
            for (let z = -50; z < 50; z += 1.4) {
                positions[i] = x; positions[i+1] = 0; positions[i+2] = z; i += 3;
            }
        }
        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        const material = new THREE.PointsMaterial({ color: 0x00ffd5, size: 0.08, transparent: true, opacity: 0.4 });
        const points = new THREE.Points(geometry, material);
        scene.add(points);
        camera.position.set(0, 10, 15);
        camera.rotation.x = -0.8;

        const clock = new THREE.Clock();
        function animate() {
            requestAnimationFrame(animate);
            const t = clock.getElapsedTime();
            const pos = geometry.attributes.position.array;
            for (let x = 0; x < 70; x++) {
                for (let z = 0; z < 70; z++) {
                    pos[(x * 70 + z) * 3 + 1] = Math.sin(t + (x * 0.3)) * Math.cos(t + (z * 0.3)) * 1.2;
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
    initHeroWave();

    // 4. Swiper Slider (Максимум 3 слайда на десктопе)
    if (document.querySelector('.courses-slider')) {
        new Swiper('.courses-slider', {
            slidesPerView: 1, 
            spaceBetween: 20, 
            freeMode: true,
            grabCursor: true,
            pagination: { el: '.swiper-pagination', clickable: true },
            breakpoints: { 
                768: { slidesPerView: 2, spaceBetween: 20 }, 
                // Ограничиваем до 3 слайдов на экранах от 1024px
                1024: { slidesPerView: 3, spaceBetween: 30, freeMode: false } 
            }
        });
    }

    // 5. AOS Animate (Инициализация только при наличии библиотеки)
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }

    // 6. FAQ Accordion
    document.querySelectorAll('.faq__header').forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const wasActive = item.classList.contains('active');
            
            // Опционально: закрыть остальные вкладки при открытии текущей
            document.querySelectorAll('.faq__item').forEach(el => el.classList.remove('active'));
            
            if (!wasActive) {
                item.classList.add('active');
            }
        });
    });

    // 7. Contact Form & Captcha
    const form = document.querySelector('#main-form');
    if(form) {
        let a = Math.floor(Math.random() * 10), b = Math.floor(Math.random() * 10);
        const qLabel = document.querySelector('#captcha-question');
        if(qLabel) qLabel.textContent = `${a} + ${b} = `;
        
        const phoneInput = document.querySelector('#phone-input');
        if(phoneInput) {
            phoneInput.addEventListener('input', e => {
                // Очистка ввода: только цифры
                e.target.value = e.target.value.replace(/[^0-9]/g, '');
            });
        }

        form.addEventListener('submit', e => {
            e.preventDefault();
            const ansInput = document.querySelector('#captcha-answer');
            if(ansInput && parseInt(ansInput.value) === (a+b)) {
                const successMsg = document.querySelector('#form-success');
                if(successMsg) successMsg.classList.add('active');
                refreshIcons(); // Рендерим иконку в сообщении об успехе
                form.reset();
            } else { 
                alert('Неверный ответ на математическую задачу!'); 
            }
        });
    }

    // 8. Cookie Popup Logic (Исправлено появление и рендер иконок)
    const cookiePopup = document.querySelector('#cookie-popup');
    const cookieAccept = document.querySelector('#cookie-accept');
    
    if (cookiePopup && !localStorage.getItem('cookies-accepted')) {
        setTimeout(() => {
            cookiePopup.classList.add('show');
            // Принудительно рендерим иконки внутри поп-апа после его активации
            refreshIcons();
        }, 3000);
    }
    
    if(cookieAccept) {
        cookieAccept.addEventListener('click', () => {
            localStorage.setItem('cookies-accepted', 'true');
            cookiePopup.classList.remove('show');
        });
    }

    // 9. Parallax Visual (Только на десктопе) & Header Scroll Effect
    const headerElement = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            headerElement.classList.add('scrolled');
        } else {
            headerElement.classList.remove('scrolled');
        }
    });

    window.addEventListener('mousemove', (e) => {
        const cardMockup = document.querySelector('.tech__card-mockup');
        if (cardMockup && window.innerWidth > 1024) {
            const xRotation = (window.innerWidth / 2 - e.pageX) / 45;
            const yRotation = (window.innerHeight / 2 - e.pageY) / 45;
            cardMockup.style.transform = `rotateY(${xRotation}deg) rotateX(${yRotation}deg) rotate3d(1, 1, 1, 15deg)`;
        }
    });
});