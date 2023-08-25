import Navigation from './(components)/Navigation';
import styles from './layout.module.scss';

export default function Layout({ children }) {

    const links = [
        {
            name: 'home',
            href: '/home',
        },
        {
            name: 'about',
            href: '/about',
        }
    ];

    return (
        <>
            <main>
                <Navigation navLinks={links} />
            </main>
            <section className={`${styles['container']}`}>
                {children}
            </section>
        </>
    );
}
