import React, { useState } from 'react'
function App() {
    
    function event1(){
      const url = "http://127.0.0.1:8080/get"
      let s = document.getElementById("in1")
      const Request = new XMLHttpRequest();
      Request.open('GET', url);
      Request.addEventListener("readystatechange", () => {
        if (Request.readyState === 4 && Request.status === 200) {
          s.value = String(Request.responseText);
        }
      });
      Request.send();
    }
    function event2(){
      let val = document.getElementById("in2")
      let val2 = document.getElementById("in3")
      const url2  = "http://127.0.0.1:9000/api/user?name=" + val.value
      const Request = new XMLHttpRequest();
      Request.open('GET', url2);
      Request.addEventListener("readystatechange", () => {
        if (Request.readyState === 4 && Request.status === 200) {
          val2.value = String(Request.responseText);
        }
      });
      Request.send();
    }
    function event3(){
      let val4 = document.getElementById("in4")
      const url3 = "http://127.0.0.1:3333/count"
      const Request = new XMLHttpRequest();
      Request.open('GET', url3);
      Request.addEventListener("readystatechange", () => {
        if (Request.readyState === 4 && Request.status === 200) {
          val4.value = String(Request.responseText);
        }
      });
      Request.send();

    }
    function event4(){
      const request = new XMLHttpRequest();
      let val5 = document.getElementById("in5")
      const url4 = "http://127.0.0.1:3333/count"
      let params = "count=" + val5.value
      request.open("POST", url4, true);
      request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      request.send(params);

    }
  return (

    <div className="App">
      <h2>Взаимодействие с сервером 1</h2>
      <p>ответ от сервера hello <input id= "in1" type="text"></input></p>
      <button onClick={event1}>Получить ответ</button>
      <h2>Взаимодействие с сервером 2</h2>
      <p>Введите имя <input id = "in2"></input></p>
      <p>ответ от сервера query <input id= "in3" type="text"></input></p>
      <button onClick={event2}>Получить ответ</button>
      <h2>Взаимодействие с сервером 3</h2>
      <p>ответ от сервера count<input id= "in4" type="text"></input>  <button onClick = {event3}>Получить count </button></p>
      
      <p>Введите count <input id = "in5"></input>   <button onClick = {event4}>Отправить count </button></p>
      
    </div>
  );
}

export default App;
