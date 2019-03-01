
/**
 * 根据业务对http请求进行进一步封装
 */


import {get,post,jsonP} from './base/http'
import {getAaceApi, getJavaApi} from './api'
import native from '@xm/native'
import { ERROR_NETWORK_MSG } from '../constant'


 /**
 * 例子：根据业务需要封装post请求
 * @param {String} url                 
 * @param {Object} data 
 * @param {String} type                   //用于区分C++接口以及java接口，做不同的处理
 * @param {String} cancelToken            //用于取消请求，不常用
 * 
 */

export function httpPost(url, data, type = 'c', cancelToken = '') {
    return new Promise((resolve, reject) => {
        
        //todo 对请求头扩展,如content-type修改
        const headers = {
            //....
        }

        //todo 根据全局配置mock开关改变url
        
        //todo 对data处理，如序列化等
        
        post({
            url,
            data,
            headers,
            cancelToken
        })
        .then(res => {
            const response = handleResponse(res)
            if(response.success) {
                resolve(response.data)
            } else {
                reject(response.msg)
            }
        })
        .catch(err => {
            //todo 错误日志收集
            native.toast(ERROR_NETWORK_MSG)
            reject(err)
        })
    })
}


/**
 * 抹平C++与java接口的差异，返回统一格式的结构体
 * @param {*} res 
 * @param {*} type 
 */
function handleResponse(res, type) {
    if(type === 'c') {
        if(res.retcode === 0) {
            return {
                success: true,
                data: res.data,
                msg: 'success'
            }
        } else {
            return {
                success: false,
                msg: getErrorMsg(+res.retcode)
            } 
        }
    } else if(type === 'java') {
        // 假设java返回格式为{code, data, msg}
        if(res.code === 200) {
            return {              
                ...res,  
                success: true, 
            }
        } else {
            return {
                ...res,
                success: false,
            }   
        }
    }
}


function getErrorMsg(code) {
    
    let msg = ''

    switch(code) {
        case 90001: 
            msg = 'XXXX超时'
            break
       
        case 90002: 
            msg = '不知道'
            break
        
        case 90008: 
            msg = '也不知道'
            break
        
        case 90006:
            msg = '.....'
            break
        
        default:
    }

    return msg
}

