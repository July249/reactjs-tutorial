import { useRecoilState, useRecoilValue } from 'recoil';
import { minutesState, hourSelector } from './atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(+event.currentTarget.value);

    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input type='number' value={minutes} onChange={onMinutesChange} placeholder='Minutes' />
      <input type='number' value={hours} placeholder='Hours' />
    </div>
  );
}

export default App;
