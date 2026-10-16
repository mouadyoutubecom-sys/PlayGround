# Office Shortcuts Pro

تطبيق ويب متكامل لاختصارات Word و Excel و PowerPoint (152 اختصارًا).

## التشغيل الفوري

```bash
cd office-shortcuts-pro
python3 -m http.server 8000
# افتح: http://localhost:8000
```

> يجب التشغيل عبر سيرفر (وليس file://) حتى يعمل `fetch("data.json")`.

## الملفات

- `index.html` — الهيكل والشريط العلوي
- `style.css` — Glassmorphism + وضع ليلي/فاتح + RTL + متجاوب
- `app.js` — اللغات (ar/en/fr)، البحث الفوري، الفلاتر، المفضلة LocalStorage، النسخ، الإحصائيات، الاختبار
- `data.json` — 152 اختصار `{id, app, category, keys, desc_ar, desc_en, desc_fr}`

## المزايا

- 3 لغات بزر فوري (عربي RTL / English / Français)
- بحث فوري في المفاتيح والوصف بكل اللغات
- فلترة حسب البرنامج (مشتركة/Word/Excel/PowerPoint) وحسب الفئة + تبويبات
- بطاقات بأزرار مفاتيح مرسومة `kbd` + نسخ + قلب مفضلة
- صفحة مفضلة + صفحة «اختبر نفسك» (10 أسئلة عشوائية)
- إحصائيات لكل برنامج
