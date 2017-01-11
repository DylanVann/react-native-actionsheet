import {StyleSheet, Dimensions, StatusBar} from 'react-native';

export const hairlineWidth = StyleSheet.hairlineWidth;

export default StyleSheet.create({
  container: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
  },
	overlay: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0,
		backgroundColor: 'black',
	}
});

export const sheetStyle = StyleSheet.create({
	bd: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		left: 0,
		backgroundColor: '#e5e5e5'
	},
	title: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	titleText: {
		color: '#8f8f8f',
		fontSize: 12
	},
});

export const btnStyle = StyleSheet.create({
	wrapper: {
		height: 50,
		marginTop: hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 18
	}
});





