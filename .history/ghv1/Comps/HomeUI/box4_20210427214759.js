import styles from './home3.module.css'

function HomeUI({
    header="",
    v="",
    status="",
}) {
    return <div className={styles.container}>
        <div className={styles.header}>
            {header}
            </div>

        <div className={styles.wordContainer}>

        <div className={styles.lineContainer}>
            <span className={styles.bold}></span>
            <span className={styles.text}>{address}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}></span>
            <span className={styles.text}>{status}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}></span>
            </div>

        </div>








    </div>







} 

export default HomeUI;