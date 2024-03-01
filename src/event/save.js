import { useBlockProps } from '@wordpress/block-editor';

function save() {
	return <div { ...useBlockProps.save() }></div>;
}
export default save;
