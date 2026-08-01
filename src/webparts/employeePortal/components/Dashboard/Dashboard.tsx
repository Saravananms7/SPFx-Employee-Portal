import * as React from 'react';
import styles from './Dashboard.module.scss';
import DashboardCard from './DashboardCard';
import type { IDashboardCard } from './IDashboardCard';



const dashboard: React.FC =() =>{
    const dashboardCards: IDashboardCard[] = [
        {
        title: "Announcements",
        value: "12",
        icon: "📢"
        },

        {
            title: "Documents",
            value: "34",
            icon: "📄"
        },

        {
            title: "Emplyees",
            value: "56",
            icon: "👥"
        },

        {
            title: "Events",
            value: "8",
            icon: "📅"
        }
    ];


    return(
      
        <section className={styles.dashboard}>
            <h2>Dashboard</h2>
            <div className={styles.grid}>
                {dashboardCards.map((card, index) => (
                    <DashboardCard key={index} card={card} />
                ))}
            </div>
        </section>
    );
};

export default dashboard;