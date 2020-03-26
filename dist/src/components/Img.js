import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import ImgLeft from './Images/Slovakiet_2019_bjerg.jpg'
import ImgRight from './Images/Slovakiet_2019_Paintball.jpg'
 

const useStyles = makeStyles({
    left: {
        overflow: 'visible',
        width: '50%',
        padding: '2%',
        direction: 'rtl',
    },
    right: {
        overflow: 'visible',
        width: '50%',
        padding: '2%',
    },
})

const Img = ({ alt, left }) => {
    const classes = useStyles()
    if (left) {
        return (
            <div className={classes.left}>
                <img src={ImgLeft} alt={alt} />
            </div>
        )
    } else {
        return (
            <div className={classes.right}>
                <img src={ImgRight} alt={alt} />
            </div>
        )
    }
}

Img.propTypes = {
    alt: PropTypes.string,
    class: PropTypes.bool,
}

export default Img