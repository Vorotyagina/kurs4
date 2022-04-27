# ДЗ 3
# Задание

Перепишите код на JSX.

```jsx
import React from "react";
import ReactDOM from "react-dom";

// tip: чтобы встроить переменную в JSX используйте фигурные скобки {name}
const Book = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("p", {}, props.year),
    React.createElement("p", {}, props.price)
  ]);
};

const App = () => {
  return (
    <div>
      <Book name="JS for beginners" year="2018" price="1000" />
      <Book name="React for beginners" year="2019" price="1200" />
      <Book name="Vue for beginners" year="2021" price="1500" />
    </div>
  );

  // React.createElement("div", {}, [
  //   React.createElement(
  //     "h1",
  //     { id: "hello", className: "class1" },
  //     "Hello from React"
  //   ),
  //   React.createElement(Book, {
  //     name: "JS for beginners",
  //     year: 2018,
  //     price: 1000
  //   }),
  //   React.createElement(Book, { name: "React", year: 2020, price: 1200 }),
  //   React.createElement(Book, { name: "Vue JS", year: 2019, price: 1100 })
  // ]);
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  rootElement
);


# ДЗ 2 
**Подготовка**:

- Cтяните репозиторий с наработками с урока.
- Разверните на своей машине, проверьте и исправьте ошибки при их наличии.

Ссылка на репозиторий: [https://github.com/revoidWhale/skyproject.git](https://github.com/revoidWhale/skyproject.git).

### Задание

1. На примере компонентов урока, сделайте компонент, который:
    - Принимает параметры **min** и **max**.
    - В состоянии хранит текущее значение счётчика - **curCount**.
    - Задает изначальное значение **curCount**= **min**.
    - Содержит кнопки для увеличения и уменьшения **curCount** на **1**.
    - Не позволяет значению **curCount** выходить за границы **min** и **max**.
    - Выводит **curCount** в **<span>** между двумя кнопками.
2. Подберите способ валидировать значения параметров **min** и **max**.
3. Вместо **<span>** между кнопками расположить **input[type=text]**.
Число в этом **input** синхронизируется с **curCount**.
Помните, что человек может ввести в поле любую текстовую бессмыслицу.
Оформить код по правилам **деструктуризации** React.


# ДЗ 1
## Задание 1

— Настройте окружение в Visual Code.

## Задание 2

Самостоятельно сконфигурируйте простейший Typescript React проект с помощью CRA и настройте Линтеры.

- Создайте на гитхабе репозиторий с именем sky-react1 и README.
- Склонируйте репо локально на своём компьютере.
- Добавьте в README.md текст "Мой первый проект на React".
- Установите Visual Studio Code (*при необходимости*).
- Установите Node.js (*при необходимости*).
- Инициализируйте React Typescript проект.
- Установите Prettier.
- Установите ESLint.
- Разрешите конфликты между линтерами (*при необходимости*).
- Проверьте зависимости .eslintrc.json, .prettierrc.json, package.json.
- Запушьте все изменения на GitHub.

Настройте окружение в Visual Code.

