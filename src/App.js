import './App.css';
import logo from './assets/levis.png';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.png';
import sign from './assets/signin.png';
import signup from './assets/user.png';
import send from './assets/send.png';
import userChat from './assets/userchat.png';
import levislogo from './assets/levischat.png';
import { main } from './openai';
import { useEffect, useRef, useState } from 'react';

function App() {
  const msgEnd = useRef(null);
  const [input, setInput] = useState("");
  const[messages, setMessages] = useState([
    {
    text: "Hi, I am Levis",
    isBot: true,
  }
]);

useEffect(()=>{
  msgEnd.current.scrollIntoView();

},[messages]);

  const handleSend = async () => {
    const text = input;
    setInput('');
    setMessages([
      ...messages,
      {text, isBot:false}
    ])
    const res = await main(text);
    // setMessages([
    //   ...messages, 
    //   {text, isBot: false},
    //   {text : res, isBot: true}
    
    // ]);
    console.log(res);
  }

  const handleEnter = async(e) => {
    if(e.key === 'Enter') await handleSend();
  }

  return (
    <div className="App">
        <div className="sideBar">
            <div className="upperSide">
                <div className="upperSideTop"><img src={logo} alt="logo" className="logo" /><span className="brand">Levis AI</span></div>
                <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
                <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="Query" />I want to get a divorce, what is the process?</button>
                  <button className="query"><img src={msgIcon} alt="Query" />How many years imprisonment for robbery?</button>
                </div>

            </div>
            <div className="lowerSide">
              <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
              <div className="listItems"><img src={sign} alt="Signin" className="listItemsImg" />Sign In</div>
              <div className="listItems"><img src={signup} alt="signup" className="listItemsImg" />Sign Up</div>


            </div>
          
        </div>
      <div className="main">
        <div className="chats">

          <div className="chat">
              <img className='chatImg' src={userChat} alt="user" /><p className="txt">what does the Ghana constitution say about armed robbery?</p>
          </div>
          <div className="chat bot">
              <img className='chatImg' src={levislogo} alt="user" /><p className="txt">The Constitution of Ghana itself does not explicitly define or prescribe punishment for specific crimes, including armed robbery. The Constitution provides the general framework for the legal system, the fundamental rights and freedoms of individuals, the structure of government, and the rule of law.

The specific laws that define crimes like armed robbery and prescribe punishments are typically found in statutes such as the Criminal Offences Act (1960) Act 29 and subsequent amendments, rather than the Constitution.

However, I can provide an overview of how armed robbery is typically treated under Ghanaian law, particularly in the Criminal Offences Act (1960) Act 29. Please note that laws can change, so it's important to consult the most current and accurate legal sources or consult a legal professional in Ghana for up-to-date and precise information.

In Ghana, armed robbery is considered a serious criminal offense involving the use of violence or threat of violence and the use of a weapon to steal from an individual or property. The Criminal Offences Act (1960) Act 29 contains provisions that define and penalize armed robbery, outlining the elements of the offense, penalties, and related legal procedures.

Penalties for armed robbery in Ghana may include imprisonment for a term ranging from a specific number of years to life imprisonment or even the death penalty, depending on the severity of the offense and the circumstances. The specific penalties can vary based on the provisions of the Criminal Offences Act and any subsequent amendments.</p>
          </div>
          {/* {messages.map((message, i)=>

            <div key={i} className={message.isBot?"chat bot":"chat"}>
                <img className='chatImg' src={message.isBot?levislogo:userChat} alt="user" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci minus quod, ullam architecto at aliquid deserunt. Accusamus, iusto. Voluptatibus eos molestiae exercitationem pariatur, ipsa assumenda dolorum tempora dolore voluptate autem nemo, quaerat quam. Pariatur eos quod incidunt voluptas nemo assumenda nostrum? Autem iusto, accusamus minima laudantium consequatur non eveniet, sapiente laboriosam necessitatibus temporibus blanditiis omnis natus atque quidem numquam. Iure sit quidem placeat non dolore tempore, in iusto quas sint odit ducimus modi, minus adipisci doloribus autem dolores veniam ex impedit reprehenderit quam cum, tempora dolorum mollitia! Id, expedita quod possimus, quae quisquam aperiam voluptatum, eum animi necessitatibus dolorum cum!</p>
            </div>

          )} */}
          <div ref={msgEnd}/>



        </div>
        
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder='Send message' value={input} onKeyDown={handleEnter} onChange={(e)=>{setInput(e.target.value)}}/><button className="send" onClick={handleSend}><img src={send} alt="send" /></button>
          </div>
          

        </div>

      </div>
    </div>
  );
}

export default App;