// lodash中对debounce的实现：兼容throttle
function debounce(func, wait, options) {
  let lastArgs,
    lastThis,
    maxWait, // 最大等待时间
    result, // 执行func
    timerId, // 定时器句柄
    lastCallTime // 上次触发的时间，比如不断scroll，为上次scroll的时间

  let lastInvokeTime = 0 // 上次执行func的时间
  let leading = false // 配置参数，是否第一次触发立即执行
  let maxing = false // 是否有最长等待时间
  let trailing = true // 是否在等待周期结束后执行传入的func函数

  // 如果wait没传，调用window.requestAnimationFrame()
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function')
	// 判断func是否是函数类型
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function')
  }

	// 从传入的options中取出参数并做一些类型转换
  wait = +wait || 0
  if (isObject(options)) {
    leading = !!options.leading
    maxing = 'maxWait' in options
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait
    trailing = 'trailing' in options ? !!options.trailing : trailing
  }


// 入口函数
  function debounced(...args) {
    const time = Date.now()
    const isInvoking = shouldInvoke(time) // 根据当前时间判断是否应该执行func函数

    lastArgs = args
    lastThis = this
    lastCallTime = time

    if (isInvoking) {
			// 如果定时器还未创建，创建定时器按照所设置的是否立即执行去执行
      if (timerId === undefined) {
        return leadingEdge(lastCallTime)
      }
			// 如果设置了最长等待时间，创建定时器，返回func的执行方法
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait)
        return invokeFunc(lastCallTime)
      }
    }
		// 如果还没有创建定时器，创建定时器
    if (timerId === undefined) {
      timerId = startTimer(timerExpired, wait)
    }
    return result
  }

  // 根据传入的time判断是否应该执行func函数
  function shouldInvoke(time) {
   const timeSinceLastCall = time - lastCallTime // 上次触发
   const timeSinceLastInvoke = time - lastInvokeTime // 上次执行

  // 四种情况执行：
  // 1、第一次触发，lastCallTime为undefined
  // 2、距离上次触发已经大于延迟时间了
  // 3、当前-上次触发<0,特殊情况，比如原本是2020，修改了系统时间为2018
  // 4、距离上次执行的时间> 最长等待时间了
   return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
     (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait))
 }


  // 定义leadingEdge：防抖开始执行的函数，根据leading判断，如果true,立即执行
  function leadingEdge(time) {
    // 开始执行，则记录这个time为上次执行func的时间：lastInvokeTime
    lastInvokeTime = time
    // 开始创建定时器执行
    timerId = startTimer(timerExpired, wait)
    // 根据leading参数判断是否立即执行
    return leading ? invokeFunc(time) : result
  }

  	// 定义函数startTimer： 创建一个定时器，传参pendingFunc待执行函数，wait延迟多久后执行
   function startTimer(pendingFunc, wait) {
    if (useRAF) {
      root.cancelAnimationFrame(timerId)
      return root.requestAnimationFrame(pendingFunc)
    }
    return setTimeout(pendingFunc, wait)
  }

	// 定义函数invokeFunc：用户传入的func方法的执行函数，传入参数time，并更新lastInvokeTime记录上次执行invokeFunc的时间
 function invokeFunc(time) {
   const args = lastArgs
   const thisArg = lastThis

   lastArgs = lastThis = undefined
   lastInvokeTime = time
   result = func.apply(thisArg, args)
   return result
 }

	// 防抖核心，判断是执行函数，还是继续设置定时器
 function timerExpired() {
  const time = Date.now()
  if (shouldInvoke(time)) { // 根据当前时间，判断是否应该执行，如果是，执行func
    return trailingEdge(time)
  }
  // 否则，重置定时器，将剩余的时间传入
  timerId = startTimer(timerExpired, remainingWait(time))
}

	// 执行func的判断函数
 function trailingEdge(time) {
  timerId = undefined

  // Only invoke if we have `lastArgs` which means `func` has been
  // debounced at least once.
  if (trailing && lastArgs) {
    return invokeFunc(time)
  }
  lastArgs = lastThis = undefined
  return result
}

	// 根据传入的time,计算还需要等待的时间
 function remainingWait(time) {
  const timeSinceLastCall = time - lastCallTime // 现在距离上次触发scroll的时间
  const timeSinceLastInvoke = time - lastInvokeTime // 现在距离上次执行func的时间
  const timeWaiting = wait - timeSinceLastCall // wait延迟时间 - 距离上次触发scroll的时间
  return maxing
    ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
    : timeWaiting 
// 如果设置了最大等待时间，则还需等待：（延迟时间wait - 已经等候时间，最大等待时间-上次执行func剩余的时间）两者取较小值
// 否则，还需等待 wait - 已经等候时间
}

  return debounced
}


export default debounce
