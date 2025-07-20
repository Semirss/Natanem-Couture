module.exports = {
  darkMode: 'class', // Enable dark mode using `.dark` class
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        // Add more as needed
      },
      borderColor: {
        border: 'var(--border)',
      },
      ringColor: {
        ring: 'var(--ring)',
      },
    },
  },
  plugins: [],
};
