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
		tabs_data,
		title1,
		title2,
		title3,
	} = attributes;

	const TabButton = ({ text }) => {
		return <button className='tab-button' onClick={(c) => console.log(c)}>{text}</button>
	};

	return (
		<div {...useBlockProps.save()}>
			<div className='panel__tabs_frontend'>
				<TabButton text={tab1} />
				<button className='tab-button'>{tab2}</button>
				<button className='tab-button'>{tab3}</button>
			</div>
			<div className='tab_image'>
				<RichText.Content value={title1} />
				<img src={url1} alt={alt1} />
			</div>
		</div>
	);
}
export default save;
