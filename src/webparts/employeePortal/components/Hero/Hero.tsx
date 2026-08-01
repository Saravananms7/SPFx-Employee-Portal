import * as React from 'react';
import{
    Stack,
    Text,
    SearchBox,
    PrimaryButton
} from  "@fluentui/react";

import styles from './Hero.module.scss';
import QuickLinks from '../QuickLinks/QuickLinks';

export interface IHeroProps{
    userName: string;
}

const Hero: React.FC<IHeroProps> =({userName})=>{
    const hour =new Date().getHours();

    const greeting=
    hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

    return(
        <section className={styles.hero}>

            <Stack
                className={styles.overlay}
                horizontalAlign="center"
                tokens={{childrenGap:20}}
            >
                <Text className={styles.badge}>
                    Employee Portal
                </Text>

                <Text className={styles.title}>
                    {greeting}, {userName}!
                </Text>

                <Text className={styles.subtitle}>
                    One secure place to access all your work-related information and resources.
                </Text>

                <div className={styles.searchContainer}>

                <SearchBox
                    placeholder="Search for documents, announcements, and more..."
                    className={styles.searchBox}
                />

                <PrimaryButton
                    text="Search"
                    className={styles.button}
                />

                </div>

            <QuickLinks />
        </Stack>
    </section>
    );
};


export default Hero;
