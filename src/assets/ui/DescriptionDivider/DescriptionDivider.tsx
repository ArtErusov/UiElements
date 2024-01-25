import styles from './styles.module.scss'


const DescriptionDivider = (props: { title: string, }) => {
return (
  <div>
    <p className={styles.root}>{props.title}</p>
  </div>
  )
}

export default DescriptionDivider;