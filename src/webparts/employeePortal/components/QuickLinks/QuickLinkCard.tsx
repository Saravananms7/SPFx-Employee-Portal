import * as React from "react";
import { Icon } from "@fluentui/react";
import { IQuickLink } from "./IQuickLink";
import styles from "./QuickLinks.module.scss";

interface IQuickLinkCardProps {
    item: IQuickLink;
}

const QuickLinkCard: React.FC<IQuickLinkCardProps> = ({ item }) => {

    return (

        <div className={styles.card}>

            <Icon
                iconName={item.icon}
                className={styles.icon}
            />

            <span className={styles.title}>
                {item.title}
            </span>

        </div>

    );

};

export default QuickLinkCard;
