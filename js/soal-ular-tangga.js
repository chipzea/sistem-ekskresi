/* Bank soal Snakes and Ladders.
   Format per baris: nomor kotak|level|soal|jawaban benar|pengecoh 1|pengecoh 2|pengecoh 3
   SQ = soal bahasa Indonesia, SQE = versi bahasa Inggris (menimpa SQ), SE = penjelasan jawaban benar. */
const SQ=`1|C5|Dua siswa membandingkan kebiasaan: A minum cukup air dan rutin buang air kecil, B minum sangat sedikit dan sering menahan buang air kecil. Penilaian yang paling tepat tentang risiko ginjal adalah ...|B lebih berisiko batu ginjal dan infeksi saluran kemih|Keduanya berisiko sama|A lebih berisiko batu ginjal|Kebiasaan itu tidak berpengaruh pada ginjal
2|C1|Organ yang menyaring darah dan menghasilkan urine adalah ...|Ginjal|Hati|Paru-paru|Lambung
3|C1|Zat sisa yang dikeluarkan paru-paru adalah ...|Karbon dioksida dan uap air|Urea dan garam|Empedu|Keringat
4|C3|Urine primer mengandung glukosa, tetapi urine akhir tidak. Penjelasan yang tepat adalah ...|Glukosa diserap kembali di tubulus proksimal|Glukosa disaring ulang di glomerulus|Glukosa diubah menjadi urea|Glukosa dikeluarkan lewat kulit
5|C1|Cairan hasil ekskresi kulit disebut ...|Keringat|Urine|Empedu|Lendir
6|C1|Organ yang menghasilkan empedu adalah ...|Hati|Ginjal|Pankreas|Usus halus
7|C1|Satuan kerja terkecil ginjal disebut ...|Nefron|Alveolus|Neuron|Sel darah
8|C1|Saluran yang menghubungkan ginjal dengan kandung kemih adalah ...|Ureter|Uretra|Trakea|Esofagus
9|C4|Urine pasien P mengandung protein, urine pasien Q mengandung glukosa. Kesimpulan yang paling tepat adalah ...|P mengalami gangguan penyaringan di glomerulus, Q kemungkinan kadar gula darahnya tinggi|P kekurangan hormon ADH, Q menderita batu ginjal|P menderita hepatitis, Q menderita sirosis|Keduanya sehat karena urine normal
10|C1|Saluran yang membuang urine ke luar tubuh adalah ...|Uretra|Ureter|Pelvis renalis|Tubulus pengumpul
11|C1|Kelenjar keringat terdapat pada lapisan kulit yang disebut ...|Dermis|Epidermis|Lapisan tanduk|Pori-pori
12|C1|Zat sisa hasil pemecahan protein yang dibuang lewat urine adalah ...|Urea|Glukosa|Oksigen|Pati
13|C1|Gas sisa respirasi yang dikeluarkan lewat paru-paru adalah ...|CO₂|O₂|N₂|H₂
14|C1|Proses pengeluaran zat sisa metabolisme dari tubuh disebut ...|Ekskresi|Defekasi|Digesti|Absorpsi
15|C1|Bagian ginjal tempat urine ditampung sebelum masuk ureter adalah ...|Pelvis renalis|Korteks|Medula|Glomerulus
16|C3|Pasien mengeluh nyeri pinggang dan tubuh bengkak setelah infeksi bakteri pada nefron. Diagnosis yang paling sesuai adalah ...|Nefritis|Hepatitis|Asma|Biang keringat
17|C1|Kantung yang menyimpan empedu disebut ...|Kantung empedu|Kandung kemih|Lambung|Usus buntu
18|C1|Tempat pertukaran gas dan pelepasan CO₂ di paru-paru adalah ...|Alveolus|Bronkus|Trakea|Laring
19|C1|Hormon yang mengatur penyerapan air di ginjal adalah ...|ADH|Insulin|Adrenalin|Tiroksin
20|C2|Mengapa keringat membantu tubuh saat cuaca panas?|Penguapannya menurunkan suhu tubuh|Menambah kadar gula darah|Menyimpan garam di kulit|Menutup pori-pori
21|C4|Seorang pasien mengalami kerusakan hati parah. Kadar amonia dalam darahnya tinggi dan kadar urea rendah. Hubungan yang tepat adalah ...|Hati gagal mengubah amonia menjadi urea|Ginjal gagal menyaring urea|Paru-paru gagal membuang CO₂|Kulit gagal mengeluarkan keringat
22|C2|Pernyataan yang benar tentang urine primer adalah ...|Berisi glukosa dan belum mengandung protein|Berisi protein dan sel darah|Tidak mengandung urea|Sudah keluar dari tubuh
23|C2|Tahap pembentukan urine yang berlangsung di glomerulus adalah ...|Filtrasi|Reabsorpsi|Augmentasi|Absorpsi
24|C2|Penyerapan kembali zat yang masih berguna terjadi pada tahap ...|Reabsorpsi|Filtrasi|Augmentasi|Ekskresi
25|C2|Tahap pembentukan urine yang berlangsung di tubulus kontortus distal adalah ...|Augmentasi|Filtrasi|Reabsorpsi|Difusi
26|C2|Zat terlarut utama dalam urine selain air adalah ...|Urea dan garam mineral|Glukosa dan protein|Sel darah merah|Lemak
27|C2|Bagian nefron yang berbentuk huruf U adalah ...|Lengkung Henle|Glomerulus|Kapsul Bowman|Tubulus pengumpul
28|C5|Tekanan darah di glomerulus anjlok dan tubulus proksimal rusak. Dampaknya berturut-turut adalah ...|Filtrasi menurun, lalu glukosa dan zat berguna ikut terbuang bersama urine|Reabsorpsi meningkat, lalu urine makin pekat|Filtrasi meningkat, lalu protein tidak lolos|Augmentasi berhenti, lalu urine primer tidak terbentuk
29|C2|Perbedaan ekskresi dan defekasi adalah ...|Ekskresi membuang sisa metabolisme sel, defekasi membuang sisa makanan yang tidak dicerna|Ekskresi membuang feses, defekasi membuang urine|Keduanya sama-sama membuang sisa makanan|Ekskresi hanya terjadi di usus
30|C2|Mengapa kulit disebut organ ekskresi?|Mengeluarkan keringat yang berisi zat sisa|Menyerap air dari luar|Menyimpan lemak|Melindungi dari sinar matahari
31|C2|Fungsi hati dalam sistem ekskresi adalah ...|Mengubah amonia menjadi urea|Menyaring darah menjadi urine|Mengeluarkan CO₂|Menghasilkan keringat
32|C2|Mengapa glukosa tidak ditemukan dalam urine sehat?|Diserap kembali pada reabsorpsi|Tidak pernah disaring|Dipecah di kandung kemih|Diubah menjadi urea
33|C2|Mengapa protein tidak terdapat dalam urine primer?|Ukurannya terlalu besar untuk lolos dari glomerulus|Dipecah di kapsul Bowman|Diserap di ureter|Diubah menjadi amonia
34|C2|Saat tubuh kekurangan air, yang terjadi pada urine adalah ...|Urine menjadi pekat dan sedikit|Urine menjadi encer dan banyak|Urine berwarna merah|Urine mengandung glukosa
35|C2|Pernyataan yang tepat tentang ureter adalah ...|Saluran dari ginjal ke kandung kemih|Tempat penyaringan darah|Penampung urine sementara|Saluran keluar ke luar tubuh
36|C3|Hasil pemeriksaan urine Dina menunjukkan adanya glukosa. Tindakan yang paling tepat adalah ...|Memeriksakan kadar gula darah ke dokter|Mengurangi minum air|Menahan buang air kecil|Memperbanyak garam
37|C1|Pembuluh yang membawa darah kaya zat sisa menuju ginjal adalah ...|Arteri renalis|Vena renalis|Arteri pulmonalis|Vena cava inferior
38|C2|Dari tubulus pengumpul, urine mengalir ke ...|Pelvis renalis|Kapsul Bowman|Glomerulus|Tubulus proksimal
39|C2|Bagian ginjal yang mengandung badan Malpighi adalah ...|Korteks|Medula|Pelvis|Ureter
40|C3|Seseorang minum sangat banyak air. Dampaknya pada urine adalah ...|Urine menjadi lebih encer dan banyak|Urine menjadi lebih pekat|Urine berhenti terbentuk|Urine berwarna hijau
41|C3|Setelah berolahraga lama, Doni berkeringat banyak. Tindakan yang tepat adalah ...|Minum air putih untuk mengganti cairan|Menahan minum agar tidak buang air kecil|Hanya makan makanan asin|Mandi air panas tanpa minum
42|C3|Zat yang seharusnya tidak ada dalam urine sehat tetapi muncul pada penderita diabetes melitus adalah ...|Glukosa|Urea|Air|Garam mineral
43|C3|Urine Rina berbusa dan mengandung protein. Kemungkinan terjadi kerusakan pada ...|Glomerulus|Ureter|Uretra|Kandung kemih
44|C3|Pak Budi mengalami batu ginjal. Gejala yang mungkin dirasakan adalah ...|Nyeri pinggang saat buang air kecil|Sesak karena alveolus rusak|Kulit menguning|Jerawat di wajah
45|C3|Agar ginjal tetap sehat, kebiasaan yang tepat adalah ...|Tidak menahan buang air kecil|Mengurangi minum air|Banyak makan makanan asin|Sering minum obat sembarangan
46|C3|Kulit dan mata Ani menguning. Organ yang kemungkinan bermasalah adalah ...|Hati|Paru-paru|Kulit|Usus besar
47|C4|Tahap filtrasi terganggu karena glomerulus rusak. Dampak berantai yang paling mungkin adalah ...|Protein dan sel darah dapat lolos ke dalam urine|Kandung kemih memproduksi urine sendiri|Hati membantu menyaring darah|Paru-paru membuang urea
48|C2|Jika saluran empedu tersumbat, zat yang menumpuk dalam darah adalah ...|Bilirubin|Insulin|Asam lambung|Amilase
49|C5|Seorang pasien tidak lagi dapat membentuk urine. Penanganan paling tepat dan alasannya adalah ...|Hemodialisis atau cangkok ginjal, karena zat sisa menumpuk bila ginjal gagal|Berolahraga agar urea keluar lewat napas|Menahan minum agar ginjal beristirahat|Minum alkohol agar hati bekerja lebih keras
50|C2|Pori-pori kulit berfungsi sebagai ...|Tempat keluarnya keringat|Tempat masuknya makanan|Penyaring darah|Penghasil urine
51|C4|Seorang pendaki berkeringat banyak dan tidak minum. Urinenya sedikit dan pekat. Analisis yang benar adalah ...|Tubuh menghemat air dengan menyerap lebih banyak air di ginjal|Ginjal berhenti menyaring darah|Kelenjar keringat mengambil alih fungsi ginjal|Hati mengubah air menjadi urea
52|C2|Suhu tubuh dijaga stabil salah satunya oleh keluarnya ...|Keringat|Urine|Empedu|Feses
53|C1|Bagian nefron yang berupa anyaman kapiler darah adalah ...|Glomerulus|Kapsul Bowman|Lengkung Henle|Tubulus pengumpul
54|C1|Cawan yang mengelilingi glomerulus disebut ...|Kapsul Bowman|Pelvis renalis|Tubulus distal|Ureter
55|C2|Urutan jalannya urine keluar yang benar adalah ...|Ginjal → ureter → kandung kemih → uretra|Ginjal → uretra → ureter → kandung kemih|Kandung kemih → ginjal → ureter → uretra|Ureter → ginjal → uretra → kandung kemih
56|C3|Urine seseorang bercampur darah. Kondisi ini disebut ...|Hematuria|Albuminuria|Diabetes insipidus|Sirosis
57|C1|Proses keluarnya CO₂ dari paru-paru terjadi saat ...|Ekspirasi|Inspirasi|Menelan|Bersendawa
58|C2|Zat sisa dari kulit yang berupa garam dikeluarkan dalam bentuk ...|Keringat|Urine|Feses|Napas
59|C2|Mengapa urine orang yang kurang minum berwarna kuning pekat?|Zat terlarut lebih terkonsentrasi karena air sedikit|Ginjal berhenti bekerja|Banyak glukosa di dalamnya|Protein bocor ke urine
60|C2|Endapan mineral yang menyumbat saluran kemih disebut ...|Batu ginjal|Hepatitis|Asma|Sirosis
61|C2|Gangguan ginjal berupa peradangan nefron karena bakteri disebut ...|Nefritis|Hepatitis|Sirosis|Anemia
62|C5|Evaluasi pernyataan: Keringat dapat sepenuhnya menggantikan fungsi ginjal. Penilaian yang tepat adalah ...|Salah, karena keringat hanya mengeluarkan sedikit urea dan tidak mengatur keseimbangan air serta garam seperti ginjal|Benar, karena keringat mengandung semua zat sisa|Benar, karena kulit menyaring darah|Salah, karena keringat tidak berisi air
63|C2|Hepatitis adalah peradangan pada ...|Hati|Ginjal|Kulit|Paru-paru
64|C4|Kadar hormon ADH dalam tubuh seseorang rendah. Dampak yang diperkirakan adalah ...|Urine banyak dan encer karena air kurang diserap kembali|Urine sedikit dan pekat|Glukosa muncul dalam urine|Protein lolos ke urine
65|C1|Kelainan akibat kekurangan hormon ADH adalah ...|Diabetes insipidus|Diabetes melitus|Albuminuria|Hematuria
66|C2|Hematuria adalah kondisi urine yang ...|Bercampur darah|Mengandung gula|Mengandung protein|Sangat encer
67|C2|Albuminuria adalah kondisi urine yang ...|Mengandung protein|Mengandung gula|Bercampur darah|Berwarna hijau
68|C1|Sirosis hati sering disebabkan oleh ...|Alkohol berlebihan|Kurang gerak|Terlalu banyak minum air|Udara dingin
69|C2|Biang keringat terjadi karena ...|Pori-pori tersumbat|Kekurangan vitamin C|Infeksi paru|Gangguan ginjal
70|C1|Organ ekskresi yang menghasilkan zat sisa berupa gas adalah ...|Paru-paru|Ginjal|Kulit|Hati
71|C4|Di cuaca panas, Rani banyak berkeringat sehingga buang air kecil lebih jarang. Hubungan yang paling tepat adalah ...|Air tubuh banyak keluar lewat keringat sehingga urine yang dibentuk lebih sedikit dan pekat|Kulit mengambil alih seluruh fungsi ginjal|Ginjal menghasilkan keringat|Urine bertambah karena tubuh kehilangan garam
72|C2|Hasil pemecahan sel darah merah tua oleh hati adalah ...|Bilirubin|Glukosa|Insulin|Amilase
73|C1|Tempat urine ditampung sementara adalah ...|Kandung kemih|Ureter|Uretra|Kapsul Bowman
74|C2|Mengapa hati disebut organ ekskresi?|Menghasilkan empedu yang mengandung zat sisa|Menyaring darah menjadi urine|Mengeluarkan CO₂|Menghasilkan keringat
75|C2|Karbon dioksida diangkut ke paru-paru oleh ...|Darah|Empedu|Urine|Air liur
76|C3|Seseorang sering menahan buang air kecil. Risiko yang dapat terjadi adalah ...|Infeksi saluran kemih dan batu ginjal|Sirosis hati|Asma|Biang keringat
77|C3|Orang yang bekerja di ruangan ber-AC jarang berkeringat. Zat sisa dan air lebih banyak dikeluarkan lewat ...|Urine|Rambut|Kuku|Gigi
78|C3|Doni merokok bertahun-tahun dan sering sesak napas. Organ ekskresi yang terganggu adalah ...|Paru-paru|Ginjal|Hati|Kulit
79|C3|Agar fungsi hati terjaga, sebaiknya kita ...|Menghindari alkohol|Memperbanyak minum alkohol|Makan terlalu berlemak setiap hari|Sering minum obat tanpa anjuran
80|C5|Rencana terbaik untuk menjaga hati agar tetap mengekskresikan empedu dan menetralkan racun adalah ...|Menghindari alkohol, menjaga kebersihan makanan, dan vaksin hepatitis|Memperbanyak alkohol agar hati terlatih|Tidak makan seharian|Minum obat tanpa anjuran dokter
81|C3|Setelah makan banyak garam, orang merasa haus. Hal ini membantu agar ...|Kadar garam dalam darah kembali seimbang|Tubuh menyimpan gula|Paru-paru bekerja lebih ringan|Hati membuat empedu lebih banyak
82|C3|Seseorang sangat sering buang air kecil dengan urine encer dan banyak. Kemungkinan ia kekurangan hormon ...|ADH|Insulin|Adrenalin|Estrogen
83|C3|Sinta mandi dua kali sehari dan mengganti baju yang basah keringat. Tujuannya adalah ...|Mencegah pori-pori tersumbat dan biang keringat|Menambah produksi keringat|Menghentikan keringat|Menghilangkan urine
84|C2|Zat berguna yang seluruhnya diserap kembali pada reabsorpsi normal adalah ...|Glukosa|Urea|Obat-obatan|Ion H⁺
85|C1|Pusat pengatur banyak sedikitnya keringat berada di ...|Hipotalamus|Lambung|Paru-paru|Pankreas
86|C1|Cairan kuning kehijauan yang dihasilkan hati disebut ...|Empedu|Urine|Keringat|Lendir
87|C5|Dalam satu hari seseorang kurang minum, makan sangat asin, dan sering menahan buang air kecil. Jika terus dilakukan, dampak jangka panjang yang paling mungkin adalah ...|Risiko batu ginjal dan gangguan ginjal meningkat|Fungsi ginjal menjadi lebih baik|Hati menghasilkan lebih banyak urine|Paru-paru menggantikan fungsi ginjal
88|C2|Mengapa ginjal disebut penyaring darah?|Menyaring zat sisa dari darah untuk dibuang lewat urine|Menghasilkan empedu|Menukar oksigen dan CO₂|Mengeluarkan keringat
89|C2|Jumlah ginjal pada manusia normal adalah ...|Sepasang (dua)|Satu|Tiga|Empat
90|C1|Uap air dikeluarkan tubuh melalui ...|Paru-paru|Kuku|Rambut|Gigi
91|C2|Pada alveolus, CO₂ berpindah dari ...|Darah ke udara|Udara ke darah|Urine ke darah|Darah ke urine
92|C2|Penyebab utama batu ginjal adalah ...|Endapan mineral yang mengeras karena kurang minum|Infeksi virus|Peradangan hati|Alveolus rusak
93|C4|Perhatikan zat berikut: (1) CO₂, (2) urea, (3) garam, (4) empedu. Zat sisa yang dikeluarkan lewat paru-paru dan hati berturut-turut adalah ...|(1) dan (4)|(2) dan (3)|(1) dan (2)|(3) dan (4)
94|C3|Makanan yang sebaiknya dibatasi agar ginjal tidak terbebani adalah ...|Makanan terlalu asin dan olahan|Sayuran hijau|Air putih|Buah segar
95|C4|Pasien hepatitis sering bermata kuning. Hubungan sebab-akibat yang tepat adalah ...|Hati gagal mengolah bilirubin sehingga menumpuk di darah|Ginjal gagal menyaring glukosa|Kulit memproduksi terlalu banyak keringat|Paru-paru menahan CO₂
96|C3|Glomerulus Pak Andi rusak. Dampaknya bagi urine adalah ...|Protein dapat ikut keluar bersama urine|Urine tidak lagi terbentuk sama sekali|Urine berwarna hijau|Glukosa selalu hilang
97|C3|Anita demam tinggi dan berkeringat banyak. Urine yang keluar kemungkinan ...|Lebih sedikit dan pekat|Lebih banyak dan encer|Berwarna merah|Mengandung glukosa
98|C5|Pasien M mengalami gagal ginjal dan pasien N mengalami sirosis hati. Penilaian yang tepat tentang zat sisa yang menumpuk adalah ...|M menumpuk urea dan air, N menumpuk amonia dan bilirubin|M menumpuk CO₂, N menumpuk urea|Keduanya menumpuk keringat|M menumpuk empedu, N menumpuk urine
99|C3|Mesin hemodialisis pada pasien gagal ginjal berfungsi menggantikan kerja ...|Ginjal|Hati|Paru-paru|Kulit`;
const SQE=`2|C1|Which organ filters the blood and produces urine?|Kidney|Liver|Lungs|Stomach
4|C3|Primary urine contains glucose, but the final urine does not. The best explanation is ...|Glucose is reabsorbed in the proximal tubule|Glucose is filtered again in the glomerulus|Glucose is converted into urea|Glucose is removed through the skin
6|C1|Which organ produces bile?|Liver|Kidney|Pancreas|Small intestine
8|C1|Which tube connects the kidney to the urinary bladder?|Ureter|Urethra|Trachea|Esophagus
10|C1|Which tube carries urine out of the body?|Urethra|Ureter|Renal pelvis|Collecting duct
12|C1|The waste product of protein breakdown that is removed in urine is ...|Urea|Glucose|Oxygen|Starch
14|C1|The removal of metabolic waste from the body is called ...|Excretion|Defecation|Digestion|Absorption
16|C3|A patient has back pain and swelling after a bacterial infection of the nephrons. The most likely diagnosis is ...|Nephritis|Hepatitis|Asthma|Prickly heat
18|C1|Where does gas exchange take place in the lungs, releasing CO₂?|Alveolus|Bronchus|Trachea|Larynx
20|C2|Why does sweating help the body in hot weather?|Its evaporation lowers body temperature|It raises blood sugar|It stores salt in the skin|It closes the pores
22|C2|Which statement about primary urine is correct?|It contains glucose but no protein|It contains protein and blood cells|It contains no urea|It has already left the body
24|C2|Which stage of urine formation returns useful substances to the blood?|Reabsorption|Filtration|Augmentation|Excretion
26|C2|Besides water, the main dissolved substances in urine are ...|Urea and mineral salts|Glucose and protein|Red blood cells|Fat
28|C5|Blood pressure in the glomerulus drops sharply and the proximal tubule is damaged. The effects, in order, are ...|Filtration decreases, then glucose and useful substances are lost in the urine|Reabsorption increases, then urine becomes more concentrated|Filtration increases, then protein cannot pass|Augmentation stops, then primary urine is not formed
30|C2|Why is the skin called an excretory organ?|It removes sweat that contains waste substances|It absorbs water from outside|It stores fat|It protects against sunlight
32|C2|Why is glucose not found in healthy urine?|It is reabsorbed during reabsorption|It is never filtered|It is broken down in the bladder|It is converted into urea
34|C2|When the body lacks water, what happens to the urine?|It becomes concentrated and small in volume|It becomes dilute and large in volume|It turns red|It contains glucose
36|C3|Dina's urine test shows glucose. The most appropriate action is ...|Have her blood sugar checked by a doctor|Drink less water|Hold back urination|Eat more salt
38|C2|From the collecting duct, urine flows into the ...|Renal pelvis|Bowman's capsule|Glomerulus|Proximal tubule
40|C3|A person drinks a very large amount of water. What is the effect on urine?|It becomes more dilute and larger in volume|It becomes more concentrated|It stops forming|It turns green
42|C3|Which substance should not be in healthy urine but appears in people with diabetes mellitus?|Glucose|Urea|Water|Mineral salts
44|C3|Mr. Budi has kidney stones. Which symptom might he feel?|Back pain when urinating|Shortness of breath from damaged alveoli|Yellow skin|Acne on the face
46|C3|Ani's skin and eyes turn yellow. Which organ is most likely affected?|Liver|Lungs|Skin|Large intestine
48|C2|If the bile duct is blocked, which substance builds up in the blood?|Bilirubin|Insulin|Stomach acid|Amylase
50|C2|The skin pores function as ...|The exit of sweat|The entrance of food|A blood filter|A urine producer
52|C2|Body temperature is kept stable partly by the release of ...|Sweat|Urine|Bile|Feces
54|C1|The cup-shaped structure surrounding the glomerulus is called ...|Bowman's capsule|Renal pelvis|Distal tubule|Ureter
56|C3|A person's urine contains blood. This condition is called ...|Hematuria|Albuminuria|Diabetes insipidus|Cirrhosis
58|C2|Salt waste from the skin is released in the form of ...|Sweat|Urine|Feces|Breath
60|C2|A hardened mineral deposit that blocks the urinary tract is called ...|Kidney stone|Hepatitis|Asthma|Cirrhosis
62|C5|Evaluate the statement: Sweat can completely replace the function of the kidneys. The correct judgment is ...|False, because sweat removes only a little urea and cannot regulate water and salt balance like the kidneys|True, because sweat contains all waste substances|True, because the skin filters the blood|False, because sweat contains no water
64|C4|A person has a low level of ADH. The expected effect is ...|Large amounts of dilute urine because less water is reabsorbed|Small amounts of concentrated urine|Glucose appears in the urine|Protein leaks into the urine
66|C2|Hematuria is a condition in which urine ...|Contains blood|Contains sugar|Contains protein|Is very dilute
68|C1|Liver cirrhosis is often caused by ...|Excessive alcohol|Lack of exercise|Drinking too much water|Cold air
70|C1|Which excretory organ removes waste in the form of gas?|Lungs|Kidney|Skin|Liver
72|C2|Which substance is produced when the liver breaks down old red blood cells?|Bilirubin|Glucose|Insulin|Amylase
74|C2|Why is the liver considered an excretory organ?|It makes bile that carries waste substances|It filters blood into urine|It releases CO₂|It produces sweat
76|C3|A person often holds back urination. Which risk may occur?|Urinary tract infection and kidney stones|Liver cirrhosis|Asthma|Prickly heat
78|C3|Doni has smoked for years and often feels short of breath. Which excretory organ is affected?|Lungs|Kidney|Liver|Skin
80|C5|The best plan to keep the liver able to excrete bile and neutralize toxins is ...|Avoid alcohol, keep food clean, and get the hepatitis vaccine|Drink more alcohol to train the liver|Do not eat all day|Take medicine without a doctor's advice
82|C3|A person urinates very often, producing large amounts of dilute urine. He probably lacks the hormone ...|ADH|Insulin|Adrenaline|Estrogen
84|C2|Which useful substance is completely reabsorbed during normal reabsorption?|Glucose|Urea|Drugs|H⁺ ions
86|C1|The yellow-green fluid produced by the liver is called ...|Bile|Urine|Sweat|Mucus
88|C2|Why is the kidney called the blood filter?|It filters waste from the blood to be removed in urine|It produces bile|It exchanges oxygen and CO₂|It releases sweat
90|C1|Water vapor leaves the body through the ...|Lungs|Nails|Hair|Teeth
92|C2|The main cause of kidney stones is ...|Mineral deposits that harden because of too little water|A viral infection|Liver inflammation|Damaged alveoli
94|C3|Which food should be limited so the kidneys are not overworked?|Very salty and processed food|Green vegetables|Water|Fresh fruit
96|C3|Mr. Andi's glomeruli are damaged. What is the effect on his urine?|Protein may leave with the urine|Urine is no longer formed at all|Urine turns green|Glucose is always lost
98|C5|Patient M has kidney failure and patient N has liver cirrhosis. Which judgment about the accumulating waste is correct?|M accumulates urea and water, N accumulates ammonia and bilirubin|M accumulates CO₂, N accumulates urea|Both accumulate sweat|M accumulates bile, N accumulates urine
99|C3|A hemodialysis machine in a kidney failure patient takes over the work of the ...|Kidney|Liver|Lungs|Skin`;
const SE=`1|Batu ginjal dan infeksi saluran kemih lebih mudah terjadi bila kurang minum dan sering menahan buang air kecil, karena mineral mengendap dan bakteri tidak terbilas keluar.
2|The kidneys filter waste and excess water from the blood and form urine.
3|Paru-paru mengeluarkan CO₂ dan uap air hasil respirasi sel saat ekspirasi.
4|Useful substances such as glucose are reabsorbed into the blood in the proximal tubule, so the final urine has none.
5|Keringat dihasilkan kelenjar keringat di kulit dan berisi air, garam, serta sedikit urea.
6|The liver makes bile, which carries bilirubin out of the body.
7|Nefron adalah satuan struktural dan fungsional ginjal; tiap ginjal memiliki sekitar satu juta nefron.
8|The ureter carries urine from each kidney to the urinary bladder.
9|Protein dalam urine menandakan filtrasi di glomerulus bocor, sedangkan glukosa dalam urine menandakan kadar gula darah melebihi kemampuan reabsorpsi (misalnya pada diabetes melitus).
10|The urethra is the final tube that carries urine from the bladder out of the body.
11|Kelenjar keringat berada di lapisan dermis dan salurannya bermuara di pori-pori epidermis.
12|Urea is made from ammonia in the liver and removed in urine.
13|Respirasi sel menghasilkan CO₂ yang dikeluarkan lewat paru-paru.
14|Excretion removes metabolic waste, unlike defecation, which removes undigested food.
15|Urine dari tubulus pengumpul ditampung di pelvis renalis lalu mengalir ke ureter.
16|Inflammation of the nephrons caused by bacteria is called nephritis.
17|Empedu dihasilkan hati dan disimpan di kantung empedu sebelum dialirkan ke usus halus.
18|The alveoli are tiny air sacs where CO₂ leaves the blood.
19|ADH membuat ginjal menyerap lebih banyak air sehingga urine menjadi lebih pekat.
20|Sweat takes heat from the skin as it evaporates, so the body cools down.
21|Hati mengubah amonia yang beracun menjadi urea; jika hati rusak, amonia menumpuk dan urea berkurang.
22|Primary urine is the filtrate in Bowman's capsule: it has glucose, but proteins are too large to pass.
23|Filtrasi terjadi di badan Malpighi: darah disaring di glomerulus sehingga terbentuk urine primer.
24|Reabsorption in the proximal tubule returns glucose, amino acids, and most of the water to the blood.
25|Pada augmentasi di tubulus distal ditambahkan zat sisa seperti ion H⁺ dan obat sehingga terbentuk urine sesungguhnya.
26|Urine is mostly water, with urea and mineral salts as the main dissolved wastes.
27|Lengkung Henle berbentuk huruf U dan berperan dalam pemekatan urine.
28|Low pressure reduces filtration, and a damaged proximal tubule cannot reabsorb glucose, so it is lost in the urine.
29|Ekskresi membuang sisa metabolisme sel, sedangkan defekasi membuang sisa makanan yang tidak dicerna (feses).
30|Sweat contains water, salt, and a little urea, so the skin removes waste.
31|Hati mengubah amonia hasil pemecahan protein menjadi urea, yang dibawa darah ke ginjal untuk dibuang.
32|Glucose passes the filter but is reabsorbed in the proximal tubule, so it does not appear in healthy urine.
33|Molekul protein berukuran besar sehingga tidak lolos dari pori-pori glomerulus saat filtrasi.
34|With little water, the kidneys reabsorb more water, making a small amount of concentrated urine.
35|Ureter adalah saluran sempit yang mengalirkan urine dari ginjal ke kandung kemih.
36|Glucose in urine can signal high blood sugar, such as diabetes mellitus, so a doctor should check it.
37|Arteri renalis membawa darah dari aorta ke ginjal untuk disaring.
38|Urine from the collecting ducts gathers in the renal pelvis before entering the ureter.
39|Badan Malpighi (glomerulus dan kapsul Bowman) terletak di korteks ginjal.
40|Extra water is not reabsorbed, so a large amount of dilute urine is produced.
41|Keringat yang banyak membuat tubuh kehilangan air dan garam, sehingga perlu diganti dengan minum air.
42|In diabetes mellitus, blood glucose exceeds what the tubules can reabsorb, so glucose spills into the urine.
43|Protein dalam urine menandakan glomerulus rusak sehingga protein ikut tersaring.
44|Kidney stones can block the urinary tract and cause pain in the back or side when urinating.
45|Menahan buang air kecil membuat bakteri berkembang di kandung kemih; kebiasaan sehat adalah buang air saat terasa penuh.
46|Yellow skin and eyes (jaundice) show that bilirubin is building up because the liver is not working well.
47|Jika glomerulus rusak, penyaringan bocor sehingga protein dan sel darah lolos ke urine.
48|A blocked bile duct stops bilirubin from leaving the body, so it builds up in the blood.
49|Jika ginjal gagal, zat sisa menumpuk dalam darah sehingga diperlukan hemodialisis (cuci darah) atau cangkok ginjal.
50|Sweat leaves the body through the pores of the skin.
51|Saat kekurangan air, hormon ADH meningkat sehingga ginjal menyerap lebih banyak air dan urine menjadi sedikit serta pekat.
52|Sweat cools the body, which helps keep body temperature stable.
53|Glomerulus adalah gulungan kapiler darah tempat terjadinya filtrasi.
54|Bowman's capsule surrounds the glomerulus and collects the filtrate.
55|Urine dibentuk di ginjal, lalu mengalir melalui ureter ke kandung kemih dan keluar lewat uretra.
56|Hematuria means blood in the urine; it can be caused by infection, stones, or kidney damage.
57|Saat ekspirasi, CO₂ dari alveolus dikeluarkan bersama udara napas.
58|Sweat carries salt (NaCl) out of the body through the skin.
59|Saat kurang minum, jumlah air dalam urine sedikit sehingga zat terlarut lebih terkonsentrasi dan urine tampak kuning pekat.
60|A kidney stone forms when minerals crystallize and harden, blocking the urinary tract.
61|Nefritis adalah peradangan nefron, umumnya akibat infeksi bakteri.
62|The skin removes only small amounts of waste, while the kidneys control water, salt, and waste balance.
63|Hepatitis adalah peradangan hati, sering disebabkan oleh virus.
64|ADH makes the kidney reabsorb water, so low ADH means less water is reabsorbed and more urine is made.
65|Kekurangan ADH menyebabkan diabetes insipidus: urine sangat banyak dan encer.
66|Hematuria means blood in the urine; it can be caused by infection, stones, or kidney damage.
67|Albuminuria berarti ada albumin (protein) dalam urine, tanda glomerulus bermasalah.
68|Heavy alcohol use damages liver cells, which can scar the liver and lead to cirrhosis.
69|Pori-pori yang tersumbat menghalangi keluarnya keringat sehingga timbul biang keringat.
70|The lungs release CO₂ and water vapor, which are gases, when we breathe out.
71|Air tubuh yang banyak keluar lewat keringat membuat ginjal menahan air, sehingga urine lebih sedikit dan pekat.
72|The liver breaks down old red blood cells and turns the heme into bilirubin, a bile pigment.
73|Kandung kemih menampung urine sementara sebelum dikeluarkan lewat uretra.
74|Bile contains bilirubin, a waste product that the liver removes from the blood.
75|Darah mengangkut CO₂ dari jaringan menuju paru-paru.
76|Holding urine lets bacteria multiply and minerals settle, increasing the risk of infection and stones.
77|Jika keringat sedikit, kelebihan air dan zat sisa lebih banyak dikeluarkan lewat urine.
78|Smoking damages the alveoli, so the lungs cannot release CO₂ efficiently.
79|Alkohol merusak sel hati dan dapat menyebabkan sirosis, sehingga sebaiknya dihindari.
80|Avoiding alcohol, eating clean food, and being vaccinated protect the liver from damage and hepatitis.
81|Rasa haus mendorong kita minum sehingga kadar garam darah kembali seimbang dan kelebihan garam dibuang lewat urine.
82|Without enough ADH the kidney cannot reabsorb water, so the person makes large amounts of dilute urine.
83|Mandi teratur dan mengganti baju basah menjaga pori-pori tetap bersih sehingga keringat lancar dan biang keringat tidak muncul.
84|Glucose is completely reabsorbed in healthy kidneys, while urea and drugs are mostly excreted.
85|Hipotalamus mengatur suhu tubuh, termasuk banyak sedikitnya keringat.
86|Bile is a yellow-green fluid made by the liver and stored in the gallbladder.
87|Kurang minum, banyak garam, dan menahan buang air kecil dalam jangka panjang membuat mineral mengendap sehingga risiko batu ginjal dan gangguan ginjal meningkat.
88|The kidneys filter the blood, keep useful substances, and remove waste in urine.
89|Manusia normal memiliki sepasang ginjal, di kiri dan kanan tulang belakang.
90|Water vapor is released from the lungs every time we breathe out.
91|Di alveolus, CO₂ dari darah berdifusi ke udara karena konsentrasinya lebih tinggi di darah.
92|When we drink too little, minerals in the urine become concentrated and can crystallize into stones.
93|Paru-paru mengeluarkan CO₂ (1), sedangkan hati mengeluarkan empedu (4).
94|Too much salt makes the kidneys work harder, so very salty and processed food should be limited.
95|Pada hepatitis, hati gagal mengolah bilirubin sehingga menumpuk di darah dan membuat kulit serta mata kuning.
96|Damaged glomeruli have larger pores, so protein that should stay in the blood leaks into the urine.
97|Saat demam, banyak air keluar lewat keringat sehingga ginjal menghemat air dan urine menjadi lebih sedikit serta pekat.
98|Failed kidneys cannot remove urea and water, while a scarred liver cannot convert ammonia or process bilirubin.
99|Hemodialysis is an artificial kidney: it cleans waste from the blood when the kidneys fail.`;
const QS={};SQ.trim().split('\n').forEach(l=>{const p=l.split('|');QS[+p[0]]={l:p[1],q:p[2],a:p[3],w:p.slice(4)}});
SQE.trim().split('\n').forEach(l=>{const p=l.split('|');QS[+p[0]]={l:p[1],q:p[2],a:p[3],w:p.slice(4),en:1}});
SE.trim().split('\n').forEach(l=>{const i=l.indexOf('|');QS[+l.slice(0,i)].e=l.slice(i+1)});
