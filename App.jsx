import React, { useState, useMemo } from "react";
import { Search, Star, ExternalLink, X, Building2, Megaphone, Cpu, Headphones, BookOpen, ChevronDown, ChevronUp } from "lucide-react";

const ADIN_LOGO = "data:image/png;base64,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";

/* Kode akses sederhana — ganti sesuka Anda sebelum menjual.
   Ini bukan keamanan tingkat tinggi (kode tersimpan di dalam file),
   fungsinya hanya sebagai "pintu" supaya link tidak dipakai bebas
   oleh yang belum bayar — sama seperti PDF yang dikirim manual
   lewat WhatsApp setelah pembayaran dikonfirmasi. */
const ACCESS_CODE = "ADIN2026";

/* ============================================================
   DATA — 240 Karyawan AI, 4 Departemen, 12 Sub-bagian
   Sumber: Karyawan AI Paket Enterprise, Pustaka Tsuroya
   ============================================================ */

const DEPARTMENTS = {
  marketing: { label: "Marketing", icon: Megaphone, accent: "#C15B4A", tagline: "Desain, konten, dan promosi tanpa henti" },
  lembaga:   { label: "Lembaga",   icon: Building2,  accent: "#6B9080", tagline: "Administrasi, rapat, dan keuangan lembaga" },
  aplikasi:  { label: "Aplikasi",  icon: Cpu,         accent: "#4C7A9E", tagline: "Bangun produk, baca data, tools lokal" },
  layanan:   { label: "Layanan",   icon: Headphones,  accent: "#8A6FA8", tagline: "Melayani, menerjemahkan, merekrut" },
};

