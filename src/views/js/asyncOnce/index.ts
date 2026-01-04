async function load() {
  const res = await fetch("https://api.github.com/users/octocat");
  return res.json();
}

function asyncOnce(cb: (...args: any[]) => any) {
  let map: Record<string, {
    resolve: (value: any) => void;
    reject: (reason?: any) => void;
    isPending: boolean;
  }> = new Map()
  return (...args: any[]) => {
    return new Promise((resolve, reject) => {
      const key = JSON.stringify(args)
      // 没有就创建一个
      if(!map.has(key)) {
        map.set(key, {
          resolve: [],
          reject: [],
          isPending: false
        })
      }
      const state = map.get(key)
      // 把当前的成功和失败回调保存起来
      state.resolve.push(resolve)
      state.reject.push(reject)
      // 如果已经请求过，则直接返回
      if(state.isPending) return
      // 如果没请求过，则发起请求
      state.isPending = true
      cb(...args)
        .then((res) => {
          state.resolve.forEach((resolve) => resolve(res))
        })
        .catch((err) => {
          state.reject.forEach((reject) => reject(err))
        })
        .finally(() => {
          map.set(key, null)
        })
    })
  }
}

export const loadOnce = asyncOnce(load);