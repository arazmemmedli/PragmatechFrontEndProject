import { useState } from 'react'
import Card from './Card';
import Modal from './Modal'
import './News.css'

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [modalInfo, setModalInfo] = useState()

    const [list, setList] = useState([
        { title: "Fleeing the desert's shifting sands", content: "Rising temperatures and desertification are forcing many Mauritanians to leave their ancestral homes in search of a better life.", category: "Science & Environment", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/182AD/production/_121098989_p09ysrpd.jpg" },
        { title: "Cambridge Uni's looted cockerel to be returned", content: "The Benin bronze, known as an 'okukor', was given to Jesus College in Cambridge in 1905.", category: "Cambridgeshire", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/38E9/production/_121096541_ba98aac9-3349-4290-be1c-d59c378509a5.jpg" },
        { title: "Sir Elton John scores first number one in 16 years", content: "The rock star topped the UK singles chart with Cold Heart, with the help of collaborator Dua Lipa.", category: "Entertainment & Arts", imgSrc: "https://ichef.bbc.co.uk/wwhp/624/cpsprodpb/7030/production/_121102782_eltonjohnofficialnumber1singleaward-coldheartpnauremix.jpg" },
    ])

    const clickEvent = (index)=>{
        const ad = list[index]
        setModalInfo(ad);
        setIsOpen(true);
    }

    return (
        <div className="main">
            <div className="main__header">
                <h3 className = "main__title">News</h3>
            </div>
            <div className="main__container">
                {list.map((data, index) => <Card onClick={()=>{clickEvent(index)}} title={data.title} content={data.content} category={data.category} imgSrc={data.imgSrc}></Card>)}
            </div>
            { isOpen && <Modal {...modalInfo} closeOpen={setIsOpen} />}
        </div>
    )
}


export default Header;
