import { useState } from 'react';
import { Button } from '../components/Button';
import { Radio } from '../components/Radio';

export const AllComponentsView = (): JSX.Element => {
  const onClick = () => alert('Button clicked');

  const [radioValue, setRadioValue] = useState('None');

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
      }}
    >
      <Button label="Generate" onClick={onClick} />
      <Button label="Generate" onClick={onClick} type="primary" />
      <Radio
        label="Radio"
        options={[
          { label: '(None)', value: 'none' },
          { label: 'Cinematic', value: 'cinematic' },
          { label: 'Documentary', value: 'documentary' },
          { label: 'Educational', value: 'educational' },
        ]}
        value={radioValue}
        onChange={(value) => setRadioValue(value)}
      />
    </div>
  );
};
