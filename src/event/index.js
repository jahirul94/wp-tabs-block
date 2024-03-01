import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/wp-demo-events', {
	icon: 'admin-customizer',
	keywords: [ 'events', 'calenders' ],
	parent: [ 'create-block/wp-demo-tab' ],
	supports: {
		reusable: false,
		html: false,
	},
	usesContext: [ 'create-block/wp-demo-tabs' ],
	edit: Edit,
	save,
} );
