import React, {useState, useEffect, useRef} from 'react'
import './App.css';
import AccountList from './AccountList';

export default function Account() {    
    const nameRef = useRef();
    const emailRef = useRef();

    const [accounts, setAccounts] = useState([])  // const accounts = []
    useEffect( ()=> {
        console.log('useEffect called')
        accounts.forEach( (account)=> {
            console.log( JSON.stringify(account))
        })
    }, [accounts])

    function handleClick() {    
        setAccounts( [...accounts,{ 'name': nameRef.current.value, 'email': emailRef.current.value}])
    }
    return (
        
        <div>
            <div>Name <input type="text" ref={nameRef} placeholder="enter name" /></div>
            <div>Email <input type="text" ref={emailRef} placeholder="enter email" /></div>
            <div align="center"><button className="btn btn-danger btn-sm" role="button" onClick={handleClick}>Click Me</button></div>
            <AccountList accounts={accounts} />
        </div>
    )
}

/* import React, {useState, useEffect, useRef} from 'react'
import './App.css';

export default function Account() {    
    const nameRef = useRef();
    const emailRef = useRef();

    const [accounts, setAccounts] = useState([])  // const accounts = []
    useEffect( ()=> {
        console.log('useEffect called')
        accounts.forEach( (account)=> {
            console.log( JSON.stringify(account))
        })
    }, [accounts])

    function handleClick() {    
        setAccounts( [...accounts,{ 'name': nameRef.current.value, 'email': emailRef.current.value}])
    }
    return (
        <div>
            <div>Name <input type="text" ref={nameRef} placeholder="enter name" /></div>
            <div>Email <input type="text" ref={emailRef} placeholder="enter email" /></div>
            <div align="center"><button class="btn btn-danger btn-sm" role="button" onClick={handleClick}>Click Me</button></div>
        </div>
    )
} */