import './App.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Recipes from './components/Recipes'
import emptyplate from './images/emptyplate.png'

function App() {

	const axios = require('axios').default;

	const { register, handleSubmit } = useForm();
	const [recipes, setRecipes] = useState([]);

	const onSubmit = async (data) => {
		const ingredient = data.ingredient
		const queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
		try {
			const response = await axios.get(queryURL + ingredient);
			const meals = response.data.meals

			if (meals) {
				meals.map((meal) => {
					const newMeal = [meal.strMeal, meal.strMealThumb, meal.idMeal]
					return setRecipes(recipes => [...recipes, newMeal]);
				});
			} else {
				return setRecipes([["Sorry, no meals found in database.", emptyplate, 0]])
			}

		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className="App">

			<section class="hero is-warning" id="header">
				<div class="hero-body">

					<p class="title">
						I'm craving something with...
					</p>

					<form onSubmit={handleSubmit(onSubmit)}className="search-form">
					<input {...register("ingredient")} className="input" type="text" placeholder="Ingredient" />

					<input type="submit" class="button is-warning is-light" id="submit-btn"/>
				</form>

				</div>
			</section>

			<div className="tile" id="mosaic">
				<Recipes recipes={recipes}/>
			</div>

		</div>
	)

}

export default App;
