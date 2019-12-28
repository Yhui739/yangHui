/*
 * @Author: YangHt 
 * 商家API
 * @Date: 2019-12-25 09:03:27 
 * @Last Modified by: YangHt
 * @Last Modified time: 2019-12-25 10:45:55
 */
import axios from '@/utils/axios';
/**
 * 通过ID删除商家信息
 * @param {Object} param {id:''}
 */
export  function deleteBusinessById(param) {
    return  axios.post('/Business/deleteById',param);
    
  } 
/**
 * 查找所有商家信息
 * 
 */
export  function findAllBusiness() {
    return  axios.get('/Business/findAll');
    
  } 
 /**
  * 通过城市查找商家信息
  * @param {object} param 
  * {city:''}
  */
export  function findBusinessByCity(param) {
    return  axios.get('/Business/findByCity',{params:param});
    
  } 
/**
  * 通过ID查找商家信息
  * @param {object} param 
  * {id:''}
  */
  export  function findBusinessById(param) {
    return  axios.get('/Business/findById',{params:param});
    
  } 

 /**
  * 通过行业查找商家信息
  * @param {object} param 
  * {Industry:''}
  */
  export  function findBusinesByIndustry(param) {
    return  axios.get('/Business/findByIndustry',{params:param});
    
  } 

   /**
  * 通过位置查找商家信息
  * @param {object} param 
  * {Location:''}
  */
 
 export  function findBusinessByLocation(param) {
    return  axios.get('/Business/findByLocation',{params:param});
    
  } 

    /**
  * 通过省份查找商家信息
  * 
  * {Province:''}
  */
 
 export  function findBusinessByProvince(param) {
    return  axios.get('/Business/findByProvince',{params:param});
    
  } 

    /**
  * 通过省份查找商家信息
  * 
  * {Province:''}
  */
 
// export function findBusinessByProvince(param) {
//     return  axios.get('/Business/findByProvince',{params:param});
    
//   } 

 
/**
  * 通过规模查找商家信息
  * @param {object} param 
  * {Scale:''}
  */
 
 export  function findBusinessByScale(param) {
    return  axios.get('/Business/findByScale',{params:param});
    
  } 


  /**
  * 保存过更改商家信息
  * @param {object} param 
  * {Scale:''}
  */

 export  function saveOrUpdateBusiness(param) {
    return  axios.post('/Business/saveOrUpdate',param);
    
  } 