import request from 'apis/base';
import axios from 'axios';

// export const duplicationCheck = async (id: string) => {
//   return await request({
//     method: 'POST',
//     url: '/user/idcheck',
//     data: { loginId: id },
//   });
// };

export const duplicationCheck = async (id: string) => {
  console.log(id);
  await axios.post('125.129.16.102:8080/user/idcheck', {
    loginId: id,
  });
};
