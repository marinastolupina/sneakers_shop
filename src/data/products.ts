import type { Product } from "../types/product";

export const products: Product[] = [
  {
    id: 1,
    brand: "LiNing",
    name: "Red Hare 8 PRO",
    price: 5500,
    images: [
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-1.jpg`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-2.jpg`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-3.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-review1.webp`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-review2.jpg`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-review3.jpg`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-review4.jpg`,
      `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-review5.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "голубой",
        images: [
          `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-1.jpg`,
          `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-2.jpg`,
          `${import.meta.env.BASE_URL}images/lining-red-hare-8-pro-3.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],
    purpose: ["для кроссов"],

    description:
      `Кроссовки LiNing Red Hare 8 Pro
Комфорт в каждом шаге! Эти кроссовки созданы с технологией Lightweight Energy Return, обеспечивающей 15% больше отталкивания при каждом шаге. Верх из дышащей сетки 3D AirMesh сохраняет ногу прохладной даже при интенсивных тренировках, а подошва из EVA-пены с арочным усилением обеспечивает стабильность на поворотах.

Идеально для:
✓ Бегунов разного уровня
✓ Для длительных и восстановительных кроссов
✓ Для соревнований в темпе >5:00/км
✓ Ежедневных тренировок

Особенности:
• Вес всего 220 г (размер 42)
• Система поддержки ахиллова сухожилия
• Усиленный носок для защиты при ударах
• Эргономичный крой с 3D-поддержкой стопы`,

    brandDescription: `LiNing — китайский спортивный бренд, основанный в 1990 году олимпийским чемпионом по спортивной гимнастике Ли Нином. За более чем 30 лет компания выросла из небольшого стартапа в одного из крупнейших производителей спортивной экипировки в Азии, успешно конкурируя с мировыми гигантами.

Бренд активно инвестирует в исследования и разработки, создавая собственные технологии амортизации, такие как Boom Foam и Cloud Cushion, которые обеспечивают отличную отдачу энергии и комфорт при беге. Кроссовки LiNing выбирают как профессиональные атлеты, так и любители по всему миру за сочетание инноваций, качества и доступной цены.

Сегодня LiNing — это не просто обувь, это философия движения и стремления к совершенству, вдохновленная спортивным духом основателя.`,
  },
  {
    id: 2,
    brand: "Adidas",
    name: "Boston 12",
    price: 12500,
    images: [
      `${import.meta.env.BASE_URL}images/adidas-boston-12-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-3.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/adidas-boston-12-review1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-review2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-review3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-review4.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-12-review5.jpg`,

    ],
    sizes: [39, 40, 41],
    colors: [
      {
        id: 'color-1',
        name: "белый",
        images: [
          `${import.meta.env.BASE_URL}images/adidas-boston-12-1.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-boston-12-2.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-boston-12-3.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],
    purpose: ["универсальные"],

  description: `Кроссовки Adidas Boston 12 — универсальная модель, которая стирает границы между тренировочными и гоночными кроссовками. Созданные для ежедневных тренировок и соревнований, они сочетают в себе проверенные технологии Adidas и инновационные решения для максимальной производительности.

В основе лежит двухслойная система амортизации: верхний слой из пены Lightstrike Pro обеспечивает мягкость и отдачу энергии, а нижний слой Lightstrike добавляет стабильность и долговечность. Встроенные стержни EnergyRods из стекловолокна имитируют работу плюсневых костей стопы, создавая естественный и эффективный перекат.

Идеально для:
✓ Ежедневных тренировок любого объема
✓ Темповых работ и интервалов
✓ Полумарафонов и марафонов
✓ Бегунов, ищущих универсальную модель "на каждый день"

Особенности:
• Двухслойная амортизация Lightstrike Pro + Lightstrike
• Стержни EnergyRods из стекловолокна для естественного переката
• Верх из дышащей сетки с усилениями в зонах износа
• Подошва Continental™ Rubber — легендарное сцепление в любую погоду
• Вес 250 г (размер 42)
• Перепад высоты: 7 мм (38/31мм)
• Классическая посадка adidas — подходит для большинства типов стопы
• Светоотражающие элементы для безопасности в темное время`,

   brandDescription: `Adidas — один из крупнейших спортивных брендов в мире, основанный в 1949 году Адольфом Дасслером в Германии. За более чем 75 лет компания прошла путь от небольшой мастерской по производству обуви до глобального лидера спортивной индустрии, чьи три полоски узнаваемы в каждой стране мира.

Хотя Adidas производит экипировку для десятков видов спорта — от футбола до тенниса — именно беговая линейка бренда считается одной из сильнейших на рынке. Легендарные серии Adizero, Ultraboost и Boston стали выбором как олимпийских чемпионов, так и миллионов любителей бега по всему миру.

В беговых кроссовках Adidas используются собственные технологии: пена Boost и Lightstrike Pro для амортизации, карбоновые пластины и стержни EnergyRods для отталкивания, а также подошвы Continental™ Rubber, разработанные совместно с легендарным производителем автомобильных шин — для максимального сцепления на любых поверхностях.`,
  },
  {
    id: 3,
    brand: "LiNing",
    name: "Feidian 5 Challenger",
    price: 9500,
    images: [
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-1.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-2.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-3.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-4.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "серый",
        images: [
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-1.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-2.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-3.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-4.jpg`],
        sizes: [39, 40, 41],
      },
      {
        id: 'color-2',
        name: "красный",
        images: [
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-red-1.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-red-2.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-red-3.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-red-4.jpg`],
        sizes: [39, 40, 41],
      },
    ],

    galleryImages: [
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-review1.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-review2.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-review3.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-review4.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Challenger-review5.jpg`,
    ],
    purpose: ["для темпов", "гоночные"],

    description: `Кроссовки Li-Ning Feidian 5 Challenger — флагманская гоночная модель для тех, кто нацелен на личный рекорд. В основе лежит карбоновая пластина Full-Length Carbon Plate, которая работает как пружина и обеспечивает мощный толчок на каждом шаге.

Амортизация на базе пены Boom delivers максимальную отдачу энергии при минимальном весе, а верх из сверхлегкой сетки Mono Yarn плотно облегает стопу, не стесняя движений.

Идеально для:
✓ Соревнований на дистанциях 10 км и полумарафон
✓ Темповых тренировок
✓ Интервальных работ

Особенности:
• Карбоновая пластина на всю длину стопы
• Пена Boom — до 80% возврата энергии
• Вес всего 195 г (размер 42)
• Перепад высоты: 8 мм (35/27 мм)
• Агрессивный rocker для эффективного переката
• Резина GCU на подошве для сцепления в любую погоду`,

    brandDescription: `LiNing — китайский спортивный бренд, основанный в 1990 году олимпийским чемпионом по спортивной гимнастике Ли Нином. За более чем 30 лет компания выросла из небольшого стартапа в одного из крупнейших производителей спортивной экипировки в Азии, успешно конкурируя с мировыми гигантами.

Бренд активно инвестирует в исследования и разработки, создавая собственные технологии амортизации, такие как Boom Foam и Cloud Cushion, которые обеспечивают отличную отдачу энергии и комфорт при беге. Кроссовки LiNing выбирают как профессиональные атлеты, так и любители по всему миру за сочетание инноваций, качества и доступной цены.

Сегодня LiNing — это не просто обувь, это философия движения и стремления к совершенству, вдохновленная спортивным духом основателя.`,
  },
  {
    id: 4,
    brand: "LiNing",
    name: "Li-Ning Feidian 5 Elite",
    price: 15500,
    images: [
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-1.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-2.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-3.jpg`,
      `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-4.jpg`,
    ],
    galleryImages: [
    `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-review1.webp`,
    `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-review2.jpg`,
    `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-review3.webp`,
    `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-review4.jpg`,
    `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-review5.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "красный",
        images: [
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-1.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-2.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-3.jpg`,
          `${import.meta.env.BASE_URL}images/Li-Ning-Feidian-5-Elite-4.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],
    purpose: ["гоночные"],

    description: `Кроссовки Li-Ning Feidian 5 Elite — абсолютный максимум производительности для элитных бегунов. Это самая легкая и быстрая модель в линейке Feidian, созданная для установления личных рекордов и побед на соревнованиях любого уровня.

Революционная карбоновая пластина Elite Plate работает в паре с обновленной пеной Boom 2.0, обеспечивая беспрецедентную отдачу энергии — до 85%. Верх из ультралегкой сетки Mono Yarn Pro весит всего 8 грамм и обеспечивает идеальную фиксацию без единого шва.

Идеально для:
✓ Марафонов и полумарафонов
✓ Установления личных рекордов
✓ Соревнований национального и международного уровня
✓ Элитных бегунов и профессиональных атлетов

Особенности:
• Карбоновая пластина Elite Plate с оптимизированной жесткостью
• Пена Boom 2.0 — максимальный возврат энергии
• Вес всего 175 г (размер 42) — рекордная легкость
• Перепад высоты: 6 мм (33/27 мм) для естественного бега
• Агрессивный rocker geometry для идеального переката
• Резина GCU Pro с улучшенным сцеплением
• Бесшовный верх Mono Yarn Pro (всего 8 г)
• Усиленная пятка для стабильности при приземлении`,

    brandDescription: `LiNing — китайский спортивный бренд, основанный в 1990 году олимпийским чемпионом по спортивной гимнастике Ли Нином. За более чем 30 лет компания выросла из небольшого стартапа в одного из крупнейших производителей спортивной экипировки в Азии, успешно конкурируя с мировыми гигантами.

Бренд активно инвестирует в исследования и разработки, создавая собственные технологии амортизации, такие как Boom Foam и Cloud Cushion, которые обеспечивают отличную отдачу энергии и комфорт при беге. Кроссовки LiNing выбирают как профессиональные атлеты, так и любители по всему миру за сочетание инноваций, качества и доступной цены.

Сегодня LiNing — это не просто обувь, это философия движения и стремления к совершенству, вдохновленная спортивным духом основателя.`,
  },
  {
    id: 5,
    brand: "Adidas",
    name: "Adizero Adios 9",
    price: 13200,
    images: [
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-4.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-review2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-review4.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-review1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-review5.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-review6.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "белый/оранжевый",
        images: [
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-1.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-2.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-3.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Adios-9-4.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],

    purpose: ["для темпов", "гоночные"],

description: `Кроссовки Adidas Adizero Adios 9 — гоночная модель для дистанций от 5 км до полумарафона. Это "младший брат" флагманских Adios Pro 4: здесь та же ДНК скорости, но без карбоновой пластины, что делает их идеальным выбором для бегунов, которые хотят соревноваться без радикальных изменений техники бега.

В основе — пена Lightstrike Pro, та же, что используется в топовых моделях линейки Adizero. Она обеспечивает максимальную отдачу энергии при минимальном весе. Стержни EnergyRods из стекловолокна помогают эффективному перекату, а агрессивный rocker geometry подталкивает вперед на каждом шаге.

Идеально для:
✓ Соревнований на дистанциях 5-10 км и полумарафон
✓ Темповых тренировок перед стартами
✓ Бегунов, переходящих от Boston к более быстрым кроссовкам
✓ Тех, кто не готов к карбоновым "суперкроссовкам"

Особенности:
• Пена Lightstrike Pro — максимальная отдача энергии
• Стержни EnergyRods из стекловолокна
• Агрессивный rocker geometry для быстрого переката
• Верх из сверхлегкой сетки Celermesh 2.0
• Подошва Continental™ Rubber — лучшее сцепление в классе
• Вес всего 210 г (размер 42)
• Перепад высоты: 6.5 мм
• Минималистичный дизайн без лишних элементов`,

brandDescription: `Adidas — один из крупнейших спортивных брендов в мире, основанный в 1949 году Адольфом Дасслером в Германии. За более чем 75 лет компания прошла путь от небольшой мастерской по производству обуви до глобального лидера спортивной индустрии, чьи три полоски узнаваемы в каждой стране мира.

Хотя Adidas производит экипировку для десятков видов спорта — от футбола до тенниса — именно беговая линейка бренда считается одной из сильнейших на рынке. Легендарные серии Adizero, Ultraboost и Boston стали выбором как олимпийских чемпионов, так и миллионов любителей бега по всему миру.

В беговых кроссовках Adidas используются собственные технологии: пена Boost и Lightstrike Pro для амортизации, карбоновые пластины и стержни EnergyRods для отталкивания, а также подошвы Continental™ Rubber, разработанные совместно с легендарным производителем автомобильных шин — для максимального сцепления на любых поверхностях.`,
  },
  {
    id: 6,
    brand: "Adidas",
    name: "Adizero Evo Sl",
    price: 14700,
    images: [
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-4.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-review1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-review2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-review3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-review4.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-review5.jpg`,

    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "белый",
        images: [
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-1.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-2.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-3.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Adizero-Evo-Sl-4.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],

    purpose: ["для темпов", "гоночные"],

description: `Кроссовки Adidas Adizero Evo SL — сверхлегкая тренировочная модель, которая стирает границу между тренировками и гонками. Это самая легкая модель в линейке Adizero без карбоновой пластины, созданная для быстрых темповых работ и соревнований на короткие дистанции.

В основе — чистая пена Lightstrike Pro без каких-либо вставок или стержней. Это дает максимальную мягкость и отдачу энергии при минимальном весе. Минималистичный верх из сетки обеспечивает идеальную вентиляцию, а подошва Continental™ Rubber гарантирует сцепление на любых поверхностях.

Идеально для:
✓ Темповых тренировок и интервалов
✓ Соревнований на дистанциях 5-10 км
✓ Бегунов, которые хотят чувствовать дорогу
✓ Тех, кто ценит минимализм и легкость

Особенности:
• Чистая пена Lightstrike Pro без вставок — максимальная чувствительность
• Сверхлегкий вес: всего 165 г (размер 42)
• Минималистичный верх из дышащей сетки
• Подошва Continental™ Rubber для надежного сцепления
• Перепад высоты: 6 мм
• Низкий профиль для лучшего контакта с поверхностью
• Отсутствие карбоновой пластины — естественный бег
• Идеальны для развития скорости и техники`,

brandDescription: `Adidas — один из крупнейших спортивных брендов в мире, основанный в 1949 году Адольфом Дасслером в Германии. За более чем 75 лет компания прошла путь от небольшой мастерской по производству обуви до глобального лидера спортивной индустрии, чьи три полоски узнаваемы в каждой стране мира.

Хотя Adidas производит экипировку для десятков видов спорта — от футбола до тенниса — именно беговая линейка бренда считается одной из сильнейших на рынке. Легендарные серии Adizero, Ultraboost и Boston стали выбором как олимпийских чемпионов, так и миллионов любителей бега по всему миру.

В беговых кроссовках Adidas используются собственные технологии: пена Boost и Lightstrike Pro для амортизации, карбоновые пластины и стержни EnergyRods для отталкивания, а также подошвы Continental™ Rubber, разработанные совместно с легендарным производителем автомобильных шин — для максимального сцепления на любых поверхностях.`,
  },
  {
    id: 7,
    brand: "Adidas",
    name: "Supernova Rise 3",
    price: 11500,
    images: [
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-4.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-review1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-review2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-review3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-review4.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-review5.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "оранжевый/черный",
        images: [
          `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-1.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-2.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-3.jpg`,
          `${import.meta.env.BASE_URL}images/adidas-Supernova-Rise-3-4.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],

    purpose: ["для кроссов"],

description: `Кроссовки Adidas Supernova Rise 3 — идеальная пара для тех, кто начинает свой беговой путь или ищет надежные кроссовки для ежедневных тренировок. Третье поколение линейки Supernova получило обновленную пену Dreamstrike+ и доработанный верх для еще большего комфорта на длинных дистанциях.

В отличие от гоночных моделей линейки Adizero, Supernova Rise созданы для комфорта и долговечности. Пена Dreamstrike+ обеспечивает мягкую амортизацию, которая не "пробивается" даже после сотен километров, а усиленный верх надежно фиксирует стопу без давления.

Идеально для:
✓ Начинающих бегунов и тех, кто только начинает бегать регулярно
✓ Ежедневных тренировок в спокойном темпе
✓ Длительных кроссов и восстановительных пробежек
✓ Бегунов с избыточным весом или проблемами суставов
✓ Ходьбы и активного отдыха

Особенности:
• Пена Dreamstrike+ — мягкая амортизация с долгим сроком службы
• Усиленный верх из сетки с поддерживающими вставками
• Широкая подошва для стабильности при приземлении
• Подошва Continental™ Rubber — износостойкость и сцепление
• Вес 275 г (размер 42)
• Перепад высоты: 8 мм — комфортный для большинства бегунов
• Усиленная пятка для поддержки ахиллова сухожилия
• Светоотражающие элементы для безопасности`,

brandDescription: `Adidas — один из крупнейших спортивных брендов в мире, основанный в 1949 году Адольфом Дасслером в Германии. За более чем 75 лет компания прошла путь от небольшой мастерской по производству обуви до глобального лидера спортивной индустрии, чьи три полоски узнаваемы в каждой стране мира.

Хотя Adidas производит экипировку для десятков видов спорта — от футбола до тенниса — именно беговая линейка бренда считается одной из сильнейших на рынке. Легендарные серии Adizero, Ultraboost и Boston стали выбором как олимпийских чемпионов, так и миллионов любителей бега по всему миру.

В беговых кроссовках Adidas используются собственные технологии: пена Boost и Lightstrike Pro для амортизации, карбоновые пластины и стержни EnergyRods для отталкивания, а также подошвы Continental™ Rubber, разработанные совместно с легендарным производителем автомобильных шин — для максимального сцепления на любых поверхностях.`,
  },
  {
    id: 8,
    brand: "Adidas",
    name: "Boston 13",
    price: 15500,
    images: [
      `${import.meta.env.BASE_URL}images/adidas-boston-13-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-4.jpg`,
    ],
    galleryImages: [
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review4.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review5.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-review6.jpg`,
    ],
    sizes: [39, 40, 41],

    colors: [
      {
        id: 'color-1',
        name: "черный",
        images: [
      `${import.meta.env.BASE_URL}images/adidas-boston-13-1.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-2.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-3.jpg`,
      `${import.meta.env.BASE_URL}images/adidas-boston-13-4.jpg`,
        ],
        sizes: [39, 40, 41],
      },
    ],

    purpose: ["универсальные"],

description: `Кроссовки Adidas Boston 13 — эволюция легендарной универсальной модели. Третье поколение Boston получило обновленную пену Lightstrike Pro с улучшенной отдачей энергии, более агрессивный rocker для эффективного переката и доработанный верх с лучшей вентиляцией.

Система амортизации осталась двухслойной: Lightstrike Pro сверху для мягкости и отклика, Lightstrike снизу для стабильности. Стержни EnergyRods 2.0 из стекловолокна стали тоньше и легче, обеспечивая более естественный перекат стопы.

Идеально для:
✓ Ежедневных тренировок любого объема
✓ Темповых работ и длинных интервалов
✓ Полумарафонов и марафонов
✓ Бегунов, которым нужна одна пара на все случаи жизни

Особенности:
• Обновленная пена Lightstrike Pro — на 10% больше отдачи энергии
• Стержни EnergyRods 2.0 — легче и эффективнее
• Агрессивный rocker geometry для плавного переката
• Верх из дышащей сетки с зональными усилениями
• Подошва Continental™ Rubber — сцепление в любую погоду
• Вес 240 г (размер 42) — на 10 г легче предшественника
• Перепад высоты: 6.5 мм
• Улучшенная посадка в средней части стопы`,

brandDescription: `Adidas — один из крупнейших спортивных брендов в мире, основанный в 1949 году Адольфом Дасслером в Германии. За более чем 75 лет компания прошла путь от небольшой мастерской по производству обуви до глобального лидера спортивной индустрии, чьи три полоски узнаваемы в каждой стране мира.

Хотя Adidas производит экипировку для десятков видов спорта — от футбола до тенниса — именно беговая линейка бренда считается одной из сильнейших на рынке. Легендарные серии Adizero, Ultraboost и Boston стали выбором как олимпийских чемпионов, так и миллионов любителей бега по всему миру.

В беговых кроссовках Adidas используются собственные технологии: пена Boost и Lightstrike Pro для амортизации, карбоновые пластины и стержни EnergyRods для отталкивания, а также подошвы Continental™ Rubber, разработанные совместно с легендарным производителем автомобильных шин — для максимального сцепления на любых поверхностях.`,
  },
];
