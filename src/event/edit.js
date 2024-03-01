import { __ } from '@wordpress/i18n';
import './editor.scss';
import { useBlockProps } from '@wordpress/block-editor';

function Edit() {
	return <div { ...useBlockProps() }></div>;
}

export default Edit;
