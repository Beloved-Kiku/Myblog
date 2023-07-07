import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday"; // 导入 weekday 插件
dayjs.extend(weekday); // 启用 weekday 插件
import { ref, Ref } from "vue";
interface DateType {
  currentDateFormat: string;
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  currentWeekDay: string;
}
const WeekArray: string[] = [
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
  "星期天",
];
export default function getCurrent(): DateType {
  const currentDate = dayjs(); // 获取当前时间
  const currentYear = currentDate.year(); // 获取年份
  const currentMonth = currentDate.month() + 1; // 获取月份（注意要加1，因为月份是从0开始计数的）
  const currentDay = currentDate.date(); // 获取日期
  const currentWeekDay = currentDate.weekday(); //获取周几
  let currentDateFormat = currentDate.format("HH:mm:ss");
  const DateRef: Ref<DateType> = ref({
    currentDateFormat,
    currentYear,
    currentMonth,
    currentDay,
    currentWeekDay: [WeekArray[currentWeekDay]].toString(),
  });
  return DateRef.value;
}
