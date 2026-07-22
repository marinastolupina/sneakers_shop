import './Sort.css';

interface SortProps {
  value: string;
  onChange: (value: string) => void;
}

export const Sort = ({ value, onChange }: SortProps) => {
  return (
    <div className="sort">
      <span className="sort__label">Сортировка:</span>
      <select 
        className="sort__select" 
        value={value} 
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="default">По умолчанию</option>
        <option value="asc">По возрастанию цены</option>
        <option value="desc">По убыванию цены</option>
      </select>
    </div>
  );
};