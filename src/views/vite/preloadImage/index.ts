/**
 * 预加载图片资源
 * @params images 图片资源数组
 * @returns Promise
 */
export function preloadImages(images: string[], max = 3) {
  const _images = [...images];

  function load() {
    const src = _images.shift();
    if (!src) return Promise.resolve();

    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = src;
      document.head.appendChild(link);
      link.onload = resolve;
      link.onerror = reject;
    });
  }

  function _load() {
    load().finally(() => {
      if (_images.length) {
        _load();
      }
    });
  }

  for (let i = 0; i < Math.min(max, _images.length); i++) {
    _load();
  }
}
