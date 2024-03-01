const onSelectImage = ( image, tabName, setAttributes ) => {
	if ( ! image || ! image.url ) {
		setAttributes( { url: undefined, id: undefined, alt: '' } );
		return;
	}
	switch ( tabName ) {
		case 'tab1':
			setAttributes( {
				url1: image.url,
				id1: image.id,
				alt1: image.alt,
			} );
			break;
		case 'tab2':
			setAttributes( {
				url2: image.url,
				id2: image.id,
				alt2: image.alt,
			} );
			break;
		case 'tab3':
			setAttributes( {
				url3: image.url,
				id3: image.id,
				alt3: image.alt,
			} );
			break;
		default:
			break;
	}
};

const onSelectURL = ( newURL, tabs_data, setAttributes ) => {
	switch ( tabs_data ) {
		case 'tab1':
			setAttributes( { url1: newURL, id1: undefined, alt1: '' } );
			break;
		case 'tab2':
			setAttributes( { url2: newURL, id2: undefined, alt2: '' } );
			break;
		case 'tab3':
			setAttributes( { url3: newURL, id3: undefined, alt3: '' } );
			break;
		default:
			break;
	}
};

const removeImage = ( tab, setAttributes ) => {
	switch ( tab ) {
		case 'tab1':
			setAttributes( {
				url1: undefined,
				alt1: undefined,
				id1: undefined,
			} );
			break;
		case 'tab2':
			setAttributes( {
				url2: undefined,
				alt2: undefined,
				id2: undefined,
			} );
			break;
		case 'tab3':
			setAttributes( {
				url3: undefined,
				alt3: undefined,
				id3: undefined,
			} );
			break;
		default:
			break;
	}
};

const onChangeAlt = ( newAlt, currentTab, setAttributes ) => {
	switch ( currentTab ) {
		case 'tab1':
			setAttributes( { alt1: newAlt } );
			break;
		case 'tab2':
			setAttributes( { alt2: newAlt } );
			break;
		case 'tab3':
			setAttributes( { alt3: newAlt } );
			break;
		default:
			break;
	}
};

const onChangeTabTitle = ( title, current_tab, setAttributes ) => {
	switch ( current_tab ) {
		case 'tab1':
			setAttributes( { title1: title } );
			break;
		case 'tab2':
			setAttributes( { title2: title } );
			break;
		case 'tab3':
			setAttributes( { title3: title } );
			break;
		default:
			break;
	}
};
export const tabFunctions = {
	onSelectImage,
	onSelectURL,
	removeImage,
	onChangeAlt,
	onChangeTabTitle,
};
