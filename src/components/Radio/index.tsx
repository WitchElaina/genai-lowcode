import './style.css';

export interface RadioProps {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange?: (value: string) => void;
}

export const Radio = (props: RadioProps): JSX.Element => {
  const { label, options, value, onChange } = props;

  const onSelected = (value: string) => {
    console.log('Radio Value Changed', value);
    onChange && onChange(value);
  };

  return (
    <div className="genai-radio-group">
      <span className="genai-item-label">{label}</span>
      <div className="genai-radio-wrapper">
        {options.map((option) => (
          <label
            className={`genai-radio-label ${
              value === option.value ? 'selected' : ''
            }`}
            key={option.value}
          >
            <input
              type="radio"
              value={option.value}
              checked={value === option.value}
              onChange={() => onSelected(option.value)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};
