<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useIntersectionObserver, useMediaQuery } from '@vueuse/core'

const isLg = useMediaQuery('(min-width: 1024px)')

const targetUrlAuth = ref('https://app.harmex.ru/auth')

const resultInfo = ref([
  {
    img: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card1.png',
    imgMobile:
      'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card1Mobile.png',
    title: 'Больше продаж, больше охватов, больше прибыли',
    subtitle:
      'Создайте узнаваемость бренда, даже если вы только начинаете. С Harmex выход на популярные площадки становится в разы проще и быстрее. Вам не нужно разбираться в сложных алгоритмах и системах — достаточно базовых знаний и наших доступных инструментов.',
  },
  {
    img: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card2.png',
    imgMobile:
      'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card2Mobile.png',
    title: 'Эффективность',
    subtitle:
      'Harmex создан как для новичков, так и для профессионалов. Вам не нужны технические знания или сотни часов на обучение. Разберитесь за 2-3 минуты и начните использовать инструменты из нашего каталога.',
  },
  {
    img: 'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card3.png',
    imgMobile:
      'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/Card3Mobile.png',
    title: 'Актуальность инструментов',
    subtitle:
      'С Harmex любая площадка, рынок или ниша становится доступными. Запускайте, развивайте и поддерживайте свой бизнес с минимальными усилиями. Наш ассортимент дополняется на регулярной основе.',
  },
])

const speedTasks = ref([
  {
    title: 'Инструментарий',
    subtitle:
      'Доступный каталог решений и возможность запросить то, что нужно именно вам, — это то, что делает Harmex уникальным.',
    tasks: [
      {
        task: 'Более 50 популярных площадок: ',
        description:
          'Wildberries, Ozon, Avito, Яндекс.Маркет, СберМегаМаркет и другие.',
      },
      {
        task: 'Быстрая служба заботы: ',
        description: 'Мы всегда рядом, чтобы помочь.',
      },
      {
        task: 'Полная автоматизация: ',
        description: 'Экономьте время и ресурсы, доверяя рутину нам.',
      },
    ],
  },
  {
    title: 'Персонализация',
    subtitle:
      'Наш виртуальный AI-ассистент всегда на связи, чтобы помочь вам на каждом этапе.',
    tasks: [
      {
        task: 'От постановки задачи до реализации:',
        description: 'Мы сопровождаем вас на всех этапах.',
      },
      {
        task: 'Пошаговое руководство:',
        description: 'Четкие инструкции и поддержка до достижения результата.',
      },
      {
        task: 'Управление процессом:',
        description:
          'Даже если нужно привлечь сторонних исполнителей, мы берем это на себя.',
      },
    ],
  },

  {
    title: 'Многозадачность',
    subtitle:
      'Раньше считалось, что одновременное ведение нескольких проектов приводит к выгоранию, а использование множества инструментов — к расфокусу. С Harmex этот миф разрушен навсегда.',
    tasks: [
      {
        task: 'Управление любым количеством инструментов: ',
        description: 'Все в одном месте, без хаоса.',
      },
      {
        task: 'Умные напоминания и оповещения: ',
        description: 'Ничто не ускользнет от вашего внимания.',
      },
      {
        task: 'Упрощение контроля: ',
        description:
          'Контролируйте все сферы бизнеса и жизни легко и эффективно.',
      },
    ],
  },
])

const forInfo = ref([
  {
    title: 'Это не для вас, если:',
    points: [
      'Вы не планируете продвигать и продавать свои товары и услуги.',
      'Вы не готовы повышать позиции, продажи и рейтинг на площадке.',
      'Увеличение дохода не входит в ваши приоритеты.',
      'Вы не заинтересованы в поддержке, помощи и экономии времени.',
      'Вы не готовы выстраивать отношения с покупателями.',
    ],
  },
  {
    title: 'Это для вас, если:',
    points: [
      'Вы хотите продавать больше и быстрее, используя передовые инструменты.',
      'Вы ищете саморазвивающуюся платформу, которая растет вместе с вами.',
      'Вы активны и готовы защищать свой бизнес от конкурентов и их негатива.',
      'Вы постоянно добавляете в каталог новые товары и услуги.',
      'Вы стремитесь использовать популярные площадки для создания стабильного дохода и достойного стиля жизни на долгие годы.',
    ],
  },
])

