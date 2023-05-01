import { useRecoilState } from 'recoil';
import { minutesState, hourSelector } from './atoms';

function App() {
  const [minutes, setMinutes] = useRecoilState(minutesState);
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input type='number' value={minutes} onChange={onMinutesChange} placeholder='Minutes' />
      <input type='number' value={hours} onChange={onHoursChange} placeholder='Hours' />
    </div>
  );
}

export default App;
