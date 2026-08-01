import * as React from 'react';
import QuickLinkCard from './QuickLinkCard';
import { IQuickLink } from './IQuickLink';
import styles from './QuickLinks.module.scss';

const QuickLinks: React.FC = () => {
  const links: IQuickLink[] = [
    { title: 'HR Policies', icon: 'TextDocument' },
    { title: 'Leave Portal', icon: 'Vacation' },
    { title: 'Payroll', icon: 'Money' },
    { title: 'Documents', icon: 'FabricFolder' },
    { title: 'IT Support', icon: 'LaptopSecure' }
  ];

  return (
    <section className={styles.quickLinks}>
      <div className={styles.grid}>
        {links.map((item) => <QuickLinkCard key={item.title} item={item} />)}
      </div>
    </section>
  );
};

export default QuickLinks;
