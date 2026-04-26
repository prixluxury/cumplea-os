// ==================== ELEMENTOS DEL DOM ====================
const audio = document.getElementById('bg-music');
const startBtn = document.getElementById('start-btn');
const welcome = document.getElementById('welcome-screen');
const mainWrap = document.getElementById('main-wrapper');
const player = document.getElementById('player-bar');
const playBtn = document.getElementById('master-play');
const deco = document.getElementById('deco-container');
const cursor = document.getElementById('cursor');
const cursorDot = document.getElementById('cursor-dot');

// ==================== MENSAJES PERSONALIZADOS PARA CADA FOTO ====================
// ¡EDITA ESTOS MENSAJES! Personaliza cada uno para tu novia 💕
const photoMessages = [
    "Esta galeria esta hecha con mucho amor. En cada imagen estan escritas las razones por las cuales te amo, te quiero, te aprecio y te admiro tanto, aunque 40 fotos se quedan bastante cortas, es un pequeño recordatorio de lo mucho que me haces feliz, y de lo mucho que te quiero hacer feliz.",
    "Mas que simples fotos de nuestros personajes, las atesoro bastante y las elegi con mucho amor ya que la nostalgia, los recuerdos y sobre todo lo feliz que empezamos a ser estando juntos sin saber lo que nos esperaria despues, es lo que las hace especiales.",
    "Y esa es una de las primeras razones por las cuales te amo tanto: No eres casualidad en mi vida, eres una de las mejores decisiones que he tomado...",
    "Nunca me cansare de repetirte que desde el momento que supe de ti, fue ese flechazo a primera vista que experimente por primera vez, donde queria intentar poco a poco de todo para lograr captar tu atención y saber mas de ti, donde sin importar que, queria estar contigo.",
    "Y creo que ahi esta la magia de esta primer razon: Llegaste sin hacer ruido y quien iba a imaginar que estar pasandola increible hasta la mañana siguiente, pidiendo 5 minutitos mas, se convertirian en los momentos mas especiales y unicos.",
    "No es solo amor lo que siento por ti… también es admiración, respeto, cariñ0 y una paz que no había encontrado. No sé en qué momento pasaste de ser alguien con quien jugaba… a ser alguien sin quien ya no entiendo mis días. Contigo todo se siente más ligero, incluso cuando no lo es.",
    "No es solo un amor enorme que siento por ti, mi hermosa princesa. Eres ese lugar al que siempre quiero volver, incluso en mis peores días.",
    "Porque si. No todo ha sido fácil, pero incluso en lo complicado, nunca has dejado de ser alguien a quien quiero en mi vida. Alguien en la que nunca dejo de pensar, alguien con quien amo irme a dormir y despertar sabiendo que te tengo a mi lado (y aun asi digas que te dejo SOLA, TRISTE, ABANDONADAAA)",
    "Y con esto, ahi va otra razon mas: TE AMO, te amo de una forma que no conoce de distancias ni de horarios. Es un sentimiento que me llena el pecho de orgullo cada vez que hablo de ti. Me has enseñado que el amor de verdad no es solo estar en las buenas, sino sostenernos con fuerza cuando el mundo se siente pesado. Gracias por ser mi hogar.",
    "Te amo por tu esencia, por tu brillo y por la forma tan única en la que haces que cada día, por simple que sea, se sienta como un regalo.",
    "Eres la persona que me hace querer ser mejor cada día, pero que al mismo tiempo me ama exactamente como soy ahora. Ese equilibrio es lo que me tiene perdidamente enamorado. No te quiero solo para los momentos de risas, te quiero para toda la vida.",
    "Y dentro de este espacio hecho con mucho amor para ti... Gracias, gracias por amarme en mis dias buenos y malos, con todas mis virtudes y mis defectos, me conociste en un nivel que casi nadie ha llegado… Y aun asi con todos esos miedos, te entregue todo mi ser, todo mi corazón los cuales hasta ahora cuidas con todo tu ser, y eso es algo que me tiene perdidamente enamorado y con una tranquilidad y paz en la que puedo ser yo mismo.",
    "Me fascina cómo lograste que mi vulnerabilidad no se sintiera como una debilidad, sino como un puente hacia ti. Te amo porque aceptaste mis piezas rotas y me ayudaste a armar algo mucho más bonito. Eres, sin duda, lo mejor que me ha pasado.",
    "Te amo muchisimo, te amo por la realidad que hemos construido, por las promesas que cumplimos y cumpliremos, y por todo el amor que nos queda por descubrir cuando por fin el tiempo esté de nuestro lado. Quiero todo contigo mi reina.",
    "Si pudiera resumir por qué te quiero tanto, no terminaría nunca. Pero hoy elijo recordarte que te admiro por ser tú misma, por elegirme cada mañana y por hacerme sentir que, a pesar de la distancia, estamos más unidos que cualquier pareja que se tiene cerca.",
    "Si el mundo pudiera verte a través de mis ojos, entenderían por qué soy tu fan número uno. Admiro tu fuerza, la forma en que piensas, tu creatividad para cualquier tipo de ocasion, el empeño que le pones a las cosas por mas simples y sencillas que sean, y esa chispa que tienes para iluminar cualquier situación. No es solo que te ame, es que te admiro tanto que me siento la persona más afortunada por ser quien tiene el privilegio de estar en primera fila viendo como poco a poco logras todo lo que te propones, viendo como brillas, y me encanta ser esa chispa que te hace brillar.",
    "Me encanta ser testigo del como te superas cada día. Eres una mujer increíblemente capaz y decidida, y aunque a veces dudes de ti, yo estaré aquí siempre para recordarte que eres mi mayor inspiración y la de muchas personas. Estare aqui para ser el mejor equipo, juntitos.",
    "(Ah si, y para ver documentales de plantas o si los peces duermen...)",
    "Quiero seguir llenando mi vida de momentos como todos estos que te estoy mostrando, quiero seguir recopilando aventuras e historias contigo mi niña.",
    "Aprecio infinitamente la complicidad que hemos construido. Valoro nuestras bromitas, nuestros gustos en comun y la forma en que nos entendemos en varias cosas muy bonitas, especiales y nuestras. Eres mi mejor amiga, mi pareja, mi complice y con quien quiero toda una vida llena de estos momentos, y esa combinación es lo más valioso que he tenido nunca. Gracias por ser mi confidente y mi compañera de aventuras.",
    "Me siento el hombre mas afortunado del mundo en tenerte en mi vida, valoro cada esfuerzo que haces por nosotros, cada detalle hermoso en el cual te haces muy presente. Te debo toda una vida entera para pagarte todo ese amor que te cargas (y es solo mio jiji)",
    "Lo que más amo de nosotros es nuestra capacidad de transformar lo difícil en algo constructivo. Hemos pasado por altas y bajas, como cualquier pareja, pero cada vez que superamos un bache, me doy cuenta de que somos invencibles. Nuevamente: No te quiero solo para los días de sol, te quiero para aguantar cualquier tormenta, porque sé que de tu mano siempre sale el arcoíris.",
    "Esta galería es un recordatorio de que, aunque 40 fotos parecen mucho, son nada comparado con los miles de momentos que quiero vivir contigo. Te amo por lo que somos cuando estamos juntos, por cómo nos complementamos y por la hermosa historia que estamos escribiendo, letra por letra",
    "Te amo por el pasado que construimos, por el presente que disfrutamos y por el futuro que aún nos falta escribir.",
    "Gracias por aceptar mi mundo y por dejarme formar parte del tuyo. Eres, sin duda, lo mejor que me ha pasado en la vida.",
    "Agradezco cada risa compartida, cada palabra de aliento y cada momento en el que simplemente hemos estado el uno para el otro. Eres una mujer excepcional y me llena de orgullo decir que caminamos juntos.",
    "Agradezco a la vida por permitirme celebrar contigo un año mas de una hermosa vida a tu lado.",
    "Un año más siendo la persona más increíble que conozco.",
    "Un año más de un monton de aventuras que nos faltan por vivir.",
    "Un año más para demostrarte siempre, siempre, siempre. Lo mucho que te amo, que me encantas y lo perdidamente enamorado que me tienes.",
    "Un año más donde mi hermosa princesa aprendio muchas cosas, rio, lloro, pero ante toda adversidad y como lo comente anteriormente. Eres una mujer fuerte y capaz de absolutamente todo.",
    "Gracias por confiar en mí para cuidar tus miedos y tus sueños. Quiero cuidarlos a punta de espada ante cualquier cosa, siempre.",
    "Te elijo para los días de cine, para los dias de flojerita, para las noches de desvelo hablando de nada y de todo, y para las tardes de silencio absoluto. Te elijo en todas tus facetas, porque en todas encuentro algo que me hace volver a enamorarme de ti.",
    "Admiro tu mente brillante y esa forma tan tuya de ver el mundo. A veces dices cosas que me dejan pensando horas, y me doy cuenta de que tengo a mi lado no solo a una mujer hermosa, sino a un ser humano extraordinario del que aprendo algo nuevo cada día.",
    "Prometo seguir siendo quien te cuide los sueños, quien te apoye en tus locuras y quien te recuerde, cada vez que lo olvides, que eres la mujer más increíble que ha pisado este mundo. Juntitos.",
    "Cada foto juntos es un recordatorio de lo bendecido que soy.",
    "Eres mi inspiración, mi motivación, mi razón de ser.",
    "Y con todos estos detalles casi por finalizar",
    "Solamente me queda decirte una ultima cosita...",
    "Te amo. Te amo más de lo que las palabras, las fotos o cualquier cosa puede expresar. ¡Feliz cumpleaños mi amor!"
];

