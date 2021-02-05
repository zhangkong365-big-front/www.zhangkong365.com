export default {
  // 获取地址栏参数值
  getParameterValue(parameterKey) {
    const query = window.location.search.substring(1);
    const vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split("=");
      if(pair[0] === parameterKey){
        return pair[1];
      }
    }
    return '';
  },
};
