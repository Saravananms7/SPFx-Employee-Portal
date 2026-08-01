import * as React from 'react';
import {IDashboardCard} from './IDashboardCard';
import styles from './Dashboard.module.scss';

interface IDashboardCardProps {
    card: IDashboardCard;    
}

const DashboardCard: React.FC<IDashboardCardProps> = ({card}) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {card.icon}
            </div>

            <div>
                <h3>{card.value}</h3>
                <p>{card.title}</p>
            </div>
        </div>
    );
};

export default DashboardCard;