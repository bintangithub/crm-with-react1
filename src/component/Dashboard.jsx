import React, {useState, useEffect}from 'react';
import Card from "./Card"
import "./dashboard.css"
import Reports from './Reports';
import RecentSales from './RecentSales';
function Dashboard() {
    const [cards, setCards] = useState([])
    const fetchData = () => {
        fetch('http://localhost:4000/cards')
            .then(res => res.json()) // Proses respons menjadi JSON
            .then(data => {
                setCards(data); // Simpan data ke state
                console.log(data); // Cetak data untuk debugging
            })
            .catch(e => console.log(e.message)); // Tangani kesalahan
    };
    
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <section>
        <div className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length>0 &&
                            cards.map(card=><Card key={card._id} card={card}/>)
                        }
                        <div className="col-12">
                            <Reports/>
                        </div>
                        <div className="col-12">
                            <RecentSales/>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard