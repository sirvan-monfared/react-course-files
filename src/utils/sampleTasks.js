export const SAMPLE_TASKS = [
  {
    id: "1",
    title: "به‌روزرسانی مستندات",
    description: "به‌روزرسانی مستندات API با آخرین تغییرات",
    importance: 3,
    urgency: 75.8,
    dueDate: null,
  },
  {
    id: "2",
    title: "تکمیل پیشنهاد پروژه",
    description: "نوشتن و ارسال پیشنهاد پروژه سه‌ماهه به تیم مدیریت",
    importance: 5,
    urgency: 185.5,
    dueDate: Date.now() + 86400000, // Tomorrow
  },
  {
    id: "3",
    title: "جلسه تیم",
    description: "جلسه هماهنگی هفتگی تیم",
    importance: 2,
    urgency: 45.2,
    dueDate: Date.now() - 86400000, // Yesterday (overdue)
  },
  {
    id: "4",
    title: "بررسی کد تیم",
    description: "بررسی درخواست‌های pull از تیم توسعه",
    importance: 4,
    urgency: 120.3,
    dueDate: Date.now() + 172800000, // 2 days
  },
];
