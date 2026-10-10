# Ogres VTT + Destek Uygulaması (Python & JS)

Bu proje, **Ogres Virtual Tabletop** mimarisini ve **VTT Destek** araçlarını bir araya getiren, animasyonlu WebP harita destekli hafif bir sanal masaüstü uygulamasıdır.

## Özellikler
- **Animasyonlu WebP Harita Desteği:** Canlı WebP arka plan haritaları GPU hızlandırmasıyla akıcı oynatılır.
- **HTML5 Canvas Grid & Token Katmanı:** Izgara çizimi, piyon (token) ekleme, ızgaraya oturtma (snap-to-grid) ve sürükle-bırak hareketleri.
- **WebSocket Senkronizasyonu:** Oyuncular ve DM arasında anlık hareket, inisiyatif ve zar senkronizasyonu.
- **VTT Destek Paneli:** Zarlar (d4 - d100), inisiyatif sırası ve Türkçe kural/durum rehberleri.

## Kurulum ve Çalıştırma (Git + Python)

### 1. Depoyu Klonlayın ve Klasöre Girin
```bash
git clone <sizin-github-depo-linkiniz>
cd ogres-vtt-app
```

### 2. Sanal Ortam (Virtualenv) Oluşturun ve Aktif Edin
```bash
python -m venv venv

# Linux / macOS
source venv/bin/activate

# Windows (PowerShell)
.\venv\Scripts\Activate.ps1
```

### 3. Bağımlılıkları Yükleyin
```bash
pip install -r requirements.txt
```

### 4. Sunucuyu Çalıştırın
```bash
python main.py
```

Uygulamaya tarayıcınızdan `http://localhost:8000` adresinden erişebilirsiniz.
