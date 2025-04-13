
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
import { scrollToElement } from '@/utils/scrollUtils';

interface ExperiencesDropdownProps {
  getNavTextColor: () => string;
}

const ExperiencesDropdown = ({ getNavTextColor }: ExperiencesDropdownProps) => {
  const navTextColor = getNavTextColor();
  
  const handleSectionNavigation = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    // If we're on the home page, scroll to the section
    if (window.location.pathname === '/') {
      e.preventDefault();
      scrollToElement(sectionId);
    }
  };
  
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
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white dark:bg-slate-800">
              <li className="row-span-3">
                <div className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-portfolio-blue-light to-portfolio-blue-medium p-6 no-underline outline-none focus:shadow-md">
                  <div className="mt-4 mb-2 text-lg font-medium text-white">Experiences</div>
                  <p className="text-sm leading-tight text-white/90">
                    Browse through my professional journey, volunteering work, and achievements.
                  </p>
                </div>
              </li>
              <li>
                <Link
                  to="/#professional-experiences"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                  onClick={(e) => handleSectionNavigation(e, "professional-experiences")}
                >
                  <Briefcase size={18} />
                  <span>Professional</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/#volunteering-experiences"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                  onClick={(e) => handleSectionNavigation(e, "volunteering-experiences")}
                >
                  <HandHeart size={18} />
                  <span>Volunteering</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/#awards"
                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-700"
                  onClick={(e) => handleSectionNavigation(e, "awards")}
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
