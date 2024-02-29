import { useBlockProps } from '@wordpress/block-editor';
export default function save({ attributes }) {
	const { url1, url2, url3, alt1, alt2, alt3, tabs_data } = attributes;

	return (
		<div {...useBlockProps.save()}>
			{url1 && <img src={url1} alt={alt1} />}
			{url2 && <img src={url2} alt={alt2} />}
			{url3 && <img src={url3} alt={alt3} />}
		</div>
	);
}
