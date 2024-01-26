
import { useState } from 'react'
import { SliderData } from './sliderData.props'
import styles from './styles.module.scss'
import arrow from '../../../../assets/img/svg/arrow.svg'

const SliderProps = ({ reviews }: SliderData) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [fadeState, setfadeState] = useState<'fade-in' | 'fade-out'>('fade-in')
  const [currentTimer, setcurrentTimer] = useState<NodeJS.Timeout>()

  const  handelClick = (move:number) => {
    const timer = setTimeout(() => {}, 300);
    setfadeState('fade-out');
  }

  return (
    <div className={styles.container}>
        <div className={styles.slider}>

            <div className={styles.slide}>

                <div className={styles.slide__left}>
                    <div className={styles.slide__left__text}>{reviews[currentSlide].text}</div>
                    <div className={styles.slide__left__name}>{reviews[currentSlide].name}</div>
                    <div className={styles.slide__left__job}>{reviews[currentSlide].jobPosition}</div>
                </div>

                <div className={styles.slide__right} style={{backgroundImage: `url(${reviews[currentSlide].image})`}}></div>
            </div>

            <button onClick={() => handelClick(-1)} className={styles.arrow + ' ' + styles.arrow__left}><img src={arrow}/></button> 
            <button onClick={() => handelClick(+1)} className={styles.arrow + ' ' + styles.arrow__right}><img src={arrow}/></button> 
        </div>
    </div>
  )
}


export default SliderProps