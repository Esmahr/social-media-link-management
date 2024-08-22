# Sosyal Medya ve Link Yönetim Uygulaması

### Proje Açıklaması


Bu proje kullanıcıların sosyal medya linklerini ve bu linklerle ilgili bilgileri daha etkili bir şekilde düzenlemelerini ve yönetmelerini kolaylaştırmayı amaçlıyor.

#### Proje Yapısı

---

<details>
<summary>Proje Kurulumu</summary>

- Aşağıdaki komut ile projeyi lokalinize klonlayın.

    - git clone [https://github.com/Esmahr/social-media-link-management.git](https://github.com/Esmahr/social-media-link-management.git)


## Backend
- Clonlanan proje içerisindeki backend projesini vsCode'da açın.
- Açılan projenin terminalinde ` npm install ` komutu ile npm paketini indirin.
- Paket indikten sonra ` docker-compose up -d `  komutu ile docker container larınızı oluşturun.  
- Docker desktop uygulamasını açın.
<img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/docker.png" alt="alt yazı" width="320">   
- Proje terminalinde ` npm start ` komutu ile projeyi lokalinizde ayağa kaldırın.
- Docker desktopda oluşan **_sosyal-medya-link-yonetimi-backend_** container ında port alanından MongoDb veritabanı portunuzu tarayıcıda açın.
    * MongoDb Url: **_http://localhost:8081/_**
    * username: esma
    * password: esma

     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/db1.png" alt="alt yazı" width="320">

     ---

     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/db2.png" alt="alt yazı" width="320">

     ---

     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/db3.png" alt="alt yazı" width="320">
- Backend isteklerini test etmek için; 
    * Postman Collection : https://github.com/Esmahr/social-media-link-management/tree/main/postman
    * Swagger Url: http://localhost:5000/api-docs/#/


## Frontend
- Clonlanan proje içerisindeki frontend projesini vsCode'da açın.
- Açılan projenin terminalinde ` npm install ` komutu ile npm paketini indirin.
- Paket indikten sonra ` ng serve ` komutu ile projeyi lokalinizde ayağa kaldırın.
- Tarayıcınızda **_http://localhost:4200/_** portu ile projeye ulaşabilirsiniz.

</details>

---

<details>
<summary>Proje Kullanımı</summary>

- Register Ekranı
    * Proje localde çalıştıktan sonra açılan sayfada register alanında bilgilerinizi doldurarak üye olunuz.
    <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/register.png" alt="alt yazı" width="320">
    * Üye olduktan 2 saniye sonra login ekranına yönlendirileceksiniz.
- Login Ekranı
    * Login alanında bilgilerinizi doldurarak giriş yapınız.
     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/login.png" alt="alt yazı" width="320">

- Home Ekranı
    * Login olduktan sonra home ekranına yönlendirileceksiniz.
     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/home.png" alt="alt yazı" width="320">
    * Anasayfada sağ üst köşede bulunan **Çıkış Yap** ikonuna tıklayarak hesabınızdan çıkış yapabilirsiniz.
    * Anasayfanızda mevcut sosyal medya linklerinizi görüntüleyebilir ve bu linkler içinde arama işlemini yapıp sıralama yapabilirsiniz.
     <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/search.png" alt="alt yazı" width="320">
    * Ayrıca bu sayfada temel crud işlemlerinizi yapabilirsiniz.
        - **Yeni sosyal medya linki ekleme**
            - Ana sayfada, sağ üst köşede bulunan **Yeni Ekle** butonu ile sosyal medya linki ekleyebilirsiniz
             <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/new.png" alt="alt yazı" width="320">
             - Yeni sosyal medya linki ekleme
        - **Sosyal Medya Bilgilerini Güncelleme ve Silme**
             - Ana sayfada, tablo içerisinde düzenlemek istediğiniz satıra tıklayınız.
             - Açılan modal da mevcut bilgilerinizi görüntüleyebilir, **Kaydet** butonu ile güncelleyebilir veye **Sil** butonu ile silebilirsiniz.
             <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/edit.png" alt="alt yazı" width="320">
        - **Son Ziiyaret Edilen Linkler**
             - Yeni ekle butonu yanında bulunan **view** butonuna tıklayarak en son ziyaret ettiğiniz linklerinizi görüntüleyebilirsiniz.
             <img src="./sosyal-medya-link-yonetimi-frontend/src/assets/readme/lastvisited.png" alt="alt yazı" width="320">

</details>

---

<details>
<summary>Değerlendirme Kriterleri Tamamlanma Durumları</summary>

* [x] Projeden ne anladığınızı ve hangi adımları izleyerek ilerlediğinizi bir doküman olarak yazıp proje içerisine ekleyiniz (15P)
* [x] Angular'da kodları component ve service’lere bölün (15P)
* [x] Tasarımı responsive olarak kodlayın (10p)
* [x] API NodeJS ve express kullanarak oluşturulmalı (20P)
* [x] Verileri bir veritabanında (MongoDB, MySQL,…) kalıcı olarak saklayın (10p)
* [x] Restful API tasarım kurallarına dikkat edilmeli (5p)
* [x] Veri nesneleri için model ve interfaceleri tanımlayın (10p)
* [x] Oluşturduğunuz API’leri bir postman collection olarak projeye ekleyin (5p)
* [x] Karmaşık kod bloklarınız için yorumları unutmayın (5p)
* [x] Kolayca çalıştırabilmemiz için readme dosyasında gerekli yönergeleri bulundurun (5p)
* [x] (Bonus) Kullanıcının ziyaret ettiği sayfaları kullanıcının lokalinde saklayın ve son gezdiklerim listesi oluşturup ekranın bir köşesinde gösterin (10p)

Toplam puan: :smirk: 100 

</details>
