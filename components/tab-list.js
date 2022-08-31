import React from "react";

import Tabs from "./tabs";

const TabList = () => {
	return (
		<section className='py-16 bg-black rounded-tl-10xl'>
			<div className='container'>
				<Tabs>
					<div label='Tab 1'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Natoque penatibus et magnis dis parturient montes.
						</p>
					</div>
					<div label='Tab 2'>
						<p>
							Nunc consequat ornare egestas. Morbi euismod ipsum sed suscipit
							mollis. Suspendisse vel orci at nisl imperdiet faucibus ac sodales
							nibh. Nulla lacinia leo id hendrerit bibendum. Nullam felis velit,
							consectetur eget pellentesque at, pretium non.
						</p>
					</div>
					<div label='Tab 3'>
						<p>
							Curabitur eget sagittis elit, sit amet ullamcorper lorem. Interdum
							et malesuada fames ac ante ipsum primis in faucibus. Duis vel
							tempor lectus. In nec mauris nec orci gravida molestie nec vitae
							lectus. Integer eget felis egestas, tempus lectus in, lacinia
							libero. Aliquam erat volutpat. Duis ultricies massa sem.
						</p>
					</div>
					<div label='Tab 4'>
						<p>
							Suspendisse quis commodo eros. Vivamus porttitor nisi non leo
							ultrices, eu imperdiet ipsum semper. Cras ut sodales quam. Vivamus
							vel ultricies elit. Etiam hendrerit justo sit amet elit sagittis,
							at finibus ipsum viverra. Fusce facilisis dictum gravida.
						</p>
					</div>
					<div label='Tab 5'>
						<p>
							Vestibulum ultricies eleifend lorem in dignissim. Integer
							scelerisque diam vitae urna ultricies posuere. Ut enim mauris,
							consectetur suscipit ligula eu, molestie sagittis purus. Nunc
							viverra nulla hendrerit arcu dapibus, eget posuere elit viverra.
							Cras et placerat massa, sit amet commodo nisl.
						</p>
					</div>
				</Tabs>
			</div>
		</section>
	);
};

export default TabList;
