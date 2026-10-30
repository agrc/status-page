const setDatePart = (time: HTMLTimeElement, part: string, value: string) => {
  const element = time.querySelector(`[data-date-part="${part}"]`);

  if (!element) {
    throw new Error(`Missing date part "${part}" for local time format "${time.dataset.localFormat}"`);
  }

  element.textContent = value;
};

export const localizeTimes = () => {
  document.querySelectorAll<HTMLTimeElement>('time[data-local-format]').forEach((time) => {
    const date = new Date(time.dateTime);

    switch (time.dataset.localFormat) {
      case 'long':
        {
          const value = date.toLocaleDateString('en-US', {
            month: 'short',
            year: 'numeric',
            day: 'numeric',
          });
          setDatePart(time, 'long-date', value);
          time.setAttribute('aria-label', value);
        }
        break;
      case 'short':
      case 'short-with-year':
        setDatePart(
          time,
          'month',
          date.toLocaleDateString('en-US', {
            month: 'short',
          }),
        );
        setDatePart(
          time,
          'day',
          date.toLocaleDateString('en-US', {
            day: 'numeric',
          }),
        );

        if (time.dataset.localFormat === 'short-with-year') {
          setDatePart(
            time,
            'year',
            date.toLocaleDateString('en-US', {
              year: 'numeric',
            }),
          );
        }
        time.setAttribute(
          'aria-label',
          date.toLocaleDateString(
            'en-US',
            time.dataset.localFormat === 'short-with-year'
              ? { month: 'short', day: 'numeric', year: 'numeric' }
              : { month: 'short', day: 'numeric' },
          ),
        );
        break;
      case 'incident-card':
        setDatePart(
          time,
          'year',
          date.toLocaleDateString('en-US', {
            year: 'numeric',
          }),
        );
        setDatePart(
          time,
          'month-day',
          date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
          }),
        );
        time.setAttribute(
          'aria-label',
          date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }),
        );
        break;
      case 'date-time':
        {
          const value = `${date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          })} at ${date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
          })}`;
          time.textContent = value;
          time.setAttribute('aria-label', value);
        }
        break;
      default:
        throw new Error(`Unknown local time format "${time.dataset.localFormat}"`);
    }
  });
};
