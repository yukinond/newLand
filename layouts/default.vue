<script lang="ts" setup>
// import { data } from "~/data/content";

// const popupData = ref(data);
// const persistedStore = usePersistedStore();

// const currentPopup = ref("mp");
const popupVisible = ref(false);

const toggleDropdown = () => {
  const dropdown = document.getElementById("myDropdown");
  popupVisible.value = !popupVisible.value;
};

// const handleClickOutside = (e: any) => {
//   const mobileDropdown = document.getElementById("myDropdownMobile");
//   if (mobileDropdown) {
//     return;
//   }
//   const dropdown = document.getElementById("myDropdown");
//   if (!dropdown) {
//     return;
//   }
//   if (!e.target.matches(".dropbtn") && !dropdown.contains(e.target)) {
//     if (popupVisible.value) {
//       popupVisible.value = false;
//     }
//   }
// };

// onMounted(() => {
//   window.addEventListener("click", handleClickOutside);
// });

// onUnmounted(() => {
//   window.removeEventListener("click", handleClickOutside);
// });

const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  if (isOpen.value) {
    document.body.classList.add("no-scroll");
  } else {
    document.body.classList.remove("no-scroll");
  }
};

// const route = useRoute();

// function navigateToSite(url: string, disabled: boolean, slug: string) {
//   if (disabled) {
//     return;
//   }
//   console.log(slug)
//   popupVisible.value = false;
//   isOpen.value = false;
//   document.body.classList.remove("no-scroll");
//   persistedStore.setCurrent(url);
//   navigateTo(`/${slug}/${persistedStore.current}`);
// }

function scrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// const targetUrl = ref("https://app.harmex.ru/register");
const targetUrlAuth = ref("https://app.harmex.ru/auth");
// const params = route.query;

// onMounted(() => {
//   // Получаем параметр 'ref' из текущего маршрута
//   const ref: any = params.ref;

//   if (ref) {
//     // Сохраняем значение параметра 'ref' в localStorage
//     localStorage.setItem("referralCode", ref);
//   }

//   // Получаем значение 'ref' из localStorage
//   const refFromLocalStorage = localStorage.getItem("referralCode");

//   if (refFromLocalStorage) {
//     // Обновляем целевую ссылку
//     targetUrl.value = `https://app.harmex.ru/register?ref=${refFromLocalStorage}`;
//     targetUrlAuth.value = `https://app.harmex.ru/auth?ref=${refFromLocalStorage}`;
//   }
// });
const navItems = [
  {
    title: 'Результативность',
    value: 'result',
  },
  {
    title: 'Скорость',
    value: 'speed',
  },
  {
    title: 'Для кого',
    value: 'for',
  },
  {
    title: 'Функции',
    value: 'functions',
  },
  {
    title: 'Цена',
    value: 'price',
  },
]

function clearLocalStorage() {
  localStorage.removeItem("referralCode");
}
</script>

