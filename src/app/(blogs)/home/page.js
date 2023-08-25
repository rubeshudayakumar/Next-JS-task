import Card from "./Card";
import styles from './page.module.scss';

export default function Home(){
    return (
        <div className={`${styles['home-container']}`}>
            <Card image='/app_router.png' link='https://nextjs.org/docs/app/building-your-application/routing/defining-routes'/>
            <Card image='/pages_router.png' link='https://nextjs.org/docs/pages/building-your-application/routing' />
        </div>
    );
};