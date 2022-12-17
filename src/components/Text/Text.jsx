import styles from './Text.module.css';

const Text = ({text}) => {
  return (
    <div className={styles.text_container}>
      <span className={styles.text}>
        {text}
      </span>
    </div>
  )
}

export default Text;