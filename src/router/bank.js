// noRequireAuth  是否需要登录   true  为不是 必须登录
/**
 *  /wechat/subpage/bannk_ud_photos     身份证上传
*/
export default [ {
  path: '/wechat/subpage/bannk_ud_photos',
  name: 'bannk_ud_photos',
  meta: {
    title: '申请解绑',
    noRequireAuth: false
  },
  component: resolve => require(['@/components/wechat/subpage/bank_ud_photos'], resolve)
}]
