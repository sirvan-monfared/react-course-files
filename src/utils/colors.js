export const getUrgencyColor = (urgency) => {
  if (urgency >= 150) return "bg-red-500";
  if (urgency >= 100) return "bg-orange-500";
  if (urgency >= 60) return "bg-yellow-500";
  if (urgency >= 40) return "bg-blue-500";
  return "bg-green-500";
};

export const getImportanceColor = (importance) => {
  const colors = {
    1: "bg-gray-300",
    2: "bg-blue-300",
    3: "bg-yellow-300",
    4: "bg-orange-300",
    5: "bg-red-300",
  };
  return colors[importance] || colors[3];
};
