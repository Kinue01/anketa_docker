<script>
import Question from "./QuestionsComponent.vue";

export default {
  components: {
    Question,
  },
  data() {
    return {
      questions: [],
        /*{
          position: 1,
          title:
            "1. Укажите субъект Российской Федерации в котором Вы проживаете",
          type: "DROPDOWN",
          answers: [
            {
              position: 1,
              title: "Алтайский край",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Амурская область",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Архангельская область",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Астраханская область",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Башкортостан",
              type: "DEFAULT",
            },
            {
              position: 6,
              title: "Белгородская область",
              type: "DEFAULT",
            },
            {
              position: 7,
              title: "Брянская область",
              type: "DEFAULT",
            },
            {
              position: 8,
              title: "Владимирская область",
              type: "DEFAULT",
            },
            {
              position: 9,
              title: "Волгоградская область",
              type: "DEFAULT",
            },
            {
              position: 10,
              title: "Вологодская область",
              type: "DEFAULT",
            },
            {
              position: 11,
              title: "Воронежская область",
              type: "DEFAULT",
            },
            {
              position: 12,
              title: "Донецкая народная республика",
              type: "DEFAULT",
            },
            {
              position: 13,
              title: "Еврейская автономная область",
              type: "DEFAULT",
            },
            {
              position: 14,
              title: "Забайкальский край",
              type: "DEFAULT",
            },
            {
              position: 15,
              title: "Запорожская область",
              type: "DEFAULT",
            },
            {
              position: 16,
              title: "Ивановская область",
              type: "DEFAULT",
            },
            {
              position: 17,
              title: "Иркутская область",
              type: "DEFAULT",
            },
            {
              position: 18,
              title: "Кабардино-Балкария",
              type: "DEFAULT",
            },
            {
              position: 19,
              title: "Калининградская область",
              type: "DEFAULT",
            },
            {
              position: 20,
              title: "Калужская область",
              type: "DEFAULT",
            },
            {
              position: 21,
              title: "Камчатский край",
              type: "DEFAULT",
            },
            {
              position: 22,
              title: "Карачаево-Черкесия",
              type: "DEFAULT",
            },
            {
              position: 23,
              title: "Кемеровская область",
              type: "DEFAULT",
            },
            {
              position: 24,
              title: "Кировская область",
              type: "DEFAULT",
            },
            {
              position: 25,
              title: "Костромская область",
              type: "DEFAULT",
            },
            {
              position: 26,
              title: "Краснодарский край",
              type: "DEFAULT",
            },
            {
              position: 27,
              title: "Красноярский край",
              type: "DEFAULT",
            },
            {
              position: 28,
              title: "Курганская область",
              type: "DEFAULT",
            },
            {
              position: 29,
              title: "Курская область",
              type: "DEFAULT",
            },
            {
              position: 30,
              title: "Ленинградская область",
              type: "DEFAULT",
            },
            {
              position: 31,
              title: "Липецкая область",
              type: "DEFAULT",
            },
            {
              position: 32,
              title: "Луганская народная республика",
              type: "DEFAULT",
            },
            {
              position: 33,
              title: "Магаданская область",
              type: "DEFAULT",
            },
            {
              position: 34,
              title: "г. Москва",
              type: "DEFAULT",
            },
            {
              position: 35,
              title: "Московская область",
              type: "DEFAULT",
            },
            {
              position: 36,
              title: "Мурманская область",
              type: "DEFAULT",
            },
            {
              position: 37,
              title: "Ненецкий автономный округ",
              type: "DEFAULT",
            },
            {
              position: 38,
              title: "Нижегородская область",
              type: "DEFAULT",
            },
            {
              position: 39,
              title: "Новгородская область",
              type: "DEFAULT",
            },
            {
              position: 40,
              title: "Новосибирская область",
              type: "DEFAULT",
            },
            {
              position: 41,
              title: "Омская область",
              type: "DEFAULT",
            },
            {
              position: 42,
              title: "Оренбургская область",
              type: "DEFAULT",
            },
            {
              position: 43,
              title: "Орловская область",
              type: "DEFAULT",
            },
            {
              position: 44,
              title: "Пензенская область",
              type: "DEFAULT",
            },
            {
              position: 45,
              title: "Пермский край",
              type: "DEFAULT",
            },
            {
              position: 46,
              title: "Приморский край",
              type: "DEFAULT",
            },
            {
              position: 47,
              title: "Псковская область",
              type: "DEFAULT",
            },
            {
              position: 48,
              title: "Республика Адыгея",
              type: "DEFAULT",
            },
            {
              position: 49,
              title: "Республика Алтай",
              type: "DEFAULT",
            },
            {
              position: 50,
              title: "Республика Бурятия",
              type: "DEFAULT",
            },
            {
              position: 51,
              title: "Республика Дагестан",
              type: "DEFAULT",
            },
            {
              position: 52,
              title: "Республика Ингушетия",
              type: "DEFAULT",
            },
            {
              position: 53,
              title: "Республика Калмыкия",
              type: "DEFAULT",
            },
            {
              position: 54,
              title: "Республика Карелия",
              type: "DEFAULT",
            },
            {
              position: 55,
              title: "Республика Коми",
              type: "DEFAULT",
            },
            {
              position: 56,
              title: "Республика Крым",
              type: "DEFAULT",
            },
            {
              position: 57,
              title: "Республика Марий Эл",
              type: "DEFAULT",
            },
            {
              position: 58,
              title: "Республика Мордовия",
              type: "DEFAULT",
            },
            {
              position: 59,
              title: "Республика Северная Осетия - Алания",
              type: "DEFAULT",
            },
            {
              position: 60,
              title: "Республика Татарстан",
              type: "DEFAULT",
            },
            {
              position: 61,
              title: "Республика Тыва",
              type: "DEFAULT",
            },
            {
              position: 62,
              title: "Республика Удмуртия",
              type: "DEFAULT",
            },
            {
              position: 63,
              title: "Республика Хакасия",
              type: "DEFAULT",
            },
            {
              position: 64,
              title: "Республика Чечня",
              type: "DEFAULT",
            },
            {
              position: 65,
              title: "Ростовская область",
              type: "DEFAULT",
            },
            {
              position: 66,
              title: "Рязанская область",
              type: "DEFAULT",
            },
            {
              position: 67,
              title: "Самарская область",
              type: "DEFAULT",
            },
            {
              position: 68,
              title: "г. Санкт-Петербург",
              type: "DEFAULT",
            },
            {
              position: 69,
              title: "Саратовская область",
              type: "DEFAULT",
            },
            {
              position: 70,
              title: "Саха (Якутия)",
              type: "DEFAULT",
            },
            {
              position: 71,
              title: "Сахалинская область",
              type: "DEFAULT",
            },
            {
              position: 72,
              title: "Свердловская область",
              type: "DEFAULT",
            },
            {
              position: 73,
              title: "Севастополь",
              type: "DEFAULT",
            },
            {
              position: 74,
              title: "Смоленская область",
              type: "DEFAULT",
            },
            {
              position: 75,
              title: "Ставропольский край",
              type: "DEFAULT",
            },
            {
              position: 76,
              title: "Тамбовская область",
              type: "DEFAULT",
            },
            {
              position: 77,
              title: "Тверская область",
              type: "DEFAULT",
            },
            {
              position: 78,
              title: "Томская область",
              type: "DEFAULT",
            },
            {
              position: 79,
              title: "Тульская область",
              type: "DEFAULT",
            },
            {
              position: 80,
              title: "Тюменская область",
              type: "DEFAULT",
            },
            {
              position: 81,
              title: "Ульяновская область",
              type: "DEFAULT",
            },
            {
              position: 82,
              title: "Хабаровский край",
              type: "DEFAULT",
            },
            {
              position: 83,
              title: "Ханты-Мансийский автономный округ – Югра",
              type: "DEFAULT",
            },
            {
              position: 84,
              title: "Херсонская  область",
              type: "DEFAULT",
            },
            {
              position: 85,
              title: "Челябинская область",
              type: "DEFAULT",
            },
            {
              position: 86,
              title: "Чувашская республика",
              type: "DEFAULT",
            },
            {
              position: 87,
              title: "Чукотский автономный округ",
              type: "DEFAULT",
            },
            {
              position: 88,
              title: "Ямало-Ненецкий автономный округ",
              type: "DEFAULT",
            },
            {
              position: 89,
              title: "Ярославская область",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 2,
          title:
            "2. Из каких источников Вы получаете необходимую информацию о своих правах:",
          type: "MULTIPLE",
          answers: [
            {
              position: 1,
              title:
                "Интернет - официальные сайты органов власти, организаций предоставляющих государственные услуги (учреждения социальной защиты, медико-социальной экспертизы, Социальный фонд России, Центр занятости, др.), общественных организации инвалидов",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Работники системы социальной защиты населения",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Медицинские работники",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Родственники, друзья, знакомые",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Телевидение",
              type: "DEFAULT",
            },
            {
              position: 6,
              title: "Газеты, журналы",
              type: "DEFAULT",
            },
            {
              position: 7,
              title: "Радио",
              type: "DEFAULT",
            },
            {
              position: 8,
              title: "Мессенджеры (Viber, WhatsApp, Telegram)",
              type: "DEFAULT",
            },
            {
              position: 9,
              title: "Социальные сети",
              type: "DEFAULT",
            },
            {
              position: 10,
              title: "Другое (укажите)",
              content: "",
              type: "FREE_TEXT",
            },
            {
              position: 11,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 3,
          title:
            "3. Какие способы получения информации о правах доступны для Вас:",
          type: "MULTIPLE",
          answers: [
            {
              position: 1,
              title: "Стационарный телефон в т.ч. с усилителем звука",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Мобильный телефон",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Интернет",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Телевизионные передачи",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Телевизионные передачи - чтения субтитров",
              type: "DEFAULT",
            },
            {
              position: 6,
              title:
                "Телевизионные передачи посредством перевода на русский жестовый язык",
              type: "DEFAULT",
            },
            {
              position: 7,
              title: "Печатные издания, выполненные шрифтом Брайля",
              type: "DEFAULT",
            },
            {
              position: 8,
              title: "Газеты",
              type: "DEFAULT",
            },
            {
              position: 9,
              title: "Радио",
              type: "DEFAULT",
            },
            {
              position: 10,
              title: "Мессенджеры (Viber, WhatsApp,Telegtam)",
              type: "DEFAULT",
            },
            {
              position: 11,
              title: "Социальные сети",
              type: "DEFAULT",
            },
            {
              position: 12,
              title: "Другое (укажите)",
              content: null,
              type: "FREE_TEXT",
            },
          ],
        },
        {
          position: 4,
          title: "4. О местах размещения доступных объектов",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 5,
          title: "О порядке переосвидетельствования",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 6,
          title: "О поставщиках реабилитационных услуг",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 7,
          title: "О порядке получения технических средств реабилитации",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 8,
          title: "О порядке предоставления санаторно-курортного лечения",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 9,
          title: "О возможности и порядке выбора места жительства",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 10,
          title:
            "О возможности получения образования в образовательных организациях со здоровыми сверстниками",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 11,
          title:
            "О возможности приспособления жилого помещения и рабочего места в соответствии с нуждами инвалида",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 12,
          title:
            "О возможности предоставления персонального помощника при получении различных услуг",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 13,
          title: "О возможности сопровождаемого проживания",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 14,
          title: "О возможности получения вспомогательных услуг (каких)",
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
          type: "SINGLE",
          answers: [
            {
              position: 1,
              title: "В полной мере владею информацией",
              type: "DEFAULT",
            },
            {
              position: 2,
              title: "Владею только самыми необходимыми знаниями",
              type: "DEFAULT",
            },
            {
              position: 3,
              title: "Ощущаю недостаток информации",
              type: "DEFAULT",
            },
            {
              position: 4,
              title: "Не владею информацией",
              type: "DEFAULT",
            },
            {
              position: 5,
              title: "Затрудняюсь ответить",
              type: "DEFAULT",
            },
          ],
        },
        {
          position: 15,
          title: "Другие (укажите)",
          type: "FREE_TEXT",
          content: null,
          categoryId: {
            $ref: "categories",
            $id: { $oid: "666c73d47d6a0961981808f6" },
          },
        },
      ],*/
    };
  },
  mounted() {
    let url = "";
    if (this.$route.params.p == "1") {
      url = "http://localhost:5000?q=tests&p=1";
    }
    else {
      url = "http://localhost:5000?q=tests&p=2";
    }
    fetch(url).then(res => {
      res.json().then(data => {
        this.questions = data
      })
    });
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
};
</script>

<template>
  <div>
    <div class="vopros">
      <div class="button">
          <input type="submit" value="Назад" @click.prevent="goToHome" />
      </div>
      <Question :questions="questions" />
    </div>
  </div>
</template>
