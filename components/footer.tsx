import { ThemeToggle } from "./theme-toggle";

const Footer = () => {
  return (
    <div className="flex items-center justify-center w-full pt-6 border-t border-neutral-100 dark:border-neutral-800">
      <div className="container flex items-center justify-between">
        <div className="text-xs text-neutral-500">
          Built by @doston | ©2023 doston.tech. All Rights Reserved
        </div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
