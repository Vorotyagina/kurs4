# ДЗ5

## Задание

**Задача на события и состояние в React. Корзина Книжного.**

Написать приложение из двух компонентов Order и OrderDetail.

Компоненты будут составлять композицию. Главный компонент Order (корзина) будет содержать в себе начальные входные данные о всех товарах, такие как сумма, количество, описание товара - amount, quantity, detail - соответственно.

В нем также будет происходить расчет общей суммы и количества.

Дочерний компонент OrderDetail (карточка товара) будет содержать в себе детальную информацию о каждом товаре (productName, price, quantity). А также имея счетчик на увеличение и уменьшение количества позиций.

**Ссылка на скелет приложения:**

[https://github.com/revoidWhale/sky-react-book-cart](https://github.com/revoidWhale/sky-react-book-cart)

# ДЗ 4

## Задание

Используя скелет компоненты, допишите код таймера до рабочего: 

- В методах жизненных циклов определите взаимодействие с состоянием.
- Опишите события по кликам на кнопки.

```jsx
import React from 'react';
import './styles.css';

export default class ReacTimer extends React.Component {
    state = {
        count: 0,
        isCounting: false,
    };

    componentDidMount() {}

    componentDidUpdate() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className="ReacTimer">
                <h1>React Timer</h1>
                <h3>{this.state.count}</h3>
                {!this.state.isCounting ? (
                    <button onClick={this.handleStart}>Start</button>
                ) : (
                    <button onClick={this.handleStop}>Stop</button>
                )}
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}
```

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

#### Задание

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
