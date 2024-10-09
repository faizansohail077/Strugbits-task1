import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { StarRating } from './star';
import { Recipe } from '../../types';


const MealCard = ({ setRecipes, recipes, data, showIcon }: { setRecipes: any, recipes: Recipe[], showIcon: boolean, data: Recipe }) => {
    const [selectRecipe, setSelectRecipe] = useState<null | number>(null)

    const handleSelectRecipe = (id: number) => {
        if (selectRecipe === id) {
            setSelectRecipe(null)
        } else {
            setSelectRecipe(id)
        }
    }

    const deleteRecipe = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) => {
        e.stopPropagation()
        setRecipes(recipes.filter((recipe) => recipe.id !== id))

    }

    return (
        <div onClick={() => handleSelectRecipe(data.id)} className={`relative flex flex-col justify-between gap-5 p-5 my-6 bg-white shadow-md border border-slate-200 rounded-xl lg:w-[90%] ${selectRecipe === data.id && "border-2 border-[rgb(23,37,84)]"} `}>
            {/*  */}
            <div className="relative h-56 my-5 flex items-center justify-center overflow-hidden text-white rounded-md">
                <img className="object-cover w-[100%] rounded-2xl" src={data?.image} alt="card-image" />
                {showIcon && <button onClick={(e) => deleteRecipe(e, data.id)} className="absolute py-3 px-2 text-center cursor-pointer bg-red-200  top-2 left-3 ">
                    <FaRegTrashAlt color='red' />
                </button>}
                <div className="absolute w-[35%] text-center py-[2px] bg-black px-5 top-2 right-3 rounded-lg">
                    <p className='font-bold text-sm' >{data?.mealType[0]}</p>
                </div>
            </div>
            {/*  */}
            <div className="">
                <h6 className="font-bold mb-2 text-slate-800 text-xl">
                    {data?.name}
                </h6>
                <p className="text-slate-600 leading-normal font-light">
                    {data?.ingredients?.join(", ")}
                </p>
            </div>

            {/*  */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-between">
                <div className="flex gap-1 flex-wrap items-center justify-center">
                    <p className="font-bold text-sm" >Cuisine:</p>
                    <p className='text-sm'>{data?.cuisine}</p>
                </div>

                <div className="flex gap-1 flex-wrap md:flex-nowrap items-center justify-center">
                    <p className="font-bold text-sm">Rating:</p>
                    <p className='text-sm'>{data?.rating}</p>
                    <div className="flex items-center">
                        <StarRating rating={data?.rating} />

                    </div>

                </div>
            </div>


        </div>

    )
}

export default MealCard