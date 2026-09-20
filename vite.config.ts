import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

function autoConvertHeifPlugin(): Plugin {
  return {
    name: 'auto-convert-heif',
    buildStart() {
      try {
        exec('python scripts/convert_all_heif.py');
      } catch {
        // ignore
      }
    },
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && req.url.startsWith('/photos/photo-') && req.url.endsWith('.jpg')) {
          const filePath = path.join(process.cwd(), 'public', req.url.split('?')[0]);
          if (fs.existsSync(filePath)) {
            try {
              const fd = fs.openSync(filePath, 'r');
              const buffer = Buffer.alloc(16);
              fs.readSync(fd, buffer, 0, 16, 0);
              fs.closeSync(fd);
              const headerStr = buffer.toString('binary');
              if (
                headerStr.includes('ftypheic') ||
                headerStr.includes('ftypmif1') ||
                headerStr.includes('ftypmsf1') ||
                headerStr.includes('ftyphevc')
              ) {
                exec('python scripts/convert_all_heif.py');
              }
            } catch {
              // ignore
            }
          }
        }
        next();
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), autoConvertHeifPlugin()],
  base: '/Proma-s-Birthday/',
});
