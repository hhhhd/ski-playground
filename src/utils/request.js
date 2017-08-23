import fetch from 'isomorphic-fetch'
import { HOST } from './index'

const getOptions = ({
  method,
  body,
  headers,
}) => {
  let bodyString = null
  if (Object.keys(body).length) {
    bodyString = JSON.stringify(body)
  }
  return {
    method,
    headers,
    body: bodyString,
    credentials: 'same-origin',
  }
}

const getQueryString = (query = {}) => {
  let qs = ''
  if (Object.keys(query).length !== 0) {
    Object.keys(query).forEach((key, index) => {
      if (!index) {
        qs += `?${key}=${query[key]}`
        return
      }
      qs += `&${key}=${query[key]}`
    })
  }
  return qs
}

export default async ({
  method = 'GET',
  path = '',
  query = {},
  body = {},
  headers = {
    'Content-Type': 'application/json; charset=utf-8',
  },
}) => {
  if (!path) throw new Error('path is required!')
  const res = await fetch(`${HOST}${path}${getQueryString({
    query
  })}`, getOptions({
    method,
    body,
    headers
  }))
  const data = await res.json()
  if (!res.ok) throw new Error(data.msg)
  return data
}
