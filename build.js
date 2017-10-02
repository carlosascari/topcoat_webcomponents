const swde = require('swde');

// Build all Topcoat webcomponents

Promise.all([

  swde({
    src: './src/topcoat/theme-desktop-light',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'theme-desktop-light': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/theme-desktop-dark',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'theme-desktop-dark': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/theme-mobile-light',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'theme-mobile-light': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/theme-mobile-dark',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'theme-mobile-dark': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/button',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'button': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/checkbox',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'checkbox': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/icon-button',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'icon-button': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/list/list',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'list': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),
  swde({
    src: './src/topcoat/list/list-item',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'list-item': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),
  swde({
    src: './src/topcoat/list/list-header',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'list-header': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),
  swde({
    src: './src/topcoat/list/list-container',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'list-container': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/navigation-bar',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'navigation-bar': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/notification',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'notification': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/radio-button',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'radio-button': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/range',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'range': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/search-input',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'search-input': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/switch',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'switch': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/tab-bar/tab-bar',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'tab-bar': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),
  swde({
    src: './src/topcoat/tab-bar/tab',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'tab': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),


  swde({
    src: './src/topcoat/text-input',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'text-input': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  swde({
    src: './src/topcoat/textarea',
    dist: './dist/topcoat',
    html: {
      mustache: { tags: ['%%', '%%'] },
      pages: {
        'textarea': {
          path: 'component.html',
          layout: 'layout.html'
        }
      }
    },
    js: { noFile: true, noBuble: true }, 
    less: { noFile: true }
  }),

  // ...more

])
.then(() => console.log('Build finished.'))
.catch((error) => console.log(error));
