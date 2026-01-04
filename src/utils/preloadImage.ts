import fastGlob from "fast-glob";

interface PreloadImageOptions {
  // 预加载图片的路径
  dir: string;
  attrs?: {
    rel: "preload" | "prefetch";
  };
}

export function PreloadImage(options: PreloadImageOptions) {
  const { dir, attrs = {} } = options;
  const assetsImages: string[] = []; // 存储打包后的图片路径

  return {
    name: "vite-plugin-preload-image",
    generateBundle(_: any, bundle: any) {
      const values = Object.values(bundle)
      const files = fastGlob.sync(options.dir);
      values.forEach((item: any) => {
        if (files.includes(Reflect.get(item, "originalFileName"))) {
          assetsImages.push(item.fileName);
        }
      })
    },
    transformIndexHtml(html: string, ctx: any) {
      let images: string[] = [];
      // 本地开发环境，直接读取图片路径
      if (ctx.server) {
        const files = fastGlob.sync(options.dir);
        images = files.map((file) => {
          return (ctx?.server?.config?.base || '') + file;
        })
      }
      // 生产环境，读取打包后的图片路径
      else {
        images = assetsImages;
      }
      return images.map((file) => {
        return {
          tag: "link",
          attrs: {
            rel: "prefetch",
            href: file,
            as: "image",
            ...attrs,
          },
        };
      });
    },
  };
}
