import react, { useCallback, useEffect } from 'react';

function passwordGenerator() {
    const [length,setLength] = react.useState(8);
    const [Number,setNumber] = react.useState(false);
    const [character,setChar] = react.useState(false);
    const [password,setPassword] = react.useState('');

    //ref hook
    const passref = react.useRef(null);

    const genPassword = react.useCallback(()=>{
        let pass = '';
        let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        if(Number){
            str += "0123456789";
        }
        if(character){
            str += "!~@#$%^&*_-[]|:;/?><.,";
        }
        for (let i = 1; i <= length; i++) {
            pass += str[Math.floor(Math.random() * (str.length))]
        }
        setPassword(pass)
    },[length,Number,character]);

    useEffect(()=>{
        genPassword();
    },[length,Number,character,genPassword])

    const copy = react.useCallback(()=>{
        passref.current?.select();
        window.navigator.clipboard.writeText(password);
    },[password])
    return(
        <>
        <div className="w-full h-screen bg-zinc-900 text-white flex justify-center items-center">
            <div className='w-[30%] h-44 bg-orange-400 rounded-lg p-3 '>
             <div className='w-full'>
             <input className='bg-white outline-none text-orange-400 p-2 rounded-l-lg w-[80%]' ref={passref} type="text" value={password} readOnly/>
                <button className='bg-blue-600 rounded-r-lg cursor-pointer p-2 w-[20%]' onClick={copy}>
                    Copy
                </button>
             </div>
                <div>
                    <input type="range" name='length' min="8" max="16" value={length}
                    onChange={(e)=>{setLength(e.target.value)}}
                    />
                    <label htmlFor="length">Length:{length}</label>
                    <input type="checkbox" name="Number" checked={Number} onChange={(e) => {
                     setNumber(!Number);
                    }}/>
                    <label htmlFor="Number">Number</label>
                   
                    <input type="checkbox" name="Char" checked={character} onChange={(e) => {
                     setChar(!character);
                    }}/>
                    <label htmlFor="Char">Char</label>
                </div>

            </div>
           
        </div>
        </>
    )
}

export default passwordGenerator;