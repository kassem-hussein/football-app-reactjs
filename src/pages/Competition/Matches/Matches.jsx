import React from 'react';
import MATCH from '../../../components/Match/MATCH';
import Competition from '../Competition';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './Matches.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Matches = () => {
  let from;
  let to;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const submitDate = (e) => {
    e.preventDefault();
    if (show) {
      setShow(false);
    }
    from = e.target[0].value;
    to = e.target[1].value;
    changeURL();
  };
  const [data, setdata] = useState({});
  let id = useParams().id;
  if (id === 'EL') {
    id = 'EC';
  } else if (id === 'qatar') {
    id = 'WC';
  }
  let url = `https://api.football-data.org/v4/competitions/${id}/matches`;

  const changeURL = () => {
    url = `https://api.football-data.org/v4/competitions/${id}/matches/?dateFrom=${from}&dateTo=${to}`;
    getData();
  };

  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get(url, {
      mode: 'no-cors',
      headers: {
        'X-Auth-Token': process.env.REACT_APP_FOOTBALL_API_KEY,
        'Access-Control-Allow-Origin': '*',
      },
    });

    setdata(respon.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, [data]);
  return (
    <div>
      <Competition state4="active" />
      <div>
        <div className="container">
          <h3>Matches</h3>

          {loadData ? (
            <span class="loader"></span>
          ) : (
            <div className="d-flex">
              <form onSubmit={submitDate} className="filter">
                <label for="from" className="me-2">
                  From
                </label>
                <input
                  className="form-control"
                  type="date"
                  name="from"
                  id="from"
                />
                <label for="to" className="ms-2 me-2">
                  To
                </label>
                <input className="form-control" type="date" name="to" id="to" />
                <button className="ms-1 btn btn-warning" type="submit">
                  Filter
                </button>
              </form>
              <button
                className="btn btn-warning m-dis"
                onClick={() => setLoad(true)}
              >
                ALL Matches
              </button>
              <button
                className="btn btn-warning m-btn-to-modal"
                onClick={handleShow}
              >
                filter
              </button>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Filter Date</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={submitDate}>
                    <label for="from" className="mb-3">
                      From
                    </label>
                    <input
                      className="form-control mb-3"
                      type="date"
                      name="from"
                      id="from"
                    />
                    <label for="to" className="mb-3">
                      To
                    </label>
                    <input
                      className="form-control mb-3"
                      type="date"
                      name="to"
                      id="to"
                    />
                    <button className="btn btn-warning" type="submit">
                      Filter
                    </button>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="warning" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="warning" onClick={() => setLoad(true)}>
                    ALL Matches
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
        </div>
        <div>
          {data?.matches?.map((v) => {
            let timer = new Date(v?.utcDate);
            let Mtime;
            if (timer?.getMinutes() < 10) {
              Mtime =
                timer?.getDate() +
                '/' +
                (timer?.getMonth() + 1) +
                '/' +
                timer?.getFullYear() +
                ' ' +
                timer?.getHours() +
                ':0' +
                timer?.getMinutes();
            } else {
              Mtime =
                timer?.getDay() +
                1 +
                '/' +
                (timer?.getMonth() + 1) +
                '/' +
                timer?.getFullYear() +
                ' ' +
                timer?.getHours() +
                ':' +
                timer?.getMinutes();
            }

            return (
              <Link
                to={`/match/${v.id}`}
                style={{ textDecoration: 'none', color: 'black' }}
              >
                <MATCH
                  away={v.awayTeam.crest}
                  awayname={v.awayTeam.shortName}
                  homename={v.homeTeam.shortName}
                  home={v.homeTeam.crest}
                  lname={v.competition.name}
                  ltime={v.status !== 'FINISHED' ? Mtime : v.status}
                  away_scoure={v.score.fullTime.away}
                  home_scoure={v.score.fullTime.home}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Matches;