const raw = [
// ---- MARKETING : Desain & Konten ----
["marketing","Desain & Konten","Canva AI Suite","Desain poster PPDB","Gratis/Berbayar","Desain cepat non-desainer","canva.com"],
["marketing","Desain & Konten","CapCut","Edit video promosi","Gratis (pro berbayar)","Video pendek TikTok/Reels","capcut.com"],
["marketing","Desain & Konten","HeyGen","Avatar presenter AI","Gratis (terbatas)/Berbayar","Video tanpa syuting ustadz","heygen.com"],
["marketing","Desain & Konten","ElevenLabs","Voice over & dubbing","Gratis (terbatas)/Berbayar","Narasi profesional multi-bahasa","elevenlabs.io"],
["marketing","Desain & Konten","Runway","Video sinematik","Gratis (terbatas)/Berbayar","Konten branding premium","runwayml.com"],
["marketing","Desain & Konten","Suno AI","Musik/jingle dari teks","Gratis (terbatas)/Berbayar","Jingle promosi khas","suno.com"],
["marketing","Desain & Konten","Claude / ChatGPT","Caption, script iklan","Gratis (terbatas)/Berbayar","Copywriting harian","claude.ai"],
["marketing","Desain & Konten","Jasper","Copywriting brand konsisten","Berbayar","Tim marketing skala besar","jasper.ai"],
["marketing","Desain & Konten","Copy.ai","Ide konten & caption cepat","Gratis (terbatas)/Berbayar","Brainstorm ide harian","copy.ai"],
["marketing","Desain & Konten","Midjourney","Gambar AI kualitas artistik","Berbayar","Poster/ilustrasi estetik","midjourney.com"],
["marketing","Desain & Konten","Adobe Firefly","Gambar AI terintegrasi Adobe","Gratis (terbatas)/Berbayar","Tim yang pakai Photoshop","adobe.com/firefly"],
["marketing","Desain & Konten","Leonardo AI","Generate gambar promosi","Gratis (terbatas)/Berbayar","Alternatif Midjourney lebih murah","leonardo.ai"],
["marketing","Desain & Konten","Descript","Edit video+audio dari teks","Gratis (terbatas)/Berbayar","Podcast & video edukasi","descript.com"],
["marketing","Desain & Konten","Opus Clip","Video panjang jadi klip viral","Gratis (terbatas)/Berbayar","Repurpose ceramah jadi Reels","opus.pro"],
["marketing","Desain & Konten","Murf.ai","Voice over profesional","Gratis (terbatas)/Berbayar","Alternatif ElevenLabs","murf.ai"],
["marketing","Desain & Konten","Synthesia","Video presenter avatar korporat","Berbayar","Video training/edukasi formal","synthesia.io"],
["marketing","Desain & Konten","Writesonic","Artikel blog & SEO otomatis","Gratis (terbatas)/Berbayar","Konten website/blog lembaga","writesonic.com"],
["marketing","Desain & Konten","Vista Social","Desain + jadwal konten","Gratis (terbatas)/Berbayar","Tim kecil kelola sosmed","vistasocial.com"],
["marketing","Desain & Konten","Canva Magic Studio","Semua fitur AI Canva jadi satu","Gratis/Berbayar","Paket lengkap desain+video+teks","canva.com/magicstudio"],
["marketing","Desain & Konten","Freepik AI Suite","Stock + generate gambar/video","Gratis (terbatas)/Berbayar","Butuh aset visual cepat & murah","freepik.com/ai"],
// ---- MARKETING : Auto-Posting ----
["marketing","Auto-Posting","Predis.ai","Generate+auto-post semua platform","Gratis (terbatas)/Berbayar","Konten+jadwal jadi satu","predis.ai"],
["marketing","Auto-Posting","Pippit","Auto-post IG, FB, TikTok","Gratis (terbatas)/Berbayar","Fokus 3 platform utama","pippit.ai"],
["marketing","Auto-Posting","Buffer","Jadwal multi-platform","Gratis (terbatas)/Berbayar","Tim kecil, mudah dipakai","buffer.com"],
["marketing","Auto-Posting","Metricool","Kelola banyak akun/klien","Berbayar","Kelola akun banyak sekolah/unit","metricool.com"],
["marketing","Auto-Posting","StoryChief","Posting+editorial calendar","Berbayar","Tim dengan banyak penulis","storychief.io"],
["marketing","Auto-Posting","Later","Jadwal visual-first","Gratis (terbatas)/Berbayar","Fokus Instagram/visual","later.com"],
["marketing","Auto-Posting","Hootsuite","Manajemen sosmed enterprise","Berbayar","Yayasan skala besar","hootsuite.com"],
["marketing","Auto-Posting","SocialBee","Kategori konten+auto-recycle","Gratis (terbatas)/Berbayar","Daur ulang konten evergreen","socialbee.com"],
["marketing","Auto-Posting","Sprout Social","Analytics+jadwal enterprise","Berbayar","Laporan performa mendalam","sproutsocial.com"],
["marketing","Auto-Posting","Publer","Jadwal multi-platform murah","Gratis (terbatas)/Berbayar","Budget terbatas","publer.io"],
["marketing","Auto-Posting","Loomly","Kalender konten kolaboratif","Gratis (terbatas)/Berbayar","Tim revisi konten bareng","loomly.com"],
["marketing","Auto-Posting","Sendible","Jadwal+laporan agency-friendly","Berbayar","Kelola multi-klien/unit","sendible.com"],
["marketing","Auto-Posting","Planable","Approval konten sebelum tayang","Gratis (terbatas)/Berbayar","Perlu approval pengurus dulu","planable.io"],
["marketing","Auto-Posting","Tailwind","Fokus Pinterest & Instagram","Gratis (terbatas)/Berbayar","Konten visual jangka panjang","tailwindapp.com"],
["marketing","Auto-Posting","Vista Social","Jadwal+desain terintegrasi","Gratis (terbatas)/Berbayar","Tim kecil, semua-dalam-satu","vistasocial.com"],
["marketing","Auto-Posting","SocialPilot","Jadwal murah untuk agency","Gratis (terbatas)/Berbayar","Kelola banyak akun murah","socialpilot.co"],
["marketing","Auto-Posting","Agorapulse","Jadwal+inbox terpusat","Berbayar","Balas komentar/DM terpusat","agorapulse.com"],
["marketing","Auto-Posting","ContentStudio","Riset+jadwal konten AI","Gratis (terbatas)/Berbayar","Cari ide+posting sekaligus","contentstudio.io"],
["marketing","Auto-Posting","Meta Business Suite","Jadwal resmi FB+IG gratis","Gratis","Basic gratis dari Meta langsung","business.facebook.com"],
["marketing","Auto-Posting","TikTok Business Suite","Jadwal resmi TikTok","Gratis","Basic gratis dari TikTok langsung","tiktok.com/business"],
// ---- MARKETING : Video Otomatis ----
["marketing","Video Otomatis","Canva AI Video","Video dari teks prompt","Gratis/Berbayar","Video cepat non-editor","canva.com"],
["marketing","Video Otomatis","CapCut","Edit+text-to-video","Gratis (pro berbayar)","Konten TikTok/Reels harian","capcut.com"],
["marketing","Video Otomatis","Invideo AI","Video tanpa wajah dari script","Gratis (terbatas)/Berbayar","Konten dakwah tanpa syuting","invideo.io"],
["marketing","Video Otomatis","Pictory","Script jadi video otomatis","Berbayar (trial gratis)","Ubah artikel jadi video","pictory.ai"],
["marketing","Video Otomatis","HeyGen","Presenter avatar AI, 175+ bahasa","Gratis (terbatas)/Berbayar","Ustadz virtual multi-bahasa","heygen.com"],
["marketing","Video Otomatis","Runway","Video kualitas sinematik","Gratis (terbatas)/Berbayar","Video branding premium","runwayml.com"],
["marketing","Video Otomatis","Faceless.so","Auto-generate+auto-post harian","Gratis (terbatas)/Berbayar","Channel konten otomatis penuh","faceless.so"],
["marketing","Video Otomatis","Synthesia","Avatar presenter korporat","Berbayar","Video training/edukasi formal","synthesia.io"],
["marketing","Video Otomatis","Descript","Edit video dari teks transkrip","Gratis (terbatas)/Berbayar","Edit ceramah jadi rapi","descript.com"],
["marketing","Video Otomatis","Opus Clip","Video panjang jadi klip viral","Gratis (terbatas)/Berbayar","Potong ceramah jadi Reels","opus.pro"],
["marketing","Video Otomatis","Lumen5","Artikel jadi video otomatis","Gratis (terbatas)/Berbayar","Ubah tulisan blog jadi video","lumen5.com"],
["marketing","Video Otomatis","Fliki","Teks+visual+suara AI","Gratis (terbatas)/Berbayar","Video naratif panjang","fliki.ai"],
["marketing","Video Otomatis","VEED.IO","Editor+AI generator lengkap","Gratis (terbatas)/Berbayar","Semua kebutuhan video 1 tempat","veed.io"],
["marketing","Video Otomatis","Kapwing","Faceless video maker gratis","Gratis (terbatas)/Berbayar","Mulai tanpa budget","kapwing.com"],
["marketing","Video Otomatis","Colossyan","Avatar presenter untuk training","Berbayar","Video pelatihan santri/guru","colossyan.com"],
["marketing","Video Otomatis","Elai.io","Avatar+slide jadi video","Gratis (terbatas)/Berbayar","Presentasi jadi video otomatis","elai.io"],
["marketing","Video Otomatis","Wondershare Filmora AI","Editor video+fitur AI","Gratis (terbatas)/Berbayar","Editor lengkap harga terjangkau","filmora.wondershare.com"],
["marketing","Video Otomatis","Pika","Video generatif dari teks/gambar","Gratis (terbatas)/Berbayar","Efek visual kreatif unik","pika.art"],
["marketing","Video Otomatis","Sora (OpenAI)","Video generatif realistis","Berbayar","Kualitas sinematik AI terbaru","openai.com/sora"],
["marketing","Video Otomatis","Vizard","Klip pendek dari video panjang","Gratis (terbatas)/Berbayar","Repurpose konten panjang","vizard.ai"],
// ---- LEMBAGA : Admin & Dokumentasi ----
["lembaga","Admin & Dokumentasi","Claude","Surat, SK, proposal, laporan","Gratis (terbatas)/Berbayar","Admin yayasan, pengurus lembaga","claude.ai"],
["lembaga","Admin & Dokumentasi","ChatGPT","Sama fungsinya, alternatif","Gratis (terbatas)/Berbayar","Admin harian, draft cepat","chatgpt.com"],
["lembaga","Admin & Dokumentasi","Otter.ai","Transkrip & rangkum rapat","Gratis (3 file)/Berbayar","Rapat pengurus rutin","otter.ai"],
["lembaga","Admin & Dokumentasi","Granola","Notulen tanpa bot, senyap","Berbayar","Rapat formal/tertutup","granola.ai"],
["lembaga","Admin & Dokumentasi","Canva","Dokumentasi visual kegiatan","Gratis/Berbayar","Arsip foto/video kegiatan","canva.com"],
["lembaga","Admin & Dokumentasi","n8n","Auto-reminder syahriyah","Gratis (selfhost)/Berbayar","Otomasi internal, kontrol data","n8n.io"],
["lembaga","Admin & Dokumentasi","Zapier","Integrasi antar sistem","Gratis (terbatas)/Berbayar","Tim non-teknis","zapier.com"],
["lembaga","Admin & Dokumentasi","Notion AI","Database & knowledge base lembaga","Gratis (terbatas)/Berbayar","Arsip SOP, dokumentasi","notion.com"],
["lembaga","Admin & Dokumentasi","Google Workspace (Gemini)","Surat, email, dokumen kolaboratif","Berbayar","Tim yang sudah pakai Google","workspace.google.com"],
["lembaga","Admin & Dokumentasi","Microsoft 365 Copilot","Word, Excel, Outlook otomatis","Berbayar","Lembaga yang pakai Office","microsoft.com/365/copilot"],
["lembaga","Admin & Dokumentasi","ClickUp AI","Manajemen tugas & proyek lembaga","Gratis (terbatas)/Berbayar","Koordinasi antar unit yayasan","clickup.com"],
["lembaga","Admin & Dokumentasi","Asana AI","Tracking program kerja tahunan","Gratis (terbatas)/Berbayar","Roadmap & target tahunan","asana.com"],
["lembaga","Admin & Dokumentasi","Trello (Butler AI)","To-do & alur kerja sederhana","Gratis (terbatas)/Berbayar","Tim kecil, sederhana","trello.com"],
["lembaga","Admin & Dokumentasi","Grammarly","Cek tata bahasa surat resmi","Gratis (terbatas)/Berbayar","Surat/proposal bahasa Inggris","grammarly.com"],
["lembaga","Admin & Dokumentasi","QuillBot","Parafrase & ringkas dokumen","Gratis (terbatas)/Berbayar","Ringkas laporan panjang","quillbot.com"],
["lembaga","Admin & Dokumentasi","monday.com AI","Manajemen proyek visual","Gratis (terbatas)/Berbayar","Tracking progres unit lembaga","monday.com"],
["lembaga","Admin & Dokumentasi","Motion","Auto-jadwal tugas & kalender","Berbayar","Pengurus dengan jadwal padat","usemotion.com"],
["lembaga","Admin & Dokumentasi","Reclaim.ai","Kelola waktu otomatis","Gratis (terbatas)/Berbayar","Sinkronisasi jadwal pengurus","reclaim.ai"],
["lembaga","Admin & Dokumentasi","Fireflies.ai","Rekam & rangkum rapat","Gratis (terbatas)/Berbayar","Backup notulis Otter","fireflies.ai"],
["lembaga","Admin & Dokumentasi","Zoho One (Zia AI)","Suite lengkap admin+CRM+HR","Berbayar","Yayasan skala besar","zoho.com/one"],
// ---- LEMBAGA : Notulis Rapat ----
["lembaga","Notulis Rapat","Otter.ai","Transkrip real-time","Gratis (terbatas)/Berbayar","Rapat rutin mingguan","otter.ai"],
["lembaga","Notulis Rapat","Granola","Notulen tanpa bot","Berbayar","Rapat tertutup/formal","granola.ai"],
["lembaga","Notulis Rapat","Fireflies.ai","Rekam & rangkum otomatis","Gratis (terbatas)/Berbayar","Backup/alternatif Otter","fireflies.ai"],
["lembaga","Notulis Rapat","tl;dv","Rekam + highlight otomatis","Gratis (terbatas)/Berbayar","Rapat online (Zoom/Meet)","tldv.io"],
["lembaga","Notulis Rapat","Google Workspace (Gemini)","Notula otomatis Google Meet","Berbayar","Tim berbasis Google","workspace.google.com"],
["lembaga","Notulis Rapat","Microsoft Copilot (Teams)","Notula rapat Teams","Berbayar","Tim berbasis Microsoft","microsoft.com/365/copilot"],
["lembaga","Notulis Rapat","Claude","Rangkum manual dari transkrip","Gratis (terbatas)/Berbayar","Rangkum fleksibel semua format","claude.ai"],
["lembaga","Notulis Rapat","Fathom","Rekam & rangkum rapat gratis","Gratis/Berbayar","Startup budget minim","fathom.video"],
["lembaga","Notulis Rapat","Grain","Highlight video rapat","Gratis (terbatas)/Berbayar","Bagikan klip keputusan rapat","grain.com"],
["lembaga","Notulis Rapat","Avoma","Notula + analisis percakapan","Berbayar","Tim sales/CS review call","avoma.com"],
["lembaga","Notulis Rapat","Notta","Transkrip multi-bahasa","Gratis (terbatas)/Berbayar","Rapat campuran bahasa","notta.ai"],
["lembaga","Notulis Rapat","Sembly AI","Notula + action items","Gratis (terbatas)/Berbayar","Tracking tugas hasil rapat","sembly.ai"],
["lembaga","Notulis Rapat","Krisp","Noise cancelling + transkrip","Gratis (terbatas)/Berbayar","Rapat lingkungan berisik","krisp.ai"],
["lembaga","Notulis Rapat","Read AI","Analisis partisipasi rapat","Gratis (terbatas)/Berbayar","Evaluasi efektivitas rapat","read.ai"],
["lembaga","Notulis Rapat","Supernormal","Notula otomatis ringan","Gratis (terbatas)/Berbayar","Tim kecil, simpel","supernormal.com"],
["lembaga","Notulis Rapat","Fellow","Agenda + notula terstruktur","Gratis (terbatas)/Berbayar","Rapat dengan agenda baku","fellow.app"],
["lembaga","Notulis Rapat","Rewatch","Rekam & arsip rapat video","Gratis (terbatas)/Berbayar","Arsip rapat jangka panjang","rewatch.com"],
["lembaga","Notulis Rapat","Whisper (OpenAI)","Transkrip open-source","Gratis","Developer, custom pipeline","openai.com/research/whisper"],
["lembaga","Notulis Rapat","Zoom AI Companion","Notula bawaan Zoom","Berbayar (addon)","Sudah pakai Zoom Pro","zoom.com/ai"],
["lembaga","Notulis Rapat","Circleback","Notula + follow-up otomatis","Gratis (terbatas)/Berbayar","Auto-kirim rangkuman ke peserta","circleback.ai"],
// ---- LEMBAGA : Keuangan/Bendahara ----
["lembaga","Keuangan/Bendahara","Mekari Airene","AI finansial+HR lokal","Berbayar","Ekosistem lokal terintegrasi","mekari.com"],
["lembaga","Keuangan/Bendahara","Google Sheets (Gemini)","Rekap sederhana","Gratis/Berbayar","Bendahara pemula","sheets.google.com"],
["lembaga","Keuangan/Bendahara","n8n","Auto-rekap donasi","Gratis (selfhost)/Berbayar","Otomasi custom","n8n.io"],
["lembaga","Keuangan/Bendahara","Zapier","Integrasi billing","Gratis (terbatas)/Berbayar","Hubungkan payment ke laporan","zapier.com"],
["lembaga","Keuangan/Bendahara","Claude","Analisis laporan manual","Gratis (terbatas)/Berbayar","Baca & simpulkan laporan keuangan","claude.ai"],
["lembaga","Keuangan/Bendahara","Xero","Akuntansi + AI insight","Berbayar","Bisnis skala menengah","xero.com"],
["lembaga","Keuangan/Bendahara","Jurnal.id","Akuntansi lokal","Berbayar","UMKM/yayasan Indonesia","jurnal.id"],
["lembaga","Keuangan/Bendahara","QuickBooks","Akuntansi + AI kategorisasi","Berbayar","Standar internasional","quickbooks.intuit.com"],
["lembaga","Keuangan/Bendahara","Wave","Akuntansi gratis untuk kecil","Gratis","Yayasan/UMKM baru mulai","waveapps.com"],
["lembaga","Keuangan/Bendahara","Bukukas","Pembukuan digital lokal","Gratis (terbatas)/Berbayar","UMKM/unit usaha pesantren","bukukas.co.id"],
["lembaga","Keuangan/Bendahara","Accurate Online","Akuntansi lokal populer","Berbayar","Yayasan dengan unit usaha aktif","accurate.id"],
["lembaga","Keuangan/Bendahara","Kledo","Akuntansi + invoice lokal","Gratis (terbatas)/Berbayar","Invoice otomatis donatur/wali santri","kledo.com"],
["lembaga","Keuangan/Bendahara","Expensify","Kelola nota & reimbursement","Gratis (terbatas)/Berbayar","Kelola pengeluaran operasional","expensify.com"],
["lembaga","Keuangan/Bendahara","Fyle","OCR nota otomatis","Berbayar","Digitalisasi struk/nota","fylehq.com"],
["lembaga","Keuangan/Bendahara","Midtrans","Payment gateway + laporan","Berbayar (per transaksi)","Terima donasi/pembayaran online","midtrans.com"],
["lembaga","Keuangan/Bendahara","Xendit","Payment gateway lokal + laporan","Berbayar (per transaksi)","Alternatif Midtrans","xendit.co"],
["lembaga","Keuangan/Bendahara","Float","Prediksi arus kas otomatis","Berbayar","Perencanaan keuangan yayasan","floatapp.com"],
["lembaga","Keuangan/Bendahara","Pulse","Dashboard arus kas visual","Gratis (terbatas)/Berbayar","Monitoring kas real-time","pulseapp.com"],
["lembaga","Keuangan/Bendahara","Docyt","Pembukuan otomatis berbasis AI","Berbayar","Otomasi penuh tanpa input manual","docyt.com"],
["lembaga","Keuangan/Bendahara","Ramp","Kartu + kontrol pengeluaran AI","Berbayar","Kontrol belanja operasional tim","ramp.com"],
// ---- APLIKASI : App Builder & Coding ----
["aplikasi","App Builder & Coding","Emergent","App builder backend kompleks","Berbayar (trial gratis)","SaaS multi-tier seperti Adin Book","emergent.sh"],
["aplikasi","App Builder & Coding","Lovable","App builder alternatif","Gratis (terbatas)/Berbayar","Prototipe cepat","lovable.dev"],
["aplikasi","App Builder & Coding","Bolt.new","App builder cepat","Gratis (terbatas)/Berbayar","MVP dalam hitungan jam","bolt.new"],
["aplikasi","App Builder & Coding","Claude Code","Coding & review via AI agent","Berbayar","Developer serius/technical founder","claude.com/product/claude-code"],
["aplikasi","App Builder & Coding","GitHub Copilot","Autocomplete kode","Gratis (terbatas)/Berbayar","Programmer harian","github.com/features/copilot"],
["aplikasi","App Builder & Coding","Cursor","Code editor AI","Gratis (terbatas)/Berbayar","Developer yang mau kontrol penuh","cursor.com"],
["aplikasi","App Builder & Coding","Windsurf","Alternatif Cursor","Gratis (terbatas)/Berbayar","Alternatif hemat biaya","windsurf.com"],
["aplikasi","App Builder & Coding","Replit","Coding + hosting online","Gratis (terbatas)/Berbayar","Belajar & prototyping cepat","replit.com"],
["aplikasi","App Builder & Coding","v0 by Vercel","Generate UI dari prompt","Gratis (terbatas)/Berbayar","Desain UI/frontend cepat","v0.dev"],
["aplikasi","App Builder & Coding","Framer AI","Website tanpa kode","Gratis (terbatas)/Berbayar","Landing page/marketing site","framer.com"],
["aplikasi","App Builder & Coding","Webflow AI","Website profesional no-code","Gratis (terbatas)/Berbayar","Website lembaga/yayasan","webflow.com"],
["aplikasi","App Builder & Coding","Softr","App dari database (Airtable/Sheets)","Gratis (terbatas)/Berbayar","Portal internal sederhana","softr.io"],
["aplikasi","App Builder & Coding","Glide","App mobile dari spreadsheet","Gratis (terbatas)/Berbayar","Aplikasi data santri sederhana","glideapps.com"],
["aplikasi","App Builder & Coding","FlutterFlow","Aplikasi mobile visual+AI","Gratis (terbatas)/Berbayar","App Android/iOS custom","flutterflow.io"],
["aplikasi","App Builder & Coding","Retool","Dashboard internal cepat","Gratis (terbatas)/Berbayar","Dashboard admin/laporan","retool.com"],
["aplikasi","App Builder & Coding","Base44","App builder full-stack AI","Berbayar (trial gratis)","Alternatif Emergent/Lovable","base44.com"],
["aplikasi","App Builder & Coding","Firebase Studio","App builder + backend Google","Gratis (terbatas)/Berbayar","Terintegrasi ekosistem Google","firebase.studio"],
["aplikasi","App Builder & Coding","Supabase","Backend/database open-source+AI","Gratis (terbatas)/Berbayar","Backend custom, kontrol penuh","supabase.com"],
["aplikasi","App Builder & Coding","Xano","Backend no-code untuk app kompleks","Gratis (terbatas)/Berbayar","Backend skala besar tanpa kode","xano.com"],
["aplikasi","App Builder & Coding","Bubble","App builder no-code klasik","Gratis (terbatas)/Berbayar","Aplikasi web kompleks tanpa kode","bubble.io"],
// ---- APLIKASI : Analisis Data ----
["aplikasi","Analisis Data","Claude","Analisis data via chat/file","Gratis (terbatas)/Berbayar","Analisis fleksibel semua data","claude.ai"],
["aplikasi","Analisis Data","ChatGPT (Data Analysis)","Analisis & visualisasi","Berbayar","Grafik cepat dari data mentah","chatgpt.com"],
["aplikasi","Analisis Data","Power BI + Copilot","Laporan bahasa natural","Berbayar","Tim yang pakai Microsoft","powerbi.microsoft.com"],
["aplikasi","Analisis Data","Tableau AI","Visualisasi otomatis","Berbayar","Dashboard enterprise","tableau.com"],
["aplikasi","Analisis Data","Google Sheets (Gemini)","Analisis ringan","Gratis/Berbayar","Data sederhana harian","sheets.google.com"],
["aplikasi","Analisis Data","Julius AI","Analisis data via chat","Gratis (terbatas)/Berbayar","Non-teknis mau analisis cepat","julius.ai"],
["aplikasi","Analisis Data","Akkio","No-code data AI","Berbayar","Prediksi tanpa coding","akkio.com"],
["aplikasi","Analisis Data","MonkeyLearn","Analisis teks & sentimen","Gratis (terbatas)/Berbayar","Analisis feedback/komentar","monkeylearn.com"],
["aplikasi","Analisis Data","Obviously AI","Prediksi otomatis no-code","Berbayar","Forecasting pendaftaran santri","obviously.ai"],
["aplikasi","Analisis Data","DataRobot","Machine learning enterprise","Berbayar","Perusahaan besar, data kompleks","datarobot.com"],
["aplikasi","Analisis Data","Looker Studio","Dashboard visual gratis","Gratis","Laporan donatur/kegiatan","lookerstudio.google.com"],
["aplikasi","Analisis Data","Polymer","Dashboard otomatis dari spreadsheet","Gratis (terbatas)/Berbayar","Ubah data Excel jadi dashboard","polymersearch.com"],
["aplikasi","Analisis Data","Hex","Notebook data kolaboratif+AI","Gratis (terbatas)/Berbayar","Tim data teknikal","hex.tech"],
["aplikasi","Analisis Data","ThoughtSpot","Analisis data pakai bahasa natural","Berbayar","Tanya jawab langsung ke data","thoughtspot.com"],
["aplikasi","Analisis Data","Deepnote","Notebook AI kolaboratif","Gratis (terbatas)/Berbayar","Analisis data tim developer","deepnote.com"],
["aplikasi","Analisis Data","Rows","Spreadsheet + AI terintegrasi","Gratis (terbatas)/Berbayar","Spreadsheet modern dengan AI","rows.com"],
["aplikasi","Analisis Data","Coefficient","Sinkron data live ke Sheets","Gratis (terbatas)/Berbayar","Update data otomatis di Sheets","coefficient.io"],
["aplikasi","Analisis Data","Qlik AI","BI + prediksi otomatis","Berbayar","Enterprise BI","qlik.com"],
["aplikasi","Analisis Data","Vizzlo","Visualisasi laporan cepat","Gratis (terbatas)/Berbayar","Slide laporan ke donatur","vizzlo.com"],
["aplikasi","Analisis Data","Excel Copilot","AI langsung di Excel","Berbayar","Sudah biasa pakai Excel","microsoft.com/365/excel"],
// ---- APLIKASI : Tools Lokal Indonesia ----
["aplikasi","Tools Lokal Indonesia","Kata.ai","Chatbot & NLP lokal","Berbayar","CS skala besar Bahasa Indonesia","kata.ai"],
["aplikasi","Tools Lokal Indonesia","GLAIR.ai","OCR dokumen, eKYC","Berbayar","Verifikasi dokumen wali santri","glair.ai"],
["aplikasi","Tools Lokal Indonesia","Mekari Airene","AI finansial+HR+CRM lokal","Berbayar","Ekosistem lokal terintegrasi","mekari.com"],
["aplikasi","Tools Lokal Indonesia","Qiscus","CS omnichannel lokal","Berbayar","Integrasi WA Business resmi","qiscus.com"],
["aplikasi","Tools Lokal Indonesia","Sirclo","AI untuk e-commerce lokal","Berbayar","Unit usaha yayasan jualan online","sirclo.com"],
["aplikasi","Tools Lokal Indonesia","Jurnal.id","Akuntansi lokal+otomasi","Berbayar","Pembukuan yayasan","jurnal.id"],
["aplikasi","Tools Lokal Indonesia","Mekari Talenta","HR & payroll lokal","Berbayar","Payroll staff/ustadz","mekari.com/talenta"],
["aplikasi","Tools Lokal Indonesia","Prosa.ai","NLP Bahasa Indonesia","Berbayar","Analisis feedback lokal","prosa.ai"],
["aplikasi","Tools Lokal Indonesia","Nodeflux","Video analytics & face recognition","Berbayar","Keamanan kompleks pesantren","nodeflux.io"],
["aplikasi","Tools Lokal Indonesia","Bahasa.ai","Modul NLP Bahasa Indonesia","Berbayar","Chatbot khusus Bahasa Indonesia","bahasa.ai"],
["aplikasi","Tools Lokal Indonesia","Dattabot","Big data analytics lokal","Berbayar","Analisis data skala besar","dattabot.com"],
["aplikasi","Tools Lokal Indonesia","Verihubs","Verifikasi identitas & anti-fraud","Berbayar","Keamanan transaksi donasi online","verihubs.com"],
["aplikasi","Tools Lokal Indonesia","Accurate Online","Akuntansi lokal populer","Berbayar","Pembukuan unit usaha yayasan","accurate.id"],
["aplikasi","Tools Lokal Indonesia","Kledo","Invoice & akuntansi lokal","Gratis (terbatas)/Berbayar","Invoice otomatis syahriyah","kledo.com"],
["aplikasi","Tools Lokal Indonesia","Bukukas","Pembukuan digital UMKM","Gratis (terbatas)/Berbayar","Unit usaha kecil (kantin, koperasi)","bukukas.co.id"],
["aplikasi","Tools Lokal Indonesia","Midtrans","Payment gateway lokal","Berbayar (per transaksi)","Terima donasi/pembayaran digital","midtrans.com"],
["aplikasi","Tools Lokal Indonesia","Xendit","Payment gateway lokal","Berbayar (per transaksi)","Alternatif Midtrans","xendit.co"],
["aplikasi","Tools Lokal Indonesia","Ivosights","Social media monitoring+CS lokal","Berbayar","Monitoring reputasi lembaga","ivosights.com"],
["aplikasi","Tools Lokal Indonesia","Waresix","Optimasi distribusi/logistik AI","Berbayar","Relevan kalau ada unit distribusi","waresix.com"],
["aplikasi","Tools Lokal Indonesia","AiSensum","Monetisasi & analisis data konsumen","Berbayar","Riset insight donatur/wali santri","aisensum.com"],
// ---- LAYANAN : Customer Service ----
["layanan","Customer Service","Claude API / ChatGPT API","Basis chatbot custom","Berbayar","Bikin CS bot sendiri","claude.com"],
["layanan","Customer Service","Kata.ai","Conversational AI lokal","Berbayar","CS Bahasa Indonesia skala besar","kata.ai"],
["layanan","Customer Service","Tidio","Live chat + AI","Gratis (terbatas)/Berbayar","UMKM/website kecil","tidio.com"],
["layanan","Customer Service","Chatfuel","Bot WhatsApp/Messenger","Gratis (terbatas)/Berbayar","FAQ otomatis PPDB","chatfuel.com"],
["layanan","Customer Service","ManyChat","Auto follow-up","Gratis (terbatas)/Berbayar","Follow-up calon santri","manychat.com"],
["layanan","Customer Service","Wati","WhatsApp CRM otomatis","Berbayar","Bisnis WA skala menengah","wati.io"],
["layanan","Customer Service","n8n","Sambungkan CS ke database","Gratis (selfhost)/Berbayar","Integrasi custom","n8n.io"],
["layanan","Customer Service","Intercom","Live chat + AI agent enterprise","Berbayar","Bisnis skala besar","intercom.com"],
["layanan","Customer Service","Zendesk AI","Ticketing + AI resolusi otomatis","Berbayar","CS dengan volume tiket tinggi","zendesk.com"],
["layanan","Customer Service","Freshdesk","Helpdesk + AI otomatis","Gratis (terbatas)/Berbayar","Alternatif hemat Zendesk","freshworks.com/freshdesk"],
["layanan","Customer Service","Drift","Chat penjualan otomatis","Berbayar","Fokus konversi calon pembeli","drift.com"],
["layanan","Customer Service","Landbot","Chatbot visual no-code","Gratis (terbatas)/Berbayar","Bikin bot tanpa teknis","landbot.io"],
["layanan","Customer Service","Yellow.ai","AI agent multi-channel enterprise","Berbayar","Perusahaan besar, multi-platform","yellow.ai"],
["layanan","Customer Service","Qiscus","Omnichannel CS lokal","Berbayar","CS lokal terintegrasi WA Business","qiscus.com"],
["layanan","Customer Service","Crisp","Live chat ringan+AI","Gratis (terbatas)/Berbayar","Startup/UMKM","crisp.chat"],
["layanan","Customer Service","Voiceflow","Desain alur percakapan bot","Gratis (terbatas)/Berbayar","Bot dengan alur kompleks","voiceflow.com"],
["layanan","Customer Service","Botpress","Platform bot open-source+AI","Gratis (terbatas)/Berbayar","Kontrol penuh & self-host","botpress.com"],
["layanan","Customer Service","HubSpot Chatbot","Chat terintegrasi CRM","Gratis (terbatas)/Berbayar","Sudah pakai HubSpot CRM","hubspot.com"],
["layanan","Customer Service","Ada","AI customer service otomatis","Berbayar","Resolusi tiket otomatis skala besar","ada.cx"],
["layanan","Customer Service","WhatsApp Business API + AI","CS resmi WhatsApp otomatis","Berbayar (per pesan)","Verifikasi resmi bisnis","business.whatsapp.com"],
// ---- LAYANAN : Penerjemah ----
["layanan","Penerjemah","Google Translate","Terjemahan umum","Gratis","Kebutuhan cepat sehari-hari","translate.google.com"],
["layanan","Penerjemah","DeepL","Terjemahan natural","Gratis (terbatas)/Berbayar","Dokumen semi-formal","deepl.com"],
["layanan","Penerjemah","Claude / ChatGPT","Terjemahan kontekstual","Gratis (terbatas)/Berbayar","Nuansa & istilah khusus","claude.ai"],
["layanan","Penerjemah","Microsoft Translator","Terjemahan multi-platform","Gratis","Terintegrasi Office/Teams","microsoft.com/translator"],
["layanan","Penerjemah","Papago","Kuat bahasa Asia","Gratis","Bahasa Korea/Jepang/China","papago.naver.com"],
["layanan","Penerjemah","Reverso","Terjemahan+contoh konteks","Gratis (terbatas)/Berbayar","Belajar konteks kalimat","reverso.net"],
["layanan","Penerjemah","Smartcat","Dokumen resmi/legal","Berbayar","Dokumen hukum/kontrak","smartcat.com"],
["layanan","Penerjemah","iTranslate","Terjemahan mobile praktis","Gratis (terbatas)/Berbayar","Percakapan langsung/travel","itranslate.com"],
["layanan","Penerjemah","Speak","Belajar bahasa+AI conversation","Berbayar","Latihan bicara aktif","speak.com"],
["layanan","Penerjemah","Linguee","Kamus kontekstual","Gratis","Cari padanan istilah akurat","linguee.com"],
["layanan","Penerjemah","Yandex Translate","Alternatif Google Translate","Gratis","Bahasa Rusia/Eropa Timur","translate.yandex.com"],
["layanan","Penerjemah","Systran","Terjemahan enterprise","Berbayar","Perusahaan volume tinggi","systransoft.com"],
["layanan","Penerjemah","Lokalise","Terjemahan untuk software/app","Berbayar","Lokalisasi aplikasi Adin","lokalise.com"],
["layanan","Penerjemah","Crowdin","Terjemahan kolaboratif app","Gratis (terbatas)/Berbayar","Tim terjemahkan UI aplikasi","crowdin.com"],
["layanan","Penerjemah","Gengo","Jasa terjemahan manusia+AI","Berbayar","Dokumen butuh akurasi tinggi","gengo.com"],
["layanan","Penerjemah","TextUnited","Manajemen terjemahan tim","Berbayar","Proyek terjemahan skala besar","textunited.com"],
["layanan","Penerjemah","Weglot","Terjemahan otomatis website","Gratis (terbatas)/Berbayar","Website Adin multi-bahasa","weglot.com"],
["layanan","Penerjemah","Bing Translator","Terjemahan cepat browser","Gratis","Browsing cepat","bing.com/translator"],
["layanan","Penerjemah","Wordvice AI","Proofread terjemahan akademik","Gratis (terbatas)/Berbayar","Naskah akademik/jurnal","wordvice.ai"],
["layanan","Penerjemah","Naver Papago Business","Terjemahan bisnis Asia","Berbayar","Ekspansi bisnis ke Asia Timur","papago.naver.com"],
// ---- LAYANAN : Rekrutmen ----
["layanan","Rekrutmen","Interviewer.ai","Wawancara kandidat awal","Berbayar","Screening awal massal","interviewer.ai"],
["layanan","Rekrutmen","Cake AI","CV builder & career match","Gratis (terbatas)/Berbayar","Kandidat cari kerja","cake.me"],
["layanan","Rekrutmen","HireVue","Wawancara video+assessment","Berbayar","Perusahaan besar","hirevue.com"],
["layanan","Rekrutmen","LinkedIn Recruiter","Cari kandidat AI","Berbayar","Cari ustadz/staff spesifik","business.linkedin.com/talentsolutions"],
["layanan","Rekrutmen","Mocklingo","Simulasi wawancara","Gratis","Latihan interview kandidat","mocklingo.com"],
["layanan","Rekrutmen","Claude / ChatGPT","Job desc & soal tes","Gratis (terbatas)/Berbayar","Bikin materi rekrutmen","claude.ai"],
["layanan","Rekrutmen","Mekari Talenta","HR & rekrutmen lokal","Berbayar","Yayasan skala besar","mekari.com/talenta"],
["layanan","Rekrutmen","Manatal","ATS (Applicant Tracking) + AI","Berbayar","Kelola banyak pelamar","manatal.com"],
["layanan","Rekrutmen","Workable","ATS + AI matching kandidat","Berbayar","Rekrutmen terstruktur","workable.com"],
["layanan","Rekrutmen","Breezy HR","ATS visual mudah dipakai","Gratis (terbatas)/Berbayar","Tim kecil, non-teknis","breezy.hr"],
["layanan","Rekrutmen","Textio","Optimasi bahasa lowongan kerja","Berbayar","Lowongan lebih menarik pelamar","textio.com"],
["layanan","Rekrutmen","JobStreet AI Match","Cocokkan lowongan-kandidat lokal","Gratis (terbatas)/Berbayar","Platform lokal Indonesia","jobstreet.co.id"],
["layanan","Rekrutmen","Glints","Rekrutmen+AI matching lokal","Gratis (terbatas)/Berbayar","Rekrut anak muda/fresh grad","glints.com"],
["layanan","Rekrutmen","Paradox (Olivia)","Chatbot rekrutmen otomatis","Berbayar","Screening otomatis skala besar","paradox.ai"],
["layanan","Rekrutmen","SmartRecruiters","ATS enterprise+AI","Berbayar","Organisasi besar","smartrecruiters.com"],
["layanan","Rekrutmen","Skillate","Screening CV otomatis AI","Berbayar","Filter ratusan CV cepat","skillate.com"],
["layanan","Rekrutmen","Humanly","Screening+scheduling otomatis","Berbayar","Otomasi penuh proses awal","humanly.io"],
["layanan","Rekrutmen","Pymetrics","Assessment soft skill berbasis game","Berbayar","Tes kepribadian kandidat","pymetrics.ai"],
["layanan","Rekrutmen","Indeed AI Match","Cari kandidat otomatis","Gratis (terbatas)/Berbayar","Platform lowongan populer","id.indeed.com"],
["layanan","Rekrutmen","Zoho Recruit","ATS terintegrasi Zoho","Gratis (terbatas)/Berbayar","Sudah pakai ekosistem Zoho","zoho.com/recruit"],
];

