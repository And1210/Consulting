import React from 'react';
import Image from 'react-bootstrap/Image';
import '../public/css/index.css';

import ComputerClip from '../public/imgs/computer-clip.jpg';

class Body extends React.Component {
	render() {
		return (
			<div id='body' className="bg">
				<div id='block0' className="block">
					<div className="block-text">
						<h1>[Insert Name Here]</h1>
						<p>
							Lorem ipsum dolor sit amet, aliquip forensibus at vel, est menandri gubergren no. Vix amet imperdiet cu, at erat nemore insolens quo, in odio adhuc sea. Illum salutatus id per. Eam soluta tamquam no, id aliquam nusquam eleifend per, et modo epicuri liberavisse ius. Est ut ullum epicurei repudiare. Vel ex ceteros sapientem.
						</p>
					</div>
					<div className="block-image">
						<img src={ComputerClip} style={{'max-width': '100px', 'max-height': '100px'}} />
					</div>
				</div>
			</div>
		)
	}
}

export default Body;
