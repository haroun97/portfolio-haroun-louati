
import React from 'react';
import { Briefcase, HandHeart, Trophy } from 'lucide-react';
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

interface ExperiencesDropdownProps {
  getNavTextColor: () => string;
}

const ExperiencesDropdown = ({ getNavTextColor }: ExperiencesDropdownProps) => {
  const navTextColor = getNavTextColor();
  
  return (
    <NavigationMenu className="inline-flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger 
            className={`${navTextColor} bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent focus:shadow-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 data-[state=open]:text-portfolio-orange-medium dark:data-[state=open]:text-portfolio-orange-light data-[state=open]:bg-opacity-0`}
            style={{ boxShadow: 'none', fontSize: 'inherit', padding: '0' }}
          >
            Experiences
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 w-[200px] bg-white dark:bg-slate-800">
              <li>
                <Link
                  to="/professional-experience"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Briefcase size={18} />
                  <span>Professional</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/volunteering-experience"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <HandHeart size={18} />
                  <span>Volunteering</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/awards"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                >
                  <Trophy size={18} />
                  <span>Awards</span>
                </Link>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default ExperiencesDropdown;