// ==================== CURSOR PERSONALIZADO ====================
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;
let dotX = 0, dotY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    // Cursor principal (con delay)
    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    // Punto central (más rápido)
    dotX += (mouseX - dotX) * 0.25;
    dotY += (mouseY - dotY) * 0.25;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    
    requestAnimationFrame(animateCursor);
}
animateCursor();

// Efectos de cursor
document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
    cursorDot.style.transform = 'scale(1.5)';
});

document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
    cursorDot.style.transform = 'scale(1)';
});

// ==================== CANVAS DE PARTÍCULAS MÁGICAS ====================
const canvas = document.getElementById('particles-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
        ctx.fillStyle = `rgba(255, 107, 157, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

const particlesArray = [];
for (let i = 0; i < 50; i++) {
    particlesArray.push(new Particle());
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    requestAnimationFrame(animateParticles);
}
animateParticles();

// ==================== DECORACIONES FLOTANTES ====================
const emojis = ['🎈', '💖', '🎂', '💗', '✨', '🎁', '🌟', '💝', '🎀', '💕', '🌺', '🦋'];
for(let i = 0; i < 25; i++) {
    const span = document.createElement('span');
    span.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    span.style.left = Math.random() * 95 + '%';
    span.style.animationDelay = Math.random() * 15 + 's';
    span.style.fontSize = (Math.random() * 30 + 20) + 'px';
    span.style.animationDuration = (10 + Math.random() * 10) + 's';
    deco.appendChild(span);
}

// ==================== GENERAR GALERÍA DE FOTOS ====================
const container = document.getElementById('story-container');

for(let i = 1; i <= 40; i++) {
    const item = document.createElement('div');
    item.className = 'photo-item reveal';
    item.dataset.photoIndex = i - 1;
    
    const rotation = (Math.random() * 6 - 3);
    
    item.innerHTML = `
        <div class="photo-frame" style="transform: rotate(${rotation}deg)">
            <img src="Fotos/${i}.png" 
                 onerror="this.src='https://via.placeholder.com/350x400/ff6b9d/ffffff?text=Foto+${i}'"
                 loading="lazy">
            <div class="photo-click-hint">Click para ver 💌</div>
        </div>
    `;
    
    container.appendChild(item);
}

// ==================== MODAL DE FOTOS ====================
const modal = document.getElementById('photo-modal');
const modalImage = document.getElementById('modal-image');
const modalText = document.getElementById('modal-text');
const currentPhotoEl = document.getElementById('current-photo');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');

let currentPhotoIndex = 0;
const totalPhotos = 40;

function openModal(index) {
    currentPhotoIndex = index;
    updateModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Confetti al abrir
    confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
    });
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function updateModalContent() {
    const photoNumber = currentPhotoIndex + 1;
    modalImage.src = `Fotos/${photoNumber}.png`;
    modalImage.onerror = function() {
        this.src = `https://via.placeholder.com/600x800/ff6b9d/ffffff?text=Foto+${photoNumber}`;
    };
    modalText.textContent = photoMessages[currentPhotoIndex];
    currentPhotoEl.textContent = photoNumber;
}

