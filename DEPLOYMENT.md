# Panduan Deployment ke GitHub Pages

## Konfigurasi yang Sudah Dilakukan

Proyek ini sudah dikonfigurasi untuk deploy ke GitHub Pages di https://ecomerce-hubs.github.io/

### File yang Sudah Dikonfigurasi:

1. **vite.config.ts** - Sudah dikonfigurasi dengan `base: '/'` untuk root directory
2. **public/404.html** - Menangani SPA routing di GitHub Pages
3. **index.html** - Script untuk redirect dari 404.html ke route yang benar
4. **package.json** - Script deploy menggunakan gh-pages
5. **.github/workflows/deploy.yml** - GitHub Actions untuk auto-deploy

## Cara Deploy

### Opsi 1: GitHub Actions (Otomatis) - **DIREKOMENDASIKAN**

1. Push kode ke repository GitHub:
   ```bash
   git add .
   git commit -m "Configure for GitHub Pages deployment"
   git push origin main
   ```

2. Aktifkan GitHub Pages di repository:
   - Buka repository di GitHub
   - Pergi ke **Settings** → **Pages**
   - Di **Source**, pilih **GitHub Actions**

3. Workflow akan otomatis berjalan setiap kali Anda push ke branch `main`

4. Setelah workflow selesai, website akan online di: **https://ecomerce-hubs.github.io/**

### Opsi 2: Manual Deploy dengan gh-pages

Jika Anda ingin deploy manual dari komputer lokal:

```bash
npm run deploy
```

Command ini akan:
1. Build aplikasi (`npm run build`)
2. Deploy folder `dist` ke branch `gh-pages`

Kemudian di GitHub Settings → Pages, pilih branch `gh-pages` sebagai source.

## Verifikasi Deployment

Setelah deploy berhasil:

1. Cek URL: https://ecomerce-hubs.github.io/
2. Test navigasi antar halaman (Home, Shop, About, Contact, dll)
3. Refresh halaman di route manapun untuk memastikan 404.html redirect bekerja
4. Cek apakah semua gambar dan asset ter-load dengan benar

## Troubleshooting

### Website Menampilkan Halaman Kosong
- Pastikan `base: '/'` di vite.config.ts sudah benar
- Check browser console untuk error
- Pastikan GitHub Pages sudah aktif di Settings

### 404 Error Saat Refresh Halaman
- Pastikan file `public/404.html` sudah ada
- Pastikan script redirect di `index.html` sudah ada
- Clear browser cache dan coba lagi

### Asset Tidak Ter-load
- Pastikan semua import menggunakan path relatif
- Jangan gunakan absolute path seperti `/assets/image.jpg`
- Gunakan import statement: `import image from '@assets/image.jpg'`

## Update Website

Untuk update website setelah deployment awal:

1. Buat perubahan pada kode
2. Commit dan push ke GitHub:
   ```bash
   git add .
   git commit -m "Update website"
   git push origin main
   ```

3. GitHub Actions akan otomatis rebuild dan redeploy

## Custom Domain (Opsional)

Jika Anda ingin menggunakan custom domain:

1. Buat file `public/CNAME` dengan domain Anda:
   ```
   yourdomain.com
   ```

2. Di GitHub Settings → Pages → Custom domain, masukkan domain Anda

3. Konfigurasi DNS di registrar domain Anda sesuai instruksi GitHub
