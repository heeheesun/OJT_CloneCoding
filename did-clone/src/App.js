import React, {useState, useEffect} from "react";
import OrderStatus from './component/OrderStatus/OrderStatus';


function App() {

  const Receipt = {
    type: "Receipt",
    title: '주문접수',
    script: '주문이 확인되었습니다.'
};

const Produce = {
    type: 'Produce',
    title: '제조중',
    script: '제품을 준비중 입니다.'
};

const Complet = {
    type: 'Complet',
    title: '준비완료',
    script: '주문하신 제품이 준비되었습니다.'
};

const [message, setMessage] = useState("");
useEffect(() => {
fetch('/api/hello')
.then(response => response.text())
.then(message => {
setMessage(message);
});
},[])


  return (
    <div className="App">
      <header className="App-header">

        {/* <OrderStatus id={Receipt} />
        <OrderStatus id={Produce} />
        <OrderStatus id={Complet} /> */}

        <h1>{message}</h1>


      </header>
    </div>
  );
}

export default App;