const TOOLS = raw.map((r, i) => ({
  id: i + 1,
  badge: String(i + 1).padStart(3, "0"),
  dept: r[0],
  sub: r[1],
  name: r[2],
  fungsi: r[3],
  status: r[4],
  cocok: r[5],
  link: r[6].startsWith("http") ? r[6] : `https://${r[6]}`,
  free: r[4].toLowerCase().startsWith("gratis"),
}));

const SUBS_BY_DEPT = Object.keys(DEPARTMENTS).reduce((acc, d) => {
  acc[d] = [...new Set(TOOLS.filter((t) => t.dept === d).map((t) => t.sub))];
  return acc;
}, {});

/* ============================================================
   COMPONENT
   ============================================================ */

export default function KaryawanAIDirectory() {
  const [unlocked, setUnlocked] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [codeError, setCodeError] = useState(false);
  const [query, setQuery] = useState("");
  const [dept, setDept] = useState("semua");
  const [sub, setSub] = useState("semua");
  const [onlyFree, setOnlyFree] = useState(false);
  const [favorites, setFavorites] = useState(new Set());
  const [onlyFav, setOnlyFav] = useState(false);
  const [showGuide, setShowGuide] = useState(true);

  const toggleFav = (id) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      if (dept !== "semua" && t.dept !== dept) return false;
      if (sub !== "semua" && t.sub !== sub) return false;
      if (onlyFree && !t.free) return false;
      if (onlyFav && !favorites.has(t.id)) return false;
      if (q) {
        const hay = `${t.name} ${t.fungsi} ${t.cocok} ${t.sub}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [query, dept, sub, onlyFree, onlyFav, favorites]);

  const handleDept = (d) => {
    setDept(d);
    setSub("semua");
  };

  const handleUnlock = (e) => {
    e.preventDefault();
    if (codeInput.trim().toUpperCase() === ACCESS_CODE.toUpperCase()) {
      setUnlocked(true);
      setCodeError(false);
    } else {
      setCodeError(true);
    }
  };

  if (!unlocked) {
    return (
      <div style={styles.gatePage}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
          * { box-sizing: border-box; }
        `}</style>
        <div style={styles.gateCard}>
          <img src={ADIN_LOGO} alt="Logo ADIN" style={{ ...styles.crest, margin: "0 auto 16px", display: "block" }} />
          <h1 style={styles.gateTitle}>Direktori Karyawan AI</h1>
          <p style={styles.gateSubtitle}>Masukkan kode akses yang dikirim setelah pembayaran dikonfirmasi.</p>
          <form onSubmit={handleUnlock}>
            <input
              style={styles.gateInput}
              placeholder="Kode akses"
              value={codeInput}
              onChange={(e) => { setCodeInput(e.target.value); setCodeError(false); }}
              autoFocus
            />
            {codeError && <p style={styles.gateError}>Kode salah. Cek kembali pesan WhatsApp Anda.</p>}
            <button type="submit" style={styles.gateBtn}>Buka Direktori</button>
          </form>
          <p style={styles.gateFooter}>Belum punya kode? Hubungi WhatsApp: 0877-4548-3244</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        ::selection { background: #C9A24B55; }
        .tool-card:hover { transform: translateY(-3px); border-color: var(--dept-accent); }
        .tool-card:hover .go-link { opacity: 1; }
        button { font-family: inherit; cursor: pointer; }
        input { font-family: inherit; }
        @media (max-width: 720px) {
          .grid { grid-template-columns: 1fr !important; }
          .stats { flex-wrap: wrap; }
        }
      `}</style>

      {/* HEADER — nameplate / reception board */}
      <header style={styles.header}>
        <div style={styles.headerInner}>
          <img src={ADIN_LOGO} alt="Logo ADIN — Akademi Digital Nusantara" style={styles.crest} />
          <div>
            <div style={styles.eyebrow}>PT TSUROYA BERKAH ABADI · PUSTAKA TSUROYA</div>
            <h1 style={styles.title}>Direktori Karyawan AI</h1>
            <p style={styles.subtitle}>240 karyawan yang tidak pernah minta gaji — tinggal panggil sesuai bagiannya.</p>
          </div>
        </div>
        <div className="stats" style={styles.statRow}>
          <Stat n={TOOLS.length} label="Total Karyawan" />
          <Stat n={4} label="Departemen" />
          <Stat n={favorites.size} label="Favorit Anda" />
          <Stat n={filtered.length} label="Ditampilkan" accent />
        </div>
      </header>

      <main style={styles.main}>
        {/* SEARCH */}
        <div style={styles.searchBar}>
          <Search size={18} color="#8891AC" style={{ flexShrink: 0 }} />
          <input
            style={styles.searchInput}
            placeholder="Cari karyawan — nama, fungsi, atau kebutuhan..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button style={styles.clearBtn} onClick={() => setQuery("")}>
              <X size={16} />
            </button>
          )}
        </div>

        {/* CARA PAKAI */}
        <div style={styles.guideBox}>
          <button style={styles.guideToggle} onClick={() => setShowGuide((v) => !v)}>
            <span style={styles.guideToggleLeft}>
              <BookOpen size={16} color="#C9A24B" />
              Cara Pakai Direktori Ini
            </span>
            {showGuide ? <ChevronUp size={16} color="#8891AC" /> : <ChevronDown size={16} color="#8891AC" />}
          </button>
          {showGuide && (
            <ol style={styles.guideList}>
              <li><b>Cari sesuai kebutuhan.</b> Ketik masalah yang mau diselesaikan (mis. "notula rapat", "invoice", "video tanpa syuting") di kolom pencarian — bukan cuma nama tools.</li>
              <li><b>Atau susuri per bagian.</b> Pilih departemen (Marketing / Lembaga / Aplikasi / Layanan) lalu persempit ke sub-bagian yang relevan.</li>
              <li><b>Cek status dulu.</b> Badge hijau muda "Gratis" berarti bisa dicoba tanpa kartu kredit — pakai toggle "Gratis saja" kalau mau eksplor tanpa risiko biaya.</li>
              <li><b>Bintangi yang sering dipakai.</b> Klik ikon ★ di pojok kartu supaya tools favorit gampang ditemukan lagi lewat toggle "★ Favorit".</li>
              <li><b>Klik kartu untuk buka tools-nya.</b> Link di bagian bawah kartu langsung membuka website resmi provider di tab baru.</li>
              <li><b>Satu per satu, bukan sekaligus.</b> Coba satu tools sampai benar terbiasa sebelum pindah ke yang lain — 240 pilihan ini untuk dipilih sesuai kebutuhan, bukan dipakai semua sekaligus.</li>
            </ol>
          )}
        </div>

        {/* DEPARTMENT TABS */}
        <div style={styles.deptTabs}>
          <DeptTab active={dept === "semua"} label="Semua Bagian" onClick={() => handleDept("semua")} />
          {Object.entries(DEPARTMENTS).map(([key, d]) => (
            <DeptTab
              key={key}
              active={dept === key}
              label={d.label}
              accent={d.accent}
              Icon={d.icon}
              onClick={() => handleDept(key)}
            />
          ))}
        </div>

        {dept !== "semua" && (
          <>
            <p style={{ ...styles.deptTagline, color: DEPARTMENTS[dept].accent }}>
              {DEPARTMENTS[dept].tagline}
            </p>
            <div style={styles.subTabs}>
              <SubTab active={sub === "semua"} label="Semua Sub-bagian" onClick={() => setSub("semua")} accent={DEPARTMENTS[dept].accent} />
              {SUBS_BY_DEPT[dept].map((s) => (
                <SubTab key={s} active={sub === s} label={s} onClick={() => setSub(s)} accent={DEPARTMENTS[dept].accent} />
              ))}
            </div>
          </>
        )}

        {/* FILTER TOGGLES */}
        <div style={styles.toggleRow}>
          <Toggle active={onlyFree} onClick={() => setOnlyFree((v) => !v)} label="Gratis saja" />
          <Toggle active={onlyFav} onClick={() => setOnlyFav((v) => !v)} label={`★ Favorit (${favorites.size})`} />
        </div>

        {/* GRID */}
        {filtered.length === 0 ? (
          <div style={styles.empty}>
            <p style={{ margin: 0, color: "#8891AC" }}>Tidak ada karyawan yang cocok. Coba kata kunci lain.</p>
          </div>
        ) : (
          <div className="grid" style={styles.grid}>
            {filtered.map((t) => (
              <ToolCard key={t.id} tool={t} isFav={favorites.has(t.id)} onFav={() => toggleFav(t.id)} />
            ))}
          </div>
        )}
      </main>

      <footer style={styles.footer}>
        Direktori pribadi — kurasi Pustaka Tsuroya. Nama & merek adalah milik masing-masing penyedia.
      </footer>
    </div>
  );
}

function Stat({ n, label, accent }) {
  return (
    <div style={styles.stat}>
      <div style={{ ...styles.statNum, color: accent ? "#C9A24B" : "#EDE7DA" }}>{n}</div>
      <div style={styles.statLabel}>{label}</div>
    </div>
  );
}

function DeptTab({ active, label, accent = "#C9A24B", Icon, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.deptTab,
        borderColor: active ? accent : "#2A324F",
        background: active ? `${accent}1F` : "transparent",
        color: active ? "#EDE7DA" : "#8891AC",
      }}
    >
      {Icon && <Icon size={15} color={active ? accent : "#8891AC"} />}
      {label}
    </button>
  );
}

function SubTab({ active, label, onClick, accent }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.subTab,
        background: active ? accent : "transparent",
        color: active ? "#12172B" : "#8891AC",
        borderColor: active ? accent : "#2A324F",
      }}
    >
      {label}
    </button>
  );
}

function Toggle({ active, onClick, label }) {
  return (
    <button
      onClick={onClick}
      style={{
        ...styles.toggle,
        background: active ? "#C9A24B" : "transparent",
        color: active ? "#12172B" : "#8891AC",
        borderColor: active ? "#C9A24B" : "#2A324F",
      }}
    >
      {label}
    </button>
  );
}

function ToolCard({ tool, isFav, onFav }) {
  const accent = DEPARTMENTS[tool.dept].accent;
  return (
    <div className="tool-card" style={{ ...styles.card, "--dept-accent": accent }}>
      <div style={{ ...styles.cardStripe, background: accent }} />
      <div style={styles.cardBody}>
        <div style={styles.cardTop}>
          <span style={styles.cardBadge}>NO. {tool.badge}</span>
          <button onClick={onFav} style={styles.favBtn} aria-label="Favoritkan">
            <Star size={16} fill={isFav ? "#C9A24B" : "none"} color={isFav ? "#C9A24B" : "#5A6382"} />
          </button>
        </div>
        <h3 style={styles.cardName}>{tool.name}</h3>
        <p style={styles.cardFungsi}>{tool.fungsi}</p>
        <div style={styles.cardMeta}>
          <span style={{ ...styles.statusPill, background: tool.free ? "#6B908022" : "#8891AC22", color: tool.free ? "#8FBBA0" : "#B8C0DA" }}>
            {tool.status}
          </span>
          <span style={styles.subLabel}>{tool.sub}</span>
        </div>
        <p style={styles.cardCocok}>Cocok untuk: {tool.cocok}</p>
        <a href={tool.link} target="_blank" rel="noopener noreferrer" style={{ ...styles.cardLink, borderColor: accent }}>
          <span>{tool.link.replace("https://", "")}</span>
          <ExternalLink size={13} className="go-link" style={{ opacity: 0.6, transition: "opacity .15s" }} />
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   STYLES
   ============================================================ */

const styles = {
  gatePage: {
    minHeight: "100vh",
    background: "#12172B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    fontFamily: "'Inter', sans-serif",
  },
  gateCard: {
    background: "#1B2340",
    border: "1px solid #2A324F",
    borderRadius: 14,
    padding: "36px 28px",
    maxWidth: 360,
    width: "100%",
    textAlign: "center",
  },
  gateTitle: {
    fontFamily: "'Fraunces', serif",
    fontSize: 22,
    fontWeight: 600,
    color: "#EDE7DA",
    margin: "0 0 6px",
  },
  gateSubtitle: { fontSize: 13, color: "#8891AC", margin: "0 0 20px", lineHeight: 1.5 },
  gateInput: {
    width: "100%",
    background: "#12172B",
    border: "1px solid #2A324F",
    borderRadius: 8,
    padding: "11px 14px",
    color: "#EDE7DA",
    fontSize: 14,
    outline: "none",
    textAlign: "center",
    letterSpacing: "0.06em",
  },
  gateError: { color: "#D97757", fontSize: 12, margin: "8px 0 0" },
  gateBtn: {
    width: "100%",
    marginTop: 14,
    background: "#C9A24B",
    color: "#12172B",
    border: "none",
    borderRadius: 8,
    padding: "11px 0",
    fontSize: 14,
    fontWeight: 700,
  },
  gateFooter: { fontSize: 11.5, color: "#5A6382", marginTop: 20 },
  page: {
    minHeight: "100vh",
    background: "#12172B",
    color: "#EDE7DA",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    borderBottom: "1px solid #232B47",
    padding: "40px 24px 0",
    maxWidth: 1100,
    margin: "0 auto",
  },
  headerInner: { display: "flex", gap: 18, alignItems: "center" },
  crest: {
    width: 68,
    height: 45,
    objectFit: "contain",
    flexShrink: 0,
    filter: "drop-shadow(0 4px 14px #C9A24B33)",
  },
  eyebrow: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: "0.12em",
    color: "#8891AC",
    marginBottom: 6,
  },
  title: {
    fontFamily: "'Fraunces', serif",
    fontSize: "clamp(28px, 4vw, 40px)",
    fontWeight: 600,
    margin: "0 0 6px",
    letterSpacing: "-0.01em",
  },
  subtitle: { margin: 0, color: "#B8C0DA", fontSize: 15, maxWidth: 520 },
  statRow: { display: "flex", gap: 0, marginTop: 32, borderTop: "1px solid #232B47" },
  stat: { flex: 1, padding: "16px 8px", textAlign: "center", borderRight: "1px solid #232B47" },
  statNum: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 24, fontWeight: 600 },
  statLabel: { fontSize: 11, color: "#8891AC", marginTop: 2, textTransform: "uppercase", letterSpacing: "0.05em" },
  main: { maxWidth: 1100, margin: "0 auto", padding: "28px 24px 60px" },
  searchBar: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    background: "#1B2340",
    border: "1px solid #2A324F",
    borderRadius: 10,
    padding: "12px 14px",
    marginBottom: 20,
  },
  searchInput: {
    flex: 1,
    background: "transparent",
    border: "none",
    outline: "none",
    color: "#EDE7DA",
    fontSize: 14,
  },
  clearBtn: { background: "transparent", border: "none", color: "#8891AC", display: "flex" },
  guideBox: {
    background: "#1B2340",
    border: "1px solid #2A324F",
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  guideToggle: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "transparent",
    border: "none",
    padding: "13px 16px",
    color: "#EDE7DA",
    fontSize: 13.5,
    fontWeight: 600,
  },
  guideToggleLeft: { display: "flex", alignItems: "center", gap: 8 },
  guideList: {
    margin: 0,
    padding: "0 20px 18px 34px",
    color: "#B8C0DA",
    fontSize: 13,
    lineHeight: 1.7,
  },
  deptTabs: { display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 },
  deptTab: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    padding: "8px 14px",
    borderRadius: 999,
    border: "1px solid",
    fontSize: 13,
    fontWeight: 500,
    transition: "all .15s",
  },
  deptTagline: { fontSize: 13, fontStyle: "italic", margin: "14px 0 8px", fontFamily: "'Fraunces', serif" },
  subTabs: { display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 },
  subTab: {
    padding: "5px 11px",
    borderRadius: 6,
    border: "1px solid",
    fontSize: 12,
    fontWeight: 500,
    transition: "all .15s",
  },
  toggleRow: { display: "flex", gap: 8, margin: "18px 0 24px" },
  toggle: {
    padding: "6px 12px",
    borderRadius: 6,
    border: "1px solid",
    fontSize: 12,
    fontWeight: 600,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))",
    gap: 14,
  },
  empty: { padding: "60px 0", textAlign: "center" },
  card: {
    display: "flex",
    background: "#1B2340",
    border: "1px solid #2A324F",
    borderRadius: 10,
    overflow: "hidden",
    transition: "transform .15s, border-color .15s",
  },
  cardStripe: { width: 4, flexShrink: 0 },
  cardBody: { padding: "14px 16px", flex: 1, display: "flex", flexDirection: "column", gap: 6 },
  cardTop: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  cardBadge: { fontFamily: "'IBM Plex Mono', monospace", fontSize: 10.5, color: "#5A6382", letterSpacing: "0.05em" },
  favBtn: { background: "transparent", border: "none", padding: 2, display: "flex" },
  cardName: { fontFamily: "'Fraunces', serif", fontSize: 17, fontWeight: 600, margin: "2px 0 0" },
  cardFungsi: { fontSize: 13, color: "#B8C0DA", margin: 0, lineHeight: 1.4 },
  cardMeta: { display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap", margin: "2px 0" },
  statusPill: { fontSize: 10.5, fontWeight: 600, padding: "3px 8px", borderRadius: 999 },
  subLabel: { fontSize: 10.5, color: "#5A6382", fontFamily: "'IBM Plex Mono', monospace" },
  cardCocok: { fontSize: 12, color: "#8891AC", margin: "2px 0 8px", lineHeight: 1.4 },
  cardLink: {
    marginTop: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    fontSize: 12.5,
    color: "#EDE7DA",
    textDecoration: "none",
    border: "1px solid",
    borderRadius: 6,
    padding: "7px 10px",
    fontFamily: "'IBM Plex Mono', monospace",
  },
  footer: { textAlign: "center", color: "#5A6382", fontSize: 12, padding: "20px 24px 40px" },
};
