/**
 * GLOBAL HABER PORTALI - UYGULAMA MANTIĞI
 * SOLID Prensiplerine ve Türkçe İsimlendirme Kurallarına Uygun Olarak Yazılmıştır.
 */

// --- VERİ MODELİ / STATİK YAPILANDIRMALAR ---

// Canlı Haber ve Spor Kanalları Listesi (Canlı Yayın Embed URL'leri ile - Varsayılan Sistem Kanalları)
const HABER_KANALLARI = [
    // Türkiye
    { id: "trt-haber", ad: "TRT Haber", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=a9aEQhgQJ4Q", logo: "TRT" },
    { id: "cnn-turk", ad: "CNN Türk", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=6N8_r2uwLEc", logo: "CNN" },
    { id: "a-haber", ad: "A Haber", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=nmY9i63t6qo", logo: "AH" },
    { id: "haber-global", ad: "Haber Global", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=EqoCJ8BPxtE", logo: "HG" },
    { id: "ntv", ad: "NTV", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=pqq5c6k70kk", logo: "NTV" },
    { id: "haberturk", ad: "Habertürk TV", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=RNVNlJSUFoE", logo: "HT" },
    { id: "sozcu-tv", ad: "Sözcü TV", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=ztmY_cCtUl0", logo: "SZC" },
    { id: "halk-tv", ad: "Halk TV", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=8uNelFh0oz4", logo: "HLK" },
    { id: "bein-sports", ad: "beIN SPORTS TR", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=i7UpPgxfZZ8", logo: "BEIN" },
    { id: "gs-tv", ad: "GS TV", bolge: "Türkiye", ulke: "TR", yayinUrl: "https://www.youtube.com/watch?v=YgY1Jptef5Q&list=PLSoUKEof3OcB9t6-jtIBRGti7inIpURgw", logo: "GS" },

    // Kuzey Amerika
    { id: "abc-news", ad: "ABC News", bolge: "Kuzey Amerika", ulke: "US", yayinUrl: "https://www.youtube.com/watch?v=PHXFb9mezpY", logo: "ABC" },
    { id: "nbc-news", ad: "NBC News", bolge: "Kuzey Amerika", ulke: "US", yayinUrl: "https://www.youtube.com/watch?v=G8eA4Xs2iaQ", logo: "NBC" },
    { id: "cbs-news", ad: "CBS News", bolge: "Kuzey Amerika", ulke: "US", yayinUrl: "https://www.youtube.com/watch?v=UcZWTA0qseQ", logo: "CBS" },
    { id: "bloomberg", ad: "Bloomberg TV", bolge: "Kuzey Amerika", ulke: "US", yayinUrl: "https://www.youtube.com/watch?v=iEpJwprxDdk", logo: "BLM" },
    { id: "livenow-fox", ad: "LiveNOW from FOX", bolge: "Kuzey Amerika", ulke: "US", yayinUrl: "https://www.youtube.com/watch?v=C96oohpWBGw", logo: "FOX" },

    // Avrupa
    { id: "bbc-news", ad: "BBC News", bolge: "Avrupa", ulke: "GB", yayinUrl: "https://www.youtube.com/BBCNEWS/live", logo: "BBC" },
    { id: "sky-news", ad: "Sky News", bolge: "Avrupa", ulke: "GB", yayinUrl: "https://www.youtube.com/watch?v=YDvsBbKfLPA", logo: "SKY" },
    { id: "france-24", ad: "France 24 EN", bolge: "Avrupa", ulke: "FR", yayinUrl: "https://www.youtube.com/watch?v=HvZt-nh9sGg", logo: "F24" },
    { id: "dw-news", ad: "DW News", bolge: "Avrupa", ulke: "DE", yayinUrl: "https://www.youtube.com/watch?v=LuKwFajn37U", logo: "DW" },
    { id: "euronews", ad: "Euronews EN", bolge: "Avrupa", ulke: "FR", yayinUrl: "https://www.youtube.com/watch?v=O9mOtdZ-nSk", logo: "EU" },
    { id: "rtve", ad: "RTVE Noticias", bolge: "Avrupa", ulke: "ES", yayinUrl: "https://www.youtube.com/watch?v=b4tE5aKhtlg", logo: "RTV" },
    { id: "ert-news", ad: "ERT News GR", bolge: "Avrupa", ulke: "GR", yayinUrl: "https://www.youtube.com/watch?v=uWIhV9gQClg", logo: "ERT" },
    { id: "greece-tv", ad: "TV Greece", bolge: "Avrupa", ulke: "GR", yayinUrl: "https://www.youtube.com/watch?v=5p-s-1453Us", logo: "OPN" },
    { id: "tinaportwebcam", ad: "Tina Port", bolge: "Avrupa", ulke: "GR", yayinUrl: "https://www.youtube.com/watch?v=5p-s-1453Us", logo: "WebCam1" },

    // Diğer Bölgeler (Ortadoğu, KKTC vb.)
    { id: "brt-1", ad: "BRT 1 (KKTC)", bolge: "Ortadoğu", ulke: "CY", yayinUrl: "https://player.kuzeykibrissmart.tv/brt1hd?autoplay=0", logo: "BRT" },
    { id: "brt-2", ad: "BRT 2 (KKTC)", bolge: "Ortadoğu", ulke: "CY", yayinUrl: "https://player.kuzeykibrissmart.tv/brt2hd", logo: "BRT" },
    { id: "brt-3", ad: "BRT 3 (KKTC)", bolge: "Ortadoğu", ulke: "CY", yayinUrl: "https://player.kuzeykibrissmart.tv/brt3hd", logo: "BRT" },
    { id: "kibris-tv", ad: "Kıbrıs TV (KKTC)", bolge: "Ortadoğu", ulke: "CY", yayinUrl: "https://player.kuzeykibrissmart.tv/kibristv", logo: "KIB" },
    { id: "sigma-tv", ad: "Sigma TV (Güney Kıbrıs)", bolge: "Ortadoğu", ulke: "CY", yayinUrl: "https://ottstream.iptv.prime-tel.net/streaming-web/SigmaLive/playlist.m3u8", logo: "SIG" },
    { id: "al-jazeera", ad: "Al Jazeera EN", bolge: "Ortadoğu", ulke: "QA", yayinUrl: "https://www.youtube.com/watch?v=gCNeDWCI0vo", logo: "AJ" },
    { id: "alikhbaria-syria", ad: "Alikhbaria Syria", bolge: "Ortadoğu", ulke: "SY", yayinUrl: "https://www.youtube.com/watch?v=1M7FTAyHD0s", logo: "SYR" },
    { id: "syria-tv", ad: "Syria TV", bolge: "Ortadoğu", ulke: "SY", yayinUrl: "https://www.youtube.com/watch?v=ZN0aK3V0ds0", logo: "STV" },
    { id: "i24-news", ad: "i24 News EN", bolge: "Ortadoğu", ulke: "IL", yayinUrl: "https://www.youtube.com/watch?v=gfg2lLqNx2Q", logo: "I24" },
    { id: "kan-11", ad: "Kan 11", bolge: "Ortadoğu", ulke: "IL", yayinUrl: "https://www.youtube.com/watch?v=vEojUb8mVKk&t=1s", logo: "KAN" },
    { id: "nhk-world", ad: "NHK World JP", bolge: "Asya", ulke: "JP", yayinUrl: "https://www.youtube.com/watch?v=f0lYkdA-Gtw", logo: "NHK" },
    { id: "russian-24", ad: "Russian-24", bolge: "Asya", ulke: "RU", yayinUrl: "https://www.youtube.com/watch?v=t9Ilev-uk4w", logo: "RU24" },
    { id: "cctv", ad: "CCTV", bolge: "Asya", ulke: "CN", yayinUrl: "https://www.youtube.com/watch?v=BOy2xDU1LC8", logo: "CCTV" },
    { id: "cgtn-europe", ad: "CGTN Europe News", bolge: "Asya", ulke: "CN", yayinUrl: "https://www.youtube.com/watch?v=_6dRRfnYJws", logo: "CGTN" },
    { id: "xinhua", ad: "Xinhua", bolge: "Asya", ulke: "CN", yayinUrl: "https://www.youtube.com/watch?v=XWq5kBlakcQ", logo: "XIN" },
    { id: "tbs", ad: "TBS", bolge: "Asya", ulke: "JP", yayinUrl: "https://www.youtube.com/watch?v=Anr15FA9OCI", logo: "TBS" },
    { id: "nippon", ad: "Nippon", bolge: "Asya", ulke: "JP", yayinUrl: "https://www.youtube.com/watch?v=t9kwjZBLI-A", logo: "NPN" },
    { id: "kbs", ad: "KBS", bolge: "Asya", ulke: "KR", yayinUrl: "https://www.youtube.com/watch?v=OxQQsIvJTTU", logo: "KBS" },
    { id: "mbc", ad: "MBC", bolge: "Asya", ulke: "KR", yayinUrl: "https://www.youtube.com/watch?v=q9bM12ucTIY", logo: "MBC" },
    { id: "yonhapnewstv", ad: "YonhapnewsTV", bolge: "Asya", ulke: "KR", yayinUrl: "https://www.youtube.com/watch?v=6QZ_qc75ihU", logo: "YNP" },
    { id: "jtbc-news", ad: "JTBC News", bolge: "Asya", ulke: "KR", yayinUrl: "https://www.youtube.com/watch?v=FIZbfYLdFEU", logo: "JTBC" },
    { id: "kctv", ad: "KCTV", bolge: "Asya", ulke: "KP", yayinUrl: "https://www.youtube.com/watch?v=mW0DLvWt_ek", logo: "KCTV" }
];

// Haber Ajansları Listesi (Kararlı ve Çalışan RSS Beslemeleri)
const HABER_AJANSLARI = [
    { id: "aa", ad: "Anadolu Ajansı", bolge: "Türkiye", ulke: "TR", rssUrl: "https://www.aa.com.tr/tr/rss/default?cat=guncel", logo: "AA" },
    { id: "trt-rss", ad: "TRT Haber Ajansı", bolge: "Türkiye", ulke: "TR", rssUrl: "https://www.trthaber.com/manset_articles.rss", logo: "TRT" },
    { id: "nyt", ad: "New York Times", bolge: "Kuzey Amerika", ulke: "US", rssUrl: "https://rss.nytimes.com/services/xml/rss/nyt/World.xml", logo: "NYT" },
    { id: "cnn-rss", ad: "CNN World News", bolge: "Kuzey Amerika", ulke: "US", rssUrl: "http://rss.cnn.com/rss/edition.rss", logo: "CNN" },
    { id: "al-jazeera-rss", ad: "Al Jazeera News", bolge: "Ortadoğu", ulke: "QA", rssUrl: "https://www.aljazeera.com/xml/rss/all.xml", logo: "AJ" },
    { id: "kibris-postasi-rss", ad: "Kıbrıs Postası (KKTC)", bolge: "Ortadoğu", ulke: "CY", rssUrl: "https://www.kibrispostasi.com/rss", logo: "KPT" },
    { id: "cyprus-mail-rss", ad: "Cyprus Mail (Güney Kıbrıs)", bolge: "Ortadoğu", ulke: "CY", rssUrl: "https://cyprus-mail.com/feed/", logo: "CM" },
    { id: "bbc-rss", ad: "BBC News", bolge: "Avrupa", ulke: "GB", rssUrl: "https://feeds.bbci.co.uk/news/world/rss.xml", logo: "BBC" },
    { id: "dw-rss", ad: "Deutsche Welle RSS", bolge: "Avrupa", ulke: "DE", rssUrl: "https://rss.dw.com/xml/rss-en-all", logo: "DW" },
    { id: "france-24-rss", ad: "France 24 Feed", bolge: "Avrupa", ulke: "FR", rssUrl: "https://www.france24.com/en/rss", logo: "F24" },
    { id: "athens-news-rss", ad: "Athens News", bolge: "Avrupa", ulke: "GR", rssUrl: "https://tr.rua.gr/feed/", logo: "ATH" },
    { id: "protothema", ad: "Protothema", bolge: "Avrupa", ulke: "GR", rssUrl: "https://en.protothema.gr/feed", logo: "PRT" },
    { id: "newsit", ad: "Newsit", bolge: "Avrupa", ulke: "GR", rssUrl: "https://www.newsit.gr/feed/", logo: "NIT" },
    { id: "news247", ad: "News 24/7", bolge: "Avrupa", ulke: "GR", rssUrl: "https://www.news247.gr/feed/", logo: "N24" },
    { id: "naftemporiki", ad: "Naftemporiki", bolge: "Avrupa", ulke: "GR", rssUrl: "https://www.naftemporiki.gr/feed/", logo: "NAF" }
];

// RSS servislerinin veya ağ bağlantısının çalışmadığı durumlarda gösterilecek yedek yerel haberler
const YEDEK_HABERLER = [
    { kaynak: "Anadolu Ajansı", bolge: "Türkiye", baslik: "Küresel Teknolojik Yatırımlarda Yapay Zeka Rüzgarı", ozet: "Teknoloji devlerinin yapay zeka altyapılarına yönelik milyarlarca dolarlık yeni yatırımları piyasaları canlandırdı.", link: "https://www.aa.com.tr", tarih: "Şimdi" },
    { kaynak: "TRT Haber", bolge: "Türkiye", baslik: "Milli Atletlerden Avrupa Arenasında Yeni Başarılar", ozet: "Avrupa Atletizm Şampiyonası'nda piste çıkan milli sporcularımız rekor derecelerle madalyaya koştu.", link: "https://www.trthaber.com", tarih: "10 dk önce" },
    { kaynak: "BBC News", bolge: "Avrupa", baslik: "Küresel İklim Konferansı'nda Karbon Azaltım Taahhüdü", ozet: "Birleşmiş Milletler öncülüğünde toplanan iklim zirvesinde sanayileşmiş ülkeler yeni emisyon planlarını onayladı.", link: "https://www.bbc.com", tarih: "30 dk önce" },
    { kaynak: "New York Times", bolge: "Kuzey Amerika", baslik: "Derin Uzay Teleskobundan Yeni Galaksi Keşifleri", ozet: "Yeni nesil uzay teleskobu, evrenin erken dönemlerine ait daha önce görüntülenmemiş gökadaları kaydetti.", link: "https://www.nytimes.com", tarih: "1 saat önce" },
    { kaynak: "Al Jazeera", bolge: "Ortadoğu", baslik: "Bölgesel Güneş Enerjisi Projelerinde Büyük Ortaklık", ozet: "Ortadoğu genelinde kurulacak dev güneş enerjisi santralleri için çok uluslu finansman anlaşmaları imzalandı.", link: "https://www.aljazeera.com", tarih: "2 saat önce" },
    { kaynak: "Athens News", bolge: "Avrupa", baslik: "Yunanistan Genelinde Turizm Sezonu Rekorla Başladı", ozet: "Atina ve Yunan adalarında otel doluluk oranları mayıs ayı itibarıyla son 5 yılın en yüksek seviyesine ulaştı.", link: "https://tr.rua.gr", tarih: "3 saat önce" }
];

// Ülke ISO Kodlarının Arayüz Coğrafi Bölgelerine Eşlenmesi (Gerçekçi Harita Etkileşimi İçin)
const BOLGE_ESLESTIRME = {
    // Türkiye
    tr: "Türkiye",
    // Kuzey Amerika
    us: "Kuzey Amerika", ca: "Kuzey Amerika", mx: "Kuzey Amerika", gl: "Kuzey Amerika",
    // Güney Amerika
    br: "Güney Amerika", ar: "Güney Amerika", cl: "Güney Amerika", co: "Güney Amerika", pe: "Güney Amerika", ve: "Güney Amerika", bo: "Güney Amerika", uy: "Güney Amerika", py: "Güney Amerika", ec: "Güney Amerika", gy: "Güney Amerika", sr: "Güney Amerika", gf: "Güney Amerika",
    // Avrupa
    gb: "Avrupa", fr: "Avrupa", de: "Avrupa", it: "Avrupa", es: "Avrupa", be: "Avrupa", nl: "Avrupa", ch: "Avrupa", at: "Avrupa", dk: "Avrupa", se: "Avrupa", no: "Avrupa", fi: "Avrupa", ie: "Avrupa", pl: "Avrupa", ua: "Avrupa", ro: "Avrupa", gr: "Avrupa", pt: "Avrupa", hu: "Avrupa", cz: "Avrupa", sk: "Avrupa", bg: "Avrupa", hr: "Avrupa", rs: "Avrupa", si: "Avrupa", ba: "Avrupa", mk: "Avrupa", al: "Avrupa", ee: "Avrupa", lv: "Avrupa", lt: "Avrupa", is: "Avrupa", md: "Avrupa", by: "Avrupa",
    // Ortadoğu
    ae: "Ortadoğu", sa: "Ortadoğu", qa: "Ortadoğu", eg: "Ortadoğu", ir: "Ortadoğu", iq: "Ortadoğu", sy: "Ortadoğu", jo: "Ortadoğu", il: "Ortadoğu", lb: "Ortadoğu", ye: "Ortadoğu", om: "Ortadoğu", kw: "Ortadoğu", cy: "Ortadoğu",
    // Asya
    cn: "Asya", jp: "Asya", in: "Asya", kr: "Asya", kp: "Asya", tw: "Asya", vn: "Asya", ph: "Asya", id: "Asya", my: "Asya", th: "Asya", pk: "Asya", bd: "Asya", lk: "Asya", np: "Asya", mm: "Asya", kh: "Asya", la: "Asya", af: "Asya", am: "Asya", az: "Asya", ge: "Asya", kz: "Asya", uz: "Asya", tm: "Asya", tj: "Asya", kg: "Asya", ru: "Asya", mn: "Asya", jp: "Asya",
    // Afrika
    za: "Afrika", ng: "Afrika", ke: "Afrika", et: "Afrika", dz: "Afrika", ma: "Afrika", tn: "Afrika", ly: "Afrika", sd: "Afrika", so: "Afrika", ao: "Afrika", mz: "Afrika", gh: "Afrika", ci: "Afrika", sn: "Afrika", cm: "Afrika", ug: "Afrika", tz: "Afrika", zw: "Afrika", zm: "Afrika", mg: "Afrika", ml: "Afrika", ne: "Afrika", td: "Afrika", mr: "Afrika", gw: "Afrika", gn: "Afrika", sl: "Afrika", lr: "Afrika", tg: "Afrika", bj: "Afrika", cf: "Afrika", cg: "Afrika", cd: "Afrika", ga: "Afrika", gq: "Afrika", bi: "Afrika", rw: "Afrika", dj: "Afrika", er: "Afrika", ls: "Afrika", sz: "Afrika", na: "Afrika", bw: "Afrika", mw: "Afrika",
    // Avustralya / Okyanusya
    au: "Avustralya", nz: "Avustralya", pg: "Avustralya", fj: "Avustralya", sb: "Avustralya", vu: "Avustralya", nc: "Avustralya"
};

// Harita İşaretçileri İçin Ülke Koordinatları (Leaflet Haritası İçin)
const ULKE_KOORDINATLARI = {
    tr: [39.92077, 32.85411], // Türkiye (Ankara)
    us: [38.9072, -77.0369],  // ABD (Washington D.C.)
    gb: [51.5074, -0.1278],   // İngiltere (Londra)
    fr: [48.8566, 2.3522],    // Fransa (Paris)
    de: [52.5200, 13.4050],   // Almanya (Berlin)
    es: [40.4168, -3.7038],   // İspanya (Madrid)
    gr: [37.9838, 23.7275],   // Yunanistan (Atina)
    cy: [35.1856, 33.3823],   // Kıbrıs (Lefkoşa)
    qa: [25.2854, 51.5310],   // Katar (Doha)
    sy: [33.5138, 36.2765],   // Suriye (Şam)
    il: [31.7683, 35.2137],   // İsrail (Kudüs)
    ru: [55.7558, 37.6173],   // Rusya (Moskova)
    cn: [39.9042, 116.4074],  // Çin (Pekin)
    jp: [35.6762, 139.6503],  // Japonya (Tokyo)
    kr: [37.5665, 126.9780],  // Güney Kore (Seul)
    kp: [39.0392, 125.7625]   // Kuzey Kore (Pyongyang)
};

// --- MODÜLLER (SOLID PRENSİPLERİNE UYGUN) ---

/**
 * 1. AYARLAR YÖNETİCİSİ (AyarlarYöneticisi)
 * Kullanıcı tercihlerini ve özel eklenen canlı kanalları tarayıcı belleğinde (localStorage) saklar.
 */
class AyarlarYoneticisi {
    constructor() {
        this.varsayilanAnahtar = "global_haber_ayarlar";
        this.ayarlar = {
            varsayilanKanal: "trt-haber",
            varsayilanAjans: "all",
            guncellemeSikligi: 120000, // 2 dakika (milisaniye)
            kanallar: [] // Tüm haber kanalları (sistem + özel)
        };
        this.ayarlariYukle();
    }

    ayarlariYukle() {
        const kaydedilmis = localStorage.getItem(this.varsayilanAnahtar);
        if (kaydedilmis) {
            try {
                this.ayarlar = { ...this.ayarlar, ...JSON.parse(kaydedilmis) };
            } catch (hata) {
                console.error("Ayarlar yüklenirken hata oluştu:", hata);
            }
        }

        // Eğer localstorage'da kanallar listesi yoksa veya boşsa, varsayılan sistem kanallarını yükleyelim
        if (!this.ayarlar.kanallar || this.ayarlar.kanallar.length === 0) {
            this.ayarlar.kanallar = JSON.parse(JSON.stringify(HABER_KANALLARI));

            // Geriye dönük uyumluluk: eğer eski ayarlarda ozelKanallar kalmışsa onları da aktar
            if (this.ayarlar.ozelKanallar && this.ayarlar.ozelKanallar.length > 0) {
                this.ayarlar.kanallar = [...this.ayarlar.kanallar, ...this.ayarlar.ozelKanallar];
                delete this.ayarlar.ozelKanallar;
            }

            this.ayarlariKaydet(this.ayarlar);
        } else {
            // localStorage'da kanallar varsa:
            // 1) Mevcut sistem kanallarının URL'lerini güncelle
            // 2) Yeni eklenen sistem kanallarını listede yoksa ekle
            let guncellendi = false;

            const mevcutIdler = new Set(this.ayarlar.kanallar.map(k => k.id));

            // Mevcut kanalların URL'lerini güncelle
            this.ayarlar.kanallar = this.ayarlar.kanallar.map(kanal => {
                const orijinalKanal = HABER_KANALLARI.find(hk => hk.id === kanal.id);
                if (orijinalKanal) {
                    if (!kanal.yayinUrl || kanal.yayinUrl !== orijinalKanal.yayinUrl) {
                        guncellendi = true;
                        return { ...kanal, yayinUrl: orijinalKanal.yayinUrl };
                    }
                }
                return kanal;
            });

            // localStorage'da olmayan yeni sistem kanallarını sona ekle
            HABER_KANALLARI.forEach(sistemKanal => {
                if (!mevcutIdler.has(sistemKanal.id)) {
                    this.ayarlar.kanallar.push(JSON.parse(JSON.stringify(sistemKanal)));
                    guncellendi = true;
                }
            });

            // Halk TV'yi Sözcü TV'nin hemen altına taşı (eğer yerleri yanlışsa)
            const sozcuIndex = this.ayarlar.kanallar.findIndex(k => k.id === "sozcu-tv");
            const halkIndex = this.ayarlar.kanallar.findIndex(k => k.id === "halk-tv");
            if (sozcuIndex !== -1 && halkIndex !== -1 && halkIndex !== sozcuIndex + 1) {
                const halkKanal = this.ayarlar.kanallar.splice(halkIndex, 1)[0];
                const yeniSozcuIndex = this.ayarlar.kanallar.findIndex(k => k.id === "sozcu-tv");
                this.ayarlar.kanallar.splice(yeniSozcuIndex + 1, 0, halkKanal);
                guncellendi = true;
            }

            if (guncellendi) {
                this.ayarlariKaydet(this.ayarlar);
            }
        }
    }

    ayarlariKaydet(yeniAyarlar) {
        this.ayarlar = { ...this.ayarlar, ...yeniAyarlar };
        localStorage.setItem(this.varsayilanAnahtar, JSON.stringify(this.ayarlar));
    }

    /**
     * Yeni bir özel/manuel kanal ekler ve kaydeder.
     * @param {Object} yeniKanal 
     */
    kanalEkle(yeniKanal) {
        yeniKanal.id = "ozel-" + Date.now();
        // Logo ismi kanal adının ilk 3 harfi olacak şekilde ayarlanır
        yeniKanal.logo = yeniKanal.ad.trim().substring(0, 3).toUpperCase();

        if (!this.ayarlar.kanallar) {
            this.ayarlar.kanallar = [];
        }

        this.ayarlar.kanallar.push(yeniKanal);
        this.ayarlariKaydet(this.ayarlar);
        return yeniKanal;
    }

    /**
     * Mevcut bir kanalın bilgilerini günceller.
     * @param {string} kanalId 
     * @param {Object} guncelKanal 
     */
    kanalGuncelle(kanalId, guncelKanal) {
        if (!this.ayarlar.kanallar) return false;
        const indeks = this.ayarlar.kanallar.findIndex(k => k.id === kanalId);
        if (indeks !== -1) {
            const logo = guncelKanal.ad.trim().substring(0, 3).toUpperCase();
            this.ayarlar.kanallar[indeks] = {
                ...this.ayarlar.kanallar[indeks],
                ...guncelKanal,
                logo: logo
            };
            this.ayarlariKaydet(this.ayarlar);
            return true;
        }
        return false;
    }

    /**
     * Benzersiz ID'sine göre kanalı siler.
     * @param {string} kanalId 
     */
    kanalSil(kanalId) {
        if (!this.ayarlar.kanallar) return;
        this.ayarlar.kanallar = this.ayarlar.kanallar.filter(k => k.id !== kanalId);
        this.ayarlariKaydet(this.ayarlar);
    }

    /**
     * Tüm kanalları orijinal varsayılan ayarlara geri döndürür.
     */
    kanallariSifirla() {
        this.ayarlar.kanallar = JSON.parse(JSON.stringify(HABER_KANALLARI));
        this.ayarlariKaydet(this.ayarlar);
    }

    /**
     * Bir kanalın dizideki sırasını değiştirir.
     * @param {string} kanalId 
     * @param {string} yon - "yukari" veya "asagi"
     */
    kanalSirala(kanalId, yon) {
        const index = this.ayarlar.kanallar.findIndex(k => k.id === kanalId);
        if (index === -1) return false;

        if (yon === "yukari" && index > 0) {
            const temp = this.ayarlar.kanallar[index];
            this.ayarlar.kanallar[index] = this.ayarlar.kanallar[index - 1];
            this.ayarlar.kanallar[index - 1] = temp;
            this.ayarlariKaydet(this.ayarlar);
            return true;
        } else if (yon === "asagi" && index < this.ayarlar.kanallar.length - 1) {
            const temp = this.ayarlar.kanallar[index];
            this.ayarlar.kanallar[index] = this.ayarlar.kanallar[index + 1];
            this.ayarlar.kanallar[index + 1] = temp;
            this.ayarlariKaydet(this.ayarlar);
            return true;
        }
        return false;
    }

    get varsayilanKanal() { return this.ayarlar.varsayilanKanal; }
    get varsayilanAjans() { return this.ayarlar.varsayilanAjans; }
    get guncellemeSikligi() { return this.ayarlar.guncellemeSikligi; }
    get kanallar() { return this.ayarlar.kanallar || []; }
}

/**
 * 2. ÇEVİRİ SERVİSİ (CeviriServisi)
 * Yabancı dildeki metinleri Google Translate API yardımıyla Türkçeye çevirir.
 */
class CeviriServisi {
    constructor() {
        this.apiBaseUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=tr&dt=t&q=";
    }

    /**
     * Verilen metni asenkron olarak Türkçeye çevirir.
     * @param {string} metin 
     * @returns {Promise<string>}
     */
    async turkceyeCevir(metin) {
        if (!metin || metin.trim() === "") return "";
        try {
            const istekUrl = `${this.apiBaseUrl}${encodeURIComponent(metin)}`;
            const yanit = await fetch(istekUrl);

            if (!yanit.ok) throw new Error("Çeviri servisi hatası");

            const veri = await yanit.json();
            // Google Translate GTX API yanıt formatı: veri[0] içinde her bir cümle için [çevrilmiş, orijinal, ...] dizisi yer alır
            if (veri && veri[0]) {
                return veri[0].map(cumle => cumle[0]).join(" ");
            }
            return metin;
        } catch (hata) {
            console.warn("Çeviri başarısız oldu, orijinal metin kullanılıyor:", hata);
            return metin;
        }
    }
}

/**
 * 3. HABER SERVİSİ (HaberServisi)
 * RSS beslemelerini allorigins.win CORS proxy üzerinden doğrudan çeker,
 * yerleşik DOMParser ile çözümler. Hiçbir üçüncü taraf API'ye bağımlı değildir.
 */
class HaberServisi {
    constructor() {
        // corsproxy.io: Hızlı, kararlı ve doğrudan veri dönen CORS proxy'si
        this.corsProxy = 'https://corsproxy.io/?';
        this.ceviriServisi = new CeviriServisi();
    }

    /**
     * XML'deki CDATA veya düz metin içeriğini temizler. Atom feed'lerindeki href linklerini de çözer.
     * @param {Element} oge XML öğesi
     * @param {string} etiket Çocuk etiket adı
     * @returns {string}
     */
    xmlMetniAl(oge, etiket) {
        const el = oge.querySelector(etiket);
        if (!el) return '';
        // Atom feed uyumluluğu: eğer etiket link ise ve href özniteliği varsa onu çek
        if (etiket === 'link' && el.hasAttribute('href')) {
            return el.getAttribute('href').trim();
        }
        return (el.textContent || el.innerHTML || '').trim();
    }

    /**
     * HTML etiketlerini temizler ve metni kısaltır.
     * @param {string} metin
     * @returns {string}
     */
    htmlEtiketleriniTemizle(metin) {
        if (!metin) return '';
        const gecici = document.createElement('div');
        gecici.innerHTML = metin;
        const temiz = gecici.textContent || gecici.innerText || '';
        return temiz.trim().substring(0, 180) + (temiz.length > 180 ? '...' : '');
    }

    /**
     * Yayın tarihini okunabilir saat formatına çevirir.
     * @param {string} tarihMetni
     * @returns {string}
     */
    tarihFormatla(tarihMetni) {
        if (!tarihMetni) return 'Bilinmiyor';
        try {
            const tarih = new Date(tarihMetni);
            if (isNaN(tarih.getTime())) return tarihMetni;
            const simdi = Date.now();
            const fark = Math.floor((simdi - tarih.getTime()) / 60000); // dakika
            if (fark < 1) return 'Şimdi';
            if (fark < 60) return `${fark} dk önce`;
            if (fark < 1440) return `${Math.floor(fark / 60)} saat önce`;
            return tarih.toLocaleDateString('tr-TR', { day: 'numeric', month: 'short' });
        } catch (e) {
            return tarihMetni;
        }
    }

    /**
     * Tüm haber ajanslarının RSS beslemelerini paralel olarak çeker, parse eder ve birleştirir.
     * @returns {Promise<Array>}
     */
    async tumHaberleriGetir() {
        const istekSozleri = HABER_AJANSLARI.map(async (ajans) => {
            try {
                const proxyUrl = `${this.corsProxy}${encodeURIComponent(ajans.rssUrl)}`;
                const yanit = await fetch(proxyUrl);
                if (!yanit.ok) throw new Error(`${ajans.ad} RSS isteği başarısız.`);

                const xmlMetni = await yanit.text();
                if (!xmlMetni || xmlMetni.trim() === "") return [];

                const cozumleyici = new DOMParser();
                const xmlBelgesi = cozumleyici.parseFromString(xmlMetni, "text/xml");

                const parserHata = xmlBelgesi.querySelector("parsererror");
                if (parserHata) throw new Error(`${ajans.ad} XML çözümlenemedi.`);

                // Hem standart RSS <item> hem de Atom <entry> etiketlerini çözümle
                const ogeler = xmlBelgesi.querySelectorAll("item, entry");
                const ajansHaberleri = [];

                ogeler.forEach(oge => {
                    const baslik = this.xmlMetniAl(oge, "title");
                    let ozet = this.xmlMetniAl(oge, "description");
                    if (!ozet) ozet = this.xmlMetniAl(oge, "summary");

                    const link = this.xmlMetniAl(oge, "link");

                    // Yayın tarihini farklı formatlara göre çek
                    let yayinTarihi = this.xmlMetniAl(oge, "pubDate");
                    if (!yayinTarihi) yayinTarihi = this.xmlMetniAl(oge, "updated");
                    if (!yayinTarihi) yayinTarihi = this.xmlMetniAl(oge, "published");

                    if (baslik && link) {
                        ajansHaberleri.push({
                            kaynak: ajans.ad,
                            bolge: ajans.bolge,
                            baslik: baslik,
                            ozet: this.htmlEtiketleriniTemizle(ozet),
                            link: link,
                            tarih: this.tarihFormatla(yayinTarihi),
                            hamTarih: yayinTarihi ? new Date(yayinTarihi).getTime() : 0
                        });
                    }
                });

                console.log(`${ajans.ad} ajansından ${ajansHaberleri.length} haber başarıyla çekildi.`);
                return ajansHaberleri;
            } catch (hata) {
                console.warn(`${ajans.ad} ajansından haberler alınamadı:`, hata);
                return [];
            }
        });

        const tumSonuclar = await Promise.all(istekSozleri);
        const birlesikHaberler = tumSonuclar.flat();

        // Eğer ağ hatası veya proxy kesintisi nedeniyle hiç haber alınamadıysa yedek haberleri yükle
        if (birlesikHaberler.length === 0) {
            console.warn("Dış haber ajanslarından veri alınamadı, yedek yerel haber akışı devreye alınıyor.");
            const simdi = Date.now();
            return YEDEK_HABERLER.map((h, indeks) => ({
                ...h,
                hamTarih: simdi - (indeks * 30 * 60 * 1000) // 30'ar dakika arayla sıralı tarihler
            }));
        }

        // Haberleri en yeniden en eskiye doğru sırala
        birlesikHaberler.sort((a, b) => b.hamTarih - a.hamTarih);

        return birlesikHaberler;
    }
}

/**
 * 4. TV IZGARA YÖNETİCİSİ (TvIzgaraYoneticisi)
 * Ana paneldeki çoklu kanal ızgara görünümünü (TV duvarı) yönetir.
 * Birden fazla kanalı eşzamanlı olarak iframe ile görüntüler.
 */
class TvIzgaraYoneticisi {
    constructor(izgaraAlaniId, bosDurumId, baslikId, etiketId) {
        this.izgaraAlani = document.getElementById(izgaraAlaniId);
        this.bosDurum = document.getElementById(bosDurumId);
        this.baslik = document.getElementById(baslikId);
        this.etiket = document.getElementById(etiketId);

        // Aktif kanalları ID → DOM eleman haritası
        this.aktifKanallar = new Map();
        this.sutunSayisi = 5;
        this.sutunDegistir(5);
    }

    /**
     * YouTube veya HLS (m3u8) URL'sini iframe'de çalışan embed formatına dönüştürür.
     * watch?v=ID → embed/ID veya m3u8 → player.html?src=url
     * @param {string} url
     * @returns {string}
     */
    embedUrleDonustur(url) {
        if (!url) return url;

        // m3u8 formatındaki canlı akışları yerel HLS oynatıcısıyla aç
        if (url.includes('.m3u8')) {
            return `player.html?src=${encodeURIComponent(url)}`;
        }

        // watch?v=VIDEO_ID → embed/VIDEO_ID
        const watchEslestir = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/);
        if (watchEslestir) {
            url = `https://www.youtube.com/embed/${watchEslestir[1]}`;
        }

        // autoplay + mute ekle
        if (url.includes('youtube.com') && !url.includes('autoplay=')) {
            const ayirici = url.includes('?') ? '&' : '?';
            url = `${url}${ayirici}autoplay=1&mute=1`;
        }

        return url;
    }

    /**
     * Kanalı ızgaraya ekler (zaten ekli ise kaldırır - toggle).
     * @param {Object} kanal
     * @returns {boolean} true: eklendi, false: kaldırıldı
     */
    kanalToggle(kanal) {
        if (this.aktifKanallar.has(kanal.id)) {
            this.kanalKaldir(kanal.id);
            return false;
        } else {
            this.kanalEkle(kanal);
            return true;
        }
    }

    /**
     * Kanalı ızgaraya ekler.
     * @param {Object} kanal
     */
    kanalEkle(kanal) {
        const embedUrl = this.embedUrleDonustur(kanal.yayinUrl || '');

        const kart = document.createElement('div');
        kart.className = 'tv-kanal-karti';
        kart.dataset.kanalId = kanal.id;

        kart.innerHTML = `
            <iframe
                src="${embedUrl}"
                title="${kanal.ad} Canlı Yayın"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
            <div class="tv-kanal-etiket">
                <div class="tv-kanal-etiket-adi">
                    <span class="canli-noktasi"></span>
                    ${kanal.ad}
                </div>
                <button class="tv-kanal-kapat-dugme" title="Kanalı Kapat">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        kart.querySelector('.tv-kanal-kapat-dugme').addEventListener('click', (e) => {
            e.stopPropagation();
            this.kanalKaldir(kanal.id);
            document.dispatchEvent(new CustomEvent('tvKanalKapandi', { detail: { kanalId: kanal.id } }));
        });

        if (this.bosDurum) this.bosDurum.style.display = 'none';
        this.izgaraAlani.appendChild(kart);
        this.aktifKanallar.set(kanal.id, kart);
        this.baslikGuncelle();
    }

    /**
     * ID'ye göre kanalı ızgaradan kaldırır.
     * @param {string} kanalId
     */
    kanalKaldir(kanalId) {
        const kart = this.aktifKanallar.get(kanalId);
        if (kart) {
            kart.remove();
            this.aktifKanallar.delete(kanalId);
        }
        if (this.aktifKanallar.size === 0 && this.bosDurum) {
            this.bosDurum.style.display = '';
        }
        this.baslikGuncelle();
    }

    /** Tüm kanalları ızgaradan temizler. */
    tumunuKaldir() {
        [...this.aktifKanallar.keys()].forEach(id => this.kanalKaldir(id));
    }

    /**
     * Izgara sütun sayısını değiştirir.
     * @param {number} sutun - 1, 2 veya 3
     */
    sutunDegistir(sutun) {
        this.sutunSayisi = sutun;
        this.izgaraAlani.className = `tv-izgara-alani cols-${sutun}`;
    }

    /**
     * Kanalın ızgarada aktif olup olmadığını döndürür.
     * @param {string} kanalId
     * @returns {boolean}
     */
    kanalAktifMi(kanalId) {
        return this.aktifKanallar.has(kanalId);
    }

    baslikGuncelle() {
        const sayi = this.aktifKanallar.size;
        if (sayi === 0) {
            this.baslik.textContent = 'Kanal Izgarası';
            this.etiket.textContent = 'CANLI YAYIN';
        } else {
            this.baslik.textContent = `${sayi} Kanal İzleniyor`;
            this.etiket.textContent = 'CANLI';
        }
    }

    /** Geriye dönük uyumluluk */
    get suAnkiKanal() {
        return this.aktifKanallar.size > 0 ? { id: [...this.aktifKanallar.keys()][0] } : null;
    }
}

/**
 * 5. HARİTA YÖNETİCİSİ (HaritaYöneticisi)
 * SVG Haritasını harici dosyadan dinamik yükler, coğrafi eşleşmeleri ve tıklama/hover efektlerini yönetir.
 */
class HaritaYoneticisi {
    /**
     * @param {string} kapsayiciId 
     * @param {string} svgYolu 
     * @param {Function} tiklamaGeriCagirim 
     */
    constructor(kapsayiciId, svgYolu, tiklamaGeriCagirim) {
        this.kapsayici = document.getElementById(kapsayiciId);
        this.svgYolu = svgYolu;
        this.tiklamaGeriCagirim = tiklamaGeriCagirim;
        this.seciliBolge = null;
        this.svgElemani = null;

        this.haritayiYukle();
    }

    async haritayiYukle() {
        try {
            const yanit = await fetch(this.svgYolu);
            if (!yanit.ok) throw new Error("Harita dosyası yüklenemedi.");
            const svgMetni = await yanit.text();

            this.kapsayici.innerHTML = svgMetni;

            this.svgElemani = this.kapsayici.querySelector("svg");
            if (this.svgElemani) {
                this.svgElemani.classList.add("harita-svg");
                this.svgElemani.setAttribute("width", "100%");
                this.svgElemani.setAttribute("height", "100%");

                this.yollariBagla();
            }
        } catch (hata) {
            console.error("Harita yüklenirken hata:", hata);
            this.kapsayici.innerHTML = `
                <div style="font-size: 11px; color: var(--metin-yardimci); text-align: center; padding: 12px; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; gap: 6px;">
                    <i class="fa-solid fa-triangle-exclamation" style="color: var(--renk-birincil-neon); font-size: 20px;"></i>
                    <span>Harita Yüklenemedi</span>
                    <small style="font-size: 9px; line-height: 1.3; color: var(--metin-yardimci);">
                        Tarayıcı güvenlik kuralları nedeniyle dosyayı doğrudan (file://) açtığınızda harita yüklenmeyebilir. Lütfen yerel sunucuyu (http://localhost:8000) kullanın veya GitHub Pages'a yükleyin.
                    </small>
                </div>`;
        }
    }

    yollariBagla() {
        if (!this.svgElemani) return;

        const etkilesimliOgeler = this.svgElemani.querySelectorAll("path[id], g[id]");

        etkilesimliOgeler.forEach(oge => {
            const ulkeId = oge.getAttribute("id");
            if (!ulkeId || ulkeId.startsWith("_")) return;

            oge.classList.add("ulke-yolu");

            const bolgeAdi = BOLGE_ESLESTIRME[ulkeId.toLowerCase()];
            if (bolgeAdi) {
                oge.setAttribute("title", `${ulkeId.toUpperCase()} (${bolgeAdi})`);
            }

            oge.addEventListener("click", (e) => {
                e.stopPropagation();
                const bolge = BOLGE_ESLESTIRME[ulkeId.toLowerCase()];
                if (bolge) {
                    this.bolgeSec(bolge);
                }
            });
        });
    }

    bolgeSec(bolge) {
        if (!this.svgElemani) return;

        if (this.seciliBolge === bolge) {
            this.secimiTemizle();
            this.tiklamaGeriCagirim(null);
            return;
        }

        this.seciliBolge = bolge;

        const etkilesimliOgeler = this.svgElemani.querySelectorAll("path[id], g[id]");
        etkilesimliOgeler.forEach(o => {
            const ulkeId = o.getAttribute("id");
            if (ulkeId && !ulkeId.startsWith("_")) {
                const ulkeBolgesi = BOLGE_ESLESTIRME[ulkeId.toLowerCase()];
                if (ulkeBolgesi === bolge) {
                    o.classList.add("aktif");
                } else {
                    o.classList.remove("aktif");
                }
            }
        });

        this.tiklamaGeriCagirim(bolge);
    }

    secimiTemizle() {
        this.seciliBolge = null;
        if (!this.svgElemani) return;

        const etkilesimliOgeler = this.svgElemani.querySelectorAll("path[id], g[id]");
        etkilesimliOgeler.forEach(o => o.classList.remove("aktif"));
    }
}

/**
 * 6. ARAYÜZ YÖNETİCİSİ (ArayüzYöneticisi)
 * Sayfadaki tüm DOM etkileşimlerini, listeleri, aramaları ve olay akışlarını koordine eder.
 */
class ArayuzYoneticisi {
    constructor() {
        // Alt Yöneticiler
        this.ayarlarYoneticisi = new AyarlarYoneticisi();
        this.haberServisi = new HaberServisi();

        this.oynatici = new TvIzgaraYoneticisi(
            'tvIzgaraAlani',
            'oynaticiBosDurum',
            'oynaticiBasligi',
            'oynaticiEtiket'
        );

        // Haber akışı görünürlük durumu
        this.haberAkisiGoruntu = true;

        // Filtre Durumları
        this.seciliAjans = this.ayarlarYoneticisi.varsayilanAjans;
        this.haritaAjansBolgesi = null;
        this.haritaKanalBolgesi = null;
        this.ajansAramaMetni = "";
        this.kanalAramaMetni = "";
        this.tumHaberlerDeposu = [];
        this.guncellemeZamanlayici = null;
        this.duzenlenenKanalId = null; // Düzenlenen kanal ID'sini takip eder

        // DOM Elemanları
        this.ajansListesiKonteyner = document.getElementById("ajansListesi");
        this.kanalListesiKonteyner = document.getElementById("kanalListesi");
        this.haberlerKonteyner = document.getElementById("haberlerListesi");

        this.ajansAraInput = document.getElementById("ajansAra");
        this.kanalAraInput = document.getElementById("kanalAra");

        this.dugmeTumunuTemizle = document.getElementById("dugmeTumunuTemizle");
        this.ajansUlkeleriSifirla = document.getElementById("ajansUlkeleriSifirla");
        this.kanalUlkeleriSifirla = document.getElementById("kanalUlkeleriSifirla");

        this.modal = document.getElementById("ayarlarModal");
        this.dugmeAyarlarAc = document.getElementById("dugmeAyarlar");
        this.dugmeAyarlarKapat = document.getElementById("dugmeAyarlarKapat");
        this.dugmeAyarlarKaydet = document.getElementById("dugmeAyarlarKaydet");

        this.ayarVarsayilanKanalSelect = document.getElementById("ayarVarsayilanKanal");
        this.ayarVarsayilanAjansSelect = document.getElementById("ayarVarsayilanAjans");
        this.ayarGuncellemeSikligiSelect = document.getElementById("ayarGuncellemeSikligi");

        this.guncellemeIkonu = document.getElementById("guncellemeIkonu");
        this.guncellemeMetni = document.getElementById("guncellemeMetni");
        this.seciliAjansBaslikMetni = document.getElementById("seciliAjansAdi");

        this.oynaticiKapatButon = document.getElementById('dugmeOynaticiKapat');
        this.dugmeHaberleriGoster = document.getElementById('dugmeHaberleriGoster');
        this.haberAkisiPaneli = document.getElementById('haberAkisiPaneli');
        this.izgaraBoyutSecici = document.getElementById('izgaraBoyutSecici');
        this.dugmeTamEkran = document.getElementById('dugmeTamEkran');
        this.tvIzgaraKapsayici = document.getElementById('tvIzgaraKapsayici');
        this.kayanYaziIcerik = document.getElementById('kayanYaziIcerik');
        this.zamanFiltresi = document.getElementById('zamanFiltresi');

        // Büyük Harita Seçimleri
        this.haritaBuyutModal = document.getElementById("haritaBuyutModal");
        this.dugmeHaritaBuyutKapat = document.getElementById("dugmeHaritaBuyutKapat");
        this.buyukHaritaBaslik = document.getElementById("buyukHaritaBaslik");
        this.buyukHarita = null;
        this.buyukHaritaTuru = null;

        // Haritaları Dinamik Başlat
        this.ajansHaritasi = new HaritaYoneticisi("ajansHaritasiKonteyner", "dunya_haritasi.svg", (bolge) => {
            this.haritaAjansBolgesi = bolge;
            this.ajanslariRenderEt();
            this.haberleriFiltreleVeGoster();
        });

        this.kanalHaritasi = new HaritaYoneticisi("kanalHaritasiKonteyner", "dunya_haritasi.svg", (bolge) => {
            this.haritaKanalBolgesi = bolge;
            this.kanallariRenderEt();
        });

        this.olaylariBagla();
        this.uygulamayiBaslat();
    }

    olaylariBagla() {
        if (this.zamanFiltresi) {
            this.zamanFiltresi.addEventListener("change", () => this.haberleriFiltreleVeGoster());
        }

        this.ajansAraInput.addEventListener("input", (e) => {
            this.ajansAramaMetni = e.target.value.toLowerCase().trim();
            this.ajanslariRenderEt();
        });

        this.kanalAraInput.addEventListener("input", (e) => {
            this.kanalAramaMetni = e.target.value.toLowerCase().trim();
            this.kanallariRenderEt();
        });

        this.dugmeTumunuTemizle.addEventListener("click", () => this.tumFiltreleriTemizle());

        this.ajansUlkeleriSifirla.addEventListener("click", () => {
            this.ajansHaritasi.secimiTemizle();
            this.haritaAjansBolgesi = null;
            this.ajanslariRenderEt();
            this.haberleriFiltreleVeGoster();
        });

        this.kanalUlkeleriSifirla.addEventListener("click", () => {
            this.kanalHaritasi.secimiTemizle();
            this.haritaKanalBolgesi = null;
            this.kanallariRenderEt();
        });

        // Tümünü kapat butonu
        this.oynaticiKapatButon.addEventListener('click', () => {
            this.oynatici.tumunuKaldir();
            this.kanallariRenderEt();
        });

        // Haber akışı göster/gizle
        if (this.dugmeHaberleriGoster) {
            this.dugmeHaberleriGoster.addEventListener('click', () => {
                this.haberAkisiGoruntu = !this.haberAkisiGoruntu;
                if (this.haberAkisiPaneli) {
                    this.haberAkisiPaneli.style.display = this.haberAkisiGoruntu ? '' : 'none';
                }
                this.dugmeHaberleriGoster.innerHTML = this.haberAkisiGoruntu
                    ? '<i class="fa-solid fa-newspaper"></i> Haber Akışı'
                    : '<i class="fa-solid fa-eye-slash"></i> Haber Gizli';
            });
        }

        // Izgara boyutu seçici
        if (this.izgaraBoyutSecici) {
            this.izgaraBoyutSecici.addEventListener('click', (e) => {
                const dugme = e.target.closest('.izgara-boyut-dugme');
                if (!dugme) return;
                const cols = parseInt(dugme.dataset.cols, 10);
                this.oynatici.sutunDegistir(cols);
                this.izgaraBoyutSecici.querySelectorAll('.izgara-boyut-dugme').forEach(d => d.classList.remove('aktif'));
                dugme.classList.add('aktif');
            });
        }

        // TV'den kanal kapatıldığında listeyi güncelle
        document.addEventListener('tvKanalKapandi', () => {
            this.kanallariRenderEt();
        });

        // Ayarlar Modalı Olayları
        this.dugmeAyarlarAc.addEventListener("click", () => this.ayarlarModaliniAc());
        this.dugmeAyarlarKapat.addEventListener("click", () => this.ayarlarModaliniKapat());
        this.dugmeAyarlarKaydet.addEventListener("click", () => this.ayarlariKaydetveUygula());

        window.addEventListener("click", (e) => {
            if (e.target === this.modal) {
                this.ayarlarModaliniKapat();
            }
        });

        // Yeni / Güncellenen Kanal Olayları
        const dugmeKanalEkle = document.getElementById("dugmeKanalEkle");
        if (dugmeKanalEkle) {
            dugmeKanalEkle.addEventListener("click", () => this.kanalFormunuIsle());
        }

        const dugmeKanalIptal = document.getElementById("dugmeKanalIptal");
        if (dugmeKanalIptal) {
            dugmeKanalIptal.addEventListener("click", () => this.kanalDuzenlemeModunuKapat());
        }

        const dugmeKanallariSifirla = document.getElementById("dugmeKanallariSifirla");
        if (dugmeKanallariSifirla) {
            dugmeKanallariSifirla.addEventListener("click", () => {
                if (confirm("Tüm kanalları orijinal varsayılan ayarlara sıfırlamak istediğinizden emin misiniz?")) {
                    this.ayarlarYoneticisi.kanallariSifirla();
                    this.kanalDuzenlemeModunuKapat();
                    this.ozelKanallariYonetimdeListele();
                    this.kanallariRenderEt();
                    this.ayarlarSecenekleriniDoldur();
                }
            });
        }

        // Harita Büyütme Olayları
        const ajansHaritaBuyut = document.getElementById("ajansHaritaBuyut");
        const kanalHaritaBuyut = document.getElementById("kanalHaritaBuyut");

        if (ajansHaritaBuyut) {
            ajansHaritaBuyut.addEventListener("click", () => this.haritayiBuyut("ajans"));
        }
        if (kanalHaritaBuyut) {
            kanalHaritaBuyut.addEventListener("click", () => this.haritayiBuyut("kanal"));
        }
        if (this.dugmeHaritaBuyutKapat) {
            this.dugmeHaritaBuyutKapat.addEventListener("click", () => this.haritaBuyutModaliniKapat());
        }

        // Tam Ekran Olay Dinleyicileri
        if (this.dugmeTamEkran) {
            this.dugmeTamEkran.addEventListener("click", () => this.tamEkranToggle());
        }
        document.addEventListener("fullscreenchange", () => this.tamEkranDurumunuGuncelle());
        document.addEventListener("webkitfullscreenchange", () => this.tamEkranDurumunuGuncelle());
        document.addEventListener("keydown", (e) => {
            if (e.key.toLowerCase() === "f") {
                const odaklanilanEleman = document.activeElement;
                if (odaklanilanEleman && odaklanilanEleman.tagName !== "INPUT" && odaklanilanEleman.tagName !== "TEXTAREA") {
                    this.tamEkranToggle();
                }
            }
        });
    }
    async uygulamayiBaslat() {
        this.ayarlarSecenekleriniDoldur();
        this.ajanslariRenderEt();
        this.kanallariRenderEt();

        // Varsayılan olarak açık gelmesi istenen 25 kanalın ID listesi (5x5 Izgarayı dolduracak şekilde)
        const varsayilanAcikKanalIdleri = [
            // 1. KKTC Kanalları (3)
            "brt-1", "brt-2", "brt-3",
            // 2. Güney Kıbrıs Kanalları (1)
            "sigma-tv",
            // 3. Yunan Kanalları (2)
            "ert-news", "open-tv",
            // 4. Suriye Kanalları (2)
            "alikhbaria-syria", "syria-tv",
            // 5. İsrail Kanalları (2)
            "i24-news", "kan-11",
            // 6. Türk Kanalları (8)
            "trt-haber", "cnn-turk", "sozcu-tv", "halk-tv", "haber-global", "ntv", "a-haber", "bein-sports",
            // 7. Avrupa Kanalları (4)
            "bbc-news", "france-24", "dw-news", "euronews",
            // 8. ABD Kanalları (3)
            "bloomberg", "livenow-fox", "cbs-news"
        ];

        // Bu kanalları ızgaraya ekle
        varsayilanAcikKanalIdleri.forEach(kanalId => {
            const kanal = this.ayarlarYoneticisi.kanallar.find(k => k.id === kanalId);
            if (kanal) {
                this.oynatici.kanalEkle(kanal);
            }
        });

        this.kanallariRenderEt();

        await this.haberleriYenile();
        this.zamanlayiciyiBaslat();
    }

    zamanlayiciyiBaslat() {
        if (this.guncellemeZamanlayici) clearInterval(this.guncellemeZamanlayici);
        const sure = this.ayarlarYoneticisi.guncellemeSikligi;
        this.guncellemeZamanlayici = setInterval(async () => {
            await this.haberleriYenile();
        }, sure);
    }

    async haberleriYenile() {
        this.guncellemeIkonu.style.animation = "rotate 1s linear infinite";
        this.guncellemeMetni.textContent = "Güncelleniyor (Yabancı haberler çevriliyor)...";

        this.tumHaberlerDeposu = await this.haberServisi.tumHaberleriGetir();
        this.haberleriFiltreleVeGoster();

        this.guncellemeIkonu.style.animation = "none";
        const simdi = new Date();
        this.guncellemeMetni.textContent = `Güncellendi: ${simdi.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" })}`;
    }

    haberleriFiltreleVeGoster() {
        this.haberlerKonteyner.innerHTML = "";

        let filtrelenmis = [...this.tumHaberlerDeposu];

        // Zaman Filtresi Uygulama (Son 24, 48, 72, 96 saat veya 7 gün)
        const saatLimiti = parseInt(this.zamanFiltresi ? this.zamanFiltresi.value : "168", 10);
        const milisaniyeLimiti = saatLimiti * 60 * 60 * 1000;
        const simdi = Date.now();
        filtrelenmis = filtrelenmis.filter(h => {
            if (!h.hamTarih) return true;
            return (simdi - h.hamTarih) <= milisaniyeLimiti;
        });

        if (this.seciliAjans !== "all") {
            const ajans = HABER_AJANSLARI.find(a => a.id === this.seciliAjans);
            if (ajans) {
                filtrelenmis = filtrelenmis.filter(h => h.kaynak === ajans.ad);
                this.seciliAjansBaslikMetni.textContent = ajans.ad;
            }
        } else {
            this.seciliAjansBaslikMetni.textContent = "Tüm Ajanslar";
        }

        if (this.haritaAjansBolgesi) {
            filtrelenmis = filtrelenmis.filter(h => h.bolge === this.haritaAjansBolgesi);
            this.seciliAjansBaslikMetni.textContent += ` (${this.haritaAjansBolgesi})`;
        }

        if (filtrelenmis.length === 0) {
            this.haberlerKonteyner.innerHTML = `
                <div class="haber-hata">
                    <i class="fa-solid fa-folder-open"></i>
                    <p>Seçilen kriterlere uygun anlık haber bulunamadı.</p>
                </div>
            `;
            return;
        }

        filtrelenmis.forEach((haber, indeks) => {
            const kart = document.createElement("div");
            kart.className = "haber-karti";

            // Çeviri işlemi sonrasında DOM'da bulabilmek için benzersiz id atıyoruz
            const kartId = `haber-kart-${indeks}`;
            kart.id = kartId;

            kart.innerHTML = `
                <div class="haber-karti-ust">
                    <div class="haber-karti-kaynak">
                        <span>${haber.kaynak}</span>
                        <span class="haber-karti-tarih">${haber.tarih}</span>
                    </div>
                    <h3 class="haber-karti-baslik" id="${kartId}-baslik">${haber.baslik}</h3>
                    <p class="haber-karti-ozet" id="${kartId}-ozet">${haber.ozet}</p>
                </div>
                <div class="haber-karti-alt">
                    <div class="ceviri-durumu" id="${kartId}-durum" style="font-size: 10px; color: var(--renk-ikincil-neon); display: none;">
                        <i class="fa-solid fa-language"></i> Çevriliyor...
                    </div>
                    <a href="${haber.link}" target="_blank" class="haber-karti-link">
                        Detaylar <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                </div>
            `;

            // Kartın tamamına tıklandığında habere yönlendir
            kart.addEventListener("click", (e) => {
                if (!e.target.closest(".haber-karti-link")) {
                    window.open(haber.link, "_blank");
                }
            });

            this.haberlerKonteyner.appendChild(kart);

            // Eğer haber yabancı kaynaktansa, arka planda asenkron çeviriyi tetikliyoruz
            if (haber.bolge !== "Türkiye") {
                const durumEl = document.getElementById(`${kartId}-durum`);
                if (durumEl) durumEl.style.display = "block";

                this.haberKartiniCevir(kartId, haber);
            }
        });

        // Kayan yazı bandındaki güncel haberleri de güncelle
        this.kayanYaziyiGuncelle();
    }

    ajanslariRenderEt() {
        this.ajansListesiKonteyner.innerHTML = "";

        const tumuOgesi = document.createElement("div");
        tumuOgesi.className = `liste-ogesi ${this.seciliAjans === "all" ? "aktif" : ""}`;
        tumuOgesi.innerHTML = `
            <div class="liste-oge-logo"><i class="fa-solid fa-list"></i></div>
            <div class="liste-oge-bilgi">
                <div class="liste-oge-adi">Tüm Ajanslar</div>
                <div class="liste-oge-detay">Global Yayın Akışı</div>
            </div>
        `;
        tumuOgesi.addEventListener("click", () => {
            this.seciliAjans = "all";
            this.ajansListesiniGuncelle();
            this.haberleriFiltreleVeGoster();
        });
        this.ajansListesiKonteyner.appendChild(tumuOgesi);

        let ajanslar = [...HABER_AJANSLARI];

        if (this.ajansAramaMetni) {
            ajanslar = ajanslar.filter(a => a.ad.toLowerCase().includes(this.ajansAramaMetni));
        }

        if (this.haritaAjansBolgesi) {
            ajanslar = ajanslar.filter(a => a.bolge === this.haritaAjansBolgesi);
        }

        ajanslar.forEach(ajans => {
            const oge = document.createElement("div");
            oge.className = `liste-ogesi ${this.seciliAjans === ajans.id ? "aktif" : ""}`;
            oge.dataset.id = ajans.id;

            oge.innerHTML = `
                <div class="liste-oge-logo">${ajans.logo}</div>
                <div class="liste-oge-bilgi">
                    <div class="liste-oge-adi">${ajans.ad}</div>
                    <div class="liste-oge-detay">
                        <i class="fa-solid fa-location-dot" style="font-size:10px;"></i> ${ajans.bolge}
                    </div>
                </div>
            `;

            oge.addEventListener("click", () => {
                this.seciliAjans = ajans.id;
                this.ajansListesiniGuncelle();
                this.haberleriFiltreleVeGoster();
            });

            this.ajansListesiKonteyner.appendChild(oge);
        });
    }

    kanallariRenderEt() {
        this.kanalListesiKonteyner.innerHTML = "";

        // Kayıtlı olan tüm kanalları (varsayılan + özel) kullanıyoruz
        let kanallar = [...this.ayarlarYoneticisi.kanallar];

        if (this.kanalAramaMetni) {
            kanallar = kanallar.filter(k => k.ad.toLowerCase().includes(this.kanalAramaMetni));
        }

        if (this.haritaKanalBolgesi) {
            kanallar = kanallar.filter(k => k.bolge === this.haritaKanalBolgesi);
        }

        if (kanallar.length === 0) {
            this.kanalListesiKonteyner.innerHTML = `
                <div style="text-align:center; padding:12px; color:var(--metin-yardimci); font-size:12px;">
                    Kanal bulunamadı
                </div>
            `;
            return;
        }

        kanallar.forEach(kanal => {
            const oge = document.createElement("div");
            const oynatiliyor = this.oynatici.suAnkiKanal && this.oynatici.suAnkiKanal.id === kanal.id;
            oge.className = `liste-ogesi ${oynatiliyor ? "aktif" : ""}`;
            oge.dataset.id = kanal.id;

            oge.innerHTML = `
                <div class="liste-oge-logo">${kanal.logo}</div>
                <div class="liste-oge-bilgi">
                    <div class="liste-oge-adi">${kanal.ad}</div>
                    <div class="liste-oge-detay">
                        <span class="canli-noktasi"></span> Canlı • ${kanal.bolge}
                    </div>
                </div>
            `;

            oge.addEventListener('click', () => {
                this.oynatici.kanalToggle(kanal);
                this.kanallariRenderEt();
            });

            this.kanalListesiKonteyner.appendChild(oge);
        });
    }

    ajansListesiniGuncelle() {
        const ogeler = this.ajansListesiKonteyner.querySelectorAll(".liste-ogesi");
        ogeler.forEach(o => {
            const id = o.dataset.id || "all";
            if (id === this.seciliAjans) {
                o.classList.add("aktif");
            } else {
                o.classList.remove("aktif");
            }
        });
    }

    kanalListesiniGuncelle() {
        const ogeler = this.kanalListesiKonteyner.querySelectorAll(".liste-ogesi");
        ogeler.forEach(o => {
            const id = o.dataset.id;
            const oynatiliyor = this.oynatici.suAnkiKanal && this.oynatici.suAnkiKanal.id === id;
            if (oynatiliyor) {
                o.classList.add("aktif");
            } else {
                o.classList.remove("aktif");
            }
        });
    }

    tumFiltreleriTemizle() {
        this.seciliAjans = "all";
        this.haritaAjansBolgesi = null;
        this.haritaKanalBolgesi = null;
        this.ajansAramaMetni = "";
        this.kanalAramaMetni = "";

        this.ajansAraInput.value = "";
        this.kanalAraInput.value = "";

        this.ajansHaritasi.secimiTemizle();
        this.kanalHaritasi.secimiTemizle();

        this.ajanslariRenderEt();
        this.kanallariRenderEt();
        this.haberleriFiltreleVeGoster();
    }

    // --- AYARLAR MODALI YÖNETİMİ ---

    ayarlarModaliniAc() {
        this.ayarVarsayilanKanalSelect.value = this.ayarlarYoneticisi.varsayilanKanal;
        this.ayarVarsayilanAjansSelect.value = this.ayarlarYoneticisi.varsayilanAjans;
        this.ayarGuncellemeSikligiSelect.value = this.ayarlarYoneticisi.guncellemeSikligi.toString();

        // Özel kanalları ayarlar modalı listesine yükle
        this.ozelKanallariYonetimdeListele();

        this.modal.classList.add("aktif");
    }

    ayarlarModaliniKapat() {
        this.modal.classList.remove("aktif");
    }

    ayarlarSecenekleriniDoldur() {
        // Kanal seçeneklerini temizleyip doldur
        this.ayarVarsayilanKanalSelect.innerHTML = `<option value="none">Hiçbiri (Oynatıcı Kapalı/Boş Başlasın)</option>`;

        const birlesikKanallar = this.ayarlarYoneticisi.kanallar;

        birlesikKanallar.forEach(kanal => {
            const option = document.createElement("option");
            option.value = kanal.id;
            option.textContent = kanal.ad;
            this.ayarVarsayilanKanalSelect.appendChild(option);
        });

        // Ajans seçeneklerini doldur
        this.ayarVarsayilanAjansSelect.innerHTML = `<option value="all">Tüm Ajanslar</option>`;
        HABER_AJANSLARI.forEach(ajans => {
            const option = document.createElement("option");
            option.value = ajans.id;
            option.textContent = ajans.ad;
            this.ayarVarsayilanAjansSelect.appendChild(option);
        });
    }

    /**
     * Ayarlar modalındaki tüm kayıtlı kanallar listesini günceller ve DOM'a basar.
     */
    ozelKanallariYonetimdeListele() {
        const kanallarKonteyner = document.getElementById("ozelKanallarListesi");
        if (!kanallarKonteyner) return;

        kanallarKonteyner.innerHTML = "";
        const tumKanallar = this.ayarlarYoneticisi.kanallar;

        if (tumKanallar.length === 0) {
            kanallarKonteyner.innerHTML = `
                <li style="font-size: 11px; color: var(--metin-yardimci); text-align: center; padding: 12px 0;">
                    Kayıtlı kanal bulunmuyor.
                </li>`;
            return;
        }

        tumKanallar.forEach((kanal, index) => {
            const li = document.createElement("li");
            li.className = "ozel-kanal-satiri";

            // Eğer kanal şu an düzenleniyorsa satırı vurgula
            if (this.duzenlenenKanalId === kanal.id) {
                li.style.borderColor = "var(--renk-ikincil-neon)";
                li.style.background = "rgba(6, 182, 212, 0.05)";
            }

            li.innerHTML = `
                <div class="ozel-kanal-bilgi">
                    <span class="ozel-kanal-adi">${kanal.ad}</span>
                    <span class="ozel-kanal-detay">${kanal.bolge} • URL: ${kanal.yayinUrl || (kanal.kanalId ? 'YouTube ID: ' + kanal.kanalId : '')}</span>
                </div>
                <div class="ozel-kanal-aksiyonlar">
                    <button type="button" class="dugme-kanal-sirala dugme-kanal-yukari" title="Yukarı Taşı" ${index === 0 ? 'disabled style="opacity: 0.2; cursor: not-allowed;"' : ''}>
                        <i class="fa-solid fa-chevron-up"></i>
                    </button>
                    <button type="button" class="dugme-kanal-sirala dugme-kanal-asagi" title="Aşağı Taşı" ${index === tumKanallar.length - 1 ? 'disabled style="opacity: 0.2; cursor: not-allowed;"' : ''}>
                        <i class="fa-solid fa-chevron-down"></i>
                    </button>
                    <button type="button" class="dugme-kanal-duzenle" title="Kanalı Düzenle">
                        <i class="fa-solid fa-pen"></i>
                    </button>
                    <button type="button" class="dugme-kanal-sil" title="Kanalı Sil">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;

            // Sıralama butonları olayları
            const yukariButon = li.querySelector(".dugme-kanal-yukari");
            if (yukariButon) {
                yukariButon.addEventListener("click", () => {
                    if (this.ayarlarYoneticisi.kanalSirala(kanal.id, "yukari")) {
                        this.ozelKanallariYonetimdeListele();
                        this.kanallariRenderEt();
                        this.ayarlarSecenekleriniDoldur();
                    }
                });
            }

            const asagiButon = li.querySelector(".dugme-kanal-asagi");
            if (asagiButon) {
                asagiButon.addEventListener("click", () => {
                    if (this.ayarlarYoneticisi.kanalSirala(kanal.id, "asagi")) {
                        this.ozelKanallariYonetimdeListele();
                        this.kanallariRenderEt();
                        this.ayarlarSecenekleriniDoldur();
                    }
                });
            }

            // Düzenleme butonu olayı
            li.querySelector(".dugme-kanal-duzenle").addEventListener("click", () => {
                this.kanalDuzenlemeModunaAl(kanal);
            });

            // Silme butonu olayı
            li.querySelector(".dugme-kanal-sil").addEventListener("click", () => {
                if (confirm(`${kanal.ad} kanalını silmek istediğinizden emin misiniz?`)) {
                    this.ayarlarYoneticisi.kanalSil(kanal.id);
                    if (this.duzenlenenKanalId === kanal.id) {
                        this.kanalDuzenlemeModunuKapat();
                    }
                    this.ozelKanallariYonetimdeListele();
                    this.kanallariRenderEt();
                    this.ayarlarSecenekleriniDoldur();
                }
            });

            kanallarKonteyner.appendChild(li);
        });
    }

    /**
     * Kanal ekleme/düzenleme formunu işler (Ekleme veya Güncelleme moduna göre).
     */
    kanalFormunuIsle() {
        const adGirdisi = document.getElementById("ekleKanalAdi");
        const idGirdisi = document.getElementById("ekleKanalId");
        const bolgeGirdisi = document.getElementById("ekleKanalBolgesi");
        const hataAlani = document.getElementById("kanalEkleHata");

        hataAlani.style.display = "none";

        const ad = adGirdisi.value.trim();
        const yayinUrl = idGirdisi.value.trim();
        const bolge = bolgeGirdisi.value;

        if (!ad || !yayinUrl || !bolge) {
            hataAlani.textContent = "Lütfen formdaki tüm alanları doldurunuz.";
            hataAlani.style.display = "block";
            return;
        }

        // Eğer kullanıcı düz kanalId girdi ise youtube linkine çevir, değilse doğrudan url olarak ata
        let guncelYayinUrl = yayinUrl;
        if (!yayinUrl.startsWith("http://") && !yayinUrl.startsWith("https://")) {
            guncelYayinUrl = `https://www.youtube.com/embed/live_stream?channel=${yayinUrl}`;
        }

        const kanalVerisi = { ad, yayinUrl: guncelYayinUrl, bolge };

        if (this.duzenlenenKanalId) {
            // Düzenleme modu: Güncelleme yap
            this.ayarlarYoneticisi.kanalGuncelle(this.duzenlenenKanalId, kanalVerisi);
            this.kanalDuzenlemeModunuKapat();
        } else {
            // Ekleme modu: Yeni kanal ekle
            this.ayarlarYoneticisi.kanalEkle(kanalVerisi);
            // Formu sıfırla
            adGirdisi.value = "";
            idGirdisi.value = "";
            bolgeGirdisi.value = "";
        }

        // Modal ve Arayüz listelerini güncelle
        this.ozelKanallariYonetimdeListele();
        this.kanallariRenderEt();
        this.ayarlarSecenekleriniDoldur();
    }

    /**
     * Formu belirli bir kanalı düzenleyecek şekilde hazırlar ve düzenleme moduna alır.
     * @param {Object} kanal 
     */
    kanalDuzenlemeModunaAl(kanal) {
        this.duzenlenenKanalId = kanal.id;

        document.getElementById("ekleKanalAdi").value = kanal.ad;
        document.getElementById("ekleKanalId").value = kanal.yayinUrl || kanal.kanalId || "";
        document.getElementById("ekleKanalBolgesi").value = kanal.bolge;

        const dugmeEkle = document.getElementById("dugmeKanalEkle");
        dugmeEkle.innerHTML = `<i class="fa-solid fa-check"></i> Güncelle`;
        dugmeEkle.style.borderColor = "var(--renk-ikincil-neon)";
        dugmeEkle.style.background = "rgba(34, 211, 238, 0.15)";

        document.getElementById("dugmeKanalIptal").style.display = "inline-flex";
        document.getElementById("kanalEkleHata").style.display = "none";

        // Listeyi tekrar render et ki seçili olan satır vurgulansın
        this.ozelKanallariYonetimdeListele();
    }

    /**
     * Kanal düzenleme modundan çıkar ve formu temizler.
     */
    kanalDuzenlemeModunuKapat() {
        this.duzenlenenKanalId = null;

        document.getElementById("ekleKanalAdi").value = "";
        document.getElementById("ekleKanalId").value = "";
        document.getElementById("ekleKanalBolgesi").value = "";

        const dugmeEkle = document.getElementById("dugmeKanalEkle");
        dugmeEkle.innerHTML = `<i class="fa-solid fa-plus"></i> Kanal Ekle`;
        dugmeEkle.style.borderColor = "var(--renk-ikincil)";
        dugmeEkle.style.background = "rgba(6, 182, 212, 0.15)";

        document.getElementById("dugmeKanalIptal").style.display = "none";
        document.getElementById("kanalEkleHata").style.display = "none";

        this.ozelKanallariYonetimdeListele();
    }

    ayarlariKaydetveUygula() {
        const yeniKanal = this.ayarVarsayilanKanalSelect.value;
        const yeniAjans = this.ayarVarsayilanAjansSelect.value;
        const yeniSiklik = parseInt(this.ayarGuncellemeSikligiSelect.value, 10);

        this.ayarlarYoneticisi.ayarlariKaydet({
            varsayilanKanal: yeniKanal,
            varsayilanAjans: yeniAjans,
            guncellemeSikligi: yeniSiklik
        });

        this.ayarlarModaliniKapat();

        this.seciliAjans = yeniAjans;
        this.ajanslariRenderEt();

        this.zamanlayiciyiBaslat();
        this.haberleriYenile();
    }

    /**
     * Haritayı büyük bir modal pencere içerisinde açar.
     * @param {string} tur 
     */
    haritayiBuyut(tur) {
        this.buyukHaritaTuru = tur;

        if (tur === "ajans") {
            this.buyukHaritaBaslik.innerHTML = `<i class="fa-solid fa-globe"></i> Büyük Ajans Haritası`;
        } else {
            this.buyukHaritaBaslik.innerHTML = `<i class="fa-solid fa-tv"></i> Büyük Kanal Haritası`;
        }

        this.haritaBuyutModal.classList.add("aktif");

        const buyukHaritaKonteyner = document.getElementById("buyukHaritaKonteyner");
        buyukHaritaKonteyner.innerHTML = `
            <div style="color: var(--metin-yardimci); font-size: 12px; display: flex; align-items: center; justify-content: center; height: 100%; gap: 8px;">
                <i class="fa-solid fa-arrows-rotate guncelleme-doneri"></i> Harita Yükleniyor...
            </div>`;

        this.buyukHarita = new HaritaYoneticisi("buyukHaritaKonteyner", "dunya_haritasi.svg", (bolge) => {
            if (this.buyukHaritaTuru === "ajans") {
                this.haritaAjansBolgesi = bolge;
                if (bolge) {
                    this.ajansHaritasi.seciliBolge = null;
                    this.ajansHaritasi.bolgeSec(bolge);
                } else {
                    this.ajansHaritasi.secimiTemizle();
                }
                this.ajanslariRenderEt();
                this.haberleriFiltreleVeGoster();
            } else {
                this.haritaKanalBolgesi = bolge;
                if (bolge) {
                    this.kanalHaritasi.seciliBolge = null;
                    this.kanalHaritasi.bolgeSec(bolge);
                } else {
                    this.kanalHaritasi.secimiTemizle();
                }
                this.kanallariRenderEt();
            }
            this.haritaBuyutModaliniKapat();
        });

        // Küçük haritada seçili bir bölge varsa büyük haritada da bunu aktifleştir
        const seciliBolge = tur === "ajans" ? this.haritaAjansBolgesi : this.haritaKanalBolgesi;
        if (seciliBolge) {
            setTimeout(() => {
                if (this.buyukHarita && this.buyukHarita.svgElemani) {
                    this.buyukHarita.bolgeSec(seciliBolge);
                }
            }, 300);
        }
    }

    haritaBuyutModaliniKapat() {
        this.haritaBuyutModal.classList.remove("aktif");
        this.buyukHarita = null;
        document.getElementById("buyukHaritaKonteyner").innerHTML = "";
    }

    /**
     * Tek bir haber kartını arka planda asenkron olarak çevirir ve DOM'u günceller.
     * @param {string} kartId 
     * @param {Object} haber 
     */
    async haberKartiniCevir(kartId, haber) {
        try {
            const baslikEl = document.getElementById(`${kartId}-baslik`);
            const ozetEl = document.getElementById(`${kartId}-ozet`);
            const durumEl = document.getElementById(`${kartId}-durum`);

            // Orijinal başlık ve özetlerin Türkçe çevirilerini al
            const [cevirilmisBaslik, cevirilmisOzet] = await Promise.all([
                this.haberServisi.ceviriServisi.turkceyeCevir(haber.baslik),
                haber.ozet ? this.haberServisi.ceviriServisi.turkceyeCevir(haber.ozet) : Promise.resolve("")
            ]);

            // DOM elemanları hala yerindeyse çevrilen metinlerle veya orijinal değerlerle güncelle
            if (baslikEl) baslikEl.textContent = cevirilmisBaslik || haber.baslik;
            if (ozetEl) ozetEl.textContent = cevirilmisOzet || haber.ozet;

            if (durumEl) {
                durumEl.innerHTML = `<i class="fa-solid fa-check" style="color: var(--renk-ikincil-neon)"></i> Türkçe`;
                setTimeout(() => {
                    const guncelDurumEl = document.getElementById(`${kartId}-durum`);
                    if (guncelDurumEl) guncelDurumEl.style.display = "none";
                }, 3000);
            }
        } catch (hata) {
            console.warn("Kart çevirisi başarısız:", hata);
            const durumEl = document.getElementById(`${kartId}-durum`);
            if (durumEl) durumEl.style.display = "none";
        }
    }

    /**
     * Canlı yayın ızgarasını tam ekran moduna alır veya tam ekrandan çıkarır.
     */
    tamEkranToggle() {
        if (!this.tvIzgaraKapsayici) return;

        if (!document.fullscreenElement &&
            !document.webkitFullscreenElement &&
            !document.mozFullScreenElement &&
            !document.msFullscreenElement) {

            if (this.tvIzgaraKapsayici.requestFullscreen) {
                this.tvIzgaraKapsayici.requestFullscreen();
            } else if (this.tvIzgaraKapsayici.webkitRequestFullscreen) {
                this.tvIzgaraKapsayici.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (this.tvIzgaraKapsayici.mozRequestFullScreen) {
                this.tvIzgaraKapsayici.mozRequestFullScreen();
            } else if (this.tvIzgaraKapsayici.msRequestFullscreen) {
                this.tvIzgaraKapsayici.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    }

    /**
     * Tam ekran geçiş durumuna göre buton arayüzünü günceller ve kayan yazıyı tetikler.
     */
    tamEkranDurumunuGuncelle() {
        const tamEkranAktif = document.fullscreenElement ||
            document.webkitFullscreenElement ||
            document.mozFullScreenElement ||
            document.msFullscreenElement;

        if (tamEkranAktif) {
            if (this.dugmeTamEkran) {
                this.dugmeTamEkran.innerHTML = '<i class="fa-solid fa-compress"></i> Normal Ekran';
                this.dugmeTamEkran.classList.add('aktif');
            }
            this.kayanYaziyiGuncelle();
        } else {
            if (this.dugmeTamEkran) {
                this.dugmeTamEkran.innerHTML = '<i class="fa-solid fa-expand"></i> Tam Ekran';
                this.dugmeTamEkran.classList.remove('aktif');
            }
        }
    }

    /**
     * Güncel haber ajansı akışlarını alıp aralarında ayraçlar kullanarak kayan haber bandına yazar.
     */
    kayanYaziyiGuncelle() {
        if (!this.kayanYaziIcerik) return;

        if (!this.tumHaberlerDeposu || this.tumHaberlerDeposu.length === 0) {
            this.kayanYaziIcerik.innerHTML = "Güncel haber akışı yükleniyor...";
            return;
        }

        let birlesikHaberler = "";
        this.tumHaberlerDeposu.forEach((haber, indeks) => {
            const ayrac = indeks === 0 ? "" : ' <span class="kayan-yazi-ayrac">|</span> ';
            birlesikHaberler += `${ayrac}<span class="kayan-yazi-kaynak">[${haber.kaynak}]</span> ${haber.baslik}`;
        });

        this.kayanYaziIcerik.innerHTML = birlesikHaberler;

        // Haber metni uzunluğuna göre animasyon süresini (hızını) ayarla
        const toplamUzunluk = birlesikHaberler.length;
        const animasyonSuresi = Math.max(30, Math.floor(toplamUzunluk / 15)); // Her 15 karakter için 1 sn, min 30 sn
        this.kayanYaziIcerik.style.animationDuration = `${animasyonSuresi}s`;
    }
}

/**
 * Dünya Haritası Yöneticisi (Leaflet Entegrasyonu)
 * Kanalları ve ajansları haritada gösterir.
 */
class LeafletHaritaYoneticisi {
    constructor(arayuzYoneticisi) {
        this.arayuz = arayuzYoneticisi;
        this.harita = null;
        this.haritaKonteyner = document.getElementById('buyukHaritaKonteyner');
        this.modalKapsayici = document.getElementById('haritaBuyutModal');
        this.dugmeDunyaHaritasi = document.getElementById('dugmeDunyaHaritasi');
        this.dugmeHaritaKapat = document.getElementById('dugmeHaritaBuyutKapat');
        
        this.olayDinleyicileriEkle();
    }

    olayDinleyicileriEkle() {
        if (this.dugmeDunyaHaritasi) {
            this.dugmeDunyaHaritasi.addEventListener('click', () => this.modaliAc());
        }
        if (this.dugmeHaritaKapat) {
            this.dugmeHaritaKapat.addEventListener('click', () => this.modaliKapat());
        }
        
        // Popup içindeki dinamik butonlar için (event delegation)
        document.addEventListener('click', (e) => {
            if (e.target.closest('.harita-kanal-sec')) {
                const btn = e.target.closest('.harita-kanal-sec');
                const id = btn.getAttribute('data-id');
                const tur = btn.getAttribute('data-tur');
                this.ogeSec(id, tur);
            }
        });
    }

    modaliAc() {
        if (this.modalKapsayici) {
            this.modalKapsayici.style.display = "flex";
            if (!this.harita) {
                // Leaflet map ilk kez açıldığında başlat
                setTimeout(() => this.haritayiBaslat(), 100);
            } else {
                setTimeout(() => this.harita.invalidateSize(), 100);
            }
        }
    }

    modaliKapat() {
        if (this.modalKapsayici) {
            this.modalKapsayici.style.display = "none";
        }
    }

    ogeSec(id, tur) {
        if (tur === 'kanal') {
            // Ana listeden değil, ayarlar yöneticisinin tüm kanallar listesinden (özel kanallar dahil) bul
            const kanal = this.arayuz.ayarlarYoneticisi.kanallar.find(k => k.id === id);
            if (kanal && this.arayuz && this.arayuz.oynatici) {
                this.arayuz.oynatici.kanalEkle(kanal);
                this.modaliKapat(); // Haritayı kapat
            }
        }
    }

    haritayiBaslat() {
        // [30, 10] gibi genel merkezli bir view
        this.harita = L.map('buyukHaritaKonteyner', {
            center: [30, 20],
            zoom: 3,
            minZoom: 2
        });

        // Koyu temalı harita stili (CartoDB Dark Matter)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; OpenStreetMap contributors',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(this.harita);

        this.markerleriOlustur();
    }

    markerleriOlustur() {
        // Ülkelere göre grupla
        const ulkeler = {};
        
        this.arayuz.ayarlarYoneticisi.kanallar.forEach(k => {
            const ulkeKodu = k.ulke ? k.ulke.toLowerCase() : null;
            if (!ulkeKodu || !ULKE_KOORDINATLARI[ulkeKodu]) return;
            
            if (!ulkeler[ulkeKodu]) {
                ulkeler[ulkeKodu] = { lat: ULKE_KOORDINATLARI[ulkeKodu][0], lng: ULKE_KOORDINATLARI[ulkeKodu][1], kanallar: [], ajanslar: [] };
            }
            ulkeler[ulkeKodu].kanallar.push(k);
        });

        HABER_AJANSLARI.forEach(a => {
            const ulkeKodu = a.ulke ? a.ulke.toLowerCase() : null;
            if (!ulkeKodu || !ULKE_KOORDINATLARI[ulkeKodu]) return;
            
            if (!ulkeler[ulkeKodu]) {
                ulkeler[ulkeKodu] = { lat: ULKE_KOORDINATLARI[ulkeKodu][0], lng: ULKE_KOORDINATLARI[ulkeKodu][1], kanallar: [], ajanslar: [] };
            }
            ulkeler[ulkeKodu].ajanslar.push(a);
        });

        // Her ülke için marker oluştur
        const customIcon = L.divIcon({
            className: 'custom-div-icon',
            html: '<div class="ulke-marker-ikon" style="width:16px; height:16px;"></div>',
            iconSize: [16, 16],
            iconAnchor: [8, 8]
        });

        for (const kod in ulkeler) {
            const data = ulkeler[kod];
            const marker = L.marker([data.lat, data.lng], { icon: customIcon }).addTo(this.harita);
            
            let popupHtml = `<div class="harita-popup-baslik"><i class="fa-solid fa-location-dot"></i> ${kod.toUpperCase()} Medya Kaynakları</div>`;
            popupHtml += `<ul class="harita-popup-liste">`;
            
            if (data.kanallar.length > 0) {
                popupHtml += `<li style="background:transparent; cursor:default; color:#888; font-weight:bold; font-size:10px; margin-top:5px; padding-bottom:2px;">CANLI KANALLAR</li>`;
                data.kanallar.forEach(k => {
                    popupHtml += `<li class="harita-kanal-sec" data-id="${k.id}" data-tur="kanal" title="Kanalı İzle"><i class="fa-solid fa-play"></i> ${k.ad}</li>`;
                });
            }
            
            if (data.ajanslar.length > 0) {
                popupHtml += `<li style="background:transparent; cursor:default; color:#888; font-weight:bold; font-size:10px; margin-top:5px; padding-bottom:2px;">HABER AJANSLARI (RSS)</li>`;
                data.ajanslar.forEach(a => {
                    popupHtml += `<li class="harita-kanal-sec" data-id="${a.id}" data-tur="ajans" title="RSS Kaynağı"><i class="fa-solid fa-rss"></i> ${a.ad}</li>`;
                });
            }
            
            popupHtml += `</ul>`;
            
            marker.bindPopup(popupHtml, {
                maxWidth: 250,
                minWidth: 180
            });
        }
    }
}

// Uygulamayı DOM yüklendiğinde başlat
document.addEventListener("DOMContentLoaded", () => {
    window.uygulama = new ArayuzYoneticisi();
    window.haritaYonetici = new LeafletHaritaYoneticisi(window.uygulama);
});
