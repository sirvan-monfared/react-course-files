/**
 * Calculates urgency score for a task based on importance and due date
 * Higher score = more urgent
 * 
 * Formula:
 * - Base score: importance * 20 (1-5 importance = 20-100 base)
 * - Time bonus: decreases as deadline approaches
 * - Overdue penalty: increases urgency significantly
 * 
 * @param {Object} task - Task object with importance and dueDate
 * @param {number} currentTime - Current timestamp in milliseconds
 * @returns {number} Urgency score (0-200+)
 */
export function calculateUrgency(task, currentTime = null) {

  currentTime = currentTime || Date.now();
  console.log(currentTime)

  const { importance = 3, dueDate = null } = task;
  
  // Base urgency from importance (1-5 scale → 20-100 points)
  const baseUrgency = importance * 20;
  
  // If no due date, return base urgency
  if (!dueDate) {
    return baseUrgency;
  }
  
  const timeUntilDue = dueDate - currentTime;
  const hoursUntilDue = timeUntilDue / (1000 * 60 * 60);
  
  // Task is overdue
  if (timeUntilDue < 0) {
    const hoursOverdue = Math.abs(hoursUntilDue);
    // Overdue tasks get massive urgency boost
    // More overdue = higher urgency (capped at +100)
    const overdueBonus = Math.min(hoursOverdue * 2, 100);
    return baseUrgency + overdueBonus;
  }
  
  // Task is due soon (within 24 hours)
  if (hoursUntilDue <= 24) {
    // Urgency increases as deadline approaches
    // 24 hours = +50, 0 hours = +100
    const timeBonus = 100 - (hoursUntilDue / 24) * 50;
    return baseUrgency + timeBonus;
  }
  
  // Task is due within a week
  if (hoursUntilDue <= 168) { // 7 days
    const daysUntilDue = hoursUntilDue / 24;
    // 7 days = +20, 1 day = +50
    const timeBonus = 20 + ((7 - daysUntilDue) / 6) * 30;
    return baseUrgency + timeBonus;
  }
  
  // Task is more than a week away
  // Small bonus that decreases with time
  const weeksUntilDue = hoursUntilDue / (24 * 7);
  const timeBonus = Math.max(10 - weeksUntilDue, 0);
  return baseUrgency + timeBonus;
}

