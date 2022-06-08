/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
import { useState } from "react";
import { Link } from "react-router-dom";
import MinMax from "./MinMax";
import GeneralCart from "./GeneralCart";
import DelButton from "./DelButton";
import SelectBook from "./SelectBook";

function booksStub() {
  return [
    {
      id: 1,
      title: "Война и мир - Л.Н.Толстой",
      price: 800,
      rest: 10,
      quantity: 1,
    },
    {
      id: 2,
      title: "Две жизни - К.Е.Антарова",
      price: 700,
      rest: 5,
      quantity: 1,
    },
    {
      id: 3,
      title: "Разговор с богом - Н.Д.Уолша",
      price: 1000,
      rest: 2,
      quantity: 1,
    },
    {
      id: 4,
      title: "Хроники Ехо - Макс Фрай",
      price: 400,
      rest: 8,
      quantity: 1,
    },
    {
      id: 5,
      title: "Хохот Шамана - В.П.Серкин",
      price: 600,
      rest: 8,
      quantity: 1,
    },
  ];
}

function loginData() {
  return [
    {
      login: "",
      password: "",
    },
    {
      error: "",
    },
  ];
}

export default function BookCart() {
  const [books, setBooks] = useState(booksStub());
  const [logData, setLogData] = useState(loginData());

  // меняем количество книг
  const setQuantity = (id, quantity) => {
    setBooks(
      books.map((book) => (book.id !== id ? book : { ...book, quantity }))
    );
  };

  // удаляем книгу из списка
  function setDeleteItem(id) {
    setBooks(books.filter((book) => book.id !== id));

    return books;
  }

  // поля для ввода логина и пароля
  const setLogin = (value, isRequired, what) => {
    if (isRequired) {
      console.log(logData[1].error);
      if (value === "") {
        setLogData([
          {
            login: value,
            password: logData[0].password,
          },
          {
            error: "Введите логин или пароль",
          },
        ]);
      } else {
        setLogData([
          {
            login: logData[0].login,
            password: logData[0].password,
          },
          {
            error: "",
          },
        ]);
        if (what === "login") {
          setLogData([
            {
              login: value,
              password: logData[0].password,
            },
            {
              error: logData[1].error,
            },
          ]);
        }
        if (what === "password") {
          setLogData([
            {
              login: logData[0].login,
              password: value,
            },
            {
              error: logData[1].error,
            },
          ]);
        }
      }
    }
  };

  return (
    <div className="some">
      <h1>books list</h1>
      <table>
        <tbody>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>/</th>
          </tr>
          {books.map((book, i) => (
            <tr key={book.id}>
              <td>{i + 1}</td>
              <td>{book.title}</td>
              <td>{book.price}</td>
              <td>
                <MinMax
                  max={book.rest}
                  current={book.quantity}
                  onChange={(quantity) => {
                    setQuantity(book.id, quantity);
                  }}
                />
              </td>
              <td>{book.price * book.quantity}</td>
              <td>
                <DelButton
                  item={book.id}
                  onClick={() => {
                    setDeleteItem(book.id);
                  }}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td />
            <td>
              <GeneralCart data={books} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <Link to="/about">About Shop</Link>&nbsp;&nbsp;
              <Link
                to={{
                  pathname: "/login",
                  state: {
                    login: logData[0].login,
                    password: logData[0].password,
                    error: logData[1].error,
                  },
                  onChange: (value, isRequired, what) => {
                    setLogin(value, isRequired, what);
                  },
                  onBlur: (value, isRequied, what) => {
                    setLogin(value, isRequied, what);
                  },
                }}
              >
                Вход
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="divCitaty">
        <h3>Цитаты</h3>
        <SelectBook data={books} />
      </div>
    </div>
  );
}

/* 
const setquantity = (id, quantity) => {
	const newbooks = [ ...books ];
	const productInd = books.findIndex(book => book.id == id);
	const newProduct = { ...books[productInd] };
	newProduct.quantity = quantity;
	newbooks[productInd] = newProduct;
	setbooks(newbooks);
} */
