import React from 'react';
import { NEWC } from '../../../components';
import './News.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
const News = () => {
  const key = process.env.REACT_APP_NEWS_API_KEY;
  console.log(key)
  const url =`https://newsapi.org/v2/everything?q=football&apiKey=${key}`
  const [data, setdata] = useState();
  const [loadData, setLoad] = useState(true);
  const getData = async () => {
    const respon = await axios.get(url);
    setdata(respon.data);
    setLoad(false);
  };
  useEffect(() => {
    getData();
  }, [loadData]);
  return (
    <div className="container flex-column mt-5 ">
      <div>
        <h3 className="mb-4">News</h3>
        <div>
          {
            loadData?<span class="loader"></span>:
            data?.articles?.map((r) => {
              let date = new Date(r?.publishedAt);
              date =
                date.getDate() +
                '-' +
                (date.getMonth() + 1) +
                '-' +
                date.getFullYear() +
                ' ' +
                date.getHours() +
                ':' +
                date.getMinutes();
              return (
                <NEWC key={r.id}
                  date={date}
                  desc={r?.content}
                  image={r?.urlToImage}
                  title={r?.title}
                />
              );
            })
          }
        </div>
      </div>
        
      </div>
  );
};

export default News;
