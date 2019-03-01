/**
 * 通用方法定义
 * 
 */



//demo 缓存函数执行结果
export function cached (fn) {
	const cache = Object.create(null)
	return (function cachedFn (str) {
		const hit = cache[str]
		return hit || (cache[str] = fn(str))
	})
}

export function serialize (data) {
    let str = ''
    Object.keys(data).forEach(item => {
      str += item + '=' + encodeURIComponent(data[item]) + '&'
    })
    return str ? str.substr(0, str.length - 1) : ''
  }
