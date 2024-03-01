import { __ } from '@wordpress/i18n';
import './editor.scss';

import {
	BlockControls,
	InspectorControls,
	useBlockProps,
	MediaReplaceFlow,
	RichText,
} from '@wordpress/block-editor';
import {
	TabPanel,
	PanelBody,
	TextareaControl,
	ToolbarButton,
	Tooltip,
	ButtonGroup,
	Button,
} from '@wordpress/components';
import Tab from './components/Tab';
import { tabFunctions } from './components/Functions';

function Edit({ attributes, setAttributes }) {
	const {
		url1,
		url2,
		url3,
		id1,
		id2,
		id3,
		alt1,
		alt2,
		alt3,
		tab1,
		tab2,
		tab3,
		tabs_data,
		title1,
		title2,
		title3,
	} = attributes;

	const {
		onSelectImage,
		onSelectURL,
		removeImage,
		onChangeAlt,
		onChangeTabTitle,
	} = tabFunctions;

	const onSelect = (tabName) => {
		setAttributes({ tabs_data: tabName });
	};

	const setTabName = (val, currentTab) => {
		switch (currentTab) {
			case 'tab1':
				setAttributes({ tab1: val });
				break;
			case 'tab2':
				setAttributes({ tab2: val });
				break;
			case 'tab3':
				setAttributes({ tab3: val });
				break;
			default:
				break;
		}
	};

	return (
		<div {...useBlockProps()}>
			{ /* tabs setting panel  */}
			<InspectorControls>
				<PanelBody>
					<RichText.Content tagName="h4" value="Enter Your Title" />
					<br />
					<RichText
						placeholder={__('Title', 'wp-demo-tab')}
						tagName="p"
						onChange={(t) =>
							onChangeTabTitle(t, tabs_data, setAttributes)
						}
					/>
					<TextareaControl
						label={__('Alt Text', 'wp-demo-tab')}
						onChange={(text) =>
							onChangeAlt(text, tabs_data, setAttributes)
						}
						help={__(
							'Alternative text describe your image to people cant see it.',
							'wp-demo-tab'
						)}
					/>
					<ButtonGroup>
						<Button variant="primary">Button 1</Button>
						<Button variant="secondary">Button 2</Button>
						<Button variant="secondary">Button 2</Button>
					</ButtonGroup>
				</PanelBody>
			</InspectorControls>
			{ /* image replace functionality here  */}
			{(url1 || url2 || url3) && (
				<BlockControls>
					<MediaReplaceFlow
						name={__('Replace Image', 'wp-demo-tab')}
						onSelect={(image) =>
							onSelectImage(image, tabs_data, setAttributes)
						}
						onSelectURL={(newURL) =>
							onSelectURL(newURL, tabs_data, setAttributes)
						}
						accept="image/*"
						allowedTypes={['image']}
					/>
					<ToolbarButton
						onClick={() =>
							removeImage(tabs_data, setAttributes)
						}
					>
						{__('Remove Image', 'wp-demo-tab')}
					</ToolbarButton>
				</BlockControls>
			)}

			{ /* All tab display here  */}
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'tab1',
						title: (
							<RichText
								onChange={(val) =>
									setTabName(val, tabs_data)
								}
								value={tab1}
								tagName="p"
							/>
						),
						className: 'tab-button',
					},
					{
						name: 'tab2',
						title: (
							<RichText
								onChange={(val) =>
									setTabName(val, tabs_data)
								}
								value={tab2}
								tagName="p"
							/>
						),
						className: 'tab-button',
					},
					{
						name: 'tab3',
						title: (
							<RichText
								onChange={(val) =>
									setTabName(val, tabs_data)
								}
								value={tab3}
								tagName="p"
							/>
						),
						className: 'tab-button',
					},
				]}
			>
				{(tab) => (
					<div>
						{ /* Tab components comes from components folder that makes code short */}
						{tab.name === 'tab1' && (
							<Tab
								onSelectImage={(image) =>
									onSelectImage(
										image,
										tabs_data,
										setAttributes
									)
								}
								url={url1}
								onSelectURL={(newURL) =>
									onSelectURL(
										newURL,
										tabs_data,
										setAttributes
									)
								}
								alt={alt1}
								title={title1}
							></Tab>
						)}
						{tab.name === 'tab2' && (
							<Tab
								onSelectImage={(image) =>
									onSelectImage(
										image,
										tabs_data,
										setAttributes
									)
								}
								url={url2}
								onSelectURL={(newURL) =>
									onSelectURL(
										newURL,
										tabs_data,
										setAttributes
									)
								}
								alt={alt2}
								title={title2}
							></Tab>
						)}
						{tab.name === 'tab3' && (
							<Tab
								onSelectImage={(image) =>
									onSelectImage(
										image,
										tabs_data,
										setAttributes
									)
								}
								url={url3}
								onSelectURL={(newURL) =>
									onSelectURL(
										newURL,
										tabs_data,
										setAttributes
									)
								}
								alt={alt3}
								title={title3}
							></Tab>
						)}
					</div>
				)}
			</TabPanel>
		</div>
	);
}

export default Edit;
