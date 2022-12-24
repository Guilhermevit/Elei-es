export default function Elected({ elected = false }) {
  const text = elected ? 'Eleito' : 'Não eleito';

  const colorClass = elected ? 'text-green-500' : 'text-red-700';

  return (
    <span className={`text-lg text-center font-semibold ${colorClass}`}>
      {text}
    </span>
  );
}
