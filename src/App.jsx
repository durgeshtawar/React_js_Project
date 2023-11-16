import { useState, useEffect, useCallback } from "react";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [meal, setMeal] = useState("Arrabiata");

  async function getMeals() {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + meal
      );
      const data = await res.json();
      setMeals(data.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMeals();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    getMeals();
  }

  return (
    <div className="py-20 px-2 max-w-4xl mx-auto">
      <h1 className="text-4xl lg:text-5xl text-neutral-800 bg-neutral-200 rounded-lg font-bold text-center">
        Recipe Finder
      </h1>

      <form className="my-16" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search for a food"
          required
          className="w-full py-3 px-8 rounded-full bg-neutral-100 border-2 border-neutral-200 focus:border-neutral-800 focus:ring-4 focus:ring-neutral-800 outline-none lg:text-xl"
          value={meal}
          onChange={(e) => setMeal(e.target.value)}
        />
      </form>

      {meals ? (
        <div className="grid gap-16">
          {meals.map((meal) => (
            <article key={meal.idMeal}>
              <h2 className="flex flex-wrap items-center gap-4 text-3xl lg:text-4xl text-neutral-800 font-bold mb-12">
                {meal.strMeal}
                <span className="bg-neutral-200 font-normal text-sm px-2 rounded-full">
                  {meal.strCategory}
                </span>{" "}
                <span className="bg-neutral-200 font-normal text-sm px-2 rounded-full">
                  {meal.strArea}
                </span>
              </h2>

              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="w-full"
              />

              <h3 className="text-2xl text-neutral-800 font-bold my-8">
                Ingredients
              </h3>
              <ul className="list-decimal pl-4">
                {meal.strIngredient1 && meal.strMeasure1 && (
                  <li>
                    {meal.strMeasure1} {meal.strIngredient1}
                  </li>
                )}
                {meal.strIngredient2 && meal.strMeasure2 && (
                  <li>
                    {meal.strMeasure2} {meal.strIngredient2}
                  </li>
                )}
                {meal.strIngredient3 && meal.strMeasure3 && (
                  <li>
                    {meal.strMeasure3} {meal.strIngredient3}
                  </li>
                )}
                {meal.strIngredient4 && meal.strMeasure4 && (
                  <li>
                    {meal.strMeasure4} {meal.strIngredient4}
                  </li>
                )}
                {meal.strIngredient5 && meal.strMeasure5 && (
                  <li>
                    {meal.strMeasure5} {meal.strIngredient5}
                  </li>
                )}
                {meal.strIngredient6 && meal.strMeasure6 && (
                  <li>
                    {meal.strMeasure6} {meal.strIngredient6}
                  </li>
                )}
                {meal.strIngredient7 && meal.strMeasure7 && (
                  <li>
                    {meal.strMeasure7} {meal.strIngredient7}
                  </li>
                )}
                {meal.strIngredient8 && meal.strMeasure8 && (
                  <li>
                    {meal.strMeasure8} {meal.strIngredient8}
                  </li>
                )}
                {meal.strIngredient9 && meal.strMeasure9 && (
                  <li>
                    {meal.strMeasure9} {meal.strIngredient9}
                  </li>
                )}
                {meal.strIngredient10 && meal.strMeasure10 && (
                  <li>
                    {meal.strMeasure10} {meal.strIngredient10}
                  </li>
                )}
                {meal.strIngredient11 && meal.strMeasure11 && (
                  <li>
                    {meal.strMeasure11} {meal.strIngredient11}
                  </li>
                )}
                {meal.strIngredient12 && meal.strMeasure12 && (
                  <li>
                    {meal.strMeasure12} {meal.strIngredient12}
                  </li>
                )}
                {meal.strIngredient13 && meal.strMeasure13 && (
                  <li>
                    {meal.strMeasure13} {meal.strIngredient13}
                  </li>
                )}
                {meal.strIngredient14 && meal.strMeasure14 && (
                  <li>
                    {meal.strMeasure14} {meal.strIngredient14}
                  </li>
                )}
                {meal.strIngredient15 && meal.strMeasure15 && (
                  <li>
                    {meal.strMeasure15} {meal.strIngredient15}
                  </li>
                )}
                {meal.strIngredient16 && meal.strMeasure16 && (
                  <li>
                    {meal.strMeasure16} {meal.strIngredient16}
                  </li>
                )}
                {meal.strIngredient17 && meal.strMeasure17 && (
                  <li>
                    {meal.strMeasure17} {meal.strIngredient17}
                  </li>
                )}
                {meal.strIngredient18 && meal.strMeasure18 && (
                  <li>
                    {meal.strMeasure18} {meal.strIngredient18}
                  </li>
                )}
                {meal.strIngredient19 && meal.strMeasure19 && (
                  <li>
                    {meal.strMeasure19} {meal.strIngredient19}
                  </li>
                )}
                {meal.strIngredient20 && meal.strMeasure20 && (
                  <li>
                    {meal.strMeasure20} {meal.strIngredient20}
                  </li>
                )}
              </ul>

              <h3 className="text-2xl text-neutral-800 font-bold my-8">
                Instructions
              </h3>
              {/* <p dangerouslySetInnerHTML={{ __html: meal.strInstructions }}></p> */}
              <p>{meal.strInstructions}</p>

              <ul className="flex items-center justify-start gap-4 flex-wrap mt-8">
                {meal.strYoutube && (
                  <li>
                    <a
                      href={meal.strYoutube}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-neutral-200 font-normal text-base py-2 px-6 rounded-full hover:bg-neutral-400 transition-all duration-150 hover:text-neutral-800"
                    >
                      Video
                    </a>
                  </li>
                )}
                {meal.strSource && (
                  <li>
                    <a
                      href={meal.strSource}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-neutral-200 font-normal text-base py-2 px-6 rounded-full hover:bg-neutral-400 transition-all duration-150 hover:text-neutral-800"
                    >
                      Source
                    </a>
                  </li>
                )}
              </ul>
            </article>
          ))}
        </div>
      ) : (
        <h2 className="text-3xl text-center text-neutral-800 font-bold mt-12">
          Sorry, we couldn't search for {meal}
        </h2>
      )}
    </div>
  );
}