function nextPhoto() {
    currentPhotoIndex = (currentPhotoIndex + 1) % totalPhotos;
    updateModalContent();
    playConfetti();
}

function prevPhoto() {
    currentPhotoIndex = (currentPhotoIndex - 1 + totalPhotos) % totalPhotos;
    updateModalContent();
    playConfetti();
}

function playConfetti() {
    confetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 },
        colors: ['#ff6b9d', '#f4d03f']
    });
}

// Event listeners del modal
modalClose.onclick = closeModal;
modalPrev.onclick = prevPhoto;
modalNext.onclick = nextPhoto;

modal.onclick = (e) => {
    if (e.target === modal) closeModal();
};

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') prevPhoto();
    if (e.key === 'ArrowRight') nextPhoto();
});

// Click en fotos para abrir modal
setTimeout(() => {
    document.querySelectorAll('.photo-item').forEach((item, index) => {
        item.onclick = () => openModal(index);
    });
}, 100);

// ==================== ESTRELLAS FINALES ====================
function createStars() {
    const container = document.getElementById('stars-container');
    if (!container) return;
    
    for(let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.background = '#fff';
        star.style.borderRadius = '50%';
        star.style.opacity = Math.random() * 0.8 + 0.2;
        star.style.animation = `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`;
        container.appendChild(star);
    }
}

