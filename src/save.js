import { RichText, useBlockProps } from '@wordpress/block-editor';
import './components/fun';

function save({ attributes }) {
	const {
		url1,
		url2,
		url3,
		alt1,
		alt2,
		alt3,
		tab1,
		tab2,
		tab3,
		title1,
	} = attributes;

	const TabButton = ({ text1, text2, text3 }) => {
		return [
			<button id='btn-tab1' className='tab-button'>{text1}</button>,
			<button id='btn-tab2' className='tab-button'>{text2}</button>,
			<button id='btn-tab3' className='tab-button'>{text3}</button>,
		]
	};

	const TabImage = () => {
		return <img className='tab_image_frontend' src={url1} alt={alt1} />
	}

	return (
		<div {...useBlockProps.save()}>
			<div className='panel__tabs_frontend'>
				<TabButton text1={tab1} text2={tab2} text3={tab3} />
			</div>
			<div className='tab_image'>
				<RichText.Content value={title1} />
				<TabImage></TabImage>
				<input type='hidden' value={url1} className='hidden1' alt={alt1} ></input>
				<input type='hidden' value={url2} className='hidden2' alt={alt2} ></input>
				<input type='hidden' value={url3} className='hidden3' alt={alt3} ></input>
			</div>
		</div>
	);
}
export default save;
