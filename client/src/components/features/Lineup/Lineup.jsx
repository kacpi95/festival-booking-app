import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Concerts from './../Concerts/Concerts';
import {
  getConcerts,
  getRequest,
  loadConcertsRequest,
} from '../../../redux/concertsRedux';
import AlertBox from '../../ui/AlertBox/AlertBox';
import SkeletonGrid from '../../ui/SkeletonGrid/SkeletonGrid';
import EmptyState from '../../ui/EmptyState/EmptyState';
import styles from './Lineup.module.scss';

export default function Lineup() {
  const dispatch = useDispatch();
  const concerts = useSelector(getConcerts);
  const request = useSelector(getRequest);

  const [q, setQ] = useState('');
  const [day, setDay] = useState('all');

  useEffect(() => {
    dispatch(loadConcertsRequest());
  }, [dispatch]);

  const filtered = useMemo(() => {
    return concerts.filter((concert) => {
      const matchesQuery = concert.performer
        .trim()
        .toLowerCase()
        .includes(q.toLowerCase());

      const matchesDay = day === 'all' || String(concert.day) === day;

      return matchesQuery && matchesDay;
    });
  }, [concerts, q, day]);

  const showNoData = request.success && concerts.length === 0;
  const showNoMatches =
    request.success && concerts.length > 0 && filtered.length === 0;

  return (
    <div className={styles.lineup}>
      <div className={styles.topBar}>
        <div className={styles.searchBox}>
          <input
            className={styles.input}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Search artist...'
            aria-label='Search artist'
          />
        </div>

        <div className={styles.filters}>
          <button
            type='button'
            className={`${styles.filterButton} ${
              day === 'all' ? styles.active : ''
            }`}
            onClick={() => setDay('all')}
          >
            All days
          </button>
          <button
            type='button'
            className={`${styles.filterButton} ${
              day === '1' ? styles.active : ''
            }`}
            onClick={() => setDay('1')}
          >
            Friday
          </button>
          <button
            type='button'
            className={`${styles.filterButton} ${
              day === '2' ? styles.active : ''
            }`}
            onClick={() => setDay('2')}
          >
            Saturday
          </button>
          <button
            type='button'
            className={`${styles.filterButton} ${
              day === '3' ? styles.active : ''
            }`}
            onClick={() => setDay('3')}
          >
            Sunday
          </button>
        </div>
      </div>

      {request.pending && <SkeletonGrid count={6} />}
      {request.error && <AlertBox variant='warning'>{request.error}</AlertBox>}

      {showNoData && (
        <EmptyState title='No concerts yet' description='Try again later.' />
      )}

      {showNoMatches && (
        <div className={styles.noMatches}>
          <EmptyState
            title='No matches found'
            description='Try another search or change the selected day.'
          />
          <button
            type='button'
            className={styles.clearButton}
            onClick={() => {
              setQ('');
              setDay('all');
            }}
          >
            Clear filters
          </button>
        </div>
      )}

      {request.success && filtered.length > 0 && (
        <Concerts concerts={filtered} />
      )}
    </div>
  );
}
