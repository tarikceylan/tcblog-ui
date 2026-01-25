export const formatDate = (TZDate: Date) => {
  const date = new Date(TZDate);
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
};
