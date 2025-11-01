// DateList.tsx
import './index.css';

export default function DateList() {
  const dates = [
    "2025-10-05T10:00:00",
    "2025-11-02T14:30:00",
    "2025-12-25T09:15:00"
  ];

  const formatDate = (isoString: string): string => {
    return new Date(isoString).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <ul className='text-center'>
      {dates.map((dateStr, index) => (
        <li key={index}>
          <time>{formatDate(dateStr)}</time>
        </li>
      ))}
    </ul>
  );
}