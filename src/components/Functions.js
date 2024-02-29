
const onSelectImage = (image, tabName, setAttributes) => {
    if (!image || !image.url) {
        setAttributes({ url: undefined, id: undefined, alt: '' });
        return;
    }
    switch (tabName) {
        case 'tab1':
            setAttributes({ url1: image.url, id1: image.id, alt1: image.alt });
            break;
        case 'tab2':
            setAttributes({ url2: image.url, id2: image.id, alt2: image.alt });
            break;
        case 'tab3':
            setAttributes({ url3: image.url, id3: image.id, alt3: image.alt });
            break;
        default:
            break;
    }
};


export const tabFunctions = { onSelectImage };