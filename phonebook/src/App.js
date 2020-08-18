import React, { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPersons, setFilterPersons ] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    let pObj = {
      name: newName,
      number: newNumber,
    }
    if (persons.find(obj => obj.name === newName)) {
        window.alert(`${newName} is already added to phonebook`
      )
    } else {
      setPersons(persons.concat(pObj))
      setFilterPersons(persons.concat(pObj))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    let filter = event.target.value.toLocaleLowerCase()
    if (filter.length === 0) {
      setFilterPersons(persons)
    } else {
      let filterList = persons.filter((obj) => {
        let lowerName = obj.name.toLocaleLowerCase()
        return lowerName.indexOf(filter) !== -1
      })
      setFilterPersons(filterList)
    }
  }

  return (
    <div>
    <h2>Phonebook</h2>
    <Filter handleFilterChange={handleFilterChange} />
    <h3>add a new</h3>
    <PersonForm
      newName={newName}
      handleNameChange={handleNameChange}
      newNumber={newNumber}
      handleNumberChange={handleNumberChange}
      addPerson={addPerson}
    />
    <h3>Numbers</h3>
    <Persons filterPersons={filterPersons} />
    </div>
  )
}

export default App