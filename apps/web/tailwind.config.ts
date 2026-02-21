import type { Config } from "tailwindcss"

export default {
  darkMode: "class",
  content: [
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        backgroundBlue: "#181b30",
        surface: "#1E293B",
        textPrimary: "#E5E7EB",
        textSecondary: "#94A3B8",
        accent: "#C9A227",
        accentHover: "#A8841F",
        success: "#3A5F0B",
        danger: "#7F1D1D"
      },
      borderRadius: {
        xl: "14px"
      },
      boxShadow: {
        card: "0 4px 20px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
} satisfies Config