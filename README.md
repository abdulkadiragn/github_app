# Projenin Amacı
Proje Github API servisinin sunmuş olduğu bilgileri kullanarak aranın kullanıcı adına ait bilgileri Github API servisinden alarak ekranda görmemizi sağlayan bir uygulamadır.

## Kullanıcı Ekranı
![giriş](https://github.com/user-attachments/assets/67707dae-7f16-4f81-9d2a-54fc13aa80c8)
Sayfa yüklendiğinde karşımıza resminde bulunan ekran çıkmaktadır. Ekranda arama yapmamızı sağlayacak bir alan bulunmaktadır.

## Aramanın Yapılması
![gelişme](https://github.com/user-attachments/assets/e65a42e7-6fe3-4d7d-b68c-3bc0a43f147b)
1- Aranacak kullanıcının adını yazıp "Ara" butonuna tıkladığımızda aranan kullanıcının bulunması ile resimde bulunan (2) yeni alan eklenmektedir. </br>
2- Burada aranan kişinin kişisel API servisinden çekilerek aranan kişinin bilgileri gösterilmektedir. </br>
3- Son aranan kişisel LocalStorage yardımı ile ekranda gösterilmektedir. </br>
4- Bulunan kişisin yayında olan gönderilerini görüntülemek için tıklamamız gereken link </br>

## Repoların Gösterilmesi
![sonuc](https://github.com/user-attachments/assets/c00f9524-1168-4ae4-93a4-bf23e99e7d50)
"Repoları Göster" linkine tıkladıktan sonra yayında olan repoların ve bu repoların yayınlanma tarihleri ekranda gösterilmektedir. </br>
"Repoları Kapat" linkine tıklayarak yayınlanan repoların ekrandan kaldırılmasını sağlayabiliriz.

### Ekranın tam hali
![tam](https://github.com/user-attachments/assets/5561629b-c537-4873-aaf0-0b050a1b8e34)
Aranan bir kullanıcının tekrar aranması durumunda "Son Arananlar" kısmına eklenmemektedir. Js kısmında bu kontrol yapılmaktadır.
