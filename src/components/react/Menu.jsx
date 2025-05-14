import { Bars3Icon, ChevronDownIcon } from '@heroicons/react/16/solid';
import * as Dialog from '@radix-ui/react-dialog';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import clsx from 'clsx';
import React from 'react';

export const Menu = ({ currentUri }) => {
  return (
    <NavigationMenu.Root className="relative z-10 hidden h-12 min-h-12 items-center bg-zinc-100 lg:flex dark:bg-zinc-800 [&>div]:flex-1">
      <NavigationMenu.List className="m-0 flex flex-1 list-none items-center px-1 text-center">
        <NavigationMenu.Item value="home">
          <MenuLink href="https://gis.utah.gov/" currentUri={currentUri}>
            Home
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="products">
          <DropDownMenu to="/products" currentUri={currentUri}>
            Products
          </DropDownMenu>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left data-[motion=from-end]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=to-end]:anim-duration-500 data-[motion=to-start]:anim-duration-500 absolute top-0 left-0 w-full sm:w-auto">
            <MegaMenuChrome className="flex w-full flex-col gap-4 pr-6 md:gap-2">
              <MegaMenuItem>
                <ListItem title="SGID" href="https://gis.utah.gov/products/sgid">
                  A multi-faceted centralized collection of hundreds of GIS data layers developed, aggregated, or
                  acquired by the State of Utah.
                </ListItem>
                <ListItem title="Discover" href="https://gis.utah.gov/products/discover">
                  A cloud-based server that provides aerial imagery and base maps for GIS, CAD, or web applications.
                </ListItem>
                <ListItem title="TURN GPS" href="https://gis.utah.gov/products/turn">
                  High-precision global navigation satellite system (GNSS) providing real-time corrections and data for
                  post processing.
                </ListItem>
                <ListItem title="UGRC API" href="https://gis.utah.gov/products/api">
                  An HTTP accessible API with endpoints to search the SGID and geocode.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="solutions">
          <DropDownMenu to="/solutions" currentUri={currentUri}>
            Solutions
          </DropDownMenu>
          <NavigationMenu.Content className="data-[motion=from-end]:animate-in data-[motion=from-start]:animate-in data-[motion=to-end]:animate-out data-[motion=to-start]:animate-out data-[motion=from-end]:slide-in-from-right data-[motion=from-start]:slide-in-from-left data-[motion=to-end]:slide-out-to-right data-[motion=to-start]:slide-out-to-left data-[motion=from-end]:anim-duration-500 data-[motion=from-start]:anim-duration-500 data-[motion=to-end]:anim-duration-500 data-[motion=to-start]:anim-duration-500 absolute top-0 left-0 w-full sm:w-auto">
            <MegaMenuChrome className="flex w-full flex-row gap-4 pr-6 md:gap-2">
              <MegaMenuItem title="By audience" containerCss="md:w-1/3">
                <ListItem
                  href="https://gis.utah.gov/solutions/for-government"
                  title="Government employees"
                  className="col-span-2"
                >
                  Partner with us to geo-enable your agency.
                </ListItem>
                <ListItem href="https://gis.utah.gov/solutions/for-gis-users" title="GIS users" className="col-span-2">
                  Integrate our data and services with your GIS.
                </ListItem>
                <ListItem
                  href="https://gis.utah.gov/solutions/for-application-developers"
                  title="Application developers"
                  className="col-span-2"
                >
                  Use our tools and resources to innovate and build.
                </ListItem>
                <ListItem href="https://gis.utah.gov/solutions/for-surveyors" title="Surveyors" className="col-span-2">
                  Find your direction. We can help.
                </ListItem>
                <ListItem href="https://gis.utah.gov/solutions/for-students" title="Students" className="col-span-2">
                  Learning never ends.
                </ListItem>
              </MegaMenuItem>
              <MegaMenuItem title="By use case" containerCss="md:w-1/3">
                <ListItem
                  href="https://gis.utah.gov/solutions/spatial-data-management"
                  title="Spatial data management"
                  className="col-span-2"
                >
                  Learn how we can help.
                </ListItem>
                <ListItem
                  href="https://gis.utah.gov/solutions/for-emergency-response"
                  title="Emergency response (911)"
                  className="col-span-2"
                >
                  Data and solutions for when it matters most.
                </ListItem>
                <ListItem
                  href="https://gis.utah.gov/solutions/gis-strategy"
                  title="GIS strategy"
                  className="col-span-2"
                >
                  Begin thinking bigger by thinking differently.
                </ListItem>
                <ListItem
                  href="https://gis.utah.gov/solutions/gis-integration"
                  title="Integrating GIS"
                  className="col-span-2"
                >
                  Location matters to your business processes.
                </ListItem>
                <ListItem
                  href="https://gis.utah.gov/solutions/high-precision-location"
                  title="High precision location"
                  className="col-span-2"
                >
                  Examples of how a high precision GPS network can be used.
                </ListItem>
              </MegaMenuItem>
            </MegaMenuChrome>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="documentation">
          <MenuLink href="https://gis.utah.gov/documentation" currentUri={currentUri}>
            Documentation
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="collaboration">
          <MenuLink href="https://gis.utah.gov/collaboration" currentUri={currentUri}>
            Collaboration
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="blog">
          <MenuLink href="https://gis.utah.gov/blog" currentUri={currentUri}>
            Blog
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="about">
          <MenuLink href="https://gis.utah.gov/about" currentUri={currentUri}>
            About
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item value="contact">
          <MenuLink href="https://gis.utah.gov/contact" currentUri={currentUri}>
            Contact
          </MenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className="data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in bg-primary z-10 mt-[0.3rem] h-1 overflow-hidden rounded-t-full transition-all" />
      </NavigationMenu.List>

      <div className="absolute top-full left-3 flex w-full perspective-[2000px]">
        <NavigationMenu.Viewport className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out data-[state=open]:zoom-in relative mt-2.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md border bg-white shadow-lg transition-[width,_height] sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};