<template>
  <div >
    <header
      id="header"
      class="header"
    >
      <div class="flex gap-6">
        <Nuxt-Link alt="Перейти на главную" to="/">
          <img
            alt="Logo"
            class="w-[76px] h-[24px]"
            src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/logo.svg"
            loading="lazy"
          ></img>
        </Nuxt-Link>
      </div>
      <nav
          class="header__nav"
        >
          <Nuxt-Link v-for="item in navItems" :key="item.value" class="header__nav__link" :to="`#${item.value}`">{{ item.title }}</Nuxt-Link>
      </nav>
      <div
        class="header__btn !hidden lg:!flex"
      >
        <a
          @click="clearLocalStorage"
          :href=targetUrlAuth
          target="_blank"
          rel="noopener noreferrer"
          class="btn-primary"
        >
          Войти
        </a>
      </div>
      <button
        type="button"
        aria-label="Бургер"
        class="btn-circle lg:hidden !bg-transparent !border-[#E5E9EB]"
      >
        <div
          ref="navIcon"
          id="nav-icon3"
          :class="{ open: isOpen }"
          @click="toggleOpen"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <!-- Mobile -->
      <div v-if="isOpen" class="overlay" @click="toggleOpen"></div>
      <Transition name="slide-down">
        <nav
          v-if="isOpen"
          id="mobile-menu"
          class="mobile-menu fixed flex-col top-0 left-0 w-full bg-white z-50 flex gap-5 items-start justify-start py-3 px-5 lg:hidden"
          :class="popupVisible ? 'h-screen' : 'h-fit'"
        >
          <button
            type="button"
            aria-label="Бургер"
            class="btn-circle lg:hidden !bg-transparent !border-[#E5E9EB]"
          >
            <div
              ref="navIcon"
              id="nav-icon3"
              :class="{ open: isOpen }"
              @click="toggleOpen"
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div
            class="header__btn"
          >
            <a
              @click="clearLocalStorage"
              :href=targetUrlAuth
              target="_blank"
              rel="noopener noreferrer"
              class="btn-primary"
            >
              Войти
            </a>
          </div>

          <div
            class="gap-6 font-[500] text-[14px] leading-[17.5px] flex-col flex items-start"
          >
           <Nuxt-Link @click="toggleOpen" v-for="item in navItems" :key="item.value"  :to="`#${item.value}`">{{ item.title }}</Nuxt-Link>
          </div>
        </nav>
      </Transition>
    </header>
    <slot class="!z-1" />
    <footer
      id="footer"
      class="footer"
    >
      <div class="footer__content sm:flex-nowrap flex-wrap">
        
        <div class="flex gap-12 lg:gap-20 lg:justify-between items-start w-full flex-wrap lg:flex-nowrap">
            <img
              alt="log-white"
              src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/logo-white.svg"
              class="w-full max-w-[139px] min-h-[44px] "
              loading="lazy"
            />
            <div class="flex gap-6 justify-start flex-wrap lg:flex-nowrap lg:justify-end w-full">
              <div class="flex flex-col gap-2 text-white w-[180px]">
                  <p class="text-[#FFFFFF99]">Продукт</p>
                  <NuxtLink v-for="item in navItems" :to="`#${item.value}`">{{ item.title }}</NuxtLink>
               </div>
               <div class="flex flex-col gap-2 text-white">
                <p class="text-[#FFFFFF99]">Документы</p>
                <a
                  href="/docs/conf_policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Политика конфиденциальности</a
                >
                <a href="/docs/oferta.pdf" target="_blank" rel="noopener noreferrer"
                  >Пользовательское соглашение</a
                >
               </div>
            </div>
        </div>
        <div class="flex sm:flex-row flex-col justify-end gap-12 w-full">
            <div class="flex flex-col gap-4 justify-end items-end text-white order-last self-end w-full sm:w-auto">

            <a
              class="text-base  font-[600]"
              href="tel:8 (964) 726 50 61"
              >+7 964 726-50-61</a
            >
            <a
              class="font-[500] text-sm flex gap-3 items-center"
              href="https://t.me/HarmexSupport_bot"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                alt="Support"
                src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/support.svg"
                class="w-5 h-5"
                loading="lazy"
              />Служба заботы</a
            >
            <a
              class="font-[500] text-sm flex gap-3 items-center"
              href="https://t.me/+gQ834W_1awM4ZTky"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                alt="Telegram"
                src="https://ozonmpportal.hb.vkcs.cloud/harmex/landing1/img/footer/tg.svg"
                class="w-5 h-5"
                loading="lazy"
              />Telegram-канал Harmex</a
            >
            <a
              class="mb-2 text-sm text-[#47A4D2]"
              href="mailto:info@harmex.ru"
              >info@harmex.ru</a
            >
            <div class="mb-2 text-right flex flex-col gap-1.5">
              <p class="text-sm">
                г. Пенза, ул. Суворова, 167, оф.11
              </p>
              <p class="text-[14px] text-[#ADADAD]">
                Пн-Пт: с 8:00 до 20:00, Сб-Вс: с 10:00 до 18:00
              </p>
            </div>
            <div class="flex gap-3 items-center">
              <span class="text-sm text-[#ADADAD]"> Наверх </span>
              <button
                type="button"
                aria-label="Наверх"
                @click="scrollTop"
                class="bg-primary !w-7 !h-7 max-h-[42px] flex items-center justify-center cursor-pointer !rounded-md "
              >
                <Icon name="octicon:arrow-up-24" class="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        class="pt-12 lg:pt-0 lg:-mt-5 flex lg:flex-row flex-col justify-center lg:justify-between text-[14px] leading-[17.5px] gap-12 "
      >
        <p class="text-white text-center lg:text-left">
          ©{{ new Date().getFullYear() }} HARMEX Все права защищены.
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
header a:hover {
  color: var(--primary);
}

.btn-primary {
  color: #fff;
}

.vertical-divider {
  width: 1px;
  background-color: #d9d9d9;
  height: auto;
  margin: 0;
}

.dropdown {
  float: left;
  overflow: hidden;
}

.dropdown .dropbtn {
  cursor: pointer;
  border: none;
  outline: none;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  box-sizing: border-box;
}

.dropdown-content {
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  width: calc(100%);
  z-index: 100;
}

.dropdown-content.full-width {
  left: 0px;
}

#nav-icon3 {
  width: 24px;
  height: 18px;
  position: relative;
  margin: 0 auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon3 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #737373;
  border-radius: 3px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon3 span:nth-child(1) {
  top: 0px;
}

#nav-icon3 span:nth-child(2),
#nav-icon3 span:nth-child(3) {
  top: 7px;
  width: 70%;
}

#nav-icon3 span:nth-child(4) {
  top: 14px;
}

#nav-icon3.open span:nth-child(1) {
  top: 7px;
  width: 0%;
  left: 50%;
}

#nav-icon3.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon3.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon3.open span:nth-child(4) {
  top: 7px;
  width: 0%;
  left: 50%;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.35s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.slide-down-enter-from {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
</style>
