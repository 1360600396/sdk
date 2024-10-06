self.onmessage = function(event) {
  const performanceData = event.data;

  // 在 worker 中处理数据，例如进行一些分析或延迟上报
  // 模拟处理和上报
  setTimeout(() => {
      console.log('上报数据:', performanceData);
      // 假设通过 sendBeacon 上报
      lazyReport('error', {
        message: error.reason,
        error,
        errorType: 'promiseError'
      });
  }, 1000);
};