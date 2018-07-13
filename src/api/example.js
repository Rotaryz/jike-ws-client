import request from 'common/js/request'

export default {
  test (data, loading) {
    let url = ` http://dev.jike-jwt.jerryf.cn/api/employee/employee-customer`
    request.get(url, data, loading)
  }
}
