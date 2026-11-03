function setUpGreeting(){
    const greeting = document.getElementById("greeting");
    const button = document.getElementById("name-button");
    const error = document.getElementById("name-error");
    const savedName = localStorage.getItem("userName");

}

    if (savedName) {
        greeting.textContent = 'Привет, ${saveName}!';
        button.textContent = 'Изменить имя';
    }

    function askName(){
        const name = prompt("Как тебя зовут?");

        if (name === null || name.trim() === ""){
            error.textContent = "Ты не указал имя. Нажми на кнопку и попробуй снова";
            return;
        }

        const cleanName = name.trim();
        localSrotage.setItem("userName", cleanName);
        greeting.textContent = 'Hi, ${cleanName}!';
        button.textContent = 'Изменить имя';
        error.textContent = "";

    }