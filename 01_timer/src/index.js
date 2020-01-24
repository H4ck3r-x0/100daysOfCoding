import React from "react";
import { render } from "react-dom";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			minutes: 0,
			seconds: 0,
			statusImage: "1.png",
			ready: false
		};

		this.renderResualt = this.renderResualt.bind(this);
	}
	componentDidMount() {}
	handleStart = () => {
		if (this.state.minutes === 0 && this.state.seconds === 0) {
			alert("Please enter a time to start!");
			return;
		}
		this.setState({
			ready: true,
			statusImage: "01.png"
		});
		this.myInterval = setInterval(() => {
			const { seconds, minutes } = this.state;

			if (seconds > 0) {
				this.setState(({ seconds }) => ({
					seconds: seconds - 1
				}));
			}
			if (seconds <= 5) {
				this.setState({ statusImage: "02.png" });
			}

			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(this.myInterval);
					this.setState({
						statusImage: "2.png"
					});
				} else {
					this.setState(({ minutes }) => ({
						minutes: minutes - 1,
						seconds: 59
					}));
				}
			}
		}, 1000);
	};
	handelStop = () => {
		clearInterval(this.myInterval);
		this.setState({
			statusImage: "01.png",
			minutes: 0,
			seconds: 0
		});
	};
	handlePause = () => {
		clearInterval(this.myInterval);
	};
	handleRestart = () => {
		clearInterval(this.myInterval);

		this.setState({ minutes: 0, seconds: 0, ready: false });
	};
	handleOnInputsChange = event => {
		const value = event.target.value;
		this.setState({
			...this.state,
			[event.target.name]: value
		});
	};
	renderResualt() {
		const { minutes, seconds, ready } = this.state;

		if (ready === true && minutes === 0 && seconds === 0) {
			return (
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-6xl text-red-400">Sorry Busted!!</h1>
					<button
						onClick={this.handleRestart}
						className="uppercase mt-6 bg-red-400 text-white px-10 py-1 text-sm font-bold rounded"
					>
						Try Again
					</button>
				</div>
			);
		}

		if (!ready) {
			return (
				<div className="flex flex-col items-center">
					<div className="mt-4">
						<input
							name="minutes"
							type="number"
							min="0"
							className="mr-1 border border-blue-200 focus:outline-none focus:bg-gray-200  px-4 py-1 text-gray-600"
							placeholder="Minutes?"
							onChange={this.handleOnInputsChange}
						/>
						<input
							name="seconds"
							type="number"
							min="0"
							className="border border-blue-200 focus:outline-none focus:bg-gray-200  px-4 py-1 text-gray-600"
							placeholder="Seconds?"
							onChange={this.handleOnInputsChange}
						/>
					</div>
					<button
						onClick={this.handleStart}
						className="uppercase mt-6 bg-red-400 text-white px-10 py-1 text-sm font-bold rounded"
					>
						Start
					</button>
				</div>
			);
		} else {
			return (
				<div className="controls flex">
					<div className="flex flex-col items-center">
						<h1 className="text-6xl font-semibold text-gray-200 font-mono tracking-wider">
							{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
						</h1>
						<div className="flex flex-row">
							<button
								onClick={this.handleStart}
								className="text-3xl mr-4 focus:outline-none hover:text-blue-400"
							>
								<i className="fas fa-play-circle"></i>
							</button>
							<button
								onClick={this.handlePause}
								className="text-3xl mr-4 focus:outline-none hover:text-blue-400"
							>
								<i className="fas fa-pause-circle"></i>
							</button>
							<button
								onClick={this.handleRestart}
								className="text-3xl focus:outline-none hover:text-blue-400"
							>
								<i className="fas fa-stop-circle"></i>
							</button>
						</div>
					</div>
				</div>
			);
		}
	}
	render() {
		return (
			<div>
				<div className="logo flex h-screen items-center justify-center -mt-32 animated bounceInDown">
					<div className="flex flex-col items-center justify-center">
						<div className="p-6">
							<img
								src={`./images/${this.state.statusImage}`}
								alt="girl"
							/>
						</div>
						<div className="flex">{this.renderResualt()}</div>
					</div>
				</div>
			</div>
		);
	}
}

render(<App />, document.getElementById("root"));
