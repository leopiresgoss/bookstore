import { useDispatch } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const StatusButton = () => {
  const dispatch = useDispatch();

  const click = () => dispatch(checkStatusAction());
  return (
    <button type="button" className="check-status" onClick={click}>Check Status</button>
  );
};

export default StatusButton;
