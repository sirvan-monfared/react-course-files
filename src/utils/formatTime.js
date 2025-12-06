/**
 * Formats a timestamp into a readable date/time string
 * @param {number} timestamp - Unix timestamp in milliseconds
 * @returns {string} Formatted date/time string
 */
export function formatTime(timestamp) {
  if (!timestamp) return 'بدون تاریخ سررسید';
  
  const date = new Date(timestamp);
  const now = new Date();
  const diff = timestamp - now.getTime();
  
  // If due date is in the past
  if (diff < 0) {
    const daysAgo = Math.floor(Math.abs(diff) / (1000 * 60 * 60 * 24));
    if (daysAgo === 0) return 'امروز سررسید شده';
    if (daysAgo === 1) return 'دیروز سررسید شده';
    return `${daysAgo} روز پیش سررسید شده`;
  }
  
  // If due date is today
  if (date.toDateString() === now.toDateString()) {
    return `امروز ساعت ${date.toLocaleTimeString('fa-IR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })}`;
  }
  
  // If due date is tomorrow
  const tomorrow = new Date(now);
  tomorrow.setDate(tomorrow.getDate() + 1);
  if (date.toDateString() === tomorrow.toDateString()) {
    return `فردا ساعت ${date.toLocaleTimeString('fa-IR', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })}`;
  }
  
  // Otherwise, show full date
  return date.toLocaleString('fa-IR', {
    month: 'short',
    day: 'numeric',
    year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined,
    hour: '2-digit',
    minute: '2-digit'
  });
}

