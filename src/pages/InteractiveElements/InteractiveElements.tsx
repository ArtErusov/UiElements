import { Fragment } from 'react'
// import styles from './styles.module.scss'
import DescriptionDivider from '../../assets/ui/DescriptionDivider/DescriptionDivider'
import SliderProps from './Elements/SliderProps/SliderProps'
import image from '../../assets/img/png/sliderPNGone.png'


const InteractiveElements = () => {


  return (
    <Fragment>
      <DescriptionDivider component={'SliderProps'}  adaptive={false}
      text={'Слайдер с анимацией, данные в котором мы получаем из пропс'}/>

      <SliderProps reviews={[{
          id: 1,
          name: 'Имя фамилия',
          jobPosition: 'Продовец',
          text: 'Слайдер с анимацией, данные в котором мы получаем из пропс',
          image,
        },
        {
          id: 2,
          name: 'фамилия фамилия',
          jobPosition: 'фамилия',
          text: 'фамилия с фамилия, данные в котором мы получаем из пропс',
          image,
          },
      ]}/>
   </Fragment>
  )
}

export default InteractiveElements
