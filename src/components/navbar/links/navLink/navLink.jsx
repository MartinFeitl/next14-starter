import styles from './navLink.module.css'
import Link from 'next/link'

const NavLink = ({item}) => {
    return(
        <Link href={item.path} className={styles.container}>
            {item.title}
        </Link>
    )
}

export default NavLink