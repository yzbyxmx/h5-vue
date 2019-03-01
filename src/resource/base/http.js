/**
 * http请求封装
 */

import axios from 'axios'
import jsonp from 'jsonp'

const baseConfig = {
    baseURL: '',
    //设置允许携带cookie
    withCredentials: true,
    responseType: 'json', // default
    maxRedirects: 5, // default
}

function handleParams(url, params) {
    const stringBuffer = []
    for (let key in params) {
        stringBuffer.push(`${key}=${params[key]}`)
    }
    const hasParam = ~url.indexOf('?')
    return  url +(hasParam ? '&' : '?')+  stringBuffer.join('&')
}

async function request(config) {
        try {
                const response = await axios.request(config)
                        .catch((error) => {
                                throw new Error(error)
                        });
                return response.data ? response.data : response
        } catch (error) {
                throw new Error(error)
        }
}



export function get({url = '', data = {}, cancelToken = ''}) {
    const config = {
            ...baseConfig,
            url,
            cancelToken,
            params: data,            
            method: 'get',
    }

    return request(config)
}


export function post({url = '', data = {}, cancelToken = '', headers}) {
    const config = {
            ...baseConfig,
            url,
            data,
            headers,
            cancelToken,
            method: 'post',
    }
    
    return request(config)

}



export function jsonP(url) {
    return new Promise((resolve, reject) => {
            jsonp(url, null, (err, res) => {
                    if (err) {
                            reject(err)
                    } else {
                            resolve(res)
                    }
            })
    })
}
