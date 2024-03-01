import { MediaPlaceholder, RichText } from '@wordpress/block-editor';
import React from 'react';
import { __ } from '@wordpress/i18n';

function Tab( { url, onSelectImage, onSelectURL, alt, title } ) {
	return (
		<div>
			{ title && (
				<RichText.Content
					placeholder={ __( 'Title', 'wp-demo-tab' ) }
					tagName="p"
					value={ title }
				/>
			) }
			<MediaPlaceholder
				icon="admin-users"
				onSelect={ onSelectImage }
				onSelectURL={ onSelectURL }
				accept="image/*"
				allowedTypes={ [ 'image' ] }
				disableMediaButtons={ url }
			/>
			{ url && (
				<div className={ 'tab_image' }>
					<img src={ url } alt={ alt } />
				</div>
			) }
		</div>
	);
}

export default Tab;
