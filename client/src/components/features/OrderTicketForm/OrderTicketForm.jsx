import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SeatChooser from '../SeatChooser/SeatChooser';
import { addSeatRequest, getRequests } from '../../../redux/seatsRedux';
import styles from './OrderTicketForm.module.scss';
import BookingDetailsCard from '../BookingDetailsCard/BookingDetailsCard';
import VipUpgradeCard from '../VipUpgradeCard/VipUpgradeCard';

export default function OrderTicketForm() {
  const dispatch = useDispatch();
  const requests = useSelector(getRequests);

  const [order, setOrder] = useState({
    client: '',
    email: '',
    day: 1,
    seat: '',
  });

  const [isError, setIsError] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const updateSeat = (e, seatId) => {
    e.preventDefault();
    setOrder((prev) => ({ ...prev, seat: seatId }));
  };

  const updateTextField = ({ target }) => {
    const { value, name } = target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const updateNumberField = ({ target }) => {
    const { value, name } = target;
    setOrder((prev) => ({ ...prev, [name]: parseInt(value, 10), seat: '' }));
  };

  const addSeat = requests?.ADD_SEAT;

  const canSubmit = useMemo(() => {
    return Boolean(
      order.client &&
      order.email &&
      order.day &&
      order.seat &&
      accepted &&
      !addSeat?.pending,
    );
  }, [order, accepted, addSeat?.pending]);

  const submitForm = async (e) => {
    e.preventDefault();

    if (canSubmit) {
      await dispatch(addSeatRequest(order));
      setOrder({ client: '', email: '', day: 1, seat: '' });
      setAccepted(false);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  const pricesByDay = {
    1: 25,
    2: 35,
    3: 50,
  };

  const totalPrice = pricesByDay[order.day] ?? 0;

  return (
    <form className={styles.form} onSubmit={submitForm}>
      <div className={styles.grid}>
        <section className={styles.leftColumn}>
          <BookingDetailsCard
            order={order}
            accepted={accepted}
            setAccepted={setAccepted}
            isError={isError}
            addSeat={addSeat}
            canSubmit={canSubmit}
            totalPrice={totalPrice}
            updateTextField={updateTextField}
            updateNumberField={updateNumberField}
          />
          <VipUpgradeCard />
        </section>

        <aside className={styles.side}>
          <div className={styles.sideCard}>
            <div className={styles.sideHeader}>
              <h2 className={styles.sideTitle}>Choose your seat</h2>
            </div>

            <SeatChooser
              chosenDay={order.day}
              chosenSeat={order.seat}
              updateSeat={updateSeat}
            />
          </div>
        </aside>
      </div>
    </form>
  );
}
