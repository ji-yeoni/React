import { useState } from "react";

// let count = 0;

function Message(){
  console.log('Msg 랜더링');
  const [ msg, setMsg ] = useState('');
  const [ count, setCount ] = useState(0);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputMsg = event.target.value;
    setMsg(inputMsg);
    setCount(count + 1);
  };

  return(
    <div>
      <input type="text" value={msg} onChange={handleChange} />
      <br />
      <span>입력 메세지: { msg }</span>
      <br />
      <span>입력 횟수: { count } </span>
    </div>
  )
}

export default Message;