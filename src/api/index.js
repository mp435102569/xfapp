import http from "./http";


export function login(payload) {
  return http.post('/v1/user/login', payload)
}
export function reg(payload) {
  return http.post('/v1/user/register', payload)
}

export function getHomeInfo() {
  return http.get("/v1/index-infos")
}