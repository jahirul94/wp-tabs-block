import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import Edit from './edit';
import save from './save';

registerBlockType('create-block/wp-demo-tab', {
	edit: Edit,
	save,
});
