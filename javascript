// ── Linked Scripts ──
// /assets/index-BigCNOXU.js

(function() {
        function updateThemeColor() {
          var isDark = document.documentElement.classList.contains('dark') || 
            (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
          var meta = document.getElementById('theme-color-meta');
          if (meta) meta.setAttribute('content', isDark ? '#000000' : '#ffffff');
        }
        updateThemeColor();
        var observer = new MutationObserver(updateThemeColor);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      })();

// ── Next Inline Block ──

{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebSite",
            "@id": "https://www.deepshop.top/#website",
            "url": "https://www.deepshop.top/",
            "name": "DEEP SHOP",
            "description": "Bangladesh's trusted platform where you can get Border Cross Products + genuine mobiles. 100% authentic and trusted.",
            "publisher": {
              "@id": "https://www.deepshop.top/#organization"
            },
            "potentialAction": {
              "target": "https://www.deepshop.top/#/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          },
          {
            "@type": "Store",
            "@id": "https://www.deepshop.top/#organization",
            "name": "DEEP SHOP",
            "url": "https://www.deepshop.top/",
            "logo": "/favicon.png",
            "image": "/favicon.png",
            "description": "DEEP SHOP - border cross devices, border cross products, illegal products buy sell site.",
            "telephone": "+1 (724) 764-8185",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dhaka",
              "addressCountry": "BD"
            },
            "sameAs": [
              "https://facebook.com/deepshop.top",
              "https://www.instagram.com/deepshop.top",
              "https://www.youtube.com/@deepshopbd"
            ],
            "knowsAbout": ["Border Cross Products", "Border Cross Devices", "Illegal Products Buy Sell Site", "Genuine Mobiles"]
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Where can I buy Border Cross Products and genuine mobiles in Bangladesh?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "DEEP SHOP is the leading trusted platform in Bangladesh for buying genuine mobiles and Border Cross Products."
                }
              },
              {
                "@type": "Question",
                "name": "Does DEEP SHOP sell authentic and genuine devices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, DEEP SHOP is 100% trusted and specifically focuses on genuine mobiles, Border Cross Products, and high-quality accessories."
                }
              }
            ]
          }
        ]
      }

// ── Next Inline Block ──

window.addEventListener("beforeinstallprompt", (e) => {
        e.preventDefault();
        window.deferredPrompt = e;
        window.dispatchEvent(new Event("deferredprompt_ready"));
      });