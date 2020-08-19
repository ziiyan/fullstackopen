import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterPersons, setFilterPersons ] = useState(persons)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
        setFilterPersons(response.data)
      })
  }, [])

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