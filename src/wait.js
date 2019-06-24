const wait = (cb, timeout = 0) => {
  if (typeof cb !== 'function') return
  window.setTimeout(cb, timeout)
}

export default wait
