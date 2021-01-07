import React from 'react'
import styles from './styles.module.css'

const HorizontalScroll = ({ text }) => {
	return <div className={styles.test}>Example Component 2: {text}</div>
}

HorizontalScroll.defaultProps = {
	items: [],
	showArrowsIfEnd: false
}

export default HorizontalScroll