import { __ } from '@wordpress/i18n';
import './editor.scss';
import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	MediaReplaceFlow,
	RichText
} from '@wordpress/block-editor';
import { TabPanel, PanelBody, TextareaControl, ToolbarButton, ColorPalette } from '@wordpress/components';
import Tab from './components/Tab';
import { tabFunctions } from './components/Functions';
import { ColorPicker } from '@wordpress/components';


function Edit({ attributes, setAttributes }) {
	const { url1, url2, url3, id1, id2, id3, alt1, alt2, alt3, tabs_data } = attributes;
	const { onSelectImage } = tabFunctions;
	const onSelect = (tabName) => {
		setAttributes({ tabs_data: tabName });
	};

	const onSelectURL = (newURL, tabs_data) => {
		console.log(newURL, tabs_data)
		switch (tabs_data) {
			case 'tab1':
				setAttributes({ url1: newURL, id1: undefined, alt1: '' });
				break;
			case 'tab2':
				setAttributes({ url2: newURL, id2: undefined, alt2: '' });
				break;
			case 'tab3':
				setAttributes({ url3: newURL, id3: undefined, alt3: '' });
				break;
			default:
				break;
		}
	};
	const onChangeAlt = (value) => {
		setAttributes({ alt1: value });
	}

	const removeImage = (tab) => {
		switch (tab) {
			case 'tab1':
				setAttributes({ url1: undefined, alt1: undefined, id1: undefined });
				break;
			case 'tab2':
				setAttributes({ url2: undefined, alt2: undefined, id2: undefined });
				break;
			case 'tab3':
				setAttributes({ url3: undefined, alt3: undefined, id3: undefined });
				break;
			default:
				break;
		}
	};


	const onChangeTitle = (v) => {
		console.log(v)
	}

	const onChangeColor = (value) => {
		console.log(value);
	}

	return (
		<div {...useBlockProps()}>
			{/* tabs setting panel  */}
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
					<RichText
						placeholder={__('Enter your title', 'wp-demo-tab')}
						tagName="p"
						onChange={onChangeTitle}
						value=''
					/>
					<ColorPicker onChange={onChangeColor} />

				</PanelBody>
			</InspectorControls>
			{/* image replace functionality here  */}
			{(url1 || url2 || url3) && (
				<BlockControls>
					<MediaReplaceFlow
						name={__('Replace Image', 'wp-demo-tab')}
						onSelect={(image) => onSelectImage(image, tabs_data, setAttributes)}
						onSelectURL={(newURL) => onSelectURL(newURL, tabs_data)}
						accept="image/*"
						allowedTypes={['image']}
						mediaId={id1}
					/>
					<ToolbarButton onClick={() => removeImage(tabs_data)}>
						{__('Remove Image', 'wp-demo-tab')}
					</ToolbarButton>
				</BlockControls>
			)}

			{/* All tab display here  */}
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
						{/* Tab components comes from components folder that makes code short */}
						{
							tab.name === 'tab1' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url1} onSelectURL={(newURL) => onSelectURL(newURL, tabs_data)} alt={alt1}></Tab>
						}
						{
							tab.name === 'tab2' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url2} onSelectURL={(newURL) => onSelectURL(newURL, tabs_data)} alt={alt2}></Tab>
						}
						{
							tab.name === 'tab3' && <Tab onSelectImage={(image) => onSelectImage(image, tabs_data, setAttributes)} url={url3} onSelectURL={(newURL) => onSelectURL(newURL, tabs_data)} alt={alt3}></Tab>
						}
					</div>
				)}
			</TabPanel>
		</div>
	);
}

export default Edit;
