import axios from 'axios';
const request = (url, data = {}, method = 'get') => {
  return new Promise((resolve, reject) => {
    axios({method,url,data})
      .then(res=>{
        if(res.flag === 1) {
          resolve(res);
        }else{
          reject(res.msg);
        }
      })
      .catch(err=>{
        reject(err);
      });
  });
}; 
const post = (url, data) => {
  return request(url, data, 'post');
};
const get = (url, data) => {
  return request(url, data, 'get');
};
export {
  get,
  post
};
