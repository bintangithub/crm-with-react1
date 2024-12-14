import React, {useState, useEffect}from 'react';

function Dashboard() {
    const [cards, setCards] = useState([])
    const fetchData = ()=>{
        fetch('http://localhost:4000/cards')
        .then(res=> res.join())
        .then(data=>{
            setCards(data);
        })
        .catch(e => console.log(e.message))
    }
    useEffect(()=>{
        fetchData();
    },[])
    
  return (
    <section>
        <div className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row"></div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    </section>
  )
}

export default Dashboard