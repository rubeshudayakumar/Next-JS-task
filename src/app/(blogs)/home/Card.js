import styles from './Card.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Card({image,link}) {
    return (
        <div className={`${styles.container}`}>
                <Image
                    src={image}
                    alt="App router"
                    width={550}
                    height={450}
                />
                <div className={`${styles.row}`}>
                    <Link href={link}>
                        Docs
                    </Link>
                    <span>
                        #webdev #router #nextjs
                    </span>
                </div>
        </div>
    );
}