export const SmallMenu = ({ currentUri }) => (
  <Dialog.Root>
    <div className="items-between flex h-12 shrink-0 bg-zinc-100 lg:hidden dark:bg-zinc-800">
      <div className="flex flex-1 items-center justify-between">
        <Dialog.Trigger asChild className="focus:shadow-primary outline-none focus:shadow-[0_0_0_2px]">
          <button
            className="focus:shadow-primary ml-2 rounded-full p-1 outline-none focus:shadow-[0_0_0_2px]"
            aria-label="open the main menu"
          >
            <Bars3Icon className="size-6 text-zinc-800 focus:outline-none dark:text-zinc-50" />
          </button>
        </Dialog.Trigger>
      </div>
    </div>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=open]:fade-in fixed inset-0 z-40 bg-black/80" />
      <Dialog.Content className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left dark:bg-primary-950 fixed inset-y-0 left-0 z-50 h-full w-72 gap-4 border-r border-white/20 bg-zinc-50 p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 sm:max-w-sm">
        <NavigationMenu.Root orientation="vertical">
          <NavigationMenu.List className="mt-4 flex list-none flex-col p-1">
            <NavigationMenu.Item value="home">
              <MobileMenuLink href="https://gis.utah.gov/" currentUri={currentUri}>
                Home
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="products">
              <MobileDropDownMenu href="https://gis.utah.gov/products" currentUri={currentUri}>
                Products
              </MobileDropDownMenu>
              <NavigationMenu.Content>
                <NavigationMenu.List className="pt-1 pl-2">
                  <NavigationMenu.Item value="products">
                    <MobileListItem href="https://gis.utah.gov/products/sgid">SGID</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/products/discover">Discover</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/products/turn">TURN GPS</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/products/api">UGRC API</MobileListItem>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="solutions">
              <MobileDropDownMenu href="https://gis.utah.gov/solutions" currentUri={currentUri}>
                Solutions
              </MobileDropDownMenu>
              <NavigationMenu.Content>
                <NavigationMenu.List className="pt-1 pl-2">
                  <NavigationMenu.Item value="solutions-audience">
                    <p className="text-primary dark:text-accent pb-2 pl-2 text-xs uppercase">By audience</p>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-government">
                      Government employees
                    </MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-gis-users">GIS users</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-application-developers">
                      Application developers
                    </MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-surveyors">Surveyors</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-students">Students</MobileListItem>
                    <p className="text-primary dark:text-accent py-2 pl-2 text-xs uppercase">By use case</p>
                    <MobileListItem href="https://gis.utah.gov/solutions/spatial-data-management">
                      Spatial data management
                    </MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/for-emergency-response">
                      Emergency response (911)
                    </MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/gis-strategy">GIS strategy</MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/gis-integration">
                      Integrating GIS
                    </MobileListItem>
                    <MobileListItem href="https://gis.utah.gov/solutions/high-precision-location">
                      High Precision Location
                    </MobileListItem>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="documentation">
              <MobileMenuLink href="https://gis.utah.gov/documentation" currentUri={currentUri}>
                Documentation
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="collaboration">
              <MobileMenuLink href="https://gis.utah.gov/collaboration" currentUri={currentUri}>
                Collaboration
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="blog">
              <MobileMenuLink href="https://gis.utah.gov/blog" currentUri={currentUri}>
                Blog
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="about">
              <MobileMenuLink href="https://gis.utah.gov/about" currentUri={currentUri}>
                About
              </MobileMenuLink>
            </NavigationMenu.Item>

            <NavigationMenu.Item value="contact">
              <MobileMenuLink href="https://gis.utah.gov/contact" currentUri={currentUri}>
                Contact
              </MobileMenuLink>
            </NavigationMenu.Item>
          </NavigationMenu.List>
        </NavigationMenu.Root>
        <Dialog.Close asChild>
          <button
            className="focus:shadow-primary dark:hover:bg-primary absolute top-[10px] left-[10px] inline-flex size-6 appearance-none items-center justify-center rounded-full text-zinc-800 hover:bg-zinc-200 focus:shadow-[0_0_0_2px] focus:outline-none dark:text-white"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              data-slot="icon"
              className="w-7"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
