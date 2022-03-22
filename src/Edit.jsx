import React, { useState } from 'react'
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { edit } from './azerty/action';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


Modal.setAppElement('#root');

const Edit = ({task}) => {
const [text, setText] = useState(task.description)
const [modalIsOpen, setIsOpen] = React.useState(false);
const dispatch = useDispatch()
function openModal() {
  setIsOpen(true);
}


function closeModal() {
  setIsOpen(false);
}

const handleSubmit = (e) =>  {
 e.preventDefault()
 const editedTask = {
     id:task.id,
     description:text,
     isDone:task.isDone
 }
dispatch(edit(editedTask))
closeModal()
}

  return (
    <div>
        <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        
        onRequestClose={closeModal}
        style={customStyles}    
        contentLabel="Example Modal"
      >
       <form onSubmit={handleSubmit} action="">
           <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
           <button>confirm</button>
           <button onClick={closeModal}  >cancel</button>
       </form>
      </Modal>
    </div>
    </div>
  )
}

export default Edit