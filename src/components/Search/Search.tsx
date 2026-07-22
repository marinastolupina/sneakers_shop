import './Search.css';

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

export const Search = ({ value, onChange }: SearchProps) => {
  return (
    <div className="search">
      <input 
        type="text" 
        className="search__input"
        placeholder="Поиск по названию или бренду..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="search__clear" onClick={() => onChange('')}>
          ✕
        </button>
      )}
    </div>
  );
};