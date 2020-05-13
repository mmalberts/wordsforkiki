import React, { Component } from "react";
import Card from '../components/card';

const row1 = [
	{
		name: "Michael",
		src: "./images/michael.jpg",
		url: "/michael"
	},
	{
		name: "Kathleen",
		src: "./images/kathleen.jpg",
		url: "/kathleen"
	},
	{
		name: "Erica",
		src: "./images/erica.jpg",
		url: "/erica"
	},
	{
		name: "Mat",
		src: "./images/mat.jpg",
		url: "/mat"
	}
]

const row2 = [
	{
		name: "Chloe",
		src: "./images/chloe.jpg",
		url: "/chloe"
	},
	{
		name: "Callie",
		src: "./images/callie.jpg",
		url: "/callie"
	},
	{
		name: "Emmanuel",
		src: "./images/emmanuel.jpg",
		url: "/emmanuel"
	},
	{
		name: "Liaht",
		src: "./images/liaht.jpg",
		url: "/liaht"
	},
	{
		name: "Claire",
		src: "./images/claire.jpg",
		url: "/claire"
	}
]

const row3 = [
	{
		name: "Anna",
		src: "./images/anna.jpg",
		url: "/anna"
	},
	{
		name: "Cavin",
		src: "./images/cavin.jpg",
		url: "/cavin"
	},
	{
		name: "Molly",
		src: "./images/molly.jpg",
		url: "/molly"
	},
	{
		name: "Maggie",
		src: "./images/maggie.jpg",
		url: "/maggie"
	}
]

class MainPage extends Component {
	render() {
		return (
			<div className="cardholder">
				<h3 className="greeting">Hi Kiki! Who do you want to hear from?</h3>
				<div class="row">
					{row1.map((item, index) => 
						<Card name={item.name} src={item.src} url={item.url} />
					)}
				</div>
				<div class="row">
					{row2.map((item, index) => 
						<Card name={item.name} src={item.src} url={item.url} />
					)}
				</div>
				<div class="row">
					{row3.map((item, index) => 
						<Card name={item.name} src={item.src} url={item.url} />
					)}
				</div>
			</div>
		)
	}
}

export default MainPage;