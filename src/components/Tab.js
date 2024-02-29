import { MediaPlaceholder } from '@wordpress/block-editor';
import React from 'react';

function Tab({ url, onSelectImage, onSelectURL, alt }) {
    return (
        <div>
            <MediaPlaceholder
                icon="admin-users"
                onSelect={onSelectImage}
                onSelectURL={onSelectURL}
                accept="image/*"
                allowedTypes={['image']}
                disableMediaButtons={url}
            />
            {url && (
                <div
                    className={'tab_image'}
                >
                    <img src={url} alt={alt} />
                </div>
            )}
        </div>
    )
}

export default Tab;