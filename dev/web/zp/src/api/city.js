/*
 * @Author: liuyr 
 * 城市模块API
 * @Date: 2019-12-22 18:54:17 
 * @Last Modified by: YangHt
 * @Last Modified time: 2019-12-25 09:34:39
 */
import axios from '@/utils/axios'
/* 查找数据 */
export  function findAllCity() {
  return  axios.get('/City/findAll');
  
} 
/**
 * 通过ID删除城市信息
 * @param {Object} param {id:''}
 */
export  function deleteCityById(param) {
  return  axios.post('City/deleteById',param);
  
} 

/**
  * 通过ID查找城市信息
  * @param {object} param 
  * {id:''}
  */
 export  function findCityById(param) {
  return  axios.get('/City/findById',{params:param});
  
} 
  /**
  * 通过省份查找城市信息
  * @param {object} param 
  * {Province:''}
  */
 
 export  function findCityByProvince(param) {
  return  axios.get('/City/findByProvince',{params:param});
  
} 

  /**
  * 保存过更改城市信息
  * @param {object} param 
  * {Scale:''}
  */

 export  function saveOrUpdateCity(param) {
  return  axios.post('/City/saveOrUpdate',param);
  
} 