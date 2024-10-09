import { useEffect, useState } from "react"
import { GlobalComponents } from "../../components"

const weeks = [
    { id: 1, text: "Week 1" },
    { id: 2, text: "Week 2" },
    { id: 3, text: "Week 3" },
    { id: 4, text: "Week 4" },
]

const Home = () => {
    const [selectedWeek, setSelectedWeek] = useState(0)
    const [loader, setLoader] = useState(false)
    const [recipes, setRecipes] = useState([])

    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(!open);
  
    useEffect(() => {
        get_recipes()
    }, [])

    // useEffect(()=>{
    //     if(recipes.length === 0) return
    //     const filtered_recipes = recipes.filter((recipe)=> recipe.week === selectedWeek)
    //     setRecipes(filtered_recipes)
    // },[selectedWeek])


    const get_recipes = async () => {
        try {
            setLoader(true)
            const result = await fetch("https://dummyjson.com/recipes")
            const data = await result.json()
            setRecipes(data?.recipes)
        } catch (error) {
            console.log(error, 'error')
        } finally {
            setLoader(false)
        }
    }

    return (
        <div className="bg-gradient-to-r from-[#d9a7c7] to-[#fffcdc]  w-full" >
            <div className="flex layout py-5 px-5 xl:px-0">
                <h1 className="text-4xl font-bold ">Week Orders</h1>
            </div>

            {/* tabs */}
            <div className="bg-white py-8">
                <div className="px-5 xl:px-0 font-bold layout grid md:grid-cols-3 lg:grid-cols-6 gap-5 items-center">
                    <p onClick={() => setSelectedWeek(0)} className={`pb-2 md:w-[80%] cursor-pointer ${selectedWeek === 0 ? "selected-week" : "unselected-week"} `}  >All Week</p>

                    {weeks?.map((week) => (
                        <p onClick={() => setSelectedWeek(week.id)} className={`pb-2 md:w-[80%]  cursor-pointer   ${selectedWeek === week.id ? "selected-week " : "unselected-week"} `} key={week.id} >{week.text}</p>
                    ))}

                    <GlobalComponents.Button title={"Add To Week"} onClick={onOpenModal} disabled={selectedWeek != 0} />
                </div>
            </div>

            {/* meals */}
            <div className="px-5 xl:px-0 layout grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {loader ? <>Loading...</> : recipes?.map((meal, index) => (
                    <GlobalComponents.MealCard showIcon={selectedWeek != 0} setRecipes={setRecipes} recipes={recipes} key={index} data={meal} />
                ))}
            </div>

            <GlobalComponents.AddRecipeModal openModal={onOpenModal} isModalOpen={open} />
        </div>
    )
}

export default Home