// Animación de parpadeo para estrellas
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0%, 100% { opacity: 0.2; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.2); }
    }
`;
document.head.appendChild(style);

// ==================== INICIO DE LA EXPERIENCIA ====================
startBtn.onclick = () => {
    // Espectáculo de fuegos artificiales
    const duration = 2000;
    const end = Date.now() + duration;
    
    const fireworksInterval = setInterval(() => {
        if (Date.now() > end) {
            clearInterval(fireworksInterval);
            return;
        }
        
        confetti({
            particleCount: 3,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
        });
        confetti({
            particleCount: 3,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
        });
    }, 50);
    
    // Transición
    welcome.style.opacity = '0';
    
    setTimeout(() => {
        welcome.remove();
        mainWrap.classList.remove('hidden');
        
        setTimeout(() => {
            player.classList.remove('player-hidden');
        }, 500);
        
        audio.play().catch(err => {
            console.log('Esperando interacción del usuario para reproducir');
        });
        
        initObserver();
        createStars();
        
        // Confetti periódico
        setInterval(() => {
            if (!document.hidden && !modal.classList.contains('active')) {
                confetti({
                    particleCount: 20,
                    spread: 50,
                    origin: { y: 0.7 },
                    colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
                });
            }
        }, 45000);
        
    }, 1000);
};

// ==================== REPRODUCTOR DE MÚSICA (SPOTIFY STYLE) ====================
const seekSlider = document.getElementById('seek-slider');
const volSlider = document.getElementById('vol-slider');
const currentTimeEl = document.getElementById('current-time');
const totalTimeEl = document.getElementById('total-time');
const progressFill = document.getElementById('progress-fill');
const globalProgress = document.getElementById('global-progress');
const volFill = document.getElementById('vol-fill');
const volIcon = document.getElementById('vol-icon');
const progressHandle = document.getElementById('progress-handle');
const playingIndicator = document.getElementById('playing-indicator');

// Play/Pause
playBtn.onclick = () => {
    const icon = playBtn.querySelector('i');
    if(audio.paused) {
        audio.play();
        icon.className = "fas fa-pause";
        playingIndicator.classList.add('active');
    } else {
        audio.pause();
        icon.className = "fas fa-play";
        playingIndicator.classList.remove('active');
    }
};

// Formato de tiempo
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Metadata cargada
audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
    seekSlider.max = audio.duration;
});

// Actualizar tiempo
audio.addEventListener('timeupdate', () => {
    currentTimeEl.textContent = formatTime(audio.currentTime);
    seekSlider.value = audio.currentTime;
    
    const percentage = (audio.currentTime / audio.duration) * 100;
    progressFill.style.width = percentage + '%';
    globalProgress.style.width = percentage + '%';
});

// Control de búsqueda
seekSlider.addEventListener('input', (e) => {
    audio.currentTime = e.target.value;
});

// Control de volumen
volSlider.addEventListener('input', (e) => {
    audio.volume = e.target.value;
    volFill.style.width = (e.target.value * 100) + '%';
    updateVolumeIcon(e.target.value);
});

function updateVolumeIcon(volume) {
    const icon = volIcon.querySelector('i');
    if(volume == 0) {
        icon.className = "fas fa-volume-mute";
    } else if(volume < 0.5) {
        icon.className = "fas fa-volume-down";
    } else {
        icon.className = "fas fa-volume-up";
    }
}

// Inicializar volumen
volFill.style.width = (audio.volume * 100) + '%';

// Click en icono de volumen
volIcon.onclick = () => {
    if(audio.volume > 0) {
        audio.dataset.prevVolume = audio.volume;
        audio.volume = 0;
        volSlider.value = 0;
        volFill.style.width = '0%';
    } else {
        const prevVol = parseFloat(audio.dataset.prevVolume) || 0.8;
        audio.volume = prevVol;
        volSlider.value = prevVol;
        volFill.style.width = (prevVol * 100) + '%';
    }
    updateVolumeIcon(audio.volume);
};

// Botones prev/next
document.getElementById('prev-btn').onclick = () => {
    audio.currentTime = Math.max(0, audio.currentTime - 10);
};

document.getElementById('next-btn').onclick = () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
};

// Botones shuffle y repeat (decorativos)
document.getElementById('shuffle-btn').onclick = function() {
    this.style.color = this.style.color === 'rgb(255, 107, 157)' ? '' : '#ff6b9d';
};

document.getElementById('repeat-btn').onclick = function() {
    audio.loop = !audio.loop;
    this.style.color = audio.loop ? '#ff6b9d' : '';
};

// ==================== OBSERVER PARA ANIMACIONES ====================
function initObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('active');
                
                // Efectos especiales
                if(entry.target.classList.contains('letter-section')) {
                    confetti({
                        particleCount: 60,
                        spread: 70,
                        origin: { y: 0.6 },
                        colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
                    });
                }
                
                if(entry.target.classList.contains('final-section')) {
                    setTimeout(() => {
                        confetti({
                            particleCount: 150,
                            spread: 90,
                            origin: { y: 0.5 },
                            colors: ['#ff6b9d', '#c9a0dc', '#f4d03f']
                        });
                    }, 500);
                }
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
}

// ==================== EFECTOS DE HOVER EN ELEMENTOS INTERACTIVOS ====================
const interactiveElements = document.querySelectorAll('.heart-btn, .player-btn, .modal-close, .modal-nav');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.style.transform = 'scale(1.5)';
        cursor.style.borderColor = '#f4d03f';
    });
    
    el.addEventListener('mouseleave', () => {
        cursor.style.transform = 'scale(1)';
        cursor.style.borderColor = '#ff6b9d';
    });
});

// ==================== PARALLAX EN SCROLL ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    if (canvas) {
        canvas.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ==================== CONSOLE ESPECIAL ====================
console.log('%c💖 Feliz Cumpleaños Mi Amor 💖', 'font-size: 24px; color: #ff6b9d; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);');
console.log('%c✨ Esta página fue creada con todo mi amor especialmente para ti ✨', 'font-size: 14px; color: #c9a0dc;');
console.log('%cCada línea de código, cada animación, cada detalle... todo pensado en hacerte sonreír 💕', 'font-size: 12px; color: #f4d03f;');
