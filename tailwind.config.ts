// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: 'class',
    content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
    theme: {
        extend: {
            colors: {
                primary: 'var(--color-primary)',
                secondary: 'var(--color-secondary)',
                accent: 'var(--color-accent)',
                // Add more semantic colors as needed
            }
        },
    },
    plugins: [],
}

export default config
