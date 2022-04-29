import React, {useState, useEffect} from 'react'
import {Button, Spinner} from 'react-bootstrap'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Form} from 'react-bootstrap'
import './Client.css'

const Client = props => {

    const {client, history, details, firestore} = props
    const [nums, setNums] = useState([0]) ;
    const [answer, setAnswer] = useState('')
    const [life, setLife] = useState(3)
    const [scoree, setScoree] = useState(0)
    const [quesNum, setQuesNum] = useState(0)

    useEffect(()=>{
        if(client){
            randomingData();
        }
    },[client])

    const randomingData = () => {
        const copyN = []
        for(let i = 0; i < client.length; i++){
            copyN.push(i)
        }
        for (let i = copyN.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * i)
            let k = copyN[i]
            copyN[i] = copyN[j]
            copyN[j] = k
        }
        setNums(copyN)
    }
    
    const handleClick = (a, b) => {
        
        if(answer.length === 0){
            alert('You should write your answer')
            return
        }
        if(a.toLowerCase() === answer.trim().toLowerCase()){
            setScoree(s => s+1)
        }
        else{
            let aler =`${a} --- ${b}`; 
            alert(aler)
            if(life === 1){
                if(details[0].record < scoree){
                    history.push('/gameover')
                    firestore.update({collection : 'details', doc : 'details'}, {record : scoree})
                    return
                }
                history.push('/gameover')
                return
            }
            setLife(l=>l-1)
        }
        if(quesNum >= nums.length){
            randomingData();
            setQuesNum(0);
            setAnswer('');
            return
        }
        setQuesNum(q=>q+1)
        setAnswer('')
    }

    if(client && details){
        
        return (
            <>
                {
                    <div className='contain'>
                        <div className='head'>
                            <h3>Record : {details.[0].record}</h3>
                            <h4>Score : {scoree}</h4>
                            <h5>Life : {life}</h5>
                        </div>

                        <p>{client[nums[quesNum]].Q}</p>
                        {client[nums[quesNum]].Notes !== undefined ? client[nums[quesNum]].Notes.map(n=>(
                            <p style={{color:"orange"}}>({n})</p>
                        )) : ''}
                        <Form onSubmit={(e)=>{
                            e.preventDefault() 
                            handleClick(client[nums[quesNum]].A, client[nums[quesNum]].Q)}}>
                            <Form.Group controlId="firstName">
                                <Form.Control
                                className='answer-input' 
                                type="text" 
                                placeholder="Enter answer"
                                value={answer}
                                onChange={e=>setAnswer(e.target.value.trim())} />
                            </Form.Group>

                            <Button onClick={()=>handleClick(client[nums[quesNum]].A)}> Submit </Button>
                        </Form>
                    </div>
                }
            </>
        )
    }else{
        return <div className="contain"><Spinner animation="border" /></div>
    }
}

export default compose(
    firestoreConnect([{collection : 'client'}, {collection : 'details'}]),
    connect((state, props)=>({
        client : state.firestore.ordered.client,
        details : state.firestore.ordered.details
    }))
)(Client)