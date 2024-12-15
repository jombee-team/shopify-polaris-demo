import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // css: {
  //   postcss: {
  //     plugins: [
  //       (postcsspurgecss as any).default({
  //         content: ['./src/**/*.{js,jsx,ts,tsx}'],
  //         safelist: {
  //           standard: [
  //             // Theme fundamentals
  //             ':root',
  //             '.p-theme-light',
  //             'color-scheme',
  //             // CSS Custom Properties
  //             /^--p-/,
  //             // Spacing and Layout
  //             /^p-space-/,
  //             /^p-breakpoints-/,
  //             /^p-border-/,
  //             // Colors and Themes
  //             /^p-color-/,
  //             /^p-shadow-/,
  //             /^p-text-/,
  //             // Motion
  //             /^p-motion-/,
  //             /^p-duration-/,
  //             // Typography
  //             /^p-font-/,
  //             /^p-line-/,
  //             'font-family',
  //             /^--p-font-family/,
  //             /Inter/,
  //             // Z-index
  //             /^p-z-/,
  //           ],
  //           deep: [/^Polaris/], // This will preserve nested Polaris classes
  //           greedy: [/Polaris.*-/, /font-family/], // This will preserve compound Polaris classes and font-family rules
  //         },
  //         defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
  //         keyframes: true,
  //         fontFace: true,
  //         variables: true,
  //       }),
  //     ],
  //   },
  // },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id === 'nothing') {
            return 'nothing'
          }
          if (id.includes('BlockStack')) {
            return 'blockstack'
          }
          // if (id.includes('Box')) {
          //   return 'box'
          // }
          if (id.includes('Card')) {
            return 'card'
          }
          // if (id.includes('Frame')) {
          //   return 'frame'
          // }
          if (id.includes('Page')) {
            return 'page'
          }
          // if (id.includes('Text')) {
          //   return 'text'
          // }
          if (id.includes('Modal')) {
            return 'modal'
          }
          if (id.includes('Sheet')) {
            return 'sheet'
          }
          // if (id.includes('Navigation')) {
          //   return 'navigation'
          // }
          if (id.includes('TopBar')) {
            return 'topbar'
          }
          if (id.includes('ResourceList')) {
            return 'resourcelist'
          }
          if (id.includes('MediaCard')) {
            return 'mediacard'
          }
          if (id.includes('VideoThumbnail')) {
            return 'videothumbnail'
          }
          if (id.includes('AccountConnection')) {
            return 'accountconnection'
          }
          if (id.includes('AnnotatedSection')) {
            return 'annotatedsection'
          }
          return 'vendor'
        },
      },
    },
  },
})
