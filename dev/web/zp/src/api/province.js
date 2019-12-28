/*
 * @Author: liuyr 
 * 省份模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: YangHt
 * @Last Modified time: 2019-12-25 10:05:46
 */
import axios from '@/utils/axios'
/* 查找数据 */
export  function findAllProvince() {
  return  axios.get('/Province/findAll');
  
} 
/**
 * 通过ID删除省份信息
 * @param {Object} param {id:''}
 */
export  function deleteProvinceById(param) {
  return  axios.post('Province/deleteById',param);
  
} 

/**
  * 通过ID查找省份信息
  * @param {object} param 
  * {id:''}
  */
 export  function findProvinceById(param) {
  return  axios.get('/Province/findById',{params:param});
  
} 


  /**
  * 保存过更改省份信息
  * @param {object} param 
  * {Scale:''}
  */

 export  function saveOrUpdateProvince(param) {
  return  axios.post('/Province/saveOrUpdate',param);
  
} 