const plans = ref([
  {
    title: 'План A: Вывод в ТОП',
    description:
      'Ощутите уровень удобства, автоматизации и комфорта премиум-класса.',
    price: 'от 250 рублей',
    priceDescription: 'за услугу',
    buttonText: 'Присоединиться сейчас',
    buttonColor: 'bg-[#F6F6F6]',
    features: [
      {
        icon: 'material-symbols:check',
        title: 'Гибкие платежи:',
        description: 'Пополняйте баланс в удобной для вас валюте.',
      },
      {
        icon: 'material-symbols:check',
        title: 'Полный доступ:',
        description:
          'Наслаждайтесь всеми функциями, инструментами и поддержкой 24/7.',
      },
      {
        icon: 'material-symbols:check',
        title: 'Неограниченный ассортимент:',
        description:
          'Используйте автоматизированные решения для повышения узнаваемости и увеличения продаж.',
      },
    ],
  },
  {
    title: 'План B: AI-ассистенты',
    description:
      'Увеличьте свою продуктивность и благосостояние, используя все преимущества нашего AI-ассистента.',
    price: 'от 500 рублей',
    priceDescription: 'за инструмент',
    buttonText: 'Присоединиться сейчас',
    buttonColor: 'bg-[#FF6B00]',
    features: [
      {
        icon: 'material-symbols:check',
        title: 'Лучшее соотношение цены и качества:',
        description:
          'Экономьте больше, совершив единовременный платеж со скидкой.',
      },
      {
        icon: 'material-symbols:check',
        title: 'Полный доступ:',
        description:
          'Бесперебойный доступ ко всем функциям, инструментам и запросам.',
      },
      {
        icon: 'material-symbols:check',
        title: 'Экономически эффективно:',
        description:
          'Идеально для тех, кто стремится разгрузить себя и повысить эффективность.',
      },
    ],
  },
])

const items = [
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/2.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/3.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/4.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/5.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/6.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/7.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/8.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/9.jpg',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/1.jpg',
]

const carousel = useTemplateRef('carousel')

const nextSlide = () => {
  if (carousel.value) {
    carousel.value.emblaApi?.scrollNext()
  }
}

const prevSlide = () => {
  if (carousel.value) {
    carousel.value.emblaApi?.scrollPrev()
  }
}

const stepsInfo = ref([
  {
    title: 'Пополните баланс',
    description:
      'Вы можете пополнить баланс с физической карты, бизнес-карты или расчётного счёта — быстро и удобно.',
  },
  {
    title: 'Выберите услугу',
    description:
      'Ознакомьтесь с каталогом услуг или запросите необходимую услугу, подходящую для вашего бизнеса.',
  },
  {
    title: 'Создайте заказ',
    description:
      'Запланируйте выполнение заказа в любое удобное время — услуга будет выполнена точно в срок.',
  },
  {
    title: 'Получите отчетность',
    description:
      'Вся информация о финансовых операциях, выполнении услуг и результатах доступна в вашем личном кабинете.',
  },
])

const scrollContainer = ref([])
const scrollPositions = ref([])

const handleScroll = () => {
  scrollContainer.value.forEach((el, index) => {
    if (el) {
      const rect = el.getBoundingClientRect()
      const scrollProgress = Math.min(
        Math.max((window.innerHeight - rect.top) / window.innerHeight, 0),
        1
      )

      const maxScroll = 40
      scrollPositions.value[index] = Math.max(
        -maxScroll,
        (1 - scrollProgress) * -maxScroll
      )
    }
  })
}

const previewRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(previewRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})

const getDelay = (index: any) => `${index * 100}ms`

const scrollProgress = ref(0)

const handleImageScroll = () => {
  if (!previewRef.value) return
  const rect = previewRef.value.getBoundingClientRect()
  const windowHeight = window.innerHeight

  scrollProgress.value = Math.min(1, Math.max(rect.top / windowHeight, 0))
}

const dynamicStyle = computed(() => ({
  transform: `perspective(1845px) translateY(${
    scrollProgress.value * 18
  }px) scale(${1 + scrollProgress.value * 0.09}) rotateX(${
    scrollProgress.value * 18
  }deg)`,
  transition: 'transform 0.3s ease-out',
}))

const previewImages = ref([
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/yandexMarket.png',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/magnitMarket.png',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/sberMarket.png',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/avito.png',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/ozon.png',
  'https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/wb.png',
])

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()

  isVisible.value = true
  window.addEventListener('scroll', handleImageScroll)
  handleImageScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('scroll', handleImageScroll)
})
</script>

<template>
  <section ref="previewRef" class="preview padding__block">
    <div class="preview__content">
      <h1
        class="preview__title transition-all duration-700 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
        :style="{ transitionDelay: getDelay(0) }"
      >
        Внеконкурентные инструменты для маркетплейсов в одном интерфейсе!
      </h1>
      <p
        class="preview__text transition-all duration-700 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
        :style="{ transitionDelay: getDelay(1) }"
      >
        Выведите карточку в ТОП, увеличьте продажи на
        <strong class="text-black">+30%</strong> и поднимите рейтинг выше 4.7
        всего за <strong class="text-black">14</strong> дней — без сложных
        настроек и потери бюджета!
      </p>
      <div
        class="preview__buttons transition-all duration-700 ease-out"
        :class="
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        "
        :style="{ transitionDelay: getDelay(2) }"
      >
        <a
          :href="targetUrlAuth"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Попробовать сейчас
          <Icon name="charm:arrow-right" class="ml-2" />
        </a>
        <a
          :href="targetUrlAuth"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-glass"
          >Гайд</a
        >
      </div>
    </div>
    <div
      class="preview__images transition-all duration-700 ease-out"
      :class="
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      "
      :style="{ transitionDelay: getDelay(3) }"
    >
      <div class="preview__images__block flex flex-nowrap gap-4 z-2">
        <div
          v-for="(image, index) in previewImages.slice(0, 3)"
          class="preview__images__item"
          :class="{
            'bg-[#f8f8f8]': index < 2,
            'bg-white': index >= 2,
            'rotate-[3deg]': index === 0,
            'rotate-[2deg]': index === 1,
            'rotate-[-2deg]': index === 2,
          }"
        >
          <img :src="image" alt="Preview" class="w-full" loading="lazy" />
        </div>
      </div>
      <div class="preview__images__block flex flex-nowrap gap-4 relative">
        <div
          v-for="(image, index) in previewImages.slice(3, 6)"
          class="preview__images__item relative"
          :class="{
            'bg-[#f8f8f8]': index < 4,
            // 'bg-[#f8f8f8]': index >= 1,
            'rotate-[-5deg]': index === 0,
            'rotate-[-2deg]': index === 1,
            'rotate-[-3deg]': index === 2,
          }"
        >
          <img :src="image" alt="Preview" class="w-full" loading="lazy" />
        </div>

        <div
          class="absolute inset-0 z-[-1] filter blur-[40px] translate-y-[30%] bg-gradient-to-r from-[#4778F5] via-[#924FE8] to-[#E6483D] opacity-50"
        ></div>
      </div>
    </div>
  </section>
  <section class="preview__background mt-7 lg:mt-0">
    <img
      ref="previewRef"
      src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/preview__background.png"
      alt="Каталог"
      class="preview__background__img transition-transform duration-500 ease-out"
      loading="lazy"
      :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
      :style="isLg ? dynamicStyle : ''"
    />
  </section>

  <section class="result" id="result">
    <div class="result__text padding__block">
      <p class="default__subtitle">Результат</p>
      <h2 class="default__title max-w-[752px]">
        AI-система Harmex выводит ваши товары и услуги в ТОП рекомендаций.
      </h2>
    </div>

    <div
      v-for="(item, index) in resultInfo"
      :key="index"
      class="default__steps padding__block"
      :class="
        index % 2 === 0 ? 'lg:!pl-0 justify-start' : 'lg:!pr-0 justify-end'
      "
    >
      <img
        :src="`${isLg ? item.img : item.imgMobile}?t=${Date.now()}`"
        alt="Card img"
        class="default__steps__img max-h-[350px] object-contain"
        :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
      />

      <div
        class="default__steps__text"
        :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
      >
        <h3 class="default__steps__title">{{ item.title }}</h3>
        <p class="default__steps__subtitle">{{ item.subtitle }}</p>
      </div>
    </div>
  </section>

  <section id="speed" class="speed default-nav padding__block">
    <p class="default__subtitle">Скорость</p>

    <h2 class="default__title !text-left max-w-[300px] sm:max-w-[620px]">
      Пока вы думаете, кто-то выходит в ТОП
    </h2>

    <span class="default-nav__text">
      <p>Привет, Харм на связи.</p>
      <p>
        Я всегда считал, что для успешного запуска и развития бизнеса по продаже
        товаров и услуг необходимы правильные инструменты.
      </p>
      <p>Инструменты, которые будут:</p>
    </span>

    <div class="speed__advantages">
      <Icon
        name="material-symbols-light:database-outline"
        class="lg:!w-6 lg:!h-6 !w-5 !h-5 text-primary shrink-0"
      />
      <span class="speed__advantages__text"
        >Безопасны — без рисков для репутации и финансов.</span
      >
    </div>

    <div class="speed__advantages">
      <Icon
        name="lucide:user-round-search"
        class="lg:!w-6 lg:!h-6 !w-5 !h-5 text-primary shrink-0"
      />
      <span class="speed__advantages__text"
        >Просты в использовании — интуитивно понятны даже новичку.</span
      >
    </div>

    <div class="speed__advantages">
      <Icon
        name="fluent:apps-list-detail-24-regular"
        class="lg:!w-6 lg:!h-6 !w-5 !h-5 text-primary shrink-0"
      />
      <span class="speed__advantages__text"
        >Эффективны — без долгих обучений, технических сложностей и постоянных
        обращений в поддержку.</span
      >
    </div>

    <div class="speed__paragraphes">
      <p class="default-nav__text">
        Именно поэтому я создал Harmex. Я верю, что каждый может значительно
        повысить свою эффективность за счет автоматизации.
      </p>
      <p class="default-nav__text">
        Вместе мы создаем не просто инструменты, а сообщество, которое помогает
        друг другу достигать целей и строить тот стиль жизни, о котором мечтает.
      </p>
      <p class="default-nav__text">
        Эта вера лежит в основе всего, что мы делаем.
      </p>
    </div>

    <img
      src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/speedImg.png"
      alt="Изображение"
      class="speed__img"
      loading="lazy"
    />
  </section>

  <section
    class="speed-tasks padding__block"
  >
    <div class="speed-tasks__content">
      <div v-for="item in speedTasks" class="speed-tasks__card">
        <h4 class="speed-tasks__card__title">
          {{ item.title }}
        </h4>
        <p class="speed-tasks__card__subtitle">
          {{ item.subtitle }}
        </p>
        <ul class="speed-tasks__card__list">
          <li
            v-for="(task, index) in item.tasks"
            :key="index"
            class="speed-tasks__card__list__item"
          >
            <span class="speed-tasks__card__list__item__task">
              {{ task.task }}
            </span>
            <p class="speed-tasks__card__list__item__description">
              {{ task.description }}
            </p>
          </li>
        </ul>
      </div>
    </div>
    <a
      :href="targetUrlAuth"
      target="_blank"
      rel="noopener noreferrer"
      class="btn-primary w-fit"
    >
      Попробовать сейчас
      <Icon name="charm:arrow-right" class="ml-2 !w-4 !h-4" />
    </a>
  </section>

  <section class="for default-nav padding__block" id="for">
    <p class="default__subtitle">Для кого?</p>

    <h2 class="default__title !text-left">
      Подходит ли Harmex для ваших <br />
      целей?
    </h2>

    <p class="default-nav__text">
      Определите, соответствует ли Harmex вашим целям и задачам.
    </p>

    <div class="for__content">
      <div class="for__cards">
        <div
          class="flex flex-col gap-5 flex-1 bg-[#F9F9F9] rounded-[20px] p-5"
          v-for="(section, index) in forInfo"
          :key="index"
        >
          <h3 class="font-bold text-lg">{{ section.title }}</h3>
          <ul class="flex flex-col gap-[15px]">
            <li
              v-for="(point, idx) in section.points"
              :key="idx"
              class="flex items-start gap-2"
            >
              <Icon
                :name="index === 0 ? 'ic:round-close' : 'mdi:success'"
                :class="index === 0 ? 'text-[#EB6C48]' : 'text-[#36BC04]'"
                class="!w-5 !h-5 flex-shrink-0 mt-1"
              />
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
      <a
        :href="targetUrlAuth"
        target="_blank"
        rel="noopener noreferrer"
        class="btn-primary w-fit"
      >
        Попробовать сейчас
        <Icon name="charm:arrow-right" class="ml-2 !w-4 !h-4" />
      </a>
    </div>
  </section>

  <section class="functions default-nav padding__block" id="functions">
    <p class="default__subtitle">Функции</p>

    <h2 class="default__title !text-left">Итак…как это работает?</h2>

    <p class="default-nav__text">
      Узнайте, как начать свой путь с помощью наших интуитивно понятных
      инструментов.
    </p>

    <div
      v-for="(item, index) in stepsInfo"
      :key="index"
      ref="scrollContainer"
      class="default__steps padding-y__block !justify-between overflow-hidden"
    >
      <div
        class="w-full bg-[#F7F7F7] lg:max-w-[520px] min-h-[300px] sm:min-h-[460px] flex justify-center items-end rounded-3xl relative"
        :class="index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'"
      >
        <div
          class="bg-black w-[70%] h-[90%] min-h-[280px] sm:min-h-[430px] rounded-t-[55px] flex justify-center relative sm:min-w-[364px]"
        >
          <div class="bg-black w-[75px] h-[25px] z-10 rounded-full mt-5" />
          <div
            class="bg-black h-[30px] w-[2px] absolute -left-0.5 rounded-l-full translate-y-24"
          ></div>
          <div
            class="bg-black h-[55px] w-[2px] absolute -left-0.5 rounded-l-full translate-y-40"
          ></div>
          <div
            class="bg-black h-[55px] w-[2px] absolute -left-0.5 rounded-l-full translate-y-56"
          ></div>
          <div
            class="bg-black h-[75px] w-[2px] absolute -right-0.5 rounded-r-full translate-y-40 lg:translate-y-56"
          ></div>
          <div
            class="absolute w-[95%] h-[98%] bg-white rounded-t-[50px] bottom-0 left-1/2 transform -translate-x-1/2 overflow-hidden"
          >
            <img
              :src="`https://ozonmpportal.hb.vkcs.cloud/harmex/landing/img/step${
                index + 1
              }.png`"
              :style="{ transform: `translateY(${scrollPositions[index]}%)` }"
              class="w-full transition-transform duration-300 ease-out object-cover"
            />
          </div>
        </div>
      </div>

      <div
        class="default__steps__text flex flex-col items-start justify-center"
        :class="index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'"
      >
        <p class="default__steps__number">{{ '0' + (index + 1) }}</p>
        <h3 class="default__steps__title">{{ item.title }}</h3>
        <p class="default__steps__subtitle">{{ item.description }}</p>
      </div>
    </div>
  </section>

  <section class="price default-nav padding__block" id="price">
    <p class="default__subtitle">Цена</p>

    <h2 class="default__title !text-left">Тарифные планы</h2>

    <p class="default-nav__text max-w-[570px]">
      Harmex предлагает гибкие и выгодные планы, которые позволяют вам
      заказывать только то, что нужно, и в том объеме, который подходит именно
      вам.
    </p>

    <div class="price__content">
      <div class="price__cards">
        <div
          v-for="(item, index) in plans"
          :key="item.title"
          class="price__card"
          :class="
            index % 2 === 0 ? 'bg-custom-gradient' : 'bg-custom-gradient-2'
          "
        >
          <div class="price__card__text">
            <p class="price__card__text__title">{{ item.title }}</p>
            <p class="text-[#737373]">{{ item.description }}</p>
          </div>

          <div class="border-t border-gray-200"></div>

          <div>
            <p class="text-3xl lg:text-5xl font-semibold">{{ item.price }}</p>
            <p class="text-[#737373] text-2xl">{{ item.priceDescription }}</p>
          </div>

          <a
            :href="targetUrlAuth"
            target="_blank"
            rel="noopener noreferrer"
            :class="index % 2 === 0 ? 'btn-glass' : 'btn-primary'"
          >
            {{ item.buttonText }}
            <Icon name="material-symbols:arrow-right" class="ml-2 !w-6 !h-6" />
          </a>

          <ul class="price__card__features">
            <li
              v-for="feature in item.features"
              :key="feature.title"
              class="price__card__features__item"
            >
              <Icon
                :name="feature.icon"
                class="text-[#15803D] text-xl flex-shrink-0 mr-0 lg:mr-4 mt-1"
              />
              <div>
                <p class="font-bold leading-6">{{ feature.title }}</p>
                <p class="text-[#171717] leading-6">
                  {{ feature.description }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section class="price mb-20">
    <div class="padding__block default-nav lg:!flex !contents">
      <p
        class="default__subtitle order-1 lg:order-none px-5 pt-16 lg:px-0 lg:pt-0"
      >
        Цена
      </p>

      <h2
        class="text-3xl lg:text-5xl font-semibold max-w-[1048px] !text-left order-2 lg:order-none px-5 lg:px-0 py-6 lg:py-0"
      >
        Как повысить заказы в карточке товара или услуги на любой площадке?
      </h2>

      <div class="price__container">
        <p
          class="default-nav__text max-w-[580px] order-3 lg:order-none px-5 lg:px-0 pb-16 lg:pb-0"
        >
          Пошаговый гайд от Harmex, основанный на статистике выкупов 10 000 SKU
          и данных с пяти популярных площадок.
        </p>
        <div class="price__btns order-5 lg:order-none mt-16 lg:mt-0">
          <button @click="prevSlide" class="price__btn">
            <Icon name="icon-park-outline:left" class="!w-6 !h-6" />
          </button>
          <button @click="nextSlide" class="price__btn">
            <Icon name="icon-park-outline:right" class="!w-6 !h-6" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-full lg:w-[135%] order-4 lg:order-none">
      <UCarousel
        ref="carousel"
        :startIndex="0"
        v-slot="{ item }"
        :items="items"
        :ui="{ item: 'basis-3/4 lg:basis-2/7 snap-center' }"
        loop
        :interval="3000"
      >
        <img
          :src="item"
          height="234"
          class="rounded-lg border border-[#EBEBEB]"
        />
        <!-- {{ item }} -->
      </UCarousel>
    </div>
  </section>
</template>
