import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// promise.then(res =>{
//   ReactDOM.render(
//     <App notes2={res.data} />,
//     document.getElementById('root')
//   )


//   console.log(res.data)
// }).catch(err => {
//   console.log(err)
// })


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
    number: '05555' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  // const AddPersson
  const addPerson=(event)=>{
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    setPersons(persons.concat(newPerson))
    setNewName(event.target.value)
    setNewNumber(event.target.value)
  }

  const handlenameChange = (event) => 
  {
    setNewName(event.target.value)
    //console.log('name',event.target.value)
  }
  const handlenumberChange = (event) => 
  {
    setNewNumber(event.target.value)
    //console.log('name',event.target.value)
  }
 const rows=()=> {return(persons.map(person=><h5>name: {person.name}<div>number: {person.number}</div></h5>))}

 
  

  return (
     <div style={{ margin: '10%', color: 'black', padding: 200, background: 'pink', fontSize: 20, font: 'sans-serif', backgroundImage: 'ab.bmp', textAlign: 'center' }}>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handlenameChange}/> 
        <br></br>
        <br></br>
          number: <input value={newNumber} onChange={handlenumberChange}/>
          <div>
          <button type="submit" onClick= {addPerson}>add person</button>
          </div>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {rows()}
      </ul>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

//data
// const subjects = [
//   {
//     subject:'fullstack', 
//     notes: [
//       {
//         id: 1,
//         content: 'HTML is easy',
//         date: '2019-05-30T17:30:31.098Z',
//         important: true
//       },
//       {
//         id: 2,
//         content: 'Browser can execute only Javascript',
//         date: '2019-05-30T18:39:34.091Z',
//         important: false
//       },
//       {
//         id: 3,
//         content: 'GET and POST are the most important methods of HTTP protocol',
//         date: '2019-05-30T19:20:14.298Z',
//         important: true
//       }
//     ]
//   },
//   {
//     subject:'react', 
//     notes: [
//       {
//         id: 1,
//         content: 'HTML is easy',
//         date: '2019-05-30T17:30:31.098Z',
//         important: true
//       },
//       {
//         id: 2,
//         content: 'Browser can execute only Javascript',
//         date: '2019-05-30T18:39:34.091Z',
//         important: false
//       },
//       {
//         id: 3,
//         content: 'GET and POST are the most important methods of HTTP protocol',
//         date: '2019-05-30T19:20:14.298Z',
//         important: true
//       }
//     ]
//   },{
//     subject:'node', 
//     notes: [
//       {
//         id: 1,
//         content: 'HTML is easy',
//         date: '2019-05-30T17:30:31.098Z',
//         important: true
//       },
//       {
//         id: 2,
//         content: 'Browser can execute only Javascript',
//         date: '2019-05-30T18:39:34.091Z',
//         important: false
//       },
//       {
//         id: 3,
//         content: 'GET and POST are the most important methods of HTTP protocol',
//         date: '2019-05-30T19:20:14.298Z',
//         important: true
//       }
//     ]
//   },{
//     subject:'JSX', 
//     notes: []
//   }
// ]

//const notes =[]
  

//   const useState = (ob) => {
//    let state = ob
//    const fun = (value)  =>{
//       state = value
//    }

//    return [state, fun]
//   }

// sum(3, 5)
  







// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')
// console.log(promise)

// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)