const isActive = (slug, currentUri) => {
  if (slug !== '/') {
    return currentUri.toLowerCase().startsWith(slug);
  }

  return currentUri === slug;
};
const MenuLink = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Link
      href={href}
      className={clsx(
        'custom-style focus:shadow-primary relative block rounded-full px-3 py-2 text-sm leading-none font-medium text-zinc-600 no-underline outline-none select-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100 dark:focus:shadow-zinc-200',
        {
          'text-secondary before:bg-accent before:absolute before:-top-[.55rem] before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full':
            isActive(href, currentUri),
        },
      )}
    >
      {children}
    </NavigationMenu.Link>
  );
};
const MobileMenuLink = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Link
      href={href}
      className={clsx(
        'custom-style focus:shadow-primary relative block rounded-full px-3 py-2 text-sm leading-none font-medium text-zinc-600 no-underline outline-none select-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100 dark:focus:shadow-zinc-200',
        {
          'text-secondary before:bg-accent before:absolute before:top-0 before:-left-[28px] before:h-8 before:w-2 before:rounded-e-full':
            isActive(href, currentUri),
        },
      )}
    >
      {children}
    </NavigationMenu.Link>
  );
};
const DropDownMenu = ({ to, children, currentUri }) => (
  <NavigationMenu.Trigger
    className={clsx(
      'custom-style group focus:shadow-primary relative flex items-center justify-between gap-1 rounded-full px-4 py-2 text-sm leading-none font-semibold text-zinc-600 outline-none select-none hover:bg-white/20 hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100 dark:focus:shadow-zinc-200',
      {
        'text-secondary before:bg-accent before:absolute before:-top-[0.47rem] before:left-0 before:z-10 before:block before:h-1 before:w-full before:rounded-b-full':
          isActive(to, currentUri),
      },
    )}
  >
    {children}{' '}
    <ChevronDownIcon
      className="relative top-px ml-1 size-4 text-zinc-600 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180 dark:text-zinc-50"
      aria-hidden
    />
  </NavigationMenu.Trigger>
);
const MobileDropDownMenu = ({ href, children, currentUri }) => {
  return (
    <NavigationMenu.Trigger
      className={clsx(
        'custom-style group focus:shadow-primary relative flex items-center justify-between gap-1 rounded-full px-3 py-2 text-sm leading-none font-medium text-zinc-600 no-underline outline-none select-none hover:bg-zinc-200 hover:text-zinc-900 focus:shadow-[0_0_0_2px] dark:text-zinc-50 dark:hover:bg-white/20 dark:hover:text-zinc-100 dark:focus:shadow-zinc-200',
        {
          'text-secondary before:bg-accent before:absolute before:top-0 before:-left-[28px] before:h-8 before:w-1':
            isActive(href, currentUri),
        },
      )}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-px text-zinc-600 transition-transform duration-300 ease-in group-data-[state=open]:-rotate-180 dark:text-zinc-50"
        aria-hidden
      />
    </NavigationMenu.Trigger>
  );
};
const MegaMenuChrome = ({ children, className }) => (
  <section className="min-h-40 min-w-[720px] py-5">
    <div className={className}>{children}</div>
  </section>
);
const MegaMenuItem = ({ children, title, containerCss }) => (
  <div className={clsx('grow pl-6 align-top', containerCss)}>
    {title && <p className="text-lg font-bold text-zinc-600 uppercase md:text-sm">{title}</p>}
    <ul className="m-0 grid list-none">{children}</ul>
  </div>
);
const ListItem = React.forwardRef(({ className, children, title, ...props }, forwardedRef) => (
  <li className={clsx('group', className)}>
    <NavigationMenu.Link asChild>
      <a
        className={clsx(
          'custom-style focus:shadow-primary block cursor-pointer rounded p-3 text-base no-underline outline-none select-none hover:bg-zinc-100 focus:shadow-[0_0_0_2px] sm:py-1',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <div className="font-semibold text-zinc-700">{title}</div>
        <p className="text-sm text-zinc-500 group-hover:text-zinc-700">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
const MobileListItem = React.forwardRef(({ className, children, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={clsx(
          'custom-style focus:shadow-primary block cursor-pointer rounded-full p-3 no-underline outline-none select-none hover:bg-zinc-200 focus:shadow-[0_0_0_2px] sm:py-1 dark:hover:bg-white/20 dark:focus:shadow-zinc-200',
          className,
        )}
        {...props}
        ref={forwardedRef}
      >
        <p className="text-sm text-zinc-600 dark:text-zinc-300">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
));
