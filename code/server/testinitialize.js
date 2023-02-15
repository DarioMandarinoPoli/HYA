

export default async (models) => {
//The singers
    const servicesList = [
        {
            name: "The Weeknd",
            img:'https://www.billboard.com/wp-content/uploads/2022/12/the-weeknd-rc-2021-billboard-1548.jpg',
            des: "MUAbel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter, and actor. Known for his sonic versatility and dark lyricism, his music explores escapism, romance, and  melancholia, and is often inspired by personal experiences. He can sing more than one music genre (R&B,Pop, Hip hop) and plays on the keyboards ,guitar ,bass and drums.",
            Relatedevents:  "Moonlight first Night",
            genre: "Pop",
            type:'Banking',
            // name: "MUFG Bank",
            hours:'9AM-3PM  weekends are off',
            // img:'https://forestsandfinance.org/wp-content/uploads/2021/04/MUFG-scaled-1-1024x768-2.jpg',
            // des: "MUFG Bank, Ltd. is the largest bank in Japan. It was established on January 1, 2006, following the merger of the Bank of Tokyo-Mitsubishi, Ltd. and UFJ Bank Ltd. MUFG is one of the three so-called Japanese 'megabanks'. As such, it is considered a systemically important bank by the Financial Stability Board.",
            gooUrl:"https://www.google.com/maps/place/MUFG+Bank,+Hibiya+Branch/@35.6767903,139.7519023,15z/data=!3m1!5s0x60188bf07571a663:0xdf487ce44c734a74!4m9!1m2!2m1!1sMUFG+Bank!3m5!1s0x60188bf075a0bf35:0xd07b45ecd650b7fe!8m2!3d35.6767897!4d139.7627751!15sCglNVUZHIEJhbmsiA4gBAZIBBGJhbms",
            latitude:"35.677592075577294",
            longitude:"139.76383274102167",
            MoreInfo:"https://www.bk.mufg.jp/index.html",
            practInfo:"Almost free. The store is small, but the staff of the bank is good ",
        },
        {
            name: "Lazza",
            img:'https://www.rollingstone.it/wp-content/uploads/2022/12/lazza-sirio-concerts-sanremo.jpg',
            des: "Lazza , pseudonym of Jacopo Lazzarini , is an  Italian rapper,  musician and  record producer.The Milanese rapper usually uses the riocontra language in his productions, inverting the syllables of words to generate characteristic rhymesm, he can sing more than one music genre (Hip hop music, Trap music, UK Rap, Brazilian -Hip hop) and plays on the piano.",
            Relatedevents:"let us rappe",
            genre: "Rap",
            type:'Banking',
            // name: "Chang Hwa Bank",
            hours:'9AM-3PM  weekends are off',
            // img:'https://upload.wikimedia.org/wikipedia/commons/1/1f/Central_Branch%2C_Chang_Hwa_Bank_20101213.jpg',
            // des: "Chang Hwa Bank is a Taiwan-based financial institution that offers both retail and commercial banking services to private and corporate customers. Today, the Bank has seven overseas branches and representatives offices and 175 domestic branches, 4 Sub-branches and 5 securities broker",
            gooUrl:"https://www.google.com/maps/place/Chang+Hwa+Bank+Tokyo+Branch/@35.6825351,139.7671919,17z/data=!4m12!1m6!3m5!1s0x1526ba388683b1f5:0x4fbc8997b9e90e44!2sChang+Hwa+Bank+Tokyo+Branch!8m2!3d35.6825351!4d139.7693806!3m4!1s0x1526ba388683b1f5:0x4fbc8997b9e90e44!8m2!3d35.6825351!4d139.7693806",
            latitude:"35.68268322857696",
            longitude:" 139.769444970561",
            MoreInfo:"https://www.mori-trust.co.jp/office/areamarunouchi/marunouchi_north.html",
            practInfo:"It is a large office building on the right after exiting the Yaesu North Exit of Tokyo Station. I remember it was owned by Mori Trust. Perhaps because it's relatively new, it's a very beautiful office building in the middle of Tokyo, and it has a strong presence. Almost all of the tenants are companies, and there are several companies, including some listed companies and medium-sized companies. The elevators are divided into lower floors and higher floors, so be careful not to make a mistake in riding. There is only one restaurant on the first floor, which is often used by working people. The smoking area is also on the first floor and is always crowded, but it is now closed to prevent coronavirus infection.",
        },
        {
            name: "Maneskin",
            img:'https://static.sky.it/editorialimages/c45e84c5f123e78cba6fef0f8f4d59b2938b1cbf/skytg24/it/spettacolo/musica/2022/02/01/maneskin-sanremo-2022-video/maneskin_getty.jpg',
            des: "M�neskin are an Italian  Italian rock band formed in Rome in 2016 and composed by Damiano David (vocals), Victoria De Angelis (bass), Thomas Raggi (guitar) and Ethan Torchio (drums).The band sing four rock music genre (Pop Rock, Hard Rock, Glam Rock, Funk Rock).The band sing four rock music genre (Pop Rock, Hard Rock, Glam Rock, Funk Rock).",
            Relatedevents:  "Summertime Fun",
            genre: "Rock",
            type:'Banking',
            // name: "Standard Chartered Bank",
            hours:'9AM-3PM  weekends are off',
            // img:'https://av.sc.com/corp-en/content/images/SC-head-office-2022-scaled.jpg',
            // des: "Standard Chartered plc is a British multinational banking and financial services company headquartered in London, England. It operates a network of more than 1,200 branches and outlets across more than 70 countries and employs around 87,000 people",
            gooUrl:"https://www.google.com/maps/place/Standard+Chartered+Bank+Tokyo+Branch/@35.6731479,139.7396757,19z/data=!3m1!5s0x60188b86492bb445:0x42f67306eab25a4c!4m9!1m2!2m1!1sStandard+Chartered+Bank!3m5!1s0x60188b864938b475:0xe56028456477f1ce!8m2!3d35.6731479!4d139.7406938!15sChdTdGFuZGFyZCBDaGFydGVyZWQgQmFuayIDiAEBkgEEYmFuaw",
            latitude:"35.67320673227277",
            longitude:"139.7407941615091",
            MoreInfo:"https://www.sc.com/en/",
            practInfo:"Wealth advice is better when it's given by many. Receive investment advice from a diverse international team of investment specialists with deep local market knowledge, tailored to you",
        },
        {
            name: "Sfera Ebbasta",
            img:'https://www.donnaglamour.it/wp-content/uploads/2019/02/IM_Sfera_Ebbasta-1200x800.jpg',
            des: "Gionata Boschetti, known professionally as Sfera Ebbasta, also called (Sfra Ebsta), is an Italian rapper and singer.",
            Relatedevents:"Start dance",
            genre: "Rap",
            type:'Banking',
            // name: "Japan Post Bank",
            hours:'every day from 7AM-9PM',
            // img:'https://p.potaufeu.asahi.com/9eae-p/picture/23216991/17ad523cc8b8acdd733fb852776441d2.jpg',
            // des: "Japan Post Bank Co., Ltd., is a Japanese bank headquartered in Tokyo. It is a corporation held by Japan Post Holdings, in which the government of Japan has a majority stake",
            gooUrl:"https://www.google.com/maps/place/JP+Bank+ATM/@35.6731476,139.7314681,15z/data=!4m9!1m2!2m1!1sJapan+Post+Bank!3m5!1s0x60188bd774fe4509:0xf71deb95d4a5bd2c!8m2!3d35.6730104!4d139.7406789!15sCg9KYXBhbiBQb3N0IEJhbmsiA4gBAZIBA2F0bQ",
            latitude:"35.67363565817194",
            longitude:"139.742154004717",
            MoreInfo:"https://map.japanpost.jp/p/search/dtl/400213227700/",
            practInfo:"Questions are often answered by the community within 20 minutes.",
        },
        {
            name: "Tiziano Ferro",
            img:'https://www.ilriformista.it/wp-content/uploads/2022/07/tiziano-ferro-900x600.jpg',
            des: "Tiziano Ferro  is one of the most successful Italian artists of the 21st century, best known internationally for his European hit �Perdono� and his Latin American hit �Tardes Negras�. In Italy his success has been non-stop, reaching new heights with every album. His versatile baritone voice is his most distinct quality, as it has a unique timbre, and is much heavier than the voice of a typical male contemporary pop singer. He writes (almost) all of his own songs by himself, and they usually deal with the human condition in some way, whether it be love, abandonment, depression, or hope. Musically most of his work is relatively traditional, using real instruments rather than electronic ones and intricate, timeless melodies as opposed to quick catchy tunes. He has explored a wide range of genres, from pure pop to R&B, hip hop, dance, rock, jazz, and swing, from typical Latin balladry to nu metal.",
            Relatedevents:  "Moonlight first Night",
            genre: "Rap",
            type:'Pharmacy',
            // name: "Ginza Pharmacy",
            hours:'every day 11AM–8PM expect Sunday',
            // img:'https://rowa.de/content/media/2020/11/BD-Rowa_Centro-Milano_Freiwahl2.jpg',
            // des: "the community-based dispensing pharmacy was established in 1924 in Ginza. We provide all products of Sato Pharmaceutical Co., Ltd. and will give you the highly popular Sato-chan goods depending on your purchase amount.",
            gooUrl:"https://www.google.com/maps/place/Ringo+Pharmacy/@35.671392,139.7452298,15z/data=!3m1!5s0x60188be134531f51:0x29a35f68c809c15d!4m9!1m2!2m1!1sGinza+Pharmacy!3m5!1s0x60188b9741823a2f:0x3087c376a1c20ece!8m2!3d35.6716387!4d139.7680159!15sCg5HaW56YSBQaGFybWFjeVoQIg5naW56YSBwaGFybWFjeZIBCHBoYXJtYWN5",
            latitude:"35.67222876244293",
            longitude:"139.7680607313584",
            MoreInfo:"https://tmscorp.jp/%E5%BA%97%E8%88%97%E6%83%85%E5%A0%B1/%E3%82%8A%E3%82%93%E3%81%94%E8%96%AC%E5%B1%80/ ",
            practInfo:"The explanation is polite because it is a major company, but it takes some time when it is crowded or vacant. I go because it's next to the hospital, but the pharmacy in the neighborhood is faster",
        },
        {
            name: "Blanco",
            img:'https://www.rollingstone.it/wp-content/uploads/2023/01/Blanco-2023-by-Bogdan-@Chilldays-Plakov-48-of-56.jpg',
            des: "Riccardo Fabbriconi, better known as Blanco, is an Italian singer and song writer. He rose to prominence in 2021 with the hits La conzone nostra and Mi fia pazzire , which reached the top of the Italian Top singles,he can sing two music genre (Pop Rapcore).",
            Relatedevents:"let us rappe",
            genre:"Rap",
            type:'Pharmacy',
            // name: "Reborn Pharmacy Funabori",
            hours:'every day 10AM–6PM expect Sunday',
            // img:'https://www.collinsdictionary.com/images/full/pharmacy_390599908_1000.jpg',
            // des: "one of the best pharmacy in japan",
            gooUrl:"https://www.google.com/maps/place/Reborn+Pharmacy+Funabori/@35.6815435,139.8642397,17z/data=!3m1!4b1!4m5!3m4!1s0x601887b693f3355b:0xf31769be09ff582f!8m2!3d35.6815526!4d139.8664384",
            latitude:"35.68173520396127",
            longitude:"139.86699702581063",
            MoreInfo:"",
            practInfo:"they will also explain carefully and ask you various symptoms every time. It is early to get medicine",
        },
        {
            name: "Makaya McCraven  ",
            img:'https://images.squarespace-cdn.com/content/v1/6276246e55e1312c203064de/1655797776867-X2SIL16ZOGQ45AUMVWKC/Makaya+McCraven+by+Sulyiman+Stokes_72dpi_main.jpg',
            des: "Makaya McCraven (born October 19, 1983) is an American  jaz drummer and  bandleader.He started singing from his childhood and  Create a band at every school stage and  he participated in singing with many famous singers during his profissional career.",
            Relatedevents:"Jazz Night",
            genre: "Rap",
            type:'Hotel',
            // name: "The Peninsula Tokyo",
            hours:'24/7',
            // img:'https://i.pinimg.com/736x/30/c0/60/30c060b08a590ebe76d9eeddf0e00f68.jpg',
            // des: "The Peninsula name is synonymous with romance, glamour and style ",
            gooUrl:"https://www.google.com/maps/place/The+Peninsula+Tokyo/@35.6747591,139.7582817,17z/data=!3m2!4b1!5s0x60188bf029c8f2af:0x31ae3356be2fbdff!4m8!3m7!1s0x60188bf0283e8869:0xab933700bc3fc1e3!5m2!4m1!1i2!8m2!3d35.6747591!4d139.7604704",
            latitude:"35.674911620545785",
            longitude:"139.76039529814778",
            MoreInfo:"https://www.peninsula.com/ja/tokyo/5-star-luxury-hotel-ginza",
            practInfo:"Guests liked the large rooms, though some said they were dated & maintenance could be improved · Guests liked the large bathrooms, though some said cleanliness could be improved · Rooms had views & minibars",
        },
        {
            name: "Three for Play",
            img:'https://i0.wp.com/www.massimodedominicis.it/wp-content/uploads/2020/01/DSF0470.jpg?fit=1280%2C853&ssl=1',
            des: "Is a newborn, fresh, young trio, which started it�s music path in 2014. Among it�s targets, is the realization of music in line with modern jazz tendencies, but respectful of tradition. Its repertoire ranges from jazz masterpieces (W. Shorter, P. Metheny, T. Thielemans) to original compositions by the pianist Vittorio Solimene, who, only 17 years old, Vittorio bandmates Alessio Baldelli and  Dario Piccioni and also they were studied music.",
            Relatedevents:"Jazz Night",
            genre:"Jazz",
            type:'Hospital',
            // name: "Yoyogi Hospital",
            hours:'24/7',
            // img:'https://www.privateupgrades.com/_data/default-hotel_image/10/51282/the-peninsula-tokyo-1_1400x1400_auto.jpg',
            // des: "Yoyogi Hospital is a hospital which is connected to national university of jepan ",
            gooUrl:"https://www.google.com/maps/place/Yoyogi+Hospital/@35.6791571,139.6915915,15z/data=!3m1!5s0x60188cbf9a14a7a9:0x5627ac53521d5fc8!4m9!1m2!2m1!1sYoyogi+Hospital!3m5!1s0x60188cbfa380b763:0x197385cec188ca7b!8m2!3d35.68107!4d139.7095358!15sCg9Zb3lvZ2kgSG9zcGl0YWySARBnZW5lcmFsX2hvc3BpdGFs",
            latitude:"35.68166696012421",
            longitude:"139.7109463022393",
            MoreInfo:"http://www.tokyo-kinikai.com/yoyogi/index.html",
            practInfo:"I went to the corona test, but I had to wait about 50 minutes to see if there were not enough nurses. Since the patients are tested together, they were tested at the same time as the person who booked 30 minutes later. I had a terrible fever, so I wanted to have it examined smoothly at another hospital ",
        },
        {
            name: "Arctic Monkeys",
            img:'https://variety.com/wp-content/uploads/2022/10/Arctic-Monkeys-pc-Zackery-Michael-436763_L2-B_08-300-dpi-e1666378299982.jpg',
            des: "Arctic Monkeys are an English rock band formed in  Sheffield in 2002. The group consists of  Alex Turner (lead vocals, guitar, keyboards),  Jamie Cook (guitar, keyboards), Nick O�Malley (bass guitar, backing vocals), and  MattHelders (drums, backing vocals). Former band member Andy Nicholson Andy Nicholson (bass guitar, backing vocals) left the band in 2006 shortly after their debut album was released.Arctic Monkeys were heralded as one of the first bands to come to public attention via the  Internet",
            Relatedevents:  "Moonlight first Night",
            genre:"Rock",
            type:'Hospital',
            // name: "St. Luke's International Hospital",
            hours:'24/7',
            // img:'https://medilocus.luke.ac.jp/healthy-support/member-support/images/img_cooperation.jpg',
            // des: "St. Luke's International Hospital (聖路加国際病院) is a general and teaching hospital located in the Tsukiji district of Chūō, Tokyo, Japan. First opened in 1902, as a medical mission facility by the Episcopal Church in the United States,[1] the hospital is now one of central Tokyo's largest and most comprehensive medical care facilities. It is operated as an adjunct to St. Luke's International University, an affiliated university of the Nippon Sei Ko Kai (Anglican Episcopal Church in Japan)",
            gooUrl:"https://www.google.com/maps/place/St.+Luke's+International+Hospital/@35.6674998,139.7742979,17z/data=!4m12!1m6!3m5!1s0x1526ba16fb4380d1:0x76f25016ae90d48!2sSt.+Luke's+International+Hospital!8m2!3d35.6674998!4d139.7764866!3m4!1s0x1526ba16fb4380d1:0x76f25016ae90d48!8m2!3d35.6674998!4d139.7764866",
            latitude:"35.66770897018161",
            longitude:"139.7768835644487",
            MoreInfo:"http://hospital.luke.ac.jp/",
            practInfo:"I had surgery here and was hospitalized for 1 week here and the experience was top level. The nurses were super helpful and responsive, the food was great, all rooms are private with its own toilet (even the 0 yen ones), and it's very quiet and peaceful at night. Every document is available in English, and the staff tried their best to communicate in English even though I could speak Japanese. My doctor spoke fluent English, useful for more complicated medical terms.",
        },
        {
            name: "Marracash",
            img:'https://media.gqitalia.it/photos/5dc1715f8ab84500087a3508/master/pass/MARRACASH_foto%20di%20Alessandro%20Treves_2%20b.jpg',
            des: "Fabio Bartolo Rizzo, better known by his stage name Marracash, he is an Italian rapper ,Starting his career in the rap group Dogo Gang,he debuted as a solo artist rising in fame in the 2010s releasing.",
            genre:"Rap",
            Relatedevents: "let us rappe",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        },  
        {
            name: "Michael Bublè",
            img:'https://pagesix.com/wp-content/uploads/sites/3/2018/11/110818-michael-buble-feature.jpg?quality=75&strip=all',
            des: "Michael Steven Bubl� OC OBC is a Canadian singer. A four-time Grammy Award winner, he is often credited for helping to renew public interest and appreciation for traditional pop standards and the Great American Songbook.",
            genre: "Pop",
            Relatedevents: "Endtheweekend",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        }, 
        {
            name: "George Ezra",
            img:'https://media.gq-magazine.co.uk/photos/5d5684b636fbf10009a3e6d6/4:3/w_1704,h_1278,c_limit/20190813-George-Ezra-01.jpg',
            des: "George Ezra Barnett is an English singer-songwriter and guitarist. He can sing more than one music genre (Folk rock, Folk hop,Soul,Blues) and plays guitar",
            genre: "Rock", 
            Relatedevents:  "Endtheweekend",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        }, 
        {
            name: " Red Hot Chili Peppers",
            img:'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F02%2F04%2FRed-Hot-Chili-Peppers5.jpg',
            des: "The Red Hot Chili Peppers (sometimes simply abbreviated to RHCP or Red Hot) are an American Rock band , formed in  Los Angeles in 1983 and composed of  Anthony Kiedis (vocals),  Fela (bass, backing vocals),  John Frusciante (guitar, backing ) and  Chad Smith (drums, percussion).In their career they have successfully mixed various genres,  including above all  funk ,  hip hop ,  hard rock ,  punk rock ,  psychedelic rock and later   alternative and  pop rock , coming to forge a characteristic sound that in live performances is characterized by often improvisational .They have sold over 100 million records worldwide  and hold the record for the most No.1 singles on  Billboard magazine's  Alternative Airplay chart .  In 2012 they were inducted into the Rock and Roll Hall of fame,while as of 2022 they are a  Hollywood Walk of fame.",
            genre: "Rock",
            Relatedevents:  "Start dance",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        }, 
        {
            name: "Giorgia",
            img:'https://media-assets.vanityfair.it/photos/614d9cf5a3d2da8fefd43733/3:2/w_1188,h_792,c_limit/giorgia-GettyImages-portrait.jpg',
            des: "Giorgia Todrani, best known as Giorgia is an Italian singer, songwriter, musician, record producer, and radio host. Known for her soulful voice, aided by a wide vocal range, high belting register and great vocal abilities. Her vocal range spans 4 octaves. One of the most famous Italian singers, she has released ten studio albums all enjoying commercial success. Giorgia has become fairly well known throughout Europe as an ambassador for Italian pop music, and has also achieved moderate success in Canada and Latin America.",
            genre: "Pop",
            Relatedevents:  "Summertime Fun",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        }, 
        {
            name: "Gazzelle",
            img:'https://c8.alamy.com/compit/2jbfj0r/5-giugno-2022-torino-torino-italia-il-cantautore-romano-flavio-bruno-pardini-noto-come-gazzelle-sul-palco-della-pala-alpitour-di-torino-credit-image-bruno-brizzi-pacific-press-via-zuma-press-wire-2jbfj0r.jpg',
            des: "Gazzelle,pseudonym of Flavio Bruno Pardini, is an Italian singer-songwriter",
            genre: "Pop",
            Relatedevents: "Endtheweekend",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        }, 
        {
            name: "Silvia Bolognesi",
            img:'https://www.silviabolognesimusic.com/uploads/4/3/0/2/4302776/07-121403-22-46_1.jpg',
            des: "Silvia Bolognesi is an Italian double bass player and  record producer.Since 2018 she has been part of the Art Ensemble of Chicaqo 50th Anniversary.She sings jazz genre and plays contrabass",
            genre:"Jazz",
            Relatedevents:  "Jazz Night",
            type:'Subway system',
            // name: "Tokyo Metro Co., Ltd.",
            hours:'every day 5AM–12AM ',
            // img:'https://yt3.ggpht.com/ytc/AKedOLQcpxjZPBnGOaWJLONNt2jK_gg4p1Nm_KAST4ry=s900-c-k-c0x00ffffff-no-rj',
            // des: "The Tokyo Metro (東京メトロ, Tōkyō Metoro) is a major rapid transit system in Tokyo, Japan, operated by the Tokyo Metro Co.Tokyo Metro had an average daily ridership of 8.84 million passengers,",
            gooUrl:"https://www.google.com/maps/place/Ginza+Station/@35.6717266,139.7294211,14z/data=!4m9!1m2!2m1!1ssubway+system!3m5!1s0x60188be5c2a360a1:0xa6dcab0cb7a45f2e!8m2!3d35.6717279!4d139.7644425!15sCg1zdWJ3YXkgc3lzdGVtkgEOc3Vid2F5X3N0YXRpb24",
            latitude:"35.672702721672685",
            longitude:"139.7682166064735",
            MoreInfo:"http://www.tokyometro.jp/",
            practInfo:"The famous building Seiko and the brand new and remodeling area are visible here. It's also a city centre, with shops that were founded over 100 years ago, because Ginza is known for being a trendy hotspot.",
        },      
    ]

    const artist0 = await models.Services.create(servicesList[0])
    const artist1 = await models.Services.create(servicesList[1])
    const artist2 = await models.Services.create(servicesList[2])
    const artist3 = await models.Services.create(servicesList[3])
    const  artist4 = await models.Services.create(servicesList[4])
    const artist5 = await models.Services.create(servicesList[5])
    const  artist6 = await models.Services.create(servicesList[6])
    const artist7 = await models.Services.create(servicesList[7])
    const  artist8 = await models.Services.create(servicesList[8])
    const  artist9 = await models.Services.create(servicesList[9])
    const  artist10 = await models.Services.create(servicesList[10])
    const  artist11= await models.Services.create(servicesList[11])
    const  artist12= await models.Services.create(servicesList[12])
    const  artist13= await models.Services.create(servicesList[13])
    const  artist14= await models.Services.create(servicesList[14])

    // const itineraiesList = [
    //     {
    //         title: "One day trip",
    //         des: "This plan is for people who want to see the sights in a day.",
    //     },
    //     {
    //         title: "Three days trip",
    //         des: "This plan is for people who want to see the sights in three days.",
    //     },
    //     {
    //         title: "One week trip",
    //         des: "This plan is for people who want to see the sights in one week.",
    //     },
    // ]

    // const Itinerary0 = await models.Itinerary.create(itineraiesList[0])
    // const Itinerary1 = await models.Itinerary.create(itineraiesList[1])
    // const Itinerary2 = await models.Itinerary.create(itineraiesList[2])
//the event places
    const locationList = [
        {
            name:" Piazza Duomo",
            des: "Piazza del Duomo (Cathedral Square) is the main piazza (city square) of Milan, Italy. It is named after, and dominated by,  Milan Cathedral (the Duomo). The piazza marks the center of the city, both in a geographic sense and because of its importance from an artistic, cultural, and social point of view. Rectangular in shape, with an overall area of 17,000 m2 (about 183,000 sq ft), the piazza includes some of the most important buildings of Milan (and Italy in general), as well some of the most prestigious commercial activities, and it is by far the foremost tourist attraction of the city.While the piazza was originally created in the 14th century and has been gradually developing ever since (along with the Duomo, which took about six centuries to complete), its overall plan, in its current form, is largely due to architect  Giuseppe Mengoni, and dates to the second half of the 19th century. The monumental buildings that mark its sides, with the main exception of the Duomo itself and the  Royal Place, were introduced by Mengoni's design; the most notable of Mengoni's addition to the piazza is the   Vittorio Emnuele II  arcade.The piazza hosts during the year different types of  events  most of them are music concerts.",
            img: 'https://www.yesmilano.it/sites/default/files/styles/testata_full/public/event_top_event/copertina/6299/2092/Copertina_RadioItaliaLive_1280x560.jpg?itok=eDfodLYx',
            practInfo:"The closest access point is Koenji Station on the JR Chuo Line. Shin-Koenji Station on the Tokyo Metro Marunouchi Line is a 15-minute walk from the main attractions.",
            MoreInfo:"https://www.gotokyo.org/en/destinations/western-tokyo/koenji/index.html",
            gooUrl:"https://goo.gl/maps/hxPZ169HdYJta1bj6",
            longitude:"139.64059622450566",
            latitude:"35.711359303092834",
            // ItineraryId:Itinerary0.id
        },
        {
            name: "Milanosport velodromo vigorelli",
            des:  "Velodromo Vigorelli (from 2001 officially Velodromo Maspes-Vigorelli) is a 397-metre (434 yd; 1,302 ft) semi-covered  velodrome in Milan,Italy. It is currently used mostly for American Fottball events, in fact, surrounded by the track, there is a standard size football field in synthetic turf. In 2013 it was the home of the  IFAF European Football Championship. It is currently the home stadium for the football teams  Seamen Milano and  Rhino Milano.The stadium also hostes music events.",
            img:  'https://milano-topnews.it/wp-content/uploads/2021/10/37C44F00-127E-4D62-9989-486300FAC3F5.jpeg',
            practInfo:"The closest access point is Monzen-nakacho Station, accessible via the Tokyo Metro Tozai Line and the Toei Oedo Line.",
            MoreInfo:"https://www.gotokyo.org/en/destinations/eastern-tokyo/fukagawa/index.html",
            gooUrl:"https://goo.gl/maps/mDGHGmyDtd1E86D86",
            longitude:"139.7978020605352",
            latitude:"35.67631511240057",
            // ItineraryId:Itinerary0.id
        },
        {
            name: "Mediolanum Forum",
            des: "Mediolanum Forum (originally the Forum di Assago, formerly the FilaForum and DatchForum) is an  indoor sports arena that is located in  Assago, a small town 3 km outside Milan, Italy. The arena has a seating capacity of 12,700 and is primarily used for basketball,  ice hockey, tennis and live concerts.",
            img: 'https://d1bvpoagx8hqbg.cloudfront.net/originals/an-arena-3cd87cd42253594b6cacbdc70ea0cbe1.jpg',
            practInfo:"Asakusa Station is on Tokyo Metro's Ginza Line, Toei Asakusa Line and Tobu Skytree Line. The boarding pier for the waterbus is just a three-minute walk from Asakusa Station.",
            MoreInfo:"https://www.gotokyo.org/en/destinations/eastern-tokyo/asakusa/index.html",
            gooUrl:"https://goo.gl/maps/FpyVkrRhuqQHPXLY9",
            longitude:"139.79665097668646",
            latitude:"35.714774527761996",
            // ItineraryId:Itinerary0.id
        },
        {
            name: "Aeroporto Milano Bresso",
            des: "Giampiero Clerici airport is a civil airport located in Bresso,on the border with the municipalities of Cinisello Balsamo and Sesto San Giovann,in an area forming part of the North Milan Park.The airport hostes music events",
            img:  'https://www.ilgazzettinometropolitano.it/wordpress/wp-content/uploads/2022/09/306584239_1488303111675654_5365356283589709777_n.jpg',
            practInfo:"Nearest station is Tanashi Station on Seibu Shinjuku Lin",
            MoreInfo:"https://www.gotokyo.org/en/destinations/outlying-area/nishi-tokyo/index.html",
            gooUrl:"https://goo.gl/maps/cyQaxPBWjYu9d71A8",
            longitude:"139.52187393005948",
            latitude:"35.78862061898454",
            // ItineraryId:Itinerary1.id
        },
        {
            name: "San Siro",
            des: "Stadio Giuseppe Meazza,commonly known as San Siro,is a football stadium in the San Siro district of Milan, Italy, which is the home of A.C. Milan and Inter Milan. It has a seating capacity of 80,018, making it one of the largest stadiums in Europe, and the largest in Italy.There are some events and concerts hosts in the stadium due to its considerable capacity.",
            img: 'https://assets-eu-01.kc-usercontent.com/1293c890-579f-01b7-8480-902cca7de55e/409ad99e-726a-4dfb-8d58-48762e94f3a5/Landing-SanSiro.png?w=2048&auto=format',
            practInfo:"Nakameguro Station is on the Tokyu-Toyoko Line and Tokyo Metro's Hibiya Line. You can walk to the Daikanyama area in around 10 minutes from here.",
            MoreInfo:"https://www.gotokyo.org/en/destinations/southern-tokyo/nakameguro/index.html",
            gooUrl:"https://goo.gl/maps/tNVmgn5VV7yiz3nw9",
            longitude:" 139.70791363375443",
            latitude:"35.635783316755806",
            // ItineraryId:Itinerary1.id
        },
        
        
    ]
    const location0 = await models.Location.create(locationList[0])
    const location1 = await models.Location.create(locationList[1])
    const location2 = await models.Location.create(locationList[2])
    const location3 = await models.Location.create(locationList[3])
    const location4 = await models.Location.create(locationList[4])
    // const location5 = await models.Location.create(locationList[5])
    // const location6 = await models.Location.create(locationList[6])
    // const location7 = await models.Location.create(locationList[7])
    // const location8 = await models.Location.create(locationList[8])
    // const location9 = await models.Location.create(locationList[9])

    // // const location10 = await models.Location.create(locationList[10])
    // const location11 = await models.Location.create(locationList[11])
    // const location12 = await models.Location.create(locationList[12])
    // const location13 = await models.Location.create(locationList[13])
    // const location14 = await models.Location.create(locationList[14])
    // const location15 = await models.Location.create(locationList[15])
    // const location16 = await models.Location.create(locationList[16])
    // const location17 = await models.Location.create(locationList[17])
    // const location18 = await models.Location.create(locationList[18])
    // const location19 = await models.Location.create(locationList[19])
// the concert
    const eventlist = [
        {
            // id:"0",
            title: "Start dance",
            des: "The opening of the festival with a wonderful concert, during which songs of different genres are presented so it will be mix of singers present different genres.The concert will take place in piazza Duomo.",
            img: "https://i.pinimg.com/originals/cf/85/42/cf85420acf5e5b8cf45d14422cde74bb.jpg ",           
            Participants:"Red Hot Chili Peppers, Sfera Ebbasta",
            practInfo: "2023-7-14", 
            moreInfo:"https://www.gotokyo.org/en/spot/ev039/index.html",
            season:"summer",  
            locationId: location0.id,
            serviceId: artist3.id,
            // artistlist: [ artist3.id, artist12.id]
            
        },
        {
            // id:"1",
            title: "Moonlight first Night",
            des: "Moonlight first Night  will be the concert  of  the first night of the festival which will be presentd by 3 singers present rock and pop songs. The concert will take place in piazza Duomo.",
            img: "https://cdn.romania-insider.com/sites/default/files/styles/article_large_image/public/2023-02/rocanotherworld_2022_-_photo_organizers.jpg",  
            Participants:"Arctic Monkeys, Tiziano Ferro, The Weeknd",
            
            practInfo: "2023-7-14",
            moreInfo:"https://www.gotokyo.org/en/spot/ev093/index.html",
            season:"summer",  
            locationId: location1.id,
            serviceId: artist0.id
        },
        {
            // id:"2",
            title:  "Summertime Fun",
            des:  "Summertime fun is the first concert on the second day of the Milano Grande Summer music festival, which will be presented by a rock band and another rock singer. The concert will take place in Mediolanum Forum.",
            img: "https://www.gotokyo.org/en/spot/ev099/images/main.jpg",
            Participants:"Måneskin, Giorgia",  
            practInfo: "2022-8-17",
            moreInfo:"https://www.gotokyo.org/en/spot/ev099/index.html",
            season:"summer",  
            locationId: location2.id,
            serviceId: artist1.id
        },
        {
            // id:"3",
            title:  "Jazz Night",
            des:  "Jazz Night will be the concert on the second night of the festival which will be presented by a jazz band and other two singers who also present jazz songs. The concert will take place in San Siro stadium.",
            Participants:"Three for Play, Silvia Bolognesi, Makaya McCraven",
            img: "https://www.concertarchives.org/image_uploads/photo/image/462757/large_image.jpg",
            practInfo: "2022-7-9",
            moreInfo:"https://www.gotokyo.org/en/spot/ev096/index.html",
            season:"summer",  
            locationId: location3.id,
            serviceId: artist2.id
        },
        {
            // id:"4",
            title:  "Endtheweekend",
            des:  "Have hop will be a concert presented more than one music genre .It will be in San Siro stadium",
            Participants:"George Ezra, Michael Bublè, Gazzelle",
            img:"https://www.concertarchives.org/image_uploads/photo/image/499119/large_image.jpg",
            practInfo: "2022-9-13",
            moreInfo:"https://www.gotokyo.org/en/story/guide/september/index.html",
            season:"summer",  
            locationId: location4.id,
            serviceId: artist3.id
        },
        {
            // id:"5",
            title:  "let us rappe",
            des:  "In this concert, we will enjoy the most wonderful Italian rappers.The concert will take place in Milanosport velodromo vigorelli",
            Participants:"Blanco, Marracash, Lazza",
            img: "https://s1.ticketm.net/dam/a/729/c886aac1-6740-4f40-a8fa-86f70d168729_1596801_TABLET_LANDSCAPE_LARGE_16_9.jpg",
            practInfo: "2021-12-18-2022-1-16",
            moreInfo:"https://www.gotokyo.org/en/spot/ev266/index.html",
            season:"winter",  
            locationId: location4.id,
            serviceId: artist4.id
        },
        {
            // id:"6",
            title:  "Afternoon concert",
            des:  "An afternoon cocert with Red Hot Chili Peppers.It will be in Aeroporto Milano Bresso",
            Participants:"Red Hot Chili Peppers",
            img:"https://www.ilgazzettinometropolitano.it/wordpress/wp-content/uploads/2022/09/306584239_1488303111675654_5365356283589709777_n.jpg",
            practInfo: "2021-3-29 - 2022-12-27",
            moreInfo:"https://www.gotokyo.org/en/spot/ev263/index.html",
            season:"winter",  
            locationId: location3.id,
            serviceId: artist5.id
        },
        {
            // id:"7",
            title:  "Monkeys concert",
            des:  "This concert completely will be presented by the rock band Arctic Monkeys. The concert will take place in Aeroporto Milano Bresso",
            Participants:"Arctic Monkeys",
            img:"https://www.nme.com/wp-content/uploads/2020/12/ARCTICMONKEYS_9492_JF.jpg",
            practInfo: "2020-12-31 - 2021-1-1",
            moreInfo:"https://www.gotokyo.org/en/spot/ev124/index.html",
            season:"winter",  
            locationId: location2.id,
            serviceId: artist6.id
        },
        {
            // id:"8",
            title:  "Start of the last",
            des:  "The last day's events will start with an amazing concert by many singers who will present different genres. The last day event will take place in piazza Duomo",
            Participants:"Blanco, Michael Bublè, George Ezra, Makaya McCraven",
            img:"https://img-prod.tgcom24.mediaset.it/images/2022/06/29/073847709-63f2839a-a5ae-45ff-b50b-12bf584db09e.jpg",
            practInfo: "12-15-16, 2019 and 1-15-16, 2020.",
            moreInfo:"https://www.gotokyo.org/en/spot/ev114/index.html",
            season:"winter",  
            locationId: location1.id,
            serviceId: artist7.id
            
        },
        {
            // id:"9",
            title:  "The grand final",
            des:  "The last concert of the Milano Grande Summer music festival will be A continuous singing show  for five hours in piazza Duomo, with an hour break after the first two hours",
            Participants:"Sfera Ebbasta, Tiziano Ferro, Måneskin, Silvia Bolognesi",        
            img:"https://www.milanotoday.it/~media/horizontal-hi/16666872847300/filarmonica-scala-concerto-duomo-2022-foto-gianlucapla-ig-2.jpeg",
            practInfo: "2020-12-31 - 2021-1-1",
            moreInfo:"https://www.gotokyo.org/en/spot/ev107/index.html",
            season:"winter",  
            locationId: location0.id,
            serviceId: artist8.id
        },
    ]

    // await models.Homepage.create(homepage)
    await models.Event.bulkCreate(eventlist)
    // await models.Services.bulkCreate(servicesList)
}