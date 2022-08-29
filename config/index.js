export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxefe7fd2bf59f5a82",
    // 公众号APP_SECRET
    APP_SECRET: "574806a3d4c70ab1dfb359f974c4a535",
    // 模板消息id
    TEMPLATE_ID: "oHbSK5gmrENxH1cIgEDtFkANPYOQ",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["yp18590261260"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "安徽",
    // 所在城市
    CITY: "滁州",

    /** 生日相关 */

    // 生日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    BIRTHDAYS: [
      {"name": "小陈", "year": "2023", "date": "02-21"},
    

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2022-05-21",
   


    /** 好文节选 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE: "有意义的人等再久都不算久，爱只会在没见面的日子里更加浓烈。It's never too long to wait for a meaningful person. Love will only grow stronger in the days when we haven't met."


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们结婚的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
