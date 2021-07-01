import React from 'react'

const RecipeCard = (props) => {

	const title = props.title
	const image = props.image

	return (
		<div className="tile" id="recipe-tile">
			<div className="card tile is-child box">
				<div className="card-image">
					<figure className="image is-4by3">
						<img src={image} alt="Food"/>
					</figure>
				</div>
				<div className="card-content">
						<p className="title is-4">{title}</p>
				</div>
			</div>
		</div>
	);
}

export default RecipeCard