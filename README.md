# Global Haber EA

Global Haber EA, dünyanın en ünlü haber kanallarını canlı izleyebileceğiniz ve popüler haber ajanslarının anlık RSS akışlarını tek bir ekrandan takip edebileceğiniz modern bir haber portalıdır. Türkçe isimlendirme kuralları ve SOLID prensipleri gözetilerek geliştirilmiştir.

## 🚀 Canlı Demo

Uygulamayı hemen test etmek için aşağıdaki butona tıklayarak GitHub Pages sürümüne ulaşabilirsiniz:

[![Görüntüle - GitHub Pages](https://img.shields.io/badge/Görüntüle-GitHub_Pages-2ea44f?style=for-the-badge&logo=github)](https://erdemalpar.github.io/GlobalHaberEA/)

## Özellikler

*   **Canlı TV Izgarası:** Aynı anda birden fazla haber kanalını (TRT Haber, BBC, CNN, Al Jazeera vb.) tek ekranda canlı izleme imkanı.
*   **Anlık Haber Akışı:** Farklı coğrafyalardan (Türkiye, Avrupa, Amerika, Asya) ajansların anlık haber akışlarını takip edebilme.
*   **Dünya Haritası Entegrasyonu:** SVG ve Leaflet entegrasyonu sayesinde harita üzerinden ülkelere tıklayarak o bölgenin haber kaynaklarına ulaşma.
*   **Kişiselleştirme:** İstenilen canlı yayın kaynaklarını ekleme, çıkarma ve sıralama özellikleri (localStorage tabanlı).
*   **Otomatik Çeviri:** Yabancı dildeki haber başlıklarını ve özetlerini Türkçe'ye çevirme desteği.
*   **Tam Ekran ve Kayan Yazı:** Kanalları tam ekranda izlerken alt kısımda son dakika haberlerinin kayan yazı (ticker) olarak sunulması.

## Kurulum ve Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için herhangi bir derleme aşamasına (build step) ihtiyacınız yoktur. Proje HTML, CSS ve Vanilla JS ile yazılmıştır.

1.  Projeyi bilgisayarınıza klonlayın:
    ```bash
    git clone https://github.com/erdemalpar/GlobalHaberEA.git
    ```
2.  Klasörün içerisine girin ve dosyaları yerel bir HTTP sunucusu ile ayağa kaldırın (Harita özelliklerinin doğru çalışması için gereklidir).
    Örnek olarak Python kullanabilirsiniz:
    ```bash
    python -m http.server 8000
    ```
3.  Tarayıcınızda `http://localhost:8000` adresine gidin.

## Teknolojiler

*   HTML5 / CSS3 (Özel Animasyonlar ve Neon Tasarım)
*   Vanilla JavaScript (ES6+ Sınıf Yapısı)
*   [Leaflet.js](https://leafletjs.com/) (Kanal ve Ajans Haritası Entegrasyonu)
*   FontAwesome (İkonlar)
