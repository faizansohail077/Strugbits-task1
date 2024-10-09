import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { GlobalComponents } from '..';
import { useState } from 'react';
import { Recipe } from '../../types';

const AddRecipeModal = ({ openModal, selectedRecipe, isModalOpen, setRecipes, recipes,setSelectedRecipe }: {setSelectedRecipe:any, selectedRecipe: Recipe[], setRecipes: any, recipes: Recipe[], openModal: () => void, isModalOpen: boolean }) => {

  const weeks = [
    { id: 0, text: "Week 1" },
    { id: 1, text: "Week 2" },
    { id: 2, text: "Week 3" },
    { id: 3, text: "Week 4" },
  ]

  const [selectedWeek, setSelectedWeek] = useState({ id: 0, text: "Week 1" })

  const addRecipe = (week: string) => {
    
    const findWeek = recipes?.find((recipe) => recipe.week === week);
    if (findWeek) return alert("Recipe already added to this week");

    const updatedRecipes = selectedRecipe.map((recipe) => ({
      ...recipe,
      week, 
    }));

    setRecipes([...recipes, ...updatedRecipes]);
    setSelectedRecipe([])
    openModal();
  };

  return (
    <div>
      <Modal classNames={{
        overlay: 'bg-[rgba(0,0,0,0.5)]',
        modal: 'shadow-none md:rounded-[16px] border border-2 border-gray-300 relative w-[90%] md:w-[70%] xl:w-[40%]  h-[300px] py-10 m-0',
        closeButton: "hidden"
      }} open={isModalOpen} onClose={openModal} center>
        <div className="h-full flex flex-col gap-5 items-center justify-between">
          <h1 className='font-bold text-2xl' >Select Week</h1>
          <div className="w-full flex items-center gap-5">

            {weeks.map((week) => (
              <div onClick={() => setSelectedWeek(week)} key={week.id} className={`cursor-pointer w-full font-semibold   flex justify-center items-center px-3 py-2 rounded-xl ${selectedWeek.id === week.id ? "bg-blue-200" : "bg-gray-300"}`}>
                <p >{week.text}</p>
              </div>
            ))}
          </div>
          <div className="w-[30%]">

            <GlobalComponents.Button title={"Save"} onClick={() => addRecipe(selectedWeek.text)} />
          </div>

        </div>
      </Modal>
    </div>
  )
}

export default AddRecipeModal