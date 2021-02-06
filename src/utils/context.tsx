import React, { useEffect, useState } from 'react';

export enum ThemeEnum {
   light = 'light',
   dark = 'dark'
}

interface ContextValue {
   theme: ThemeEnum;
   toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ContextValue | undefined>({
   theme: ThemeEnum.dark,
   toggleTheme: () => null
});

export const useTheme = () => {
   // Set the default theme state to the value stored in localStorage and fallback
   // to 'dark' if no value is found

   if(!window.localStorage.getItem("theme") ||
       window.localStorage.getItem("theme") === ThemeEnum.dark) {
      window.localStorage.setItem("theme", ThemeEnum.dark);
   }

   const initialTheme =window.localStorage.getItem("theme");
   const [theme, setTheme] = useState(initialTheme)

   /**
    * Toggle between light and dark themes and set the current theme
    * value into localStorage. Also need to re-initialize the animate on scroll
    * module to ensure elements don't disappear.
    * @returns {void}
    */
   const toggleTheme = () => {

      const newThemeValue =
          theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light;
      window.localStorage.setItem("theme", newThemeValue);
      setTheme(newThemeValue);
   };

   useEffect(() => {
      if (window.localStorage.getItem("theme") !== theme) {
         setTheme(window.localStorage.getItem("theme") as ThemeEnum);
      }
   }, [theme]);

   const context = React.useContext<ContextValue | undefined>(ThemeContext);
   if (!context) {
      throw new Error('useTheme must be within a ThemeProvider');
   }
   return {theme, toggleTheme};
};

export interface Theme {
   color: string;
}
