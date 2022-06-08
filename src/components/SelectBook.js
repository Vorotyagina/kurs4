import { useState } from "react";

function SelectBook(books) {

    const textFromBook = [
        {'Две жизни - К.Е.Антарова': 
        'Запомни только: никогда не проси у жизни того, к чему не чувствуешь себя совершенно готовым'},
        {"Разговор с богом - Н.Д.Уолша": 
        'Будь даром для каждого, кто входит в твою жизнь, и для каждого, в чью жизнь входишь ты. Когда кто-то входит в твою жизнь неожиданно, отыщи дар, ради которого этот человек пришёл к тебе.'},
        {"Хроники Ехо - Макс Фрай": 
        'Нет на свете невозможных вещей. Бывают только вещи невозможные лично для тебя – причем временно невозможные, если правильно к ним относиться.'},
        {"Война и мир - Л.Н.Толстой": 
        'Всё приходит вовремя для того, кто умеет ждать.'},
        {"Хохот Шамана - В.П.Серкин": 
        'Сумевший задать вопрос знает большую часть ответа'},
    ]
    const [book, setBook] = useState("")
    
    
    const handlerChange = (e) => {
        setBook(e.target.value)
        if (e.target.value) {

        }
    }
    textFromBook.map((item) => {
        if (Object.keys(item)[0] === book) {console.log(Object.values(item)[0])}
        }
    )
 return(
    <div>
        <select value = {book} onChange = {handlerChange}>
            <option selected>Выберите книгу</option>
            {books.data.map((option) => {
                return(<option key = {option.id} value = {option.title}>{option.title}</option>)
            })}
        </select>
        <div id="text-from-book">{textFromBook.map((item) => {
            if (Object.keys(item)[0] === book) {return(Object.values(item)[0])}
        })

        }</div>
    </div>
    )
}

export default SelectBook