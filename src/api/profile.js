import request from '@/utils/request'

export function getList(params) {
  return request({
    url: 'api/v1/profiles',
    headers: { "AUTH-TOKEN": "eyJhbGciOiJIUzI1NiJ9.eyJkZW50aXN0X2lkIjozLCJleHAiOiIxNTQ2NDEyNjE4In0.blG6HtUtnWDU3_z8xR_7LKlU_c38kl7lz8Un5RVJGYE"},
    method: 'get',
    params
  })
}