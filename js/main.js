/**
 * LÉXICO - JavaScript Main
 * Aula 09: Componentes e Interatividade (BEM Updated)
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Hambúrguer & Navegação (BEM Classes)
    const menuIcon = document.querySelector('.navbar__toggle');
    const mainNav = document.querySelector('.navbar__menu');
    const overlay = document.querySelector('.navbar__overlay');
    const navLinks = document.querySelectorAll('.navbar__link');

    function toggleMenu() {
        const isActive = mainNav.classList.toggle('navbar__menu--active');
        if (overlay) overlay.classList.toggle('navbar__overlay--active');
        
        // Bloqueia o scroll do body quando o menu está aberto
        document.body.style.overflow = isActive ? 'hidden' : '';
    }

    function closeMenu() {
        mainNav.classList.remove('navbar__menu--active');
        if (overlay) overlay.classList.remove('navbar__overlay--active');
        document.body.style.overflow = '';
    }

    if (menuIcon && mainNav) {
        menuIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && mainNav.classList.contains('navbar__menu--active')) {
                closeMenu();
            }
        });
    }

    // 2. Efeito de Scroll na Navbar (BEM Modifier)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('navbar--scrolled');
        } else {
            navbar.classList.remove('navbar--scrolled');
        }
    });

    // 3. Ano Automático no Footer
    const yearSpan = document.querySelector('#current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 4. Prevenção de Comportamento Padrão em Demonstrações
    const demoLinks = document.querySelectorAll('.playbook-demo a[href="#"], .playbook-demo button');
    demoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Interação capturada no Laboratório de Engenharia.');
        });
    });
});
