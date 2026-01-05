async function load() {
  const res = await fetch("https://api.github.com/users/octocat");
  return res.json();
}

interface mapState {
  resolve: any[];
  reject: any[];
  isPending: boolean;
}

function asyncOnce(cb: (...args: any[]) => any) {
  let map: Map<string, mapState> = new Map()
  return (...args: any[]) => {
    return new Promise((resolve: any, reject: any) => {
      const key = JSON.stringify(args)
      if (!map) return
      // 没有就创建一个
      if(!map.has(key) || !map.get(key).resolve) {
        map.set(key, {
          resolve: [],
          reject: [],
          isPending: false
        })
      }
      const state = map.get(key)
      console.log('state', state);
      // 把当前的成功和失败回调保存起来
      state.resolve.push(resolve)
      state.reject.push(reject)
      // 如果已经请求过，则直接返回
      if(state.isPending) return
      // 如果没请求过，则发起请求
      state.isPending = true
      cb(...args)
        .then((res: any) => {
          state.resolve.forEach((resolve: any) => resolve(res))
        })
        .catch((err: any) => {
          state.reject.forEach((reject: any) => reject(err))
        })
        .finally(() => {
          map.set(key, {} as mapState)
        })
    })
  }
}

export const loadOnce = asyncOnce(load);