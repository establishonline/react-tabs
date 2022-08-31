import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
	static propTypes = {
		activeTab: PropTypes.string.isRequired,
		tabIndex: PropTypes.number.isRequired,
		label: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
	};

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	onKeyDown = () => {
		const { label, onKeyDown } = this.props;
		onKeyDown(label);
	};

	render() {
		const {
			onClick,
			onKeyDown,
			props: { activeTab, tabIndex, label },
		} = this;

		let className =
			"py-6 px-4 border-l-4 border-gray text-gray text-xl font-bold cursor-pointer";

		if (activeTab === label) {
			className += " tab-active";
		}

		return (
			<li
				role='none'
				tabIndex={tabIndex}
				className={className}
				onClick={onClick}
				onKeyDown={onKeyDown}>
				{label}
			</li>
		);
	}
}

export default Tab;
