export const API = {
  themes: [
    {
      id: 0,
      image: 'https://s29.postimg.org/i21ox7xhz/couv7wonders.jpg',
      name: 'Les 7 merveilles du monde',
      period: 'antiquity',
      description: 'Découvre les plus belles constructions du monde Antique, des plaines égyptiennes aux montagnes grecques !',
      nbStories: 7,
      locked: false,
      histories: [
        {
          id: 0,
          locked: false,
          image: 'https://s27.postimg.org/bskr443v7/slide1_1_1024x475.jpg',
          name: 'La pyramide de Khéops',
          period: 'antiquity',
          description: 'Elle fait partie des constructions les plus massives du monde et est la seule merveille à toujours être debout !',
          duration: 20,
          nbPages: 35,
          availability: '24/12',
          pages: [
            {
              id: 1,
              title: "L'Égypte antique",
              text: `Nous sommes en l’an 3150 avant Jésus Christ. Une nouvelle civilisation vient de naître dans le monde : La civilisation égyptienne. Les égyptiens sont un peuple d’Afrique du Nord qui vivent autour du Nil, l’un des plus grand fleuves du monde. Le Nil est l’un des rares fleuves à couler du Sud vers le Nord.
 \n\n Les égyptiens sont connus dans le monde entier pour être les inventeurs des hiéroglyphes, l’écriture de la langue égyptien. Ce sont des symboles qui permettent de faciliter le marché et la récolte des impôts par l’Etat. Il existe plus de 500 symboles qui représentent un mot, un son ou une situation.`,
              image: 'https://giant.gfycat.com/TartGraciousChameleon.gif',
              content: [
                {
                  type: 'image',
                  data: '',
                },
                {
                  type: 'word',
                  data: '',
                },
              ],
            },
            {
              id: 2,
              title: 'La mythlogie égyptienne',
              text: `I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, I can't do it. I just can't do it. It's inappropriate. It's not nice. \n\n I think the only card she has is the Lorem card. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. I’m the best thing that ever happened to placeholder text.`,
              image: 'https://s29.postimg.org/fmqlwai8n/gods.jpg',
              content: [
                {
                  type: 'image',
                  data: '',
                },
                {
                  type: 'word',
                  data: '',
                },
              ],
            },
            {
              id: 3,
              title: 'Les pharaons',
              text: `I was going to say something extremely rough to Lorem Ipsum, to its family, and I said to myself, I can't do it. I just can't do it. It's inappropriate. It's not nice. \n\n I think the only card she has is the Lorem card. Lorem Ipsum is unattractive, both inside and out. I fully understand why it’s former users left it for something else. They made a good decision. I’m the best thing that ever happened to placeholder text.`,
              image: 'https://s30.postimg.org/9xhuwe1nl/pharaons.jpg',
              content: [
                {
                  type: 'image',
                  data: '',
                },
                {
                  type: 'word',
                  data: '',
                },
              ],
            },
          ],
        },
        {
          id: 1,
          locked: true,
          image: 'https://s27.postimg.org/wm6361ygz/rhodes_colosse_image11.jpg',
          name: 'Le colosse de Rhodes',
          period: 'antiquity',
          description: 'Le plus ancien traité de paix encore existant est vieux de 3200 ans entre l’Égypte et l’Empire hittite !',
          duration: 10,
          nbPages: 17,
          availability: '24/12',
        },
        {
          id: 2,
          locked: true,
          image: 'https://s28.postimg.org/fdzty1vfh/mausolee.jpg',
          name: "Le mausolée d'Halicarnasse",
          period: 'antiquity',
          description: "Plonge dans l'histoire du mausolée le plus fastueux du monde Antique !",
          duration: 18,
          nbPages: 32,
          availability: '24/12',
        },
        {
          id: 3,
          locked: true,
          image: 'https://s23.postimg.org/qdsxq3igr/jardins.jpg',
          name: 'Les jardins suspendus',
          period: 'antiquity',
          description: "Découvre l’un des plus beau lieu du monde Antique. Merveille d'architecture, de technologie et de végétation !",
          duration: 5,
          nbPages: 12,
          availability: '24/12',
        },
        {
          id: 4,
          locked: true,
          image: 'https://s24.postimg.org/3yeq7gw1h/artemis.jpg',
          name: "Le temple d'Artemis",
          period: 'antiquity',
          description: "Le temple d'Artémis à Éphèse est dans l'Antiquité l'un des plus importants sanctuaires de la Nature sauvage !",
          duration: 30,
          nbPages: 42,
          availability: '24/12',
        },
        {
          id: 5,
          locked: true,
          image: 'https://s29.postimg.org/iubugy9bb/zeus.jpg',
          name: 'Le statue de Zeus',
          period: 'antiquity',
          description: 'Part à la découverte de la gigantesque statue de Zeus à Olympie, la cité des Dieux !',
          duration: 3,
          nbPages: 9,
          availability: '24/12',
        },
        {
          id: 6,
          locked: true,
          image: 'https://i.ytimg.com/vi/kRTPugHpUho/maxresdefault.jpg',
          name: "Le phare d'Alexandrie",
          period: 'antiquity',
          description: 'Cette tour imposante était l’un des premier phare au monde et une prouesse technologique pour l’époque !',
          duration: 20,
          nbPages: 35,
          availability: '24/12',
        },
      ],
    },
    {
      id: 1,
      image: 'https://s30.postimg.org/sa6i19ze9/mozart.jpg',
      name: 'Les compositeurs classiques',
      period: 'modernTimes',
      description: "Mozart, Beethoven ou encore Chopin : découvre l'art de ces grands compositeurs !",
      nbStories: 4,
      locked: false,
      histories: [
        {
          id: 0,
          locked: true,
          image: 'https://s23.postimg.org/otellv1ez/mozart_wolfgang_amadeus_527a7a17c1157.jpg',
          name: 'Wolfgang Amadeus Mozart',
          period: 'modernTimes',
          description: 'Va à la rencontre de Mozart, l’enfant prodige de la musique classique en découvrant la grandeur de son Oeuvre !',
          duration: 20,
          nbPages: 35,
          availability: '25/12',
        },
        {
          id: 1,
          locked: true,
          image: 'https://s24.postimg.org/6fczcddut/maxresdefault.jpg',
          name: 'Ludwig Van Beethoven',
          period: 'modernTimes',
          description: 'Découvre le destin du dernier grand compositeur du classicisme !',
          duration: 10,
          nbPages: 17,
          availability: '25/12',
        },
        {
          id: 2,
          locked: true,
          image: 'https://s27.postimg.org/s9re3is4j/chopin_frederic_portrait_chopin_classiquenews.jpg',
          name: 'Frédéric Chopin',
          period: 'modernTimes',
          description: "Sa musique est encore aujourd'hui l'une des plus jouées et demeure un passage indispensable au piano !",
          duration: 18,
          nbPages: 32,
          availability: '25/12',
        },
        {
          id: 3,
          locked: true,
          image: 'https://s27.postimg.org/4equiz8ir/x600x337_fotorcreated_24_jpg_pagespeed_ic_94_YKYG.jpg',
          name: 'Antonio Vivaldi',
          period: 'modernTimes',
          description: 'Il a été l’un des virtuoses du violon les plus célèbres de la période baroque !',
          duration: 5,
          nbPages: 12,
          availability: '25/12',
        },
      ],
    },
    {
      id: 2,
      image: 'https://i.ytimg.com/vi/QrOQiknOE9w/maxresdefault.jpg',
      name: 'Les grottes préhistoriques',
      period: 'preHistory',
      description: "Explore les grottes de la Préhistoire et admire les plus vieux chefs d'oeuvre de l’histoire de l’Humanité !",
      nbStories: 5,
      locked: true,
      price: 5.99,
      availability: '25/12',
    },
    {
      id: 3,
      image: 'https://s29.postimg.org/r0lsah5xj/lumieres.jpg',
      name: 'Les philosophes des Lumières',
      period: 'modernTimes',
      description: 'Part à la rencontre de ceux qui ont changé notre façon de voir le monde. Les philosophes des Lumières !',
      nbStories: 4,
      locked: true,
      price: 5.99,
      availability: '25/12',
    },
    {
      id: 4,
      image: 'https://s29.postimg.org/s8jfk0mp3/porcelaine.jpg',
      name: "L'art de la porcelaine chinoise",
      period: 'middleAge',
      description: "Voyage à la découverte de l'art de la porcelaine chinoise à travers les âges, de la céramique Xing aux vases Ming !",
      nbStories: 3,
      locked: true,
      price: 5.99,
      availability: '25/12',
    },
    {
      id: 5,
      image: 'https://s24.postimg.org/gx6anhjth/picasso.jpg',
      name: 'La peinture par Pablo Picasso',
      period: 'contemporaryTimes',
      description: 'Découvre les plus belles oeuvres du peintre Pablo Picasso pour le comprendre de sa période bleu au cubisme !',
      nbStories: 5,
      locked: true,
      price: 5.99,
      availability: '25/12',
    },
    {
      id: 6,
      image: 'https://s27.postimg.org/xvmb61xmb/maya.jpg',
      name: 'La civilisation Maya',
      period: 'antiquity',
      description: 'Admire les créations de l’une des plus grandes civilisations d’Amérique du Sud à travers leurs temples & sculptures !',
      nbStories: 7,
      locked: true,
      price: 5.99,
      availability: '25/12',
    },
  ],
  facts: [
    {
      id: 0,
      period: 'preHistory',
      content: "C'est en pourchassant un lapi qu'un chien qui accompagnait un groupe d'adolescent a découvert la grotte de Lascaux en 1940.",
    },
    {
      id: 1,
      period: 'antiquity',
      content: 'Le plus ancien traité de paix encore existant est vieux de 3200 ans entre l’Égypte et l’Empire hittite !',
    },
    {
      id: 2,
      period: 'middleAge',
      content: 'Le premier roman de l’histoire a été écrit en l’an 1007 au Japon par une noble japonaise du nom de Murasaki Shikibu !',
    },
    {
      id: 3,
      period: 'mondernTimes',
      content: 'Le catalogue Köchel est un répertoire qui recense les travaux de Mozart : il compte actuellement 893 oeuvres !',
    },
    {
      id: 4,
      period: 'contemporaryTimes',
      content: 'Après l’Exposition universelle de Paris en 1889, tout comme les autres constructions : la Tour Eiffel était censée être démontée !',
    },
  ],
}
