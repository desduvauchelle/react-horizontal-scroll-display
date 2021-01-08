import React from 'react'
import styles from './styles.module.css'
import PropTypes from 'prop-types'


const HorizontalScroll = ({
	items,
	wrapperClassName,
	wrapperStyle,
	showHorizontalScrollBar
}) => {
	return <div className={`${styles.wrapper} ${wrapperClassName}`}>
		{items.map((item, i) => {
			return <div key={i}>{item}</div>
		})}
	</div>
}

HorizontalScroll.propTypes = {
	items: PropTypes.array,
	showArrowsIfEnd: PropTypes.bool,
	wrapperClassName: PropTypes.string,
	wrapperStyle: PropTypes.object,
	showHorizontalScrollBar: PropTypes.bool
}

HorizontalScroll.defaultProps = {
	items: [],
	showArrowsIfEnd: false,
	wrapperClassName: ``,
	wrapperStyle: {},
	showHorizontalScrollBar: false

}

export default HorizontalScroll