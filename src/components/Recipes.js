import React from 'react';
import RecipeCard from './RecipeCard'

export default function Recipes(props) {
	const recipes = props.recipes
	return recipes.map((meal) =>
		<RecipeCard title={meal[0]} image={meal[1]} key={meal[2]}/>
	)
}