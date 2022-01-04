import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/lois.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return{
        props: { names: data }
    }
}

const Users = ({ names }) => {
    return ( 
        <>
        <Head>
        <title>NextTest | Users</title>
        <meta name="keywords" content="lois"/>
      </Head>
        <div>
            <h1>Page Users</h1>
            {names.map(name => (
                <Link href={ '/lois/' + name.id } key={name.id}>
                    <a className={styles.single}>
                        <h3>{ name.name }, { name.address.city }</h3>
                    </a>
                </Link>
            ))}
        </div>
        </>
    );
}
 
export default Users;