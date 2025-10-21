// ハンバーガーメニューの機能
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    // ハンバーガーアイコンのアニメーション
    hamburger.classList.toggle('active');
});

// ナビゲーションリンクをクリックしたらメニューを閉じる
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// スムーズスクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// スクロール時のナビゲーションバーの背景変更
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// スクロールアニメーション（要素が表示されたらフェードイン）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素
const animateElements = document.querySelectorAll('.skill-card, .project-card, .about-text, .contact-info');
animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// フォーム送信の処理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // フォームデータの取得
        const formData = new FormData(contactForm);

        // 送信成功のメッセージを表示（実際のプロジェクトでは、ここでサーバーにデータを送信します）
        alert('メッセージをありがとうございます！できるだけ早くご連絡いたします。');

        // フォームをリセット
        contactForm.reset();
    });
}

// スクロールダウンボタンの機能
const scrollDown = document.querySelector('.scroll-down');
if (scrollDown) {
    scrollDown.addEventListener('click', () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            const offsetTop = aboutSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// ページ読み込み時のアニメーション
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// タイピングエフェクト（オプション）
const typingEffect = () => {
    const text = document.querySelector('.hero-title');
    if (!text) return;

    const originalText = text.textContent;
    text.textContent = '';
    text.style.opacity = '1';

    let i = 0;
    const timer = setInterval(() => {
        if (i < originalText.length) {
            text.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(timer);
        }
    }, 100);
};

// アクティブセクションのハイライト
const sections = document.querySelectorAll('section[id]');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === current) {
            item.classList.add('active');
        }
    });
});

// パララックス効果（ヒーローセクション）
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// カードのホバーエフェクト強化
const cards = document.querySelectorAll('.skill-card, .project-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

console.log('ポートフォリオサイトが正常に読み込まれました！');
