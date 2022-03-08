import React, { useEffect, useState } from 'react';

const Contact = () => {

  const [list, setList] = useState();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAdd = (newContact) => {
    console.log('handle add', newContact);
    if(!list){
      setList([newContact]);
    }
    const newList = [...list, newContact];
    setList(newList);
    console.log('new list => ', newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }


  const handleRemove = (index) => {
    console.log("remove ->", index)
    const newList = list.filter((value, i) => i!==index)
    setList(newList)
    localStorage.setItem('list', JSON.stringify(newList))
  }


  useEffect(() => {
    const localList = localStorage.getItem('list');
    setList(JSON.parse(localList))
  }, [])

  return (
    <div>
      <form>
        <label htmlFor="name">
          name: <input value={name} type="text" onChange={(e) => setName(e.target.value)}/>
        </label>
        <label htmlFor="number">
          number: <input value={number} type="number" onChange={(e) => setNumber(e.target.value)}/>
        </label>
        <button 
          type='submit'
          onClick={(e) => {
            e.preventDefault();
            handleAdd({name, number})
          }}
        >add</button>
      </form>

      {list && 
        <div className="list">
          <h1>contacts</h1>
          <table className='blueTable'>
            <tr>
              <th>name</th>
              <th>phone</th>
            </tr>
            {list && list.map(
              (contact, index) => (
                <tr key={index}>
                  {/* {console.log(JSON.stringify(contact))} */}
                  <td>{contact.name}</td>
                  <td className='number'>{contact.number}</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(index);
                      }}
                    >X</button>
                  </td> 
                </tr>    
              )
            )}
          </table>
        </div>
      }
    </div>
  )
}

export default Contact;