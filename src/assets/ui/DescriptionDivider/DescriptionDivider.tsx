import styles from './styles.module.scss'


const DescriptionDivider = (props: { text: string, component: string, adaptive: boolean, }) => {
return (
  <div className={styles.div}>
    <p className={styles.component}>{props.component}</p>
    <p className={styles.text}>{props.text}</p>
    <p className={styles.adaptive}>{props.adaptive ? "с адаптивом" : "без адаптива"}</p>
  </div>
  )
}

export default DescriptionDivider;