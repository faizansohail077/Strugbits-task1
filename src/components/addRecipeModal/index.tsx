import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { GlobalComponents } from '..';
import { useState } from 'react';

const AddRecipeModal = ({ openModal, isModalOpen }: { openModal: () => void, isModalOpen: boolean }) => {
  const weeks = [
    { id: 0, text: "Week 1" },
    { id: 1, text: "Week 2" },
    { id: 2, text: "Week 3" },
    { id: 3, text: "Week 4" },
  ]

  const [selectedWeek, setSelectedWeek] = useState(0)

  return (
    <div>
      <button onClick={openModal}>Open modal</button>
      <Modal classNames={{
        overlay: 'bg-[rgba(0,0,0,0.5)]',
        modal: 'shadow-none md:rounded-[16px] border border-2 border-gray-300 relative w-[90%] md:w-[70%] xl:w-[40%]  h-[35%] py-10 m-0',
        closeButton: "hidden"
      }} open={isModalOpen} onClose={openModal} center>
        <div className="h-full flex flex-col gap-5 items-center justify-between">
          <h1 className='font-bold text-2xl' >Select Week</h1>
          <div className="w-full flex items-center gap-5">

            {weeks.map((week) => (
              <div onClick={() => setSelectedWeek(week.id)} key={week.id} className={`cursor-pointer w-full font-semibold   flex justify-center items-center px-3 py-2 rounded-xl ${selectedWeek === week.id ?"bg-blue-200":"bg-gray-300" }`}>
                <p >{week.text}</p>
              </div>
            ))}
          </div>
          <div className="w-[30%]">

            <GlobalComponents.Button title={"Save"} />
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default AddRecipeModal