Bu klasör `public/` DEĞİLDİR; bu yüzden buraya koyduğunuz PDF'ler direkt URL ile erişilebilir olmaz.

F2L rehberi için varsayılan beklenen dosya yolu:
- private/pdfs/f2l-baslangic-rehberi.pdf

Alternatif olarak, PDF dosyasını sunucuda istediğiniz bir yerde tutup aşağıdaki env değişkeniyle yolunu belirtin:
- F2L_PDF_FILE_PATH=/abs/path/to/f2l-baslangic-rehberi.pdf

Güvenlik/erişim:
- PDF `/pdf/view/[token]` sayfası üzerinden görüntülenir (PDF bytes `/pdf/view/[token]/file` endpoint'inden servis edilir).
- Token 24 saat geçerlidir; süresi dolunca PDF açılmaz.


