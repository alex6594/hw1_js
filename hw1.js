while(true){
    alert(message = prompt('Поиграем? y/n'));
    if (message == 'y'){
        let n = Math.floor(Math.random() * 1000);
        console.log('Число, загаданное мною: ', n);
        userNum = prompt('Введите число: ');
        if (isNaN(userNum)===false) {
            alert('Вы молодец, смогли ввести число!');
        }
        else {
            alert('Введено не число!');
        }
        if (userNum == n) {
            alert('Вы смогли угадать число!');
        }
        else if (userNum != n && userNum < n) {
            alert('Не повезло! Попробуйте еще! Число было больше!');
        }
        else {
            alert('Не повезло! Попробуйте еще! Число было меньше!');
        }
    }
    else if (message == 'n') {
        alert('Спасибо за игру! До новых встреч!');
        break
    }
}