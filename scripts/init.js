db.createCollection('categories');
db.createCollection('questions');
db.createCollection('tests');
db.categories.insertMany([EJSON.deserialize({
    "_id": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "name": "Владение информацией",
    "questionTitle": "Оцените уровень Ваших знаний, информации необходимой для реализации Ваших прав:"
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "name": "Список прав",
    "questionTitle": "Как Вы считаете, соблюдаются ли в Российской Федерации в целом права инвалидов и детей-инвалидов?"
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "name": "Трудности",
    "questionTitle": "Сталкивались ли Вы с отказом по причине инвалидности в следующих ситуациях?"
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "name": "Ограничения",
    "questionTitle": "Испытываете ли Вы, в связи с инвалидностью, ограничения (дискриминацию) в получении образования, профессии, рабочих мест, в заработной плате?"
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "name": "Меры по обеспечению",
    "questionTitle": "Согласны ли Вы со следующим утверждением, что в Российской Федерации осуществляются меры по обеспечению инвалидам равных с другими людьми возможностями?"
})]);
db.questions.insertMany([EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180975"
    },
    "position": 1,
    "title": "Укажите субъект Российской Федерации в котором Вы проживаете",
    "type": "DROPDOWN",
    "answers": [
      {
        "position": 1,
        "title": "Алтайский край",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Амурская область",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Архангельская область",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Астраханская область",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Башкортостан",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Белгородская область",
        "type": "DEFAULT"
      },
      {
        "position": 7,
        "title": "Брянская область",
        "type": "DEFAULT"
      },
      {
        "position": 8,
        "title": "Владимирская область",
        "type": "DEFAULT"
      },
      {
        "position": 9,
        "title": "Волгоградская область",
        "type": "DEFAULT"
      },
      {
        "position": 10,
        "title": "Вологодская область",
        "type": "DEFAULT"
      },
      {
        "position": 11,
        "title": "Воронежская область",
        "type": "DEFAULT"
      },
      {
        "position": 12,
        "title": "Донецкая народная республика",
        "type": "DEFAULT"
      },
      {
        "position": 13,
        "title": "Еврейская автономная область",
        "type": "DEFAULT"
      },
      {
        "position": 14,
        "title": "Забайкальский край",
        "type": "DEFAULT"
      },
      {
        "position": 15,
        "title": "Запорожская область",
        "type": "DEFAULT"
      },
      {
        "position": 16,
        "title": "Ивановская область",
        "type": "DEFAULT"
      },
      {
        "position": 17,
        "title": "Иркутская область",
        "type": "DEFAULT"
      },
      {
        "position": 18,
        "title": "Кабардино-Балкария",
        "type": "DEFAULT"
      },
      {
        "position": 19,
        "title": "Калининградская область",
        "type": "DEFAULT"
      },
      {
        "position": 20,
        "title": "Калужская область",
        "type": "DEFAULT"
      },
      {
        "position": 21,
        "title": "Камчатский край",
        "type": "DEFAULT"
      },
      {
        "position": 22,
        "title": "Карачаево-Черкесия",
        "type": "DEFAULT"
      },
      {
        "position": 23,
        "title": "Кемеровская область",
        "type": "DEFAULT"
      },
      {
        "position": 24,
        "title": "Кировская область",
        "type": "DEFAULT"
      },
      {
        "position": 25,
        "title": "Костромская область",
        "type": "DEFAULT"
      },
      {
        "position": 26,
        "title": "Краснодарский край",
        "type": "DEFAULT"
      },
      {
        "position": 27,
        "title": "Красноярский край",
        "type": "DEFAULT"
      },
      {
        "position": 28,
        "title": "Курганская область",
        "type": "DEFAULT"
      },
      {
        "position": 29,
        "title": "Курская область",
        "type": "DEFAULT"
      },
      {
        "position": 30,
        "title": "Ленинградская область",
        "type": "DEFAULT"
      },
      {
        "position": 31,
        "title": "Липецкая область",
        "type": "DEFAULT"
      },
      {
        "position": 32,
        "title": "Луганская народная республика",
        "type": "DEFAULT"
      },
      {
        "position": 33,
        "title": "Магаданская область",
        "type": "DEFAULT"
      },
      {
        "position": 34,
        "title": "г. Москва",
        "type": "DEFAULT"
      },
      {
        "position": 35,
        "title": "Московская область",
        "type": "DEFAULT"
      },
      {
        "position": 36,
        "title": "Мурманская область",
        "type": "DEFAULT"
      },
      {
        "position": 37,
        "title": "Ненецкий автономный округ",
        "type": "DEFAULT"
      },
      {
        "position": 38,
        "title": "Нижегородская область",
        "type": "DEFAULT"
      },
      {
        "position": 39,
        "title": "Новгородская область",
        "type": "DEFAULT"
      },
      {
        "position": 40,
        "title": "Новосибирская область",
        "type": "DEFAULT"
      },
      {
        "position": 41,
        "title": "Омская область",
        "type": "DEFAULT"
      },
      {
        "position": 42,
        "title": "Оренбургская область",
        "type": "DEFAULT"
      },
      {
        "position": 43,
        "title": "Орловская область",
        "type": "DEFAULT"
      },
      {
        "position": 44,
        "title": "Пензенская область",
        "type": "DEFAULT"
      },
      {
        "position": 45,
        "title": "Пермский край",
        "type": "DEFAULT"
      },
      {
        "position": 46,
        "title": "Приморский край",
        "type": "DEFAULT"
      },
      {
        "position": 47,
        "title": "Псковская область",
        "type": "DEFAULT"
      },
      {
        "position": 48,
        "title": "Республика Адыгея",
        "type": "DEFAULT"
      },
      {
        "position": 49,
        "title": "Республика Алтай",
        "type": "DEFAULT"
      },
      {
        "position": 50,
        "title": "Республика Бурятия",
        "type": "DEFAULT"
      },
      {
        "position": 51,
        "title": "Республика Дагестан",
        "type": "DEFAULT"
      },
      {
        "position": 52,
        "title": "Республика Ингушетия",
        "type": "DEFAULT"
      },
      {
        "position": 53,
        "title": "Республика Калмыкия",
        "type": "DEFAULT"
      },
      {
        "position": 54,
        "title": "Республика Карелия",
        "type": "DEFAULT"
      },
      {
        "position": 55,
        "title": "Республика Коми",
        "type": "DEFAULT"
      },
      {
        "position": 56,
        "title": "Республика Крым",
        "type": "DEFAULT"
      },
      {
        "position": 57,
        "title": "Республика Марий Эл",
        "type": "DEFAULT"
      },
      {
        "position": 58,
        "title": "Республика Мордовия",
        "type": "DEFAULT"
      },
      {
        "position": 59,
        "title": "Республика Северная Осетия - Алания",
        "type": "DEFAULT"
      },
      {
        "position": 60,
        "title": "Республика Татарстан",
        "type": "DEFAULT"
      },
      {
        "position": 61,
        "title": "Республика Тыва",
        "type": "DEFAULT"
      },
      {
        "position": 62,
        "title": "Республика Удмуртия",
        "type": "DEFAULT"
      },
      {
        "position": 63,
        "title": "Республика Хакасия",
        "type": "DEFAULT"
      },
      {
        "position": 64,
        "title": "Республика Чечня",
        "type": "DEFAULT"
      },
      {
        "position": 65,
        "title": "Ростовская область",
        "type": "DEFAULT"
      },
      {
        "position": 66,
        "title": "Рязанская область",
        "type": "DEFAULT"
      },
      {
        "position": 67,
        "title": "Самарская область",
        "type": "DEFAULT"
      },
      {
        "position": 68,
        "title": "г. Санкт-Петербург",
        "type": "DEFAULT"
      },
      {
        "position": 69,
        "title": "Саратовская область",
        "type": "DEFAULT"
      },
      {
        "position": 70,
        "title": "Саха (Якутия)",
        "type": "DEFAULT"
      },
      {
        "position": 71,
        "title": "Сахалинская область",
        "type": "DEFAULT"
      },
      {
        "position": 72,
        "title": "Свердловская область",
        "type": "DEFAULT"
      },
      {
        "position": 73,
        "title": "Севастополь",
        "type": "DEFAULT"
      },
      {
        "position": 74,
        "title": "Смоленская область",
        "type": "DEFAULT"
      },
      {
        "position": 75,
        "title": "Ставропольский край",
        "type": "DEFAULT"
      },
      {
        "position": 76,
        "title": "Тамбовская область",
        "type": "DEFAULT"
      },
      {
        "position": 77,
        "title": "Тверская область",
        "type": "DEFAULT"
      },
      {
        "position": 78,
        "title": "Томская область",
        "type": "DEFAULT"
      },
      {
        "position": 79,
        "title": "Тульская область",
        "type": "DEFAULT"
      },
      {
        "position": 80,
        "title": "Тюменская область",
        "type": "DEFAULT"
      },
      {
        "position": 81,
        "title": "Ульяновская область",
        "type": "DEFAULT"
      },
      {
        "position": 82,
        "title": "Хабаровский край",
        "type": "DEFAULT"
      },
      {
        "position": 83,
        "title": "Ханты-Мансийский автономный округ – Югра",
        "type": "DEFAULT"
      },
      {
        "position": 84,
        "title": "Херсонская  область",
        "type": "DEFAULT"
      },
      {
        "position": 85,
        "title": "Челябинская область",
        "type": "DEFAULT"
      },
      {
        "position": 86,
        "title": "Чувашская республика",
        "type": "DEFAULT"
      },
      {
        "position": 87,
        "title": "Чукотский автономный округ",
        "type": "DEFAULT"
      },
      {
        "position": 88,
        "title": "Ямало-Ненецкий автономный округ",
        "type": "DEFAULT"
      },
      {
        "position": 89,
        "title": "Ярославская область",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180976"
    },
    "position": 2,
    "title": "Из каких источников Вы получаете необходимую информацию о своих правах:",
    "type": "MULTIPLE",
    "answers": [
      {
        "position": 1,
        "title": "Интернет - официальные сайты органов власти, организаций предоставляющих государственные услуги (учреждения социальной защиты, медико-социальной экспертизы, Социальный фонд России, Центр занятости, др.), общественных организации инвалидов",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Работники системы социальной защиты населения",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Медицинские работники",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Родственники, друзья, знакомые",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Телевидение",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Газеты, журналы",
        "type": "DEFAULT"
      },
      {
        "position": 7,
        "title": "Радио",
        "type": "DEFAULT"
      },
      {
        "position": 8,
        "title": "Мессенджеры (Viber, WhatsApp, Telegram)",
        "type": "DEFAULT"
      },
      {
        "position": 9,
        "title": "Социальные сети",
        "type": "DEFAULT"
      },
      {
        "position": 10,
        "title": "Другое (укажите)",
        "content": null,
        "type": "FREE_TEXT"
      },
      {
        "position": 11,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180977"
    },
    "position": 3,
    "title": "Какие способы получения информации о правах доступны для Вас:",
    "type": "MULTIPLE",
    "answers": [
      {
        "position": 1,
        "title": "Стационарный телефон в т.ч. с усилителем звука",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Мобильный телефон",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Интернет",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Телевизионные передачи",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Телевизионные передачи - чтения субтитров",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Телевизионные передачи посредством перевода на русский жестовый язык",
        "type": "DEFAULT"
      },
      {
        "position": 7,
        "title": "Печатные издания, выполненные шрифтом Брайля",
        "type": "DEFAULT"
      },
      {
        "position": 8,
        "title": "Газеты",
        "type": "DEFAULT"
      },
      {
        "position": 9,
        "title": "Радио",
        "type": "DEFAULT"
      },
      {
        "position": 10,
        "title": "Мессенджеры (Viber, WhatsApp,Telegtam)",
        "type": "DEFAULT"
      },
      {
        "position": 11,
        "title": "Социальные сети",
        "type": "DEFAULT"
      },
      {
        "position": 12,
        "title": "Другое (укажите)",
        "content": null,
        "type": "FREE_TEXT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180978"
    },
    "position": 4,
    "title": "О местах размещения доступных объектов",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180979"
    },
    "position": 5,
    "title": "О порядке переосвидетельствования",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097a"
    },
    "position": 6,
    "title": "О поставщиках реабилитационных услуг",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097b"
    },
    "position": 7,
    "title": "О порядке получения технических средств реабилитации",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097c"
    },
    "position": 8,
    "title": "О порядке предоставления санаторно-курортного лечения",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097d"
    },
    "position": 9,
    "title": "О возможности и порядке выбора места жительства",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097e"
    },
    "position": 10,
    "title": "О возможности получения образования в образовательных организациях со здоровыми сверстниками",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818097f"
    },
    "position": 11,
    "title": "О возможности приспособления жилого помещения и рабочего места в соответствии с нуждами инвалида",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180980"
    },
    "position": 12,
    "title": "О возможности предоставления персонального помощника при получении различных услуг",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180981"
    },
    "position": 13,
    "title": "О возможности сопровождаемого проживания",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180982"
    },
    "position": 14,
    "title": "О возможности получения вспомогательных услуг (каких)",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "В полной мере владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Владею только самыми необходимыми знаниями",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Ощущаю недостаток информации",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Не владею информацией",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180983"
    },
    "position": 15,
    "title": "Другие (укажите)",
    "type": "FREE_TEXT",
    "content": null,
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f6"
    },
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180984"
    },
    "position": 16,
    "title": "Право на благоприятные условия труда",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180985"
    },
    "position": 17,
    "title": "Право на социальное обеспечение",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180986"
    },
    "position": 18,
    "title": "Право на достаточный жизненный уровень",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180987"
    },
    "position": 19,
    "title": "Право на здоровье",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180988"
    },
    "position": 20,
    "title": "Право на образование",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180989"
    },
    "position": 21,
    "title": "Право на интеллектуальную собственность",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098a"
    },
    "position": 22,
    "title": "Право на участие в культурной жизни и на пользование результатами научного прогресса",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098b"
    },
    "position": 23,
    "title": "Право на жизнь, неприкосновенность личности и др.",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098c"
    },
    "position": 24,
    "title": "Выбор места жительства",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098d"
    },
    "position": 25,
    "title": "Право на управление делами государства",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098e"
    },
    "position": 26,
    "title": "Право на участие в политических объединениях",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a09619818098f"
    },
    "position": 27,
    "title": "Право на обращения в различные инстанции",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180990"
    },
    "position": 28,
    "title": "Право на семью, брак, отцовство, материнство",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180991"
    },
    "position": 29,
    "title": "Владение имуществом и его наследование (включая деньги, ценные бумаги)",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180992"
    },
    "position": 30,
    "title": "Управление собственными финансовыми делами",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180993"
    },
    "position": 31,
    "title": "Доступ к банковским ссудам, ипотечным кредитам и другим формам финансового кредитования",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180994"
    },
    "position": 32,
    "title": "Правами потребителя на оказание услуг, выполнение работ, право на интеллектуальную собственность",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да, полностью",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Да, частично",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666ca9a27d6a096198180995"
    },
    "position": 33,
    "title": "Другие (укажите)",
    "type": "FREE_TEXT",
    "content": null,
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f7"
    },
    "answers": []
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5ca"
    },
    "position": 34,
    "title": "Получение услуг (объекты общепита, торговля и др.)",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5cb"
    },
    "position": 35,
    "title": "Отказ в трудоустройстве",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5cc"
    },
    "position": 36,
    "title": "Отказ в получении образования по месту жительства",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5cd"
    },
    "position": 37,
    "title": "Медицинской помощи (нет условий, специального оборудования, специалиста)",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5ce"
    },
    "position": 38,
    "title": "Отсутствие информации на доступном языке (русский язык жестов, штифт Брайля, криптограммы, общение с использованием альтернативной и дополнительной коммуникации и др.)",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет, не соблюдаются",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5cf"
    },
    "position": 39,
    "title": "Другoе (укажите)",
    "type": "FREE_TEXT",
    "content": null,
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f8"
    },
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d0"
    },
    "position": 40,
    "title": "В получении образования",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d1"
    },
    "position": 41,
    "title": "В получении профессии",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d2"
    },
    "position": 42,
    "title": "В получении рабочего места",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d3"
    },
    "position": 43,
    "title": "В заработной плате",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d4"
    },
    "position": 44,
    "title": "В общении с близкими",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d5"
    },
    "position": 45,
    "title": "В общении с другими людьми, сверстниками",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d6"
    },
    "position": 46,
    "title": "В занятиях спортом",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d7"
    },
    "position": 47,
    "title": "В отдыхе",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d8"
    },
    "position": 48,
    "title": "В приобщении к культуре",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Не было необходимости",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5d9"
    },
    "position": 49,
    "title": "Других вопросах (каких конкретно укажите)",
    "type": "FREE_TEXT",
    "content": null,
    "categoryId": {
      "$oid": "666c73d47d6a0961981808f9"
    },
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5da"
    },
    "position": 50,
    "title": "Материальной поддержке",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5db"
    },
    "position": 51,
    "title": "Образованию",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5dc"
    },
    "position": 52,
    "title": "Труду",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5dd"
    },
    "position": 53,
    "title": "По созданию семьи",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5de"
    },
    "position": 54,
    "title": "Рождению детей",
    "categoryId": {
      "$oid": "666c73d47d6a0961981808fa"
    },
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "666eb311545ffe0359cdf5df"
    },
    "position": 55,
    "title": "С Вашей точки зрения, какое понятие должно быть закреплено нормативными актами, обозначающий человека, с ограниченными возможностями здоровья, нуждающегося в мерах социальной помощи, поддержки и защиты?",
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Инвалид",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Человек с ограниченными возможностями здоровья",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Человек с инвалидностью",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Лицо с инвалидностью",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Гражданин с инвалидностью",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Свой вариант (укажите)",
        "content": null,
        "type": "FREE_TEXT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667593469abcf461870c1502"
    },
    "position": 56,
    "title": "Испытываете ли Вы какое-либо негативное отношение, предубеждение со стороны окружающих, незнакомых людей?",
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Встречались единичные высказывания",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Да, время от времени их встречаю",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Свой вариант (укажите)",
        "content": null,
        "type": "FREE_TEXT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667593469abcf461870c1503"
    },
    "position": 57,
    "title": "Как Вы считаете, в целом отношение к инвалидам в нашем обществе за последние 5-10 лет улучшилось, ухудшилось или осталось без изменений?",
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Улучшилось",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Ухудшилось",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Осталось без изменений",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667593469abcf461870c1504"
    },
    "position": 58,
    "title": "Как Вы считаете, достаточно или не достаточно внимания уделяется государством проблемам инвалидов в настоящее время?",
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Уделяется много внимания",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Уделяется достаточно внимания",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Уделяется мало внимания",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667593469abcf461870c1505"
    },
    "position": 59,
    "title": "С каким отношением Вы обычно сталкиваетесь со стороны незнакомых людей (например, в общественных местах, либо на улице)?",
    "type": "MULTIPLE",
    "answers": [
      {
        "position": 1,
        "title": "Доброжелательное",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нейтральное/безразличное",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Негативное/враждебное",
        "type": "DEFAULT"
      },
      {
        "position": 4,
        "title": "Сострадание",
        "type": "DEFAULT"
      },
      {
        "position": 5,
        "title": "Готовность помочь",
        "type": "DEFAULT"
      },
      {
        "position": 6,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      },
      {
        "position": 7,
        "title": "Другое (укажите)",
        "content": null,
        "type": "FREE_TEXT"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667593469abcf461870c1506"
    },
    "position": 60,
    "title": "Есть ли у Вас трудности в общении с ближайшим окружением в связи с инвалидностью?",
    "type": "SINGLE",
    "answers": [
      {
        "position": 1,
        "title": "Да",
        "type": "DEFAULT"
      },
      {
        "position": 2,
        "title": "Нет",
        "type": "DEFAULT"
      },
      {
        "position": 3,
        "title": "Затрудняюсь ответить",
        "type": "DEFAULT"
      }
    ]
})]);
db.tests.insertMany([EJSON.deserialize({
    "_id": {
      "$oid": "667a8c842e158c4924b46bb7"
    },
    "position": 1,
    "questions": [
      {
        "$oid": "666ca9a27d6a096198180975"
      },
      {
        "$oid": "666ca9a27d6a096198180976"
      },
      {
        "$oid": "666ca9a27d6a096198180977"
      },
      {
        "$oid": "666ca9a27d6a096198180978"
      },
      {
        "$oid": "666ca9a27d6a096198180979"
      },
      {
        "$oid": "666ca9a27d6a09619818097a"
      },
      {
        "$oid": "666ca9a27d6a09619818097b"
      },
      {
        "$oid": "666ca9a27d6a09619818097c"
      },
      {
        "$oid": "666ca9a27d6a09619818097d"
      },
      {
        "$oid": "666ca9a27d6a09619818097e"
      },
      {
        "$oid": "666ca9a27d6a09619818097f"
      },
      {
        "$oid": "666ca9a27d6a096198180980"
      },
      {
        "$oid": "666ca9a27d6a096198180981"
      },
      {
        "$oid": "666ca9a27d6a096198180982"
      },
      {
        "$oid": "666ca9a27d6a096198180983"
      },
      {
        "$oid": "666ca9a27d6a096198180984"
      },
      {
        "$oid": "666ca9a27d6a096198180985"
      },
      {
        "$oid": "666ca9a27d6a096198180986"
      },
      {
        "$oid": "666ca9a27d6a096198180987"
      },
      {
        "$oid": "666ca9a27d6a096198180988"
      },
      {
        "$oid": "666ca9a27d6a096198180989"
      },
      {
        "$oid": "666ca9a27d6a09619818098a"
      },
      {
        "$oid": "666ca9a27d6a09619818098b"
      },
      {
        "$oid": "666ca9a27d6a09619818098c"
      },
      {
        "$oid": "666ca9a27d6a09619818098d"
      },
      {
        "$oid": "666ca9a27d6a09619818098e"
      },
      {
        "$oid": "666ca9a27d6a09619818098f"
      },
      {
        "$oid": "666ca9a27d6a096198180990"
      },
      {
        "$oid": "666ca9a27d6a096198180991"
      },
      {
        "$oid": "666ca9a27d6a096198180992"
      },
      {
        "$oid": "666ca9a27d6a096198180993"
      },
      {
        "$oid": "666ca9a27d6a096198180994"
      },
      {
        "$oid": "666ca9a27d6a096198180995"
      },
      {
        "$oid": "666eb311545ffe0359cdf5ca"
      },
      {
        "$oid": "666eb311545ffe0359cdf5cb"
      },
      {
        "$oid": "666eb311545ffe0359cdf5cc"
      },
      {
        "$oid": "666eb311545ffe0359cdf5cd"
      },
      {
        "$oid": "666eb311545ffe0359cdf5ce"
      },
      {
        "$oid": "666eb311545ffe0359cdf5cf"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d0"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d1"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d2"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d3"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d4"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d5"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d6"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d7"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d8"
      },
      {
        "$oid": "666eb311545ffe0359cdf5d9"
      },
      {
        "$oid": "666eb311545ffe0359cdf5da"
      },
      {
        "$oid": "666eb311545ffe0359cdf5db"
      },
      {
        "$oid": "666eb311545ffe0359cdf5dc"
      },
      {
        "$oid": "666eb311545ffe0359cdf5dd"
      },
      {
        "$oid": "666eb311545ffe0359cdf5de"
      },
      {
        "$oid": "666eb311545ffe0359cdf5df"
      },
      {
        "$oid": "667593469abcf461870c1502"
      },
      {
        "$oid": "667593469abcf461870c1503"
      },
      {
        "$oid": "667593469abcf461870c1504"
      },
      {
        "$oid": "667593469abcf461870c1505"
      },
      {
        "$oid": "667593469abcf461870c1506"
      }
    ]
  }),
  EJSON.deserialize({
    "_id": {
      "$oid": "667a8c842e158c4924b46bb8"
    },
    "position": 2,
    "questions": []
})]);