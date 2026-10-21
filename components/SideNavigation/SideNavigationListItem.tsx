import type { ReactNode } from "react";
import AppIndicator from "../../icons/app-indicator.svg";

interface SideNavigationListItemProps {
  label: string;
  href: string;
  isOpen: boolean;
  icon: any;
}

function SideNavigationListItem({label, href, isOpen, icon}: SideNavigationListItemProps) {
  // OPEN: Show icon and label and expanded width
  // CLOSED: Show icon, no label, and collapsed width

  return (
    <li>
      <a href={href} target="_blank" className={`SideNavItem ${isOpen ? "open" : "collapsed"}`}>
        {icon}

        <span className="label">{label}</span>
      </a>
    </li>
  )
}

export default SideNavigationListItem
