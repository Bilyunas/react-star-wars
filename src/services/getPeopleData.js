// Библиотеки
// Контекст
// HOC
// UI компоненты
// Компоненты
// Изображения
// Хуки
// Роуты
// Утилиты
// Сервисы
// Константы
import {
  HTTPS,
  SWAPI_ROOT,
  SWAPI_PEOPLE,
  GUIDE_IMG_EXTENSION,
  URL_IMG_PERON,
  SWAPI_PARAM_PAGE,
} from "../constants/api";
// Стили

export const getPeoplePageId = url => {
  const pos = url.lastIndexOf(SWAPI_PARAM_PAGE);
  const id = url.slice(pos + SWAPI_PARAM_PAGE.length, url.length);

  return Number(id);
};

const getId = (url, category) => {
  const id = url.replace(HTTPS + SWAPI_ROOT + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = url => getId(url, SWAPI_PEOPLE);

export const getPeopleImage = id =>
  `${URL_IMG_PERON}/${id + GUIDE_IMG_EXTENSION}`;
