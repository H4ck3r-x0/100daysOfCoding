import React from "react";
import { render } from "react-dom";
import * as math from "mathjs";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { screen: "", result: "" };
	}
	handleEqual = () => {
		this.setState({ result: math.evaluate(this.state.screen) });
	};
	onButtonsClick = event => {
		const value = event.target.value;
		this.setState({ screen: this.state.screen + value });
	};

	handleClearScreen = () => {
		this.setState({ screen: "", result: "" });
	};
	render() {
		return (
			<div className="text-white">
				<div className="flex h-screen items-center justify-center">
					{/*Calc container starts here*/}
					<div
						className="clac-container bg-gray-800 shadow-2xl"
						style={{ height: "484", width: "300px" }}
					>
						{/*Header starts here*/}
						<header className="flex justify-end screenBg h-32 border-b-1 border-gray-800">
							<div className="flex flex-col items-center justify-center mr-2">
								<span className="text-gray-400 text-sm font-semibold tracking-wider">
									{this.state.screen ? this.state.screen : ""}
								</span>
								<h1 className="mt-4 text-4xl font-semibold tracking-wider">
									{this.state.result}
								</h1>
							</div>
						</header>
						{/*Header ends here*/}

						{/*Calc body starts here*/}
						<section className="clac-button">
							<div className="header flex flex-row">
								<button
									onClick={this.handleClearScreen}
									type="button"
									className="text-lg text-red-500 font-semibold flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									C
								</button>

								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="-"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									+/-
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="%"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									%
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="/"
									type="button"
									className=" text-lg flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									/
								</button>
							</div>

							<div className="header flex">
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="7"
									type="button"
									className=" text-lg  font-semibold flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									7
								</button>

								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="8"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									8
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="9"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									9
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="*"
									type="button"
									className=" text-lg flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									&#215;
								</button>
							</div>
							<div className="header flex">
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="4"
									type="button"
									className="text-lg  font-semibold flex items-center justify-center w-20 h-16 buttonsColor border-b border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									4
								</button>

								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="5"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									5
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="6"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									6
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="-"
									type="button"
									className=" text-lg flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									&#8722;{" "}
								</button>
							</div>
							<div className="header flex">
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="1"
									type="button"
									className="text-lg  font-semibold flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									1
								</button>

								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="2"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									2
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="3"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									3
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="+"
									type="button"
									className=" text-lg flex items-center justify-center w-20 h-16 bg-gray-700 border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									&#43;{" "}
								</button>
							</div>
							<div className="header flex">
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="."
									type="button"
									className=" text-lg  font-semibold flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									&#8729;
								</button>

								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="0"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									0
								</button>
								<button
									onClick={e => {
										this.onButtonsClick(e);
									}}
									value="<"
									type="button"
									className=" text-lg  flex items-center justify-center w-20 h-16 buttonsColor border-b border-r border-gray-800 p-1 focus:outline-none"
								>
									&#60;{" "}
								</button>
								<button
									onClick={this.handleEqual}
									type="button"
									className=" text-lg flex items-center justify-center w-20 h-16 bg-gray-700 border-r border-gray-800 p-1 focus:outline-none"
								>
									={" "}
								</button>
							</div>
						</section>
						{/*Calc ends starts here*/}
					</div>
					{/*Calc container ends here*/}
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
