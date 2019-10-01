import React from 'react';
import Image from 'react-bootstrap/Image';
import '../public/css/index.css';
import Block from '../components/block.jsx';

import ComputerClip from '../public/imgs/computer-clip.jpg';

class Body extends React.Component {
	render() {
		return (
			<div id='body' className="bg">
				<Block id="block0" title="[Insert Name Here]" img={ComputerClip}>
					Lorem ipsum dolor sit amet, aliquip forensibus at vel, est menandri gubergren no. Vix amet imperdiet cu, at erat nemore insolens quo, in odio adhuc sea. Illum salutatus id per. Eam soluta tamquam no, id aliquam nusquam eleifend per, et modo epicuri liberavisse ius. Est ut ullum epicurei repudiare. Vel ex ceteros sapientem.
				</Block>
			</div>
		)
	}
}

export default Body;
