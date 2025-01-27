import MealItem from "./MealItem.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

const requestConfig = {};

export default function Meals() {
    const {data: loadedMeals, error, isLoading} = useHttp("http://localhost:3000/meals", requestConfig, []) //as there is get req we don'nt need any config object therefore we are just passing URL
    if(isLoading){
        return <p className="center">Fetching meals...</p>
    }
    if(error){
        return <Error title="Failed to fetch meals" message={error}/>
    }
    return <ul id="meals">
        {loadedMeals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}
    </ul>
}