export const JobsList = [
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fcopa-health%2Fcapa.png?alt=media&token=4a934357-0757-4edd-ae73-a4c0b0562cae",
    title: "Copa Health Care",
    job: () =>
      import("./copa-health").then((m) => ({ default: m.CopaHealth })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fitau%2Fcapa.png?alt=media&token=9f774040-b8f3-4114-a27c-f00a9bc8841a",
    title: "Parceiro Itaú",
    job: () =>
      import("./itau-parceiro").then((m) => ({ default: m.ParceiroItau })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-spring23%2Fcapa.png?alt=media&token=18b8f8ab-aa9f-47d3-be3a-72567fb95268",
    title: "Spring Starbucks 2023",
    job: () =>
      import("./stbx-spring23").then((m) => ({ default: m.StarbucksSpring23 })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-natal23%2Fcapa.png?alt=media&token=c6514583-0949-403a-93d6-6f3b9f2525dc",
    title: "Natal Starbucks 2023",
    job: () =>
      import("./stbx-natal23").then((m) => ({ default: m.StarbucksNatal23 })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fangostura-ig%2Fcapa.png?alt=media&token=74d4ec54-0002-4432-84d7-413440a17ce3",
    title: "Angostura - Instagram",
    job: () =>
      import("./angostura-ig").then((m) => ({ default: m.AngosturaIG })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-winter23%2Fcapa.png?alt=media&token=f0b2547b-b9bc-471f-b42d-83230eeffa3f",
    title: "Winter Starbucks 2023",
    job: () =>
      import("./stbx-winter23").then((m) => ({ default: m.StarbucksWinter23 })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-pride%2Fcapa_Prancheta%201.png?alt=media&token=a59b7cc0-d8fd-4a12-8436-a83359e7fde5",
    title: "Pride Starbucks 2023",
    job: () =>
      import("./stbx-pride").then((m) => ({ default: m.StarbucksPride })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-halloween%2Fcapa.png?alt=media&token=cc300bee-bee4-422d-b481-83ea90f06f00",
    title: "Halloween Starbucks 2023",
    job: () =>
      import("./stbx-halloween").then((m) => ({
        default: m.StarbucksHalloween,
      })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-sweet-rose%2Fcapa.png?alt=media&token=d8ce3703-37d0-4b40-a2aa-f736dd8d573c",
    title: "Lançamento Casal Garcia Sweet Rosé",
    job: () =>
      import("./casal-sweetrose").then((m) => ({ default: m.SweetRose })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-summer%2F1-Capa.png?alt=media&token=7aa10336-645d-4737-8d5a-6227f0158c98&_gl=1*zuf6mk*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2NDI5Ni4wLjAuMA..",
    title: "Campanha Summer",
    job: () =>
      import("./stbx-summer").then((m) => ({ default: m.StarbucksSummer })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-omnichannel%2F1-Capa.jpg?alt=media&token=8b0fa5b3-33d3-4f67-94b4-3ff5c267d382&_gl=1*1mrll8w*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2Mzg5Mi4wLjAuMA..",
    title: "OMNICHANNEL",
    job: () =>
      import("./stbx-Omnichannel").then((m) => ({
        default: m.StarbucksOmnichannel,
      })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Ftgi-double%2F1-Capa.png?alt=media&token=1f0d0f96-d759-4d38-9473-e8dd051ce107&_gl=1*1rbtzrw*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2MDQ4MS4wLjAuMA..",
    title: "Make It a double",
    job: () =>
      import("./tgi-double").then((m) => ({ default: m.TGIDouble })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-passaport%2F1-capa.jpg?alt=media&token=bca055f1-b326-4552-a036-0c6f941a5425&_gl=1*1jvauu1*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2MzI2Ni4wLjAuMA..",
    title: "PASSAPORTE DO CAFÉ",
    job: () =>
      import("./stbx-passaport").then((m) => ({
        default: m.StarbucksPassaport,
      })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-estilo%2F1-Capa.jpg?alt=media&token=26984602-b613-41e9-bc28-5cfc763ce371&_gl=1*yxse62*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2MjkwOC4wLjAuMA..",
    title: "Estilo Starbucks",
    job: () =>
      import("./stbx-estilo").then((m) => ({ default: m.StarbucksEstilo })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fwildside%2Fcapa.png?alt=media&token=129536ee-6f47-448e-a9ba-2e2b41e90033",
    title: "Wild Side",
    job: () =>
      import("./wildside").then((m) => ({ default: m.Wildside })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fstbx-fall%2F1-capa.jpg?alt=media&token=7f20244b-5b8c-45cc-b90d-78a1a157865f&_gl=1*971ljy*_ga*MTc0NTgyMDIzOS4xNjc2NjY2OTcw*_ga_CW55HF8NVT*MTY4NjI1OTg3Mi4xLjEuMTY4NjI2MjI1OC4wLjAuMA..",
    title: "Campanha Fall",
    job: () =>
      import("./stbx-fall").then((m) => ({ default: m.StarbucksFall })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fsbux-natal22%2Fcapa_Prancheta%201.png?alt=media&token=198ab52a-34a5-448a-8f9a-c81198f8bde9",
    title: "Natal Starbucks 2022",
    job: () =>
      import("./stbx-natal22").then((m) => ({ default: m.StarbucksNatal22 })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fsbux-panetone22%2Fcapa.png?alt=media&token=3e567f83-a7ab-4bcc-bf65-6c72895201d4",
    title: "Panettones Starbucks 2022",
    job: () =>
      import("./stbx-panetone22").then((m) => ({
        default: m.StarbucksPanetone22,
      })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FTGI-frijitas%2Fcapa_Prancheta%201.png?alt=media&token=26fee46e-e0aa-4c11-8130-181d0fb58678",
    title: "TGI Fridays Frijitas",
    job: () =>
      import("./tgi-frijitas").then((m) => ({ default: m.TGIFrijitas })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fsbux-nuts%2Fcapa_Prancheta%201.png?alt=media&token=adc61ef8-82ab-4fe6-944c-04396dbe7398",
    title: "Starbucks Drageados",
    job: () =>
      import("./stbx-nuts").then((m) => ({ default: m.StarbucksNuts })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2FCG-polarbox%2Ftumb.png?alt=media&token=82249575-1751-428b-8d74-cd8d64493fab",
    title: "Casal Garcia e Polarbox",
    job: () =>
      import("./casal-polarbox").then((m) => ({ default: m.Polarbox })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fsbux-caixa_cookies%2Fcapa_Prancheta%201.png?alt=media&token=446c8afb-ce98-4b1b-92a5-f9549c0cb7d1",
    title: "Starbucks Caixa de Cookies",
    job: () =>
      import("./stbx-cookies").then((m) => ({ default: m.StarbucksCookies })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/08/tumb.png",
    title: "Nomad",
    job: () => import("./Nomad").then((m) => ({ default: m.Nomad })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/03/port-tgi_tumb.png",
    title: "TGI Fridays",
    job: () => import("./tgi").then((m) => ({ default: m.TGIFridays })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/03/01_tumb.jpeg",
    title: "Angostura",
    job: () =>
      import("./angostura").then((m) => ({ default: m.Angostura })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/03/01-tumb.png",
    title: "Marodyne LiV",
    job: () =>
      import("./marodine").then((m) => ({ default: m.Marodine })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/01/tumb-1.png",
    title: "Drinks secretos Vodka Belvedere",
    job: () =>
      import("./belvedere").then((m) => ({ default: m.Belvedere })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2022/01/tumb.png",
    title: "Yelloween da Veuve Clicquot",
    job: () =>
      import("./veuve-yelloween").then((m) => ({ default: m.Yelloween })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb-2.png",
    title: "Concurso Cultural Dia da Alegria/Casal Garcia",
    job: () =>
      import("./casalGarciaJBL").then((m) => ({ default: m.JBL })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb-1.png",
    title: "Maille Dia dos Pais",
    job: () =>
      import("./maille-pais").then((m) => ({ default: m.MaillePai })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/08/tumb.png",
    title: "Banila Co/Casal Garcia (Co-Branding)",
    job: () =>
      import("./casal-banila").then((m) => ({ default: m.Banila })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/09/cover.png",
    title: "Starbucks Winter",
    job: () =>
      import("./stbx-winter").then((m) => ({ default: m.StarbucksWinter })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/06/kalassi-veggie.png",
    title: "Kalassi Veggie",
    job: () =>
      import("./kalassi-veggie").then((m) => ({ default: m.KalassiVeggie })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/06/azzurra.png",
    title: "Azzurra Gin",
    job: () => import("./azzurra").then((m) => ({ default: m.Azzurra })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/05/kalassi.png",
    title: "First Bite Kalassi",
    job: () =>
      import("./kalassi-firstbite").then((m) => ({
        default: m.KalassiFirtsBite,
      })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/05/maille.png",
    title: "Dia das Mães com Maille",
    job: () =>
      import("./maille-mae").then((m) => ({ default: m.MailleMaes })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2021/03/cover.png",
    title: "Concurso Cultural Casal Garcia",
    job: () =>
      import("./casal-sorteio").then((m) => ({ default: m.Sorteio })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/11/capa.png",
    title: "Starbucks Natal 2020",
    job: () =>
      import("./stbx-natal2020").then((m) => ({ default: m.Natal2020 })),
  },
  {
    thumbnail: "https://portfolio.duee.com.br/wp-content/uploads/2020/11/3.png",
    title: "Made in Brazil 30 anos",
    job: () =>
      import("./made-30").then((m) => ({ default: m.Made30anos })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/10/kalassi.png",
    title: "Kalassi",
    job: () => import("./kalassi").then((m) => ({ default: m.Kalassi })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/10/capastarbucks.png",
    title: "Tapume Starbucks",
    job: () =>
      import("./stbx-tapume").then((m) => ({ default: m.StarbucksTapume })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/06/capa.jpg",
    title: "Maille",
    job: () => import("./maille").then((m) => ({ default: m.Maille })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/06/post-blue-moon-1_04.png",
    title: "Blue Moon",
    job: () =>
      import("./bm-lanc2020").then((m) => ({ default: m.BML2020 })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/03/Untitled-2.png",
    title: "Inovini",
    job: () => import("./inovini").then((m) => ({ default: m.Inovini })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/06/Giglio_linkdln_PT.png",
    title: "Giglio Neto",
    job: () => import("./giglio").then((m) => ({ default: m.Giglio })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/01/capa_img_site_starbucks.jpg",
    title: "Panetone Starbucks",
    job: () =>
      import("./stbx-panetone").then((m) => ({ default: m.Panetone })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/01/saisdsjd.png",
    title: "Black Friday Made",
    job: () => import("./made-bf").then((m) => ({ default: m.BFMade })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/01/capinha-casal.png",
    title: "Geladeiras Casal Garcia",
    job: () =>
      import("./casal-geladeiras").then((m) => ({ default: m.Geladeiras })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2020/01/oito-capinha.png",
    title: "Desenvolvimento Site Oito",
    job: () => import("./oito").then((m) => ({ default: m.DevOito })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-4.png",
    title: "Vitrine Trapiche",
    job: () =>
      import("./trapiche").then((m) => ({ default: m.Trapiche })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-3.png",
    title: "Vai de Vedett",
    job: () =>
      import("./vedett-vai").then((m) => ({ default: m.VaiVedett })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.jpg",
    title: "Starbucks dia dos namorados",
    job: () =>
      import("./stbx-namorados").then((m) => ({ default: m.Namorados })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner-1.png",
    title: "Made no lolla",
    job: () =>
      import("./made-lolla").then((m) => ({ default: m.MadeLolla })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/1-banner.png",
    title: "Lançamento Blue moon",
    job: () => import("./bm-lanc").then((m) => ({ default: m.BMLanc })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.png",
    title: "Faxe + Dinner in the sky",
    job: () =>
      import("./faxe-dinner").then((m) => ({ default: m.Dinner })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/06/Banner.jpg",
    title: "Ubus Digital",
    job: () => import("./ubus").then((m) => ({ default: m.Ubus })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/03/Screen-Shot-2019-03-01-at-19.01.04.png",
    title: "Casal Garcia - campanha de mídia",
    job: () =>
      import("./casal-midia").then((m) => ({ default: m.CasalMidia })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/03/Untitled-1.png",
    title: "Made in brazil - social mídia",
    job: () => import("./made-midia").then((m) => ({ default: m.MadeM })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/03/QUADRO-FAXE-pack-art-1.png",
    title: "Faxe - kit pdv",
    job: () => import("./faxe-pdv").then((m) => ({ default: m.FaxePdv })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/03/KV-CHANDON-MOOD_V2.png",
    title: "Chandon - realidade aumentada",
    job: () => import("./chandon").then((m) => ({ default: m.Chandon })),
  },
  {
    thumbnail:
      "https://portfolio.duee.com.br/wp-content/uploads/2019/03/post-starbucks-butter-800x800-x2_02.png",
    title: "Starbucks - butter frappuccino",
    job: () =>
      import("./stbx-butter").then((m) => ({ default: m.Butter })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffaxe-happy-hour.png?alt=media&token=beddfd97-9265-4310-99d1-8f0cf62bdb74",
    title: "Faxe - making of happy hour viking",
    job: () =>
      import("./faxe-makingof").then((m) => ({ default: m.Makingof })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcasal-socialmedia.png?alt=media&token=7de92511-6d57-42ce-83f6-d18ff658f434",
    title: "Casal Garcia - Social midia",
    job: () => import("./casal").then((m) => ({ default: m.Casal })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffaxe-socialmedia.png?alt=media&token=6e70ffd7-c3aa-421d-b54b-8ff5bc1c1b87",
    title: "Faxe - social midia",
    job: "https://portfolio.duee.com.br/project/faxe/",
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvedett-socialmedia.png?alt=media&token=e7aa5c5e-70bc-4c3f-8042-764f49beb82d",
    title: "Vedett - social midia",
    job: () =>
      import("./vedett-midia").then((m) => ({ default: m.VedettMidia })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fstarbucks-draft.png?alt=media&token=d64f6adc-75a9-4388-a020-ca02f675cdfb",
    title: "Starbucks draft",
    job: () => import("./stbx-draft").then((m) => ({ default: m.Draft })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fsuite49.jpg?alt=media&token=246cb032-870f-4121-b5d6-c93a0ddd4ca9",
    title: "Suite 49 travels - social midia",
    job: () => import("./suite49").then((m) => ({ default: m.Suite })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ftrova.jpg?alt=media&token=56e5c5cc-cd67-4cd3-80b8-9d63bc0ac9bb",
    title: "Trova brasil - site",
    job: () => import("./trova").then((m) => ({ default: m.Trova })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvia-estagiario.png?alt=media&token=2ec30ae1-b387-40c8-8835-b3526b6a8e96",
    title: "Respeira o estágiario - instituto Via de Acesso",
    job: () =>
      import("./via-estagiario").then((m) => ({ default: m.Estagiario })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fstarbucks-roadshow.jpeg?alt=media&token=f599fced-7c45-4eae-982a-2c3e2fc4a933",
    title: "Starbucks roadshow winter",
    job: () =>
      import("./stbx-roadshow").then((m) => ({ default: m.Roadshow })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvia-acesso.jpg?alt=media&token=d6ae5c20-29cd-4594-a5a1-a1ce91e93777",
    title: "Plataforma digital - instituto Via de Acesso",
    job: () =>
      import("./via-plataforma").then((m) => ({ default: m.Plataforma })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcodorniu-site.jpg?alt=media&token=cde896e3-9cd0-45a5-b021-3b2d0b07ece4",
    title: "Site Codorníu",
    job: () =>
      import("./codorniu-site").then((m) => ({ default: m.CodorniuSite })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fstarbucks-jogo-estrelas.jpg?alt=media&token=11cfd663-1e9b-40a0-867d-2d5bd6729640",
    title: "Starbucks - Jogo das estrelas 2017",
    job: () => import("./stbx-jogo").then((m) => ({ default: m.Jogo })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvedett-urso.jpg?alt=media&token=5909a7c8-5442-4a06-b0db-8eee2f4b825d",
    title: "Vedett - Vedett on the road",
    job: () => import("./vedett-urso").then((m) => ({ default: m.Urso })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcodorniu-web-anatomy.jpg?alt=media&token=6f720ae2-a268-45c9-988b-bd549d2c0b5d",
    title: "Codorníu - web serie drink`s anatomy",
    job: () =>
      import("./codorniu-anatomy").then((m) => ({ default: m.Anatomy })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fpetz.jpg?alt=media&token=413fa4ce-0bbe-4300-ab97-a0314f8cdf19",
    title: "Petz - tv petz",
    job: () => import("./petz").then((m) => ({ default: m.Petz })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffca.jpg?alt=media&token=9d158bb7-1c8f-4055-8b5f-47106d41a0de",
    title: "FCA - digital day",
    job: () => import("./fca").then((m) => ({ default: m.FCA })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ftnt.jpg?alt=media&token=e4dc3c07-4e34-49e8-9fc9-78463b53a75f",
    title: "TNT no SPFW - sua cara sua luta",
    job: () => import("./tnt").then((m) => ({ default: m.TNT })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fhnk-living.jpg?alt=media&token=2d1c2aef-9fad-4229-a1a4-a075f2562bd5",
    title: "Living HNK - social midia",
    job: () =>
      import("./livinghnk").then((m) => ({ default: m.LivingHNK })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fpg-advogados.jpg?alt=media&token=f3bdf4e6-f66c-460e-9487-20c79becb48f",
    title: "PG advogados - social midia",
    job: () => import("./pgadv").then((m) => ({ default: m.PGadv })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcodorniu-webseries.jpg?alt=media&token=1589618e-810d-453f-b028-172d2c4757de",
    title: "codorníu - web serie somos codorníu",
    job: () =>
      import("./codorniu-serie").then((m) => ({ default: m.Serie })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fhersheys.jpg?alt=media&token=ebad1aab-48ab-4909-b4ff-87314eacac50",
    title: "hershey`s - ação de sampling",
    job: () =>
      import("./hersheys").then((m) => ({ default: m.Hersheys })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcbeebies.jpg?alt=media&token=e4b02ffb-d1c8-4316-946a-d5efb9b33ae2",
    title: "BBc - espaços cbeebies/livraria cultura",
    job: () =>
      import("./bbc-cbeebies").then((m) => ({ default: m.Cbeebies })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fabril-mobile.jpg?alt=media&token=220d729c-24fe-4880-8b38-937e35765256",
    title: "Abril - lançamento do mobile view abril",
    job: () =>
      import("./abril-mobile").then((m) => ({ default: m.AbrilMobile })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Froll-bauducco.jpg?alt=media&token=fab1ccb8-d428-4040-bd06-bb880bd93007",
    title: "Bauducco - teatro infantil e oficina roll",
    job: () =>
      import("./bauducco-roll").then((m) => ({ default: m.Roll })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fveja-450.png?alt=media&token=6382facf-5e51-430c-b0e7-715c4980f4a1",
    title: "Revista veja - rio 450 anos",
    job: () => import("./veja-450").then((m) => ({ default: m.Veja450 })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fconsul.jpg?alt=media&token=ee1a8915-abf7-450f-8a58-0f2cfa4c5bf8",
    title: "Consul - Showroom",
    job: () => import("./consul").then((m) => ({ default: m.Consul })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbombardier.jpg?alt=media&token=eddecf35-a465-42d1-b20e-0c07af559117",
    title: "Bombardier - social midia",
    job: () =>
      import("./bombardier-midia").then((m) => ({ default: m.BombardierM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcointreau.jpg?alt=media&token=e87d9a12-df56-4769-9c95-ffcfa3e0acd7",
    title: "Cointreau - social midia",
    job: () =>
      import("./cointreau-midia").then((m) => ({ default: m.CointreauM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcodorniu-socialmedia.jpg?alt=media&token=c626eae8-73df-4ac6-938d-0bfc24c46604",
    title: "Codorníu - social midia",
    job: () =>
      import("./codorniu-midia").then((m) => ({ default: m.CodorniuM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvedett-socialmedia.jpg?alt=media&token=e6dab73e-a0b8-4bf8-aa68-a477fa7e2461",
    title: "Vedett - social midia",
    job: () =>
      import("./vedett-midia2").then((m) => ({ default: m.VedettM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fgrupo-fit.png?alt=media&token=934f9732-2365-4bdc-bef0-e3225a147db7",
    title: "Grupo fit - social midia",
    job: () =>
      import("./fit-midia").then((m) => ({ default: m.FitMidia })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffox-ccxp.jpg?alt=media&token=d495df31-fd2d-42fa-8cf7-fa55ba2c918e",
    title: "fox - ccxp 2014",
    job: () => import("./fox-ccxp").then((m) => ({ default: m.FoxCcxp })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fnorpal.jpg?alt=media&token=9277533e-82db-43eb-900f-79667d6fd009",
    title: "Norpal - site",
    job: () => import("./norpal").then((m) => ({ default: m.Norpal })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fintel.png?alt=media&token=6a4d5235-faf6-4acb-a410-c904c611643f",
    title: "Intel racing - campanha de incentivo",
    job: () => import("./intel").then((m) => ({ default: m.Intel })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fclight.png?alt=media&token=ccc90e91-a43c-4819-b67c-33ece79372ae",
    title: "Clight - movimento 3x1",
    job: () =>
      import("./mondelez-clight").then((m) => ({ default: m.Clight })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fjimmy-walmart.jpg?alt=media&token=41cdb35a-7dca-42d8-ae5b-14cedc12c17c",
    title: "Ativações Walmart - Jimmy click, garfo e faca",
    job: () =>
      import("./walmart-jimmy").then((m) => ({ default: m.Jimmy })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcrownshow.png?alt=media&token=10c5a8a9-832b-4b32-a3cc-403b23d4f46e",
    title: "Crowshow - site",
    job: () =>
      import("./crownshow").then((m) => ({ default: m.Crownshow })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbbc-mark-gatiss.jpg?alt=media&token=3e8dbfea-abb1-46d4-8ef5-4cad00c7b240",
    title: "bbc - evento wild brazil/mark gatiss",
    job: () => import("./bbc-mark").then((m) => ({ default: m.Mark })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcorrida-walmart.jpg?alt=media&token=e0243c1c-d64c-4957-ab7f-2b871242f01e",
    title: "Corrida Walmart 2013",
    job: () =>
      import("./walmart-corrida").then((m) => ({ default: m.Corrida })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbauducco-sao-joao.jpg?alt=media&token=6430e220-32ee-4311-8c3d-8e14465a9bc7",
    title: "bauducco - ativação são joão",
    job: () =>
      import("./bauducco-saojoao").then((m) => ({ default: m.SaoJoao })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fplaysckool.jpg?alt=media&token=d028dc5e-fab7-4cf4-842f-09a07b008680",
    title: "Hasbro - Hotsite playskool",
    job: () =>
      import("./hasbro-playskool").then((m) => ({ default: m.Playskool })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fpetshop.jpg?alt=media&token=8cd4f7c2-ea04-4c79-8751-11dddffe779a",
    title: "hasbro - hotsite littlelest pet shop",
    job: () =>
      import("./hasbro-petshop").then((m) => ({ default: m.PetShop })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcascola.jpg?alt=media&token=e8bcfc4d-a9cc-4a55-afef-720ef7f05a05",
    title: "Cascola digital",
    job: () => import("./cascola").then((m) => ({ default: m.Cascola })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbauducco-socialmedia.jpg?alt=media&token=55fc708d-0c1b-4faa-be92-9435dce1a94c",
    title: "bauducco - social midia",
    job: () =>
      import("./bauducco-midia").then((m) => ({ default: m.BauduccoM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fpilao-walmart.jpg?alt=media&token=790b27ff-f2de-430c-abb9-61297656e35d",
    title: "café pilão - ação de checkout walmart",
    job: () =>
      import("./walmart-pilao").then((m) => ({ default: m.Pilao })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fcalminex.jpg?alt=media&token=a2709bd3-f110-4c98-b981-6b03f1d1c0ce",
    title: "estande calminex",
    job: () =>
      import("./calminex").then((m) => ({ default: m.Calminex })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fmondolez-halls.jpg?alt=media&token=2a2ce425-6c8e-449c-95a2-86d5c90b10ba",
    title: "mondelez - ações de sampling",
    job: () =>
      import("./mondelez").then((m) => ({ default: m.Mondelez })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbbcnet.jpg?alt=media&token=bbeddd7d-98d3-47f9-93cb-a342c44760f5",
    title: "bbc hd - convenção net",
    job: () => import("./bbc-net").then((m) => ({ default: m.BBCNet })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fsentir-bem.jpg?alt=media&token=032f49e5-7b5f-4c8a-b8d0-32b3fb4de726",
    title: "Sentir bem - ações de sampling",
    job: () =>
      import("./walmart-sentirbem").then((m) => ({ default: m.SentirBem })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffarmacia-walmart2.jpg?alt=media&token=db3439cd-30fa-4a71-bc5d-95f1908e6f4e",
    title: "farmacias walmart - ações de sampling",
    job: () =>
      import("./walmart-farmacia").then((m) => ({ default: m.Farmacia })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fintumus-flashmob.png?alt=media&token=5ffdf560-8878-4517-a3e9-c83e3d8090fa",
    title: "Flashmob intimus",
    job: () =>
      import("./kc-intimus").then((m) => ({ default: m.Intimus })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fhuggies.jpg?alt=media&token=f6fc8033-476c-44f0-bcdb-b6b463a92d28",
    title: "huggies turma da monica",
    job: () =>
      import("./kc-huggies").then((m) => ({ default: m.Huggies })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fsauza.jpg?alt=media&token=a1bda562-d25c-44bb-b586-646ef04c1ccb",
    title: "sauza tequila - social midia",
    job: () =>
      import("./sauza-midia").then((m) => ({ default: m.SauzaM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbauducco.jpg?alt=media&token=c67daf8c-16b6-4fdb-bc45-5077fe0f4111",
    title: "Bauducco - ações de sampling",
    job: () =>
      import("./bauducco-sampling").then((m) => ({ default: m.BauduccoS })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Faes-eletropaulo.jpg?alt=media&token=49e1a9f8-115d-4584-a5d6-f862d19fc73d",
    title: "AES eletropaulo - smart house",
    job: () =>
      import("./aeseletropaulo").then((m) => ({ default: m.AESEletropaulo })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fexto.jpg?alt=media&token=645f25c2-0ea5-4664-b65e-32dd85b7ffc0",
    title: "exto",
    job: () => import("./exto").then((m) => ({ default: m.Exto })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fintimus.png?alt=media&token=c8b2fab3-c9d1-4fe4-a528-dcd77aa37791",
    title: "intimus evolution sampling",
    job: () =>
      import("./kc-intimus-sampling").then((m) => ({ default: m.IntimusS })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fserasa.jpg?alt=media&token=ee61d04b-f12e-4fef-be78-d830d6602524",
    title: "serasa experian",
    job: () => import("./serasa").then((m) => ({ default: m.Serasa })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fschwarzkopf.jpg?alt=media&token=8166c9bc-c014-4ef9-9deb-eb7af80a3162",
    title: "schwarzkopf - social midia",
    job: () =>
      import("./schwarzkopf").then((m) => ({ default: m.Schwarzkopf })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fbbc-hd.jpg?alt=media&token=18d7ea8c-8c79-4d6a-83a6-a191843c907c",
    title: "bbc hd - social midia",
    job: () => import("./bbc-hd").then((m) => ({ default: m.BBChd })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fnickelodeon.png?alt=media&token=b46e200f-fe97-485f-849c-2dfb596268f2",
    title: "Nickelodeon - social midia",
    job: () =>
      import("./nickelodeon").then((m) => ({ default: m.Nickledoen })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fveja.jpg?alt=media&token=9b9b24d2-b314-4705-84e3-083e623c8125",
    title: "Veja - ação em pdv",
    job: () => import("./veja-pdv").then((m) => ({ default: m.VejaPDV })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fvh1.jpg?alt=media&token=d37e80ae-5f5c-4022-bf5c-e258c21eb6fc",
    title: "vh1 - social midia",
    job: () =>
      import("./vh1-midia").then((m) => ({ default: m.VH1Midia })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fwalmart-degustacao.jpg?alt=media&token=13855e5f-cd13-4081-9d6f-288fb4db733e",
    title: "walmart - ações de degustação e sampling",
    job: () =>
      import("./walmart-degustacao").then((m) => ({ default: m.Degustacao })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fwalmart-site.png?alt=media&token=e8d4df95-7ea9-4fcf-8679-4e25c4cac88b",
    title: "Walmart.com - divulgação do site",
    job: () =>
      import("./walmart-site").then((m) => ({ default: m.WalmartM })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Ffarmacia-walmart.png?alt=media&token=23b0ce3a-38b6-4230-9824-e21dc42bcfb0",
    title: "farmacia walmart - ações de verão",
    job: () =>
      import("./walmart-verao").then((m) => ({ default: m.Verao })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fwalmart-posto.png?alt=media&token=df75cd47-7d31-4469-9640-938892eaee39",
    title: "walmart - inaugiração dos postos walmart em todo brasil",
    job: () =>
      import("./walmart-posto").then((m) => ({ default: m.Posto })),
  },
  {
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/duee-site.appspot.com/o/portifolio%2Fjobs%2Fold_thumbs%2Fwalmart-festa.jpg?alt=media&token=9d0e6d32-7f56-4d56-8fae-6c5b6dad46d1",
    title: "Walmart - festa de fim de ano",
    job: () =>
      import("./walmart-confraternizacao").then((m) => ({
        default: m.Confraternizacao,
      })),
  },
]
