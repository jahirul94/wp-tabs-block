import { __ } from '@wordpress/i18n';
import { useEffect, useState, useRef } from '@wordpress/element';
import './editor.scss';
// import {
// 	Spinner,
// 	withNotices,
// 	ToolbarButton,
// 	PanelBody,
// 	TextareaControl,
// 	SelectControl,
// 	Icon,
// 	Tooltip,
// 	,
// 	Button,
// } from '@wordpress/components';
import {
	useBlockProps,
	RichText,
	MediaPlaceholder,
	BlockControls,
	MediaReplaceFlow,
	InspectorControls,
	store as blockEditorStore,
} from '@wordpress/block-editor';
import { TabPanel } from '@wordpress/components';

const onSelect = (tabName) => {
	console.log('Selecting tab', tabName);
};

export default function Edit() {
	return (
		<div {...useBlockProps()}>
			<TabPanel
				className="my-tab-panel"
				activeClass="active-tab"
				onSelect={onSelect}
				tabs={[
					{
						name: 'tab1',
						title: 'Tab 1',
						className: 'tab-one',
					},
					{
						name: 'tab2',
						title: 'Tab 2',
						className: 'tab-two',
					},
				]}
			>
				{(tab) => <p>{tab.title}</p>}
			</TabPanel>
		</div>
	);
}
