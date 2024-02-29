import { __ } from '@wordpress/i18n';
import './editor.scss';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	MediaReplaceFlow
} from '@wordpress/block-editor';
import { TabPanel, PanelBody, TextareaControl, ToolbarButton } from '@wordpress/components';
import Tab from './components/Tab';
import { tabFunctions } from './components/Functions';


function Edit({ attributes, setAttributes }) {
	const { url1, url2, url3, id1, id2, id3, alt1, alt2, alt3, tabs_data } = attributes;
	const { onSelectImage } = tabFunctions;
	const onSelect = (tabName) => {
		setAttributes({ tabs_data: tabName });
	};

	const onSelectURL = (newURL) => {
		setAttributes({
			url: newURL,
			id: undefined,
			alt: '',
		});
	};
	const onChangeAlt = (value) => {
		setAttributes({ alt1: value });
	}

	const removeImage = (id) => {
		switch (id) {
			case '1':
				setAttributes({ url1: undefined, alt1: undefined, id1: undefined });
				break;
			case '2':
				setAttributes({ url2: undefined, alt2: undefined, id2: undefined });
				break;
			case '3':
				setAttributes({ url3: undefined, alt3: undefined, id3: undefined });
				break;
			default:
				break;
		}
	};

	return (
		<div {...useBlockProps()}>
			<InspectorControls>
				<PanelBody>
					<TextareaControl
						label={__('Alt Text', 'wp-demo-tab')}
						onChange={onChangeAlt}
						help={__(
							'Alternative text describe your image to people cant see it.',
							'wp-demo-tab'
						)}
					/>
				</PanelBody>
			</InspectorControls>
			{(url1 || url2 || url3) && (
				<BlockControls group="inline">
					<MediaReplaceFlow
						name={__('Replace Image', 'wp-demo-tab')}
						onSelect={onSelectImage}
						onSelectURL={onSelectURL}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id1}
					/>
					<ToolbarButton onClick={removeImage}>
						{__('Remove Image', 'wp-demo-tab')}
					</ToolbarButton>
				</BlockControls>
			)}
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'tab1',
						title: 'Tab 1',
						className: 'tab-button',
					},
					{
						name: 'tab2',
						title: 'Tab 2',
						className: 'tab-button',
					},
					{
						name: 'tab3',
						title: 'Tab 3',
						className: 'tab-button',
					},
				]}
			>
				{(tab) => (
					<div>
						{
							tab.name === 'tab1' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url1} onSelectURL={onSelectURL} alt={alt1}></Tab>
						}
						{
							tab.name === 'tab2' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url2} onSelectURL={onSelectURL} alt={alt2}></Tab>
						}
						{
							tab.name === 'tab3' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url3} onSelectURL={onSelectURL} alt={alt3}></Tab>
						}
					</div>
				)}
			</TabPanel>
		</div>
	);
}

export default Edit;
