import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import { fileURLToPath, URL } from 'node:url'
import typedCssModulesPlugin from "vite-plugin-typed-css-modules"
import AutoImport from "unplugin-auto-import/vite"
import { createHtmlPlugin } from 'vite-plugin-html'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'



// https://vite.dev/config/
export default defineConfig(configEnv => {
  const isDev = configEnv.command === 'serve'

  return {
    plugins: [react({
      tsDecorators: !0,
      devTarget: 'esnext'
    }),
      AutoImport({
        dts: 'src/auto-imports.d.ts',
        imports: ['react', 'mobx', 'mobx-react-lite']
      }),
      UnoCSS({
        mode: 'global',
      }),
      createHtmlPlugin({
        minify: !0,
      }),
      typedCssModulesPlugin(),
      TanStackRouterVite({ target: 'react', autoCodeSplitting: !0 }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css:{
      lightningcss:{
        minify: !0,
        sourceMap: isDev,
        cssModules: {
          pattern: isDev ? '[name]_[local]_[hash]' : '[local][hash]',
          // dashedIdents:!0,
          // customIdents:!0,
          animation: !0,
          grid: !0,
          pure: !1
        },
      }
    },
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment',
      drop: !isDev ? ['console', 'debugger'] : [],
      sourcemap: isDev,
      legalComments:'none'
    },
    build: {
      rollupOptions: {
        output: {
          compact: !0,
          preserveModules: !1,
          entryFileNames: () => `assets/[hash].js`,
          chunkFileNames: () => `assets/[hash].js`,
          assetFileNames: () => `assets/[hash].[ext]`,
        }
      }
    }
  }
})
