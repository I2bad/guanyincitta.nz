/**
 * Guan Yin Citta NZ — Language Switcher
 *
 * HOW IT WORKS
 * ─────────────────────────────────────────────────────────────────────────────
 * The <html> element gets class "zh-active" when Chinese is selected.
 * CSS in each page's <head> handles the show/hide instantly (no flash):
 *
 *   .lang-zh           { display: none; }          ← English is default
 *   .zh-active .lang-en { display: none; }
 *   .zh-active .lang-zh { display: inline; }
 *
 * A tiny inline <script> in each page's <head> reads localStorage and adds
 * the class BEFORE the page renders, so the correct language shows immediately.
 *
 * HOW TO ADD A TRANSLATION WHEN MAKING REVISIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * Wrap the text of any element like this:
 *
 *   <h2>
 *     <span class="lang-en">English text here</span>
 *     <span class="lang-zh">中文在这里</span>
 *   </h2>
 *
 * That's it — CSS and this script handle the rest.
 */

(function () {
    var KEY = 'guanyin-lang';

    function currentLang() {
        return document.documentElement.classList.contains('zh-active') ? 'zh' : 'en';
    }

    function updateButtons(lang) {
        var btnEn = document.getElementById('lang-btn-en');
        var btnZh = document.getElementById('lang-btn-zh');
        if (!btnEn || !btnZh) return;
        btnEn.style.backgroundColor = lang === 'en' ? '#ffffff' : 'transparent';
        btnEn.style.color           = lang === 'en' ? '#6e5e00' : '#78716c';
        btnZh.style.backgroundColor = lang === 'zh' ? '#ffffff' : 'transparent';
        btnZh.style.color           = lang === 'zh' ? '#6e5e00' : '#78716c';
    }

    window.switchLang = function (lang) {
        if (lang === 'zh') {
            document.documentElement.classList.add('zh-active');
        } else {
            document.documentElement.classList.remove('zh-active');
        }
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
        try { localStorage.setItem(KEY, lang); } catch (e) {}
        updateButtons(lang);
    };

    // On DOM ready: sync button appearance with whatever class the inline
    // head script already applied (the language itself is already correct).
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            updateButtons(currentLang());
        });
    } else {
        updateButtons(currentLang());
    }
})();
