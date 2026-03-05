import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useThemeStyles() {
    const [mounted, setMounted] = useState(false);
    const { theme, systemTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // Determine the actual theme (considering system preference)
    const resolvedTheme = theme === 'system' ? systemTheme : theme;
    const isDark = resolvedTheme === 'dark';

    return {
        mounted,
        isDark,
        theme,
        resolvedTheme
    };
}