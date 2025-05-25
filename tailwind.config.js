/** @type {import('tailwindcss').Config} */

// Tailwind CSS configuration for Kurdish RTL website
// This configuration enables RTL support, custom fonts, and design system tokens

module.exports = {
  // Define which files Tailwind should scan for class usage
  // This helps optimize the final CSS bundle by only including used classes
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./content/**/*.md", // Include markdown files for blog posts
  ],

  // Enable dark mode support (class-based strategy)
  darkMode: "class",

  theme: {
    extend: {
      // Custom font families for Kurdish text support
      fontFamily: {
        // Primary font stack optimized for Kurdish/Arabic text
        sans: ["Noto Sans Arabic", "Segoe UI", "Tahoma", "Arial", "sans-serif"],
        // Serif fonts for special typography (headings, quotes)
        serif: ["Noto Serif Arabic", "Times New Roman", "serif"],
      },

      // Custom color palette that works well for Kurdish branding
      colors: {
        // Primary brand colors
        primary: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        // Kurdish cultural colors (optional - can be used for accents)
        kurdish: {
          red: "#dc2626", // Traditional Kurdish red
          yellow: "#fbbf24", // Traditional Kurdish yellow
          green: "#16a34a", // Traditional Kurdish green
        },
      },

      // Custom spacing scale for better RTL typography
      spacing: {
        18: "4.5rem", // 72px
        88: "22rem", // 352px
        128: "32rem", // 512px
      },

      // Typography scale optimized for Kurdish text
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4" }],
        sm: ["0.875rem", { lineHeight: "1.5" }],
        base: ["1rem", { lineHeight: "1.6" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.25rem", { lineHeight: "1.5" }],
        "2xl": ["1.5rem", { lineHeight: "1.4" }],
        "3xl": ["1.875rem", { lineHeight: "1.3" }],
        "4xl": ["2.25rem", { lineHeight: "1.2" }],
        "5xl": ["3rem", { lineHeight: "1.1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
      },

      // Animation and transition durations
      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },

      // Custom animations for interactive elements
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "bounce-subtle": "bounceSubtle 0.6s ease-out",
      },

      // Keyframe definitions for custom animations
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideInRight: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        bounceSubtle: {
          "0%, 20%, 50%, 80%, 100%": {
            transform: "translateY(0)",
          },
          "40%": {
            transform: "translateY(-8px)",
          },
          "60%": {
            transform: "translateY(-4px)",
          },
        },
      },

      // Custom backdrop blur values
      backdropBlur: {
        xs: "2px",
      },

      // Box shadow customizations for depth
      boxShadow: {
        soft: "0 2px 15px 0 rgba(0, 0, 0, 0.08)",
        medium: "0 4px 25px 0 rgba(0, 0, 0, 0.12)",
        strong: "0 8px 40px 0 rgba(0, 0, 0, 0.15)",
      },

      // Border radius customization
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },

  // Tailwind CSS plugins for extended functionality
  plugins: [
    // Typography plugin for better prose styling (add back when installed)
    // require('@tailwindcss/typography'),

    // Forms plugin for better form element styling (add back when installed)
    // require('@tailwindcss/forms'),

    // Line clamp plugin for text truncation (add back when installed)
    // require('@tailwindcss/line-clamp'),

    // Custom plugin for RTL utilities
    function ({ addUtilities, addBase, theme }) {
      // Base RTL styles
      addBase({
        // Set default direction for HTML
        'html[dir="rtl"]': {
          direction: "rtl",
        },

        // Ensure proper text alignment for RTL
        'html[dir="rtl"] body': {
          textAlign: "right",
        },

        // Fix input field alignment in RTL
        'html[dir="rtl"] input, html[dir="rtl"] textarea': {
          textAlign: "right",
        },

        // Proper list styling for RTL
        'html[dir="rtl"] ul, html[dir="rtl"] ol': {
          paddingLeft: "0",
          paddingRight: "1.5rem",
        },
      });

      // RTL-specific utility classes
      addUtilities({
        // Margin utilities for RTL
        ".mr-rtl": {
          marginLeft: "1rem",
          marginRight: "0",
        },
        ".ml-rtl": {
          marginRight: "1rem",
          marginLeft: "0",
        },

        // Padding utilities for RTL
        ".pr-rtl": {
          paddingLeft: "1rem",
          paddingRight: "0",
        },
        ".pl-rtl": {
          paddingRight: "1rem",
          paddingLeft: "0",
        },

        // Text alignment utilities
        ".text-start-rtl": {
          textAlign: "right",
        },
        ".text-end-rtl": {
          textAlign: "left",
        },

        // Flexbox utilities for RTL
        ".flex-row-reverse-rtl": {
          flexDirection: "row-reverse",
        },

        // Border utilities for RTL
        ".border-r-rtl": {
          borderLeftWidth: "1px",
          borderRightWidth: "0",
        },
        ".border-l-rtl": {
          borderRightWidth: "1px",
          borderLeftWidth: "0",
        },

        // Transform utilities for RTL-aware animations
        ".translate-x-rtl": {
          transform: "translateX(-1rem)",
        },

        // Kurdish-specific utilities
        ".font-kurdish": {
          fontFamily: theme("fontFamily.sans"),
          fontFeatureSettings: '"kern" 1, "liga" 1',
          textRendering: "optimizeLegibility",
        },

        // Gradient utilities with Kurdish cultural colors
        ".bg-gradient-kurdish": {
          background:
            "linear-gradient(135deg, #dc2626 0%, #fbbf24 50%, #16a34a 100%)",
        },

        // Glass morphism effect
        ".glass": {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        },

        // Smooth hover scale effect
        ".hover-scale": {
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        },
      });
    },

    // Plugin for custom component classes
    function ({ addComponents, theme }) {
      addComponents({
        // Button component styles
        ".btn-base": {
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: theme("spacing.3"),
          paddingBottom: theme("spacing.3"),
          paddingLeft: theme("spacing.6"),
          paddingRight: theme("spacing.6"),
          borderRadius: theme("borderRadius.full"),
          fontSize: theme("fontSize.sm"),
          fontWeight: theme("fontWeight.medium"),
          transition: "all 0.3s ease",
          cursor: "pointer",
          textDecoration: "none",
          border: "none",
          "&:focus": {
            outline: "2px solid",
            outlineColor: theme("colors.blue.500"),
            outlineOffset: "2px",
          },
        },

        // Card component styles
        ".card-base": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.2xl"),
          boxShadow: theme("boxShadow.soft"),
          padding: theme("spacing.6"),
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: theme("boxShadow.medium"),
            transform: "translateY(-2px)",
          },
        },

        // Input component styles
        ".input-base": {
          width: "100%",
          paddingTop: theme("spacing.3"),
          paddingBottom: theme("spacing.3"),
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
          borderWidth: "1px",
          borderColor: theme("colors.gray.300"),
          borderRadius: theme("borderRadius.lg"),
          fontSize: theme("fontSize.base"),
          transition: "all 0.2s ease",
          direction: "rtl",
          textAlign: "right",
          "&:focus": {
            outline: "none",
            borderColor: theme("colors.gray.900"),
            boxShadow: `0 0 0 3px ${theme("colors.gray.900")}20`,
          },
        },
      });
    },
  ],
};
