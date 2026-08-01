import * as React from "react";
import { Icon } from "@fluentui/react";
import styles from "./FeaturedResources.module.scss";

const FeaturedResources: React.FC = () => {

    const resources = [
        {
            title: "HR Policies",
            description: "Company policies and guidelines",
            icon: "TextDocument"
        },
        {
            title: "Leave Portal",
            description: "Apply and manage leave",
            icon: "Vacation"
        },
        {
            title: "Payroll",
            description: "View payslips and salary",
            icon: "Money"
        },
        {
            title: "Employee Directory",
            description: "Find employees",
            icon: "People"
        },
        {
            title: "Holiday Calendar",
            description: "Upcoming holidays",
            icon: "Calendar"
        },
        {
            title: "IT Support",
            description: "Raise support requests",
            icon: "LaptopSecure"
        }
    ];

    return(

        <section className={styles.container}>

            <h2>Featured Resources</h2>

            <p>
                Quick access to essential resources for employees. Click on any resource to explore more.
            </p>

            <div className={styles.grid}>

                {resources.map((resource) =>(

                    <div className={styles.card} key={resource.title}>

                        <Icon
                            iconName={resource.icon}
                            className={styles.icon}
                        />

                        <h3>{resource.title}</h3>

                        <span>{resource.description}</span>

                    </div>
                ))}

            </div>
        </section>
    );
};

export default FeaturedResources;