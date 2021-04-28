import styles from './calPost.module.css'

function HomeUI({
    header="Covenant House Vancouver",
    address="325 W Pender St, Vancouver",
    status="low",
    status2="full"
}) {
    return <div className={styles.container}>
        <div className={styles.header}>
            {header}
            </div>

        <div className={styles.wordContainer}>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Address:</span>
            <span className={styles.text}>{address}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Donation Level:</span>
            <span className={styles.text}>{status}</span>
            </div>

        <div className={styles.lineContainer}>
            <span className={styles.bold}>Volunteer Help:</span>
            <span className={styles.text}>{status2}</span>
            </div>

        </div>








    </div>







} 

export default HomeUI;