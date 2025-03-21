/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx04b18fa552d2e558',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1e9f3ed5e4041f0fde0f378df647e466',
  PROVINCE: '四川',
  CITY: '广安',
  USERS: [
    {
      // 想要发送的人的名字
      name: '顺顺丽丽叶胖子',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'o1izq66rREbiVZIU_lQpoh_KASXM',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'pzrBx3L25hsmO18E41gVg8wigVGVuIsM29i63TH_Cig',
      festivals: [
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '顺顺', year: '1999', date: '03-28',
        },
        {
          type: '节日', name: '相识纪念日', year: '2022', date: '04-22',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-04-22' },
      ],
    },
  ],
  
  // // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  // CALLBACK_TEMPLATE_ID: 'WOf6q0ufOda3YJ-gZO4umUO1AO8iY4lo77HNQBxDEEI',

  // CALLBACK_USERS: [
  //   {
  //     name: '今天刷leetcode了吗',
  //     // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
  //     id: 'o1izq6-Xl94IR1uydmtOv72DXEzQ',
  //   }
  // ],

}

module.exports = USER_CONFIG

