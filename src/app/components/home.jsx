import React from 'react';
import Image from 'react-bootstrap/Image';
import '../public/css/index.css';
import Block from './block.jsx';

import ComputerClip from '../public/imgs/computer-clip.jpg';

import Keywords from '../misc/keywords.js';

class Home extends React.Component {
	render() {
		return (
			<div id='body' className="bg">
				<Block id="block0" title={Keywords.NAME+" Consulting"} img={ComputerClip}>
					Lorem ipsum dolor sit amet, aliquip forensibus at vel, est menandri gubergren no. Vix amet imperdiet cu, at erat nemore insolens quo, in odio adhuc sea. Illum salutatus id per. Eam soluta tamquam no, id aliquam nusquam eleifend per, et modo epicuri liberavisse ius. Est ut ullum epicurei repudiare. Vel ex ceteros sapientem.
				</Block>
				<br />
				<Block id="block1" title="What We Are" img={ComputerClip} inverted>
					{Keywords.NAME} is a technology consulting buisness for start ups. We
					specialize in anwsering questions on how to intergrate technology to
					improve your buisness. {Keywords.NAME} anwsers your questions in regards
					to feasability of different tech ideas, who to hire for your integration,
					and what investments you might need to make to begin.
					<br /><br />
					Areas of Specialty Include:<br />
						- Website/Web Development<br />
						- Artificial Intelligence<br />
						- App Development<br />
				</Block>
			</div>
		)
	}
}

export default Home;
