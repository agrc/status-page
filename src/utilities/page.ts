export const createIdFromTitle = (title: string) => {
  let kebab = title.toLowerCase().replace(/ /g, '-');
  kebab = kebab.replace(/[^a-zA-Z0-9-]/g, '');

  return kebab;
};

export const getDateParts = (date: Date) => {
  const day = date.toLocaleDateString('en-us', {
    day: 'numeric',
    timeZone: 'UTC',
  });
  const month = date.toLocaleDateString('en-us', {
    month: 'short',
    timeZone: 'UTC',
  });
  const year = date.toLocaleDateString('en-us', {
    year: 'numeric',
    timeZone: 'UTC',
  });

  return {
    day,
    month,
    year,
  };
};
